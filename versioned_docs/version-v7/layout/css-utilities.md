---
title: CSS 工具类
initialTab: 'preview'
inlineHtmlPreviews: true
---

<head>
  <title>CSS 工具类：用于文本/元素对齐或修改的类</title>
  <meta
    name="description"
    content="Ionic CSS 工具类可用于任何元素，以修改文本/对齐方式、元素放置位置，或调整内边距和外边距。阅读以了解更多信息。"
  />
</head>

Ionic 框架提供了一套 CSS 工具类，可用于任何元素，以修改文本、元素放置位置或调整内边距和外边距。

:::important
如果你的应用不是使用可用的 Ionic 框架启动器启动的，则需要引入[全局样式表](global-stylesheets.md#optional)的可选部分中列出的样式表，这些样式才能生效。
:::

<LegacyAnchor id="element-placement" />

## 文本修改

<LegacyAnchor id="text-alignment" />

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

| 类名                 | 样式规则                | 描述                                                                                                                         |
| -------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `.ion-text-left`     | `text-align: left`      | 行内内容与行框的左侧边缘对齐。                                                                                               |
| `.ion-text-right`    | `text-align: right`     | 行内内容与行框的右侧边缘对齐。                                                                                               |
| `.ion-text-start`    | `text-align: start`     | 如果方向是左到右，则与 `text-left` 相同；如果方向是右到左，则与 `text-right` 相同。                                             |
| `.ion-text-end`      | `text-align: end`       | 如果方向是左到右，则与 `text-right` 相同；如果方向是右到左，则与 `text-left` 相同。                                             |
| `.ion-text-center`   | `text-align: center`    | 行内内容在行框中居中对齐。                                                                                                   |
| `.ion-text-justify`  | `text-align: justify`   | 行内内容两端对齐。文本应均匀分布，使其左右边缘与行框的左右边缘对齐，最后一行除外。                                           |
| `.ion-text-wrap`     | `white-space: normal`   | 合并空白序列。源代码中的换行符与其他空白符处理方式相同。根据需要换行以填充行框。                                             |
| `.ion-text-nowrap`   | `white-space: nowrap`   | 与 `normal` 一样合并空白，但禁止文本内的换行（文本换行）。                                                                   |

<LegacyAnchor id="text-transformation" />

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

| 类名                    | 样式规则                     | 描述                                         |
| ----------------------- | ---------------------------- | -------------------------------------------- |
| `.ion-text-uppercase`   | `text-transform: uppercase`  | 强制将所有字符转换为大写。                   |
| `.ion-text-lowercase`   | `text-transform: lowercase`  | 强制将所有字符转换为小写。                   |
| `.ion-text-capitalize`  | `text-transform: capitalize` | 强制将每个单词的首字母转换为大写。           |

### 响应式文本类

上面列出的所有文本类都有额外的类，可以根据屏幕尺寸修改文本。在每个类中使用 `text-{breakpoint}-` 代替 `text-`，以仅在特定屏幕尺寸上使用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-断点) 中列出的断点名称之一。

下表显示了默认行为，其中 `{modifier}` 是以下任意一项：`left`、`right`、`start`、`end`、`center`、`justify`、`wrap`、`nowrap`、`uppercase`、`lowercase` 或 `capitalize`，如上所述。

| 类名                         | 描述                                                 |
| ---------------------------- | ---------------------------------------------------- |
| `.ion-text-{modifier}`       | 在所有屏幕尺寸上将修改器应用于元素。                 |
| `.ion-text-sm-{modifier}`    | 在 `min-width: 576px` 时将修改器应用于元素。         |
| `.ion-text-md-{modifier}`    | 在 `min-width: 768px` 时将修改器应用于元素。         |
| `.ion-text-lg-{modifier}`    | 在 `min-width: 992px` 时将修改器应用于元素。         |
| `.ion-text-xl-{modifier}`    | 在 `min-width: 1200px` 时将修改器应用于元素。        |

## 元素放置

### 浮动元素

[float](https://developer.mozilla.org/en-US/docs/Web/CSS/float) CSS 属性指定一个元素应沿其容器的左侧或右侧放置，文本和内联元素将环绕它。这样，该元素从网页的正常流中取出，但仍然保持为流的一部分，这与绝对定位相反。

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <h3>无浮动</h3>
      <img
        alt="人物头部轮廓"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col>
      <h3>向左浮动</h3>
      <img
        alt="人物头部轮廓"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
        class="ion-float-left"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col>
      <h3>向右浮动</h3>
      <img
        alt="人物头部轮廓"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
        class="ion-float-right"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
  </ion-row>
</ion-grid>
```

| 类名                | 样式规则                         | 描述                                                                                                 |
| ------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `.ion-float-left`   | `float: left`                    | 元素将浮动在其包含块的左侧。                                                                         |
| `.ion-float-right`  | `float: right`                   | 元素将浮动在其包含块的右侧。                                                                         |
| `.ion-float-start`  | `float: left` / `float: right`   | 如果方向是左到右，则与 `float-left` 相同；如果方向是右到左，则与 `float-right` 相同。                 |
| `.ion-float-end`    | `float: left` / `float: right`   | 如果方向是左到右，则与 `float-right` 相同；如果方向是右到左，则与 `float-left` 相同。                 |

### 响应式浮动类

上面列出的所有浮动类都有额外的类，可以根据屏幕尺寸修改浮动。在每个类中使用 `float-{breakpoint}-` 代替 `float-`，以仅在特定屏幕尺寸上使用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-断点) 中列出的断点名称之一。

下表显示了默认行为，其中 `{modifier}` 是以下任意一项：`left`、`right`、`start` 或 `end`，如上所述。

| 类名                        | 描述                                                 |
| --------------------------- | ---------------------------------------------------- |
| `.ion-float-{modifier}`     | 在所有屏幕尺寸上将修改器应用于元素。                 |
| `.ion-float-sm-{modifier}`  | 在 `min-width: 576px` 时将修改器应用于元素。         |
| `.ion-float-md-{modifier}`  | 在 `min-width: 768px` 时将修改器应用于元素。         |
| `.ion-float-lg-{modifier}`  | 在 `min-width: 992px` 时将修改器应用于元素。         |
| `.ion-float-xl-{modifier}`  | 在 `min-width: 1200px` 时将修改器应用于元素。        |

<LegacyAnchor id="element-display" />

## 元素显示

[display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) CSS 属性设置元素是被视为块级还是内联盒子，以及用于其子元素的布局，例如流式布局、网格或弹性盒。它还可用于完全隐藏元素。

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-hide">
      <div>
        <h3>隐藏</h3>
        你看不到我。
      </div>
    </ion-col>
    <ion-col>
      <div>
        <h3>不隐藏</h3>
        你能看到我！
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| 类名        | 样式规则       | 描述               |
| ----------- | -------------- | ------------------ |
| `.ion-hide` | `display: none` | 元素将被隐藏。     |

### 响应式显示类

还有额外的类可以根据屏幕尺寸修改可见性。不要在所有屏幕尺寸上仅使用 `.ion-hide`，而应使用 `.ion-hide-{breakpoint}-{dir}` 仅在特定屏幕尺寸上使用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-断点) 中列出的断点名称之一，`{dir}` 是指元素应在指定断点以上 (`up`) 还是以下 (`down`) 的所有屏幕尺寸上隐藏。

| 类名                    | 描述                                                                                               |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| `.ion-hide-sm-{dir}`    | 在 `min-width: 576px` (`up`) 或 `max-width: 576px` (`down`) 时将修改器应用于元素。                   |
| `.ion-hide-md-{dir}`    | 在 `min-width: 768px` (`up`) 或 `max-width: 768px` (`down`) 时将修改器应用于元素。                   |
| `.ion-hide-lg-{dir}`    | 在 `min-width: 992px` (`up`) 或 `max-width: 992px` (`down`) 时将修改器应用于元素。                   |
| `.ion-hide-xl-{dir}`    | 在 `min-width: 1200px` (`up`) 或 `max-width: 1200px` (`down`) 时将修改器应用于元素。                 |

<LegacyAnchor id="content-space" />

## 内容间距

<LegacyAnchor id="element-padding" />

### 内边距

内边距类设置元素的内边距区域。内边距区域是元素内容与其边框之间的空间。

应用的默认 `padding` 量为 `16px`，由 `--ion-padding` 变量设置。有关如何更改这些值的更多信息，请参阅 [CSS 变量](../theming/css-variables.md) 部分。

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
      <div>开始内边距</div>
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

| 类名                       | 样式规则              | 描述                         |
| -------------------------- | --------------------- | ---------------------------- |
| `.ion-padding`             | `padding: 16px`       | 为所有边应用内边距。         |
| `.ion-padding-top`         | `padding-top: 16px`   | 为顶部应用内边距。           |
| `.ion-padding-start`       | `padding-start: 16px` | 为开始位置应用内边距。       |
| `.ion-padding-end`         | `padding-end: 16px`   | 为结束位置应用内边距。       |
| `.ion-padding-bottom`      | `padding-bottom: 16px`| 为底部应用内边距。           |
| `.ion-padding-vertical`    | `padding: 16px 0`     | 为顶部和底部应用内边距。     |
| `.ion-padding-horizontal`  | `padding: 0 16px`     | 为左侧和右侧应用内边距。     |
| `.ion-no-padding`          | `padding: 0`          | 所有边不应用内边距。         |

<LegacyAnchor id="element-margin" />

### 外边距

外边距区域用空白区域扩展边框区域，用于将元素与其相邻元素分开。

应用的默认 `margin` 量为 `16px`，由 `--ion-margin` 变量设置。有关如何更改这些值的更多信息，请参阅 [CSS 变量](../theming/css-variables.md) 部分。

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
      <div>开始外边距</div>
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

| 类名                      | 样式规则             | 描述                         |
| ------------------------- | -------------------- | ---------------------------- |
| `.ion-margin`             | `margin: 16px`       | 为所有边应用外边距。         |
| `.ion-margin-top`         | `margin-top: 16px`   | 为顶部应用外边距。           |
| `.ion-margin-start`       | `margin-start: 16px` | 为左侧应用外边距。           |
| `.ion-margin-end`         | `margin-end: 16px`   | 为右侧应用外边距。           |
| `.ion-margin-bottom`      | `margin-bottom: 16px`| 为底部应用外边距。           |
| `.ion-margin-vertical`    | `margin: 16px 0`     | 为顶部和底部应用外边距。     |
| `.ion-margin-horizontal`  | `margin: 0 16px`     | 为左侧和右侧应用外边距。     |
| `.ion-no-margin`          | `margin: 0`          | 所有边不应用外边距。         |

## Flex 属性

<img src={require('@site/static/img/layout/diagram-flex-attributes.png').default} />

<LegacyAnchor id="flex-container-properties" />

### Flex 容器属性

```html
<ion-grid>
  <ion-row class="ion-justify-content-start">
    <ion-col size="3">
      <div>1 / 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 / 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-center">
    <ion-col size="3">
      <div>1 / 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 / 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-end">
    <ion-col size="3">
      <div>1 / 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 / 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-around">
    <ion-col size="3">
      <div>1 / 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 / 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-between">
    <ion-col size="3">
      <div>1 / 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 / 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-evenly">
    <ion-col size="3">
      <div>1 / 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 / 2</div>
    </ion-col>
  </ion-row>
</ion-grid>

<ion-grid>
  <ion-row class="ion-align-items-start">
    <ion-col>
      <div>1 / 4</div>
    </ion-col>
    <ion-col>
      <div>2 / 4</div>
    </ion-col>
    <ion-col>
      <div>3 / 4</div>
    </ion-col>
    <ion-col>
      <div>4 / 4 # # #</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col>
      <div>1 / 4</div>
    </ion-col>
    <ion-col>
      <div>2 / 4</div>
    </ion-col>
    <ion-col>
      <div>3 / 4</div>
    </ion-col>
    <ion-col>
      <div>4 / 4 # # #</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col>
      <div>1 / 4</div>
    </ion-col>
    <ion-col>
      <div>2 / 4</div>
    </ion-col>
    <ion-col>
      <div>3 / 4</div>
    </ion-col>
    <ion-col>
      <div>4 / 4 # # #</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-baseline">
    <ion-col>
      <div>1 / 4</div>
    </ion-col>
    <ion-col>
      <div>2 / 4</div>
    </ion-col>
    <ion-col>
      <div>3 / 4</div>
    </ion-col>
    <ion-col>
      <div>4 / 4 # # #</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-stretch">
    <ion-col>
      <div>1 / 4</div>
    </ion-col>
    <ion-col>
      <div>2 / 4</div>
    </ion-col>
    <ion-col>
      <div>3 / 4</div>
    </ion-col>
    <ion-col>
      <div>4 / 4 # # #</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| 类名                            | 样式规则                          | 描述                                               |
| ------------------------------- | --------------------------------- | -------------------------------------------------- |
| `.ion-justify-content-start`    | `justify-content: flex-start`     | 项目在主轴上向起始位置靠拢。                       |
| `.ion-justify-content-end`      | `justify-content: flex-end`       | 项目在主轴上向结束位置靠拢。                       |
| `.ion-justify-content-center`   | `justify-content: center`         | 项目沿主轴居中对齐。                               |
| `.ion-justify-content-around`   | `justify-content: space-around`   | 项目在主轴上的周围空间相等，均匀分布。             |
| `.ion-justify-content-between`  | `justify-content: space-between`  | 项目在主轴上的两端对齐，项目之间的间隔相等。       |
| `.ion-justify-content-evenly`   | `justify-content: space-evenly`   | 项目均匀分布，任意两个项目之间的间距相等。         |
| `.ion-align-items-start`        | `align-items: flex-start`         | 项目在交叉轴上向起始位置靠拢。                     |
| `.ion-align-items-end`          | `align-items: flex-end`           | 项目在交叉轴上向结束位置靠拢。                     |
| `.ion-align-items-center`       | `align-items: center`             | 项目沿交叉轴居中对齐。                             |
| `.ion-align-items-baseline`     | `align-items: baseline`           | 项目对齐方式使得它们的基线对齐。                   |
| `.ion-align-items-stretch`      | `align-items: stretch`            | 项目被拉伸以填充容器。                             |
| `.ion-nowrap`                   | `flex-wrap: nowrap`               | 所有项目将在一行上显示。                           |
| `.ion-wrap`                     | `flex-wrap: wrap`                 | 项目将换行到多行，从上到下排列。                   |
| `.ion-wrap-reverse`             | `flex-wrap: wrap-reverse`         | 项目将换行到多行，从下到上排列。                   |

<LegacyAnchor id="flex-properties" />

<LegacyAnchor id="flex-item-properties" />

### Flex 项目属性

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-align-self-start">
      <div>1 / 4</div>
    </ion-col>
    <ion-col class="ion-align-self-center">
      <div>2 / 4</div>
    </ion-col>
    <ion-col class="ion-align-self-end">
      <div>3 / 4</div>
    </ion-col>
    <ion-col>
      <div>4 / 4 # # #</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| 类名                        | 样式规则                 | 描述                                         |
| --------------------------- | ------------------------ | -------------------------------------------- |
| `.ion-align-self-start`     | `align-self: flex-start` | 项目在交叉轴上向起始位置靠拢。               |
| `.ion-align-self-end`       | `align-self: flex-end`   | 项目在交叉轴上向结束位置靠拢。               |
| `.ion-align-self-center`    | `align-self: center`     | 项目沿交叉轴居中对齐。                       |
| `.ion-align-self-baseline`  | `align-self: baseline`   | 项目对齐方式使得其基线与其它项目的基线对齐。 |
| `.ion-align-self-stretch`   | `align-self: stretch`    | 项目被拉伸以填充容器。                       |
| `.ion-align-self-auto`      | `align-self: auto`       | 项目根据父元素的 `align-items` 值定位。      |

## 边框显示

可以使用 `.ion-no-border` 工具类移除 Ionic 组件的边框。此类可应用于 `ion-header` 和 `ion-footer` 组件。

```html
<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-title>头部 - 无边框</ion-title>
  </ion-toolbar>
</ion-header>

<ion-footer class="ion-no-border">
  <ion-toolbar>
    <ion-title>底部 - 无边框</ion-title>
  </ion-toolbar>
</ion-footer>
```

| 类名              | 描述                 |
| ----------------- | -------------------- |
| `.ion-no-border`  | 元素将没有边框。     |

## Ionic 断点

Ionic 在媒体查询中使用断点，以便根据屏幕尺寸对应用程序进行不同的样式设置。上面的工具类中使用了以下断点名称，当满足宽度条件时，该类将生效。

| 断点名称 | 宽度     |
| -------- | -------- |
| `xs`     | `0`      |
| `sm`     | `576px`  |
| `md`     | `768px`  |
| `lg`     | `992px`  |
| `xl`     | `1200px` |
