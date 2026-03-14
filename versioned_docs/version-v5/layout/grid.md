---
title: 基于屏幕尺寸的响应式网格系统和列布局
description: Ionic的响应式网格是一个强大的移动优先的flexbox系统，基于12列布局构建，具有根据不同屏幕尺寸的断点。
sidebar_label: 响应式网格
---

# 响应式网格

网格是一个强大的移动优先flexbox系统，用于构建自定义布局。它由三个单元组成：[网格](../api/grid.md)、[行](../api/row.md)和[列](../api/col.md)。列会自动扩展以填满所在行，并会调整大小以适应其他列。它基于12列布局，根据不同屏幕尺寸设置断点。列数可以通过CSS进行自定义。

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

- 网格作为所有行和列的容器。网格会占满其容器的整个宽度，但添加`fixed`属性可以根据屏幕尺寸指定宽度，具体见下面的[网格尺寸](#grid-size)。
- 行是列的水平分组，用于正确排列列。
- 内容应放置在列内，只有列可以是行的直接子元素。
- `size-{breakpoint}`属性表示每行默认12列中要使用的列数。例如，为列添加`size="4"`可以占据网格的1/3，即12列中的4列。
- 未设置size值的列会自动具有相等的宽度。例如，四个`size-sm`实例在小断点及以上屏幕会自动各占25%的宽度。
- 列宽度设置为百分比，因此它们始终是流体式的，并相对于其父元素调整大小。
- 列之间有内边距，但可以通过向网格添加`ion-no-padding`类来移除网格和列的内边距。有关可应用于网格的更多样式，请参阅[CSS实用工具](css-utilities.md)。
- 有五个网格层级，对应每个响应式断点：所有断点（特小）、小、中、大和特大。
- 网格层级基于最小宽度，意味着它们适用于其层级及更大的所有设备（例如，`size-sm="4"`适用于小、中、大和特大设备）。
- 网格可以通过CSS变量轻松自定义。请参阅[自定义网格](#customizing-the-grid)。

### 实时示例

你可以在Angular中查看此功能的实时示例[这里](https://stackblitz.com/edit/ionic-ng-basic-grid)，在React中查看[这里](https://stackblitz.com/edit/ionic-react-basic-grid)。

## 网格尺寸

默认情况下，网格会占据100%的宽度。要根据屏幕尺寸设置特定宽度，请添加`fixed`属性。每个断点的网格宽度在`--ion-grid-width-{breakpoint}` CSS变量中定义。更多信息请参阅[自定义网格](#customizing-the-grid)。

| 名称 | 值      | 描述                                       |
| ---- | ------ | ------------------------------------------------- |
| xs   | 100%   | 不为xs屏幕设置网格宽度           |
| sm   | 540px  | 当(min-width: 576px)时将网格宽度设置为540px   |
| md   | 720px  | 当(min-width: 768px)时将网格宽度设置为720px   |
| lg   | 960px  | 当(min-width: 992px)时将网格宽度设置为960px   |
| xl   | 1140px | 当(min-width: 1200px)时将网格宽度设置为1140px |

### 实时示例

你可以在Angular中查看此功能的实时示例[这里](https://stackblitz.com/edit/ionic-ng-fixed-width-grid)，在React中查看[这里](https://stackblitz.com/edit/ionic-react-fixed-width-grid)。

## 网格属性

默认情况下，网格会占据整个屏幕宽度。可以使用以下属性进行修改。

| 属性     | 描述                                       |
| -------- | ------------------------------------------------- |
| fixed    | 根据当前屏幕尺寸设置最大宽度。 |

## 默认断点

默认断点定义在下表中。目前无法自定义断点。有关为何无法自定义的更多信息，请参阅[媒体查询中的变量](../theming/advanced.md#variables-in-media-queries)。

| 名称 | 值      | 宽度前缀 | 偏移前缀 | 推前缀 | 拉前缀 | 描述                          |
| ---- | ------ | ------------ | ------------- | ----------- | ----------- | ------------------------------------ |
| xs   | 0      | `size-`      | `offset-`     | `push-`     | `pull-`     | 当(min-width: 0)时设置列      |
| sm   | 576px  | `size-sm-`   | `offset-sm-`  | `push-sm-`  | `pull-sm-`  | 当(min-width: 576px)时设置列  |
| md   | 768px  | `size-md-`   | `offset-md-`  | `push-md-`  | `pull-md-`  | 当(min-width: 768px)时设置列  |
| lg   | 992px  | `size-lg-`   | `offset-lg-`  | `push-lg-`  | `pull-lg-`  | 当(min-width: 992px)时设置列  |
| xl   | 1200px | `size-xl-`   | `offset-xl-`  | `push-xl-`  | `pull-xl-`  | 当(min-width: 1200px)时设置列 |

## 自动布局列

### 等宽

默认情况下，列在所有设备和屏幕尺寸的行内会占据相等的宽度。

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

### 设置单列宽度

设置一列的宽度，其他列会自动围绕它调整大小。这可以使用预定义的网格属性来实现。在下面的示例中，无论中间列的宽度如何，其他列都会调整大小。

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

#### 实时示例

你可以在Angular中查看此功能的实时示例[这里](https://stackblitz.com/edit/ionic-ng-set-width-col)，在React中查看[这里](https://stackblitz.com/edit/ionic-react-set-width-col)。

### 可变宽度

通过将`size-{breakpoint}`属性设置为`"auto"`，列可以根据其内容的自然宽度自行调整大小。这对于使用像素设置列宽度非常有用。可变宽度列旁边的列会调整大小以填满行。

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

#### 实时示例

你可以在Angular中查看此功能的实时示例[这里](https://stackblitz.com/edit/ionic-ng-var-width-col)，在React中查看[这里](https://stackblitz.com/edit/ionic-react-var-width-col)。

## 响应式属性

### 所有断点

要为所有设备和屏幕自定义列的宽度，请设置`size`属性。此属性的值决定了该列应占据总可用列数中的多少列。

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

### 从堆叠到水平

结合使用宽度和断点属性，创建一个在特小屏幕上堆叠，在小屏幕及以上变为水平的网格。

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

#### 实时示例

你可以在Angular中查看此功能的实时示例[这里](https://stackblitz.com/edit/ionic-ng-stacked-horizontal-grid)，在React中查看[这里](https://stackblitz.com/edit/ionic-react-stacked-horizontal-grid)。

## 重新排序

### 列偏移

通过添加`offset`属性将列向右移动。此属性通过指定的列数增加列的左边距。例如，在以下网格中，最后一列将偏移3列并占据3列：

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

偏移也可以基于屏幕断点添加。以下是网格的一个示例，其中最后一列在`md`屏幕及以上将偏移3列：

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

#### 实时示例

你可以在Angular中查看此功能的实时示例[这里](https://stackblitz.com/edit/ionic-ng-offset-grid-cols)，在React中查看[这里](https://stackblitz.com/edit/ionic-react-offset-grid-cols)。

### 推和拉

通过添加`push`和`pull`属性重新排序列。这些属性通过指定的列数调整列的`left`和`right`，从而轻松重新排序列。例如，在以下网格中，带有`1 of 2`描述的列实际上将是最后一列，而`2 of 2`将是第一列。

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

推和拉也可以基于屏幕断点添加。在以下示例中，带有`3 of 3`列描述的列在`md`屏幕及以上实际上将是第一列：

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

#### 实时示例

你可以在Angular中查看此功能的实时示例[这里](https://stackblitz.com/edit/ionic-ng-grid-push-pull)，在React中查看[这里](https://stackblitz.com/edit/ionic-react-grid-push-pull)。

## 对齐

### 垂直对齐

通过向行添加不同的类，所有列可以在行内垂直对齐。有关可用类的列表，请参阅[CSS实用工具](css-utilities.md#flex-container-properties)。

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

列也可以通过直接向列添加对齐类来与其他列进行不同的对齐。有关可用类的列表，请参阅[CSS实用工具](css-utilities.md#flex-item-properties)。

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

#### 实时示例

你可以在Angular中查看此功能的实时示例[这里](https://stackblitz.com/edit/ionic-ng-grid-vertical-align)，在React中查看[这里](https://stackblitz.com/edit/ionic-react-grid-vertical-align)。

### 水平对齐

通过向行添加不同的类，所有列可以在行内水平对齐。有关可用类的列表，请参阅[CSS实用工具](css-utilities.md#flex-container-properties)。

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

#### 实时示例

你可以在Angular中查看此功能的实时示例[这里](https://stackblitz.com/edit/ionic-ng-grid-horizontal-align)，在React中查看[这里](https://stackblitz.com/edit/ionic-react-grid-horizontal-align)。

## 自定义网格

使用我们内置的CSS变量，可以自定义预定义的网格属性。更改内边距的值、列数等。

### 列数

网格列数可以通过`--ion-grid-columns` CSS变量进行修改。默认有12个网格列，但这可以更改为任何正整数，并用于计算每个单独列的宽度。

```css
--ion-grid-columns: 12;
```

### 网格内边距

网格容器的内边距可以通过`--ion-grid-padding` CSS变量为所有断点设置。要覆盖单个断点，请使用`--ion-grid-padding-{breakpoint}` CSS变量。

```css
--ion-grid-padding: 5px;

--ion-grid-padding-xs: 5px;
--ion-grid-padding-sm: 5px;
--ion-grid-padding-md: 5px;
--ion-grid-padding-lg: 5px;
--ion-grid-padding-xl: 5px;
```

### 网格宽度

要根据屏幕尺寸自定义固定网格的宽度值，请覆盖每个断点的`--ion-grid-width-{breakpoint}`值。

```css
--ion-grid-width-xs: 100%;
--ion-grid-width-sm: 540px;
--ion-grid-width-md: 720px;
--ion-grid-width-lg: 960px;
--ion-grid-width-xl: 1140px;
```

### 列内边距

列的内边距可以通过`--ion-grid-column-padding` CSS变量为所有断点设置。要覆盖单个断点，请使用`--ion-grid-column-padding-{breakpoint}` CSS变量。

```css
--ion-grid-column-padding: 5px;

--ion-grid-column-padding-xs: 5px;
--ion-grid-column-padding-sm: 5px;
--ion-grid-column-padding-md: 5px;
--ion-grid-column-padding-lg: 5px;
--ion-grid-column-padding-xl: 5px;
```