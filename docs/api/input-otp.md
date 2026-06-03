---
title: "ion-input-otp"
---
import Props from '@ionic-internal/component-api/v8/input-otp/props.md';
import Events from '@ionic-internal/component-api/v8/input-otp/events.md';
import Methods from '@ionic-internal/component-api/v8/input-otp/methods.md';
import Parts from '@ionic-internal/component-api/v8/input-otp/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/input-otp/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/input-otp/slots.md';

<head>
  <title>ion-input-otp: 一次性密码输入组件</title>
  <meta name="description" content="ion-input-otp 是一个用于输入一次性密码（OTP）的组件，支持多个输入框和自动焦点管理。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Input OTP 组件是一个专门用于输入一次性密码（OTP）的输入组件。它提供了一个用户友好的验证码输入界面，支持多个输入框和自动焦点管理。

## 基本用法

该组件默认提供 4 个输入框，这是许多验证码的常见长度。可以使用 `length` 属性自定义输入框的数量。

import Basic from '@site/static/usage/v8/input-otp/basic/index.md';

<Basic />

## 类型

`type` 属性决定输入格式，支持数字或字母数字验证码。它接受两个值：`number` 和 `text`。默认使用 `type="number"` 输入数字验证码。当指定 `type="text"` 时，它接受字母数字输入。这种灵活性允许处理不同的 OTP 格式，无论是纯数字代码（如短信验证码）还是字母数字代码（如备份代码或恢复密钥）。

`type` 属性会自动设置 `inputmode` 和 `pattern` 属性：
- 当 `type="number"` 时：
  - 设置 `inputmode="numeric"` 以在移动设备上显示数字键盘
  - 设置 `pattern="[\p{N}]"` 以仅允许数字输入
- 当 `type="text"` 时：
  - 设置 `inputmode="text"` 以显示标准键盘
  - 设置 `pattern="[\p{L}\p{N}]"` 以允许字母数字输入

有关模式验证和自定义的更多详细信息，请参阅[模式](#模式)部分。

import Type from '@site/static/usage/v8/input-otp/type/index.md';

<Type />

## 形状

`shape` 属性控制输入框的边框半径，创建圆角或尖角。

import Shape from '@site/static/usage/v8/input-otp/shape/index.md';

<Shape />

## 填充

`fill` 属性控制输入框的背景样式，提供边框或填充背景。

import Fill from '@site/static/usage/v8/input-otp/fill/index.md';

<Fill />

## 尺寸

`size` 属性为输入框提供不同的尺寸选项。

import Size from '@site/static/usage/v8/input-otp/size/index.md';

<Size />

## 分隔符

`separators` 属性在一个或多个输入框之间添加视觉分隔线。分隔符可以通过三种方式定义：
- 以逗号分隔的数字字符串（例如，`"1,3"`）
- 数字数组（例如，`[1, 3]`）
- 字符串 `"all"` 以在每个输入框之间显示分隔符

数字表示分隔符应出现在哪个索引之后。例如，`"1,3"` 在第一个和第三个输入框之后显示分隔符。这可以用于创建视觉上不同的输入框分组，但它仍然只有一个值。

import Separators from '@site/static/usage/v8/input-otp/separators/index.md';

<Separators />

## 状态

组件支持输入框自动样式的各种状态：
- 通过相应属性支持的 `disabled` 和 `readonly` 状态
- 表单验证状态：通过 CSS 类在视觉上指示的 `valid` 和 `invalid`
- 在 Angular 中：验证状态通过框架的值访问器和表单验证自动管理
- 对于其他框架：开发人员必须手动添加 `ion-valid`、`ion-invalid` 和 `ion-touched` 类
- `ion-invalid` 样式仅在触摸后（`ion-touched`）显示
- `ion-valid` 样式仅在聚焦时（`has-focus`）显示

import States from '@site/static/usage/v8/input-otp/states/index.md';

<States />

## 模式

`pattern` 属性使用正则表达式启用自定义验证。它接受[字符串正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet)或[unicode 正则表达式](https://www.regular-expressions.info/unicode.html)来验证允许的字符。`pattern` 必须匹配整个值，而不仅仅是子集。默认模式：
- `type="number"`：`"[\p{N}]"` 用于匹配任何脚本中的任何数字字符。
- `type="text"`：`"[\p{L}\p{N}]"` 用于任何脚本中的任何数字字符和任何语言的任何字母。

组件将阻止用户输入任何与指定模式不匹配的字符。开发人员可以通过提供自己的模式字符串来覆盖这些默认值，以匹配特定的输入要求。

:::tip
使用自定义 `pattern` 时，请记住 `type` 属性控制在移动设备上显示哪种键盘：
- 对纯数字模式使用 `type="number"` 以显示数字键盘
- 对包含字母的模式使用 `type="text"` 以显示字母数字键盘
:::

import Pattern from '@site/static/usage/v8/input-otp/pattern/index.md';

<Pattern />

## 主题

### 颜色

`color` 属性更改输入框的调色板。对于 `outline` 填充，此属性更改光标颜色、高亮颜色和边框颜色。对于 `solid` 填充，此属性更改光标颜色和高亮颜色。

:::note
`color` 属性*不*会更改输入 OTP 的文本颜色。要更改文本颜色，请使用 [`--color` CSS 属性](#css-自定义属性-1)。
:::

import Colors from '@site/static/usage/v8/input-otp/theming/colors/index.md';

<Colors />

### CSS 自定义属性

Input OTP 使用作用域封装，这意味着它会通过运行时为每个样式附加一个额外的类来自动限定其 CSS 的作用域。在 CSS 中覆盖作用域选择器需要[更高的特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)选择器。针对 `ion-input-otp` 进行自定义不起作用；因此我们建议添加一个类并以此方式进行自定义。由于某些样式是根据 `fill` 应用的，您可能需要单独覆盖各个填充的属性。

import CSSProps from '@site/static/usage/v8/input-otp/theming/css-properties/index.md';

<CSSProps />

## 辅助功能

### 键盘交互

Input OTP 的键盘导航遵循 [ARIA 创作实践指南](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)关于复合小部件的建议。它被视为复合小部件，因为它包含多个可聚焦元素（输入框），这些元素作为一个控件运行。

当组件未禁用时，这些键盘交互适用于所有 `ion-input-otp` 元素。

| 键 | 描述 |
| --- | --- |
| <kbd>Tab</kbd> | 首次 Tab 进入组件时，焦点移动到第一个空框。如果所有框都已填满，焦点移动到最后一个框。进入组件后，Tab 移动到页面上的下一个可聚焦元素。 |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | 反向 Tab 进入组件时，焦点移动到第一个空框。如果所有框都已填满，焦点移动到最后一个框。进入组件后，Shift+Tab 将焦点移动到页面上的上一个可聚焦元素。 |
| <kbd>ArrowRight</kbd> | 将焦点移动到下一个输入框，停在第一个空框。在 RTL 模式下，将焦点移回到任何包含值的上一个框。 |
| <kbd>ArrowLeft</kbd> | 将焦点移回到任何包含值的上一个框。在 RTL 模式下，将焦点移动到下一个输入框，停在第一个空框。 |
| 与 `pattern` 属性匹配的任何字符 | 填充当前框并自动将焦点移动到下一个空框。如果所有框都已填满，焦点保持在最后一个框。如果当前框有值，用输入的字符覆盖该值。在 RTL 模式下，输入从右到左填充框。 |
| <kbd>Backspace</kbd> | 在空框中：将焦点移回一个框并清除其值。 <br/> 在有值的框中：清除该值。 <br/> 如果右侧框中有值：将所有值向左移动一个位置。在 RTL 模式下，如果左侧框中有值：将所有值向右移动一个位置。 |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> <br/> <kbd>Cmd</kbd> + <kbd>V</kbd> | 从第一个框开始粘贴内容，无论当前聚焦的是哪个框。粘贴前会清除所有现有值。例如，如果所有框中都有 "1234" 并粘贴 "56"，结果将是前两个框中为 "56"，其余框为空。如果粘贴的内容长于可用框的数量，多余字符将被忽略。 |

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
