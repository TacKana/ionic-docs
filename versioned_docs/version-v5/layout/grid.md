---
title: 基于屏幕尺寸的响应式网格系统和列布局
description: Ionic 的响应式网格是一个强大的移动优先 flexbox 系统，用于基于 12 列布局和基于屏幕尺寸的断点构建自定义布局。
sidebar_label: 响应式网格
---

# 响应式网格

网格是一个强大的移动优先 flexbox 系统，用于构建自定义布局。它由三个单元组成——[网格](../api/grid.md)、[行](../api/row.md)和[列](../api/col.md)。列将扩展以填充其行，并将调整大小以适应额外的列。它基于 12 列布局，根据屏幕尺寸有不同的断点。列的数量可以使用 CSS 自定义。

## 工作原理

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col>
      <div>2 of 3</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

- 网格作为所有行和列的容器。网格占据其容器的全部宽度，
  但添加 `fixed` 属性将指定每个屏幕尺寸的宽度，详见下面的[网格尺寸](#grid-size)。
- 行是列的水平分组，使列正确对齐。
- 内容应放置在列中，只有列可以是行的直接子元素。
- `size-{breakpoint}` 属性指示在默认每行 12 列中使用多少列。
  因此，可以向列添加 `size="4"` 以占据网格的 1/3，即 12 列中的 4 列。
- 没有 size 值的列将自动具有相等的宽度。例如，四个 `size-sm` 实例将各自在小型断点及以上自动占 25% 宽度。
- 列宽以百分比设置，因此它们始终是流动的，并相对于其父元素调整大小。
- 列之间有内边距，但可以通过向网格添加 `ion-no-padding` 类来移除网格和列的内边距。有关可应用于网格的更多样式，请参见 [CSS 工具](css-utilities.md)。
- 有五个网格层级，每个对应一个响应式断点：所有断点（超小）、小、中、大和超大。
- 网格层级基于最小宽度，意味着它们适用于其所在层级及所有更大层级
  （例如，`size-sm="4"` 适用于小型、中型、大型和超大型设备）。
- 可以通过 CSS 变量轻松自定义网格。参见[自定义网格](#customizing-the-grid)。

### 在线示例

您可以在 Angular [此处](https://stackblitz.com/edit/ionic-ng-basic-grid)和 React [此处](https://stackblitz.com/edit/ionic-react-basic-grid)查看在线示例。

## 网格尺寸

默认情况下，网格将占据 100% 宽度。要根据屏幕尺寸设置特定宽度，请添加 `fixed` 属性。每个断点的网格宽度在 `--ion-grid-width-{breakpoint}` CSS 变量中定义。有关更多信息，请参见[自定义网格](#customizing-the-grid)。

| 名称 | 值     | 描述                                       |
| ---- | ------ | ------------------------------------------ |
| xs   | 100%   | 不为 xs 屏幕设置网格宽度                   |
| sm   | 540px  | 当 (min-width: 576px) 时将网格宽度设置为 540px  |
| md   | 720px  | 当 (min-width: 768px) 时将网格宽度设置为 720px  |
| lg   | 960px  | 当 (min-width: 992px) 时将网格宽度设置为 960px  |
| xl   | 1140px | 当 (min-width: 1200px) 时将网格宽度设置为 1140px |

### 在线示例

您可以在 Angular [此处](https://stackblitz.com/edit/ionic-ng-fixed-width-grid)和 React [此处](https://stackblitz.com/edit/ionic-react-fixed-width-grid)查看在线示例。

## 网格属性

默认情况下，网格占据整个屏幕宽度。可以使用以下属性进行修改。

| 属性    | 描述                                       |
| ------- | ------------------------------------------ |
| fixed   | 根据当前屏幕尺寸设置最大宽度。             |

## 默认断点

默认断点在下表中定义。目前不能自定义断点。有关为什么不能自定义的更多信息，请参见[媒体查询中的变量](../theming/advanced.md#variables-in-media-queries)。

| 名称 | 值     | 宽度前缀      | 偏移前缀       | 推前缀        | 拉前缀        | 描述                              |
| ---- | ------ | ------------- | -------------- | ------------- | ------------- | --------------------------------- |
| xs   | 0      | `size-`       | `offset-`      | `push-`       | `pull-`       | 当 (min-width: 0) 时设置列        |
| sm   | 576px  | `size-sm-`    | `offset-sm-`   | `push-sm-`    | `pull-sm-`    | 当 (min-width: 576px) 时设置列    |
| md   | 768px  | `size-md-`    | `offset-md-`   | `push-md-`    | `pull-md-`    | 当 (min-width: 768px) 时设置列    |
| lg   | 992px  | `size-lg-`    | `offset-lg-`   | `push-lg-`    | `pull-lg-`    | 当 (min-width: 992px) 时设置列    |
| xl   | 1200px | `size-xl-`    | `offset-xl-`   | `push-xl-`    | `pull-xl-`    | 当 (min-width: 1200px) 时设置列   |

## 自动布局列

### 等宽

默认情况下，列在行内对所有设备和屏幕尺寸将占据相等宽度。

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div>1 of 2</div>
    </ion-col>
    <ion-col>
      <div>2 of 2</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col>
      <div>2 of 3</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

### 设置一列宽度

设置一列的宽度，其他列将自动在其周围调整大小。这可以使用我们预定义的网格属性来完成。在下面的示例中，无论中间列的宽度如何，其他列都会调整大小。

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col size="8">
      <div>2 of 3 (更宽)</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col size="6">
      <div>2 of 3 (更宽)</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### 在线示例

您可以在 Angular [此处](https://stackblitz.com/edit/ionic-ng-set-width-col)和 React [此处](https://stackblitz.com/edit/ionic-react-set-width-col)查看在线示例。

### 可变宽度

通过将 `size-{breakpoint}` 属性设置为 `"auto"`，列可以根据其内容的自然宽度自行调整大小。这对于使用像素设置列宽度非常有用。可变宽度列旁边的列将调整大小以填充行。

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col size="auto">
      <div>可变宽度内容</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col size="auto">
      <div>
        <ion-input placeholder="可变宽度输入"></ion-input>
      </div>
    </ion-col>
    <ion-col>
      <div>4 of 4</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### 在线示例

您可以在 Angular [此处](https://stackblitz.com/edit/ionic-ng-var-width-col)和 React [此处](https://stackblitz.com/edit/ionic-react-var-width-col)查看在线示例。

## 响应式属性

### 所有断点

要为所有设备和屏幕自定义列的宽度，请设置 `size` 属性。此属性的值确定此列应在总可用列数中占据多少列。

```html
<ion-grid>
  <ion-row>
    <ion-col size="4">
      <div>1 of 4</div>
    </ion-col>
    <ion-col size="2">
      <div>2 of 4</div>
    </ion-col>
    <ion-col size="2">
      <div>3 of 4</div>
    </ion-col>
    <ion-col size="4">
      <div>4 of 4</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

### 堆叠到水平

使用宽度和断点属性的组合来创建一个在超小屏幕上堆叠显示，然后在小屏幕上变为水平布局的网格。

```html
<ion-grid>
  <ion-row>
    <ion-col size="12" size-sm>
      <div>1 of 4</div>
    </ion-col>
    <ion-col size="12" size-sm>
      <div>2 of 4</div>
    </ion-col>
    <ion-col size="12" size-sm>
      <div>3 of 4</div>
    </ion-col>
    <ion-col size="12" size-sm>
      <div>4 of 4</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### 在线示例

您可以在 Angular [此处](https://stackblitz.com/edit/ionic-ng-stacked-horizontal-grid)和 React [此处](https://stackblitz.com/edit/ionic-react-stacked-horizontal-grid)查看在线示例。

## 重新排序

### 偏移列

通过添加 `offset` 属性将列向右移动。此属性按指定的列数增加列的左边距。例如，在下面的网格中，最后一列将偏移 3 列并占据 3 列：

```html
<ion-grid>
  <ion-row>
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3" offset="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

偏移也可以基于屏幕断点添加。以下是一个网格示例，其中最后一列在 `md` 屏幕及以上将偏移 3 列：

```html
<ion-grid>
  <ion-row>
    <ion-col size-md="3">
      <div>1 of 3</div>
    </ion-col>
    <ion-col size-md="3">
      <div>2 of 3</div>
    </ion-col>
    <ion-col size-md="3" offset-md="3">
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### 在线示例

您可以在 Angular [此处](https://stackblitz.com/edit/ionic-ng-offset-grid-cols)和 React [此处](https://stackblitz.com/edit/ionic-react-offset-grid-cols)查看在线示例。

### 推和拉

通过添加 `push` 和 `pull` 属性重新排序列。这些属性按指定的列数调整列的 `left` 和 `right`，使重新排序列变得容易。例如，在下面的网格中，描述为 `1 of 2` 的列实际上是最后一列，而 `2 of 2` 是第一列。

```html
<ion-grid>
  <ion-row>
    <ion-col size="9" push="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3" pull="9">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

推和拉也可以基于屏幕断点添加。在下面的示例中，列描述为 `3 of 3` 的列在 `md` 屏幕及以上实际上是第一列：

```html
<ion-grid>
  <ion-row>
    <ion-col size-md="6" push-md="3">
      <div>1 of 3</div>
    </ion-col>
    <ion-col size-md="3" push-md="3">
      <div>2 of 3</div>
    </ion-col>
    <ion-col size-md="3" pull-md="9">
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### 在线示例

您可以在 Angular [此处](https://stackblitz.com/edit/ionic-ng-grid-push-pull)和 React [此处](https://stackblitz.com/edit/ionic-react-grid-push-pull)查看在线示例。

## 对齐

### 垂直对齐

通过向行添加不同的类，可以垂直对齐行内的所有列。有关可用类的列表，请参见 [css 工具](css-utilities.md#flex-container-properties)。

```html
<ion-grid>
  <ion-row class="ion-align-items-start">
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col>
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col>
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col>
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

列也可以通过直接向列添加对齐类来与其他列不同地对齐自身。有关可用类的列表，请参见 [css 工具](css-utilities.md#flex-item-properties)。

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-align-self-start">
      <div>1 of 4</div>
    </ion-col>
    <ion-col class="ion-align-self-center">
      <div>2 of 4</div>
    </ion-col>
    <ion-col class="ion-align-self-end">
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### 在线示例

您可以在 Angular [此处](https://stackblitz.com/edit/ionic-ng-grid-vertical-align)和 React [此处](https://stackblitz.com/edit/ionic-react-grid-vertical-align)查看在线示例。

### 水平对齐

通过向行添加不同的类，可以水平对齐行内的所有列。有关可用类的列表，请参见 [css 工具](css-utilities.md#flex-container-properties)。

```html
<ion-grid>
  <ion-row class="ion-justify-content-start">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-center">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-end">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-around">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-between">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### 在线示例

您可以在 Angular [此处](https://stackblitz.com/edit/ionic-ng-grid-horizontal-align)和 React [此处](https://stackblitz.com/edit/ionic-react-grid-horizontal-align)查看在线示例。

## 自定义网格

使用我们内置的 CSS 变量，可以自定义预定义的网格属性。更改内边距的值、列数等。

### 列数

网格列数可以通过 `--ion-grid-columns` CSS 变量进行修改。默认有 12 个网格列，但可以更改为任何正整数，并用于计算每个单独列的宽度。

```css
--ion-grid-columns: 12;
```

### 网格内边距

网格容器的内边距可以使用 `--ion-grid-padding` CSS 变量为所有断点设置。要覆盖单个断点，请使用 `--ion-grid-padding-{breakpoint}` CSS 变量。

```css
--ion-grid-padding: 5px;

--ion-grid-padding-xs: 5px;
--ion-grid-padding-sm: 5px;
--ion-grid-padding-md: 5px;
--ion-grid-padding-lg: 5px;
--ion-grid-padding-xl: 5px;
```

### 网格宽度

要自定义基于屏幕尺寸的固定网格的宽度值，请覆盖每个断点的 `--ion-grid-width-{breakpoint}` 值。

```css
--ion-grid-width-xs: 100%;
--ion-grid-width-sm: 540px;
--ion-grid-width-md: 720px;
--ion-grid-width-lg: 960px;
--ion-grid-width-xl: 1140px;
```

### 列内边距

列的内边距可以使用 `--ion-grid-column-padding` CSS 变量为所有断点设置。要覆盖单个断点，请使用 `--ion-grid-column-padding-{breakpoint}` CSS 变量。

```css
--ion-grid-column-padding: 5px;

--ion-grid-column-padding-xs: 5px;
--ion-grid-column-padding-sm: 5px;
--ion-grid-column-padding-md: 5px;
--ion-grid-column-padding-lg: 5px;
--ion-grid-column-padding-xl: 5px;
```
