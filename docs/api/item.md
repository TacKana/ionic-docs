---
title: "ion-item"
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
  <title>ion-item: iOS 和 Android 的项目元素输入、编辑或删除</title>
  <meta name="description" content="ion-item 元素用于 iOS/Android，包含文本、图标、图像和其他自定义元素。它们放置在列表中，可以输入、删除、编辑等。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Items 是可以包含文本、图标、头像、图像、输入以及任何其他原生或自定义元素的元素。Items 仅应作为 [List](./list) 中的行与其他 items 一起使用。Items 可以滑动、删除、重新排序、编辑等。


## 基本用法

Items 默认左对齐文本，并在文本宽于 item 时自动换行。我们可以使用 Ionic Framework 提供的 CSS 实用工具来修改此行为，例如在下面的示例中使用 `.ion-text-nowrap`。请参阅[CSS 实用工具文档](/layout/css-utilities)了解更多可添加到 item 以转换文本的类。

import Basic from '@site/static/usage/v8/item/basic/index.md';

<Basic />


## 内容类型

虽然列表中的 items 有多种形式，但它们通常支持 5 种不同的内容类型：辅助视觉元素、文本、元数据、操作和控件。但是，并非所有这些内容类型都应同时使用。以下指南展示了不同的内容类型以及如何在应用中正确使用它们。

### 辅助视觉元素

辅助视觉元素是 item 的装饰性图标或其他点缀。常见的辅助视觉元素示例包括[头像](./avatar)、[图标](./icon)和[缩略图](./thumbnail)。由于这些内容不是理解 item 意图所必需的，因此通常使用 `aria-hidden="true"` 对屏幕阅读器隐藏。

如果视觉元素是与 item 交互所必需的，例如图标按钮，则该视觉元素是[操作](#操作)而不是辅助视觉元素。

<BestPracticeFigure
  text="辅助视觉元素应以一致的方式呈现。这使每个 item 中的信息更易于解析。"
  doText="在列表中将对齐视觉元素放在同一侧"
  doNotText="不要在同一列表中呈现不同对齐方式的视觉元素"
  doImage={<img alt="包含多个项目的列表。每个项目都有一个图标和描述该项目的可见文本。每个项目中的图标在行首呈现。" src={useBaseUrl('img/item/visuals-do.jpg')} />}
  doNotImage={<img alt="包含多个项目的列表。每个项目都有一个图标和描述该项目的可见文本。有些图标在行首呈现，有些图标在行尾呈现" src={useBaseUrl('img/item/visuals-do-not.jpg')} />}
/>

在下面的示例中，我们创建了两个带有辅助视觉元素的列表。第一个列表使用图标，第二个列表使用头像。视觉元素是装饰性的，因此它们都具有 `aria-hidden="true"`。此外，它们一致地呈现在 `start` 插槽中。

import SupportingVisuals from '@site/static/usage/v8/item/content-types/supporting-visuals/index.md';

<SupportingVisuals />

### 文本

文本内容类型包括表单控件标签或其他可见文本。此文本用于指示 item 的意图。尽量保持文本简短扼要。

<BestPracticeFigure
  text={<>如果您发现需要多写几句话来阐明 item 的目的，请考虑将附加句子移到列表底部的<a href={useBaseUrl('api/note')}>Note</a> 中。将 item 放在自己的列表中可以清楚表明该文本与哪个 item 相关联。</>}
  doText="将长文本移到列表外部"
  doNotText="不要试图将长文本塞入 item 中"
  doImage={<img alt="一个列表，其中包含一个已勾选的复选框，表示用户希望接收电子邮件。描述用户将多久收到一次电子邮件以及如何退订的文本放在列表下方。" src={useBaseUrl('img/item/long-text-do.jpg')} />}
  doNotImage={<img alt="一个列表，其中包含一个已勾选的复选框，表示用户希望接收电子邮件。描述用户将多久收到一次电子邮件以及如何退订的文本与复选框内联放置为单个段落，使文本难以阅读并增加了 item 的高度。" src={useBaseUrl('img/item/long-text-do-not.jpg')} />}
/>

在下面的示例中，我们创建了一个包含不同类型文本的列表。"First Name" 和 "Last Name" 标签用于指示在文本输入框中输入的内容。

切换开关上的 "Allow Notifications" 标签下方有附加文本，提示用户可以禁用通知。由于这段文本很短，所以放在 item 内部。

该列表下方是另一个列表，包含一个 textarea，其下方有包含长文本的 [Note](./note)。textarea 被放在自己的列表中，以表明长文本与 textarea 相关联，而不是其他字段。

import Text from '@site/static/usage/v8/item/content-types/text/index.md';

<Text />

### 元数据

元数据为 item 提供额外的上下文，例如状态文本或计数。像 [Badge](./badge) 或 [Note](./note) 这样的组件是显示元数据的好方法。

<BestPracticeFigure
  text="限制您包含的元数据量，只保留最相关的信息。"
  doText="只添加最重要的元数据"
  doNotText="不要添加太多元数据，以免让用户感到不知所措或困惑。"
  doImage={<img alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项列表。每个待办事项列表中的任务数量显示在每个项目的末尾。" src={useBaseUrl('img/item/metadata-relevant-do.jpg')} />}
  doNotImage={<img alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项列表。每个项目末尾显示两个计数：一个表示任务总数，另一个表示今天到期的任务数量。" src={useBaseUrl('img/item/metadata-relevant-do-not.jpg')} />}
/>

<BestPracticeFigure
  text="开发人员还应考虑元数据的重要性。吸引用户注意元数据可能对用户有帮助，也可能分散他们对更重信息的注意力，具体取决于使用场景。"
  doText="优先展示最重要的内容。"
  cautionText="优先显示的元数据可能会分散对其他重要内容的注意力。"
  doImage={<img alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项列表。每个待办事项列表中的任务数量显示在每个项目的末尾。" src={useBaseUrl('img/item/metadata-relevant-do.jpg')} />}
  cautionImage={<img alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项列表。每个待办事项列表中的任务数量显示在每个项目的末尾。然而，该计数以蓝色突出显示，将用户的注意力从待办事项列表名称上移开。" src={useBaseUrl('img/item/metadata-important-caution.jpg')} />}
/>

在下面的示例中，我们创建了两个具有不同元数据的列表。第一个列表使用 [Note](./note) 来显示每个待办事项列表中的任务数量。

第二个列表模拟 iOS Mail 应用来显示收件箱。该列表使用了自定义元数据，包括"起始"插槽中的"未读消息"指示器，以及"结束"插槽中的时间戳和自定义详细信息图标。"未读消息"指示器以蓝色突出显示，以引起用户对未读消息的注意，而时间戳则更为微妙。

import Metadata from '@site/static/usage/v8/item/content-types/metadata/index.md';

<Metadata />

### 操作

操作是交互式元素，激活后会执行某些功能。一个 item 可以在同一行上显示多个操作。但是，开发者应确保每个操作的点击目标足够大以便于使用。

开发人员应避免创建可能破坏屏幕阅读器用户体验的<a href="https://dequeuniversity.com/rules/axe/4.4/nested-interactive">嵌套交互</a>。例如，如果 `button` 属性设置为 `true`，开发人员应避免在 Item 的主内容内部添加按钮。

<BestPracticeFigure
  text={<>可以使用 <a href={useBaseUrl('api/item-sliding')}>Item Sliding</a> 组件添加操作。操作也可以直接放置在 Item 内部而不使用 Item Sliding，但应限制在不超过 2 个操作。</>}
  doText={<>使用 <a href={useBaseUrl('api/item-sliding')}>Item Sliding</a> 通过滑动 Item 来显示多个操作。</>}
  doNotText="不要在 Item 中放置超过 2 个操作。"
  doImage={<img alt="一个包含多个项目的列表，每个项目代表一个联系人。每个项目都有显示联系人姓名的文本，以及包括固定联系人、分享联系人和删除联系人在内的多个操作。这些操作通过滑动项目来显示。" src={useBaseUrl('img/item/actions-do.jpg')} />}
  doNotImage={<img alt="一个包含多个项目的列表，每个项目代表一个联系人。每个项目都有显示联系人姓名的文本，以及包括固定联系人、分享联系人和删除联系人在内的多个操作。这些操作直接放置在项目上。由于操作太多，部分文本被截断。" src={useBaseUrl('img/item/actions-do-not.jpg')} />}
/>

在下面的示例中，我们创建了一个联系人列表。每个项目是一个存根按钮，旨在将您带到该项目的完整联系人页面。每个项目都有关联的额外操作，用户可以通过滑动项目来显示。

import Actions from '@site/static/usage/v8/item/content-types/actions/index.md';

<Actions />

### 控件

控件是表单组件，例如复选框、输入框、单选框等。由于屏幕空间限制，列表中的每个 item 应最多有两个控件。

<BestPracticeFigure
  text={<>帮助文本或字符计数等元数据不应在列表视图中的表单控件上使用。如果需要此类元数据，表单控件应放在列表外部。<a href={useBaseUrl('api/input#填充样式输入')}>Filled Inputs</a> 是在列表外部直观定义输入容器的好方法。</>}
  doText="将带有元数据的输入放在列表外部。"
  doNotText="不要在列表中放置输入的元数据。"
  doImage={<img alt="有一个电子邮件输入和一个密码输入。两者都有关联的帮助文本。由于两者都放在列表外部，因此很清楚每个帮助文本与哪个输入相关联。" src={useBaseUrl('img/item/controls-metadata-list-do.jpg')} />}
  doNotImage={<img alt="有一个包含电子邮件输入和密码输入的列表。两者都有关联的帮助文本。但是，每个项目之间的分隔线和帮助文本之间的分隔线使人难以判断每个帮助文本与哪个输入相关联。" src={useBaseUrl('img/item/controls-metadata-list-do-not.jpg')} />}
/>

<BestPracticeFigure
  text={<>或者，可以将元数据放在列表底部的 <a href={useBaseUrl('api/note')}>Note</a> 中。</>}
  doText="将输入的元数据放在列表末尾。"
  doNotText="不要在列表中放置输入的元数据。"
  doImage={<img alt="有两个输入列表。第一个列表包含一个密码输入。该列表下方包含文本'密码必须至少 16 个字符'。第二个列表包含一个电子邮件输入。第二个列表是分开的，因此密码长度要求文本与上面的密码输入明确关联。" src={useBaseUrl('img/item/controls-metadata-do.jpg')} />}
  doNotImage={<img alt="有一个输入列表。其中一个输入是密码输入，输入下方有文本'密码必须至少 16 个字符'。但是，这段文本直接放置在另一个输入的上方，因此不能立即清楚该文本与哪个输入相关联。" src={useBaseUrl('img/item/controls-metadata-do-not.jpg')} />}
/>

<BestPracticeFigure
  text={<>Items 通常应不超过两个控件。如果需要更多控件，请考虑将附加控件添加到可从 item 访问的 <a href={useBaseUrl('api/modal')}>Modal</a> 中。</>}
  doText="将附加控件移到可从 item 访问的子菜单中。"
  doNotText="不要在 item 中使用超过两个控件。"
  doImage={<img alt="有一个输入列表。其中一个输入是密码输入，输入下方有文本'密码必须至少 16 个字符'。但是，这段文本直接放置在另一个输入的上方，因此不能立即清楚该文本与哪个输入相关联。" src={useBaseUrl('img/item/controls-count-do.jpg')} />}
  doNotImage={<img alt="有两个输入列表。第一个列表包含一个密码输入。该列表下方包含文本'密码必须至少 16 个字符'。第二个列表包含一个电子邮件输入。第二个列表是分开的，因此密码长度要求文本与上面的密码输入明确关联。" src={useBaseUrl('img/item/controls-count-do-not.jpg')} />}
/>

在下面的示例中，我们创建了一个待办任务列表。每个项目都有一个复选框和一个输入。复选框让用户将任务标记为完成，输入让用户更改任务名称。

import Controls from '@site/static/usage/v8/item/content-types/controls/index.md';

<Controls />


## 可点击项目

如果 item 设置了 `href` 或 `button` 属性，则认为它是"可点击"的。可点击项目有一些视觉差异，表明它们可以进行交互。例如，可点击项目在 `md` 模式下激活时会有涟漪效果，在 `ios` 模式下激活时会有高亮效果，并且在 `ios` 模式下默认有[详情箭头](#详情箭头)。

import Clickable from '@site/static/usage/v8/item/clickable/index.md';

<Clickable />


## 详情箭头

默认情况下，[可点击项目](#可点击项目)在 `ios` 模式下会显示一个右箭头图标。要在可点击元素上隐藏右箭头图标，请将 `detail` 属性设置为 `false`。要在不自然显示它的项目上显示右箭头图标，请将 `detail` 属性设置为 `true`。

import DetailArrows from '@site/static/usage/v8/item/detail-arrows/index.md';

<DetailArrows />


{/* TODO 将此功能作为 CSS 变量添加回来 */}
{/* 此功能在 `md` 模式下默认不启用，但可以通过设置以下 CSS 变量来启用： */}
{/* ```css */}
{/* --item-detail-push-show: true; */}
{/* ``` */}
{/* 更多信息请参阅[主题文档](/theming/css-variables)。 */}


## 项目线条

Items 默认显示嵌入的下边框。边框左侧有内边距，不会出现在 `"start"` 插槽中的任何内容下方。`lines` 属性可以修改为 `"full"` 或 `"none"`，分别显示全宽边框或不显示边框。

import Lines from '@site/static/usage/v8/item/lines/index.md';

<Lines />

## Item 中的按钮

按钮在 item 内部比在外部时样式更小。要使按钮大小与 item 外部的按钮匹配，请将 `size` 属性设置为 `"default"`。

import Buttons from '@site/static/usage/v8/item/buttons/index.md';

<Buttons />

## Item 输入

import Inputs from '@site/static/usage/v8/item/inputs/index.md';

<Inputs />

## 主题

### 颜色

import Colors from '@site/static/usage/v8/item/theming/colors/index.md';

<Colors />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v8/item/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v8/item/theming/css-properties/index.md';

<CSSProps />

## 指南

以下指南将有助于确保您的列表项易于理解和使用。

1. Items 仅应在 [Lists](./list) 内部使用。
2. 列表中的 items 应以一致的格式呈现。例如，如果您的 items 显示装饰性图标，则图标应各 item 之间以相同方式定位。
3. Items 绝不应呈现[嵌套交互](https://dequeuniversity.com/rules/axe/4.4/nested-interactive)。使用嵌套交互时，屏幕阅读器无法选择正确的交互元素。例如，避免在设置了 `button="true"` 的 `ion-item` 内部放置按钮。
4. 正确使用[内容类型](#内容类型)。Item 组件被设计为 [List](./list) 中的一行，不应作为通用容器使用。

## 辅助功能

### 键盘交互

当满足以下任一条件时，`<ion-item>` 具有以下键盘交互：
- `button` 属性设置为 `"true"`，渲染原生 `<button>` 元素。
- `href` 属性已设置，渲染原生 `<a>` 元素。
- `routerLink` 属性已设置，渲染原生 `<a>` 元素。

| 键                               | 描述                                    |
| --------------------------------- | ---------------------------------------------- |
| <kbd>Tab</kbd>                    | 将焦点移动到下一个可聚焦元素。     |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | 将焦点移动到上一个可聚焦元素。 |

#### 按钮

当 `<ion-item>` 渲染原生 `<button>` 元素时，键盘交互遵循与 [button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#keyboard_interactions) 相同的模式：

| 键              | 描述                                                                 |
| ---------------- | --------------------------------------------------------------------------- |
| <kbd>Enter</kbd> | 激活项目，触发其 `click` 事件。如果项目在表单内且 `type` 设置为 `"submit"`，则提交表单。 |
| <kbd>Space</kbd> | 激活项目，触发其 `click` 事件。即使项目 `type` 为 `"submit"`，也不会提交表单。                    |

#### 锚点

当 `<ion-item>` 渲染原生 `<a>` 元素时，键盘交互遵循与 [link role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role) 相同的模式：

| 键              | 描述                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------- |
| <kbd>Enter</kbd> | 激活项目，导航到链接页面或将焦点移动到页面内目标。 |

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
