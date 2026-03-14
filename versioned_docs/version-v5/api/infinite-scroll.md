---
title: '无限滚动 | ion-infinite-scroll 操作组件'
description: 'ion-infinite-scroll 组件会在用户滚动到距离页面底部或顶部指定距离时，触发一个待执行的操作。'
sidebar_label: 'ion-infinite-scroll'
demoUrl: '/docs/demos/api/infinite-scroll/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/infinite-scroll/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/infinite-scroll/props.md';
import Events from '@ionic-internal/component-api/v5/infinite-scroll/events.md';
import Methods from '@ionic-internal/component-api/v5/infinite-scroll/methods.md';
import Parts from '@ionic-internal/component-api/v5/infinite-scroll/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/infinite-scroll/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/infinite-scroll/slots.md';

# ion-infinite-scroll

无限滚动组件会在用户滚动到距离页面底部或顶部指定距离时，触发一个待执行的操作。

当用户到达定义的距离时，分配给 `ionInfinite` 事件的表达式将被调用。当该表达式完成所有任务后，应在无限滚动实例上调用 `complete()` 方法。

## 无限滚动内容

`ion-infinite-scroll` 组件包含无限滚动的逻辑。它需要一个子组件来显示内容。Ionic 默认使用其 `ion-infinite-scroll-content` 组件。该组件根据无限滚动的状态显示并改变外观。它显示一个基于用户所在平台效果最佳的加载指示器。但是，可以通过设置 `ion-infinite-scroll-content` 组件的属性来更改默认的加载指示器并添加文本。

## 自定义内容

将 `ion-infinite-scroll` 和 `ion-infinite-scroll-content` 组件分离，允许开发者根据需要创建自己的内容组件。这些内容可以包含任何元素，从 SVG 元素到具有独特 CSS 动画的元素都可以。

## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'ANGULAR' }, { value: 'javascript', label: 'JAVASCRIPT' }, { value: 'stencil', label: 'STENCIL' }, { value: 'vue', label: 'VUE' }]}>

<TabItem value="angular">

```html
<ion-content>
  <ion-button (click)="toggleInfiniteScroll()" expand="block"> 切换无限滚动 </ion-button>

  <ion-list></ion-list>

  <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)">
    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="正在加载更多数据...">
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

```tsx
import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'infinite-scroll-example',
  templateUrl: 'infinite-scroll-example.html',
  styleUrls: ['./infinite-scroll-example.css'],
})
export class InfiniteScrollExample {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() {}

  loadData(event) {
    setTimeout(() => {
      console.log('完成');
      event.target.complete();

      // 应用逻辑判断所有数据是否已加载完毕
      // 并禁用无限滚动
      if (data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
```

</TabItem>

<TabItem value="javascript">

```html
<ion-content>
  <ion-button onClick="toggleInfiniteScroll()" expand="block"> 切换无限滚动 </ion-button>

  <ion-list></ion-list>

  <ion-infinite-scroll threshold="100px" id="infinite-scroll">
    <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="正在加载更多数据...">
    </ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content>
```

```javascript
const infiniteScroll = document.getElementById('infinite-scroll');

infiniteScroll.addEventListener('ionInfinite', function (event) {
  setTimeout(function () {
    console.log('完成');
    event.target.complete();

    // 应用逻辑判断所有数据是否已加载完毕
    // 并禁用无限滚动
    if (data.length == 1000) {
      event.target.disabled = true;
    }
  }, 500);
});

function toggleInfiniteScroll() {
  infiniteScroll.disabled = !infiniteScroll.disabled;
}
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'infinite-scroll-example',
  styleUrl: 'infinite-scroll-example.css',
})
export class InfiniteScrollExample {
  private infiniteScroll: HTMLIonInfiniteScrollElement;

  @State() data = [];

  componentWillLoad() {
    this.pushData();
  }

  pushData() {
    const max = this.data.length + 20;
    const min = max - 20;

    for (var i = min; i < max; i++) {
      this.data.push('项目 ' + i);
    }

    // Stencil 在向数组推送数据时不会重新渲染
    // 所以需要创建数组的新副本
    // https://stenciljs.com/docs/reactive-data#handling-arrays-and-objects
    this.data = [...this.data];
  }

  loadData(ev) {
    setTimeout(() => {
      this.pushData();
      console.log('数据已加载');
      ev.target.complete();

      // 应用逻辑判断所有数据是否已加载完毕
      // 并禁用无限滚动
      if (this.data.length == 1000) {
        ev.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  render() {
    return [
      <ion-content>
        <ion-button onClick={() => this.toggleInfiniteScroll()} expand="block">
          切换无限滚动
        </ion-button>

        <ion-list>
          {this.data.map((item) => (
            <ion-item>
              <ion-label>{item}</ion-label>
            </ion-item>
          ))}
        </ion-list>

        <ion-infinite-scroll ref={(el) => (this.infiniteScroll = el)} onIonInfinite={(ev) => this.loadData(ev)}>
          <ion-infinite-scroll-content
            loadingSpinner="bubbles"
            loadingText="正在加载更多数据..."
          ></ion-infinite-scroll-content>
        </ion-infinite-scroll>
      </ion-content>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-button @click="toggleInfiniteScroll" expand="block"> 切换无限滚动 </ion-button>

      <ion-list>
        <ion-item v-for="item in items" :key="item">
          <ion-label>{{ item }}</ion-label>
        </ion-item>
      </ion-list>

      <ion-infinite-scroll
        @ionInfinite="loadData($event)"
        threshold="100px"
        id="infinite-scroll"
        :disabled="isDisabled"
      >
        <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="正在加载更多数据...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import {
    IonButton,
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
  } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: {
      IonButton,
      IonContent,
      IonInfiniteScroll,
      IonInfiniteScrollContent,
      IonItem,
      IonLabel,
      IonList,
      IonPage,
    },
    setup() {
      const isDisabled = ref(false);
      const toggleInfiniteScroll = () => {
        isDisabled.value = !isDisabled.value;
      };
      const items = ref([]);
      const pushData = () => {
        const max = items.value.length + 20;
        const min = max - 20;
        for (let i = min; i < max; i++) {
          items.value.push(i);
        }
      };

      const loadData = (ev: CustomEvent) => {
        setTimeout(() => {
          pushData();
          console.log('数据已加载');
          ev.target.complete();

          // 应用逻辑判断所有数据是否已加载完毕
          // 并禁用无限滚动
          if (items.value.length == 1000) {
            ev.target.disabled = true;
          }
        }, 500);
      };

      pushData();

      return {
        isDisabled,
        toggleInfiniteScroll,
        loadData,
        items,
      };
    },
  });
</script>
```

</TabItem>

</Tabs>

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS Shadow Parts

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />
