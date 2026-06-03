---
title: CSS 实用工具
---

<head>
  <title>CSS 实用工具：用于文本/元素对齐或修改的类</title>
  <meta
    name="description"
    content="Ionic CSS 实用工具类可用于任何元素，以实现文本修改/对齐、元素放置或调整内边距和外边距。阅读本文以了解更多信息。"
  />
</head>

Ionic Framework 提供了一组 CSS 实用工具类，可在任何元素上使用，以修改文本、元素放置或调整内边距和外边距。

:::important
如果您的应用不是使用可用的 Ionic Framework 启动器启动的，则需要包含[全局样式表的可选部分](global-stylesheets.md#可选的)中列出的样式表，这些样式才能正常工作。
:::

## 文本修改

### 文本对齐

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div class="ion-text-start">
        <h3>text-start</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-end">
        <h3>text-end</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-center">
        <h3>text-center</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div class="ion-text-justify">
        <h3>text-justify</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-wrap">
        <h3>text-wrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-nowrap">
        <h3>text-nowrap</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class               | Style Rule            | Description                                                                                                                        |
| ------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `.ion-text-left`    | `text-align: left`    | 行内内容对齐到行框的左边缘。                                                                                                       |
| `.ion-text-right`   | `text-align: right`   | 行内内容对齐到行框的右边缘。                                                                                                       |
| `.ion-text-start`   | `text-align: start`   | 如果方向为从左到右则等同于 `text-left`，如果方向为从右到左则等同于 `text-right`。                                                 |
| `.ion-text-end`     | `text-align: end`     | 如果方向为从左到右则等同于 `text-right`，如果方向为从右到左则等同于 `text-left`。                                                 |
| `.ion-text-center`  | `text-align: center`  | 行内内容在行框内居中对齐。                                                                                                         |
| `.ion-text-justify` | `text-align: justify` | 行内内容两端对齐。文本应均匀分布，使其左右边缘与行框的左右边缘对齐，最后一行除外。                                                 |
| `.ion-text-wrap`    | `white-space: normal` | 空白序列被合并。源文件中的换行符与其他空白字符同样处理。根据需要换行以填充行框。                                                   |
| `.ion-text-nowrap`  | `white-space: nowrap` | 与 `normal` 一样合并空白，但抑制文本内的换行（文本换行）。                                                                         |

### 文本转换

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div class="ion-text-uppercase">
        <h3>text-uppercase</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-lowercase">
        <h3>text-lowercase</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
    <ion-col>
      <div class="ion-text-capitalize">
        <h3>text-capitalize</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class                  | Style Rule                   | Description                                    |
| ---------------------- | ---------------------------- | ---------------------------------------------- |
| `.ion-text-uppercase`  | `text-transform: uppercase`  | 强制将所有字符转换为大写。                      |
| `.ion-text-lowercase`  | `text-transform: lowercase`  | 强制将所有字符转换为小写。                      |
| `.ion-text-capitalize` | `text-transform: capitalize` | 强制将每个单词的首字母转换为大写。              |

### 响应式文本类

上面列出的所有文本类都有额外的类，可以根据屏幕大小修改文本。在每个类中，使用 `text-{breakpoint}-` 代替 `text-`，以仅在特定屏幕尺寸上使用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-断点)中列出的断点名称之一。

下表显示了默认行为，其中 `{modifier}` 可以是以下任意一项：`left`、`right`、`start`、`end`、`center`、`justify`、`wrap`、`nowrap`、`uppercase`、`lowercase` 或 `capitalize`，如上所述。

| Class                     | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| `.ion-text-{modifier}`    | 在所有屏幕尺寸上对元素应用修饰符。                            |
| `.ion-text-sm-{modifier}` | 当 `min-width: 576px` 时对元素应用修饰符。                   |
| `.ion-text-md-{modifier}` | 当 `min-width: 768px` 时对元素应用修饰符。                   |
| `.ion-text-lg-{modifier}` | 当 `min-width: 992px` 时对元素应用修饰符。                   |
| `.ion-text-xl-{modifier}` | 当 `min-width: 1200px` 时对元素应用修饰符。                  |

## 元素放置

### 浮动

[float](https://developer.mozilla.org/en-US/docs/Web/CSS/float) CSS 属性指定元素应放置在其容器的左侧或右侧，文本和内联元素将环绕它。这样，元素脱离了网页的正常流，但仍然保持为流的一部分，这与绝对定位不同。

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <h3>不浮动</h3>
      <img
        alt="人物头部剪影"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col>
      <h3>左浮动</h3>
      <img
        alt="人物头部剪影"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
        class="ion-float-left"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col>
      <h3>右浮动</h3>
      <img
        alt="人物头部剪影"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
        class="ion-float-right"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class              | Style Rule                     | Description                                                                                              |
| ------------------ | ------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `.ion-float-left`  | `float: left`                  | 元素将浮动在其包含块的左侧。                                                                              |
| `.ion-float-right` | `float: right`                 | 元素将浮动在其包含块的右侧。                                                                              |
| `.ion-float-start` | `float: left` / `float: right` | 如果方向为从左到右则等同于 `float-left`，如果方向为从右到左则等同于 `float-right`。                      |
| `.ion-float-end`   | `float: left` / `float: right` | 如果方向为从左到右则等同于 `float-right`，如果方向为从右到左则等同于 `float-left`。                      |

### 响应式浮动类

上面列出的所有浮动类都有额外的类，可以根据屏幕大小修改浮动行为。在每个类中，使用 `float-{breakpoint}-` 代替 `float-`，以仅在特定屏幕尺寸上使用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-断点)中列出的断点名称之一。

下表显示了默认行为，其中 `{modifier}` 可以是以下任意一项：`left`、`right`、`start` 或 `end`，如上所述。

| Class                      | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| `.ion-float-{modifier}`    | 在所有屏幕尺寸上对元素应用修饰符。                            |
| `.ion-float-sm-{modifier}` | 当 `min-width: 576px` 时对元素应用修饰符。                   |
| `.ion-float-md-{modifier}` | 当 `min-width: 768px` 时对元素应用修饰符。                   |
| `.ion-float-lg-{modifier}` | 当 `min-width: 992px` 时对元素应用修饰符。                   |
| `.ion-float-xl-{modifier}` | 当 `min-width: 1200px` 时对元素应用修饰符。                  |

## 元素显示

### 显示

[display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) CSS 属性设置元素是作为块级还是内联框处理，以及用于其子元素的布局，如流式布局、网格或弹性布局。它也可以用于完全从布局中隐藏元素。

Ionic 为 `display` 提供了以下实用类：

| Class                       | Style Rule              | Description                                                                                                         |
| --------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `.ion-display-none`         | `display: none`         | 关闭元素的显示，使其对布局没有影响（文档渲染时如同该元素不存在）。                                                  |
| `.ion-display-inline`       | `display: inline`       | 元素表现为内联元素，不会在其前后创建换行。                                                                          |
| `.ion-display-inline-block` | `display: inline-block` | 元素表现为块级元素，但像单个内联框一样与周围内容一起流动。                                                          |
| `.ion-display-block`        | `display: block`        | 元素表现为块级元素，在正常流中在其前后创建换行。                                                                    |
| `.ion-display-flex`         | `display: flex`         | 元素表现为块级元素，并根据弹性盒模型布局其内容。                                                                    |
| `.ion-display-inline-flex`  | `display: inline-flex`  | 元素表现为内联元素，并根据弹性盒模型布局其内容。                                                                    |
| `.ion-display-grid`         | `display: grid`         | 元素表现为块级元素，并根据网格模型布局其内容。                                                                      |
| `.ion-display-inline-grid`  | `display: inline-grid`  | 元素表现为内联元素，并根据网格模型布局其内容。                                                                      |
| `.ion-display-table`        | `display: table`        | 元素表现为类似 HTML `<table>` 元素的行为。它定义一个块级框。                                                        |
| `.ion-display-table-cell`   | `display: table-cell`   | 元素表现为类似 HTML `<td>` 元素的行为。                                                                             |
| `.ion-display-table-row`    | `display: table-row`    | 元素表现为类似 HTML `<tr>` 元素的行为。                                                                             |

### 响应式显示类

上面列出的所有显示类都有额外的类，可以根据屏幕大小修改显示行为。在每个类中，使用 `display-{breakpoint}-` 代替 `display-`，以仅在特定屏幕尺寸上使用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-断点)中列出的断点名称之一。

下表显示了默认行为，其中 `{modifier}` 可以是以下任意一项：`none`、`inline`、`inline-block`、`block`、`flex`、`inline-flex`、`grid`、`inline-grid`、`table`、`table-cell`、`table-row`，如上所述。

| Class                        | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| `.ion-display-{modifier}`    | 在所有屏幕尺寸上对元素应用修饰符。                            |
| `.ion-display-sm-{modifier}` | 当 `min-width: 576px` 时对元素应用修饰符。                   |
| `.ion-display-md-{modifier}` | 当 `min-width: 768px` 时对元素应用修饰符。                   |
| `.ion-display-lg-{modifier}` | 当 `min-width: 992px` 时对元素应用修饰符。                   |
| `.ion-display-xl-{modifier}` | 当 `min-width: 1200px` 时对元素应用修饰符。                  |

### 已弃用的类

:::warning 弃用通知

以下类已被弃用，并将在下一个主要版本中移除。请改用推荐的 `.ion-display-*` 类。

:::

| Class                | Description                                                                                                                                                             |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.ion-hide`          | 在所有屏幕尺寸上对元素应用 `display: none`。<br/>**已弃用** —— 请改用 `ion-display-none` 类。                                                                          |
| `.ion-hide-sm-{dir}` | 当 `min-width: 576px`（`up`）或 `max-width: 576px`（`down`）时对元素应用修饰符。<br/>**已弃用** —— 请改用 `ion-display-sm-{modifier}` 类。                              |
| `.ion-hide-md-{dir}` | 当 `min-width: 768px`（`up`）或 `max-width: 768px`（`down`）时对元素应用修饰符。<br/>**已弃用** —— 请改用 `ion-display-md-{modifier}` 类。                              |
| `.ion-hide-lg-{dir}` | 当 `min-width: 992px`（`up`）或 `max-width: 992px`（`down`）时对元素应用修饰符。<br/>**已弃用** —— 请改用 `ion-display-lg-{modifier}` 类。                              |
| `.ion-hide-xl-{dir}` | 当 `min-width: 1200px`（`up`）或 `max-width: 1200px`（`down`）时对元素应用修饰符。<br/>**已弃用** —— 请改用 `ion-display-xl-{modifier}` 类。                            |

## 内容间距

### 内边距

内边距类用于设置元素的内边距区域。内边距区域是元素内容与其边框之间的空间。

默认应用的 `padding` 值为 `16px`，由 `--ion-padding` 变量设置。有关如何更改这些值的更多信息，请参阅 [CSS 变量](../theming/css-variables.md)部分。

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-padding">
      <div>内边距</div>
    </ion-col>
    <ion-col class="ion-padding-top">
      <div>上内边距</div>
    </ion-col>
    <ion-col class="ion-padding-start">
      <div>起始内边距</div>
    </ion-col>
    <ion-col class="ion-padding-end">
      <div>结束内边距</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col class="ion-padding-bottom">
      <div>下内边距</div>
    </ion-col>
    <ion-col class="ion-padding-vertical">
      <div>垂直内边距</div>
    </ion-col>
    <ion-col class="ion-padding-horizontal">
      <div>水平内边距</div>
    </ion-col>
    <ion-col class="ion-no-padding">
      <div>无内边距</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class                     | Style Rule             | Description                     |
| ------------------------- | ---------------------- | ------------------------------- |
| `.ion-padding`            | `padding: 16px`        | 为所有边应用内边距。             |
| `.ion-padding-top`        | `padding-top: 16px`    | 为顶部应用内边距。               |
| `.ion-padding-start`      | `padding-start: 16px`  | 为起始侧应用内边距。             |
| `.ion-padding-end`        | `padding-end: 16px`    | 为结束侧应用内边距。             |
| `.ion-padding-bottom`     | `padding-bottom: 16px` | 为底部应用内边距。               |
| `.ion-padding-vertical`   | `padding: 16px 0`      | 为顶部和底部应用内边距。         |
| `.ion-padding-horizontal` | `padding: 0 16px`      | 为左侧和右侧应用内边距。         |
| `.ion-no-padding`         | `padding: 0`           | 所有边均不应用内边距。           |

### 外边距

外边距区域通过一个空白区域扩展边框区域，用于将元素与其相邻元素分隔开。

默认应用的 `margin` 值为 `16px`，由 `--ion-margin` 变量设置。有关如何更改这些值的更多信息，请参阅 [CSS 变量](../theming/css-variables.md)部分。

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-margin">
      <div>外边距</div>
    </ion-col>
    <ion-col class="ion-margin-top">
      <div>上外边距</div>
    </ion-col>
    <ion-col class="ion-margin-start">
      <div>起始外边距</div>
    </ion-col>
    <ion-col class="ion-margin-end">
      <div>结束外边距</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col class="ion-margin-bottom">
      <div>下外边距</div>
    </ion-col>
    <ion-col class="ion-margin-vertical">
      <div>垂直外边距</div>
    </ion-col>
    <ion-col class="ion-margin-horizontal">
      <div>水平外边距</div>
    </ion-col>
    <ion-col class="ion-no-margin">
      <div>无外边距</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| Class                    | Style Rule            | Description                     |
| ------------------------ | --------------------- | ------------------------------- |
| `.ion-margin`            | `margin: 16px`        | 为所有边应用外边距。             |
| `.ion-margin-top`        | `margin-top: 16px`    | 为顶部应用外边距。               |
| `.ion-margin-start`      | `margin-start: 16px`  | 为左侧应用外边距。               |
| `.ion-margin-end`        | `margin-end: 16px`    | 为右侧应用外边距。               |
| `.ion-margin-bottom`     | `margin-bottom: 16px` | 为底部应用外边距。               |
| `.ion-margin-vertical`   | `margin: 16px 0`      | 为顶部和底部应用外边距。         |
| `.ion-margin-horizontal` | `margin: 0 16px`      | 为左侧和右侧应用外边距。         |
| `.ion-no-margin`         | `margin: 0`           | 所有边均不应用外边距。           |

## Flex 容器属性

Flexbox 属性分为两类：**容器属性**控制所有 flex 项目的布局，**项目属性**控制单个 flex 项目。有关项目级别的对齐，请参阅 [Flex 项目属性](#flex-项目属性)。

<img src={require('@site/static/img/layout/diagram-flex-attributes.png').default} />

### 对齐项目

[align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) CSS 属性将 [align-self](#自身对齐) 值作为一个组设置给所有直接子元素。在 flexbox 中，它控制项目在交叉轴上的对齐方式。在网格布局中，它控制项目在其网格区域内沿块轴的对齐方式。

<img src={require('@site/static/img/layout/align-items.png').default} />

Ionic 为 `align-items` 提供了以下实用类：

| Class                       | Style Rule                | Description                              |
| --------------------------- | ------------------------- | ---------------------------------------- |
| `.ion-align-items-start`    | `align-items: flex-start` | 项目在交叉轴的起始端靠拢。                |
| `.ion-align-items-end`      | `align-items: flex-end`   | 项目在交叉轴的末端靠拢。                  |
| `.ion-align-items-center`   | `align-items: center`     | 项目沿交叉轴居中对齐。                    |
| `.ion-align-items-baseline` | `align-items: baseline`   | 项目对齐，使其基线对齐。                  |
| `.ion-align-items-stretch`  | `align-items: stretch`    | 项目被拉伸以填满容器。                    |

### 对齐内容

[align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) CSS 属性设置内容项目之间和周围空间在 flexbox 交叉轴或网格/块级元素的块轴上的分布方式。

此属性对单行 flex 容器（即 `flex-wrap: nowrap`）没有效果。

<img src={require('@site/static/img/layout/align-content.png').default} />

Ionic 为 `align-content` 提供了以下实用类：

| Class                        | Style Rule                     | Description                                  |
| ---------------------------- | ------------------------------ | -------------------------------------------- |
| `.ion-align-content-start`   | `align-content: flex-start`    | 行在交叉轴的起始端靠拢。                      |
| `.ion-align-content-end`     | `align-content: flex-end`      | 行在交叉轴的末端靠拢。                        |
| `.ion-align-content-center`  | `align-content: center`        | 行沿交叉轴居中对齐。                          |
| `.ion-align-content-stretch` | `align-content: stretch`       | 行被拉伸以填满容器。                          |
| `.ion-align-content-between` | `align-content: space-between` | 行在交叉轴上均匀分布。                        |
| `.ion-align-content-around`  | `align-content: space-around`  | 行均匀分布，周围空间相等。                    |

### 内容对齐

[justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) CSS 属性定义了浏览器如何在 flex 容器的主轴以及网格和多列容器的内联轴上分配内容项目之间和周围的空间。

<img src={require('@site/static/img/layout/justify-content.png').default} />

Ionic 为 `justify-content` 提供了以下实用类：

| Class                          | Style Rule                       | Description                                        |
| ------------------------------ | -------------------------------- | -------------------------------------------------- |
| `.ion-justify-content-start`   | `justify-content: flex-start`    | 项目在主轴的起始端靠拢。                            |
| `.ion-justify-content-end`     | `justify-content: flex-end`      | 项目在主轴的末端靠拢。                              |
| `.ion-justify-content-center`  | `justify-content: center`        | 项目沿主轴居中对齐。                                |
| `.ion-justify-content-around`  | `justify-content: space-around`  | 项目在主轴上均匀分布，周围空间相等。                |
| `.ion-justify-content-between` | `justify-content: space-between` | 项目在主轴上均匀分布。                              |
| `.ion-justify-content-evenly`  | `justify-content: space-evenly`  | 项目分布使任意两个项目之间的间距相等。              |

### 弹性方向

[flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) CSS 属性设置 flex 项目在 flex 容器中的放置方式，定义主轴和方向（正常或反向）。

<img src={require('@site/static/img/layout/flex-direction.png').default} />

Ionic 为 `flex-direction` 提供了以下实用类：

| Class                      | Style Rule                       | Description                           |
| -------------------------- | -------------------------------- | ------------------------------------- |
| `.ion-flex-row`            | `flex-direction: row`            | 项目沿文本方向排列。                    |
| `.ion-flex-row-reverse`    | `flex-direction: row-reverse`    | 项目沿文本方向的反方向排列。            |
| `.ion-flex-column`         | `flex-direction: column`         | 项目垂直排列。                          |
| `.ion-flex-column-reverse` | `flex-direction: column-reverse` | 项目以相反顺序垂直排列。                |

### 弹性换行

[flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) CSS 属性设置 flex 项目是强制在一行上还是可以换行到多行。如果允许换行，它设置行的堆叠方向。

<img src={require('@site/static/img/layout/flex-wrap.png').default} />

Ionic 为 `flex-wrap` 提供了以下实用类：

| Class                    | Style Rule                | Description                          |
| ------------------------ | ------------------------- | ------------------------------------ |
| `.ion-flex-nowrap`       | `flex-wrap: nowrap`       | 所有项目将在同一行上。                |
| `.ion-flex-wrap`         | `flex-wrap: wrap`         | 项目将换行到多行，从上到下排列。      |
| `.ion-flex-wrap-reverse` | `flex-wrap: wrap-reverse` | 项目将换行到多行，从下到上排列。      |

### 响应式 Flex 容器类

上面列出的所有 flex 容器类都有额外的类，可以根据屏幕大小修改属性。使用 `{property}-{breakpoint}-{modifier}` 代替基本类名，以仅在特定屏幕尺寸上使用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-断点)中列出的断点名称之一。

下表显示了默认行为，其中 `{property}` 可以是以下任意一项：`justify-content`、`align-content`、`align-items`、`flex` 或 `flex-wrap`，而 `{modifier}` 是如上所述的对应值。

| Class                           | Description                                                  |
| ------------------------------- | ------------------------------------------------------------ |
| `.ion-{property}-{modifier}`    | 在所有屏幕尺寸上对元素应用修饰符。                            |
| `.ion-{property}-sm-{modifier}` | 当 `min-width: 576px` 时对元素应用修饰符。                   |
| `.ion-{property}-md-{modifier}` | 当 `min-width: 768px` 时对元素应用修饰符。                   |
| `.ion-{property}-lg-{modifier}` | 当 `min-width: 992px` 时对元素应用修饰符。                   |
| `.ion-{property}-xl-{modifier}` | 当 `min-width: 1200px` 时对元素应用修饰符。                  |

### 已弃用的类

:::warning 弃用通知

以下类已被弃用，并将在下一个主要版本中移除。请改用推荐的 `.ion-flex-*` 类。

:::

| Class               | Description                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------- |
| `.ion-nowrap`       | 所有项目将在同一行上。<br />**已弃用** —— 请改用 `.ion-flex-nowrap`。                                    |
| `.ion-wrap`         | 项目将换行到多行，从上到下排列。<br />**已弃用** —— 请改用 `.ion-flex-wrap`。                            |
| `.ion-wrap-reverse` | 项目将换行到多行，从下到上排列。<br />**已弃用** —— 请改用 `.ion-flex-wrap-reverse`。                    |

## Flex 项目属性

Flex 项目属性控制单个 flex 项目在其 flex 容器中的行为。另请参阅：[Flex 容器属性](#flex-容器属性)了解容器级别的对齐。

### 自身对齐

[align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) CSS 属性覆盖网格或 flex 项目的 align-items 值。在网格中，它对齐项目在网格区域内。在 flexbox 中，它在交叉轴上对齐项目。

此属性不适用于块级框或表格单元格。如果 flexbox 项目的交叉轴外边距为 `auto`，则 `align-self` 将被忽略。

<img src={require('@site/static/img/layout/align-self.png').default} />

Ionic 为 `align-self` 提供了以下实用类：

| Class                      | Style Rule               | Description                                  |
| -------------------------- | ------------------------ | -------------------------------------------- |
| `.ion-align-self-start`    | `align-self: flex-start` | 项目在交叉轴的起始端靠拢。                    |
| `.ion-align-self-end`      | `align-self: flex-end`   | 项目在交叉轴的末端靠拢。                      |
| `.ion-align-self-center`   | `align-self: center`     | 项目沿交叉轴居中对齐。                        |
| `.ion-align-self-baseline` | `align-self: baseline`   | 项目对齐，使其基线与其他项目基线对齐。        |
| `.ion-align-self-stretch`  | `align-self: stretch`    | 项目被拉伸以填满容器。                        |
| `.ion-align-self-auto`     | `align-self: auto`       | 项目根据父元素的 `align-items` 值定位。       |

### 弹性

[flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) CSS 属性是 `flex-grow`、`flex-shrink` 和 `flex-basis` 的简写属性。它设置 flex 项目如何增长或收缩以适应其 flex 容器中的可用空间。

<img src={require('@site/static/img/layout/flex.png').default} />

Ionic 为 `flex` 提供了以下实用类：

| Class               | Style Rule      | Description                                    |
| ------------------- | --------------- | ---------------------------------------------- |
| `.ion-flex-1`       | `flex: 1`       | 项目与其他 flex 项目同等地增长和收缩。          |
| `.ion-flex-auto`    | `flex: auto`    | 项目根据其内容大小增长和收缩。                  |
| `.ion-flex-initial` | `flex: initial` | 项目收缩到最小内容大小但不增长。                |
| `.ion-flex-none`    | `flex: none`    | 项目不增长也不收缩。                            |

### 弹性增长

[flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) CSS 属性设置 flex 增长因子，指定应在多大程度上将 flex 容器的正自由空间分配给 flex 项目的主尺寸。

<img src={require('@site/static/img/layout/flex-grow.png').default} />

Ionic 为 `flex-grow` 提供了以下实用类：

| Class              | Style Rule     | Description                               |
| ------------------ | -------------- | ----------------------------------------- |
| `.ion-flex-grow-0` | `flex-grow: 0` | 项目不会增长超过其内容大小。               |
| `.ion-flex-grow-1` | `flex-grow: 1` | 项目按比例增长以填满可用空间。             |

### 弹性收缩

[flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink) CSS 属性设置 flex 项目的收缩因子。如果所有 flex 项目的总大小大于 flex 容器，flex 项目可以根据其 `flex-shrink` 值收缩以适应。每个 flex 行的负自由空间在具有大于 `0` 的 `flex-shrink` 值的行内 flex 项目之间分配。

<img src={require('@site/static/img/layout/flex-shrink.png').default} />

Ionic 为 `flex-shrink` 提供了以下实用类：

| Class                | Style Rule       | Description                                  |
| -------------------- | ---------------- | -------------------------------------------- |
| `.ion-flex-shrink-0` | `flex-shrink: 0` | 项目不会收缩到其内容大小以下。                |
| `.ion-flex-shrink-1` | `flex-shrink: 1` | 当容器太小时，项目按比例收缩。                |

### 排序

[order](https://developer.mozilla.org/en-US/docs/Web/CSS/order) CSS 属性设置在 flex 或网格容器中项目的排列顺序。容器中的项目按升序的 `order` 值排序，然后按源代码顺序排序。未指定显式 `order` 值的项目被分配默认值 `0`。

<img src={require('@site/static/img/layout/order.png').default} />

Ionic 为 `order` 提供了以下实用类：

| Class              | Style Rule  | Description                           |
| ------------------ | ----------- | ------------------------------------- |
| `.ion-order-first` | `order: -1` | 项目在 flex 容器中首先出现。           |
| `.ion-order-0`     | `order: 0`  | 项目以其自然顺序出现。                 |
| `.ion-order-1`     | `order: 1`  | 项目出现在 order 为 0 的项目之后。     |
| `.ion-order-2`     | `order: 2`  | 项目出现在 order 为 1 的项目之后。     |
| `.ion-order-3`     | `order: 3`  | 项目出现在 order 为 2 的项目之后。     |
| `.ion-order-4`     | `order: 4`  | 项目出现在 order 为 3 的项目之后。     |
| `.ion-order-5`     | `order: 5`  | 项目出现在 order 为 4 的项目之后。     |
| `.ion-order-6`     | `order: 6`  | 项目出现在 order 为 5 的项目之后。     |
| `.ion-order-7`     | `order: 7`  | 项目出现在 order 为 6 的项目之后。     |
| `.ion-order-8`     | `order: 8`  | 项目出现在 order 为 7 的项目之后。     |
| `.ion-order-9`     | `order: 9`  | 项目出现在 order 为 8 的项目之后。     |
| `.ion-order-10`    | `order: 10` | 项目出现在 order 为 9 的项目之后。     |
| `.ion-order-11`    | `order: 11` | 项目出现在 order 为 10 的项目之后。    |
| `.ion-order-12`    | `order: 12` | 项目出现在 order 为 11 的项目之后。    |
| `.ion-order-last`  | `order: 13` | 项目在 flex 容器中最后出现。           |

### 响应式 Flex 项目类

上面列出的所有 flex 项目类都有额外的类，可以根据屏幕大小修改属性。使用 `{property}-{breakpoint}-{modifier}` 代替基本类名，以仅在特定屏幕尺寸上使用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-断点)中列出的断点名称之一。

下表显示了默认行为，其中 `{property}` 可以是以下任意一项：`align-self`、`flex`、`flex-grow`、`flex-shrink` 或 `order`，而 `{modifier}` 是如上所述的对应值。

| Class                           | Description                                                  |
| ------------------------------- | ------------------------------------------------------------ |
| `.ion-{property}-{modifier}`    | 在所有屏幕尺寸上对元素应用修饰符。                            |
| `.ion-{property}-sm-{modifier}` | 当 `min-width: 576px` 时对元素应用修饰符。                   |
| `.ion-{property}-md-{modifier}` | 当 `min-width: 768px` 时对元素应用修饰符。                   |
| `.ion-{property}-lg-{modifier}` | 当 `min-width: 992px` 时对元素应用修饰符。                   |
| `.ion-{property}-xl-{modifier}` | 当 `min-width: 1200px` 时对元素应用修饰符。                  |

## 边框显示

`.ion-no-border` 实用类可用于移除 Ionic 组件的边框。此类可应用于 `ion-header` 和 `ion-footer` 组件。

```html
<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-title>页眉 - 无边框</ion-title>
  </ion-toolbar>
</ion-header>

<ion-footer class="ion-no-border">
  <ion-toolbar>
    <ion-title>页脚 - 无边框</ion-title>
  </ion-toolbar>
</ion-footer>
```

| Class            | Description                |
| ---------------- | -------------------------- |
| `.ion-no-border` | 元素将没有边框。            |

## Ionic 断点

Ionic 在媒体查询中使用断点，以根据屏幕尺寸对应用进行不同的样式设置。上述实用类中使用了以下断点名称，当满足宽度条件时该类将生效。

| 断点名称 | 宽度     |
| --------- | -------- |
| `xs`      | `0`      |
| `sm`      | `576px`  |
| `md`      | `768px`  |
| `lg`      | `992px`  |
| `xl`      | `1200px` |
