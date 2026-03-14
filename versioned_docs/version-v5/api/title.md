---
title: 'ion-title：Ionic Framework 应用标题组件，用于工具栏'
description: 'ion-title 是一个用于设置工具栏标题的组件。阅读本文，了解更多关于 Ionic Framework 应用的标题和可折叠标题组件及其用法的信息。'
sidebar_label: 'ion-title'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/title/props.md';
import Events from '@ionic-internal/component-api/v5/title/events.md';
import Methods from '@ionic-internal/component-api/v5/title/methods.md';
import Parts from '@ionic-internal/component-api/v5/title/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/title/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/title/slots.md';

# ion-title

`ion-title` 是一个用于设置 `Toolbar`（工具栏）标题的组件。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认标题 -->
<ion-toolbar>
  <ion-title>默认标题</ion-title>
</ion-toolbar>

<!-- 在默认标题上方的小标题 -->
<ion-toolbar>
  <ion-title size="small">默认标题上方的小标题</ion-title>
</ion-toolbar>
<ion-toolbar>
  <ion-title>默认标题</ion-title>
</ion-toolbar>

<!-- 大标题 -->
<ion-toolbar>
  <ion-title size="large">大标题</ion-title>
</ion-toolbar>
```

### 可折叠大标题

Ionic 提供了一种方法来创建 iOS 原生应用中存在的可折叠标题。要实现此效果，需要配置您的 `ion-title`、`ion-header` 以及（可选的）`ion-buttons` 元素。

```html
<ion-header translucent="true">
  <ion-toolbar>
    <ion-title>设置</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">设置</ion-title>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar></ion-searchbar>
    </ion-toolbar>
  </ion-header>

  ...
</ion-content>
```

在上面的例子中，请注意有两个 `ion-header` 元素。第一个 `ion-header` 代表可折叠标题头的“折叠”状态，第二个 `ion-header` 代表可折叠标题头的“展开”状态。注意，第二个 `ion-header` 必须设置 `collapse="condense"`，并且必须位于 `ion-content` 内部。此外，为了获得大标题样式，`ion-title` 必须设置 `size="large"`。

```html
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons collapse="true" slot="end">
      <ion-button>点击我</ion-button>
    </ion-buttons>
    <ion-title>设置</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-buttons collapse="true" slot="end">
        <ion-button>点击我</ion-button>
      </ion-buttons>
      <ion-title size="large">设置</ion-title>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar></ion-searchbar>
    </ion-toolbar>
  </ion-header>

  ...
</ion-content>
```

在这个例子中，注意我们添加了两组 `ion-buttons`，并且都设置了 `collapse="true"`。当次级标题头折叠时，次级标题头中的按钮将隐藏，而主标题头中的按钮将显示。这对于确保您的标题按钮始终显示在 `ion-title` 元素旁边非常有用。

没有设置 `collapse` 属性的 `ion-buttons` 元素将始终可见，无论折叠状态如何。当在 `ion-content` 内部使用大标题和 `ion-buttons` 元素时，`ion-buttons` 元素应始终放置在 `end` 插槽中。

> 使用可折叠大标题时，需要在 `ion-content` 上设置 `fullscreen="true"`，并在主 `ion-header` 上设置 `translucent="true"`。

### 设置可折叠大标题的样式

可折叠大标题应与内容的其余部分无缝衔接。这意味着包含可折叠大标题的 `ion-toolbar` 的背景颜色应始终与 `ion-content` 的背景颜色匹配。

默认情况下，包含标准标题的 `ion-toolbar` 通过 `opacity: 0` 隐藏，并在您通过滚动折叠大标题时逐渐显示。因此，您在标准标题后面看到的背景颜色实际上是 `ion-content` 的背景颜色。

您可以通过在 `ion-toolbar` 上设置 `--background` CSS 变量来更改包含标准标题的工具栏的背景颜色。这将产生标题头在您折叠大标题时改变颜色的效果。

在设置大标题的文本颜色时，您应该全局地针对大标题设置样式，而不是在特定页面或标签的上下文中设置，否则其样式在导航动画期间将不会应用。

```css
ion-title.large-title {
  color: purple;
  font-size: 30px;
}
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认标题 -->
<ion-toolbar>
  <ion-title>默认标题</ion-title>
</ion-toolbar>

<!-- 在默认标题上方的小标题 -->
<ion-toolbar>
  <ion-title size="small">默认标题上方的小标题</ion-title>
</ion-toolbar>
<ion-toolbar>
  <ion-title>默认标题</ion-title>
</ion-toolbar>

<!-- 大标题 -->
<ion-toolbar>
  <ion-title size="large">大标题</ion-title>
</ion-toolbar>
```

### 可折叠大标题

Ionic 提供了一种方法来创建 iOS 原生应用中存在的可折叠标题。要实现此效果，需要配置您的 `ion-title`、`ion-header` 以及（可选的）`ion-buttons` 元素。

```html
<ion-header translucent="true">
  <ion-toolbar>
    <ion-title>设置</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">设置</ion-title>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar></ion-searchbar>
    </ion-toolbar>
  </ion-header>

  ...
</ion-content>
```

在上面的例子中，请注意有两个 `ion-header` 元素。第一个 `ion-header` 代表可折叠标题头的“折叠”状态，第二个 `ion-header` 代表可折叠标题头的“展开”状态。注意，第二个 `ion-header` 必须设置 `collapse="condense"`，并且必须位于 `ion-content` 内部。此外，为了获得大标题样式，`ion-title` 必须设置 `size="large"`。

```html
<ion-header translucent="true">
  <ion-toolbar>
    <ion-buttons collapse="true" slot="end">
      <ion-button>点击我</ion-button>
    </ion-buttons>
    <ion-title>设置</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-buttons collapse="true" slot="end">
        <ion-button>点击我</ion-button>
      </ion-buttons>
      <ion-title size="large">设置</ion-title>
    </ion-toolbar>
    <ion-toolbar>
      <ion-searchbar></ion-searchbar>
    </ion-toolbar>
  </ion-header>

  ...
</ion-content>
```

在这个例子中，注意我们添加了两组 `ion-buttons`，并且都设置了 `collapse="true"`。当次级标题头折叠时，次级标题头中的按钮将隐藏，而主标题头中的按钮将显示。这对于确保您的标题按钮始终显示在 `ion-title` 元素旁边非常有用。

没有设置 `collapse` 属性的 `ion-buttons` 元素将始终可见，无论折叠状态如何。当在 `ion-content` 内部使用大标题和 `ion-buttons` 元素时，`ion-buttons` 元素应始终放置在 `end` 插槽中。

> 使用可折叠大标题时，需要在 `ion-content` 上设置 `fullscreen="true"`，并在主 `ion-header` 上设置 `translucent="true"`。

### 设置可折叠大标题的样式

可折叠大标题应与内容的其余部分无缝衔接。这意味着包含可折叠大标题的 `ion-toolbar` 的背景颜色应始终与 `ion-content` 的背景颜色匹配。

默认情况下，包含标准标题的 `ion-toolbar` 通过 `opacity: 0` 隐藏，并在您通过滚动折叠大标题时逐渐显示。因此，您在标准标题后面看到的背景颜色实际上是 `ion-content` 的背景颜色。

您可以通过在 `ion-toolbar` 上设置 `--background` CSS 变量来更改包含标准标题的工具栏的背景颜色。这将产生标题头在您折叠大标题时改变颜色的效果。

在设置大标题的文本颜色时，您应该全局地针对大标题设置样式，而不是在特定页面或标签的上下文中设置，否则其样式在导航动画期间将不会应用。

```css
ion-title.large-title {
  color: purple;
  font-size: 30px;
}
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import {
  IonTitle,
  IonToolbar
} from '@ionic/react';

export const ToolbarExample: React.FC = () => (
  {/*-- 默认标题 --*/}
  <IonToolbar>
    <IonTitle>默认标题</IonTitle>
  </IonToolbar>

  {/*-- 小标题 --*/}
  <IonToolbar>
    <IonTitle size="small">默认标题上方的小标题</IonTitle>
  </IonToolbar>
  <IonToolbar>
    <IonTitle>默认标题</IonTitle>
  </IonToolbar>

  {/*-- 大标题 --*/}
  <IonToolbar>
    <IonTitle size="large">大标题</IonTitle>
  </IonToolbar>
);
```

### 可折叠大标题

Ionic 提供了一种方法来创建 iOS 原生应用中存在的可折叠标题。要实现此效果，需要配置您的 `IonTitle`、`IonHeader` 以及（可选的）`IonButtons` 元素。

```tsx
import React from 'react';
import { IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';

export const LargeTitleExample: React.FC = () => (
  <>
    <IonHeader translucent="true">
      <IonToolbar>
        <IonTitle>设置</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">设置</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      ...
    </IonContent>
  </>
);
```

在上面的例子中，请注意有两个 `IonHeader` 元素。第一个 `IonHeader` 代表可折叠标题头的“折叠”状态，第二个 `IonHeader` 代表可折叠标题头的“展开”状态。注意，第二个 `IonHeader` 必须设置 `collapse="condense"`，并且必须位于 `IonContent` 内部。此外，为了获得大标题样式，`IonTitle` 必须设置 `size="large"`。

```tsx
import React from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';

export const LargeTitleExample: React.FC = () => (
  <>
    <IonHeader translucent="true">
      <IonToolbar>
        <IonButtons collapse="true" slot="end">
          <IonButton>点击我</IonButton>
        </IonButtons>
        <IonTitle>设置</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonButtons collapse="true" slot="end">
            <IonButton>点击我</IonButton>
          </IonButtons>
          <IonTitle size="large">设置</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      ...
    </IonContent>
  </>
);
```

在这个例子中，注意我们添加了两组 `IonButtons`，并且都设置了 `collapse="true"`。当次级标题头折叠时，次级标题头中的按钮将隐藏，而主标题头中的按钮将显示。这对于确保您的标题按钮始终显示在 `IonTitle` 元素旁边非常有用。

没有设置 `collapse` 属性的 `IonButtons` 元素将始终可见，无论折叠状态如何。当在 `IonContent` 内部使用大标题和 `ion-buttons` 元素时，`ion-buttons` 元素应始终放置在 `end` 插槽中。

> 使用可折叠大标题时，需要在 `IonContent` 上设置 `fullscreen="true"`，并在主 `IonHeader` 上设置 `translucent="true"`。

### 设置可折叠大标题的样式

可折叠大标题应与内容的其余部分无缝衔接。这意味着包含可折叠大标题的 `IonToolbar` 的背景颜色应始终与 `IonContent` 的背景颜色匹配。

默认情况下，包含标准标题的 `IonToolbar` 通过 `opacity: 0` 隐藏，并在您通过滚动折叠大标题时逐渐显示。因此，您在标准标题后面看到的背景颜色实际上是 `IonContent` 的背景颜色。

您可以通过在 `IonToolbar` 上设置 `--background` CSS 变量来更改包含标准标题的工具栏的背景颜色。这将产生标题头在您折叠大标题时改变颜色的效果。

在设置大标题的文本颜色时，您应该全局地针对大标题设置样式，而不是在特定页面或标签的上下文中设置，否则其样式在导航动画期间将不会应用。

```css
ion-title.large-title {
  color: purple;
  font-size: 30px;
}
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'title-example',
  styleUrl: 'title-example.css',
})
export class TitleExample {
  render() {
    return [
      // 默认标题
      <ion-toolbar>
        <ion-title>默认标题</ion-title>
      </ion-toolbar>,

      // 在默认标题上方的小标题
      <ion-toolbar>
        <ion-title size="small">默认标题上方的小标题</ion-title>
      </ion-toolbar>,
      <ion-toolbar>
        <ion-title>默认标题</ion-title>
      </ion-toolbar>,

      // 大标题
      <ion-toolbar>
        <ion-title size="large">大标题</ion-title>
      </ion-toolbar>,
    ];
  }
}
```

### 可折叠大标题

Ionic 提供了一种方法来创建 iOS 原生应用中存在的可折叠标题。要实现此效果，需要配置您的 `ion-title`、`ion-header` 以及（可选的）`ion-buttons` 元素。

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'title-example',
  styleUrl: 'title-example.css',
})
export class TitleExample {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-title>设置</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">设置</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-searchbar></ion-searchbar>
          </ion-toolbar>
        </ion-header>
        ...
      </ion-content>,
    ];
  }
}
```

在上面的例子中，请注意有两个 `ion-header` 元素。第一个 `ion-header` 代表可折叠标题头的“折叠”状态，第二个 `ion-header` 代表可折叠标题头的“展开”状态。注意，第二个 `ion-header` 必须设置 `collapse="condense"`，并且必须位于 `ion-content` 内部。此外，为了获得大标题样式，`ion-title` 必须设置 `size="large"`。

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'title-example',
  styleUrl: 'title-example.css',
})
export class TitleExample {
  render() {
    return [
      <ion-header translucent={true}>
        <ion-toolbar>
          <ion-buttons collapse={true} slot="end">
            <ion-button>点击我</ion-button>
          </ion-buttons>
          <ion-title>设置</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen={true}>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-buttons collapse={true} slot="end">
              <ion-button>点击我</ion-button>
            </ion-buttons>
            <ion-title size="large">设置</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-searchbar></ion-searchbar>
          </ion-toolbar>
        </ion-header>
        ...
      </ion-content>,
    ];
  }
}
```

在这个例子中，注意我们添加了两组 `ion-buttons`，并且都设置了 `collapse={true}`。当次级标题头折叠时，次级标题头中的按钮将隐藏，而主标题头中的按钮将显示。这对于确保您的标题按钮始终显示在 `ion-title` 元素旁边非常有用。

没有设置 `collapse` 属性的 `ion-buttons` 元素将始终可见，无论折叠状态如何。当在 `ion-content` 内部使用大标题和 `ion-buttons` 元素时，`ion-buttons` 元素应始终放置在 `end` 插槽中。

在设置大标题的样式时，您应该全局地针对大标题设置样式，而不是在特定页面或标签的上下文中设置，否则其样式在导航动画期间将不会应用。

> 使用可折叠大标题时，需要在 `ion-content` 上设置 `fullscreen={true}`，并在主 `ion-header` 上设置 `translucent={true}`。

### 设置可折叠大标题的样式

可折叠大标题应与内容的其余部分无缝衔接。这意味着包含可折叠大标题的 `ion-toolbar` 的背景颜色应始终与 `ion-content` 的背景颜色匹配。

默认情况下，包含标准标题的 `ion-toolbar` 通过 `opacity: 0` 隐藏，并在您通过滚动折叠大标题时逐渐显示。因此，您在标准标题后面看到的背景颜色实际上是 `ion-content` 的背景颜色。

您可以通过在 `ion-toolbar` 上设置 `--background` CSS 变量来更改包含标准标题的工具栏的背景颜色。这将产生标题头在您折叠大标题时改变颜色的效果。

在设置大标题的文本颜色时，您应该全局地针对大标题设置样式，而不是在特定页面或标签的上下文中设置，否则其样式在导航动画期间将不会应用。

```css
ion-title.large-title {
  color: purple;
  font-size: 30px;
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认标题 -->
  <ion-toolbar>
    <ion-title>默认标题</ion-title>
  </ion-toolbar>

  <!-- 小标题 -->
  <ion-toolbar>
    <ion-title size="small">默认标题上方的小标题</ion-title>
  </ion-toolbar>
  <ion-toolbar>
    <ion-title>默认标题</ion-title>
  </ion-toolbar>

  <!-- 大标题 -->
  <ion-toolbar>
    <ion-title size="large">大标题</ion-title>
  </ion-toolbar>
</template>

<script>
  import { IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonTitle, IonToolbar },
  });
</script>
```

### 可折叠大标题

Ionic 提供了一种方法来创建 iOS 原生应用中存在的可折叠标题。要实现此效果，需要配置您的 `ion-title`、`ion-header` 以及（可选的）`ion-buttons` 元素。

```html
<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-title>设置</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">设置</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    </ion-header>

    ...
  </ion-content>
</template>

<script>
  import { IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonContent,
      IonHeader,
      IonSearchbar,
      IonTitle,
      IonToolbar,
    },
  });
</script>
```

在上面的例子中，请注意有两个 `ion-header` 元素。第一个 `ion-header` 代表可折叠标题头的“折叠”状态，第二个 `ion-header` 代表可折叠标题头的“展开”状态。注意，第二个 `ion-header` 必须设置 `collapse="condense"`，并且必须位于 `ion-content` 内部。此外，为了获得大标题样式，`ion-title` 必须设置 `size="large"`。

```html
<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons :collapse="true" slot="end">
        <ion-button>点击我</ion-button>
      </ion-buttons>
      <ion-title>设置</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-buttons :collapse="true" slot="end">
          <ion-button>点击我</ion-button>
        </ion-buttons>
        <ion-title size="large">设置</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    </ion-header>

    ...
  </ion-content>
</template>

<script>
  import { IonButton, IonButtons, IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonButton,
      IonButtons,
      IonContent,
      IonHeader,
      IonSearchbar,
      IonTitle,
      IonToolbar,
    },
  });
</script>
```

在这个例子中，注意我们添加了两组 `ion-buttons`，并且都设置了 `:collapse="true"`。当次级标题头折叠时，次级标题头中的按钮将隐藏，而主标题头中的按钮将显示。这对于确保您的标题按钮始终显示在 `ion-title` 元素旁边非常有用。

没有设置 `collapse` 属性的 `ion-buttons` 元素将始终可见，无论折叠状态如何。当在 `ion-content` 内部使用大标题和 `ion-buttons` 元素时，`ion-buttons` 元素应始终放置在 `end` 插槽中。

> 使用可折叠大标题时，需要在 `ion-content` 上设置 `fullscreen="true"`，并在主 `ion-header` 上设置 `translucent="true"`。

### 设置可折叠大标题的样式

可折叠大标题应与内容的其余部分无缝衔接。这意味着包含可折叠大标题的 `ion-toolbar` 的背景颜色应始终与 `ion-content` 的背景颜色匹配。

默认情况下，包含标准标题的 `ion-toolbar` 通过 `opacity: 0` 隐藏，并在您通过滚动折叠大标题时逐渐显示。因此，您在标准标题后面看到的背景颜色实际上是 `ion-content` 的背景颜色。

您可以通过在 `ion-toolbar` 上设置 `--background` CSS 变量来更改包含标准标题的工具栏的背景颜色。这将产生标题头在您折叠大标题时改变颜色的效果。

在设置大标题的文本颜色时，您应该全局地针对大标题设置样式，而不是在特定页面或标签的上下文中设置，否则其样式在导航动画期间将不会应用。

```css
ion-title.large-title {
  color: purple;
  font-size: 30px;
}
```

</TabItem>

</Tabs>

## 属性

<Props />

## 事件

<Events />

## 方法

<Methods />

## CSS 阴影部件

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />