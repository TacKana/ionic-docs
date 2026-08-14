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
  <title>ion-item：iOS 和 Android 项目元素的输入、编辑或删除</title>
  <meta
    name="description"
    content="ion-item 元素用于 iOS/Android，包含文本、图标、图像和其他自定义元素。它们放置在列表中，可以进行输入、删除、编辑等操作。"
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

项目（Item）是可以包含文本、图标、头像、图像、输入以及任何其他原生或自定义元素的元素。项目只应作为[列表](./list)中的行与其他项目一起使用。项目可以进行滑动、删除、重新排序、编辑等操作。

## 基本用法

项目左对齐文本，当文本比项目宽时自动换行。我们可以使用 Ionic 框架提供的 CSS 工具来修改此行为，例如在下面的示例中使用 `.ion-text-nowrap`。请参阅[CSS 工具文档](/layout/css-utilities)了解可以添加到项目以转换文本的更多类。

import Basic from '@site/static/usage/v7/item/basic/index.md';

<Basic />

## 内容类型

虽然列表中的项目有多种形式，但它们通常支持 5 种不同的内容类型：辅助视觉元素、文本、元数据、操作和控件。但是，并非所有这些内容类型都应同时使用。以下指南展示了不同的内容类型以及如何在应用中正确使用它们。

### 辅助视觉元素

辅助视觉元素是项目的装饰性图标或其他装饰。常见的辅助视觉元素示例包括[头像](./avatar)、[图标](./icon)和[缩略图](./thumbnail)。由于这些内容不是理解项目意图所必需的，因此通常会使用 `aria-hidden="true"` 对屏幕阅读器隐藏。

如果视觉元素需要与项目交互（如图标按钮），则该视觉元素是[操作](#操作)而不是辅助视觉元素。

<BestPracticeFigure
  text="辅助视觉元素应以一致的方式渲染。这使每个项目中的信息更易于解析。"
  doText="在列表中将对齐视觉元素放在同一侧"
  doNotText="不要在同一个列表中以不同的对齐方式渲染视觉元素"
  doImage={
    <img
      alt="包含多个项目的列表。每个项目有一个图标和描述项目的可见文本。每个项目中的图标渲染在行的开头。"
      src={useBaseUrl('img/item/visuals-do.jpg')}
    />
  }
  doNotImage={
    <img
      alt="包含多个项目的列表。每个项目有一个图标和描述项目的可见文本。有些图标渲染在行的开头，有些图标渲染在行的末尾。"
      src={useBaseUrl('img/item/visuals-do-not.jpg')}
    />
  }
/>

在下面的示例中，我们创建了两个带有辅助视觉元素的列表。第一个列表使用图标，第二个列表使用头像。视觉元素是装饰性的，因此它们都有 `aria-hidden="true"`。此外，它们一致地呈现在 `start` 插槽中。

import SupportingVisuals from '@site/static/usage/v7/item/content-types/supporting-visuals/index.md';

<SupportingVisuals />

### 文本

文本内容类型包括表单控件标签或其他可见文本。此文本用于指示项目的用途。尽量保持文本简短明了。

<BestPracticeFigure
  text={
    <>
      如果你发现需要再多写几句话来说明项目的用途，请考虑将额外的句子移到列表底部的<a href={useBaseUrl('api/note')}>注释（Note）</a>中。将项目放在自己的列表中可以清楚地显示文本与哪个项目相关联。
    </>
  }
  doText="将长文本移到列表外部"
  doNotText="不要试图在项目中放置长文本"
  doImage={
    <img
      alt="一个列表，其中包含一个带有已选中复选框的项目，表示用户希望接收邮件。描述用户接收邮件频率以及如何退订邮件的文本放在列表下方。"
      src={useBaseUrl('img/item/long-text-do.jpg')}
    />
  }
  doNotImage={
    <img
      alt="一个列表，其中包含一个带有已选中复选框的项目，表示用户希望接收邮件。描述用户接收邮件频率以及如何退订邮件的文本作为一个段落与复选框内联放置，使文本难以阅读并增加了项目的高度。"
      src={useBaseUrl('img/item/long-text-do-not.jpg')}
    />
  }
/>

在下面的示例中，我们创建了一个包含不同类型文本的列表。"First Name"和"Last Name"标签用于指示在文本输入框中输入什么内容。

切换开关上的"Allow Notifications"标签下方有额外的文本，说明用户可以禁用通知。由于这段文本很短，所以放在项目内部。

该列表下方是另一个列表，其中包含一个 textarea，下方有包含长文本的[注释（Note）](./note)。textarea 被放在自己的列表中，以清楚地表明长文本与 textarea 相关联，而不是其他字段。

import Text from '@site/static/usage/v7/item/content-types/text/index.md';

<Text />

### 元数据

元数据为项目提供额外的上下文，例如状态文本或计数。像[徽章（Badge）](./badge)或[注释（Note）](./note)这样的组件是显示元数据的好方法。

<BestPracticeFigure
  text="限制你包含的元数据量，只包含最相关的信息。"
  doText="只添加最重要的元数据"
  doNotText="不要添加太多元数据，这可能会让用户不知所措或感到困惑。"
  doImage={
    <img
      alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项列表。每个项目末尾放置了每个待办事项列表中的任务数量计数。"
      src={useBaseUrl('img/item/metadata-relevant-do.jpg')}
    />
  }
  doNotImage={
    <img
      alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项列表。每个项目末尾放置了两个计数：一个计数表示任务总数，另一个计数表示今天到期的任务数量。"
      src={useBaseUrl('img/item/metadata-relevant-do-not.jpg')}
    />
  }
/>

<BestPracticeFigure
  text="开发者还应该考虑元数据的重要性。吸引用户注意元数据可能对用户有帮助，也可能分散他们对更重要信息的注意力，具体取决于用例。"
  doText="优先展示最重要的内容。"
  cautionText="优先显示的元数据可能会分散用户对其他重要内容的注意力。"
  doImage={
    <img
      alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项列表。每个项目末尾放置了每个待办事项列表中的任务数量计数。"
      src={useBaseUrl('img/item/metadata-relevant-do.jpg')}
    />
  }
  cautionImage={
    <img
      alt="一个包含多个项目的列表，每个项目代表一个不同的待办事项列表。每个项目末尾放置了每个待办事项列表中的任务数量计数。然而，该计数以蓝色高亮显示，将用户的注意力从待办事项列表的名称上移开。"
      src={useBaseUrl('img/item/metadata-important-caution.jpg')}
    />
  }
/>

在下面的示例中，我们创建了两个带有不同类型元数据的列表。第一个列表使用[注释（Note）](./note)来显示每个待办事项列表中有多少个任务。

第二个列表模仿 iOS Mail 应用程序显示收件箱。这个列表使用了自定义元数据，包括"start"插槽中的"未读消息"指示器，以及"end"插槽中的时间戳和自定义详细信息图标。"未读消息"指示器以蓝色高亮显示，以吸引用户注意未读消息，而时间戳则更为微妙。

import Metadata from '@site/static/usage/v7/item/content-types/metadata/index.md';

<Metadata />

### 操作

操作是交互式元素，激活时会执行某些操作。一个项目可以在同一行上显示多个操作。但是，开发者应确保每个操作的点击目标足够大以便使用。

开发者应避免创建可能破坏屏幕阅读器用户体验的<a href="https://dequeuniversity.com/rules/axe/4.4/nested-interactive">嵌套交互元素</a>。例如，如果 `button` 属性设置为 `true`，开发者应避免在项目主要内容内部添加按钮。

<BestPracticeFigure
  text={
    <>
      操作可以通过使用<a href={useBaseUrl('api/item-sliding')}>项目滑动（Item Sliding）</a>组件来添加。操作也可以直接放置在项目内部而不使用项目滑动，但这应限制在不超过 2 个操作。
    </>
  }
  doText={
    <>
      使用<a href={useBaseUrl('api/item-sliding')}>项目滑动（Item Sliding）</a>通过滑动项目来显示多个操作。
    </>
  }
  doNotText="不要在项目内放置超过 2 个操作。"
  doImage={
    <img
      alt="一个包含多个项目的列表，每个项目代表一个联系人。每个项目有显示联系人姓名的文本以及多个操作，包括固定联系人、分享联系人和删除联系人。这些操作通过滑动项目来显示。"
      src={useBaseUrl('img/item/actions-do.jpg')}
    />
  }
  doNotImage={
    <img
      alt="一个包含多个项目的列表，每个项目代表一个联系人。每个项目有显示联系人姓名的文本以及多个操作，包括固定联系人、分享联系人和删除联系人。操作直接放置在项目上。由于操作太多，部分文本被截断。"
      src={useBaseUrl('img/item/actions-do-not.jpg')}
    />
  }
/>

在下面的示例中，我们创建了一个联系人列表。每个项目是一个存根按钮，旨在带你进入该项目的完整联系人页面。每个项目还有额外的关联操作，用户可以通过滑动项目来显示。

import Actions from '@site/static/usage/v7/item/content-types/actions/index.md';

<Actions />

### 控件

控件是表单组件，如复选框、输入、单选按钮等。由于屏幕空间限制，列表中的每个项目最多应有 2 个控件。

<BestPracticeFigure
  text={
    <>
      列表视图中的表单控件不应使用帮助文本或字符计数等元数据。如果需要此类元数据，表单控件应放置在列表外部。<a href={useBaseUrl('/v7/api/input#填充样式输入')}>填充输入（Filled Inputs）</a>是在列表外部可视化定义输入容器的好方法。
    </>
  }
  doText="将带有元数据的输入放在列表外部。"
  doNotText="不要将输入的元数据放在列表中。"
  doImage={
    <img
      alt="有一个电子邮件输入和一个密码输入。两者都有相关的帮助文本。由于两者都放在列表外部，因此可以清楚地知道每个帮助文本与哪个输入相关联。"
      src={useBaseUrl('img/item/controls-metadata-list-do.jpg')}
    />
  }
  doNotImage={
    <img
      alt="有一个包含电子邮件输入和密码输入的列表。两者都有相关的帮助文本。然而，每个项目之间的分隔线以及帮助文本使得难以判断每个帮助文本与哪个输入相关联。"
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
  doText="将输入的元数据放在列表末尾。"
  doNotText="不要将输入的元数据放在列表中。"
  doImage={
    <img
      alt="有两个输入列表。第一个列表包含一个密码输入。该列表下方有文本显示'密码必须至少 16 个字符'。第二个列表包含一个电子邮件输入。这个第二个列表是分开的，因此密码长度要求文本清楚地与上面的密码输入相关联。"
      src={useBaseUrl('img/item/controls-metadata-do.jpg')}
    />
  }
  doNotImage={
    <img
      alt="有一个输入列表。其中一个输入是密码输入，输入下方有文本显示'密码必须至少 16 个字符'。然而，这段文本直接放置在另一个输入上方，因此不能立即清楚该文本与哪个输入相关联。"
      src={useBaseUrl('img/item/controls-metadata-do-not.jpg')}
    />
  }
/>

<BestPracticeFigure
  text={
    <>
      项目通常不应超过两个控件。如果需要更多控件，请考虑在可从项目访问的<a href={useBaseUrl('api/modal')}>模态框（Modal）</a>中添加额外的控件。
    </>
  }
  doText="将额外的控件移到可从项目访问的子菜单中。"
  doNotText="不要在项目中使用超过两个控件。"
  doImage={
    <img
      alt="有一个输入列表。其中一个输入是密码输入，输入下方有文本显示'密码必须至少 16 个字符'。然而，这段文本直接放置在另一个输入上方，因此不能立即清楚该文本与哪个输入相关联。"
      src={useBaseUrl('img/item/controls-count-do.jpg')}
    />
  }
  doNotImage={
    <img
      alt="有两个输入列表。第一个列表包含一个密码输入。该列表下方有文本显示'密码必须至少 16 个字符'。第二个列表包含一个电子邮件输入。这个第二个列表是分开的，因此密码长度要求文本清楚地与上面的密码输入相关联。"
      src={useBaseUrl('img/item/controls-count-do-not.jpg')}
    />
  }
/>

在下面的示例中，我们创建了一个待办任务列表。每个项目有一个复选框和一个输入。复选框让用户将任务标记为完成，输入让用户更改任务的名称。

import Controls from '@site/static/usage/v7/item/content-types/controls/index.md';

<Controls />

## 可点击项目

如果项目设置了 `href` 或 `button` 属性，则视为"可点击"。可点击项目有一些视觉差异，表明它们可以进行交互。例如，可点击项目在 `md` 模式下激活时会呈现涟漪效果，在 `ios` 模式下激活时会有高亮效果，并且在 `ios` 模式下默认有[详细信息箭头](#详细信息箭头)。

import Clickable from '@site/static/usage/v7/item/clickable/index.md';

<Clickable />

## 详细信息箭头

默认情况下，[可点击项目](#可点击项目)在 `ios` 模式下会显示右箭头图标。要在可点击元素上隐藏右箭头图标，请将 `detail` 属性设置为 `false`。要在不会自然显示右箭头的项目上显示右箭头图标，请将 `detail` 属性设置为 `true`。

import DetailArrows from '@site/static/usage/v7/item/detail-arrows/index.md';

<DetailArrows />

## 项目线条

默认情况下，项目显示带有缩进的底部边框。边框在左侧有内边距，并且不会出现在任何 slot 为 `"start"` 的内容下方。`lines` 属性可以修改为 `"full"` 或 `"none"`，这将分别显示全宽边框或无边框。

import Lines from '@site/static/usage/v7/item/lines/index.md';

<Lines />

## 项目中的按钮

项目内部的按钮样式比外部按钮小。要使按钮尺寸与项目外部的按钮匹配，请将 `size` 属性设置为 `"default"`。

import Buttons from '@site/static/usage/v7/item/buttons/index.md';

<Buttons />

## 项目输入

import Inputs from '@site/static/usage/v7/item/inputs/index.md';

<Inputs />

## 主题

### 颜色

import Colors from '@site/static/usage/v7/item/theming/colors/index.md';

<Colors />

### CSS 阴影部分

import CSSParts from '@site/static/usage/v7/item/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS 自定义属性

import CSSProps from '@site/static/usage/v7/item/theming/css-properties/index.md';

<CSSProps />

## 指南

以下指南将有助于确保你的列表项目易于理解和使用。

1. 项目只应在[列表（List）](./list)内部使用。
2. 列表中的项目应以一致的格式呈现。例如，如果你的项目显示装饰性图标，图标应在项目之间的位置保持一致。
3. 项目永远不应渲染[嵌套交互元素](https://dequeuniversity.com/rules/axe/4.4/nested-interactive)。使用嵌套交互元素时，屏幕阅读器无法选择正确的交互元素。例如，避免将按钮放置在设置了 `button="true"` 的 `ion-item` 内部。
4. 正确使用[内容类型](#内容类型)。Item 组件被设计为[列表（List）](./list)中的行，不应作为通用容器使用。

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
