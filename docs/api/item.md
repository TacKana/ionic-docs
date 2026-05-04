---
title: 列表项组件
---
import Props from '@ionic-internal/component-api/v8/item/props.md';
import Events from '@ionic-internal/component-api/v8/item/events.md';
import Methods from '@ionic-internal/component-api/v8/item/methods.md';
import Parts from '@ionic-internal/component-api/v8/item/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/item/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/item/slots.md';

import useBaseUrl from '@docusaurus/useBaseUrl';
import BestPracticeFigure from '@components/global/BestPracticeFigure';

<head>
  <title>ion-item：iOS 与 Android 中的输入、编辑或删除元素</title>
  <meta name="description" content="ion-item 元素用于 iOS/Android 应用，可包含文本、图标、图像及其他自定义元素。它们通常被放置在列表中，并支持输入、删除、编辑等操作。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Item（列表项）是构成列表的基本元素，可以包含文本、图标、头像、图片、输入框以及任何原生或自定义的组件。Item 应仅作为 [List（列表）](./list) 中的行来使用，并与其他 item 共同组成列表。它们支持滑动、删除、排序、编辑等多种交互。

## 基础用法

默认情况下，item 内的文本左对齐，并在文本宽度超过 item 宽度时自动换行。我们可以通过 Ionic 框架提供的 CSS 工具类来修改此行为，例如在下方示例中使用 `.ion-text-nowrap` 来禁止换行。更多可用于转换 item 内文本样式的类，请参阅 [CSS 工具类文档](/layout/css-utilities)。

import Basic from '@site/static/usage/v8/item/basic/index.md';

<Basic />

<LegacyAnchor id="content-types" />

## 内容类型

虽然列表中的 item 形式多样，但它们通常支持 5 种不同的内容类型：辅助视觉元素、文本、元数据、操作和表单控件。然而，并非所有这些内容类型都应同时使用。以下指南将介绍不同的内容类型，以及如何在应用中正确使用它们。

### 辅助视觉元素

辅助视觉元素是用于装饰 item 的图标或其他点缀。常见的辅助视觉元素包括 [Avatar（头像）](./avatar)、[Icon（图标）](./icon)和 [Thumbnail（缩略图）](./thumbnail)。由于这些内容并非理解 item 意图所必需，通常使用 `aria-hidden="true"` 对屏幕阅读器隐藏。

如果某个视觉元素是与 item 交互所必需的（例如一个图标按钮），那么它属于 [操作](#actions)，而不是辅助视觉元素。

<BestPracticeFigure
  text="辅助视觉元素应以一致的方式呈现。这能使每个 item 的信息更容易被解析。"
  doText="在列表中，将视觉元素统一对齐在同一侧"
  doNotText="不要在同一列表中混合使用不同的对齐方式"
  doImage={<img alt="一个包含多个项目的列表。每个项目都有一个图标和描述性文本。每个项目的图标都显示在行首。" src={useBaseUrl('img/item/visuals-do.jpg')} />}
  doNotImage={<img alt="一个包含多个项目的列表。每个项目都有一个图标和描述性文本。有些图标显示在行首，有些则显示在行尾。" src={useBaseUrl('img/item/visuals-do-not.jpg')} />}
/>

在下面的示例中，我们创建了两个带有辅助视觉元素的列表。第一个列表使用图标，第二个列表使用头像。由于这些视觉元素是装饰性的，因此都设置了 `aria-hidden="true"`。此外，它们都统一放置在 `start` 插槽中。

import SupportingVisuals from '@site/static/usage/v8/item/content-types/supporting-visuals/index.md';

<SupportingVisuals />

### 文本

文本内容类型包括表单控件标签或其他可见文本。这些文本用于表明 item 的用途。请尽量保持文本简短扼要。

<BestPracticeFigure
  text={<>如果你发现需要额外用几句话来解释某个 item 的用途，可以考虑将这些补充说明移到一个位于列表底部的 <a href={useBaseUrl('api/note')}>Note（备注）</a> 中。将该 item 放入独立的列表中，可以清楚地表明文本与哪个项目相关联。</>}
  doText="将长文本移到列表外部"
  doNotText="不要试图将长文本塞进一个 item 里"
  doImage={<img alt="一个包含多个项目的列表。其中一个项目有一个已勾选的复选框，表示用户希望接收邮件。关于接收邮件的频率以及如何退订的说明文本放在列表下方。" src={useBaseUrl('img/item/long-text-do.jpg')} />}
  doNotImage={<img alt="一个包含多个项目的列表。其中一个项目有一个已勾选的复选框，表示用户希望接收邮件。关于接收邮件的频率以及如何退订的说明文本被放在 item 内，与复选框挤在同一行，导致文本难以阅读，且增加了 item 的高度。" src={useBaseUrl('img/item/long-text-do-not.jpg')} />}
/>

在下面的示例中，我们创建了一个包含不同类型文本的列表。"First Name"（名字）和 "Last Name"（姓氏）标签用于指示在文本输入框中应输入的内容。

开关（Toggle）上的 "Allow Notifications"（允许通知）标签下方有一段额外文本，提示用户可以禁用通知。由于这段文本较短，直接放在了 item 内部。

在该列表下方是另一个列表，其中包含一个文本输入框（textarea）以及一个位于其下、包含长文本的 [Note（备注）](./note)。将文本输入框放入独立的列表中，是为了明确这段长文本是与该文本输入框关联的，而不是其他字段。

import Text from '@site/static/usage/v8/item/content-types/text/index.md';

<Text />

### 元数据

元数据为 item 提供额外的上下文信息，例如状态文本或计数。像 [Badge（徽章）](./badge) 或 [Note（备注）](./note) 这类组件是展示元数据的好方式。

<BestPracticeFigure
  text="限制元数据的数量，只包含最关键的信息。"
  doText="只添加最重要的元数据"
  doNotText="不要添加过多元数据，以免让用户感到信息过载或困惑。"
  doImage={<img alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项清单。在每个项目的末尾，显示了该清单中的任务数量。" src={useBaseUrl('img/item/metadata-relevant-do.jpg')} />}
  doNotImage={<img alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项清单。在每个项目的末尾显示了两个计数：一个是总任务数，另一个是今天到期的任务数。" src={useBaseUrl('img/item/metadata-relevant-do-not.jpg')} />}
/>

<BestPracticeFigure
  text="开发者还应考虑元数据的重要性。根据具体用例，突出显示元数据可能对用户有帮助，也可能会分散他们对更重要信息的注意力。"
  doText="优先突出最重要的内容。"
  cautionText="被优先突出的元数据可能会分散用户对其他重要内容的注意力。"
  doImage={<img alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项清单。在每个项目的末尾，显示了该清单中的任务数量。" src={useBaseUrl('img/item/metadata-relevant-do.jpg')} />}
  cautionImage={<img alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项清单。在每个项目的末尾，显示了该清单中的任务数量。但这个计数被蓝色高亮显示，反而把用户的注意力从待办事项清单的名称上引开了。" src={useBaseUrl('img/item/metadata-important-caution.jpg')} />}
/>

在下面的示例中，我们创建了两个包含不同类型元数据的列表。第一个列表使用 [Note（备注）](./note) 来显示每个待办清单中的任务数量。

第二个列表模仿了 iOS 邮件应用，展示了一个收件箱。这个列表使用了自定义元数据，包括 `"start"` 插槽中的“未读邮件”指示器，以及 `"end"` 插槽中的时间戳和自定义详情图标。“未读邮件”指示器用蓝色高亮，以吸引用户注意未读邮件，而时间戳则相对不那么显眼。

import Metadata from '@site/static/usage/v8/item/content-types/metadata/index.md';

<Metadata />

<LegacyAnchor id="actions" />

### 操作

操作是可交互的元素，激活时会执行某些功能。一个 item 可以在一行内显示多个操作。但开发者应确保每个操作的可点击区域足够大，方便用户操作。

开发者应避免创建<a href="https://dequeuniversity.com/rules/axe/4.4/nested-interactive">嵌套的可交互元素</a>，这会破坏屏幕阅读器的用户体验。例如，如果 `ion-item` 的 `button` 属性已设为 `true`，就应避免在该 item 的主要内容区域内再添加按钮。

<BestPracticeFigure
  text={<>可以通过使用 <a href={useBaseUrl('api/item-sliding')}>Item Sliding（滑动项）</a> 组件来添加操作。也可以在不使用 Item Sliding 的情况下直接将操作放在 item 内部，但数量应限制在不超过 2 个。</>}
  doText={<>使用 <a href={useBaseUrl('api/item-sliding')}>Item Sliding</a>，让用户通过滑动 item 来显示多个操作。</>}
  doNotText="不要在单个 item 内放置超过 2 个操作。"
  doImage={<img alt="一个包含多个项目的列表，每个项目代表一个联系人。每个项目都显示了联系人的姓名，并附有多个操作，如置顶、分享和删除。这些操作通过滑动项目来显示。" src={useBaseUrl('img/item/actions-do.jpg')} />}
  doNotImage={<img alt="一个包含多个项目的列表，每个项目代表一个联系人。每个项目都显示了联系人的姓名，并附有多个操作，如置顶、分享和删除。这些操作直接放在 item 上。由于操作太多，部分文本被截断了。" src={useBaseUrl('img/item/actions-do-not.jpg')} />}
/>

在下面的示例中，我们创建了一个联系人列表。每个 item 都像一个按钮，旨在点击后进入该联系人的完整详情页。每个 item 还关联了额外的操作，用户可以通过滑动来显示它们。

import Actions from '@site/static/usage/v8/item/content-types/actions/index.md';

<Actions />

### 表单控件

表单控件包括复选框（checkbox）、输入框（input）、单选框（radio）等表单组件。由于屏幕空间限制，列表中的每个 item 通常最多放置两个控件。

<BestPracticeFigure
  text={<>像辅助文本或字符计数这样的元数据，不应在列表视图中与表单控件一起使用。如果需要此类元数据，应将表单控件置于列表之外。<a href={useBaseUrl('api/input#filled-inputs')}>填充风格的输入框（Filled Inputs）</a>是一种很好的方式，可以在列表外部直观地定义输入框的容器。</>}
  doText="将带有元数据的输入框放在列表之外。"
  doNotText="不要将输入框的元数据放在列表内部。"
  doImage={<img alt="有一个电子邮件输入框和一个密码输入框。两者都有相关的辅助文本。由于它们都放在列表之外，可以清楚地看出每个辅助文本与哪个输入框相关联。" src={useBaseUrl('img/item/controls-metadata-list-do.jpg')} />}
  doNotImage={<img alt="有一个包含电子邮件输入框和密码输入框的列表。两者都有相关的辅助文本。但是，每个项目之间以及辅助文本之间的分隔线，让人难以分辨每个辅助文本属于哪个输入框。" src={useBaseUrl('img/item/controls-metadata-list-do-not.jpg')} />}
/>

<BestPracticeFigure
  text={<>或者，可以将元数据放在列表底部的 <a href={useBaseUrl('api/note')}>Note（备注）</a> 中。</>}
  doText="将输入框的元数据放在列表末尾。"
  doNotText="不要将输入框的元数据放在列表内部。"
  doImage={<img alt="有两个输入框列表。第一个列表包含一个密码输入框。在该列表下方有一段文字，写着'密码长度至少为16个字符'。第二个列表包含一个电子邮件输入框。这两个列表是分开的，因此密码长度要求的文字很明确地与上方的密码输入框相关联。" src={useBaseUrl('img/item/controls-metadata-do.jpg')} />}
  doNotImage={<img alt="只有一个输入框列表。其中一个输入框是密码输入框，其下方有一段文字写着'密码长度至少为16个字符'。但这行文字直接位于另一个输入框的上方，所以不能立刻明白这段文字与哪个输入框相关。" src={useBaseUrl('img/item/controls-metadata-do-not.jpg')} />}
/>

<BestPracticeFigure
  text={<>Item 通常不应包含超过两个控件。如果需要更多控件，可以考虑将这些控件添加到一个可以从该 item 访问的 <a href={useBaseUrl('api/modal')}>Modal（模态框）</a> 中。</>}
  doText="将额外的控件移至可从 item 访问的子菜单中。"
  doNotText="不要在一个 item 内使用超过两个控件。"
  doImage={<img alt="只有一个输入框列表。其中一个输入框是密码输入框，其下方有一段文字写着'密码长度至少为16个字符'。但这行文字直接位于另一个输入框的上方，所以不能立刻明白这段文字与哪个输入框相关。" src={useBaseUrl('img/item/controls-count-do.jpg')} />}
  doNotImage={<img alt="有两个输入框列表。第一个列表包含一个密码输入框。在该列表下方有一段文字，写着'密码长度至少为16个字符'。第二个列表包含一个电子邮件输入框。这两个列表是分开的，因此密码长度要求的文字很明确地与上方的密码输入框相关联。" src={useBaseUrl('img/item/controls-count-do-not.jpg')} />}
/>

在下面的示例中，我们创建了一个待办任务列表。每个 item 都有一个复选框和一个输入框。复选框让用户可以将任务标记为完成，输入框则让用户可以更改任务名称。

import Controls from '@site/static/usage/v8/item/content-types/controls/index.md';

<Controls />

<LegacyAnchor id="clickable-items" />

## 可点击项

如果 item 设置了 `href` 或 `button` 属性，则被视为“可点击”。可点击的 item 在视觉上有一些差异，表明它们可以交互。例如，在 `md` 模式下，可点击项在激活时会显示涟漪效果（ripple effect）；在 `ios` 模式下，激活时会有高亮显示，并且默认会显示一个[详情箭头](#detail-arrows)。

import Clickable from '@site/static/usage/v8/item/clickable/index.md';

<Clickable />

<LegacyAnchor id="detail-arrows" />

## 详情箭头

默认情况下，在 `ios` 模式下，[可点击的 item](#clickable-items) 会显示一个右箭头图标。要隐藏可点击元素上的右箭头图标，请将 `detail` 属性设置为 `false`。如果要在默认不显示右箭头的 item 上显示它，可以将 `detail` 属性设置为 `true`。

import DetailArrows from '@site/static/usage/v8/item/detail-arrows/index.md';

<DetailArrows />

<!--

TODO add this functionality back as a css variable

此功能在 `md` 模式下默认未对可点击项启用，但可以通过设置以下 CSS 变量来启用：

```css
--item-detail-push-show: true;
```

更多信息请参阅[主题文档](/theming/css-variables)。

-->

## 边框线

默认情况下，item 会显示一条底部内嵌边框。这条边框左侧有内边距（padding），并且不会出现在放置在 `"start"` 插槽的内容下方。可以通过将 `lines` 属性设置为 `"full"` 或 `"none"` 来分别显示通栏边框或不显示边框。

import Lines from '@site/static/usage/v8/item/lines/index.md';

<Lines />

## Item 中的按钮

按钮在 item 内部时，其样式会比在外部时显得更小。若要使按钮尺寸与 item 外部的按钮一致，可将 `size` 属性设置为 `"default"`。

import Buttons from '@site/static/usage/v8/item/buttons/index.md';

<Buttons />

## Item 中的输入框

import Inputs from '@site/static/usage/v8/item/inputs/index.md';

<Inputs />

## 主题

### 颜色

import Colors from '@site/static/usage/v8/item/theming/colors/index.md';

<Colors />

### CSS 阴影部分

import CSSParts from '@site/static/usage/v8/item/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/item/theming/css-properties/index.md';

<CSSProps />

## 使用指南

以下指南将帮助您确保列表项易于理解和使用。

1.  Item 应仅在 [List（列表）](./list) 内部使用。
2.  列表中的 item 应以一致的格式呈现。例如，如果您的 item 都展示装饰性图标，那么这些图标在各项之间的位置应该保持一致。
3.  Item 内绝不应渲染[嵌套的可交互元素](https://dequeuniversity.com/rules/axe/4.4/nested-interactive)。因为当存在嵌套交互元素时，屏幕阅读器无法正确选择目标交互元素。例如，避免在一个设置了 `button="true"` 的 `ion-item` 内部再放置一个按钮。
4.  正确使用[内容类型](#content-types)。Item 组件是设计作为 [List（列表）](./list) 中的一行来使用的，不应将其用作通用的容器。

## 可访问性

### 键盘交互

当满足以下任一条件时，`<ion-item>` 会具有特定的键盘交互行为：
-   `button` 属性设置为 `"true"`，此时会渲染原生的 `<button>` 元素。
-   `href` 属性被设置，此时会渲染原生的 `<a>` 元素。
-   `routerLink` 属性被设置，此时会渲染原生的 `<a>` 元素。

| 按键                               | 描述                                    |
| --------------------------------- | --------------------------------------- |
| <kbd>Tab</kbd>                    | 将焦点移动到下一个可聚焦元素。             |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | 将焦点移动到上一个可聚焦元素。             |

#### 按钮模式

当 `<ion-item>` 渲染原生的 `<button>` 元素时，其键盘交互遵循与 [button 角色](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#keyboard_interactions)相同的模式：

| 按键              | 描述                                                                                   |
| ---------------- | -------------------------------------------------------------------------------------- |
| <kbd>Enter</kbd> | 激活该 item，触发其 `click` 事件。如果 item 位于表单内且 `type` 设置为 `"submit"`，则会提交该表单。 |
| <kbd>Space</kbd> | 激活该 item，触发其 `click` 事件。即使 item 的 `type` 为 `"submit"`，也不会提交表单。                  |

#### 链接模式

当 `<ion-item>` 渲染原生的 `<a>` 元素时，其键盘交互遵循与 [link 角色](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role)相同的模式：

| 按键              | 描述                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------ |
| <kbd>Enter</kbd> | 激活该 item，导航到链接指向的页面，或将焦点移动到页面内的目标位置。                         |

## 属性
<Props />

## 事件
<Events />

## 方法
<Methods />

<LegacyAnchor id="css-shadow-parts" />

## CSS 阴影部分
<Parts />

<LegacyAnchor id="css-custom-properties" />

## CSS 自定义属性
<CustomProps />

## 插槽
<Slots />
