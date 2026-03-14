---
title: UI 组件
description: Ionic Framework 内置了多种高级 UI 组件，包括卡片、列表和标签页，可帮助您快速轻松地构建应用程序的用户界面。
hide_table_of_contents: true
---

<head>
  <title>UI 组件 | 用户界面应用程序构建组件</title>
  <meta
    name="description"
    content="Ionic Framework 内置了多种高级 UI 组件，包括卡片、列表和标签页，可帮助您快速轻松地构建应用程序的用户界面。"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

Ionic 应用程序由称为组件的高级构建块组成，这些组件可让您快速构建应用程序的用户界面。Ionic 内置了多种组件，包括卡片、列表和标签页。熟悉基础知识后，请参考 [API 索引](api.md) 获取每个组件及其子组件的完整列表。

<intro-end />

<DocsCards>
  <DocsCard header="操作表" href="api/action-sheet" img="/icons/feature-component-actionsheet-icon.png">
    <p>操作表显示一组选项，并允许用户确认或取消操作。</p>
  </DocsCard>

<DocsCard header="警告框" href="api/alert" icon="/icons/component-alert-icon.png">
  <p>警告框是向用户提供选择特定操作或一系列操作能力的绝佳方式。</p>
</DocsCard>

<DocsCard header="徽章" href="api/badge" icon="/icons/component-badge-icon.png">
  <p>徽章是一种小型组件，通常用于向用户传达数值信息。</p>
</DocsCard>

<DocsCard header="按钮" href="api/button" icon="/icons/component-button-icon.png">
  <p>按钮让用户能够执行操作。它们是与应用程序交互和导航的基本方式。</p>
</DocsCard>

<DocsCard header="卡片" href="api/card" icon="/icons/component-card-icon.png">
  <!-- prettier-ignore -->
  <p>卡片是展示重要内容的绝佳方式，可以包含图像、按钮、文本等。</p>
</DocsCard>

<DocsCard header="复选框" href="api/checkbox" icon="/icons/component-checkbox-icon.png">
  <p>复选框可用于告知用户需要做出二元决策。</p>
</DocsCard>

<DocsCard header="芯片" href="api/chip" icon="/icons/component-chip-icon.png">
  <p>芯片是一种紧凑的显示数据或操作的方式。</p>
</DocsCard>

<DocsCard header="内容区域" href="api/content" icon="/icons/component-content-icon.png">
  <p>内容区域是与应用程序交互和导航的核心方式。</p>
</DocsCard>

<DocsCard header="日期与时间选择器" href="api/datetime" icon="/icons/component-datetimepicker-icon.png">
  <p>日期和时间选择器用于呈现一个界面，使用户能够轻松选择日期和时间。</p>
</DocsCard>

<DocsCard header="浮动操作按钮" href="api/fab" icon="/icons/component-fab-icon.png">
  <p>浮动操作按钮是圆形按钮，用于在屏幕上执行主要操作。</p>
</DocsCard>

<DocsCard header="图标" href="https://ionic.io/ionicons" img="/icons/feature-component-icons-icon.png">
  <p>专为 Web、iOS、Android 和桌面应用程序设计的精美图标。</p>
</DocsCard>

<DocsCard header="网格布局" href="api/grid" icon="/icons/component-grid-icon.png">
  <p>网格是一种强大的移动优先系统，用于构建自定义布局。</p>
</DocsCard>

<DocsCard header="无限滚动" href="api/infinite-scroll" icon="/icons/component-infinitescroll-icon.png">
  <p>无限滚动允许您在用户滚动浏览应用程序时加载新数据。</p>
</DocsCard>

<DocsCard header="输入框" href="api/input" icon="/icons/component-input-icon.png">
  <p>输入框为用户在应用程序中输入数据提供了途径。</p>
</DocsCard>

<DocsCard header="列表项" href="api/item" icon="/icons/component-item-icon.png">
  <p>列表项是一种多功能的 UI 容器，可以作为列表的一部分使用。</p>
</DocsCard>

<DocsCard header="列表" href="api/list" icon="/icons/component-lists-icon.png">
  <p>列表可以显示信息行，例如联系人列表、播放列表或菜单。</p>
</DocsCard>

<DocsCard header="导航" href="api/nav" img="/icons/feature-component-navigation-icon.png">
  <p>导航是用户在不同页面之间移动的方式。</p>
</DocsCard>

<DocsCard header="菜单" href="api/menu" icon="/icons/component-menu-icon.png">
  <p>菜单是一种常见的导航模式。它们可以永久显示在屏幕上，也可以在需要时显示。</p>
</DocsCard>

<DocsCard header="模态框" href="api/modal" icon="/icons/component-modal-icon.png">
  <p>模态框从屏幕边缘滑入滑出，用于显示临时 UI，常用于登录或注册页面。</p>
</DocsCard>

<DocsCard header="弹出框" href="api/popover" icon="/icons/component-popover-icon.png">
  <p>弹出框提供了一种在不改变上下文的情况下呈现信息或选项的简便方式。</p>
</DocsCard>

<DocsCard header="进度指示器" href="api/progress-bar" icon="/icons/component-progress-icon.png">
  <p>进度指示器用于可视化操作或活动的进度。</p>
</DocsCard>

<DocsCard header="单选框" href="api/radio" icon="/icons/component-radio-icon.png">
  <p>单选框输入允许您呈现一组互斥的选项。</p>
</DocsCard>

<DocsCard header="下拉刷新" href="api/refresher" icon="/icons/component-refresher-icon.png">
  <p>下拉刷新为内容组件提供了下拉刷新功能。</p>
</DocsCard>

<DocsCard header="搜索栏" href="api/searchbar" img="/icons/feature-component-search-icon.png">
  <p>搜索栏用于搜索或筛选项目，通常位于工具栏中。</p>
</DocsCard>

<DocsCard header="重新排序" href="api/reorder" icon="/icons/component-reorder-icon.png">
  <p>重新排序允许用户通过拖放操作对项目列表进行重新排序。</p>
</DocsCard>

<DocsCard header="路由" href="api/router" icon="/icons/component-routing-icon.png">
  <p>路由允许基于当前路径进行导航。</p>
</DocsCard>

<DocsCard header="分段控件" href="api/segment" icon="/icons/component-segment-icon.png">
  <p>分段控件提供了一组互斥的按钮，可用作筛选器或视图切换器。</p>
</DocsCard>

<DocsCard header="选择器" href="api/select" icon="/icons/component-select-icon.png">
  <p>选择器类似于原生 HTML 选择器，但在排序和选择方面进行了一些改进。</p>
</DocsCard>

<DocsCard header="幻灯片" href="api/slides" icon="/icons/component-slides-icon.png">
  <p>幻灯片让创建复杂的 UI（如图库、教程和基于页面的布局）变得简单。</p>
</DocsCard>

<DocsCard header="标签页" href="api/tabs" img="/icons/feature-component-tabs-icon.png">
  <p>标签页实现了标签式导航，这是现代应用程序中的标准导航模式。</p>
</DocsCard>

<DocsCard header="轻提示" href="api/toast" icon="/icons/component-toast-icon.png">
  <p>轻提示用于在应用程序内容上方显示通知。它可以是临时的或可关闭的。</p>
</DocsCard>

<DocsCard header="开关" href="api/toggle" icon="/icons/component-toggle-icon.png">
  <p>开关是一种用于二元选项的输入控件，常用于选项和切换开关。</p>
</DocsCard>

  <DocsCard header="工具栏" href="api/toolbar" icon="/icons/component-toolbar-icon.png">
    <p>工具栏用于容纳与您的应用程序相关的信息和操作。</p>
  </DocsCard>
</DocsCards>