---
title: 日期时间组件
---
import Props from '@ionic-internal/component-api/v8/datetime/props.md';
import Events from '@ionic-internal/component-api/v8/datetime/events.md';
import Methods from '@ionic-internal/component-api/v8/datetime/methods.md';
import Parts from '@ionic-internal/component-api/v8/datetime/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/datetime/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/datetime/slots.md';

import Basic from '@site/static/usage/v8/datetime/basic/index.md';

import MaxMin from '@site/static/usage/v8/datetime/date-constraints/max-min/index.md';
import Values from '@site/static/usage/v8/datetime/date-constraints/values/index.md';
import Advanced from '@site/static/usage/v8/datetime/date-constraints/advanced/index.md';

import FormatOptions from '@site/static/usage/v8/datetime/format-options/index.md';

import CustomLocale from '@site/static/usage/v8/datetime/localization/custom-locale/index.md';
import HourCycle from '@site/static/usage/v8/datetime/localization/hour-cycle/index.md';
import FirstDayOfWeek from '@site/static/usage/v8/datetime/localization/first-day-of-week/index.md';
import LocaleExtensionTags from '@site/static/usage/v8/datetime/localization/locale-extension-tags/index.md';
import TimeLabel from '@site/static/usage/v8/datetime/localization/time-label/index.md';

import MonthAndYear from '@site/static/usage/v8/datetime/presentation/month-and-year/index.md';
import Time from '@site/static/usage/v8/datetime/presentation/time/index.md';
import Date from '@site/static/usage/v8/datetime/presentation/date/index.md';

import ShowingDefaultTitle from '@site/static/usage/v8/datetime/title/showing-default-title/index.md';
import CustomizingTitle from '@site/static/usage/v8/datetime/title/customizing-title/index.md';

import ShowingConfirmationButtons from '@site/static/usage/v8/datetime/buttons/showing-confirmation-buttons/index.md';
import CustomizingButtons from '@site/static/usage/v8/datetime/buttons/customizing-buttons/index.md';
import CustomizingButtonTexts from '@site/static/usage/v8/datetime/buttons/customizing-button-texts/index.md';

import HighlightedDatesArray from '@site/static/usage/v8/datetime/highlightedDates/array/index.md';
import HighlightedDatesCallback from '@site/static/usage/v8/datetime/highlightedDates/callback/index.md';

import ShowAdjacentDays from '@site/static/usage/v8/datetime/show-adjacent-days/index.md';

import MultipleDateSelection from '@site/static/usage/v8/datetime/multiple/index.md';

import GlobalTheming from '@site/static/usage/v8/datetime/styling/global-theming/index.md';
import CalendarHeaderStyling from '@site/static/usage/v8/datetime/styling/calendar-header/index.md';
import CalendarDaysStyling from '@site/static/usage/v8/datetime/styling/calendar-days/index.md';
import DatetimeHeaderStyling from '@site/static/usage/v8/datetime/styling/datetime-header/index.md';
import WheelStyling from '@site/static/usage/v8/datetime/styling/wheel-styling/index.md';

<head>
  <title>ion-datetime: 日期时间格式选择器的 Ionic API 输入组件</title>
  <meta name="description" content="日期时间组件提供选择器界面，让用户可以方便地选取日期和时间。Ionic 的 API 日期时间输入组件能轻松展示首选格式并管理值。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

日期时间组件提供了一个日历界面和时间滚轮，让用户可以轻松选择日期和时间。它类似于原生的 `datetime-local` 类型的 `input` 元素，但 Ionic Framework 的 Datetime 组件可以更轻松地以首选格式显示日期和时间，并管理日期时间值。

## 概述

一直以来，在 JavaScript 甚至 HTML 输入框中处理日期时间值都是一项挑战。尤其是 JavaScript 的 `Date` 对象，很难正确解析日期时间字符串或格式化日期时间值。更糟糕的是，不同的浏览器和 JavaScript 版本会以不同方式解析各种日期时间字符串，特别是针对不同地区。

幸运的是，Ionic Framework 的日期时间输入组件被设计成可以让开发者避开这些常见的陷阱，让开发者能够轻松地操作日期时间值，并为用户提供一个简单易用的日期时间选择器，从而获得出色的用户体验。

### ISO 8601 日期时间格式：`YYYY-MM-DDTHH:mmZ`

Ionic Framework 使用 [ISO 8601 日期时间格式](https://www.w3.org/TR/NOTE-datetime) 作为其 `value` 的值。该值只是一个字符串，而不是使用 JavaScript 的 `Date` 对象。使用 ISO 日期时间格式可以方便地在 JSON 对象和数据库中进行序列化和解析。

以下是可用于 `ion-datetime` 的一些 ISO 8601 格式示例：

| 描述          | 格式                   | 日期时间值示例                |
| -------------------- | ------------------------ | ------------------------------  |
| 年                 | `YYYY`                   | `1994`                          |
| 年和月       | `YYYY-MM`                | `1994-12`                       |
| 完整日期        | `YYYY-MM-DD`             | `1994-12-15`                    |
| 日期和时间        | `YYYY-MM-DDTHH:mm`       | `1994-12-15T13:47`              |
| UTC 时区         | `YYYY-MM-DDTHH:mm:ssZ`   | `1994-12-15T13:47:20Z`          |
| 时区偏移量      | `YYYY-MM-DDTHH:mm:ssTZD` | `1994-12-15T13:47:20+05:00`     |
| 小时和分钟      | `HH:mm`                  | `13:47`                         |

请注意，年份始终为四位数，毫秒（如果添加）始终为三位数，而所有其他部分始终为两位数。因此，表示一月的数字始终带有前导零，例如 `01`。此外，小时始终采用 24 小时制，因此 `00` 表示 12 小时制中的午夜 12 点，`13` 表示下午 1 点，`23` 表示晚上 11 点。

:::note
虽然可以使用 ISO 8601 日期时间格式指定秒、毫秒和时区，但 `ion-datetime` 不提供选择秒、毫秒和时区的界面。提供的任何秒、毫秒或时区值都将被忽略。
:::

## 基本用法

<Basic />

## 与日期时间按钮一起使用

如果需要在模态框或弹出框等覆盖层中展示日期时间，我们建议使用 [ion-datetime-button](./datetime-button)。当空间受限时，应使用 `ion-datetime-button`。此组件会显示显示当前日期和时间值的按钮。点击这些按钮时，日期或时间选择器会在覆盖层中打开。

## 异步设置值

如果在其创建后通过程序更新 `value`，日期时间组件将自动跳转到新日期。但是，建议在用户可以与该组件交互时避免以这种方式更新 `value`，因为这可能会让当前正在尝试选择日期的用户感到困惑。例如，如果通过异步过程加载日期时间组件的 `value`，建议使用 CSS 隐藏该组件，直到值更新完成。

## 日期约束

### 最大和最小日期

要自定义最小和最大日期时间值，可以提供 `min` 和 `max` 组件属性，这可能更适合应用程序的用例。按照上表中列出的相同 ISO 8601 格式，每个组件都可以限制用户可以选择哪些日期。

以下示例将日期选择限制为仅限 2022 年 3 月到 2022 年 5 月。

<MaxMin />

### 选择特定值

`min` 和 `max` 属性允许您将日期选择限制在特定范围内，而 `monthValues`、`dayValues`、`yearValues`、`hourValues` 和 `minuteValues` 属性允许您选择用户可以选择的特定日期和时间。

以下示例允许以 15 分钟为增量选择分钟。它还允许以 5 天为增量选择日期。

<Values />

### 高级日期约束

使用 `isDateEnabled` 属性，开发者可以自定义 `ion-datetime`，使用 ISO 8601 日期字符串禁用特定某天、日期范围、周末或任何自定义规则。`isDateEnabled` 属性接受一个返回布尔值的函数，指示日期是否启用。该函数会为每个渲染的日历日调用，包括上个月、当前月和下个月的日期。自定义实现应优化性能以避免卡顿。

以下示例展示如何禁用所有周末日期。对于更高级的日期操作，我们建议使用诸如 `date-fns` 之类的日期工具库。

<Advanced />

## 本地化

Ionic Framework 使用了 [Intl.DatetimeFormat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DatetimeFormat) Web API，它使我们能够根据用户设备上设置的语言和区域自动本地化月份和日期的名称。

### 自定义区域设置

当您需要特定区域设置时，可以使用 `locale` 属性进行设置。区域设置控制显示的语言以及日期和时间格式。

以下示例展示如何将区域设置为西班牙语（西班牙）。

<CustomLocale />

:::note
时间标签不会自动本地化。有关更多信息，请参阅[时间标签](#时间标签)。
:::

### 小时周期

`ion-datetime` 默认将使用由 `locale` 属性指定的小时周期。例如，如果将 `locale` 设置为 `en-US`，那么 `ion-datetime` 将使用 12 小时制。

有 4 种主要的小时周期类型：

| 小时周期类型 | 描述                                                  |
| --------------- | ------------------------------------------------------------ |
| `'h12'`          | 使用 1–12 的小时系统；对应于模式中的 'h'。12 小时制，午夜从 12:00 am 开始。 |
| `'h23'`         | 使用 0–23 的小时系统；对应于模式中的 'H'。24 小时制，午夜从 0:00 开始。 |
| `'h11'`         | 使用 0–11 的小时系统；对应于模式中的 'K'。12 小时制，午夜从 0:00 am 开始。 |
| `'h24'`         | 使用 1–24 的小时系统；对应于模式中的 'k'。24 小时制，午夜从 24:00 开始。 |

:::note
  来源：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
:::


在某些情况下，您可能需要更精细地控制使用哪种小时周期。这时 `hourCycle` 属性就能派上用场。

在以下示例中，即使区域设置为默认使用 24 小时制的 `en-GB`，我们也可以使用 `hourCycle` 属性强制 `ion-datetime` 使用 12 小时制：

<HourCycle />

### 一周的第一天

对于 `ion-datetime`，默认的一周第一天是星期日。截至 2022 年，还没有浏览器 API 能让 Ionic 根据设备的区域设置自动确定一周的第一天，不过这方面的工作正在进行中（参见：[TC39 GitHub](https://github.com/tc39/ecma402/issues/6)）。

<FirstDayOfWeek />

### 时间标签

时间标签不会自动本地化。幸运的是，Ionic 通过 `time-label` 插槽让提供自定义本地化变得很容易。

<TimeLabel />

### 区域扩展标签

`ion-datetime` 还支持作为 `Intl.Locale` API 一部分的[区域扩展标签](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)。这些标签允许您将有关区域设置的信息编码到区域设置字符串本身中。如果开发者在他们的应用中使用了 [Intl.Locale API](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)，可能会更喜欢使用扩展标签的方法。

例如，如果您想对 `en-GB` 区域设置使用 12 小时制，可以提供扩展标签，而不是同时使用 `locale` 和 `hourCycle` 属性：

<LocaleExtensionTags />

:::note
在您的应用中使用 `Intl.Locale` 之前，请务必查看[浏览器兼容性表](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale#浏览器兼容性)。
:::

## 展示模式

默认情况下，`ion-datetime` 允许用户同时选择日期和时间。此外，用户还可以选择特定的月份、年份、小时和分钟。

某些用例可能只需要日期选择或只需要时间选择。`presentation` 属性允许您指定要显示哪些选择器以及它们的显示顺序。例如，设置为 `date-time` 会使日历选择器出现在时间选择器之前。设置为 `time-date` 会使日历选择器出现在时间选择器之后。

### 月份和年份选择

通过将 `month-year`、`month` 或 `year` 传递给 `presentation` 属性，可以进行月份和年份选择。

此示例展示了一个使用 `month-year` 配置的日期时间组件。

<MonthAndYear />

### 时间选择

通过将 `date-time`、`time-date` 或 `time` 传递给 `presentation` 属性，可以进行时间选择。

此示例展示了一个使用 `time` 配置的日期时间组件。

<Time />

### 日期选择

通过将 `date-time`、`time-date` 或 `date` 传递给 `presentation` 属性，可以进行日期选择。

此示例展示了一个使用 `date` 配置的日期时间组件。

<Date />

### 滚轮式选择器

默认情况下，使用 `presentation` 时，Ionic 会优先显示网格样式布局。但是，可以使用 `preferWheel` 属性来显示滚轮样式。当 `preferWheel` 为 `true` 时，Ionic 会在可能的情况下优先显示滚轮样式布局。

某些 `presentation` 选项同时具有网格样式和滚轮样式，开发者可以通过 `preferWheel` 属性进行选择。其他 `presentation` 值只有滚轮样式，永远不会显示网格样式。下表显示了哪些 `presentation` 值具有网格或滚轮样式。

| `presentation` | 有网格样式？ | 有滚轮样式？ |
| -------------- | --------------- | ---------------- |
| `date`         | 是             | 是              |
| `date-time`    | 是             | 是              |
| `month`        | 否              | 是              |
| `month-year`   | 否              | 是              |
| `time`         | 否              | 是              |
| `time-date`    | 是             | 是              |
| `year`         | 否              | 是              |

下面的示例展示了 `presentation="date-time"` 的滚轮选择器。

import Wheel from '@site/static/usage/v8/datetime/presentation/wheel/index.md';

<Wheel />

## 显示相邻月份日期

如果将 `showAdjacentDays` 属性设置为 `true`，则会显示上个月和下个月的日期，以填充日历视图开头或结尾的任何空白区域。当用户点击启用的相邻日期时，日历将平滑地动画过渡到显示该月份的视图。

启用 `showAdjacentDays` 后，日历视图始终显示 6 行，因此会根据需要显示上个月或下个月的日期来填充网格。例如，即使某个月从一周的第一天开始，并且在第五行结束，下个月的日期也会出现在末尾以完成第六行。

:::note
此属性仅在 `presentation="date"` 且 `preferWheel="false"` 时受支持。
:::

<ShowAdjacentDays />

## 多日期选择

如果将 `multiple` 属性设置为 `true`，则可以在日历选择器中选择多个日期。点击已选中的日期会取消选择它。

:::note
此属性仅在 `presentation="date"` 且 `preferWheel="false"` 时受支持。
:::

<MultipleDateSelection />

## 标题

默认情况下，`ion-datetime` 不显示任何与组件关联的头部或标题。开发者可以使用 `showDefaultTitle` 属性来显示默认的标题/头部配置。他们也可以使用 `title` 插槽来自定义头部中呈现的内容。

### 显示默认标题

<ShowingDefaultTitle />

### 自定义标题

<CustomizingTitle />

## 格式化选项

您可以通过提供 `formatOptions` 来自定义日期时间组件头部文本的日期格式以及时间按钮中的时间格式。`formatOptions` 属性中的 `date` 和 `time` 应该分别是 [`Intl.DateTimeFormatOptions`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) 对象。如果未提供 `formatOptions`，将使用默认的日期和时间格式。

日期时间组件[不会操作或设置时区](#时区)。如果提供了 `timeZone` 或 `timeZoneName`，它们将被忽略，并且时区将设置为 UTC。这确保了显示的值与所选值匹配，而不是转换为用户当前的时区。

请注意您提供的选项，因为它们可能与选择的展示模式不匹配。例如，为 `month` 展示模式提供 `minute: 'numeric'` 可能会导致意外行为，可能会在预期只显示时间的地方显示了月份。

<FormatOptions />

## 按钮

默认情况下，只要选择新日期，就会发出带有新日期时间值的 `ionChange` 事件。要在发出 `ionChange` 之前需要用户确认，您可以设置 `showDefaultButtons` 属性为 `true`，或者使用 `buttons` 插槽传入自定义的确认按钮。当传入自定义按钮时，确认按钮必须调用 `ion-datetime` 的 `confirm` 方法才能发出 `ionChange` 事件。

### 显示确认按钮

默认的“完成”和“取消”按钮已经预先配置好，分别调用 [`confirm`](#confirm) 和 [`cancel`](#cancel) 方法。

<ShowingConfirmationButtons />

### 自定义按钮文本

对于简单的用例，开发者可以通过 `doneText` 和 `cancelText` 属性为确认和取消按钮提供自定义按钮文本。当您只需要更改按钮文本且不需要任何自定义行为时，我们建议这样做。

<CustomizingButtonTexts />

### 自定义按钮元素

开发者可以提供他们自己的按钮以实现高级自定义行为。

`ion-datetime` 具有 `confirm`、`cancel` 和 `reset` 方法，开发者在点击自定义按钮时可以调用这些方法。`reset` 方法还允许开发者提供一个日期来将日期时间组件重置为该日期。

<CustomizingButtons />

## 高亮显示特定日期

使用 `highlightedDates` 属性，开发者可以用自定义文本或背景颜色来样式化特定的日期。此属性可以定义为一个包含日期及其颜色的数组，或者一个接收 ISO 字符串并返回要使用的颜色的回调函数。

在指定颜色时，可以使用任何有效的 CSS 颜色格式。这包括十六进制代码、`rgba`、[颜色变量](../theming/colors)等。

为了保持一致的用户体验，所选日期的样式将始终覆盖自定义高亮样式。

:::note
此属性仅在 `preferWheel="false"` 并且使用 `"date"`、`"date-time"` 或 `"time-date"` 的 `presentation` 时受支持。
:::

### 使用数组

当高亮适用于固定日期（例如截止日期）时，数组更合适。

<HighlightedDatesArray />

### 使用回调函数

当高亮日期是重复性的（例如生日或定期会议）时，回调函数更合适。

<HighlightedDatesCallback />

## 样式设计

### 全局主题定制

Ionic 强大的主题系统可用于轻松更改整个应用以匹配特定主题。在此示例中，我们使用[颜色创建器](../theming/colors#新颜色创建器)和[阶梯颜色生成器](../theming/themes#阶梯颜色生成器)创建了一个玫瑰色调色板，可用于 `ion-datetime`。

这种方法的好处是每个组件（不仅仅是 `ion-datetime`）都可以自动利用此主题。

<GlobalTheming />

### 日期时间头部

日期时间头部管理 `title` 插槽和所选日期的内容。

:::note
如果 `preferWheel` 设置为 `true`，则不会渲染所选日期。
:::

<DatetimeHeaderStyling />

### 日历头部

使用网格样式布局时，日历头部管理日期导航控件（月份/年份选择器和上/下个月按钮）以及星期几。

可以使用 CSS 阴影部分设置头部的样式。

<CalendarHeaderStyling />

### 日历日期

网格样式的 `ion-datetime` 中的日历日期可以使用 CSS 阴影部分设置样式。

:::note
下面的示例选择了 2 天前的日期，除非该日期在上个月，那么它会选择未来 2 天的日期。这样做是为了演示目的，以展示如何对所有日期、当前日期和所选日期应用自定义样式。
:::

<CalendarDaysStyling />

### 滚轮选择器

`ion-datetime` 中使用的滚轮可以通过阴影部分和 CSS 变量的组合来设置样式。这既适用于滚轮样式日期时间中的列，也适用于网格样式日期时间中的月份/年份选择器。

<WheelStyling />

## 时区

Ionic 的 `ion-datetime` 遵循 [datetime-local](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/datetime-local) 的行为，即在日期时间控件内部不操作或设置时区。换句话说，时间值 "07:00" 不会根据不同的时区进行调整。

我们建议使用诸如 [date-fns-tz](https://github.com/marnusw/date-fns-tz) 之类的库将日期时间值转换为所需的时区。

以下是一个格式化 ISO-8601 字符串以在用户设备上设置的时区中显示的示例：

```typescript
import { format, utcToZonedTime } from 'date-fns-tz';

// 获取用户设备上设置的时区
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// 从 UTC 日期字符串创建日期对象
const date = new Date('2014-10-25T10:46:20Z');

// 使用 date-fns-tz 从 UTC 转换为带时区的时间
const zonedTime = utcToZonedTime(date, userTimeZone);

// 从带时区的时间创建格式化字符串
format(zonedTime, 'yyyy-MM-dd HH:mm:ssXXX', { timeZone: userTimeZone });
```

### 解析日期值

`ionChange` 事件将在事件负载中以 ISO-8601 字符串的形式发出日期值。开发者有责任根据其应用需求对其进行格式化。我们建议使用 [date-fns](https://date-fns.org) 来格式化日期值。

以下是一个格式化 ISO-8601 字符串以显示月份、日期和年份的示例：

```typescript
import { format, parseISO } from 'date-fns';

/**
 * 这是在 `ionChange` 事件的
 * 负载中提供的值。
 *
 * 该值是一个 ISO-8601 日期字符串。
 */
const dateFromIonDatetime = '2021-06-04T14:23:00-04:00';
const formattedString = format(parseISO(dateFromIonDatetime), 'MMM d, yyyy');

console.log(formattedString); // 输出: Jun 4, 2021
```

有关所有有效格式令牌的列表，请参阅 https://date-fns.org/docs/format 。


## 高级日期时间验证和操作

日期时间选择器提供了选择精确格式的简便性，并使用标准化的 [ISO 8601 日期时间格式](https://www.w3.org/TR/NOTE-datetime) 将日期时间值持久化为字符串。然而，重要的是要注意 `ion-datetime` 并不试图解决验证和操作日期时间值的所有情况。如果需要从特定格式解析日期时间值，或进行操作（例如给日期加 5 天、减 30 分钟等），甚至将数据格式化为特定区域设置，那么我们强烈建议使用 [date-fns](https://date-fns.org) 在 JavaScript 中处理日期。

## 无障碍

### 键盘交互

`ion-datetime` 具有完整的键盘支持，用于在组件内的可聚焦元素之间导航。下表详细说明了每个键的作用：

| 键                                  | 描述                                    |
| ------------------------------------ | ---------------------------------------------- |
| <kbd>Tab</kbd>                       | 将焦点移动到下一个可聚焦元素。     |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>    | 将焦点移动到上一个可聚焦元素。 |
| <kbd>Space</kbd> 或 <kbd>Enter</kbd> | 点击（激活）可聚焦元素。                  |

#### 日期网格

| 键                                    | 描述                                       |
| -------------------------------------- | ------------------------------------------------- |
| <kbd>上箭头</kbd>                     | 将焦点移动到前一周的同一天。 |
| <kbd>下箭头</kbd>                   | 将焦点移动到下一周的同一天。     |
| <kbd>右箭头</kbd>                  | 将焦点移动到下一天。                      |
| <kbd>左箭头</kbd>                   | 将焦点移动到前一天。                  |
| <kbd>Home</kbd>                        | 将焦点移动到当前周的第一天。 |
| <kbd>End</kbd>                         | 将焦点移动到当前周的最后一天。  |
| <kbd>PageUp</kbd>                      | 将日期网格更改为上个月。  |
| <kbd>PageDown</kbd>                    | 将日期网格更改为下个月。      |
| <kbd>Shift</kbd> + <kbd>PageUp</kbd>   | 将日期网格更改为上一年。   |
| <kbd>Shift</kbd> + <kbd>PageDown</kbd> | 将日期网格更改为下一年。       |

#### 时间、月份和年份滚轮

日期时间中的滚轮选择器内部使用了 [Picker](./picker)。有关滚轮选择器无障碍功能的更多信息，请参阅 [Picker 的无障碍部分](./picker#accessibility)。

## 接口

### DatetimeChangeEventDetail

```typescript
interface DatetimeChangeEventDetail {
  value?: string | null;
}
```

### DatetimeCustomEvent

虽然不是必需的，但此接口可用于代替 `CustomEvent` 接口，以便为此组件发出的 Ionic 事件提供更强的类型。

```typescript
interface DatetimeCustomEvent extends CustomEvent {
  detail: DatetimeChangeEventDetail;
  target: HTMLIonDatetimeElement;
}
```

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