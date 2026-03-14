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
    content="Ionic Framework 内置了大量高级 UI 组件，包括卡片、列表和选项卡，可帮助您快速轻松地构建应用程序的用户界面。"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

Ionic 应用由称为组件的高级构建块组成，这些组件可帮助您快速构建应用的用户界面。Ionic 内置了大量组件，包括卡片、列表和选项卡。熟悉基础知识后，请查阅 [API 索引](api.md) 以获取每个组件及其子组件的完整列表。

<intro-end />

<DocsCards>
  <DocsCard header="操作表 (Action Sheet)" href="api/action-sheet" img="/icons/feature-component-actionsheet-icon.png">
    <p>操作表可显示一组选项，并允许用户确认或取消某个操作。</p>
  </DocsCard>

<DocsCard header="警告框 (Alert)" href="api/alert" icon="/icons/component-alert-icon.png">
  <p>警告框是一种向用户提供特定操作或操作列表选择的好方法。</p>
</DocsCard>

<DocsCard header="徽章 (Badge)" href="api/badge" icon="/icons/component-badge-icon.png">
  <p>徽章是一种小型组件，通常用于向用户传达数值信息。</p>
</DocsCard>

<DocsCard header="按钮 (Button)" href="api/button" icon="/icons/component-button-icon.png">
  <p>按钮让用户可以执行操作，是与应用交互和导航的基本方式。</p>
</DocsCard>

<DocsCard header="卡片 (Card)" href="api/card" icon="/icons/component-card-icon.png">
  <!-- prettier-ignore -->
  <p>卡片是展示重要内容的好方法，可以包含图像、按钮、文本等。</p>
</DocsCard>

<DocsCard header="复选框 (Checkbox)" href="api/checkbox" icon="/icons/component-checkbox-icon.png">
  <p>复选框可用于告知用户需要做出二元决策。</p>
</DocsCard>

<DocsCard header="标签 (Chip)" href="api/chip" icon="/icons/component-chip-icon.png">
  <p>标签是显示数据或操作的紧凑方式。</p>
</DocsCard>

<DocsCard header="内容区域 (Content)" href="api/content" icon="/icons/component-content-icon.png">
  <p>内容区域是与应用交互和导航的核心方式。</p>
</DocsCard>

<DocsCard header="日期与时间选择器 (Date & Time Pickers)" href="api/datetime" icon="/icons/component-datetimepicker-icon.png">
  <p>日期和时间选择器用于呈现便于用户选择日期和时间的界面。</p>
</DocsCard>

<DocsCard header="浮动操作按钮 (Floating Action Button)" href="api/fab" icon="/icons/component-fab-icon.png">
  <p>浮动操作按钮是执行屏幕主要操作的圆形按钮。</p>
</DocsCard>

<DocsCard header="图标 (Icons)" href="api/icon" img="/icons/feature-component-icons-icon.png">
  <p>精心设计的图标，适用于 Web、iOS、Android 和桌面应用。</p>
</DocsCard>

<DocsCard header="网格 (Grid)" href="api/grid" icon="/icons/component-grid-icon.png">
  <p>网格是一个强大的移动优先系统，用于构建自定义布局。</p>
</DocsCard>

<DocsCard header="无限滚动 (Infinite Scroll)" href="api/infinite-scroll" icon="/icons/component-infinitescroll-icon.png">
  <p>无限滚动允许在用户滚动浏览应用时加载新数据。</p>
</DocsCard>

<DocsCard header="输入框 (Input)" href="api/input" icon="/icons/component-input-icon.png">
  <p>输入框为用户提供在应用中输入数据的方式。</p>
</DocsCard>

<DocsCard header="项目 (Item)" href="api/item" icon="/icons/component-item-icon.png">
  <p>项目是一种多用途 UI 容器，可作为列表的一部分使用。</p>
</DocsCard>

<DocsCard header="列表 (List)" href="api/list" icon="/icons/component-lists-icon.png">
  <p>列表可以显示信息行，如联系人列表、播放列表或菜单。</p>
</DocsCard>

<DocsCard header="导航 (Navigation)" href="api/nav" img="/icons/feature-component-navigation-icon.png">
  <p>导航是用户在应用中不同页面间移动的方式。</p>
</DocsCard>

<DocsCard header="菜单 (Menu)" href="api/menu" icon="/icons/component-menu-icon.png">
  <p>菜单是一种常见的导航模式，可以永久显示在屏幕上，也可以在需要时显示。</p>
</DocsCard>

<DocsCard header="模态框 (Modal)" href="api/modal" icon="/icons/component-modal-icon.png">
  <p>模态框从屏幕外滑入以显示临时 UI，通常用于登录或注册页面。</p>
</DocsCard>

<DocsCard header="弹出框 (Popover)" href="api/popover" icon="/icons/component-popover-icon.png">
  <p>弹出框提供了一种无需改变上下文即可呈现信息或选项的简便方法。</p>
</DocsCard>

<DocsCard header="进度指示器 (Progress Indicators)" href="api/progress-bar" icon="/icons/component-progress-icon.png">
  <p>进度指示器可视化操作或活动的进展。</p>
</DocsCard>

<DocsCard header="单选框 (Radio)" href="api/radio" icon="/icons/component-radio-icon.png">
  <p>单选框输入允许呈现一组互斥的选项。</p>
</DocsCard>

<DocsCard header="下拉刷新 (Refresher)" href="api/refresher" icon="/icons/component-refresher-icon.png">
  <p>下拉刷新在内容组件上提供下拉刷新功能。</p>
</DocsCard>

<DocsCard header="搜索栏 (Searchbar)" href="api/searchbar" img="/icons/feature-component-search-icon.png">
  <p>搜索栏用于搜索或筛选项目，通常位于工具栏中。</p>
</DocsCard>

<DocsCard header="重新排序 (Reorder)" href="api/reorder" icon="/icons/component-reorder-icon.png">
  <p>重新排序允许用户拖放以重新排列项目列表。</p>
</DocsCard>

<DocsCard header="路由 (Routing)" href="api/router" icon="/icons/component-routing-icon.png">
  <p>路由允许基于当前路径进行导航。</p>
</DocsCard>

<DocsCard header="分段控件 (Segment)" href="api/segment" icon="/icons/component-segment-icon.png">
  <p>分段控件提供一组互斥的按钮，可用作过滤器或视图切换器。</p>
</DocsCard>

<DocsCard header="选择器 (Select)" href="api/select" icon="/icons/component-select-icon.png">
  <p>选择器类似于原生 HTML 选择器，但在排序和选择方面有所改进。</p>
</DocsCard>

<DocsCard header="选项卡 (Tabs)" href="api/tabs" img="/icons/feature-component-tabs-icon.png">
  <p>选项卡实现选项卡式导航，这是现代应用中的标准导航模式。</p>
</DocsCard>

<DocsCard header="轻提示 (Toast)" href="api/toast" icon="/icons/component-toast-icon.png">
  <p>轻提示用于在应用内容上方显示通知，可以是临时的或可关闭的。</p>
</DocsCard>

<DocsCard header="开关 (Toggle)" href="api/toggle" icon="/icons/component-toggle-icon.png">
  <p>开关是用于二元选项的输入控件，常用于选项和切换开关。</p>
</DocsCard>

  <DocsCard header="工具栏 (Toolbar)" href="api/toolbar" icon="/icons/component-toolbar-icon.png">
    <p>工具栏用于容纳与应用相关的信息和操作。</p>
  </DocsCard>
</DocsCards>