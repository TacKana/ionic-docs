---
title: UI 组件
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>UI 组件 | 用户界面应用构建组件</title>
  <meta
    name="description"
    content="Ionic Framework 内置了许多高级 UI 组件，包括卡片、列表和标签页，可以快速轻松地构建应用的用户界面。"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

Ionic 应用由称为组件的高级构建块组成，这些组件可帮助您快速构建应用的用户界面。Ionic 内置了多种组件，包括卡片、列表和标签页。熟悉基础知识后，请参阅 [API 索引](api.md) 查看每个组件和子组件的完整列表。

<intro-end />

<DocsCards>
<DocsCard header="Accordion" href="api/accordion" img="/icons/feature-component-accordion-icon.png">
  <p>手风琴组件可以在内容中提供可折叠的部分，以减少垂直空间占用，同时提供组织和分组信息的方式。</p>
</DocsCard>

<DocsCard header="Action Sheet" href="api/action-sheet" icon="/icons/component-action-sheet-icon.png">
  <p>操作表组件显示一组选项，用户可以确认或取消某个操作。</p>
</DocsCard>

<DocsCard header="Alert" href="api/alert" icon="/icons/component-alert-icon.png">
  <p>警告框组件非常适合让用户选择特定操作或操作列表。</p>
</DocsCard>

<DocsCard header="Badge" href="api/badge" icon="/icons/component-badge-icon.png">
  <p>徽章组件是一个小型组件，通常用于向用户传达数值信息。</p>
</DocsCard>

<DocsCard header="Breadcrumbs" href="api/breadcrumbs" icon="/icons/component-breadcrumbs-icon.png">
  <p>面包屑导航组件用于指示用户在应用中的当前位置。</p>
</DocsCard>

<DocsCard header="Button" href="api/button" icon="/icons/component-button-icon.png">
  <p>按钮组件让用户可以执行操作。它们是用户与应用交互和导航的主要方式。</p>
</DocsCard>

<DocsCard header="Card" href="api/card" icon="/icons/component-card-icon.png">
  <p>
    卡片组件是展示重要内容的绝佳方式，可以包含图像、按钮、文本等。
  </p>
</DocsCard>

<DocsCard header="Checkbox" href="api/checkbox" icon="/icons/component-checkbox-icon.png">
  <p>复选框组件可用于让用户知道他们需要做出二元选择。</p>
</DocsCard>

<DocsCard header="Chip" href="api/chip" icon="/icons/component-chip-icon.png">
  <p>标签组件是一种紧凑的显示数据或操作的方式。</p>
</DocsCard>

<DocsCard header="Content" href="api/content" icon="/icons/component-content-icon.png">
  <p>内容组件是与应用交互和导航的核心方式。</p>
</DocsCard>

<DocsCard header="Date & Time Pickers" href="api/datetime" img="/icons/feature-component-datetime-icon.png">
  <p>日期和时间选择器组件提供了一个界面，使用户可以轻松选择日期和时间。</p>
</DocsCard>

<DocsCard header="Floating Action Button" href="api/fab" icon="/icons/component-fab-icon.png">
  <p>浮动操作按钮组件是圆形按钮，用于在屏幕上执行主要操作。</p>
</DocsCard>

<DocsCard header="Grid" href="api/grid" icon="/icons/component-grid-icon.png">
  <p>网格组件是一个强大的移动优先系统，用于构建自定义布局。</p>
</DocsCard>

<DocsCard header="Icons" href="api/icon" icon="/icons/component-icons-icon.png">
  <p>精心设计的图标组件，适用于 Web、iOS 和 Android 应用。</p>
</DocsCard>

<DocsCard header="Infinite Scroll" href="api/infinite-scroll" icon="/icons/component-infinitescroll-icon.png">
  <p>无限滚动组件允许在用户滚动应用时加载新数据。</p>
</DocsCard>

<DocsCard header="Inputs" href="api/input" icon="/icons/component-input-icon.png">
  <p>输入组件为用户提供在应用中输入数据的途径。</p>
</DocsCard>

<DocsCard header="Item" href="api/item" img="/icons/feature-component-item-icon.png">
  <p>
    条目组件是可以包含文本、图标、头像、图像、输入框以及任何其他原生或自定义元素的组件。条目可以被滑动、删除、重新排序、编辑等。
  </p>
</DocsCard>

<DocsCard header="List" href="api/list" icon="/icons/component-lists-icon.png">
  <p>列表组件可以显示多行信息，例如联系人列表、播放列表或菜单。</p>
</DocsCard>

<DocsCard header="Media" href="api/avatar" icon="/icons/component-media-icon.png">
  <p>
    媒体组件集合，包括头像、图标、图像和缩略图，旨在增强视觉内容的呈现。
  </p>
</DocsCard>

<DocsCard header="Menu" href="api/menu" icon="/icons/component-menu-icon.png">
  <p>菜单组件是一种常见的导航模式。它们可以永久显示在屏幕上，也可以在需要时显示。</p>
</DocsCard>

<DocsCard header="Modal" href="api/modal" icon="/icons/component-modal-icon.png">
  <p>模态框组件在屏幕上滑入滑出以显示临时用户界面，通常用于登录或注册页面。</p>
</DocsCard>

<DocsCard header="Navigation" href="api/nav" icon="/icons/component-navigation-icon.png">
  <p>导航组件是用户在应用的不同页面之间移动的方式。</p>
</DocsCard>

<DocsCard header="Popover" href="api/popover" icon="/icons/component-popover-icon.png">
  <p>弹出框组件提供了一种无需改变上下文即可展示信息或选项的简便方式。</p>
</DocsCard>

<DocsCard header="Progress Indicators" href="api/progress-bar" icon="/icons/component-progress-icon.png">
  <p>进度指示器组件可视化操作或活动的进度。</p>
</DocsCard>

<DocsCard header="Radio" href="api/radio" icon="/icons/component-radio-icon.png">
  <p>单选框组件允许您呈现一组互斥的选项。</p>
</DocsCard>

<DocsCard header="Range" href="api/range" icon="/icons/component-range-icon.png">
  <p>范围滑块组件允许用户通过沿轨道拖动旋钮来选择值。</p>
</DocsCard>

<DocsCard header="Refresher" href="api/refresher" img="/icons/feature-component-refresher-icon.png">
  <p>下拉刷新组件在内容组件上提供了下拉刷新功能。</p>
</DocsCard>

<DocsCard header="Reorder" href="api/reorder" icon="/icons/component-reorder-icon.png">
  <p>重新排序组件允许用户通过拖放来重新排序项目列表。</p>
</DocsCard>

<DocsCard header="Routing" href="api/router" icon="/icons/component-routing-icon.png">
  <p>路由组件允许基于当前路径进行导航。</p>
</DocsCard>

<DocsCard header="Searchbar" href="api/searchbar" icon="/icons/component-searchbar-icon.png">
  <p>搜索栏组件用于搜索或筛选项目，通常放置在工具栏中。</p>
</DocsCard>

<DocsCard header="Segment" href="api/segment" icon="/icons/component-segment-icon.png">
  <p>分段组件提供了一组互斥的按钮，可用作筛选器或视图切换器。</p>
</DocsCard>

<DocsCard header="Select" href="api/select" icon="/icons/component-select-icon.png">
  <p>选择组件类似于原生 HTML 选择元素，但在排序和选择方面有一些改进。</p>
</DocsCard>

<DocsCard header="Tabs" href="api/tabs" img="/icons/feature-component-tabs-icon.png">
  <p>标签页组件启用标签导航，这是现代应用中的标准导航模式。</p>
</DocsCard>

<DocsCard header="Toast" href="api/toast" icon="/icons/component-toast-icon.png">
  <p>轻提示组件是微妙的通知，出现在应用内容上方而不中断用户交互。</p>
</DocsCard>

<DocsCard header="Toggle" href="api/toggle" icon="/icons/component-toggle-icon.png">
  <p>开关组件是用于二元选项的输入控件，常用于选项和开关。</p>
</DocsCard>

<DocsCard header="Toolbar" href="api/toolbar" icon="/icons/component-toolbar-icon.png">
  <p>工具栏组件用于放置与应用相关的信息和操作。</p>
</DocsCard>

<DocsCard header="Typography" href="api/text" icon="/icons/component-typography-icon.png">
  <p>文本组件用于在应用程序中设置文本样式或更改文本颜色。</p>
</DocsCard>
</DocsCards>