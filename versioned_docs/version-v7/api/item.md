---
title: 'ion-item'
---

import Props from '@ionic-internal/component-api/v7/item/props.md';
import Events from '@ionic-internal/component-api/v7/item/events.md';
import Methods from '@ionic-internal/component-api/v7/item/methods.md';
import Parts from '@ionic-internal/component-api/v7/item/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/item/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v7/item/slots.md';

import useBaseUrl from '@docusaurus/useBaseUrl';
import BestPracticeFigure from '@components/global/BestPracticeFigure';

<head>
  <title>ion-item: 用于输入、编辑或删除的 iOS 和 Android 项目元素</title>
  <meta
    name="description"
    content="用于 iOS/Android 的 ion-item 元素包含文本、图标、图像和其他自定义元素。它们被放置在列表中，可以进行输入、删除、编辑等操作。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

项目（Items）是可以包含文本、图标、头像、图像、输入框以及任何其他原生或自定义元素的组件。项目应仅作为行（rows）与其他项目一起放置在[列表（List）](./list)中。项目可以被滑动、删除、重新排序、编辑等。

## 基本用法

当文本宽度超过项目宽度时，项目会左对齐文本并自动换行。我们可以使用 Ionic Framework 提供的 CSS 工具类来修改此行为，例如在下面的示例中使用 `.ion-text-nowrap`。有关可以添加到项目以转换文本的更多类，请参阅[CSS 工具类文档](/docs/layout/css-utilities)。

import Basic from '@site/static/usage/v7/item/basic/index.md';

<Basic />

## 内容类型

虽然列表中的项目有多种形式，但它们通常支持 5 种不同的内容类型：辅助视觉元素、文本、元数据、操作和控件。然而，并非所有这些内容类型都应该同时使用。以下指南展示了不同的内容类型以及如何在应用程序中正确使用它们。

### 辅助视觉元素

辅助视觉元素是项目的装饰性图标或其他修饰元素。常见的辅助视觉元素示例包括[头像（Avatar）](./avatar)、[图标（Icon）](./icon）和[缩略图（Thumbnail）](./thumbnail）。由于此内容对于理解项目的意图不是必需的，因此通常使用 `aria-hidden="true"` 对屏幕阅读器隐藏。

如果视觉元素需要与项目交互（例如图标按钮），则该视觉元素是[操作（action）](#actions)而不是辅助视觉元素。

<BestPracticeFigure
  text="辅助视觉元素应以一致的方式呈现。这样可以使每个项目中的信息更容易解析。"
  doText="将列表中的视觉元素对齐在同一侧"
  doNotText="不要在同一列表中呈现不同对齐方式的视觉元素"
  doImage={
    <img
      alt="包含多个项目的列表。每个项目都有一个图标和描述该项目的可见文本。每个项目中的图标都呈现在行的起始位置。"
      src={useBaseUrl('img/item/visuals-do.jpg')}
    />
  }
  doNotImage={
    <img
      alt="包含多个项目的列表。每个项目都有一个图标和描述该项目的可见文本。有些图标呈现在行的起始位置，有些图标呈现在行的结束位置。"
      src={useBaseUrl('img/item/visuals-do-not.jpg')}
    />
  }
/>

在下面的示例中，我们创建了两个带有辅助视觉元素的列表。第一个列表使用图标，第二个列表使用头像。这些视觉元素是装饰性的，因此它们都设置了 `aria-hidden="true"`。此外，它们一致地呈现在 `start` 插槽中。

import SupportingVisuals from '@site/static/usage/v7/item/content-types/supporting-visuals/index.md';

<SupportingVisuals />

### 文本

文本内容类型包括表单控件标签或其他可见文本。此文本用于表明项目的意图。尽量保持文本简洁明了。

<BestPracticeFigure
  text={
    <>
      如果你发现需要更多的句子来阐明项目的目的，请考虑将额外的句子移到列表底部的<a href={useBaseUrl('api/note')}>注释（Note）</a>中。将项目放在自己的列表中，可以清楚地表明文本与哪个项目相关联。
    </>
  }
  doText="将长文本移到列表外部"
  doNotText="不要尝试将长文本放入项目中"
  doImage={
    <img
      alt="一个包含项目的列表，其中有一个已选中的复选框，表示用户希望接收电子邮件。描述用户将收到电子邮件的频率以及如何取消订阅的文本放置在列表下方。"
      src={useBaseUrl('img/item/long-text-do.jpg')}
    />
  }
  doNotImage={
    <img
      alt="一个包含项目的列表，其中有一个已选中的复选框，表示用户希望接收电子邮件。描述用户将收到电子邮件的频率以及如何取消订阅的文本作为单个段落与复选框内联放置，使得文本难以阅读并增加了项目的高度。"
      src={useBaseUrl('img/item/long-text-do-not.jpg')}
    />
  }
/>

在下面的示例中，我们创建了一个包含不同类型文本的列表。“First Name”和“Last Name”标签用于指示在文本输入框中输入什么内容。

切换开关上的“Allow Notifications”标签下方有附加文本，注明用户可以禁用通知。由于此文本较短，因此放置在项目内部。

该列表下方是另一个列表，其中包含一个文本区域（textarea），下方有一个包含长文本的[注释（Note）](./note）。文本区域被放在自己的列表中，以明确长文本与文本区域相关联，而不是与其他字段相关联。

import Text from '@site/static/usage/v7/item/content-types/text/index.md';

<Text />

### 元数据

元数据为项目提供额外的上下文，例如状态文本或计数。[徽章（Badge）](./badge）或[注释（Note）](./note）等组件是显示元数据的好方法。

<BestPracticeFigure
  text="限制你包含的元数据数量，仅保留最相关的信息。"
  doText="仅添加最重要的元数据"
  doNotText="不要添加太多元数据，以免让用户不知所措或感到困惑。"
  doImage={
    <img
      alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项列表。每个待办事项列表中任务数量的计数放置在每个项目的末尾。"
      src={useBaseUrl('img/item/metadata-relevant-do.jpg')}
    />
  }
  doNotImage={
    <img
      alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项列表。两个计数放置在每个项目的末尾：一个计数显示任务总数，另一个计数显示今天到期的任务总数。"
      src={useBaseUrl('img/item/metadata-relevant-do-not.jpg')}
    />
  }
/>

<BestPracticeFigure
  text="开发人员还应考虑元数据的重要性。根据具体用例，吸引对元数据的注意力可能对用户有帮助，或者可能分散他们对更重要信息的注意力。"
  doText="优先处理最重要的内容。"
  cautionText="优先处理的元数据可能会分散对其他重要内容的注意力。"
  doImage={
    <img
      alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项列表。每个待办事项列表中任务数量的计数放置在每个项目的末尾。"
      src={useBaseUrl('img/item/metadata-relevant-do.jpg')}
    />
  }
  cautionImage={
    <img
      alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项列表。每个待办事项列表中任务数量的计数放置在每个项目的末尾。然而，计数以蓝色高亮显示，将用户的注意力从待办事项列表的名称上转移开。"
      src={useBaseUrl('img/item/metadata-important-caution.jpg')}
    />
  }
/>

在下面的示例中，我们创建了两个包含不同类型元数据的列表。第一个列表使用[注释（Note）](./note）来显示每个待办事项列表中有多少任务。

第二个列表模拟 iOS 邮件应用程序来显示收件箱。该列表使用了自定义元数据，包括“start”插槽中的“未读消息”指示器以及“end”插槽中的时间戳和自定义详情图标。“未读消息”指示器以蓝色高亮显示，以吸引用户注意未读消息，而时间戳则更为微妙。

import Metadata from '@site/static/usage/v7/item/content-types/metadata/index.md';

<Metadata />

### 操作

操作是交互式元素，当你激活它们时会执行某些操作。一个项目可以在同一行显示多个操作。但是，开发人员应确保每个操作的点击目标足够大，以便使用。

开发人员应避免创建<a href="https://dequeuniversity.com/rules/axe/4.4/nested-interactive">嵌套交互元素（nested interactives）</a>，这可能会破坏屏幕阅读器的用户体验。例如，如果 `button` 属性设置为 `true`，开发人员应避免在项目的主要内容中添加按钮。

<BestPracticeFigure
  text={
    <>
      可以通过使用<a href={useBaseUrl('api/item-sliding')}>项目滑动（Item Sliding）</a>组件来添加操作。操作也可以直接放在项目内部，而不使用项目滑动，但这应限制在不超过 2 个操作。
    </>
  }
  doText={
    <>
      使用<a href={useBaseUrl('api/item-sliding')}>项目滑动（Item Sliding）</a>通过在项目上滑动来显示多个操作。
    </>
  }
  doNotText="不要在项目内放置超过 2 个操作。"
  doImage={
    <img
      alt="一个包含多个项目的列表，每个项目代表一个联系人。每个项目都有文本说明联系人的姓名，以及多个操作，包括置顶联系人、分享联系人和删除联系人。这些操作通过在项目上滑动来显示。"
      src={useBaseUrl('img/item/actions-do.jpg')}
    />
  }
  doNotImage={
    <img
      alt="一个包含多个项目的列表，每个项目代表一个联系人。每个项目都有文本说明联系人的姓名，以及多个操作，包括置顶联系人、分享联系人和删除联系人。这些操作直接放置在项目上。由于操作太多，一些文本被截断。"
      src={useBaseUrl('img/item/actions-do-not.jpg')}
    />
  }
/>

在下面的示例中，我们创建了一个联系人列表。每个项目都是一个占位按钮，旨在将你带到该项目的完整联系人页面。每个项目都有附加的操作，用户可以通过在项目上滑动来显示这些操作。

import Actions from '@site/static/usage/v7/item/content-types/actions/index.md';

<Actions />

### 控件

控件是表单组件，例如复选框、输入框、单选按钮等。由于屏幕空间限制，列表中的每个项目最多应有两个控件。

<BestPracticeFigure
  text={
    <>
      不应在列表视图的表单控件上使用元数据，例如帮助文本或字符计数。如果需要此类元数据，应将表单控件放在列表外部。<a href={useBaseUrl('api/input#filled-inputs')}>填充输入框（Filled Inputs）</a>是在列表外部视觉定义输入容器的好方法。
    </>
  }
  doText="将带有元数据的输入框放在列表外部。"
  doNotText="不要将输入框的元数据放在列表中。"
  doImage={
    <img
      alt="有一个电子邮件输入框和一个密码输入框。两者都有相关的帮助文本。由于两者都放在列表外部，因此可以清楚地看出每个帮助文本与哪个输入框相关联。"
      src={useBaseUrl('img/item/controls-metadata-list-do.jpg')}
    />
  }
  doNotImage={
    <img
      alt="有一个包含电子邮件输入框和密码输入框的列表。两者都有相关的帮助文本。然而，每个项目之间的分隔线以及帮助文本之间的分隔线使得很难判断每个帮助文本与哪个输入框相关联。"
      src={useBaseUrl('img/item/controls-metadata-list-do-not.jpg')}
    />
  }
/>

<BestPracticeFigure
  text={
    <>
      或者，可以将元数据放在列表底部的<a href={useBaseUrl('api/note')}>注释（Note）</a>中。
    </>
  }
  doText="将输入框的元数据放在列表的末尾。"
  doNotText="不要将输入框的元数据放在列表中。"
  doImage={
    <img
      alt="有两个输入框列表。第一个列表包含一个密码输入框。该列表下方有文本说明“密码必须至少 16 个字符”。第二个列表包含一个电子邮件输入框。第二个列表被分开，以便密码长度要求文本清楚地与上面的密码输入框相关联。"
      src={useBaseUrl('img/item/controls-metadata-do.jpg')}
    />
  }
  doNotImage={
    <img
      alt="有一个输入框列表。其中一个输入框是密码输入框，下方有文本说明“密码必须至少 16 个字符”。然而，此文本直接放在另一个输入框上方，因此无法立即判断文本与哪个输入框相关联。"
      src={useBaseUrl('img/item/controls-metadata-do-not.jpg')}
    />
  }
/>

<BestPracticeFigure
  text={
    <>
      项目通常不应超过两个控件。如果需要更多控件，请考虑在可从项目访问的<a href="useBaseUrl('api/modal')">模态框（Modal）</a>中添加额外的控件。
    </>
  }
  doText="将额外的控件移到可从项目访问的子菜单中。"
  doNotText="不要在项目内使用超过两个控件。"
  doImage={
    <img
      alt="有一个输入框列表。其中一个输入框是密码输入框，下方有文本说明“密码必须至少 16 个字符”。然而，此文本直接放在另一个输入框上方，因此无法立即判断文本与哪个输入框相关联。"
      src={useBaseUrl('img/item/controls-count-do.jpg')}
    />
  }
  doNotImage={
    <img
      alt="有两个输入框列表。第一个列表包含一个密码输入框。该列表下方有文本说明“密码必须至少 16 个字符”。第二个列表包含一个电子邮件输入框。第二个列表被分开，以便密码长度要求文本清楚地与上面的密码输入框相关联。"
      src={useBaseUrl('img/item/controls-count-do-not.jpg')}
    />
  }
/>

在下面的示例中，我们创建了一个待办任务列表。每个项目都有一个复选框和一个输入框。复选框让用户将任务标记为完成，输入框让用户更改任务的名称。

import Controls from '@site/static/usage/v7/item/content-types/controls/index.md';

<Controls />

## 可点击项目

如果一个项目设置了 `href` 或 `button` 属性，则被视为“可点击”。可点击项目有一些视觉上的差异，表明它们可以交互。例如，可点击项目在 `md` 模式下激活时会获得涟漪效果，在 `ios` 模式下激活时会有高亮显示，并且在 `ios` 模式下默认会显示[详情箭头](#detail-arrows)。

import Clickable from '@site/static/usage/v7/item/clickable/index.md';

<Clickable />

## 详情箭头

默认情况下，[可点击项目](#clickable-items) 在 `ios` 模式下会显示右箭头图标。要隐藏可点击元素上的右箭头图标，请将 `detail` 属性设置为 `false`。要在自然不显示右箭头图标的项目上显示该图标，请将 `detail` 属性设置为 `true`。

import DetailArrows from '@site/static/usage/v7/item/detail-arrows/index.md';

<DetailArrows />

<!--

TODO add this functionality back as a css variable

此功能默认未在 `md` 模式下的可点击项目上启用，但可以通过设置以下 CSS 变量来启用：

```css
--item-detail-push-show: true;
```

有关更多信息，请参阅[主题文档](/docs/theming/css-variables)。

-->

## 项目线条

项目默认显示一条带内边距的底部边框。该边框在左侧有内边距，并且不会出现在 `"start"` 插槽中的任何内容下方。`lines` 属性可以修改为 `"full"` 或 `"none"`，分别显示全宽边框或无边框。

import Lines from '@site/static/usage/v7/item/lines/index.md';

<Lines />

## 项目中的按钮

项目内部的按钮样式比外部的按钮要小。要使按钮大小与项目外部的按钮匹配，请将 `size` 属性设置为 `"default"`。

import Buttons from '@site/static/usage/v7/item/buttons/index.md';

<Buttons />

## 项目输入框

import Inputs from '@site/static/usage/v7/item/inputs/index.md';

<Inputs />

## 主题定制

### 颜色

import Colors from '@site/static/usage/v7/item/theming/colors/index.md';

<Colors />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/item/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/item/theming/css-properties/index.md';

<CSSProps />

## 指南

以下指南将有助于确保你的列表项目易于理解和使用。

1. 项目应仅在[列表（List）](./list）内部使用。
2. 列表中的项目应以一致的格式呈现。例如，如果你的项目呈现装饰性图标，则图标应在项目之间以相同的方式定位。
3. 项目不应呈现[嵌套交互元素（nested interactives）](https://dequeuniversity.com/rules/axe/4.4/nested-interactive)。当使用嵌套交互元素时，屏幕阅读器无法选择正确的交互元素。例如，避免在设置了 `button="true"` 的 `ion-item` 内部放置按钮。
4. 正确使用[内容类型](#content-types)。Item 组件设计为[列表（List）](./list）中的一行，不应用作通用容器。

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