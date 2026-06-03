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
    content="Ionic Framework 内置了许多高级 UI 组件，包括卡片、列表和标签页，可帮助你快速轻松地构建应用的用户界面。"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

Ionic 应用由称为组件的高级构建块构成，它们允许你快速构建应用的 UI。Ionic 内置了许多组件，包括卡片、列表和标签页。熟悉基础知识后，请参考 [API 索引](api.md)获取每个组件和子组件的完整列表。

<intro-end />

<DocsCards>
  <DocsCard header="操作面板" href="api/action-sheet" img="/icons/feature-component-actionsheet-icon.png">
    <p>操作面板显示一组选项，允许用户确认或取消某个操作。</p>
  </DocsCard>

<DocsCard header="Alert" href="api/alert" icon="/icons/component-alert-icon.png">
  <p>Alert 是让用户选择特定操作或操作列表的好方法。</p>
</DocsCard>

<DocsCard header="Badge" href="api/badge" icon="/icons/component-badge-icon.png">
  <p>Badge 是一种小型组件，通常用于向用户传达数值信息。</p>
</DocsCard>

<DocsCard header="Button" href="api/button" icon="/icons/component-button-icon.png">
  <p>Button 让你的用户能够执行操作。它们是与应用交互和导航的重要方式。</p>
</DocsCard>

<DocsCard header="Card" href="api/card" icon="/icons/component-card-icon.png">
  <!-- prettier-ignore -->
  <p>Card 是展示重要内容的好方法，可以包含图片、按钮、文本等。</p>
</DocsCard>

<DocsCard header="Checkbox" href="api/checkbox" icon="/icons/component-checkbox-icon.png">
  <p>Checkbox 可用于让用户知道他们需要做出二元选择。</p>
</DocsCard>

<DocsCard header="Chip" href="api/chip" icon="/icons/component-chip-icon.png">
  <p>Chip 是一种显示数据或操作的紧凑方式。</p>
</DocsCard>

<DocsCard header="Content" href="api/content" icon="/icons/component-content-icon.png">
  <p>Content 是与应用交互和导航的基本方式。</p>
</DocsCard>

<DocsCard header="日期时间选择器" href="api/datetime" icon="/icons/component-datetimepicker-icon.png">
  <p>日期时间选择器用于提供界面，让用户可以轻松选择日期和时间。</p>
</DocsCard>

<DocsCard header="浮动操作按钮" href="api/fab" icon="/icons/component-fab-icon.png">
  <p>浮动操作按钮是执行屏幕主要操作的圆形按钮。</p>
</DocsCard>

<DocsCard header="图标" href="api/icon" img="/icons/feature-component-icons-icon.png">
  <p>设计精美的图标，适用于 Web、iOS、Android 和桌面应用。</p>
</DocsCard>

<DocsCard header="Grid" href="api/grid" icon="/icons/component-grid-icon.png">
  <p>Grid 是一个强大的移动优先系统，用于构建自定义布局。</p>
</DocsCard>

<DocsCard header="Infinite Scroll" href="api/infinite-scroll" icon="/icons/component-infinitescroll-icon.png">
  <p>Infinite Scroll 允许你在用户滚动应用时加载新数据。</p>
</DocsCard>

<DocsCard header="Input" href="api/input" icon="/icons/component-input-icon.png">
  <p>Input 为用户提供在应用中输入数据的方式。</p>
</DocsCard>

<DocsCard header="Item" href="api/item" icon="/icons/component-item-icon.png">
  <p>Item 是一种多功能 UI 容器，可用作列表的一部分。</p>
</DocsCard>

<DocsCard header="List" href="api/list" icon="/icons/component-lists-icon.png">
  <p>List 可以显示信息行，如联系人列表、播放列表或菜单。</p>
</DocsCard>

<DocsCard header="导航" href="api/nav" img="/icons/feature-component-navigation-icon.png">
  <p>Navigation 是用户在应用不同页面之间移动的方式。</p>
</DocsCard>

<DocsCard header="Menu" href="api/menu" icon="/icons/component-menu-icon.png">
  <p>Menu 是一种常见的导航模式。它们可以永久显示在屏幕上，或在需要时打开。</p>
</DocsCard>

<DocsCard header="Modal" href="api/modal" icon="/icons/component-modal-icon.png">
  <p>Modal 从屏幕滑入滑出以显示临时 UI，通常用于登录或注册页面。</p>
</DocsCard>

<DocsCard header="Popover" href="api/popover" icon="/icons/component-popover-icon.png">
  <p>Popover 提供了一种无需切换上下文即可呈现信息或选项的简便方式。</p>
</DocsCard>

<DocsCard header="进度指示器" href="api/progress-bar" icon="/icons/component-progress-icon.png">
  <p>进度指示器可视化显示操作或活动的进展情况。</p>
</DocsCard>

<DocsCard header="Radio" href="api/radio" icon="/icons/component-radio-icon.png">
  <p>Radio 输入允许你呈现一组互斥的选项。</p>
</DocsCard>

<DocsCard header="Refresher" href="api/refresher" icon="/icons/component-refresher-icon.png">
  <p>Refresher 在内容组件上提供下拉刷新功能。</p>
</DocsCard>

<DocsCard header="Searchbar" href="api/searchbar" img="/icons/feature-component-search-icon.png">
  <p>Searchbar 用于搜索或筛选项目，通常位于工具栏中。</p>
</DocsCard>

<DocsCard header="Reorder" href="api/reorder" icon="/icons/component-reorder-icon.png">
  <p>Reorder 允许用户通过拖放来重新排序列表项。</p>
</DocsCard>

<DocsCard header="路由" href="api/router" icon="/icons/component-routing-icon.png">
  <p>Routing 允许基于当前路径进行导航。</p>
</DocsCard>

<DocsCard header="Segment" href="api/segment" icon="/icons/component-segment-icon.png">
  <p>Segment 提供一组互斥的按钮，可用作筛选器或视图切换器。</p>
</DocsCard>

<DocsCard header="Select" href="api/select" icon="/icons/component-select-icon.png">
  <p>Select 类似于原生 HTML select，但在排序和选择方面有一些改进。</p>
</DocsCard>

<DocsCard header="标签页" href="api/tabs" img="/icons/feature-component-tabs-icon.png">
  <p>Tabs 支持标签页导航，这是现代应用中的标准导航模式。</p>
</DocsCard>

<DocsCard header="Toast" href="api/toast" icon="/icons/component-toast-icon.png">
  <p>Toast 用于在应用内容上方显示通知。它可以临时显示或可关闭。</p>
</DocsCard>

<DocsCard header="Toggle" href="api/toggle" icon="/icons/component-toggle-icon.png">
  <p>Toggle 是用于二元选项的输入组件，常用于选项和开关。</p>
</DocsCard>

  <DocsCard header="Toolbar" href="api/toolbar" icon="/icons/component-toolbar-icon.png">
    <p>Toolbar 用于存放与你的应用相关的信息和操作。</p>
  </DocsCard>
</DocsCards>
