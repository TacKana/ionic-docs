---
title: 一次性密码输入组件
---
import Props from '@ionic-internal/component-api/v8/input-otp/props.md';
import Events from '@ionic-internal/component-api/v8/input-otp/events.md';
import Methods from '@ionic-internal/component-api/v8/input-otp/methods.md';
import Parts from '@ionic-internal/component-api/v8/input-otp/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/input-otp/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/input-otp/slots.md';

<head>
  <title>ion-input-otp：一次性密码输入组件</title>
  <meta name="description" content="ion-input-otp 是用于输入一次性密码（OTP）的组件，支持多个输入框和自动焦点管理。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Input OTP 组件是一个专门用于输入一次性密码（OTP）的输入组件。它提供了一个用户友好的界面来输入验证码，支持多个输入框和自动焦点管理。

## 基本用法

该组件默认提供 4 个输入框，这是许多验证码的常见长度。输入框的数量可以使用 `length` 属性进行自定义。

import Basic from '@site/static/usage/v8/input-otp/basic/index.md';

<Basic />

## 类型

`type` 属性决定了输入格式，支持数字或字母数字验证码。它接受两个值：`number` 和 `text`。默认使用 `type="number"` 来输入数字验证码。当指定 `type="text"` 时，它接受字母数字输入。这种灵活性允许处理不同的 OTP 格式，无论是纯数字代码（如短信验证码）还是字母数字代码（如备份码或恢复密钥）。

`type` 属性会自动设置 `inputmode` 和 `pattern` 属性：
- 当 `type="number"` 时：
  - 设置 `inputmode="numeric"` 以在移动设备上显示数字键盘
  - 设置 `pattern="[\p{N}]"` 以仅允许数字输入
- 当 `type="text"` 时：
  - 设置 `inputmode="text"` 以显示标准键盘
  - 设置 `pattern="[\p{L}\p{N}]"` 以允许字母数字输入

有关模式验证和自定义的更多详细信息，请参阅[模式](#pattern)部分。

import Type from '@site/static/usage/v8/input-otp/type/index.md';

<Type />

## 形状

`shape` 属性控制输入框的边框圆角，可以创建圆角或直角。

import Shape from '@site/static/usage/v8/input-otp/shape/index.md';

<Shape />

## 填充样式

`fill` 属性控制输入框的背景样式，提供带边框或实心填充的背景。

import Fill from '@site/static/usage/v8/input-otp/fill/index.md';

<Fill />

## 尺寸

`size` 属性为输入框提供不同的尺寸选项。

import Size from '@site/static/usage/v8/input-otp/size/index.md';

<Size />

## 分隔符

`separators` 属性在一个或多个输入框之间添加视觉分隔符。分隔符可以通过三种方式定义：
- 逗号分隔的数字字符串（如 `"1,3"`）
- 数字数组（如 `[1, 3]`）
- 字符串 `"all"` 以在每个输入框之间显示分隔符

数字表示在哪个索引之后应显示分隔符。例如，`"1,3"` 会在第一个和第三个输入框后显示分隔符。这可以用于创建视觉上不同的输入框分组，但它仍然只有一个值。

import Separators from '@site/static/usage/v8/input-otp/separators/index.md';

<Separators />

## 状态

组件支持各种状态以自动设置输入框的样式：
- 通过相应属性设置的 `disabled` 和 `readonly` 状态
- 表单验证状态：通过 CSS 类直观指示的 `valid` 和 `invalid`
- 在 Angular 中：通过框架的值访问器和表单验证自动管理验证状态
- 对于其他框架：开发人员必须手动添加 `ion-valid`、`ion-invalid` 和 `ion-touched` 类
- `ion-invalid` 样式仅在触摸（`ion-touched`）时显示
- `ion-valid` 样式仅在聚焦（`has-focus`）时显示

import States from '@site/static/usage/v8/input-otp/states/index.md';

<States />

## 模式

`pattern` 属性允许使用正则表达式进行自定义验证。它接受一个[字符串正则表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet)或[Unicode 正则表达式](https://www.regular-expressions.info/unicode.html)来验证允许的字符。`pattern` 必须匹配整个值，而不仅仅是子集。默认模式：
- `type="number"`：`"[\p{N}]"` 用于匹配任何脚本中的任何类型的数字字符。
- `type="text"`：`"[\p{L}\p{N}]"` 用于匹配任何脚本中的任何类型的数字字符和来自任何语言的任何类型的字母。

组件将阻止用户输入任何与指定模式不匹配的字符。开发人员可以通过提供自己的模式字符串来覆盖这些默认设置，以满足特定的输入要求。

:::tip
使用自定义 `pattern` 时，请记住 `type` 属性控制移动设备上显示的键盘：
- 对于纯数字模式，使用 `type="number"` 以显示数字键盘
- 对于包含字母的模式，使用 `type="text"` 以显示字母数字键盘
:::

import Pattern from '@site/static/usage/v8/input-otp/pattern/index.md';

<Pattern />

## 主题定制

### 颜色

`color` 属性更改输入框的配色方案。对于 `outline` 填充样式，此属性更改光标颜色、高亮颜色和边框颜色。对于 `solid` 填充样式，此属性更改光标颜色和高亮颜色。

:::note
`color` 属性*不*更改输入 OTP 的文本颜色。为此，请使用 [`--color` CSS 属性](#css-custom-properties-1)。
:::

import Colors from '@site/static/usage/v8/input-otp/theming/colors/index.md';

<Colors />

### CSS 自定义属性

Input OTP 使用作用域封装，这意味着它会在运行时通过为每个样式附加一个额外的类来自动限定其 CSS 范围。在 CSS 中覆盖作用域选择器需要[更高特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)的选择器。针对 `ion-input-otp` 进行自定义将不起作用；因此我们建议添加一个类并以这种方式进行自定义。由于某些样式是根据 `fill` 应用的，您可能需要分别覆盖不同填充样式上的属性。

import CSSProps from '@site/static/usage/v8/input-otp/theming/css-properties/index.md';

<CSSProps />

## 无障碍访问

### 键盘交互

Input OTP 的键盘导航遵循 [ARIA 创作实践指南](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/) 关于复合小部件的建议。它被视为一个复合小部件，因为它包含多个可作为单个控件使用的可聚焦元素（输入框）。

当组件未禁用时，这些键盘交互适用于所有 `ion-input-otp` 元素。

| 按键 | 描述 |
| --- | --- |
| <kbd>Tab</kbd> | 首次按 Tab 键进入组件时，焦点移动到第一个空框。如果所有框都已填充，焦点移动到最后一个框。进入组件后，按 Tab 键将移动到页面上的下一个可聚焦元素。 |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | 向后按 Tab 键进入组件时，焦点移动到第一个空框。如果所有框都已填充，焦点移动到最后一个框。进入组件后，按 Shift + Tab 键将焦点移动到页面上的前一个可聚焦元素。 |
| <kbd>ArrowRight</kbd> | 将焦点移动到下一个输入框，在第一个空框处停止。在 RTL 模式下，将焦点移回包含值的任何前一个框。 |
| <kbd>ArrowLeft</kbd> | 将焦点移回包含值的任何前一个框。在 RTL 模式下，将焦点移动到下一个输入框，在第一个空框处停止。 |
| 任何匹配 `pattern` 属性的字符 | 填充当前框并自动将焦点移动到下一个空框。如果所有框都已填充，焦点保留在最后一个框上。如果当前框已有值，则用输入的字符覆盖该值。在 RTL 模式下，输入从右向左填充框。 |
| <kbd>Backspace</kbd> | 在空框中：将焦点向后移动一个框并清除其值。<br/> 在有值的框中：清除该值。<br/> 当右侧框中有值时：将它们全部向左移动一个位置。在 RTL 模式下，当左侧框中有值时：将它们全部向右移动一个位置。 |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> <br/> <kbd>Cmd</kbd> + <kbd>V</kbd> | 从第一个框开始粘贴内容，无论当前焦点在哪个框上。粘贴前会清除所有现有值。例如，如果所有框中都有 "1234" 并粘贴 "56"，结果将是前两个框为 "56"，其余框为空。如果粘贴的内容长度超过可用框数，则忽略额外字符。 |

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