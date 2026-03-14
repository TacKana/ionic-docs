---
sidebar_label: 'ion-textarea'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/textarea/props.md';
import Events from '@ionic-internal/component-api/v5/textarea/events.md';
import Methods from '@ionic-internal/component-api/v5/textarea/methods.md';
import Parts from '@ionic-internal/component-api/v5/textarea/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/textarea/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/textarea/slots.md';

# ion-textarea

文本域组件用于多行文本输入。该组件内部渲染一个原生的 textarea 元素。通过控制原生 textarea，文本域组件的用户体验和交互性得到了提升。

与原生的 textarea 元素不同，Ionic 文本域不支持从内部内容加载其值。文本域的值应通过 `value` 属性设置。

除了 Ionic 属性外，文本域组件还接受[原生 textarea 属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认文本域 -->
<ion-textarea></ion-textarea>

<!-- 带有占位符的项目中的文本域 -->
<ion-item>
  <ion-textarea placeholder="在此输入更多信息..."></ion-textarea>
</ion-item>

<!-- 带有浮动标签的项目中的文本域 -->
<ion-item>
  <ion-label position="floating">描述</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- 带有堆叠标签的项目中的禁用和只读文本域 -->
<ion-item>
  <ion-label position="stacked">摘要</ion-label>
  <ion-textarea disabled readonly value="Ionic 使开发者能够构建高性能、高质量的移动应用。">
  </ion-textarea>
</ion-item>

<!-- 编辑时清除值的文本域 -->
<ion-item>
  <ion-label>评论</ion-label>
  <ion-textarea clearOnEdit="true"></ion-textarea>
</ion-item>

<!-- 自定义行数和列数的文本域 -->
<ion-item>
  <ion-label>备注</ion-label>
  <ion-textarea rows="6" cols="20" placeholder="在此输入任何备注..."></ion-textarea>
</ion-item>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认文本域 -->
<ion-textarea></ion-textarea>

<!-- 带有占位符的项目中的文本域 -->
<ion-item>
  <ion-textarea placeholder="在此输入更多信息..."></ion-textarea>
</ion-item>

<!-- 带有浮动标签的项目中的文本域 -->
<ion-item>
  <ion-label position="floating">描述</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- 带有堆叠标签的项目中的禁用和只读文本域 -->
<ion-item>
  <ion-label position="stacked">摘要</ion-label>
  <ion-textarea disabled readonly value="Ionic 使开发者能够构建高性能、高质量的移动应用。">
  </ion-textarea>
</ion-item>

<!-- 编辑时清除值的文本域 -->
<ion-item>
  <ion-label>评论</ion-label>
  <ion-textarea clear-on-edit="true"></ion-textarea>
</ion-item>

<!-- 自定义行数和列数的文本域 -->
<ion-item>
  <ion-label>备注</ion-label>
  <ion-textarea rows="6" cols="20" placeholder="在此输入任何备注..."></ion-textarea>
</ion-item>
```

</TabItem>

<TabItem value="react">

```tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTextarea,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonList,
} from '@ionic/react';

export const TextAreaExamples: React.FC = () => {
  const [text, setText] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>文本域示例</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>默认文本域</IonItemDivider>
          <IonItem>
            <IonTextarea value={text} onIonChange={(e) => setText(e.detail.value!)}></IonTextarea>
          </IonItem>

          <IonItemDivider>带有占位符的项目中的文本域</IonItemDivider>
          <IonItem>
            <IonTextarea
              placeholder="在此输入更多信息..."
              value={text}
              onIonChange={(e) => setText(e.detail.value!)}
            ></IonTextarea>
          </IonItem>

          <IonItemDivider>带有浮动标签的项目中的文本域</IonItemDivider>
          <IonItem>
            <IonLabel position="floating">描述</IonLabel>
            <IonTextarea value={text} onIonChange={(e) => setText(e.detail.value!)}></IonTextarea>
          </IonItem>

          <IonItemDivider>带有堆叠标签的项目中的禁用和只读文本域</IonItemDivider>
          <IonItem>
            <IonLabel position="stacked">摘要</IonLabel>
            <IonTextarea disabled readonly value={text} onIonChange={(e) => setText(e.detail.value!)}></IonTextarea>
          </IonItem>

          <IonItemDivider>编辑时清除值的文本域</IonItemDivider>
          <IonItem>
            <IonLabel>评论</IonLabel>
            <IonTextarea clearOnEdit={true} value={text} onIonChange={(e) => setText(e.detail.value!)}></IonTextarea>
          </IonItem>

          <IonItemDivider>自定义行数和列数的文本域</IonItemDivider>
          <IonItem>
            <IonLabel>备注</IonLabel>
            <IonTextarea
              rows={6}
              cols={20}
              placeholder="在此输入任何备注..."
              value={text}
              onIonChange={(e) => setText(e.detail.value!)}
            ></IonTextarea>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'textarea-example',
  styleUrl: 'textarea-example.css',
})
export class TextareaExample {
  render() {
    return [
      // 默认文本域
      <ion-textarea></ion-textarea>,

      // 带有占位符的项目中的文本域
      <ion-item>
        <ion-textarea placeholder="在此输入更多信息..."></ion-textarea>
      </ion-item>,

      // 带有浮动标签的项目中的文本域
      <ion-item>
        <ion-label position="floating">描述</ion-label>
        <ion-textarea></ion-textarea>
      </ion-item>,

      // 带有堆叠标签的项目中的禁用和只读文本域
      <ion-item>
        <ion-label position="stacked">摘要</ion-label>
        <ion-textarea
          disabled
          readonly
          value="Ionic 使开发者能够构建高性能、高质量的移动应用。"
        ></ion-textarea>
      </ion-item>,

      // 编辑时清除值的文本域
      <ion-item>
        <ion-label>评论</ion-label>
        <ion-textarea clearOnEdit={true}></ion-textarea>
      </ion-item>,

      // 自定义行数和列数的文本域
      <ion-item>
        <ion-label>备注</ion-label>
        <ion-textarea rows={6} cols={20} placeholder="在此输入任何备注..."></ion-textarea>
      </ion-item>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认文本域 -->
  <ion-textarea></ion-textarea>

  <!-- 带有占位符的项目中的文本域 -->
  <ion-item>
    <ion-textarea placeholder="在此输入更多信息..."></ion-textarea>
  </ion-item>

  <!-- 带有浮动标签的项目中的文本域 -->
  <ion-item>
    <ion-label position="floating">描述</ion-label>
    <ion-textarea></ion-textarea>
  </ion-item>

  <!-- 带有堆叠标签的项目中的禁用和只读文本域 -->
  <ion-item>
    <ion-label position="stacked">摘要</ion-label>
    <ion-textarea disabled readonly value="Ionic 使开发者能够构建高性能、高质量的移动应用。">
    </ion-textarea>
  </ion-item>

  <!-- 编辑时清除值的文本域 -->
  <ion-item>
    <ion-label>评论</ion-label>
    <ion-textarea clear-on-edit="true"></ion-textarea>
  </ion-item>

  <!-- 自定义行数和列数的文本域 -->
  <ion-item>
    <ion-label>备注</ion-label>
    <ion-textarea rows="6" cols="20" placeholder="在此输入任何备注..."></ion-textarea>
  </ion-item>
</template>

<script>
  import { IonItem, IonLabel, IonTextarea } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonTextarea },
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