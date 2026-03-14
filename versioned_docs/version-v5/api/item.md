---
sidebar_label: 'ion-item'
demoUrl: '/docs/demos/api/item/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/item/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@ionic-internal/component-api/v5/item/props.md';
import Events from '@ionic-internal/component-api/v5/item/events.md';
import Methods from '@ionic-internal/component-api/v5/item/methods.md';
import Parts from '@ionic-internal/component-api/v5/item/parts.md';
import CustomProps from '@ionic-internal/component-api/v5/item/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v5/item/slots.md';

# ion-item

项目（Items）是包含文本、图标、头像、图片、输入框以及任何其他原生或自定义元素的元素。通常，它们与其他项目一起放置在列表中。项目可以被滑动、删除、重新排序、编辑等等。

## 可点击项目

如果一个项目设置了 `href` 或 `button` 属性，则它被视为"可点击"。可点击项目具有一些视觉差异，表明它们可以交互。例如，在 `md` 模式下，可点击项目在被激活时会呈现涟漪效果；在 `ios` 模式下，激活时有高亮效果，并且默认会显示一个[详情箭头](#detail-arrows)。

## 详情箭头

默认情况下，[可点击项目](#clickable-items)在 `ios` 模式下会显示一个右箭头图标。要在可点击元素上隐藏右箭头图标，请将 `detail` 属性设置为 `false`。要在默认不显示箭头的项目上显示右箭头图标，请将 `detail` 属性设置为 `true`。

<!--

TODO 将此功能恢复为 CSS 变量

此功能在 `md` 模式下默认不对可点击项目启用，但可以通过设置以下 CSS 变量来启用：

```css
--item-detail-push-show: true;
```

更多信息请参阅[主题文档](../theming/css-variables.md)。

-->

## 项目内容放置

项目使用命名的[插槽 (slots)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) 来定位内容。这种逻辑使得编写复杂的项目时，可以使用简单、易于理解的标记，而无需担心元素的样式和定位问题。

下表详细说明了项目插槽以及元素在项目中的放置位置：

| 插槽名  | 描述                                                                         |
| ------- | ---------------------------------------------------------------------------- |
| `start` | 在 LTR（从左到右）布局中，放置在所有其他内容的左侧；在 RTL（从右到左）布局中，放置在右侧。 |
| `end`   | 在 LTR（从左到右）布局中，放置在所有其他内容的右侧；在 RTL（从右到左）布局中，放置在左侧。 |
| 无      | 放置在输入包装器内部。                                                         |

### 文本对齐

项目默认左对齐文本，并在文本宽度超过项目宽度时添加省略号。有关可以添加到 `<ion-item>` 以转换文本的类，请参阅 [CSS 实用工具文档](../layout/css-utilities.md)。

## 输入框高亮

### 高亮高度

包含输入框的项目在输入框获得焦点、验证通过或验证失败时，会用不同的颜色高亮其底部边框。默认情况下，`md` 项目的高亮高度设置为 `2px`，而 `ios` 没有高亮（技术上高度设置为 `0`）。可以使用 `--highlight-height` CSS 属性更改高度。要关闭高亮，请将此变量设置为 `0`。有关设置 CSS 属性的更多信息，请参阅[主题文档](../theming/css-variables.md)。

### 高亮颜色

高亮颜色根据项目状态而变化，但默认情况下所有状态都使用 Ionic 颜色。当聚焦时，输入框高亮将使用 `primary` 颜色。如果输入有效，它将使用 `success` 颜色，无效输入将使用 `danger` 颜色。有关高亮颜色的变量，请参阅下面的 [CSS 自定义属性](#css-custom-properties)部分。

## 使用方法

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- 默认项目 -->
<ion-item>
  <ion-label> 项目 </ion-label>
</ion-item>

<!-- 作为按钮的项目 -->
<ion-item button (click)="buttonClick()">
  <ion-label> 按钮项目 </ion-label>
</ion-item>

<!-- 作为链接的项目 -->
<ion-item href="https://www.ionicframework.com">
  <ion-label> 链接项目 </ion-label>
</ion-item>

<ion-item color="secondary">
  <ion-label> 次要颜色项目 </ion-label>
</ion-item>
```

### 详情箭头

```html
<ion-item detail>
  <ion-label> 带详情箭头的标准项目 </ion-label>
</ion-item>

<ion-item button (click)="buttonClick()" detail>
  <ion-label> 带详情箭头的按钮项目 </ion-label>
</ion-item>

<ion-item detail="false" href="https://www.ionicframework.com">
  <ion-label> 不带详情箭头的链接项目 </ion-label>
</ion-item>
```

### 列表项目

```html
<ion-list>
  <ion-item>
    <ion-label> 项目 </ion-label>
  </ion-item>

  <ion-item lines="none">
    <ion-label> 无线条项目 </ion-label>
  </ion-item>

  <ion-item>
    <ion-label class="ion-text-wrap">
      当文本太长无法在一行内显示时，应该换行的多行文本。
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label class="ion-text-wrap">
      <ion-text color="primary">
        <h3>H3 主要标题</h3>
      </ion-text>
      <p>段落第1行</p>
      <ion-text color="secondary">
        <p>段落第2行 次要颜色</p>
      </ion-text>
    </ion-label>
  </ion-item>

  <ion-item lines="full">
    <ion-label> 带全宽线条的项目 </ion-label>
  </ion-item>
</ion-list>
```

### 项目线条

```html
<!-- 内嵌线条项目 -->
<ion-item lines="inset">
  <ion-label>内嵌线条项目</ion-label>
</ion-item>

<!-- 全宽线条项目 -->
<ion-item lines="full">
  <ion-label>全宽线条项目</ion-label>
</ion-item>

<!-- 无线条项目 -->
<ion-item lines="none">
  <ion-label>无线条项目</ion-label>
</ion-item>

<!-- 全宽线条列表 -->
<ion-list lines="full">
  <ion-item>
    <ion-label>全宽线条项目 1</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>全宽线条项目 2</ion-label>
  </ion-item>
</ion-list>

<!-- 内嵌线条列表 -->
<ion-list lines="inset">
  <ion-item>
    <ion-label>内嵌线条项目 1</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>内嵌线条项目 2</ion-label>
  </ion-item>
</ion-list>

<!-- 无线条列表 -->
<ion-list lines="none">
  <ion-item>
    <ion-label>无线条项目 1</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>无线条项目 2</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>无线条项目 3</ion-label>
  </ion-item>
</ion-list>
```

### 媒体项目

```html
<ion-item button (click)="testClick()">
  <ion-avatar slot="start">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
  </ion-avatar>
  <ion-label> 头像在开始位置，按钮项目 </ion-label>
</ion-item>

<ion-item href="#">
  <ion-label> 缩略图在结束位置，链接项目 </ion-label>
  <ion-thumbnail slot="end">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
  </ion-thumbnail>
</ion-item>

<ion-item>
  <ion-thumbnail slot="start">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
  </ion-thumbnail>
  <ion-label>
    <h2>H2 标题文本</h2>
    <p>按钮在右侧</p>
  </ion-label>
  <ion-button fill="outline" slot="end">查看</ion-button>
</ion-item>

<ion-item button (click)="testClick()">
  <ion-thumbnail slot="start">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
  </ion-thumbnail>
  <ion-label>
    <h3>H3 标题文本</h3>
    <p>图标在右侧</p>
  </ion-label>
  <ion-icon name="close-circle" slot="end"></ion-icon>
</ion-item>
```

### 项目中的按钮

```html
<ion-item>
  <ion-button slot="start"> 开始 </ion-button>
  <ion-label>按钮开始/结束</ion-label>
  <ion-button slot="end"> 结束 </ion-button>
</ion-item>

<ion-item>
  <ion-button slot="start">
    开始图标
    <ion-icon name="home" slot="end"></ion-icon>
  </ion-button>
  <ion-label>带图标的按钮</ion-label>
  <ion-button slot="end">
    <ion-icon name="star" slot="end"></ion-icon>
    结束图标
  </ion-button>
</ion-item>

<ion-item>
  <ion-button slot="start">
    <ion-icon slot="icon-only" name="navigate"></ion-icon>
  </ion-button>
  <ion-label>仅图标按钮</ion-label>
  <ion-button slot="end">
    <ion-icon slot="icon-only" name="star"></ion-icon>
  </ion-button>
</ion-item>
```

### 项目中的图标

```html
<ion-item>
  <ion-label> 图标在结束位置 </ion-label>
  <ion-icon name="information-circle" slot="end"></ion-icon>
</ion-item>

<ion-item>
  <ion-label> 大图标在结束位置 </ion-label>
  <ion-icon name="information-circle" size="large" slot="end"></ion-icon>
</ion-item>

<ion-item>
  <ion-label> 小图标在结束位置 </ion-label>
  <ion-icon name="information-circle" size="small" slot="end"></ion-icon>
</ion-item>

<ion-item>
  <ion-icon name="star" slot="start"></ion-icon>
  <ion-label> 图标在开始位置 </ion-label>
</ion-item>

<ion-item>
  <ion-label> 两个图标在结束位置 </ion-label>
  <ion-icon name="checkmark-circle" slot="end"></ion-icon>
  <ion-icon name="shuffle" slot="end"></ion-icon>
</ion-item>
```

### 项目中的输入组件

```html
<ion-item>
  <ion-label position="floating">日期时间</ion-label>
  <ion-datetime></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="floating">选择框</ion-label>
  <ion-select>
    <ion-select-option value="">无游戏主机</ion-select-option>
    <ion-select-option value="nes">NES</ion-select-option>
    <ion-select-option value="n64" selected>Nintendo64</ion-select-option>
    <ion-select-option value="ps">PlayStation</ion-select-option>
    <ion-select-option value="genesis">Sega Genesis</ion-select-option>
    <ion-select-option value="saturn">Sega Saturn</ion-select-option>
    <ion-select-option value="snes">SNES</ion-select-option>
  </ion-select>
</ion-item>

<ion-item>
  <ion-label>切换开关</ion-label>
  <ion-toggle slot="end"></ion-toggle>
</ion-item>

<ion-item>
  <ion-label position="floating">浮动标签输入框</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label>输入框（占位符）</ion-label>
  <ion-input placeholder="占位符"></ion-input>
</ion-item>

<ion-item>
  <ion-label>复选框</ion-label>
  <ion-checkbox slot="start"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>范围滑块</ion-label>
  <ion-range></ion-range>
</ion-item>
```

</TabItem>

<TabItem value="javascript">

```html
<!-- 默认项目 -->
<ion-item>
  <ion-label> 项目 </ion-label>
</ion-item>

<!-- 作为按钮的项目 -->
<ion-item button onclick="buttonClick()">
  <ion-label> 按钮项目 </ion-label>
</ion-item>

<!-- 作为链接的项目 -->
<ion-item href="https://www.ionicframework.com">
  <ion-label> 链接项目 </ion-label>
</ion-item>

<ion-item color="secondary">
  <ion-label> 次要颜色项目 </ion-label>
</ion-item>
```

### 详情箭头

```html
<ion-item detail>
  <ion-label> 带详情箭头的标准项目 </ion-label>
</ion-item>

<ion-item button onclick="buttonClick()" detail>
  <ion-label> 带详情箭头的按钮项目 </ion-label>
</ion-item>

<ion-item detail="false" href="https://www.ionicframework.com">
  <ion-label> 不带详情箭头的链接项目 </ion-label>
</ion-item>
```

### 列表项目

```html
<ion-list>
  <ion-item>
    <ion-label> 项目 </ion-label>
  </ion-item>

  <ion-item lines="none">
    <ion-label> 无线条项目 </ion-label>
  </ion-item>

  <ion-item>
    <ion-label class="ion-text-wrap">
      当文本太长无法在一行内显示时，应该换行的多行文本。
    </ion-label>
  </ion-item>

  <ion-item>
    <ion-label class="ion-text-wrap">
      <ion-text color="primary">
        <h3>H3 主要标题</h3>
      </ion-text>
      <p>段落第1行</p>
      <ion-text color="secondary">
        <p>段落第2行 次要颜色</p>
      </ion-text>
    </ion-label>
  </ion-item>

  <ion-item lines="full">
    <ion-label> 带全宽线条的项目 </ion-label>
  </ion-item>
</ion-list>
```

### 项目线条

```html
<!-- 内嵌线条项目 -->
<ion-item lines="inset">
  <ion-label>内嵌线条项目</ion-label>
</ion-item>

<!-- 全宽线条项目 -->
<ion-item lines="full">
  <ion-label>全宽线条项目</ion-label>
</ion-item>

<!-- 无线条项目 -->
<ion-item lines="none">
  <ion-label>无线条项目</ion-label>
</ion-item>

<!-- 全宽线条列表 -->
<ion-list lines="full">
  <ion-item>
    <ion-label>全宽线条项目 1</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>全宽线条项目 2</ion-label>
  </ion-item>
</ion-list>

<!-- 内嵌线条列表 -->
<ion-list lines="inset">
  <ion-item>
    <ion-label>内嵌线条项目 1</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>内嵌线条项目 2</ion-label>
  </ion-item>
</ion-list>

<!-- 无线条列表 -->
<ion-list lines="none">
  <ion-item>
    <ion-label>无线条项目 1</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>无线条项目 2</ion-label>
  </ion-item>

  <ion-item>
    <ion-label>无线条项目 3</ion-label>
  </ion-item>
</ion-list>
```

### 媒体项目

```html
<ion-item button onclick="testClick()">
  <ion-avatar slot="start">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
  </ion-avatar>
  <ion-label> 头像在开始位置，按钮项目 </ion-label>
</ion-item>

<ion-item href="#">
  <ion-label> 缩略图在结束位置，链接项目 </ion-label>
  <ion-thumbnail slot="end">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
  </ion-thumbnail>
</ion-item>

<ion-item>
  <ion-thumbnail slot="start">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
  </ion-thumbnail>
  <ion-label>
    <h2>H2 标题文本</h2>
    <p>按钮在右侧</p>
  </ion-label>
  <ion-button fill="outline" slot="end">查看</ion-button>
</ion-item>

<ion-item button onclick="testClick()">
  <ion-thumbnail slot="start">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
  </ion-thumbnail>
  <ion-label>
    <h3>H3 标题文本</h3>
    <p>图标在右侧</p>
  </ion-label>
  <ion-icon name="close-circle" slot="end"></ion-icon>
</ion-item>
```

### 项目中的按钮

```html
<ion-item>
  <ion-button slot="start"> 开始 </ion-button>
  <ion-label>按钮开始/结束</ion-label>
  <ion-button slot="end"> 结束 </ion-button>
</ion-item>

<ion-item>
  <ion-button slot="start">
    开始图标
    <ion-icon name="home" slot="end"></ion-icon>
  </ion-button>
  <ion-label>带图标的按钮</ion-label>
  <ion-button slot="end">
    <ion-icon name="star" slot="end"></ion-icon>
    结束图标
  </ion-button>
</ion-item>

<ion-item>
  <ion-button slot="start">
    <ion-icon slot="icon-only" name="navigate"></ion-icon>
  </ion-button>
  <ion-label>仅图标按钮</ion-label>
  <ion-button slot="end">
    <ion-icon slot="icon-only" name="star"></ion-icon>
  </ion-button>
</ion-item>
```

### 项目中的图标

```html
<ion-item>
  <ion-label> 图标在结束位置 </ion-label>
  <ion-icon name="information-circle" slot="end"></ion-icon>
</ion-item>

<ion-item>
  <ion-label> 大图标在结束位置 </ion-label>
  <ion-icon name="information-circle" size="large" slot="end"></ion-icon>
</ion-item>

<ion-item>
  <ion-label> 小图标在结束位置 </ion-label>
  <ion-icon name="information-circle" size="small" slot="end"></ion-icon>
</ion-item>

<ion-item>
  <ion-icon name="star" slot="start"></ion-icon>
  <ion-label> 图标在开始位置 </ion-label>
</ion-item>

<ion-item>
  <ion-label> 两个图标在结束位置 </ion-label>
  <ion-icon name="checkmark-circle" slot="end"></ion-icon>
  <ion-icon name="shuffle" slot="end"></ion-icon>
</ion-item>
```

### 项目中的输入组件

```html
<ion-item>
  <ion-label position="floating">日期时间</ion-label>
  <ion-datetime></ion-datetime>
</ion-item>

<ion-item>
  <ion-label position="floating">选择框</ion-label>
  <ion-select>
    <ion-select-option value="">无游戏主机</ion-select-option>
    <ion-select-option value="nes">NES</ion-select-option>
    <ion-select-option value="n64" selected>Nintendo64</ion-select-option>
    <ion-select-option value="ps">PlayStation</ion-select-option>
    <ion-select-option value="genesis">Sega Genesis</ion-select-option>
    <ion-select-option value="saturn">Sega Saturn</ion-select-option>
    <ion-select-option value="snes">SNES</ion-select-option>
  </ion-select>
</ion-item>

<ion-item>
  <ion-label>切换开关</ion-label>
  <ion-toggle slot="end"></ion-toggle>
</ion-item>

<ion-item>
  <ion-label position="floating">浮动标签输入框</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label>输入框（占位符）</ion-label>
  <ion-input placeholder="占位符"></ion-input>
</ion-item>

<ion-item>
  <ion-label>复选框</ion-label>
  <ion-checkbox slot="start"></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label>范围滑块</ion-label>
  <ion-range></ion-range>
</ion-item>
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonText, IonAvatar, IonThumbnail, IonButton, IonIcon, IonDatetime, IonSelect, IonSelectOption, IonToggle, IonInput, IonCheckbox, IonRange } from '@ionic/react';
import { closeCircle, home, star, navigate, informationCircle, checkmarkCircle, shuffle } from 'ionicons/icons';

export const ItemExamples: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ItemExamples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/*-- 默认项目 --*/}
        <IonItem>
          <IonLabel>
            项目
          </IonLabel>
        </IonItem>

        {/*-- 作为按钮的项目 --*/}
        <IonItem button onClick={() => { }}>
          <IonLabel>
            按钮项目
          </IonLabel>
        </IonItem>

        {/*-- 作为链接的项目 --*/}
        <IonItem href="https://www.ionicframework.com">
          <IonLabel>
            链接项目
          </IonLabel>
        </IonItem>

        <IonItem color="secondary">
          <IonLabel>
            次要颜色项目
          </IonLabel>
        </IonItem>

        {/*-- 详情箭头 --*/}
        <IonItem detail>
          <IonLabel>
            带详情箭头的标准项目
          </IonLabel>
        </IonItem>

        <IonItem button onClick={() => { }} detail>
          <IonLabel>
            带详情箭头的按钮项目
          </IonLabel>
        </IonItem>

        <IonItem detail={false} href="https://www.ionicframework.com">
          <IonLabel>
            不带详情箭头的链接项目
          </IonLabel>
        </IonItem>

        <IonList>
          <IonItem>
            <IonLabel>
              项目
            </IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonLabel>
              无线条项目
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel className="ion-text-wrap">
              当文本太长无法在一行内显示时，应该换行的多行文本。
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel className="ion-text-wrap">
              <IonText color="primary">
                <h3>H3 主要标题</h3>
              </IonText>
              <p>段落第1行</p>
              <IonText color="secondary">
                <p>段落第2行 次要颜色</p>
              </IonText>
            </IonLabel>
          </IonItem>

          <IonItem lines="full">
            <IonLabel>
              带全宽线条的项目
            </IonLabel>
          </IonItem>
        </IonList>

        {/*-- 内嵌线条项目 --*/}
        <IonItem lines="inset">
          <IonLabel>内嵌线条项目</IonLabel>
        </IonItem>

        {/*-- 全宽线条项目 --*/}
        <IonItem lines="full">
          <IonLabel>全宽线条项目</IonLabel>
        </IonItem>

        {/*-- 无线条项目 --*/}
        <IonItem lines="none">
          <IonLabel>无线条项目</IonLabel>
        </IonItem>

        {/*-- 全宽线条列表 --*/}
        <IonList lines="full">
          <IonItem>
            <IonLabel>全宽线条项目 1</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>全宽线条项目 2</IonLabel>
          </IonItem>
        </IonList>

        {/*-- 内嵌线条列表 --*/}
        <IonList lines="inset">
          <IonItem>
            <IonLabel>内嵌线条项目 1</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>内嵌线条项目 2</IonLabel>
          </IonItem>
        </IonList>

        {/*-- 无线条列表 --*/}
        <IonList lines="none">
          <IonItem>
            <IonLabel>无线条项目 1</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>无线条项目 2</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel>无线条项目 3</IonLabel>
          </IonItem>
        </IonList>

        <IonItem button onClick={() => { }}>
          <IonAvatar slot="start">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
          </IonAvatar>
          <IonLabel>
            头像在开始位置，按钮项目
          </IonLabel>
        </IonItem>

        <IonItem href="#">
          <IonLabel>
            缩略图在结束位置，链接项目
          </IonLabel>
          <IonThumbnail slot="end">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
          </IonThumbnail>
        </IonItem>

        <IonItem>
          <IonThumbnail slot="start">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
          </IonThumbnail>
          <IonLabel>
            <h2>H2 标题文本</h2>
            <p>按钮在右侧</p>
          </IonLabel>
          <IonButton fill="outline" slot="end">查看</IonButton>
        </IonItem>

        <IonItem button onClick={() => { }}>
          <IonThumbnail slot="start">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
          </IonThumbnail>
          <IonLabel>
            <h3>H3 标题文本</h3>
            <p>图标在右侧</p>
          </IonLabel>
          <IonIcon icon={closeCircle} slot="end" />
        </IonItem>

        {/*-- 项目中的按钮 --*/}
        <IonItem>
          <IonButton slot="start">
            开始
          </IonButton>
          <IonLabel>按钮开始/结束</IonLabel>
          <IonButton slot="end">
            结束
          </IonButton>
        </IonItem>

        <IonItem>
          <IonButton slot="start">
            开始图标
            <IonIcon icon={home} slot="end" />>
          </IonButton>
          <IonLabel>带图标的按钮</IonLabel>
          <IonButton slot="end">
            <IonIcon icon={star} slot="end" />
            结束图标
          </IonButton>
        </IonItem>

        <IonItem>
          <IonButton slot="start">
            <IonIcon slot="icon-only" icon={navigate} />
          </IonButton>
          <IonLabel>仅图标按钮</IonLabel>
          <IonButton slot="end">
            <IonIcon slot="icon-only" icon={star} />
          </IonButton>
        </IonItem>

        <IonItem>
          <IonLabel>
            图标在结束位置
          </IonLabel>
          <IonIcon icon={informationCircle} slot="end" />
        </IonItem>

        <IonItem>
          <IonLabel>
            大图标在结束位置
          </IonLabel>
          <IonIcon icon={informationCircle} size="large" slot="end" />
        </IonItem>

        <IonItem>
          <IonLabel>
            小图标在结束位置
          </IonLabel>
          <IonIcon icon={informationCircle} size="small" slot="end" />
        </IonItem>

        <IonItem>
          <IonIcon icon={star} slot="start" />
          <IonLabel>
            图标在开始位置
          </IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>
            两个图标在结束位置
          </IonLabel>
          <IonIcon icon={checkmarkCircle} slot="end" />
          <IonIcon icon={shuffle} slot="end" />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">日期时间</IonLabel>
          <IonDatetime></IonDatetime>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">选择框</IonLabel>
          <IonSelect>
            <IonSelectOption value="">无游戏主机</IonSelectOption>
            <IonSelectOption value="nes">NES</IonSelectOption>
            <IonSelectOption value="n64">Nintendo64</IonSelectOption>
            <IonSelectOption value="ps">PlayStation</IonSelectOption>
            <IonSelectOption value="genesis">Sega Genesis</IonSelectOption>
            <IonSelectOption value="saturn">Sega Saturn</IonSelectOption>
            <IonSelectOption value="snes">SNES</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>切换开关</IonLabel>
          <IonToggle slot="end"></IonToggle>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">浮动标签输入框</IonLabel>
          <IonInput></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>输入框（占位符）</IonLabel>
          <IonInput placeholder="占位符"></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>复选框</IonLabel>
          <IonCheckbox slot="start" />
        </IonItem>

        <IonItem>
          <IonLabel>范围滑块</IonLabel>
          <IonRange></IonRange>
        </IonItem>
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
  tag: 'item-example',
  styleUrl: 'item-example.css',
})
export class ItemExample {
  buttonClick() {
    console.log('Clicked button');
  }

  render() {
    return [
      // 默认项目
      <ion-item>
        <ion-label>项目</ion-label>
      </ion-item>,

      // 作为按钮的项目
      <ion-item button onClick={() => this.buttonClick()}>
        <ion-label>按钮项目</ion-label>
      </ion-item>,

      // 作为链接的项目
      <ion-item href="https://www.ionicframework.com">
        <ion-label>链接项目</ion-label>
      </ion-item>,

      <ion-item color="secondary">
        <ion-label>次要颜色项目</ion-label>
      </ion-item>,
    ];
  }
}
```

### 详情箭头

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-example',
  styleUrl: 'item-example.css',
})
export class ItemExample {
  buttonClick() {
    console.log('Clicked button');
  }

  render() {
    return [
      <ion-item detail>
        <ion-label>带详情箭头的标准项目</ion-label>
      </ion-item>,

      <ion-item button onClick={() => this.buttonClick()} detail>
        <ion-label>带详情箭头的按钮项目</ion-label>
      </ion-item>,

      <ion-item detail={false} href="https://www.ionicframework.com">
        <ion-label>不带详情箭头的链接项目</ion-label>
      </ion-item>,
    ];
  }
}
```

### 列表项目

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-example',
  styleUrl: 'item-example.css',
})
export class ItemExample {
  render() {
    return [
      <ion-list>
        <ion-item>
          <ion-label>项目</ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-label>无线条项目</ion-label>
        </ion-item>,<ion-item>
          <ion-label class="ion-text-wrap">
            当文本太长无法在一行内显示时，应该换行的多行文本。
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label class="ion-text-wrap">
            <ion-text color="primary">
              <h3>H3 主要标题</h3>
            </ion-text>
            <p>段落第1行</p>
            <ion-text color="secondary">
              <p>段落第2行 次要颜色</p>
            </ion-text>
          </ion-label>
        </ion-item>
        <ion-item lines="full">
          <ion-label>带全宽线条的项目</ion-label>
        </ion-item>
      </ion-list>,
    ];
  }
}
```

### 项目线条

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-example',
  styleUrl: 'item-example.css',
})
export class ItemExample {
  render() {
    return [
      // 内嵌线条项目
      <ion-item lines="inset">
        <ion-label>内嵌线条项目</ion-label>
      </ion-item>,

      // 全宽线条项目
      <ion-item lines="full">
        <ion-label>全宽线条项目</ion-label>
      </ion-item>,

      // 无线条项目
      <ion-item lines="none">
        <ion-label>无线条项目</ion-label>
      </ion-item>,

      // 全宽线条列表
      <ion-list lines="full">
        <ion-item>
          <ion-label>全宽线条项目 1</ion-label>
        </ion-item>

        <ion-item>
          <ion-label>全宽线条项目 2</ion-label>
        </ion-item>
      </ion-list>,

      // 内嵌线条列表
      <ion-list lines="inset">
        <ion-item>
          <ion-label>内嵌线条项目 1</ion-label>
        </ion-item>

        <ion-item>
          <ion-label>内嵌线条项目 2</ion-label>
        </ion-item>
      </ion-list>,

      // 无线条列表
      <ion-list lines="none">
        <ion-item>
          <ion-label>无线条项目 1</ion-label>
        </ion-item>

        <ion-item>
          <ion-label>无线条项目 2</ion-label>
        </ion-item>

        <ion-item>
          <ion-label>无线条项目 3</ion-label>
        </ion-item>
      </ion-list>,
    ];
  }
}
```

### 媒体项目

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-example',
  styleUrl: 'item-example.css',
})
export class ItemExample {
  testClick() {
    console.log('Test click');
  }

  render() {
    return [
      <ion-item button onClick={() => this.testClick()}>
        <ion-avatar slot="start">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
        </ion-avatar>
        <ion-label>头像在开始位置，按钮项目</ion-label>
      </ion-item>,

      <ion-item href="#">
        <ion-label>缩略图在结束位置，链接项目</ion-label>
        <ion-thumbnail slot="end">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
        </ion-thumbnail>
      </ion-item>,

      <ion-item>
        <ion-thumbnail slot="start">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
        </ion-thumbnail>
        <ion-label>
          <h2>H2 标题文本</h2>
          <p>按钮在右侧</p>
        </ion-label>
        <ion-button fill="outline" slot="end">
          查看
        </ion-button>
      </ion-item>,

      <ion-item button onClick={() => this.testClick()}>
        <ion-thumbnail slot="start">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
        </ion-thumbnail>
        <ion-label>
          <h3>H3 标题文本</h3>
          <p>图标在右侧</p>
        </ion-label>
        <ion-icon name="close-circle" slot="end"></ion-icon>
      </ion-item>,
    ];
  }
}
```

### 项目中的按钮

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-example',
  styleUrl: 'item-example.css',
})
export class ItemExample {
  render() {
    return [
      <ion-item>
        <ion-button slot="start">开始</ion-button>
        <ion-label>按钮开始/结束</ion-label>
        <ion-button slot="end">结束</ion-button>
      </ion-item>,

      <ion-item>
        <ion-button slot="start">
          开始图标
          <ion-icon name="home" slot="end"></ion-icon>
        </ion-button>
        <ion-label>带图标的按钮</ion-label>
        <ion-button slot="end">
          <ion-icon name="star" slot="end"></ion-icon>
          结束图标
        </ion-button>
      </ion-item>,

      <ion-item>
        <ion-button slot="start">
          <ion-icon slot="icon-only" name="navigate"></ion-icon>
        </ion-button>
        <ion-label>仅图标按钮</ion-label>
        <ion-button slot="end">
          <ion-icon slot="icon-only" name="star"></ion-icon>
        </ion-button>
      </ion-item>,
    ];
  }
}
```

### 项目中的图标

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-example',
  styleUrl: 'item-example.css',
})
export class ItemExample {
  render() {
    return [
      <ion-item>
        <ion-label>图标在结束位置</ion-label>
        <ion-icon name="information-circle" slot="end"></ion-icon>
      </ion-item>,

      <ion-item>
        <ion-label>大图标在结束位置</ion-label>
        <ion-icon name="information-circle" size="large" slot="end"></ion-icon>
      </ion-item>,

      <ion-item>
        <ion-label>小图标在结束位置</ion-label>
        <ion-icon name="information-circle" size="small" slot="end"></ion-icon>
      </ion-item>,

      <ion-item>
        <ion-icon name="star" slot="start"></ion-icon>
        <ion-label>图标在开始位置</ion-label>
      </ion-item>,

      <ion-item>
        <ion-label>两个图标在结束位置</ion-label>
        <ion-icon name="checkmark-circle" slot="end"></ion-icon>
        <ion-icon name="shuffle" slot="end"></ion-icon>
      </ion-item>,
    ];
  }
}
```

### 项目中的输入组件

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-example',
  styleUrl: 'item-example.css',
})
export class ItemExample {
  render() {
    return [
      <ion-item>
        <ion-label position="floating">日期时间</ion-label>
        <ion-datetime></ion-datetime>
      </ion-item>,

      <ion-item>
        <ion-label position="floating">选择框</ion-label>
        <ion-select>
          <ion-select-option value="">无游戏主机</ion-select-option>
          <ion-select-option value="nes">NES</ion-select-option>
          <ion-select-option value="n64" selected>
            Nintendo64
          </ion-select-option>
          <ion-select-option value="ps">PlayStation</ion-select-option>
          <ion-select-option value="genesis">Sega Genesis</ion-select-option>
          <ion-select-option value="saturn">Sega Saturn</ion-select-option>
          <ion-select-option value="snes">SNES</ion-select-option>
        </ion-select>
      </ion-item>,

      <ion-item>
        <ion-label>切换开关</ion-label>
        <ion-toggle slot="end"></ion-toggle>
      </ion-item>,

      <ion-item>
        <ion-label position="floating">浮动标签输入框</ion-label>
        <ion-input></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label>输入框（占位符）</ion-label>
        <ion-input placeholder="占位符"></ion-input>
      </ion-item>,

      <ion-item>
        <ion-label>复选框</ion-label>
        <ion-checkbox slot="start"></ion-checkbox>
      </ion-item>,

      <ion-item>
        <ion-label>范围滑块</ion-label>
        <ion-range></ion-range>
      </ion-item>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <!-- 默认项目 -->
  <ion-item>
    <ion-label> 项目 </ion-label>
  </ion-item>

  <!-- 作为按钮的项目 -->
  <ion-item button @click="buttonClick()">
    <ion-label> 按钮项目 </ion-label>
  </ion-item>

  <!-- 作为链接的项目 -->
  <ion-item href="https://www.ionicframework.com">
    <ion-label> 链接项目 </ion-label>
  </ion-item>

  <ion-item color="secondary">
    <ion-label> 次要颜色项目 </ion-label>
  </ion-item>
</template>
```

### 详情箭头

```html
<template>
  <ion-item detail>
    <ion-label> 带详情箭头的标准项目 </ion-label>
  </ion-item>

  <ion-item button @click="buttonClick()" detail>
    <ion-label> 带详情箭头的按钮项目 </ion-label>
  </ion-item>

  <ion-item detail="false" href="https://www.ionicframework.com">
    <ion-label> 不带详情箭头的链接项目 </ion-label>
  </ion-item>
</template>
```

### 列表项目

```html
<template>
  <ion-list>
    <ion-item>
      <ion-label> 项目 </ion-label>
    </ion-item>

    <ion-item lines="none">
      <ion-label> 无线条项目 </ion-label>
    </ion-item>

    <ion-item>
      <ion-label class="ion-text-wrap">
        当文本太长无法在一行内显示时，应该换行的多行文本。
      </ion-label>
    </ion-item>

    <ion-item>
      <ion-label class="ion-text-wrap">
        <ion-text color="primary">
          <h3>H3 主要标题</h3>
        </ion-text>
        <p>段落第1行</p>
        <ion-text color="secondary">
          <p>段落第2行 次要颜色</p>
        </ion-text>
      </ion-label>
    </ion-item>

    <ion-item lines="full">
      <ion-label> 带全宽线条的项目 </ion-label>
    </ion-item>
  </ion-list>
</template>
```

### 项目线条

```html
<template>
  <!-- 内嵌线条项目 -->
  <ion-item lines="inset">
    <ion-label>内嵌线条项目</ion-label>
  </ion-item>

  <!-- 全宽线条项目 -->
  <ion-item lines="full">
    <ion-label>全宽线条项目</ion-label>
  </ion-item>

  <!-- 无线条项目 -->
  <ion-item lines="none">
    <ion-label>无线条项目</ion-label>
  </ion-item>

  <!-- 全宽线条列表 -->
  <ion-list lines="full">
    <ion-item>
      <ion-label>全宽线条项目 1</ion-label>
    </ion-item>

    <ion-item>
      <ion-label>全宽线条项目 2</ion-label>
    </ion-item>
  </ion-list>

  <!-- 内嵌线条列表 -->
  <ion-list lines="inset">
    <ion-item>
      <ion-label>内嵌线条项目 1</ion-label>
    </ion-item>

    <ion-item>
      <ion-label>内嵌线条项目 2</ion-label>
    </ion-item>
  </ion-list>

  <!-- 无线条列表 -->
  <ion-list lines="none">
    <ion-item>
      <ion-label>无线条项目 1</ion-label>
    </ion-item>

    <ion-item>
      <ion-label>无线条项目 2</ion-label>
    </ion-item>

    <ion-item>
      <ion-label>无线条项目 3</ion-label>
    </ion-item>
  </ion-list>
</template>
```

### 媒体项目

```html
<template>
  <ion-item button @click="testClick()">
    <ion-avatar slot="start">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
    </ion-avatar>
    <ion-label> 头像在开始位置，按钮项目 </ion-label>
  </ion-item>

  <ion-item href="#">
    <ion-label> 缩略图在结束位置，链接项目 </ion-label>
    <ion-thumbnail slot="end">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
    </ion-thumbnail>
  </ion-item>

  <ion-item>
    <ion-thumbnail slot="start">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
    </ion-thumbnail>
    <ion-label>
      <h2>H2 标题文本</h2>
      <p>按钮在右侧</p>
    </ion-label>
    <ion-button fill="outline" slot="end">查看</ion-button>
  </ion-item>

  <ion-item button @click="testClick()">
    <ion-thumbnail slot="start">
      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
    </ion-thumbnail>
    <ion-label>
      <h3>H3 标题文本</h3>
      <p>图标在右侧</p>
    </ion-label>
    <ion-icon :icon="closeCircle" slot="end"></ion-icon>
  </ion-item>
</template>
```

### 项目中的按钮

```html
<template>
  <ion-item>
    <ion-button slot="start"> 开始 </ion-button>
    <ion-label>按钮开始/结束</ion-label>
    <ion-button slot="end"> 结束 </ion-button>
  </ion-item>

  <ion-item>
    <ion-button slot="start">
      开始图标
      <ion-icon :icon="home" slot="end"></ion-icon>
    </ion-button>
    <ion-label>带图标的按钮</ion-label>
    <ion-button slot="end">
      <ion-icon :icon="star" slot="end"></ion-icon>
      结束图标
    </ion-button>
  </ion-item>

  <ion-item>
    <ion-button slot="start">
      <ion-icon slot="icon-only" :icon="navigate"></ion-icon>
    </ion-button>
    <ion-label>仅图标按钮</ion-label>
    <ion-button slot="end">
      <ion-icon slot="icon-only" :icon="star"></ion-icon>
    </ion-button>
  </ion-item>
</template>
```

### 项目中的图标

```html
<template>
  <ion-item>
    <ion-label> 图标在结束位置 </ion-label>
    <ion-icon :icon="informationCircle" slot="end"></ion-icon>
  </ion-item>

  <ion-item>
    <ion-label> 大图标在结束位置 </ion-label>
    <ion-icon :icon="informationCircle" size="large" slot="end"></ion-icon>
  </ion-item>

  <ion-item>
    <ion-label> 小图标在结束位置 </ion-label>
    <ion-icon :icon="informationCircle" size="small" slot="end"></ion-icon>
  </ion-item>

  <ion-item>
    <ion-icon :icon="star" slot="start"></ion-icon>
    <ion-label> 图标在开始位置 </ion-label>
  </ion-item>

  <ion-item>
    <ion-label> 两个图标在结束位置 </ion-label>
    <ion-icon :icon="checkmarkCircle" slot="end"></ion-icon>
    <ion-icon :icon="shuffle" slot="end"></ion-icon>
  </ion-item>
</template>
```

### 项目中的输入组件

```html
<template>
  <ion-item>
    <ion-label position="floating">日期时间</ion-label>
    <ion-datetime></ion-datetime>
  </ion-item>

  <ion-item>
    <ion-label position="floating">选择框</ion-label>
    <ion-select>
      <ion-select-option value="">无游戏主机</ion-select-option>
      <ion-select-option value="nes">NES</ion-select-option>
      <ion-select-option value="n64" selected>Nintendo64</ion-select-option>
      <ion-select-option value="ps">PlayStation</ion-select-option>
      <ion-select-option value="genesis">Sega Genesis</ion-select-option>
      <ion-select-option value="saturn">Sega Saturn</ion-select-option>
      <ion-select-option value="snes">SNES</ion-select-option>
    </ion-select>
  </ion-item>

  <ion-item>
    <ion-label>切换开关</ion-label>
    <ion-toggle slot="end"></ion-toggle>
  </ion-item>

  <ion-item>
    <ion-label position="floating">浮动标签输入框</ion-label>
    <ion-input></ion-input>
  </ion-item>

  <ion-item>
    <ion-label>输入框（占位符）</ion-label>
    <ion-input placeholder="占位符"></ion-input>
  </ion-item>

  <ion-item>
    <ion-label>复选框</ion-label>
    <ion-checkbox slot="start"></ion-checkbox>
  </ion-item>

  <ion-item>
    <ion-label>范围滑块</ion-label>
    <ion-range></ion-range>
  </ion-item>
</template>

<script>
  import {
    IonAvatar,
    IonButton,
    IonCheckbox,
    IonDatetime,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonRange,
    IonSelect,
    IonSelectOption,
    IonText,
    IonThumbnail,
    IonToggle,
  } from '@ionic/vue';
  import { checkmarkCircle, closeCircle, home, informationCircle, navigate, shuffle, star } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {
      IonAvatar,
      IonButton,
      IonCheckbox,
      IonDatetime,
      IonIcon,
      IonInput,
      IonItem,
      IonLabel,
      IonRange,
      IonSelect,
      IonSelectOption,
      IonText,
      IonThumbnail,
      IonToggle,
    },
    setup() {
      return {
        checkmarkCircle,
        closeCircle,
        home,
        informationCircle,
        navigate,
        shuffle,
        star,
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

## CSS 阴影部分

<Parts />

## CSS 自定义属性

<CustomProps />

## 插槽

<Slots />