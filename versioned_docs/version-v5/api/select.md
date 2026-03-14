---
sidebar_label: 'ion-select'
demoUrl: '/docs/demos/api/select/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/select/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/select/props.md';
import Events from '@ionic-internal/component-api/v5/select/events.md';
import Methods from '@ionic-internal/component-api/v5/select/methods.md';
import Parts from '@ionic-internal/component-api/v5/select/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/select/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/select/slots.md';

# ion-select

选择器是一种表单控件，用于从一组选项中选择一个或多个选项，类似于原生的 `<select>` 元素。当用户点击选择器时，会弹出一个对话框，其中所有选项都以大号、易于选择的列表形式呈现。

选择器应与子元素 `<ion-select-option>` 一起使用。如果子选项没有提供 `value` 属性，则其文本内容将被用作值。

如果在 `<ion-select>` 上设置了 `value`，则将根据该值选定对应的选项。

## 界面

默认情况下，选择器使用 [ion-alert](alert.md) 在警告框中打开选项覆盖层。通过向 `interface` 属性分别传递 `action-sheet` 或 `popover`，可以将界面更改为使用 [ion-action-sheet](action-sheet.md) 或 [ion-popover](popover.md)。请阅读其他部分以了解不同界面的限制。

## 单选

默认情况下，选择器允许用户仅选择一个选项。警告框界面以单选按钮样式的选项列表呈现给用户。操作表界面只能用于单值选择器。选择器组件的值接收所选选项的值。

## 多选

通过向选择器添加 `multiple` 属性，用户可以选择多个选项。当可以选择多个选项时，警告框覆盖层以复选框样式的选项列表呈现给用户。选择器组件的值接收所有选定选项值的数组。

注意：`action-sheet` 和 `popover` 界面不支持多选。

## 对象值引用

当使用对象作为选择器的值时，如果这些对象来自服务器或数据库，它们的身份可能会发生变化，而所选值的身份保持不变。例如，当使用所需对象值的现有记录加载到选择器中，但新检索到的选择选项现在具有不同的身份时，可能会发生这种情况。这将导致选择器看起来根本没有值，即使原始选择仍然存在。

默认情况下，选择器使用对象相等性（`===`）来确定选项是否被选中。可以通过向 `compareWith` 属性提供属性名称或函数来覆盖此行为。

## 选择器按钮

警告框支持两个按钮：`Cancel` 和 `OK`。可以使用 `cancelText` 和 `okText` 属性自定义每个按钮的文本。

`action-sheet` 和 `popover` 界面没有 `OK` 按钮，点击任何选项将自动关闭覆盖层并选择该值。`popover` 界面没有 `Cancel` 按钮，点击背景将关闭覆盖层。

## 界面选项

由于选择器使用警告框、操作表和弹出框界面，可以通过 `interfaceOptions` 属性将这些组件的选项传递进去。这可用于传递自定义头部、副头部、CSS 类等。

有关每个界面接受的属性，请参阅 [ion-alert 文档](alert.md)、[ion-action-sheet 文档](action-sheet.md) 和 [ion-popover 文档](popover.md)。

注意：`interfaceOptions` 不会覆盖 `alert` 界面的 `inputs` 或 `buttons`。

## 自定义

选择器组件由两个单元组成，每个单元需要单独设置样式。`ion-select` 元素在视图上表示为选定的值（如果没有选定值，则为占位符）和下拉图标。界面，即上面[界面](#界面)部分定义的对话框，是在点击 `ion-select` 时打开的。该界面包含通过添加 `ion-select-option` 元素定义的所有选项。以下部分将介绍设置这些样式之间的区别。

### 设置选择器元素的样式

如前所述，`ion-select` 元素仅包含视图上显示的值（或占位符）和图标。要自定义此样式，请结合使用 CSS 和任何 [CSS 自定义属性](#css-自定义属性)：

```css
ion-select {
  /* 应用于值和占位符颜色 */
  color: #545ca7;

  /* 设置不同的占位符颜色 */
  --placeholder-color: #971e49;

  /* 设置占位符为完全不透明 */
  --placeholder-opacity: 1;
}
```

或者，根据所需的[浏览器支持](https://caniuse.com/#feat=mdn-css_selectors_part)，可以使用 CSS 影子部分来设置选择器的样式：

```css
/* 设置宽度为全容器并居中内容 */
ion-select {
  width: 100%;

  justify-content: center;
}

/* 设置 flex 以使文本宽度适应其内容 */
ion-select::part(placeholder),
ion-select::part(text) {
  flex: 0 0 auto;
}

/* 设置占位符颜色和不透明度 */
ion-select::part(placeholder) {
  color: #20a08a;
  opacity: 1;
}

/*
 * 设置占位符第一个字母的字体
 * 影子部分也适用于伪元素！
 * https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements
 */
ion-select::part(placeholder)::first-letter {
  font-size: 24px;
  font-weight: 500;
}

/* 设置文本颜色 */
ion-select::part(text) {
  color: #545ca7;
}

/* 设置图标颜色和不透明度 */
ion-select::part(icon) {
  color: #971e49;
  opacity: 1;
}
```

请注意，通过使用 `::part`，可以针对元素上的任何 CSS 属性。

### 设置选择器界面的样式

自定义界面对话框应遵循该界面文档中的自定义部分进行操作：

- [警告框自定义](alert.md#自定义)
- [操作表自定义](action-sheet.md#自定义)
- [弹出框自定义](popover.md#自定义)

但是，Select Option 确实设置了一个类以便于样式设置，并允许向覆盖层选项传递类，有关自定义选项的使用示例，请参阅 [选择选项文档](select-option.md)。

## 用法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

### 单选

```html
<ion-list>
  <ion-list-header>
    <ion-label> 单选 </ion-label>
  </ion-list-header>

  <ion-item>
    <ion-label>性别</ion-label>
    <ion-select placeholder="选择一个">
      <ion-select-option value="f">女性</ion-select-option>
      <ion-select-option value="m">男性</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>发色</ion-label>
    <ion-select value="brown" okText="确定" cancelText="取消">
      <ion-select-option value="brown">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="black">黑色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```

### 多选

```html
<ion-list>
  <ion-list-header>
    <ion-label> 多选 </ion-label>
  </ion-list-header>

  <ion-item>
    <ion-label>配料</ion-label>
    <ion-select multiple="true" cancelText="算了" okText="好的！">
      <ion-select-option value="bacon">培根</ion-select-option>
      <ion-select-option value="olives">黑橄榄</ion-select-option>
      <ion-select-option value="xcheese">额外芝士</ion-select-option>
      <ion-select-option value="peppers">青椒</ion-select-option>
      <ion-select-option value="mushrooms">蘑菇</ion-select-option>
      <ion-select-option value="onions">洋葱</ion-select-option>
      <ion-select-option value="pepperoni">意大利辣香肠</ion-select-option>
      <ion-select-option value="pineapple">菠萝</ion-select-option>
      <ion-select-option value="sausage">香肠</ion-select-option>
      <ion-select-option value="Spinach">菠菜</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>宠物</ion-label>
    <ion-select multiple="true" [value]="['bird', 'dog']">
      <ion-select-option value="bird">鸟</ion-select-option>
      <ion-select-option value="cat">猫</ion-select-option>
      <ion-select-option value="dog">狗</ion-select-option>
      <ion-select-option value="honeybadger">蜜獾</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```

### 对象作为值

```html
<ion-list>
  <ion-list-header>
    <ion-label> 对象作为值 (compareWith) </ion-label>
  </ion-list-header>

  <ion-item>
    <ion-label>用户</ion-label>
    <ion-select [compareWith]="compareWith">
      <ion-select-option *ngFor="let user of users" [value]="user">{{user.first + ' ' + user.last}}</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```

```tsx
import { Component } from '@angular/core';

interface User {
  id: number;
  first: string;
  last: string;
}

@Component({
  selector: 'select-example',
  templateUrl: 'select-example.html',
  styleUrls: ['./select-example.css'],
})
export class SelectExample {
  users: User[] = [
    {
      id: 1,
      first: '爱丽丝',
      last: '史密斯',
    },
    {
      id: 2,
      first: '鲍勃',
      last: '戴维斯',
    },
    {
      id: 3,
      first: '查理',
      last: '罗森伯格',
    },
  ];

  compareWith(o1: User, o2: User) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
```

### 对象作为值（多选）

```html
<ion-list>
  <ion-list-header>
    <ion-label> 对象作为值 (compareWith) </ion-label>
  </ion-list-header>

  <ion-item>
    <ion-label>用户</ion-label>
    <ion-select [compareWith]="compareWith" multiple="true">
      <ion-select-option *ngFor="let user of users" [value]="user">{{user.first + ' ' + user.last}}</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```

```tsx
import { Component } from '@angular/core';

interface User {
  id: number;
  first: string;
  last: string;
}

@Component({
  selector: 'select-example',
  templateUrl: 'select-example.html',
  styleUrls: ['./select-example.css'],
})
export class SelectExample {
  users: User[] = [
    {
      id: 1,
      first: '爱丽丝',
      last: '史密斯',
    },
    {
      id: 2,
      first: '鲍勃',
      last: '戴维斯',
    },
    {
      id: 3,
      first: '查理',
      last: '罗森伯格',
    },
  ];

  compareWith(o1: User, o2: User | User[]) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((u: User) => u.id === o1.id);
    }

    return o1.id === o2.id;
  }
}
```

### 界面选项

```html
<ion-list>
  <ion-list-header>
    <ion-label> 界面选项 </ion-label>
  </ion-list-header>

  <ion-item>
    <ion-label>警告框</ion-label>
    <ion-select [interfaceOptions]="customAlertOptions" interface="alert" multiple="true" placeholder="选择一个">
      <ion-select-option value="bacon">培根</ion-select-option>
      <ion-select-option value="olives">黑橄榄</ion-select-option>
      <ion-select-option value="xcheese">额外芝士</ion-select-option>
      <ion-select-option value="peppers">青椒</ion-select-option>
      <ion-select-option value="mushrooms">蘑菇</ion-select-option>
      <ion-select-option value="onions">洋葱</ion-select-option>
      <ion-select-option value="pepperoni">意大利辣香肠</ion-select-option>
      <ion-select-option value="pineapple">菠萝</ion-select-option>
      <ion-select-option value="sausage">香肠</ion-select-option>
      <ion-select-option value="Spinach">菠菜</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>弹出框</ion-label>
    <ion-select [interfaceOptions]="customPopoverOptions" interface="popover" placeholder="选择一个">
      <ion-select-option value="brown">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="black">黑色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>操作表</ion-label>
    <ion-select [interfaceOptions]="customActionSheetOptions" interface="action-sheet" placeholder="选择一个">
      <ion-select-option value="red">红色</ion-select-option>
      <ion-select-option value="purple">紫色</ion-select-option>
      <ion-select-option value="yellow">黄色</ion-select-option>
      <ion-select-option value="orange">橙色</ion-select-option>
      <ion-select-option value="green">绿色</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```

```tsx
import { Component } from '@angular/core';

@Component({
  selector: 'select-example',
  templateUrl: 'select-example.html',
  styleUrls: ['./select-example.css'],
})
export class SelectExample {
  customAlertOptions: any = {
    header: '披萨配料',
    subHeader: '选择你的配料',
    message: '每份配料 $1.00',
    translucent: true,
  };

  customPopoverOptions: any = {
    header: '发色',
    subHeader: '选择你的发色',
    message: '仅选择你的主要发色',
  };

  customActionSheetOptions: any = {
    header: '颜色',
    subHeader: '选择你最喜欢的颜色',
  };
}
```

</TabItem>

<TabItem value="javascript">

### 单选

```html
<ion-list>
  <ion-list-header>
    <ion-label> 单选 </ion-label>
  </ion-list-header>

  <ion-item>
    <ion-label>性别</ion-label>
    <ion-select placeholder="选择一个">
      <ion-select-option value="f">女性</ion-select-option>
      <ion-select-option value="m">男性</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>发色</ion-label>
    <ion-select value="brown" ok-text="确定" cancel-text="取消">
      <ion-select-option value="brown">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="black">黑色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```

### 多选

```html
<ion-list>
  <ion-list-header>
    <ion-label> 多选 </ion-label>
  </ion-list-header>

  <ion-item>
    <ion-label>配料</ion-label>
    <ion-select multiple="true" cancel-text="算了" ok-text="好的！">
      <ion-select-option value="bacon">培根</ion-select-option>
      <ion-select-option value="olives">黑橄榄</ion-select-option>
      <ion-select-option value="xcheese">额外芝士</ion-select-option>
      <ion-select-option value="peppers">青椒</ion-select-option>
      <ion-select-option value="mushrooms">蘑菇</ion-select-option>
      <ion-select-option value="onions">洋葱</ion-select-option>
      <ion-select-option value="pepperoni">意大利辣香肠</ion-select-option>
      <ion-select-option value="pineapple">菠萝</ion-select-option>
      <ion-select-option value="sausage">香肠</ion-select-option>
      <ion-select-option value="Spinach">菠菜</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>宠物</ion-label>
    <ion-select id="multiple" multiple="true">
      <ion-select-option value="bird">鸟</ion-select-option>
      <ion-select-option value="cat">猫</ion-select-option>
      <ion-select-option value="dog">狗</ion-select-option>
      <ion-select-option value="honeybadger">蜜獾</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```

```javascript
const select = document.querySelector('multiple');
select.value = ['bird', 'dog'];
```

### 对象作为值

```html
<ion-list>
  <ion-list-header>
    <ion-label> 对象作为值 (compareWith) </ion-label>
  </ion-list-header>

  <ion-item>
    <ion-label>用户</ion-label>
    <ion-select id="objectSelectCompareWith"></ion-select>
  </ion-item>
</ion-list>
```

```javascript
  let objectOptions = [
    {
      id: 1,
      first: '爱丽丝',
      last: '史密斯',
    },
    {
      id: 2,
      first: '鲍勃',
      last: '戴维斯',
    },
    {
      id: 3,
      first: '查理',
      last: '罗森伯格',
    }
  ];

  let compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  let objectSelectElement = document.getElementById('objectSelectCompareWith');
  objectSelectElement.compareWith = compareWithFn;

  objectOptions.forEach((option, i) => {
    let selectOption = document.createElement('ion-select-option');
    selectOption.value = option;
    selectOption.textContent = option.first + ' ' + option.last;

    objectSelectElement.appendChild(selectOption)
  });

  objectSelectElement.value = objectOptions[0];
}
```

### 界面选项

```html
<ion-list>
  <ion-list-header>
    <ion-label> 界面选项 </ion-label>
  </ion-list-header>

  <ion-item>
    <ion-label>警告框</ion-label>
    <ion-select id="customAlertSelect" interface="alert" multiple="true" placeholder="选择一个">
      <ion-select-option value="bacon">培根</ion-select-option>
      <ion-select-option value="olives">黑橄榄</ion-select-option>
      <ion-select-option value="xcheese">额外芝士</ion-select-option>
      <ion-select-option value="peppers">青椒</ion-select-option>
      <ion-select-option value="mushrooms">蘑菇</ion-select-option>
      <ion-select-option value="onions">洋葱</ion-select-option>
      <ion-select-option value="pepperoni">意大利辣香肠</ion-select-option>
      <ion-select-option value="pineapple">菠萝</ion-select-option>
      <ion-select-option value="sausage">香肠</ion-select-option>
      <ion-select-option value="Spinach">菠菜</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>弹出框</ion-label>
    <ion-select id="customPopoverSelect" interface="popover" placeholder="选择一个">
      <ion-select-option value="brown">棕色</ion-select-option>
      <ion-select-option value="blonde">金色</ion-select-option>
      <ion-select-option value="black">黑色</ion-select-option>
      <ion-select-option value="red">红色</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>操作表</ion-label>
    <ion-select id="customActionSheetSelect" interface="action-sheet" placeholder="选择一个">
      <ion-select-option value="red">红色</ion-select-option>
      <ion-select-option value="purple">紫色</ion-select-option>
      <ion-select-option value="yellow">黄色</ion-select-option>
      <ion-select-option value="orange">橙色</ion-select-option>
      <ion-select-option value="green">绿色</ion-select-option>
    </ion-select>
  </ion-item>
</ion-list>
```

```javascript
var customAlertSelect = document.getElementById('customAlertSelect');
var customAlertOptions = {
  header: '披萨配料',
  subHeader: '选择你的配料',
  message: '每份配料 $1.00',
  translucent: true,
};
customAlertSelect.interfaceOptions = customAlertOptions;

var customPopoverSelect = document.getElementById('customPopoverSelect');
var customPopoverOptions = {
  header: '发色',
  subHeader: '选择你的发色',
  message: '仅选择你的主要发色',
};
customPopoverSelect.interfaceOptions = customPopoverOptions;

var customActionSheetSelect = document.getElementById('customActionSheetSelect');
var customActionSheetOptions = {
  header: '颜色',
  subHeader: '选择你最喜欢的颜色',
};
customActionSheetSelect.interfaceOptions = customActionSheetOptions;
```

</TabItem>

<TabItem value="react">

### 单选

```tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonPage,
  IonItemDivider,
} from '@ionic/react';

export const SingleSelection: React.FC = () => {
  const [gender, setGender] = useState<string>();
  const [hairColor, setHairColor] = useState<string>('brown');

  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>单选</IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>性别</IonLabel>
            <IonSelect value={gender} placeholder="选择一个" onIonChange={(e) => setGender(e.detail.value)}>
              <IonSelectOption value="female">女性</IonSelectOption>
              <IonSelectOption value="male">男性</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>发色</IonLabel>
            <IonSelect
              value={hairColor}
              okText="确定"
              cancelText="取消"
              onIonChange={(e) => setHairColor(e.detail.value)}
            >
              <IonSelectOption value="brown">棕色</IonSelectOption>
              <IonSelectOption value="blonde">金色</IonSelectOption>
              <IonSelectOption value="black">黑色</IonSelectOption>
              <IonSelectOption value="red">红色</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItemDivider>你的选择</IonItemDivider>
          <IonItem>性别: {gender ?? '(未选择)'}</IonItem>
          <IonItem>发色: {hairColor}</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```

### 多选

```tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonPage,
  IonItemDivider,
} from '@ionic/react';

export const MultipleSelection: React.FC = () => {
  const [toppings, setToppings] = useState<string[]>([]);
  const [pets, setPets] = useState<string[]>(['bird', 'dog']);

  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>多选</IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>配料</IonLabel>
            <IonSelect
              value={toppings}
              multiple={true}
              cancelText="算了"
              okText="好的！"
              onIonChange={(e) => setToppings(e.detail.value)}
            >
              <IonSelectOption value="bacon">培根</IonSelectOption>
              <IonSelectOption value="olives">黑橄榄</IonSelectOption>
              <IonSelectOption value="xcheese">额外芝士</IonSelectOption>
              <IonSelectOption value="peppers">青椒</IonSelectOption>
              <IonSelectOption value="mushrooms">蘑菇</IonSelectOption>
              <IonSelectOption value="onions">洋葱</IonSelectOption>
              <IonSelectOption value="pepperoni">意大利辣香肠</IonSelectOption>
              <IonSelectOption value="pineapple">菠萝</IonSelectOption>
              <IonSelectOption value="sausage">香肠</IonSelectOption>
              <IonSelectOption value="Spinach">菠菜</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>宠物</IonLabel>
            <IonSelect multiple={true} value={pets} onIonChange={(e) => setPets(e.detail.value)}>
              <IonSelectOption value="bird">鸟</IonSelectOption>
              <IonSelectOption value="cat">猫</IonSelectOption>
              <IonSelectOption value="dog">狗</IonSelectOption>
              <IonSelectOption value="honeybadger">蜜獾</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItemDivider>你的选择</IonItemDivider>
          <IonItem>
            配料: {toppings.length ? toppings.reduce((curr, prev) => prev + ', ' + curr, '') : '(未选择)'}
          </IonItem>
          <IonItem>
            宠物: {pets.length ? pets.reduce((curr, prev) => prev + ', ' + curr, '') : '(未选择)'}
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```

### 对象作为值

```tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonPage,
  IonItemDivider,
} from '@ionic/react';

const users = [
  {
    id: 1,
    first: '爱丽丝',
    last: '史密斯',
  },
  {
    id: 2,
    first: '鲍勃',
    last: '戴维斯',
  },
  {
    id: 3,
    first: '查理',
    last: '罗森伯格',
  },
];

type User = (typeof users)[number];

const compareWith = (o1: User, o2: User) => {
  return o1 && o2 ? o1.id === o2.id : o1 === o2;
};

export const ObjectSelection: React.FC = () => {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>对象作为值 (compareWith)</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>用户</IonLabel>
            <IonSelect
              compareWith={compareWith}
              value={selectedUsers}
              multiple
              onIonChange={(e) => setSelectedUsers(e.detail.value)}
            >
              {users.map((user) => (
                <IonSelectOption key={user.id} value={user}>
                  {user.first} {user.last}
                </IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItemDivider>已选择的用户</IonItemDivider>
          {selectedUsers.length ? (
            selectedUsers.map((user) => (
              <IonItem key={user.id}>
                {user.first} {user.last}
              </IonItem>
            ))
          ) : (
            <IonItem>(未选择)</IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```

### 界面选项

```tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonPage,
  IonItemDivider,
} from '@ionic/react';

const customAlertOptions = {
  header: '披萨配料',
  subHeader: '选择你的配料',
  message: '每份配料 $1.00',
  translucent: true,
};

const customPopoverOptions = {
  header: '发色',
  subHeader: '选择你的发色',
  message: '仅选择你的主要发色',
};

const customActionSheetOptions = {
  header: '颜色',
  subHeader: '选择你最喜欢的颜色',
};

export const InterfaceOptionsSelection: React.FC = () => {
  const [toppings, setToppings] = useState<string[]>([]);
  const [hairColor, setHairColor] = useState<string>('brown');
  const [color, setColor] = useState<string>();

  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel>界面选项</IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>警告框</IonLabel>
            <IonSelect
              interfaceOptions={customAlertOptions}
              interface="alert"
              multiple={true}
              placeholder="选择一个"
              onIonChange={(e) => setToppings(e.detail.value)}
              value={toppings}
            >
              <IonSelectOption value="bacon">培根</IonSelectOption>
              <IonSelectOption value="olives">黑橄榄</IonSelectOption>
              <IonSelectOption value="xcheese">额外芝士</IonSelectOption>
              <IonSelectOption value="peppers">青椒</IonSelectOption>
              <IonSelectOption value="mushrooms">蘑菇</IonSelectOption>
              <IonSelectOption value="onions">洋葱</IonSelectOption>
              <IonSelectOption value="pepperoni">意大利辣香肠</IonSelectOption>
              <IonSelectOption value="pineapple">菠萝</IonSelectOption>
              <IonSelectOption value="sausage">香肠</IonSelectOption>
              <IonSelectOption value="Spinach">菠菜</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>弹出框</IonLabel>
            <IonSelect
              interfaceOptions={customPopoverOptions}
              interface="popover"
              placeholder="选择一个"
              onIonChange={(e) => setHairColor(e.detail.value)}
              value={hairColor}
            >
              <IonSelectOption value="brown">棕色</IonSelectOption>
              <IonSelectOption value="blonde">金色</IonSelectOption>
              <IonSelectOption value="black">黑色</IonSelectOption>
              <IonSelectOption value="red">红色</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>操作表</IonLabel>
            <IonSelect
              interfaceOptions={customActionSheetOptions}
              interface="action-sheet"
              placeholder="选择一个"
              onIonChange={(e) => setColor(e.detail.value)}
              value={color}
            >
              <IonSelectOption value="red">红色</IonSelectOption>
              <IonSelectOption value="purple">紫色</IonSelectOption>
              <IonSelectOption value="yellow">黄色</IonSelectOption>
              <IonSelectOption value="orange">橙色</IonSelectOption>
              <IonSelectOption value="green">绿色</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItemDivider>你的选择</IonItemDivider>
          <IonItem>
            配料: {toppings.length ? toppings.reduce((curr, prev) => prev + ', ' + curr, '') : '(未选择)'}
          </IonItem>
          <IonItem>发色: {hairColor}</IonItem>
          <IonItem>颜色: {color ?? '(未选择)'}</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
```

</TabItem>

<TabItem value="stencil">

### 单选

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-example',
  styleUrl: 'select-example.css',
})
export class SelectExample {
  render() {
    return [
      <ion-list>
        <ion-list-header>
          <ion-label>单选</ion-label>
        </ion-list-header>

        <ion-item>
          <ion-label>性别</ion-label>
          <ion-select placeholder="选择一个">
            <ion-select-option value="f">女性</ion-select-option>
            <ion-select-option value="m">男性</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>发色</ion-label>
          <ion-select value="brown" okText="确定" cancelText="取消">
            <ion-select-option value="brown">棕色</ion-select-option>
            <ion-select-option value="blonde">金色</ion-select-option>
            <ion-select-option value="black">黑色</ion-select-option>
            <ion-select-option value="red">红色</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>,
    ];
  }
}
```

### 多选

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-example',
  styleUrl: 'select-example.css',
})
export class SelectExample {
  render() {
    return [
      <ion-list>
        <ion-list-header>
          <ion-label>多选</ion-label>
        </ion-list-header>

        <ion-item>
          <ion-label>配料</ion-label>
          <ion-select multiple={true} cancelText="算了" okText="好的！">
            <ion-select-option value="bacon">培根</ion-select-option>
            <ion-select-option value="olives">黑橄榄</ion-select-option>
            <ion-select-option value="xcheese">额外芝士</ion-select-option>
            <ion-select-option value="peppers">青椒</ion-select-option>
            <ion-select-option value="mushrooms">蘑菇</ion-select-option>
            <ion-select-option value="onions">洋葱</ion-select-option>
            <ion-select-option value="pepperoni">意大利辣香肠</ion-select-option>
            <ion-select-option value="pineapple">菠萝</ion-select-option>
            <ion-select-option value="sausage">香肠</ion-select-option>
            <ion-select-option value="Spinach">菠菜</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>宠物</ion-label>
          <ion-select multiple={true} value={['bird', 'dog']}>
            <ion-select-option value="bird">鸟</ion-select-option>
            <ion-select-option value="cat">猫</ion-select-option>
            <ion-select-option value="dog">狗</ion-select-option>
            <ion-select-option value="honeybadger">蜜獾</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>,
    ];
  }
}
```

### 对象作为值

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-example',
  styleUrl: 'select-example.css',
})
export class SelectExample {
  private users: any[] = [
    {
      id: 1,
      first: '爱丽丝',
      last: '史密斯',
    },
    {
      id: 2,
      first: '鲍勃',
      last: '戴维斯',
    },
    {
      id: 3,
      first: '查理',
      last: '罗森伯格',
    },
  ];

  compareWith = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  render() {
    return [
      <ion-list>
        <ion-list-header>
          <ion-label>对象作为值 (compareWith)</ion-label>
        </ion-list-header>

        <ion-item>
          <ion-label>用户</ion-label>
          <ion-select compareWith={this.compareWith}>
            {this.users.map((user) => (
              <ion-select-option value={user}>{user.first + ' ' + user.last}</ion-select-option>
            ))}
          </ion-select>
        </ion-item>
      </ion-list>,
    ];
  }
}
```

### 界面选项

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'select-example',
  styleUrl: 'select-example.css',
})
export class SelectExample {
  private customAlertOptions: any = {
    header: '披萨配料',
    subHeader: '选择你的配料',
    message: '每份配料 $1.00',
    translucent: true,
  };

  private customPopoverOptions: any = {
    header: '发色',
    subHeader: '选择你的发色',
    message: '仅选择你的主要发色',
  };

  private customActionSheetOptions: any = {
    header: '颜色',
    subHeader: '选择你最喜欢的颜色',
  };

  render() {
    return [
      <ion-list>
        <ion-list-header>
          <ion-label>界面选项</ion-label>
        </ion-list-header>

        <ion-item>
          <ion-label>警告框</ion-label>
          <ion-select
            interfaceOptions={this.customAlertOptions}
            interface="alert"
            multiple={true}
            placeholder="选择一个"
          >
            <ion-select-option value="bacon">培根</ion-select-option>
            <ion-select-option value="olives">黑橄榄</ion-select-option>
            <ion-select-option value="xcheese">额外芝士</ion-select-option>
            <ion-select-option value="peppers">青椒</ion-select-option>
            <ion-select-option value="mushrooms">蘑菇</ion-select-option>
            <ion-select-option value="onions">洋葱</ion-select-option>
            <ion-select-option value="pepperoni">意大利辣香肠</ion-select-option>
            <ion-select-option value="pineapple">菠萝</ion-select-option>
            <ion-select-option value="sausage">香肠</ion-select-option>
            <ion-select-option value="Spinach">菠菜</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>弹出框</ion-label>
          <ion-select interfaceOptions={this.customPopoverOptions} interface="popover" placeholder="选择一个">
            <ion-select-option value="brown">棕色</ion-select-option>
            <ion-select-option value="blonde">金色</ion-select-option>
            <ion-select-option value="black">黑色</ion-select-option>
            <ion-select-option value="red">红色</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>操作表</ion-label>
          <ion-select
            interfaceOptions={this.customActionSheetOptions}
            interface="action-sheet"
            placeholder="选择一个"
          >
            <ion-select-option value="red">红色</ion-select-option>
            <ion-select-option value="purple">紫色</ion-select-option>
            <ion-select-option value="yellow">黄色</ion-select-option>
            <ion-select-option value="orange">橙色</ion-select-option>
            <ion-select-option value="green">绿色</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

### 单选

```html
<template>
  <ion-list>
    <ion-list-header>
      <ion-label> 单选 </ion-label>
    </ion-list-header>

    <ion-item>
      <ion-label>性别</ion-label>
      <ion-select placeholder="选择一个">
        <ion-select-option value="f">女性</ion-select-option>
        <ion-select-option value="m">男性</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>发色</ion-label>
      <ion-select value="brown" ok-text="确定" cancel-text="取消">
        <ion-select-option value="brown">棕色</ion-select-option>
        <ion-select-option value="blonde">金色</ion-select-option>
        <ion-select-option value="black">黑色</ion-select-option>
        <ion-select-option value="red">红色</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonLabel, IonList, IonListHeader, IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonItem,
      IonLabel,
      IonList,
      IonListHeader,
      IonSelect,
      IonSelectOption,
    },
  });
</script>
```

### 多选

```html
<template>
  <ion-list>
    <ion-list-header>
      <ion-label>
        多选
      </ion-label>
    </ion-list-header>

    <ion-item>
      <ion-label>配料</ion-label>
      <ion-select multiple="true" cancel-text="算了" ok-text="好的！">
        <ion-select-option value="bacon">培根</ion-select-option>
        <ion-select-option value="olives">黑橄榄</ion-select-option>
        <ion-select-option value="xcheese">额外芝士</ion-select-option>
        <ion-select-option value="peppers">青椒</ion-select-option>
        <ion-select-option value="mushrooms">蘑菇</ion-select-option>
        <ion-select-option value="onions">洋葱</ion-select-option>
        <ion-select-option value="pepperoni">意大利辣香肠</ion-select-option>
        <ion-select-option value="pineapple">菠萝</ion-select-option>
        <ion-select-option value="sausage">香肠</ion-select-option>
        <ion-select-option value="Spinach">菠菜</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>宠物</ion-label>
      <ion-select multiple="true" :value=['bird', 'dog']>
        <ion-select-option value="bird">鸟</ion-select-option>
        <ion-select-option value="cat">猫</ion-select-option>
        <ion-select-option value="dog">狗</ion-select-option>
        <ion-select-option value="honeybadger">蜜獾</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script>
import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonSelect,
    IonSelectOption
  }
});
</script>
```

### 界面选项

```html
<template>
  <ion-list>
    <ion-list-header>
      <ion-label> 界面选项 </ion-label>
    </ion-list-header>

    <ion-item>
      <ion-label>警告框</ion-label>
      <ion-select :interface-options="customAlertOptions" interface="alert" multiple="true" placeholder="选择一个">
        <ion-select-option value="bacon">培根</ion-select-option>
        <ion-select-option value="olives">黑橄榄</ion-select-option>
        <ion-select-option value="xcheese">额外芝士</ion-select-option>
        <ion-select-option value="peppers">青椒</ion-select-option>
        <ion-select-option value="mushrooms">蘑菇</ion-select-option>
        <ion-select-option value="onions">洋葱</ion-select-option>
        <ion-select-option value="pepperoni">意大利辣香肠</ion-select-option>
        <ion-select-option value="pineapple">菠萝</ion-select-option>
        <ion-select-option value="sausage">香肠</ion-select-option>
        <ion-select-option value="Spinach">菠菜</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>弹出框</ion-label>
      <ion-select :interface-options="customPopoverOptions" interface="popover" placeholder="选择一个">
        <ion-select-option value="brown">棕色</ion-select-option>
        <ion-select-option value="blonde">金色</ion-select-option>
        <ion-select-option value="black">黑色</ion-select-option>
        <ion-select-option value="red">红色</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label>操作表</ion-label>
      <ion-select :interface-options="customActionSheetOptions" interface="action-sheet" placeholder="选择一个">
        <ion-select-option value="red">红色</ion-select-option>
        <ion-select-option value="purple">紫色</ion-select-option>
        <ion-select-option value="yellow">黄色</ion-select-option>
        <ion-select-option value="orange">橙色</ion-select-option>
        <ion-select-option value="green">绿色</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>
</template>

<script>
  import { IonItem, IonLabel, IonList, IonListHeader, IonSelect, IonSelectOption } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonItem,
      IonLabel,
      IonList,
      IonListHeader,
      IonSelect,
      IonSelectOption,
    },
    setup() {
      const customAlertOptions: any = {
        header: '披萨配料',
        subHeader: '选择你的配料',
        message: '每份配料 $1.00',
        translucent: true,
      };

      const customPopoverOptions: any = {
        header: '发色',
        subHeader: '选择你的发色',
        message: '仅选择你的主要发色',
      };

      const customActionSheetOptions: any = {
        header: '颜色',
        subHeader: '选择你最喜欢的颜色',
      };

      return {
        customAlertOptions,
        customPopoverOptions,
        customActionSheetOptions,
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

## CSS 影子部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />