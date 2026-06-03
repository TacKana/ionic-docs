---
title: UI 组件
description: Ionic Framework 内置了许多高级 UI 组件，包括卡片、列表和标签页，可快速轻松地构建应用的用户界面。
hide_table_of_contents: true
---

<head>
  <title>UI 组件 | 用户界面应用构建组件</title>
  <meta
    name="description"
    content="Ionic Framework 内置了许多高级 UI 组件，包括卡片、列表和标签页，可快速轻松地构建应用的用户界面。"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Ionic 应用由称为"组件"的高级构建块组成，它们允许您快速构建应用的 UI。Ionic 内置了许多组件，包括卡片、列表和标签页。熟悉基础知识后，请参考 [API 索引](api.md)获取每个组件及其子组件的完整列表。

<intro-end />

<DocsCards>
  <DocsCard header="操作面板 (Action Sheet)" href="api/action-sheet" img="/icons/feature-component-actionsheet-icon.png">
    <p>操作面板显示一组选项，可以确认或取消某个操作。</p>
  </DocsCard>

<DocsCard header="警告框 (Alert)" href="api/alert" icon="/icons/component-alert-icon.png">
  <p>警告框是为用户提供选择特定操作或操作列表的绝佳方式。</p>
</DocsCard>

<DocsCard header="徽章 (Badge)" href="api/badge" icon="/icons/component-badge-icon.png">
  <p>徽章是一种小组件，通常用于向用户传达数值信息。</p>
</DocsCard>

<DocsCard header="按钮 (Button)" href="api/button" icon="/icons/component-button-icon.png">
  <p>按钮让您的用户进行操作。它们是与应用交互和导航的重要方式。</p>
</DocsCard>

<DocsCard header="卡片 (Card)" href="api/card" icon="/icons/component-card-icon.png">
  <!-- prettier-ignore -->
  <p>卡片是展示重要内容的绝佳方式，可以包含图片、按钮、文本等。</p>
</DocsCard>

<DocsCard header="复选框 (Checkbox)" href="api/checkbox" icon="/icons/component-checkbox-icon.png">
  <p>复选框可用于让用户知道他们需要做出二元选择。</p>
</DocsCard>

<DocsCard header="纸片 (Chip)" href="api/chip" icon="/icons/component-chip-icon.png">
  <p>纸片是一种展示数据或操作的紧凑方式。</p>
</DocsCard>

<DocsCard header="内容 (Content)" href="api/content" icon="/icons/component-content-icon.png">
  <p>内容是与应用交互和导航的典型方式。</p>
</DocsCard>

<DocsCard header="日期和时间选择器" href="api/datetime" icon="/icons/component-datetimepicker-icon.png">
  <p>日期和时间选择器用于提供一种界面，让用户可以轻松选择日期和时间。</p>
</DocsCard>

<DocsCard header="浮动操作按钮 (FAB)" href="api/fab" icon="/icons/component-fab-icon.png">
  <p>浮动操作按钮是在屏幕上执行主要操作的圆形按钮。</p>
</DocsCard>

<DocsCard header="图标 (Icons)" href="https://ionic.io/ionicons" img="/icons/feature-component-icons-icon.png">
  <p>专为 Web、iOS、Android 和桌面应用设计的美观图标。</p>
</DocsCard>

<DocsCard header="网格 (Grid)" href="api/grid" icon="/icons/component-grid-icon.png">
  <p>网格是一个强大的移动优先系统，用于构建自定义布局。</p>
</DocsCard>

<DocsCard header="无限滚动 (Infinite Scroll)" href="api/infinite-scroll" icon="/icons/component-infinitescroll-icon.png">
  <p>无限滚动允许您在用户滚动应用时加载新数据。</p>
</DocsCard>

<DocsCard header="输入框 (Input)" href="api/input" icon="/icons/component-input-icon.png">
  <p>输入框为用户提供在应用中输入数据的方式。</p>
</DocsCard>

<DocsCard header="列表项 (Item)" href="api/item" icon="/icons/component-item-icon.png">
  <p>列表项是一种多用途 UI 容器，可用作列表的一部分。</p>
</DocsCard>

<DocsCard header="列表 (List)" href="api/list" icon="/icons/component-lists-icon.png">
  <p>列表可以显示信息行，如联系人列表、播放列表或菜单。</p>
</DocsCard>

<DocsCard header="导航 (Navigation)" href="api/nav" img="/icons/feature-component-navigation-icon.png">
  <p>导航是用户在不同页面之间移动的方式。</p>
</DocsCard>

<DocsCard header="菜单 (Menu)" href="api/menu" icon="/icons/component-menu-icon.png">
  <p>菜单是一种常见的导航模式。它们可以永久显示在屏幕上，或在需要时显示出来。</p>
</DocsCard>

<DocsCard header="模态框 (Modal)" href="api/modal" icon="/icons/component-modal-icon.png">
  <p>模态框滑入和滑出屏幕以显示临时 UI，通常用于登录或注册页面。</p>
</DocsCard>

<DocsCard header="弹出框 (Popover)" href="api/popover" icon="/icons/component-popover-icon.png">
  <p>弹出框提供了一种无需切换上下文即可呈现信息或选项的简便方法。</p>
</DocsCard>

<DocsCard header="进度指示器 (Progress Indicators)" href="api/progress-bar" icon="/icons/component-progress-icon.png">
  <p>进度指示器可视化操作或活动的进度。</p>
</DocsCard>

<DocsCard header="单选按钮 (Radio)" href="api/radio" icon="/icons/component-radio-icon.png">
  <p>单选输入允许您呈现一组互斥的选项。</p>
</DocsCard>

<DocsCard header="刷新器 (Refresher)" href="api/refresher" icon="/icons/component-refresher-icon.png">
  <p>刷新器在内容组件上提供下拉刷新功能。</p>
</DocsCard>

<DocsCard header="搜索栏 (Searchbar)" href="api/searchbar" img="/icons/feature-component-search-icon.png">
  <p>搜索栏用于搜索或过滤项目，通常位于工具栏中。</p>
</DocsCard>

<DocsCard header="重新排序 (Reorder)" href="api/reorder" icon="/icons/component-reorder-icon.png">
  <p>重新排序让用户可以通过拖放对项目列表进行重新排序。</p>
</DocsCard>

<DocsCard header="路由 (Routing)" href="api/router" icon="/icons/component-routing-icon.png">
  <p>路由允许基于当前路径进行导航。</p>
</DocsCard>

<DocsCard header="分段 (Segment)" href="api/segment" icon="/icons/component-segment-icon.png">
  <p>分段提供一组互斥的按钮，可用作过滤器或视图切换器。</p>
</DocsCard>

<DocsCard header="选择器 (Select)" href="api/select" icon="/icons/component-select-icon.png">
  <p>选择器类似于原生 HTML 的 select，在排序和选择方面进行了一些改进。</p>
</DocsCard>

<DocsCard header="幻灯片 (Slides)" href="api/slides" icon="/icons/component-slides-icon.png">
  <p>幻灯片使得创建复杂的 UI（如画廊、教程和基于页面的布局）变得容易。</p>
</DocsCard>

<DocsCard header="标签页 (Tabs)" href="api/tabs" img="/icons/feature-component-tabs-icon.png">
  <p>标签页实现标签式导航，这是现代应用中的标准导航模式。</p>
</DocsCard>

<DocsCard header="提示条 (Toast)" href="api/toast" icon="/icons/component-toast-icon.png">
  <p>提示条用于在应用内容之上显示通知。它可以是临时的或可关闭的。</p>
</DocsCard>

<DocsCard header="开关 (Toggle)" href="api/toggle" icon="/icons/component-toggle-icon.png">
  <p>开关是用于二元选项的输入组件，常用于选项和开关设置。</p>
</DocsCard>

  <DocsCard header="工具栏 (Toolbar)" href="api/toolbar" icon="/icons/component-toolbar-icon.png">
    <p>工具栏用于放置与您的应用相关的信息和操作。</p>
  </DocsCard>
</DocsCards>
