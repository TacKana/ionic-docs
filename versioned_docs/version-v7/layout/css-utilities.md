---
title: CSS 工具类
initialTab: 'preview'
inlineHtmlPreviews: true
---

<head>
  <title>CSS 工具类：用于文本/元素对齐或修改的类</title>
  <meta
    name="description"
    content="Ionic CSS 工具类可用于任何元素，以修改文本、元素位置或调整内边距和外边距。阅读了解更多。"
  />
</head>

Ionic Framework 提供了一组 CSS 工具类，可用于任何元素，以修改文本、元素位置或调整内边距和外边距。

:::important
如果您的应用不是使用可用的 Ionic Framework 启动器创建的，则需要包含[全局样式表可选部分](global-stylesheets.md#可选的)中列出的样式表，这些样式才能生效。
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

| 类                     | 样式规则                    | 描述                                                                   |
| ---------------------- | --------------------------- | ---------------------------------------------------------------------- |
| `.ion-text-left`       | `text-align: left`          | 行内内容与行框的左边缘对齐。                                           |
| `.ion-text-right`      | `text-align: right`         | 行内内容与行框的右边缘对齐。                                           |
| `.ion-text-start`      | `text-align: start`         | 如果方向为从左到右，则等同于 `text-left`；如果方向为从右到左，则等同于 `text-right`。 |
| `.ion-text-end`        | `text-align: end`           | 如果方向为从左到右，则等同于 `text-right`；如果方向为从右到左，则等同于 `text-left`。 |
| `.ion-text-center`     | `text-align: center`        | 行内内容在行框内居中。                                                 |
| `.ion-text-justify`    | `text-align: justify`       | 行内内容两端对齐。文本应均匀分布，使左右边缘与行框的左右边缘对齐，最后一行除外。 |
| `.ion-text-wrap`       | `white-space: normal`       | 空白序列被折叠。源代码中的换行符与其他空白符一样处理。根据需要换行以填充行框。     |
| `.ion-text-nowrap`     | `white-space: nowrap`       | 空白符折叠方式与 `normal` 相同，但禁止文本内换行。                     |

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

| 类                     | 样式规则                       | 描述                                     |
| ---------------------- | ------------------------------ | ---------------------------------------- |
| `.ion-text-uppercase`  | `text-transform: uppercase`    | 强制所有字符转换为大写。                 |
| `.ion-text-lowercase`  | `text-transform: lowercase`    | 强制所有字符转换为小写。                 |
| `.ion-text-capitalize` | `text-transform: capitalize`   | 强制每个单词的首字母转换为大写。         |

### 响应式文本类

上面列出的所有文本类都有额外的类，可根据屏幕大小修改文本。将每个类中的 `text-` 替换为 `text-{breakpoint}-`，以仅在特定屏幕尺寸上使用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-断点)中列出的断点名称之一。

下表显示了默认行为，其中 `{modifier}` 是以下任一值：`left`、`right`、`start`、`end`、`center`、`justify`、`wrap`、`nowrap`、`uppercase`、`lowercase` 或 `capitalize`，如上所述。

| 类                            | 描述                                             |
| ----------------------------- | ------------------------------------------------ |
| `.ion-text-{modifier}`        | 在所有屏幕尺寸上对元素应用修饰符。               |
| `.ion-text-sm-{modifier}`     | 当 `min-width: 576px` 时对元素应用修饰符。       |
| `.ion-text-md-{modifier}`     | 当 `min-width: 768px` 时对元素应用修饰符。       |
| `.ion-text-lg-{modifier}`     | 当 `min-width: 992px` 时对元素应用修饰符。       |
| `.ion-text-xl-{modifier}`     | 当 `min-width: 1200px` 时对元素应用修饰符。      |

## 元素放置

### 浮动元素

[float](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float) CSS 属性指定元素应沿其容器的左侧或右侧放置，文本和内联元素将环绕它。这样，元素脱离了网页的正常流，但与绝对定位不同，它仍然保留在流中。

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <h3>不浮动</h3>
      <img
        alt="人物头像剪影"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col>
      <h3>左浮动</h3>
      <img
        alt="人物头像剪影"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
        class="ion-float-left"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
    <ion-col>
      <h3>右浮动</h3>
      <img
        alt="人物头像剪影"
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
        height="50px"
        class="ion-float-right"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
    </ion-col>
  </ion-row>
</ion-grid>
```

| 类                | 样式规则                          | 描述                                                                               |
| ----------------- | --------------------------------- | ---------------------------------------------------------------------------------- |
| `.ion-float-left`  | `float: left`                     | 元素将浮动在其包含块的左侧。                                                       |
| `.ion-float-right` | `float: right`                    | 元素将浮动在其包含块的右侧。                                                       |
| `.ion-float-start` | `float: left` / `float: right`    | 如果方向为从左到右，则等同于 `float-left`；如果方向为从右到左，则等同于 `float-right`。 |
| `.ion-float-end`   | `float: left` / `float: right`    | 如果方向为从左到右，则等同于 `float-right`；如果方向为从右到左，则等同于 `float-left`。 |

### 响应式浮动类

上面列出的所有浮动类都有额外的类，可根据屏幕大小修改浮动行为。将每个类中的 `float-` 替换为 `float-{breakpoint}-`，以仅在特定屏幕尺寸上使用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-断点)中列出的断点名称之一。

下表显示了默认行为，其中 `{modifier}` 是以下任一值：`left`、`right`、`start` 或 `end`，如上所述。

| 类                         | 描述                                             |
| -------------------------- | ------------------------------------------------ |
| `.ion-float-{modifier}`    | 在所有屏幕尺寸上对元素应用修饰符。               |
| `.ion-float-sm-{modifier}` | 当 `min-width: 576px` 时对元素应用修饰符。       |
| `.ion-float-md-{modifier}` | 当 `min-width: 768px` 时对元素应用修饰符。       |
| `.ion-float-lg-{modifier}` | 当 `min-width: 992px` 时对元素应用修饰符。       |
| `.ion-float-xl-{modifier}` | 当 `min-width: 1200px` 时对元素应用修饰符。      |

## 元素显示

[display](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) CSS 属性设置元素是被视为块级还是内联框，以及用于其子元素的布局，如流式布局、网格或 flex。它还可以用于从布局中完全隐藏元素。

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
        <h3>未隐藏</h3>
        你能看到我！
      </div>
    </ion-col>
  </ion-row>
</ion-grid>
```

| 类          | 样式规则         | 描述               |
| ----------- | ---------------- | ------------------ |
| `.ion-hide` | `display: none`  | 元素将被隐藏。     |

### 响应式显示类

还有一些额外的类可根据屏幕大小修改可见性。对于所有屏幕尺寸，不仅仅是使用 `.ion-hide`，还可以使用 `.ion-hide-{breakpoint}-{dir}` 来仅在特定屏幕尺寸上使用该类，其中 `{breakpoint}` 是 [Ionic 断点](#ionic-断点)中列出的断点名称之一，`{dir}` 表示元素应在指定断点以上的所有屏幕尺寸（`up`）还是以下的所有屏幕尺寸（`down`）隐藏。

| 类                   | 描述                                                                                |
| -------------------- | ----------------------------------------------------------------------------------- |
| `.ion-hide-sm-{dir}` | 当 `min-width: 576px`（`up`）或 `max-width: 576px`（`down`）时对元素应用修饰符。    |
| `.ion-hide-md-{dir}` | 当 `min-width: 768px`（`up`）或 `max-width: 768px`（`down`）时对元素应用修饰符。    |
| `.ion-hide-lg-{dir}` | 当 `min-width: 992px`（`up`）或 `max-width: 992px`（`down`）时对元素应用修饰符。    |
| `.ion-hide-xl-{dir}` | 当 `min-width: 1200px`（`up`）或 `max-width: 1200px`（`down`）时对元素应用修饰符。  |

## 内容间距

### 内边距

内边距类用于设置元素的内边距区域。内边距区域是元素内容与其边框之间的空间。

默认应用的内边距量为 `16px`，由 `--ion-padding` 变量设置。有关如何更改这些值的更多信息，请参阅 [CSS 变量](../theming/css-variables.md)部分。

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

| 类                        | 样式规则                    | 描述                           |
| ------------------------- | --------------------------- | ------------------------------ |
| `.ion-padding`            | `padding: 16px`             | 在所有边上应用内边距。         |
| `.ion-padding-top`        | `padding-top: 16px`         | 在顶部应用内边距。             |
| `.ion-padding-start`      | `padding-start: 16px`       | 在起始边应用内边距。           |
| `.ion-padding-end`        | `padding-end: 16px`         | 在结束边应用内边距。           |
| `.ion-padding-bottom`     | `padding-bottom: 16px`      | 在底部应用内边距。             |
| `.ion-padding-vertical`   | `padding: 16px 0`           | 在顶部和底部应用内边距。       |
| `.ion-padding-horizontal` | `padding: 0 16px`           | 在左侧和右侧应用内边距。       |
| `.ion-no-padding`         | `padding: 0`                | 在所有边上不应用内边距。       |

### 外边距

外边距区域用空白区域扩展边框区域，用于将元素与其相邻元素分隔开。

默认应用的外边距量为 `16px`，由 `--ion-margin` 变量设置。有关如何更改这些值的更多信息，请参阅 [CSS 变量](../theming/css-variables.md)部分。

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

| 类                      | 样式规则                   | 描述                           |
| ----------------------- | -------------------------- | ------------------------------ |
| `.ion-margin`            | `margin: 16px`             | 在所有边上应用外边距。         |
| `.ion-margin-top`        | `margin-top: 16px`         | 在顶部应用外边距。             |
| `.ion-margin-start`      | `margin-start: 16px`       | 在左侧应用外边距。             |
| `.ion-margin-end`        | `margin-end: 16px`         | 在右侧应用外边距。             |
| `.ion-margin-bottom`     | `margin-bottom: 16px`      | 在底部应用外边距。             |
| `.ion-margin-vertical`   | `margin: 16px 0`           | 在顶部和底部应用外边距。       |
| `.ion-margin-horizontal` | `margin: 0 16px`           | 在左侧和右侧应用外边距。       |
| `.ion-no-margin`         | `margin: 0`                | 在所有边上不应用外边距。       |

## Flex 属性

<img src={require('@site/static/img/layout/diagram-flex-attributes.png').default} />

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

| 类                              | 样式规则                           | 描述                                                 |
| ------------------------------- | ---------------------------------- | ---------------------------------------------------- |
| `.ion-justify-content-start`    | `justify-content: flex-start`      | 项目在主轴方向靠起始端排列。                         |
| `.ion-justify-content-end`      | `justify-content: flex-end`        | 项目在主轴方向靠末端排列。                           |
| `.ion-justify-content-center`   | `justify-content: center`          | 项目在主轴方向居中排列。                             |
| `.ion-justify-content-around`   | `justify-content: space-around`    | 项目在主轴方向均匀分布，周围间距相等。               |
| `.ion-justify-content-between`  | `justify-content: space-between`   | 项目在主轴方向均匀分布。                             |
| `.ion-justify-content-evenly`   | `justify-content: space-evenly`    | 项目均匀分布，任意两个项目之间的间距相等。           |
| `.ion-align-items-start`        | `align-items: flex-start`          | 项目在交叉轴方向靠起始端排列。                       |
| `.ion-align-items-end`          | `align-items: flex-end`            | 项目在交叉轴方向靠末端排列。                         |
| `.ion-align-items-center`       | `align-items: center`              | 项目在交叉轴方向居中排列。                           |
| `.ion-align-items-baseline`     | `align-items: baseline`            | 项目对齐方式使其基线对齐。                           |
| `.ion-align-items-stretch`      | `align-items: stretch`             | 项目拉伸以填充容器。                                 |
| `.ion-nowrap`                   | `flex-wrap: nowrap`                | 项目将全部在一行上。                                 |
| `.ion-wrap`                     | `flex-wrap: wrap`                  | 项目将换行到多行，从上到下排列。                     |
| `.ion-wrap-reverse`             | `flex-wrap: wrap-reverse`          | 项目将换行到多行，从下到上排列。                     |

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

| 类                        | 样式规则                 | 描述                                                   |
| ------------------------- | ------------------------ | ------------------------------------------------------ |
| `.ion-align-self-start`    | `align-self: flex-start` | 项目在交叉轴方向靠起始端排列。                         |
| `.ion-align-self-end`      | `align-self: flex-end`   | 项目在交叉轴方向靠末端排列。                           |
| `.ion-align-self-center`   | `align-self: center`     | 项目在交叉轴方向居中排列。                             |
| `.ion-align-self-baseline` | `align-self: baseline`   | 项目对齐方式使其基线与其他项目的基线对齐。             |
| `.ion-align-self-stretch`  | `align-self: stretch`    | 项目拉伸以填充容器。                                   |
| `.ion-align-self-auto`     | `align-self: auto`       | 项目根据父元素的 `align-items` 值进行定位。            |

## 边框显示

`.ion-no-border` 工具类可用于移除 Ionic 组件的边框。此类可应用于 `ion-header` 和 `ion-footer` 组件。

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

| 类               | 描述               |
| ---------------- | ------------------ |
| `.ion-no-border` | 元素将没有边框。   |

## Ionic 断点

Ionic 使用媒体查询中的断点根据屏幕大小以不同的方式样式化应用。以下断点名称用于上述工具类，当满足宽度条件时将应用该类。

| 断点名称 | 宽度      |
| -------- | --------- |
| `xs`     | `0`       |
| `sm`     | `576px`   |
| `md`     | `768px`   |
| `lg`     | `992px`   |
| `xl`     | `1200px`  |
