---
title: '选择选项 | Ionic Framework 应用中的选项选择是什么'
description: '什么是选项选择？选择选项是选择器的子元素组件——每个定义的选项都会被传递并在选择器对话框中显示。'
sidebar_label: 'ion-select-option'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/select-option/props.md';
import Events from '@ionic-internal/component-api/v5/select-option/events.md';
import Methods from '@ionic-internal/component-api/v5/select-option/methods.md';
import Parts from '@ionic-internal/component-api/v5/select-option/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/select-option/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/select-option/slots.md';

# ion-select-option

选择选项是选择器的子元素组件。每个定义的选项都会被传递并在选择器对话框中显示。更多信息请参阅[选择器文档](select.md)。

## 定制化

每个作为 `ion-select` 子元素添加的 `ion-select-option` 组件都会被传递到界面以在对话框中显示。需要注意的是，`ion-select-option` 元素本身在视图中是隐藏的。这意味着尝试对其设置样式不会对对话框中的选项产生任何影响：

```css
/* 无效 */
ion-select-option {
  color: red;
}
```

相反，每个界面选项都有类 `.select-interface-option`，可以对其进行样式设置。请记住，由于叠加层是作用域组件，选择器本身无法生效，建议传递自定义的 `cssClass` 到界面。

```css
/* 这单独使用不会生效 */
.select-interface-option {
  color: red;
}

/*
 * 需要通过在界面选项的 cssClass 中传递
 * "my-custom-interface" 才能生效
 */
.my-custom-interface .select-interface-option {
  color: red;
}
```

> 注意：由于选项的渲染方式，某些界面需要更深入的样式设置。有关此方面的详细信息，请参阅用法。

可以通过在传递给界面选项的 `ion-select-option` 上添加自己的类来单独设置选项的样式。有关在选项上设置样式和设置单独类的示例，请参阅下面的[用法](#usage)部分。

## 用法

<Tabs groupId="framework" defaultValue="javascript" values={[{ value: 'javascript', label: 'JAVASCRIPT' }, { value: 'react', label: 'REACT' }, { value: 'stencil', label: 'STENCIL' }, { value: 'vue', label: 'VUE' }]}>

<TabItem value="javascript">

```html
<ion-item>
  <ion-label>选择</ion-label>
  <ion-select>
    <ion-select-option value="brown">棕色</ion-select-option>
    <ion-select-option value="blonde">金色</ion-select-option>
    <ion-select-option value="black">黑色</ion-select-option>
    <ion-select-option value="red">红色</ion-select-option>
  </ion-select>
</ion-item>
```

### 定制选项

```html
<ion-item>
  <ion-label>选择：警告框界面</ion-label>
  <ion-select class="custom-options">
    <ion-select-option value="brown">棕色</ion-select-option>
    <ion-select-option value="blonde">金色</ion-select-option>
    <ion-select-option value="black">黑色</ion-select-option>
    <ion-select-option value="red">红色</ion-select-option>
  </ion-select>
</ion-item>

<ion-item>
  <ion-label>选择：警告框界面（多选）</ion-label>
  <ion-select class="custom-options" multiple="true">
    <ion-select-option value="brown">棕色</ion-select-option>
    <ion-select-option value="blonde">金色</ion-select-option>
    <ion-select-option value="black">黑色</ion-select-option>
    <ion-select-option value="red">红色</ion-select-option>
  </ion-select>
</ion-item>

<ion-item>
  <ion-label>选择：弹出框界面</ion-label>
  <ion-select interface="popover" class="custom-options">
    <ion-select-option value="brown">棕色</ion-select-option>
    <ion-select-option value="blonde">金色</ion-select-option>
    <ion-select-option value="black">黑色</ion-select-option>
    <ion-select-option value="red">红色</ion-select-option>
  </ion-select>
</ion-item>

<ion-item>
  <ion-label>选择：操作表界面</ion-label>
  <ion-select interface="action-sheet" class="custom-options">
    <ion-select-option value="brown">棕色</ion-select-option>
    <ion-select-option value="blonde">金色</ion-select-option>
    <ion-select-option value="black">黑色</ion-select-option>
    <ion-select-option value="red">红色</ion-select-option>
  </ion-select>
</ion-item>
```

```css
/* 弹出框界面：使用项目的 CSS 变量为弹出框设置颜色 */
.my-custom-interface .select-interface-option {
  --color: #971e49;
  --color-hover: #79193b;
}

/* 操作表界面：使用其按钮 CSS 变量为操作表设置颜色 */
.my-custom-interface .select-interface-option {
  --button-color: #971e49;
  --button-color-hover: #79193b;
}

/* 警告框界面：为警告框选项设置颜色（单选） */
.my-custom-interface .select-interface-option .alert-radio-label {
  color: #971e49;
}

/* 警告框界面：为警告框选项设置颜色（多选） */
.my-custom-interface .select-interface-option .alert-checkbox-label {
  color: #971e49;
}

/* 警告框界面：为选中的警告框选项设置颜色（单选） */
.my-custom-interface .select-interface-option[aria-checked='true'] .alert-radio-label {
  color: #79193b;
}

/* 警告框界面：为选中的警告框选项设置颜色（多选） */
.my-custom-interface .select-interface-option[aria-checked='true'] .alert-checkbox-label {
  color: #79193b;
}
```

```javascript
// 为每个选择界面传递自定义类以进行样式设置
const selects = document.querySelectorAll('.custom-options');

for (var i = 0; i < selects.length; i++) {
  selects[i].interfaceOptions = {
    cssClass: 'my-custom-interface',
  };
}
```

> 注意：在 CSS 示例中，某些选择器可以组合在一起，但为了更好解释每个选择器的用途，将它们分开了。

### 定制单个选项

要定制单个选项，请在 `ion-select-option` 上设置一个类：

```html
<ion-item>
  <ion-label>选择</ion-label>
  <ion-select class="custom-options" interface="popover">
    <ion-select-option value="brown" class="brown-option">棕色</ion-select-option>
    <ion-select-option value="blonde">金色</ion-select-option>
    <ion-select-option value="black">黑色</ion-select-option>
    <ion-select-option value="red">红色</ion-select-option>
  </ion-select>
</ion-item>
```

```css
/* 弹出框界面：使用项目的 CSS 变量为弹出框设置颜色 */
.my-custom-interface .brown-option {
  --color: #5e3e2c;
  --color-hover: #362419;
}
```

```javascript
// 为每个选择界面传递自定义类以进行样式设置
const select = document.querySelector('.custom-options');
select.interfaceOptions = {
  cssClass: 'my-custom-interface',
};
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonContent, IonItem, IonLabel, IonSelect, IonSelectOption, IonPage } from '@ionic/react';

export const SelectOptionExample: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <IonLabel>选择</IonLabel>
          <IonSelect>
            <IonSelectOption value="brown">棕色</IonSelectOption>
            <IonSelectOption value="blonde">金色</IonSelectOption>
            <IonSelectOption value="black">黑色</IonSelectOption>
            <IonSelectOption value="red">红色</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
```

### 定制选项

```tsx
import React from 'react';
import { IonContent, IonItem, IonLabel, IonSelect, IonSelectOption, IonPage } from '@ionic/react';

const options = {
  cssClass: 'my-custom-interface',
};

export const SelectOptionExample: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <IonLabel>选择：警告框界面</IonLabel>
          <IonSelect interfaceOptions={options}>
            <IonSelectOption value="brown">棕色</IonSelectOption>
            <IonSelectOption value="blonde">金色</IonSelectOption>
            <IonSelectOption value="black">黑色</IonSelectOption>
            <IonSelectOption value="red">红色</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>选择：警告框界面（多选）</IonLabel>
          <IonSelect interfaceOptions={options} multiple={true}>
            <IonSelectOption value="brown">棕色</IonSelectOption>
            <IonSelectOption value="blonde">金色</IonSelectOption>
            <IonSelectOption value="black">黑色</IonSelectOption>
            <IonSelectOption value="red">红色</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>选择：弹出框界面</IonLabel>
          <IonSelect interface="popover" interfaceOptions={options}>
            <IonSelectOption value="brown">棕色</IonSelectOption>
            <IonSelectOption value="blonde">金色</IonSelectOption>
            <IonSelectOption value="black">黑色</IonSelectOption>
            <IonSelectOption value="red">红色</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>选择：操作表界面</IonLabel>
          <IonSelect interface="action-sheet" interfaceOptions={options}>
            <IonSelectOption value="brown">棕色</IonSelectOption>
            <IonSelectOption value="blonde">金色</IonSelectOption>
            <IonSelectOption value="black">黑色</IonSelectOption>
            <IonSelectOption value="red">红色</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
```

```css
/* 弹出框界面：使用项目的 CSS 变量为弹出框设置颜色 */
.my-custom-interface .select-interface-option {
  --color: #971e49;
  --color-hover: #79193b;
}

/* 操作表界面：使用其按钮 CSS 变量为操作表设置颜色 */
.my-custom-interface .select-interface-option {
  --button-color: #971e49;
  --button-color-hover: #79193b;
}

/* 警告框界面：为警告框选项设置颜色（单选） */
.my-custom-interface .select-interface-option .alert-radio-label {
  color: #971e49;
}

/* 警告框界面：为警告框选项设置颜色（多选） */
.my-custom-interface .select-interface-option .alert-checkbox-label {
  color: #971e49;
}

/* 警告框界面：为选中的警告框选项设置颜色（单选） */
.my-custom-interface .select-interface-option[aria-checked='true'] .alert-radio-label {
  color: #79193b;
}

/* 警告框界面：为选中的警告框选项设置颜色（多选） */
.my-custom-interface .select-interface-option[aria-checked='true'] .alert-checkbox-label {
  color: #79193b;
}
```

> 注意：在 CSS 示例中，某些选择器可以组合在一起，但为了更好解释每个选择器的用途，将它们分开了。

### 定制单个选项

要定制单个选项，请在 `ion-select-option` 上设置一个类：

```tsx
import React from 'react';
import { IonContent, IonItem, IonLabel, IonSelect, IonSelectOption, IonPage } from '@ionic/react';

const options = {
  cssClass: 'my-custom-interface',
};

export const SelectOptionExample: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <IonLabel>选择</IonLabel>
          <IonSelect interface="popover" interfaceOptions={options}>
            <IonSelectOption value="brown" class="brown-option">
              棕色
            </IonSelectOption>
            <IonSelectOption value="blonde">金色</IonSelectOption>
            <IonSelectOption value="black">黑色</IonSelectOption>
            <IonSelectOption value="red">红色</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
```

```css
/* 弹出框界面：使用项目的 CSS 变量为弹出框设置颜色 */
.my-custom-interface .brown-option {
  --color: #5e3e2c;
  --color-hover: #362419;
}
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-option-example',
  styleUrl: 'select-option-example.css',
})
export class SelectOptionExample {
  render() {
    return [
      <ion-item>
        <ion-label>选择</ion-label>
        <ion-select>
          <ion-select-option value="brown">棕色</ion-select-option>
          <ion-select-option value="blonde">金色</ion-select-option>
          <ion-select-option value="black">黑色</ion-select-option>
          <ion-select-option value="red">红色</ion-select-option>
        </ion-select>
      </ion-item>,
    ];
  }
}
```

### 定制选项

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-option-example',
  styleUrl: 'select-option-example.css',
})
export class SelectOptionExample {
  options = {
    cssClass: 'my-custom-interface',
  };

  render() {
    return [
      <ion-item>
        <ion-label>选择：警告框界面</ion-label>
        <ion-select interfaceOptions={options}>
          <ion-select-option value="brown">棕色</ion-select-option>
          <ion-select-option value="blonde">金色</ion-select-option>
          <ion-select-option value="black">黑色</ion-select-option>
          <ion-select-option value="red">红色</ion-select-option>
        </ion-select>
      </ion-item>,

      <ion-item>
        <ion-label>选择：警告框界面（多选）</ion-label>
        <ion-select interfaceOptions={options} multiple={true}>
          <ion-select-option value="brown">棕色</ion-select-option>
          <ion-select-option value="blonde">金色</ion-select-option>
          <ion-select-option value="black">黑色</ion-select-option>
          <ion-select-option value="red">红色</ion-select-option>
        </ion-select>
      </ion-item>,

      <ion-item>
        <ion-label>选择：弹出框界面</ion-label>
        <ion-select interface="popover" interfaceOptions={options}>
          <ion-select-option value="brown">棕色</ion-select-option>
          <ion-select-option value="blonde">金色</ion-select-option>
          <ion-select-option value="black">黑色</ion-select-option>
          <ion-select-option value="red">红色</ion-select-option>
        </ion-select>
      </ion-item>,

      <ion-item>
        <ion-label>选择：操作表界面</ion-label>
        <ion-select interface="action-sheet" interfaceOptions={options}>
          <ion-select-option value="brown">棕色</ion-select-option>
          <ion-select-option value="blonde">金色</ion-select-option>
          <ion-select-option value="black">黑色</ion-select-option>
          <ion-select-option value="red">红色</ion-select-option>
        </ion-select>
      </ion-item>,
    ];
  }
}
```

```css
/* 弹出框界面：使用项目的 CSS 变量为弹出框设置颜色 */
.my-custom-interface .select-interface-option {
  --color: #971e49;
  --color-hover: #79193b;
}

/* 操作表界面：使用其按钮 CSS 变量为操作表设置颜色 */
.my-custom-interface .select-interface-option {
  --button-color: #971e49;
  --button-color-hover: #79193b;
}

/* 警告框界面：为警告框选项设置颜色（单选） */
.my-custom-interface .select-interface-option .alert-radio-label {
  color: #971e49;
}

/* 警告框界面：为警告框选项设置颜色（多选） */
.my-custom-interface .select-interface-option .alert-checkbox-label {
  color: #971e49;
}

/* 警告框界面：为选中的警告框选项设置颜色（单选） */
.my-custom-interface .select-interface-option[aria-checked='true'] .alert-radio-label {
  color: #79193b;
}

/* 警告框界面：为选中的警告框选项设置颜色（多选） */
.my-custom-interface .select-interface-option[aria-checked='true'] .alert-checkbox-label {
  color: #79193b;
}
```

> 注意：在 CSS 示例中，某些选择器可以组合在一起，但为了更好解释每个选择器的用途，将它们分开了。

### 定制单个选项

要定制单个选项，请在 `ion-select-option` 上设置一个类：

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-option-example',
  styleUrl: 'select-option-example.css',
})
export class SelectOptionExample {
  options = {
    cssClass: 'my-custom-interface',
  };

  render() {
    return [
      <ion-item>
        <ion-label>选择</ion-label>
        <ion-select interface="popover" interfaceOptions={options}>
          <ion-select-option value="brown" class="brown-option">
            棕色
          </ion-select-option>
          <ion-select-option value="blonde">金色</ion-select-option>
          <ion-select-option value="black">黑色</ion-select-option>
          <ion-select-option value="red">红色</ion-select-option>
        </ion-select>
      </ion-item>,
    ];
  }
}
```

```css
/* 弹出框界面：使用项目的 CSS 变量为弹出框设置颜色 */
.my-custom-interface .brown-option {
  --color: #5e3e2c;
  --color-hover: #362419;
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-item>
    <ion-label>选择</ion-label>
    <ion-select>
      <ion-select-option value="brown">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="black">黑色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>
</template>

<script>
  import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonSelect, IonSelectOption },
  });
</script>
```

### 定制选项

```html
<template>
  <ion-item>
    <ion-label>选择：警告框界面</ion-label>
    <ion-select :interface-options="options">
      <ion-select-option value="brown">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="black">黑色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>选择：警告框界面（多选）</ion-label>
    <ion-select :interface-options="options" multiple="true">
      <ion-select-option value="brown">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="black">黑色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>选择：弹出框界面</ion-label>
    <ion-select interface="popover" :interface-options="options">
      <ion-select-option value="brown">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="black">黑色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>选择：操作表界面</ion-label>
    <ion-select interface="action-sheet" :interface-options="options">
      <ion-select-option value="brown">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="black">黑色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>
</template>

<script>
  import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonSelect, IonSelectOption },
    setup() {
      const options: any = {
        cssClass: 'my-custom-interface',
      };

      return { options };
    },
  });
</script>
```

```css
/* 弹出框界面：使用项目的 CSS 变量为弹出框设置颜色 */
.my-custom-interface .select-interface-option {
  --color: #971e49;
  --color-hover: #79193b;
}

/* 操作表界面：使用其按钮 CSS 变量为操作表设置颜色 */
.my-custom-interface .select-interface-option {
  --button-color: #971e49;
  --button-color-hover: #79193b;
}

/* 警告框界面：为警告框选项设置颜色（单选） */
.my-custom-interface .select-interface-option .alert-radio-label {
  color: #971e49;
}

/* 警告框界面：为警告框选项设置颜色（多选） */
.my-custom-interface .select-interface-option .alert-checkbox-label {
  color: #971e49;
}

/* 警告框界面：为选中的警告框选项设置颜色（单选） */
.my-custom-interface .select-interface-option[aria-checked='true'] .alert-radio-label {
  color: #79193b;
}

/* 警告框界面：为选中的警告框选项设置颜色（多选） */
.my-custom-interface .select-interface-option[aria-checked='true'] .alert-checkbox-label {
  color: #79193b;
}
```

> 注意：在 CSS 示例中，某些选择器可以组合在一起，但为了更好解释每个选择器的用途，将它们分开了。

### 定制单个选项

要定制单个选项，请在 `ion-select-option` 上设置一个类：

```html
<template>
  <ion-item>
    <ion-label>选择</ion-label>
    <ion-select interface="popover" :interface-options="options">
      <ion-select-option value="brown" class="brown-option">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="black">黑色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>
</template>

<script>
  import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonItem, IonLabel, IonSelect, IonSelectOption },
    setup() {
      const options: any = {
        cssClass: 'my-custom-interface',
      };

      return { options };
    },
  });
</script>
```

```css
/* 弹出框界面：使用项目的 CSS 变量为弹出框设置颜色 */
.my-custom-interface .brown-option {
  --color: #5e3e2c;
  --color-hover: #362419;
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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />