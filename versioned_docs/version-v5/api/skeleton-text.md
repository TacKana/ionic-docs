---
title: '骨架文本 | 文本的骨架加载占位符与框架'
description: 'ion-skeleton-text 是一个用于渲染占位符内容的组件。该元素将以指定的宽度渲染一个灰色区块，作为文本的加载框架。'
sidebar_label: 'ion-skeleton-text'
demoUrl: '/docs/demos/api/skeleton-text/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/skeleton-text/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/skeleton-text/props.md';
import Events from '@ionic-internal/component-api/v5/skeleton-text/events.md';
import Methods from '@ionic-internal/component-api/v5/skeleton-text/methods.md';
import Parts from '@ionic-internal/component-api/v5/skeleton-text/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/skeleton-text/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/skeleton-text/slots.md';

# ion-skeleton-text

骨架文本是一个用于渲染占位符内容的组件。该元素将以指定的宽度渲染一个灰色区块。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 骨架屏加载完成后显示的数据 -->
<div *ngIf="data">
  <div class="ion-padding">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula.
    Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.
  </div>

  <ion-list>
    <ion-list-header>
      <ion-label> 数据 </ion-label>
    </ion-list-header>
    <ion-item>
      <ion-avatar slot="start">
        <img src="./avatar.svg" />
      </ion-avatar>
      <ion-label>
        <h3>{{ data.heading }}</h3>
        <p>{{ data.para1 }}</p>
        <p>{{ data.para2 }}</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-thumbnail slot="start">
        <img src="./thumbnail.svg" />
      </ion-thumbnail>
      <ion-label>
        <h3>{{ data.heading }}</h3>
        <p>{{ data.para1 }}</p>
        <p>{{ data.para2 }}</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-icon name="call" slot="start"></ion-icon>
      <ion-label>
        <h3>{{ data.heading }}</h3>
        <p>{{ data.para1 }}</p>
        <p>{{ data.para2 }}</p>
      </ion-label>
    </ion-item>
  </ion-list>
</div>

<!-- 骨架屏 -->
<div *ngIf="!data">
  <div class="ion-padding custom-skeleton">
    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
    <ion-skeleton-text animated></ion-skeleton-text>
    <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>
    <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
  </div>

  <ion-list>
    <ion-list-header>
      <ion-label>
        <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>
      </ion-label>
    </ion-list-header>
    <ion-item>
      <ion-avatar slot="start">
        <ion-skeleton-text animated></ion-skeleton-text>
      </ion-avatar>
      <ion-label>
        <h3>
          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
        </h3>
        <p>
          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-thumbnail slot="start">
        <ion-skeleton-text animated></ion-skeleton-text>
      </ion-thumbnail>
      <ion-label>
        <h3>
          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
        </h3>
        <p>
          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-skeleton-text animated style="width: 27px; height: 27px" slot="start"></ion-skeleton-text>
      <ion-label>
        <h3>
          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
        </h3>
        <p>
          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item>
  </ion-list>
</div>
```

```css
/* 自定义骨架文本的行高和外边距 */
.custom-skeleton ion-skeleton-text {
  line-height: 13px;
}

.custom-skeleton ion-skeleton-text:last-child {
  margin-bottom: 5px;
}
```

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'skeleton-text-example',
  templateUrl: 'skeleton-text-example.html',
  styleUrls: ['./skeleton-text-example.css'],
})
export class SkeletonTextExample {
  data: any;

  constructor() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        heading: '正常文本',
        para1: 'Lorem ipsum dolor sit amet, consectetur',
        para2: 'adipiscing elit.',
      };
    }, 5000);
  }
}
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 骨架屏加载完成后显示的数据 -->
<div id="data">
  <div class="ion-padding">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula.
    Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.
  </div>

  <ion-list>
    <ion-list-header>
      <ion-label> 数据 </ion-label>
    </ion-list-header>
    <ion-item>
      <ion-avatar slot="start">
        <img src="./avatar.svg" />
      </ion-avatar>
      <ion-label>
        <h3>正常文本</h3>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <p>adipiscing elit.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-thumbnail slot="start">
        <img src="./thumbnail.svg" />
      </ion-thumbnail>
      <ion-label>
        <h3>正常文本</h3>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <p>adipiscing elit.</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-icon name="call" slot="start"></ion-icon>
      <ion-label>
        <h3>正常文本</h3>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <p>adipiscing elit.</p>
      </ion-label>
    </ion-item>
  </ion-list>
</div>

<!-- 骨架屏 -->
<div id="skeleton">
  <div class="ion-padding custom-skeleton">
    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
    <ion-skeleton-text animated></ion-skeleton-text>
    <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>
    <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
  </div>

  <ion-list>
    <ion-list-header>
      <ion-label>
        <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>
      </ion-label>
    </ion-list-header>
    <ion-item>
      <ion-avatar slot="start">
        <ion-skeleton-text animated></ion-skeleton-text>
      </ion-avatar>
      <ion-label>
        <h3>
          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
        </h3>
        <p>
          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-thumbnail slot="start">
        <ion-skeleton-text animated></ion-skeleton-text>
      </ion-thumbnail>
      <ion-label>
        <h3>
          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
        </h3>
        <p>
          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-skeleton-text animated style="width: 27px; height: 27px" slot="start"></ion-skeleton-text>
      <ion-label>
        <h3>
          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
        </h3>
        <p>
          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item>
  </ion-list>
</div>
```

```css
#data {
  display: none;
}

/* 自定义骨架文本的行高和外边距 */
.custom-skeleton ion-skeleton-text {
  line-height: 13px;
}

.custom-skeleton ion-skeleton-text:last-child {
  margin-bottom: 5px;
}
```

```javascript
function onLoad() {
  const skeletonEl = document.getElementById('skeleton');
  const dataEl = document.getElementById('data');

  setTimeout(() => {
    skeletonEl.style.display = 'none';
    dataEl.style.display = 'block';
  }, 5000);
}
```

</TabItem>

<TabItem value="react">

```tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonItem,
  IonAvatar,
  IonLabel,
  IonSkeletonText,
  IonListHeader,
  IonIcon,
  IonThumbnail,
  IonList,
} from '@ionic/react';
import { call } from 'ionicons/icons';

import './SkeletonTextExample.css';

export const SkeletonTextExample: React.FC = () => {
  const [data, setData] = useState();

  setTimeout(() => {
    setData({
      heading: '正常文本',
      para1: 'Lorem ipsum dolor sit amet, consectetur',
      para2: 'adipiscing elit.',
    });
  }, 5000);

  return (
    <IonContent>
      {data ? (
        <>
          <div className="ion-padding">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non
            vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.
          </div>

          <IonList>
            <IonListHeader>
              <IonLabel>数据</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonAvatar slot="start">
                <img src="./avatar.svg" />
              </IonAvatar>
              <IonLabel>
                <h3>{data.heading}</h3>
                <p>{data.para1}</p>
                <p>{data.para2}</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonThumbnail slot="start">
                <img src="./thumbnail.svg" />
              </IonThumbnail>
              <IonLabel>
                <h3>{data.heading}</h3>
                <p>{data.para1}</p>
                <p>{data.para2}</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon icon={call} slot="start" />
              <IonLabel>
                <h3>{data.heading}</h3>
                <p>{data.para1}</p>
                <p>{data.para2}</p>
              </IonLabel>
            </IonItem>
          </IonList>
        </>
      ) : (
        <>
          <div className="ion-padding custom-skeleton">
            <IonSkeletonText animated style={{ width: '60%' }} />
            <IonSkeletonText animated />
            <IonSkeletonText animated style={{ width: '88%' }} />
            <IonSkeletonText animated style={{ width: '70%' }} />
            <IonSkeletonText animated style={{ width: '60%' }} />
          </div>

          <IonList>
            <IonListHeader>
              <IonLabel>
                <IonSkeletonText animated style={{ width: '20%' }} />
              </IonLabel>
            </IonListHeader>
            <IonItem>
              <IonAvatar slot="start">
                <IonSkeletonText animated />
              </IonAvatar>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonThumbnail slot="start">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonSkeletonText animated style={{ width: '27px', height: '27px' }} slot="start" />
              <IonLabel>
                <h3>
                  <IonSkeletonText animated style={{ width: '50%' }} />
                </h3>
                <p>
                  <IonSkeletonText animated style={{ width: '80%' }} />
                </p>
                <p>
                  <IonSkeletonText animated style={{ width: '60%' }} />
                </p>
              </IonLabel>
            </IonItem>
          </IonList>
        </>
      )}
    </IonContent>
  );
};
```

```css
/* 自定义骨架文本的行高和外边距 */
.custom-skeleton ion-skeleton-text {
  line-height: 13px;
}

.custom-skeleton ion-skeleton-text:last-child {
  margin-bottom: 5px;
}
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'skeleton-text-example',
  styleUrl: 'skeleton-text-example.css',
})
export class SkeletonTextExample {
  @State() data: any;

  componentWillLoad() {
    // 数据将在5秒后显示
    setTimeout(() => {
      this.data = {
        heading: '正常文本',
        para1: 'Lorem ipsum dolor sit amet, consectetur',
        para2: 'adipiscing elit.',
      };
    }, 5000);
  }

  // 当没有数据时渲染骨架屏
  renderSkeletonScreen() {
    return [
      <ion-content>
        <div class="ion-padding custom-skeleton">
          <ion-skeleton-text animated style={{ width: '60%' }}></ion-skeleton-text>
          <ion-skeleton-text animated></ion-skeleton-text>
          <ion-skeleton-text animated style={{ width: '88%' }}></ion-skeleton-text>
          <ion-skeleton-text animated style={{ width: '70%' }}></ion-skeleton-text>
          <ion-skeleton-text animated style={{ width: '60%' }}></ion-skeleton-text>
        </div>

        <ion-list>
          <ion-list-header>
            <ion-label>
              <ion-skeleton-text animated style={{ width: '20%' }}></ion-skeleton-text>
            </ion-label>
          </ion-list-header>
          <ion-item>
            <ion-avatar slot="start">
              <ion-skeleton-text animated></ion-skeleton-text>
            </ion-avatar>
            <ion-label>
              <h3>
                <ion-skeleton-text animated style={{ width: '50%' }}></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text animated style={{ width: '80%' }}></ion-skeleton-text>
              </p>
              <p>
                <ion-skeleton-text animated style={{ width: '60%' }}></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <ion-skeleton-text animated></ion-skeleton-text>
            </ion-thumbnail>
            <ion-label>
              <h3>
                <ion-skeleton-text animated style={{ width: '50%' }}></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text animated style={{ width: '80%' }}></ion-skeleton-text>
              </p>
              <p>
                <ion-skeleton-text animated style={{ width: '60%' }}></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-skeleton-text animated style={{ width: '27px', height: '27px' }} slot="start"></ion-skeleton-text>
            <ion-label>
              <h3>
                <ion-skeleton-text animated style={{ width: '50%' }}></ion-skeleton-text>
              </h3>
              <p>
                <ion-skeleton-text animated style={{ width: '80%' }}></ion-skeleton-text>
              </p>
              <p>
                <ion-skeleton-text animated style={{ width: '60%' }}></ion-skeleton-text>
              </p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>,
    ];
  }

  // 渲染带有数据的元素
  renderDataScreen() {
    return [
      <ion-content>
        <div class="ion-padding">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non
          vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.
        </div>

        <ion-list>
          <ion-list-header>
            <ion-label>数据</ion-label>
          </ion-list-header>
          <ion-item>
            <ion-avatar slot="start">
              <img src="./avatar.svg" />
            </ion-avatar>
            <ion-label>
              <h3>{this.data.heading}</h3>
              <p>{this.data.para1}</p>
              <p>{this.data.para2}</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <img src="./thumbnail.svg" />
            </ion-thumbnail>
            <ion-label>
              <h3>{this.data.heading}</h3>
              <p>{this.data.para1}</p>
              <p>{this.data.para2}</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="call" slot="start"></ion-icon>
            <ion-label>
              <h3>{this.data.heading}</h3>
              <p>{this.data.para1}</p>
              <p>{this.data.para2}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>,
    ];
  }

  render() {
    if (this.data) {
      return this.renderDataScreen();
    } else {
      return this.renderSkeletonScreen();
    }
  }
}
```

```css
/* 自定义骨架文本的行高和外边距 */
.custom-skeleton ion-skeleton-text {
  line-height: 13px;
}

.custom-skeleton ion-skeleton-text:last-child {
  margin-bottom: 5px;
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 骨架屏加载完成后显示的数据 -->
  <div v-if="data">
    <div class="ion-padding">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non
      vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.
    </div>

    <ion-list>
      <ion-list-header>
        <ion-label> 数据 </ion-label>
      </ion-list-header>
      <ion-item>
        <ion-avatar slot="start">
          <img src="./avatar.svg" />
        </ion-avatar>
        <ion-label>
          <h3>{{ data.heading }}</h3>
          <p>{{ data.para1 }}</p>
          <p>{{ data.para2 }}</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <img src="./thumbnail.svg" />
        </ion-thumbnail>
        <ion-label>
          <h3>{{ data.heading }}</h3>
          <p>{{ data.para1 }}</p>
          <p>{{ data.para2 }}</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-icon :icon="call" slot="start"></ion-icon>
        <ion-label>
          <h3>{{ data.heading }}</h3>
          <p>{{ data.para1 }}</p>
          <p>{{ data.para2 }}</p>
        </ion-label>
      </ion-item>
    </ion-list>
  </div>

  <!-- 骨架屏 -->
  <div v-if="!data">
    <div class="ion-padding custom-skeleton">
      <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
      <ion-skeleton-text animated></ion-skeleton-text>
      <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>
      <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
      <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
    </div>

    <ion-list>
      <ion-list-header>
        <ion-label>
          <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>
        </ion-label>
      </ion-list-header>
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-thumbnail>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-skeleton-text animated style="width: 27px; height: 27px" slot="start"></ion-skeleton-text>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
    </ion-list>
  </div>
</template>

<style>
  /* 自定义骨架文本的行高和外边距 */
  .custom-skeleton ion-skeleton-text {
    line-height: 13px;
  }

  .custom-skeleton ion-skeleton-text:last-child {
    margin-bottom: 5px;
  }
</style>

<script>
  import {
    IonAvatar,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonSkeletonText,
    IonThumbnail,
  } from '@ionic/vue';
  import { call } from 'ionicons/icons';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: {
      IonAvatar,
      IonIcon,
      IonItem,
      IonLabel,
      IonList,
      IonListHeader,
      IonSkeletonText,
      IonThumbnail,
    },
    setup() {
      const data = ref();

      setTimeout(() => {
        data.value = {
          heading: '正常文本',
          para1: 'Lorem ipsum dolor sit amet, consectetur',
          para2: 'adipiscing elit.',
        };
      }, 5000);

      return { data };
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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />