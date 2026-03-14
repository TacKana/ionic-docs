---
title: UI 组件
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>UI 组件 | 用于构建用户界面应用的高级组件</title>
  <meta
    name="description"
    content="Ionic Framework 内置了一系列高级 UI 组件，包括卡片、列表和标签页，可以快速轻松地构建应用的用户界面。"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

Ionic 应用由称为组件的高级构建块组成，它们能帮助你快速构建应用的用户界面。Ionic 内置了多种组件，包括卡片、列表和标签页。熟悉基础知识后，可以参考 [API 索引](api.md) 查看所有组件和子组件的完整列表。

<intro-end />

<DocsCards>
<DocsCard header="手风琴" href="api/accordion" img="/icons/feature-component-accordion-icon.png">
  <p>手风琴组件提供了可折叠的内容区域，可以在组织和分组信息的同时减少纵向空间占用。</p>
</DocsCard>

<DocsCard header="操作表" href="api/action-sheet" icon="/icons/component-action-sheet-icon.png">
  <p>操作表用于显示一组选项，并提供确认或取消操作的能力。</p>
</DocsCard>

<DocsCard header="警告框" href="api/alert" icon="/icons/component-alert-icon.png">
  <p>警告框是让用户选择特定操作或操作列表的理想方式。</p>
</DocsCard>

<DocsCard header="徽章" href="api/badge" icon="/icons/component-badge-icon.png">
  <p>徽章是一种小型组件，通常用于向用户传达数值信息。</p>
</DocsCard>

<DocsCard header="面包屑" href="api/breadcrumbs" icon="/icons/component-breadcrumbs-icon.png">
  <p>面包屑是用于指示用户在应用中位置的导航项。</p>
</DocsCard>

<DocsCard header="按钮" href="api/button" icon="/icons/component-button-icon.png">
  <p>按钮让用户能够执行操作，是与应用交互和导航的重要方式。</p>
</DocsCard>

<DocsCard header="卡片" href="api/card" icon="/icons/component-card-icon.png">
  <p>卡片是展示重要内容的绝佳方式，可以包含图像、按钮、文本等元素。</p>
</DocsCard>

<DocsCard header="复选框" href="api/checkbox" icon="/icons/component-checkbox-icon.png">
  <p>复选框可用于提示用户做出二元决策。</p>
</DocsCard>

<DocsCard header="标签" href="api/chip" icon="/icons/component-chip-icon.png">
  <p>标签是一种紧凑的数据或操作展示方式。</p>
</DocsCard>

<DocsCard header="内容区域" href="api/content" icon="/icons/component-content-icon.png">
  <p>内容区域是与应用交互和导航的核心方式。</p>
</DocsCard>

<DocsCard header="日期时间选择器" href="api/datetime" img="/icons/feature-component-datetime-icon.png">
  <p>日期时间选择器用于呈现直观的界面，让用户轻松选择日期和时间。</p>
</DocsCard>

<DocsCard header="浮动操作按钮" href="api/fab" icon="/icons/component-fab-icon.png">
  <p>浮动操作按钮是执行屏幕主要操作的圆形按钮。</p>
</DocsCard>

<DocsCard header="网格布局" href="api/grid" icon="/icons/component-grid-icon.png">
  <p>网格是一个强大的移动优先系统，用于构建自定义布局。</p>
</DocsCard>

<DocsCard header="图标" href="api/icon" icon="/icons/component-icons-icon.png">
  <p>专为网页、iOS 和 Android 应用设计的精美图标。</p>
</DocsCard>

<DocsCard header="无限滚动" href="api/infinite-scroll" icon="/icons/component-infinitescroll-icon.png">
  <p>无限滚动允许在用户滚动应用时加载新数据。</p>
</DocsCard>

<DocsCard header="输入框" href="api/input" icon="/icons/component-input-icon.png">
  <p>输入框为用户在应用中输入数据提供了途径。</p>
</DocsCard>

<DocsCard header="列表项" href="api/item" img="/icons/feature-component-item-icon.png">
  <p>列表项是可以包含文本、图标、头像、图像、输入框以及其他原生或自定义元素的组件。列表项支持滑动、删除、重新排序、编辑等操作。</p>
</DocsCard>

<DocsCard header="列表" href="api/list" icon="/icons/component-lists-icon.png">
  <p>列表可以显示多行信息，例如联系人列表、播放列表或菜单。</p>
</DocsCard>

<DocsCard header="媒体组件" href="api/avatar" icon="/icons/component-media-icon.png">
  <p>一系列媒体组件集合，包括头像、图标、图像和缩略图，旨在增强视觉内容呈现。</p>
</DocsCard>

<DocsCard header="菜单" href="api/menu" icon="/icons/component-menu-icon.png">
  <p>菜单是常见的导航模式，可以常驻屏幕，也可以在需要时显示。</p>
</DocsCard>

<DocsCard header="模态框" href="api/modal" icon="/icons/component-modal-icon.png">
  <p>模态框从屏幕侧边滑入滑出，用于显示临时界面，常用于登录或注册页面。</p>
</DocsCard>

<DocsCard header="导航" href="api/nav" icon="/icons/component-navigation-icon.png">
  <p>导航是用户在不同页面间移动的方式。</p>
</DocsCard>

<DocsCard header="弹出框" href="api/popover" icon="/icons/component-popover-icon.png">
  <p>弹出框提供了一种无需切换上下文即可展示信息或选项的便捷方式。</p>
</DocsCard>

<DocsCard header="进度指示器" href="api/progress-bar" icon="/icons/component-progress-icon.png">
  <p>进度指示器用于可视化操作或活动的进度。</p>
</DocsCard>

<DocsCard header="单选框" href="api/radio" icon="/icons/component-radio-icon.png">
  <p>单选框允许你呈现一组互斥的选项。</p>
</DocsCard>

<DocsCard header="滑动条" href="api/range" icon="/icons/component-range-icon.png">
  <p>滑动条让用户可以通过在轨道上拖动旋钮来选择数值。</p>
</DocsCard>

<DocsCard header="下拉刷新" href="api/refresher" img="/icons/feature-component-refresher-icon.png">
  <p>下拉刷新为内容组件提供了拉动刷新功能。</p>
</DocsCard>

<DocsCard header="重新排序" href="api/reorder" icon="/icons/component-reorder-icon.png">
  <p>重新排序功能允许用户通过拖放来调整列表项的顺序。</p>
</DocsCard>

<DocsCard header="路由" href="api/router" icon="/icons/component-routing-icon.png">
  <p>路由允许基于当前路径进行导航。</p>
</DocsCard>

<DocsCard header="搜索栏" href="api/searchbar" icon="/icons/component-searchbar-icon.png">
  <p>搜索栏用于搜索或筛选项目，通常位于工具栏中。</p>
</DocsCard>

<DocsCard header="分段器" href="api/segment" icon="/icons/component-segment-icon.png">
  <p>分段器提供了一组互斥的按钮，可用作筛选器或视图切换器。</p>
</DocsCard>

<DocsCard header="选择器" href="api/select" icon="/icons/component-select-icon.png">
  <p>选择器类似于原生 HTML 的 select 元素，但在排序和选择方面有所改进。</p>
</DocsCard>

<DocsCard header="标签页" href="api/tabs" img="/icons/feature-component-tabs-icon.png">
  <p>标签页实现了标签式导航，是现代应用中的标准导航模式。</p>
</DocsCard>

<DocsCard header="轻提示" href="api/toast" icon="/icons/component-toast-icon.png">
  <p>轻提示是在应用内容上方显示的微妙通知，不会中断用户交互。</p>
</DocsCard>

<DocsCard header="开关" href="api/toggle" icon="/icons/component-toggle-icon.png">
  <p>开关是用于二元选择的输入控件，常用于选项和切换功能。</p>
</DocsCard>

<DocsCard header="工具栏" href="api/toolbar" icon="/icons/component-toolbar-icon.png">
  <p>工具栏用于承载与应用相关的信息和操作。</p>
</DocsCard>

<DocsCard header="文字排版" href="api/text" icon="/icons/component-typography-icon.png">
  <p>文字组件用于在应用内设置文本样式或更改文本颜色。</p>
</DocsCard>
</DocsCards>