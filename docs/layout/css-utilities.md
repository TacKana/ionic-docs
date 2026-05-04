---
title: CSS 工具类
---

<head>
  <title>CSS 工具类：用于文本或元素对齐/修改的类</title>
  <meta
    name="description"
    content="Ionic 的 CSS 工具类可用于任何元素，以修改文本样式、控制元素位置、或调整内边距和外边距。阅读以了解更多。"
  />
</head>

Ionic 框架提供了一套 CSS 工具类，可用于任何元素，以修改文本样式、控制元素位置，或调整内边距（padding）和外边距（margin）。

:::important
如果你的应用不是通过 Ionic 框架的启动模板创建的，为了让这些样式生效，需要在[全局样式表的可选部分](global-stylesheets.md#optional)中引入所列出的样式表。
:::

## 文本修改

<LegacyAnchor id="text-alignment" />

### 文本对齐

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div class="ion-text-start">
        <h3>text-start (文本开头对齐)</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-end">
        <h3>text-end (文本结尾对齐)</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-center">
        <h3>text-center (文本居中对齐)</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div class="ion-text-justify">
        <h3>text-justify (文本两端对齐)</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-wrap">
        <h3>text-wrap (文本换行)</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-nowrap">
        <h3>text-nowrap (文本不换行)</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| 类名                 | 样式规则                 | 描述                                                                                                   |
| -------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------ |
| `.ion-text-left`     | `text-align: left`       | 内容与行框的左边缘对齐。                                                                               |
| `.ion-text-right`    | `text-align: right`      | 内容与行框的右边缘对齐。                                                                               |
| `.ion-text-start`    | `text-align: start`      | 在从左到右的文本方向中，等同于 `text-left`；在从右到左的文本方向中，等同于 `text-right`。             |
| `.ion-text-end`      | `text-align: end`        | 在从左到右的文本方向中，等同于 `text-right`；在从右到左的文本方向中，等同于 `text-left`。             |
| `.ion-text-center`   | `text-align: center`     | 内容在行框内居中对齐。                                                                                 |
| `.ion-text-justify`  | `text-align: justify`    | 内容两端对齐，文本间距会调整，使其左右边缘与行框的左右边缘对齐（最后一行除外）。                         |
| `.ion-text-wrap`     | `white-space: normal`    | 合并空白序列。源代码中的换行符与其他空白符同等处理。必要时会换行以填充行框。                           |
| `.ion-text-nowrap`   | `white-space: nowrap`    | 和 `normal` 一样合并空白，但禁止文本内的换行。                                                          |

<LegacyAnchor id="text-transformation" />

### 文本转换

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div class="ion-text-uppercase">
        <h3>text-uppercase (转大写)</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-lowercase">
        <h3>text-lowercase (转小写)</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-capitalize">
        <h3>text-capitalize (首字母大写)</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| 类名                    | 样式规则                      | 描述                                   |
| ----------------------- | ----------------------------- | -------------------------------------- |
| `.ion-text-uppercase`   | `text-transform: uppercase`   | 强制将所有字符转换为大写。             |
| `.ion-text-lowercase`   | `text-transform: lowercase`   | 强制将所有字符转换为小写。             |
| `.ion-text-capitalize`  | `text-transform: capitalize`  | 强制将每个单词的首字母转换为大写。       |

### 响应式文本类

上述所有文本类都有额外的类，可以根据屏幕尺寸调整文本样式。将每个类中的 `text-` 替换为 `text-{breakpoint}-`，即可在特定的屏幕尺寸上应用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-breakpoints)中列出的断点名称之一。

下表展示了默认行为，其中 `{modifier}` 可以是上述提到的任意值：`left`, `right`, `start`, `end`, `center`, `justify`, `wrap`, `nowrap`, `uppercase`, `lowercase`, `capitalize`。

| 类名                         | 描述                                                   |
| ---------------------------- | ------------------------------------------------------ |
| `.ion-text-{modifier}`       | 在所有屏幕尺寸上对元素应用该修饰。                     |
| `.ion-text-sm-{modifier}`    | 当屏幕宽度 `min-width: 576px` 时对元素应用该修饰。    |
| `.ion-text-md-{modifier}`    | 当屏幕宽度 `min-width: 768px` 时对元素应用该修饰。    |
| `.ion-text-lg-{modifier}`    | 当屏幕宽度 `min-width: 992px` 时对元素应用该修饰。    |
| `.ion-text-xl-{modifier}`    | 当屏幕宽度 `min-width: 1200px` 时对元素应用该修饰。   |

<LegacyAnchor id="element-placement" />

## 元素定位

### 浮动 (Float)

CSS 的 [float](https://developer.mozilla.org/en-US/docs/Web/CSS/float) 属性指定元素应沿其容器的左侧或右侧放置，文本和行内元素将环绕它。这样，元素脱离了正常的网页文档流，但仍然保持对文档流的部分影响，这与绝对定位不同。

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <h3>无浮动</h3>
      <img
        alt="人物剪影"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col>
      <h3>向左浮动 (float-left)</h3>
      <img
        alt="人物剪影"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
        class="ion-float-left"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col>
      <h3>向右浮动 (float-right)</h3>
      <img
        alt="人物剪影"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
        class="ion-float-right"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
  </ion-row>
</ion-grid>
```

| 类名                | 样式规则                      | 描述                                                                                               |
| ------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------- |
| `.ion-float-left`   | `float: left`                 | 元素浮动在其包含块的左侧。                                                                           |
| `.ion-float-right`  | `float: right`                | 元素浮动在其包含块的右侧。                                                                           |
| `.ion-float-start`  | `float: left` / `float: right`| 在从左到右的文本方向中，等同于 `float-left`；在从右到左的文本方向中，等同于 `float-right`。           |
| `.ion-float-end`    | `float: left` / `float: right`| 在从左到右的文本方向中，等同于 `float-right`；在从右到左的文本方向中，等同于 `float-left`。           |

### 响应式浮动类

上述所有浮动类都有额外的类，可以根据屏幕尺寸调整浮动效果。将每个类中的 `float-` 替换为 `float-{breakpoint}-`，即可在特定的屏幕尺寸上应用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-breakpoints)中列出的断点名称之一。

下表展示了默认行为，其中 `{modifier}` 可以是上述提到的任意值：`left`, `right`, `start`, `end`。

| 类名                        | 描述                                                   |
| --------------------------- | ------------------------------------------------------ |
| `.ion-float-{modifier}`     | 在所有屏幕尺寸上对元素应用该修饰。                     |
| `.ion-float-sm-{modifier}`  | 当屏幕宽度 `min-width: 576px` 时对元素应用该修饰。    |
| `.ion-float-md-{modifier}`  | 当屏幕宽度 `min-width: 768px` 时对元素应用该修饰。    |
| `.ion-float-lg-{modifier}`  | 当屏幕宽度 `min-width: 992px` 时对元素应用该修饰。    |
| `.ion-float-xl-{modifier}`  | 当屏幕宽度 `min-width: 1200px` 时对元素应用该修饰。   |

<LegacyAnchor id="element-display" />

## 元素显示

### 显示 (Display)

CSS 的 [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 属性设置元素是否被视为块级或行内盒子，以及用于其子元素的布局，如流式布局、网格或弹性盒。它也可以用来完全隐藏元素。

Ionic 为 `display` 提供了以下工具类：

| 类名                          | 样式规则                 | 描述                                                                                                       |
| ----------------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `.ion-display-none`           | `display: none`          | 关闭元素的显示，使其在布局中不产生任何影响（文档渲染时如同该元素不存在）。                                   |
| `.ion-display-inline`         | `display: inline`        | 元素表现为行内元素，前后不产生换行。                                                                       |
| `.ion-display-inline-block`   | `display: inline-block`  | 元素表现为块级元素，但与其周围内容一起流动，如同一个行内盒子。                                               |
| `.ion-display-block`          | `display: block`         | 元素表现为块级元素，在正常流中前后都会产生换行。                                                             |
| `.ion-display-flex`           | `display: flex`          | 元素表现为块级元素，并根据弹性盒模型（flexbox）布局其内容。                                                  |
| `.ion-display-inline-flex`    | `display: inline-flex`   | 元素表现为行内元素，并根据弹性盒模型（flexbox）布局其内容。                                                  |
| `.ion-display-grid`           | `display: grid`          | 元素表现为块级元素，并根据网格模型（grid）布局其内容。                                                       |
| `.ion-display-inline-grid`    | `display: inline-grid`   | 元素表现为行内元素，并根据网格模型（grid）布局其内容。                                                       |
| `.ion-display-table`          | `display: table`         | 元素的行为类似 HTML 的 `<table>` 元素，定义了一个块级盒子。                                                 |
| `.ion-display-table-cell`     | `display: table-cell`    | 元素的行为类似 HTML 的 `<td>` 元素（表格单元格）。                                                           |
| `.ion-display-table-row`      | `display: table-row`     | 元素的行为类似 HTML 的 `<tr>` 元素（表格行）。                                                              |

### 响应式显示类

上述所有显示类都有额外的类，可以根据屏幕尺寸调整显示效果。将每个类中的 `display-` 替换为 `display-{breakpoint}-`，即可在特定的屏幕尺寸上应用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-breakpoints)中列出的断点名称之一。

下表展示了默认行为，其中 `{modifier}` 可以是上述提到的任意值：`none`, `inline`, `inline-block`, `block`, `flex`, `inline-flex`, `grid`, `inline-grid`, `table`, `table-cell`, `table-row`。

| 类名                           | 描述                                                   |
| ------------------------------ | ------------------------------------------------------ |
| `.ion-display-{modifier}`      | 在所有屏幕尺寸上对元素应用该修饰。                     |
| `.ion-display-sm-{modifier}`   | 当屏幕宽度 `min-width: 576px` 时对元素应用该修饰。    |
| `.ion-display-md-{modifier}`   | 当屏幕宽度 `min-width: 768px` 时对元素应用该修饰。    |
| `.ion-display-lg-{modifier}`   | 当屏幕宽度 `min-width: 992px` 时对元素应用该修饰。    |
| `.ion-display-xl-{modifier}`   | 当屏幕宽度 `min-width: 1200px` 时对元素应用该修饰。   |

### 已废弃的类

:::warning 废弃通知

以下类已废弃，将在下个主要版本中移除。请改用推荐的 `.ion-display-*` 类。

:::

| 类名                   | 描述                                                                                                                                                                    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.ion-hide`            | 在所有屏幕尺寸上对元素应用 `display: none`。 <br/> **已废弃** — 请改用 `ion-display-none` 类。                                                                          |
| `.ion-hide-sm-{dir}`   | 当屏幕宽度 `min-width: 576px` (`up`) 或 `max-width: 576px` (`down`) 时对元素应用该修饰。 <br/> **已废弃** — 请改用 `ion-display-sm-{modifier}` 类。                       |
| `.ion-hide-md-{dir}`   | 当屏幕宽度 `min-width: 768px` (`up`) 或 `max-width: 768px` (`down`) 时对元素应用该修饰。 <br/> **已废弃** — 请改用 `ion-display-md-{modifier}` 类。                       |
| `.ion-hide-lg-{dir}`   | 当屏幕宽度 `min-width: 992px` (`up`) 或 `max-width: 992px` (`down`) 时对元素应用该修饰。 <br/> **已废弃** — 请改用 `ion-display-lg-{modifier}` 类。                       |
| `.ion-hide-xl-{dir}`   | 当屏幕宽度 `min-width: 1200px` (`up`) 或 `max-width: 1200px` (`down`) 时对元素应用该修饰。 <br/> **已废弃** — 请改用 `ion-display-xl-{modifier}` 类。                     |

<LegacyAnchor id="content-space" />

## 内容间距

<LegacyAnchor id="element-padding" />

### 内边距 (Padding)

内边距类用于设置元素的内边距区域。内边距区域是元素内容与其边框之间的空间。

默认应用的 `padding` 大小为 `16px`，由 `--ion-padding` 变量设置。有关如何更改这些值的更多信息，请参阅 [CSS 变量](../theming/css-variables.md)部分。

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-padding">
      <div>padding (四周内边距)</div>
    </ion-col>
    <ion-col class="ion-padding-top">
      <div>padding-top (上内边距)</div>
    </ion-col>
    <ion-col class="ion-padding-start">
      <div>padding-start (开始方向内边距)</div>
    </ion-col>
    <ion-col class="ion-padding-end">
      <div>padding-end (结束方向内边距)</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col class="ion-padding-bottom">
      <div>padding-bottom (下内边距)</div>
    </ion-col>
    <ion-col class="ion-padding-vertical">
      <div>padding-vertical (垂直方向内边距)</div>
    </ion-col>
    <ion-col class="ion-padding-horizontal">
      <div>padding-horizontal (水平方向内边距)</div>
    </ion-col>
    <ion-col class="ion-no-padding">
      <div>no-padding (无内边距)</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| 类名                       | 样式规则                | 描述                         |
| -------------------------- | ----------------------- | ---------------------------- |
| `.ion-padding`             | `padding: 16px`         | 为所有四边添加内边距。         |
| `.ion-padding-top`         | `padding-top: 16px`     | 添加上内边距。                 |
| `.ion-padding-start`       | `padding-start: 16px`   | 添加开始方向的内边距。         |
| `.ion-padding-end`         | `padding-end: 16px`     | 添加结束方向的内边距。         |
| `.ion-padding-bottom`      | `padding-bottom: 16px`  | 添加下内边距。                 |
| `.ion-padding-vertical`    | `padding: 16px 0`       | 添加上和下内边距。             |
| `.ion-padding-horizontal`  | `padding: 0 16px`       | 添加左和右内边距。             |
| `.ion-no-padding`          | `padding: 0`            | 移除所有内边距。               |

<LegacyAnchor id="element-margin" />

### 外边距 (Margin)

外边距区域扩展了边框区域，是一个空白区域，用于将元素与其邻居隔开。

默认应用的 `margin` 大小为 `16px`，由 `--ion-margin` 变量设置。有关如何更改这些值的更多信息，请参阅 [CSS 变量](../theming/css-variables.md)部分。

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-margin">
      <div>margin (四周外边距)</div>
    </ion-col>
    <ion-col class="ion-margin-top">
      <div>margin-top (上外边距)</div>
    </ion-col>
    <ion-col class="ion-margin-start">
      <div>margin-start (开始方向外边距)</div>
    </ion-col>
    <ion-col class="ion-margin-end">
      <div>margin-end (结束方向外边距)</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col class="ion-margin-bottom">
      <div>margin-bottom (下外边距)</div>
    </ion-col>
    <ion-col class="ion-margin-vertical">
      <div>margin-vertical (垂直方向外边距)</div>
    </ion-col>
    <ion-col class="ion-margin-horizontal">
      <div>margin-horizontal (水平方向外边距)</div>
    </ion-col>
    <ion-col class="ion-no-margin">
      <div>no-margin (无外边距)</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| 类名                      | 样式规则               | 描述                         |
| ------------------------- | ---------------------- | ---------------------------- |
| `.ion-margin`             | `margin: 16px`         | 为所有四边添加外边距。         |
| `.ion-margin-top`         | `margin-top: 16px`     | 添加上外边距。                 |
| `.ion-margin-start`       | `margin-start: 16px`   | 添加开始方向的外边距。         |
| `.ion-margin-end`         | `margin-end: 16px`     | 添加结束方向的外边距。         |
| `.ion-margin-bottom`      | `margin-bottom: 16px`  | 添加下外边距。                 |
| `.ion-margin-vertical`    | `margin: 16px 0`       | 添加上和下外边距。             |
| `.ion-margin-horizontal`  | `margin: 0 16px`       | 添加左和右外边距。             |
| `.ion-no-margin`          | `margin: 0`            | 移除所有外边距。               |

<LegacyAnchor id="flex-container-properties" />

## Flex 容器属性

Flexbox 属性分为两类：控制所有 flex 项目布局的**容器属性**，以及控制单个 flex 项目的**项目属性**。项目级别的对齐请参阅 [Flex 项目属性](#flex-item-properties)。

<img src={require('@site/static/img/layout/diagram-flex-attributes.png').default} />

### 交叉轴对齐 (Align Items)

[align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) CSS 属性设置所有直接子元素的 [align-self](#align-self) 值，作为一个组。在 flexbox 中，它控制项目在交叉轴（cross axis）上的对齐方式。在网格布局中，它控制项目在其网格区域内的块轴（block axis）上的对齐方式。

<img src={require('@site/static/img/layout/align-items.png').default} />

Ionic 为 `align-items` 提供了以下工具类：

| 类名                          | 样式规则                   | 描述                               |
| ----------------------------- | -------------------------- | ---------------------------------- |
| `.ion-align-items-start`      | `align-items: flex-start`  | 项目在交叉轴的起点对齐。           |
| `.ion-align-items-end`        | `align-items: flex-end`    | 项目在交叉轴的终点对齐。           |
| `.ion-align-items-center`     | `align-items: center`      | 项目在交叉轴上居中对齐。           |
| `.ion-align-items-baseline`   | `align-items: baseline`    | 项目根据它们的基线对齐。           |
| `.ion-align-items-stretch`    | `align-items: stretch`     | 项目被拉伸以填满容器。             |

### 内容对齐 (Align Content)

[align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) CSS 属性设置行与行之间在 flexbox 交叉轴或网格/块级元素块轴上的空间分布。

此属性对单行的 flex 容器（即 `flex-wrap: nowrap`）没有影响。

<img src={require('@site/static/img/layout/align-content.png').default} />

Ionic 为 `align-content` 提供了以下工具类：

| 类名                           | 样式规则                        | 描述                                     |
| ------------------------------ | ------------------------------- | ---------------------------------------- |
| `.ion-align-content-start`     | `align-content: flex-start`     | 行在交叉轴的起点紧凑排列。               |
| `.ion-align-content-end`       | `align-content: flex-end`       | 行在交叉轴的终点紧凑排列。               |
| `.ion-align-content-center`    | `align-content: center`         | 行在交叉轴上居中对齐。                   |
| `.ion-align-content-stretch`   | `align-content: stretch`        | 行被拉伸以填满容器。                     |
| `.ion-align-content-between`   | `align-content: space-between`  | 行在交叉轴上均匀分布，首行靠起点，末行靠终点。 |
| `.ion-align-content-around`    | `align-content: space-around`   | 行在交叉轴上均匀分布，每行周围间距相等。     |

### 主轴对齐 (Justify Content)

[justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) CSS 属性定义了浏览器如何沿着 flex 容器的主轴（main axis）以及网格和多列容器的行内轴（inline axis）分配项目之间的空间。

<img src={require('@site/static/img/layout/justify-content.png').default} />

Ionic 为 `justify-content` 提供了以下工具类：

| 类名                             | 样式规则                          | 描述                                             |
| -------------------------------- | --------------------------------- | ------------------------------------------------ |
| `.ion-justify-content-start`     | `justify-content: flex-start`     | 项目在主轴的起点紧凑排列。                       |
| `.ion-justify-content-end`       | `justify-content: flex-end`       | 项目在主轴的终点紧凑排列。                       |
| `.ion-justify-content-center`    | `justify-content: center`         | 项目在主轴上居中对齐。                           |
| `.ion-justify-content-around`    | `justify-content: space-around`   | 项目在主轴上均匀分布，每个项目周围间距相等。       |
| `.ion-justify-content-between`   | `justify-content: space-between`  | 项目在主轴上均匀分布，首项目靠起点，末项目靠终点。 |
| `.ion-justify-content-evenly`    | `justify-content: space-evenly`   | 项目在主轴上均匀分布，任意两个项目之间的间距相等。 |

### 主轴方向 (Flex Direction)

[flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) CSS 属性设置 flex 容器中主轴的方向以及项目排列的方向（正常或反向）。

<img src={require('@site/static/img/layout/flex-direction.png').default} />

Ionic 为 `flex-direction` 提供了以下工具类：

| 类名                         | 样式规则                          | 描述                           |
| ---------------------------- | --------------------------------- | ------------------------------ |
| `.ion-flex-row`              | `flex-direction: row`             | 项目水平排列，与文本方向一致。   |
| `.ion-flex-row-reverse`      | `flex-direction: row-reverse`     | 项目水平反向排列。               |
| `.ion-flex-column`           | `flex-direction: column`          | 项目垂直排列。                   |
| `.ion-flex-column-reverse`   | `flex-direction: column-reverse`  | 项目垂直反向排列。               |

### 换行 (Flex Wrap)

[flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) CSS 属性设置 flex 项目是强制在一行内显示，还是可以换行显示。如果允许换行，它还设置了行堆叠的方向。

<img src={require('@site/static/img/layout/flex-wrap.png').default} />

Ionic 为 `flex-wrap` 提供了以下工具类：

| 类名                       | 样式规则                   | 描述                                 |
| -------------------------- | -------------------------- | ------------------------------------ |
| `.ion-flex-nowrap`         | `flex-wrap: nowrap`        | 所有项目将在一行内显示。             |
| `.ion-flex-wrap`           | `flex-wrap: wrap`          | 项目将从上到下换行显示在多行上。     |
| `.ion-flex-wrap-reverse`   | `flex-wrap: wrap-reverse`  | 项目将从下到上换行显示在多行上。     |

### 响应式 Flex 容器类

上述所有 flex 容器类都有额外的类，可以根据屏幕尺寸调整属性。将基础类名替换为 `{property}-{breakpoint}-{modifier}`，即可在特定的屏幕尺寸上应用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-breakpoints)中列出的断点名称之一。

下表展示了默认行为，其中 `{property}` 可以是：`justify-content`, `align-content`, `align-items`, `flex`, 或 `flex-wrap`；`{modifier}` 是如上所述的相应值。

| 类名                              | 描述                                                   |
| --------------------------------- | ------------------------------------------------------ |
| `.ion-{property}-{modifier}`      | 在所有屏幕尺寸上对元素应用该修饰。                     |
| `.ion-{property}-sm-{modifier}`   | 当屏幕宽度 `min-width: 576px` 时对元素应用该修饰。    |
| `.ion-{property}-md-{modifier}`   | 当屏幕宽度 `min-width: 768px` 时对元素应用该修饰。    |
| `.ion-{property}-lg-{modifier}`   | 当屏幕宽度 `min-width: 992px` 时对元素应用该修饰。    |
| `.ion-{property}-xl-{modifier}`   | 当屏幕宽度 `min-width: 1200px` 时对元素应用该修饰。   |

### 已废弃的类

:::warning 废弃通知

以下类已废弃，将在下个主要版本中移除。请改用推荐的 `.ion-flex-*` 类。

:::

| 类名                  | 描述                                                                                                 |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| `.ion-nowrap`         | 所有项目将在一行内显示。<br />**已废弃** — 请改用 `.ion-flex-nowrap`。                               |
| `.ion-wrap`           | 项目将从上到下换行显示在多行上。<br />**已废弃** — 请改用 `.ion-flex-wrap`。                         |
| `.ion-wrap-reverse`   | 项目将从下到上换行显示在多行上。<br />**已废弃** — 请改用 `.ion-flex-wrap-reverse`。                 |

<LegacyAnchor id="flex-item-properties" />

## Flex 项目属性

Flex 项目属性控制单个 flex 项目在其 flex 容器中的行为。另请参阅：[Flex 容器属性](#flex-container-properties)以了解容器级别的对齐。

<LegacyAnchor id="align-self" />

### 单独对齐 (Align Self)

[align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) CSS 属性覆盖了网格或 flex 项目的 `align-items` 值。在网格中，它使项目在其网格区域内对齐。在 flexbox 中，它使项目在交叉轴上对齐。

此属性不适用于块级盒子或表格单元格。如果一个 flex 项目的交叉轴外边距为 `auto`，则 `align-self` 将被忽略。

<img src={require('@site/static/img/layout/align-self.png').default} />

Ionic 为 `align-self` 提供了以下工具类：

| 类名                         | 样式规则                  | 描述                                       |
| ---------------------------- | ------------------------- | ------------------------------------------ |
| `.ion-align-self-start`      | `align-self: flex-start`  | 项目在交叉轴的起点对齐。                   |
| `.ion-align-self-end`        | `align-self: flex-end`    | 项目在交叉轴的终点对齐。                   |
| `.ion-align-self-center`     | `align-self: center`      | 项目在交叉轴上居中对齐。                   |
| `.ion-align-self-baseline`   | `align-self: baseline`    | 项目的基线与其他项目的基线对齐。           |
| `.ion-align-self-stretch`    | `align-self: stretch`     | 项目被拉伸以填满容器。                     |
| `.ion-align-self-auto`       | `align-self: auto`        | 项目根据父元素的 `align-items` 值定位。    |

<LegacyAnchor id="flex-properties" />

### 弹性 (Flex)

[flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) CSS 属性是 `flex-grow`、`flex-shrink` 和 `flex-basis` 的简写属性。它设置了 flex 项目如何根据其 flex 容器中的可用空间进行伸缩。

<img src={require('@site/static/img/layout/flex.png').default} />

Ionic 为 `flex` 提供了以下工具类：

| 类名                  | 样式规则         | 描述                                                 |
| --------------------- | ---------------- | ---------------------------------------------------- |
| `.ion-flex-1`         | `flex: 1`        | 项目与其他 flex 项目同等伸缩。                       |
| `.ion-flex-auto`      | `flex: auto`     | 项目根据其内容大小进行伸缩。                         |
| `.ion-flex-initial`   | `flex: initial`  | 项目收缩到其最小内容大小，但不会增长。               |
| `.ion-flex-none`      | `flex: none`     | 项目不会增长或收缩。                                 |

### 增长因子 (Flex Grow)

[flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) CSS 属性设置 flex 增长因子，它指定当 flex 容器有正的自由空间时，应如何分配给该 flex 项目的主轴尺寸。

<img src={require('@site/static/img/layout/flex-grow.png').default} />

Ionic 为 `flex-grow` 提供了以下工具类：

| 类名                 | 样式规则        | 描述                                 |
| -------------------- | --------------- | ------------------------------------ |
| `.ion-flex-grow-0`   | `flex-grow: 0`  | 项目不会超出其内容大小而增长。       |
| `.ion-flex-grow-1`   | `flex-grow: 1`  | 项目会按比例增长以填满可用空间。     |

### 收缩因子 (Flex Shrink)

[flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink) CSS 属性设置 flex 项目的收缩因子。如果所有 flex 项目的尺寸之和大于 flex 容器，项目会根据其 `flex-shrink` 值进行收缩以适应容器。

<img src={require('@site/static/img/layout/flex-shrink.png').default} />

Ionic 为 `flex-shrink` 提供了以下工具类：

| 类名                   | 样式规则          | 描述                                         |
| ---------------------- | ----------------- | -------------------------------------------- |
| `.ion-flex-shrink-0`   | `flex-shrink: 0`  | 项目不会收缩到小于其内容大小。               |
| `.ion-flex-shrink-1`   | `flex-shrink: 1`  | 当容器空间不足时，项目会按比例收缩。         |

### 顺序 (Order)

[order](https://developer.mozilla.org/en-US/docs/Web/CSS/order) CSS 属性设置项目在 flex 或 grid 容器中的布局顺序。容器中的项目按升序的 `order` 值排序，然后按源代码顺序排序。未指定 `order` 值的项目被赋予默认值 `0`。

<img src={require('@site/static/img/layout/order.png').default} />

Ionic 为 `order` 提供了以下工具类：

| 类名                 | 样式规则     | 描述                                   |
| -------------------- | ------------ | -------------------------------------- |
| `.ion-order-first`   | `order: -1`  | 项目在 flex 容器中排在第一位。         |
| `.ion-order-0`       | `order: 0`   | 项目按自然顺序显示。                   |
| `.ion-order-1`       | `order: 1`   | 项目显示在 order 为 0 的项目之后。     |
| `.ion-order-2`       | `order: 2`   | 项目显示在 order 为 1 的项目之后。     |
| `.ion-order-3`       | `order: 3`   | 项目显示在 order 为 2 的项目之后。     |
| `.ion-order-4`       | `order: 4`   | 项目显示在 order 为 3 的项目之后。     |
| `.ion-order-5`       | `order: 5`   | 项目显示在 order 为 4 的项目之后。     |
| `.ion-order-6`       | `order: 6`   | 项目显示在 order 为 5 的项目之后。     |
| `.ion-order-7`       | `order: 7`   | 项目显示在 order 为 6 的项目之后。     |
| `.ion-order-8`       | `order: 8`   | 项目显示在 order 为 7 的项目之后。     |
| `.ion-order-9`       | `order: 9`   | 项目显示在 order 为 8 的项目之后。     |
| `.ion-order-10`      | `order: 10`  | 项目显示在 order 为 9 的项目之后。     |
| `.ion-order-11`      | `order: 11`  | 项目显示在 order 为 10 的项目之后。    |
| `.ion-order-12`      | `order: 12`  | 项目显示在 order 为 11 的项目之后。    |
| `.ion-order-last`    | `order: 13`  | 项目在 flex 容器中排在最后一位。       |

### 响应式 Flex 项目类

上述所有 flex 项目类都有额外的类，可以根据屏幕尺寸调整属性。将基础类名替换为 `{property}-{breakpoint}-{modifier}`，即可在特定的屏幕尺寸上应用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-breakpoints)中列出的断点名称之一。

下表展示了默认行为，其中 `{property}` 可以是：`align-self`, `flex`, `flex-grow`, `flex-shrink`, 或 `order`；`{modifier}` 是如上所述的相应值。

| 类名                              | 描述                                                   |
| --------------------------------- | ------------------------------------------------------ |
| `.ion-{property}-{modifier}`      | 在所有屏幕尺寸上对元素应用该修饰。                     |
| `.ion-{property}-sm-{modifier}`   | 当屏幕宽度 `min-width: 576px` 时对元素应用该修饰。    |
| `.ion-{property}-md-{modifier}`   | 当屏幕宽度 `min-width: 768px` 时对元素应用该修饰。    |
| `.ion-{property}-lg-{modifier}`   | 当屏幕宽度 `min-width: 992px` 时对元素应用该修饰。    |
| `.ion-{property}-xl-{modifier}`   | 当屏幕宽度 `min-width: 1200px` 时对元素应用该修饰。   |

## 边框显示

`.ion-no-border` 工具类可用于移除 Ionic 组件的边框。这个类可以应用于 `ion-header` 和 `ion-footer` 组件。

```html
<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-title>Header - 无边框</ion-title>
  </ion-toolbar>
</ion-header>

<ion-footer class="ion-no-border">
  <ion-toolbar>
    <ion-title>Footer - 无边框</ion-title>
  </ion-toolbar>
</ion-footer>
```

| 类名               | 描述                 |
| ------------------ | -------------------- |
| `.ion-no-border`   | 元素将不显示边框。     |

<LegacyAnchor id="ionic-breakpoints" />

## Ionic 断点

Ionic 在媒体查询中使用断点，以根据屏幕尺寸为应用应用不同的样式。以下断点名称用于上述工具类中，当屏幕宽度达到指定值时，该类将生效。

| 断点名称 | 宽度      |
| -------- | -------- |
| `xs`     | `0`      |
| `sm`     | `576px`  |
| `md`     | `768px`  |
| `lg`     | `992px`  |
| `xl`     | `1200px` |