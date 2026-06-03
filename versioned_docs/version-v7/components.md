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
    content="Ionic 框架内置了许多高级 UI 组件，包括卡片、列表和标签，让你快速轻松地构建应用的用户界面。"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

Ionic 应用由称为组件的高级构建块构成，它们让你可以快速构建应用的 UI。Ionic 内置了许多组件，包括卡片、列表和标签。熟悉基础知识后，请参阅[API 索引](api.md)获取每个组件和子组件的完整列表。

<intro-end />

<DocsCards>
<DocsCard header="手风琴" href="api/accordion" img="/icons/feature-component-accordion-icon.png">
  <p>手风琴在内容中提供可折叠部分，以减少垂直空间，同时提供组织和分组信息的方式。</p>
</DocsCard>

<DocsCard header="操作列表" href="api/action-sheet" icon="/icons/component-action-sheet-icon.png">
  <p>操作列表显示一组选项，具有确认或取消操作的能力。</p>
</DocsCard>

<DocsCard header="警告框" href="api/alert" icon="/icons/component-alert-icon.png">
  <p>警告框是为用户提供选择特定操作或操作列表能力的好方法。</p>
</DocsCard>

<DocsCard header="徽章" href="api/badge" icon="/icons/component-badge-icon.png">
  <p>徽章是一种小型组件，通常向用户传达数值信息。</p>
</DocsCard>

<DocsCard header="面包屑" href="api/breadcrumbs" icon="/icons/component-breadcrumbs-icon.png">
  <p>面包屑是用于指示用户在应用中的当前位置的导航项。</p>
</DocsCard>

<DocsCard header="按钮" href="api/button" icon="/icons/component-button-icon.png">
  <p>按钮让用户执行操作。它们是与应用交互和导航的重要方式。</p>
</DocsCard>

<DocsCard header="卡片" href="api/card" icon="/icons/component-card-icon.png">
  <p>
    卡片是显示重要内容片段的好方法，可以包含图像、按钮、文本等。
  </p>
</DocsCard>

<DocsCard header="复选框" href="api/checkbox" icon="/icons/component-checkbox-icon.png">
  <p>复选框可用于让用户了解他们需要做出二元决策。</p>
</DocsCard>

<DocsCard header="纸片" href="api/chip" icon="/icons/component-chip-icon.png">
  <p>纸片是一种显示数据或操作的紧凑方式。</p>
</DocsCard>

<DocsCard header="内容" href="api/content" icon="/icons/component-content-icon.png">
  <p>内容是与应用交互和导航的典型方式。</p>
</DocsCard>

<DocsCard header="日期和时间选择器" href="api/datetime" img="/icons/feature-component-datetime-icon.png">
  <p>日期和时间选择器用于呈现一个界面，使用户可以轻松选择日期和时间。</p>
</DocsCard>

<DocsCard header="浮动操作按钮" href="api/fab" icon="/icons/component-fab-icon.png">
  <p>浮动操作按钮是在屏幕上执行主要操作的圆形按钮。</p>
</DocsCard>

<DocsCard header="网格" href="api/grid" icon="/icons/component-grid-icon.png">
  <p>网格是一个强大的移动优先系统，用于构建自定义布局。</p>
</DocsCard>

<DocsCard header="图标" href="api/icon" icon="/icons/component-icons-icon.png">
  <p>专为 Web、iOS 和 Android 应用设计的精美图标。</p>
</DocsCard>

<DocsCard header="无限滚动" href="api/infinite-scroll" icon="/icons/component-infinitescroll-icon.png">
  <p>无限滚动允许你在用户滚动应用时加载新数据。</p>
</DocsCard>

<DocsCard header="输入" href="api/input" icon="/icons/component-input-icon.png">
  <p>输入为用户在应用中输入数据提供了一种方式。</p>
</DocsCard>

<DocsCard header="项目" href="api/item" img="/icons/feature-component-item-icon.png">
  <p>
    项目是可以包含文本、图标、头像、图像、输入以及任何其他原生或自定义元素的元素。
    项目可以滑动、删除、重新排序、编辑等。
  </p>
</DocsCard>

<DocsCard header="列表" href="api/list" icon="/icons/component-lists-icon.png">
  <p>列表可以显示信息行，如联系人列表、播放列表或菜单。</p>
</DocsCard>

<DocsCard header="媒体" href="api/avatar" icon="/icons/component-media-icon.png">
  <p>
    一组媒体组件，包括头像、图标、图像和缩略图，旨在增强视觉内容。
  </p>
</DocsCard>

<DocsCard header="菜单" href="api/menu" icon="/icons/component-menu-icon.png">
  <p>菜单是一种常见的导航模式。它们可以永久显示在屏幕上，或在需要时显示。</p>
</DocsCard>

<DocsCard header="模态框" href="api/modal" icon="/icons/component-modal-icon.png">
  <p>模态框滑入和滑出屏幕以显示临时 UI，通常用于登录或注册页面。</p>
</DocsCard>

<DocsCard header="导航" href="api/nav" icon="/icons/component-navigation-icon.png">
  <p>导航是用户在你的应用中的不同页面之间移动的方式。</p>
</DocsCard>

<DocsCard header="弹出框" href="api/popover" icon="/icons/component-popover-icon.png">
  <p>弹出框提供了一种无需更改上下文即可呈现信息或选项的简便方式。</p>
</DocsCard>

<DocsCard header="进度指示器" href="api/progress-bar" icon="/icons/component-progress-icon.png">
  <p>进度指示器可视化操作或活动的进度。</p>
</DocsCard>

<DocsCard header="单选按钮" href="api/radio" icon="/icons/component-radio-icon.png">
  <p>单选输入允许你呈现一组互斥的选项。</p>
</DocsCard>

<DocsCard header="范围" href="api/range" icon="/icons/component-range-icon.png">
  <p>范围滑块让用户通过沿轨道拖动旋钮来选择值。</p>
</DocsCard>

<DocsCard header="刷新器" href="api/refresher" img="/icons/feature-component-refresher-icon.png">
  <p>刷新器在内容组件上提供下拉刷新功能。</p>
</DocsCard>

<DocsCard header="重新排序" href="api/reorder" icon="/icons/component-reorder-icon.png">
  <p>重新排序让用户通过拖放来重新排序项目列表。</p>
</DocsCard>

<DocsCard header="路由" href="api/router" icon="/icons/component-routing-icon.png">
  <p>路由允许基于当前路径进行导航。</p>
</DocsCard>

<DocsCard header="搜索栏" href="api/searchbar" icon="/icons/component-searchbar-icon.png">
  <p>搜索栏用于搜索或过滤项目，通常来自工具栏。</p>
</DocsCard>

<DocsCard header="分段控件" href="api/segment" icon="/icons/component-segment-icon.png">
  <p>分段控件提供一组互斥的按钮，可用作筛选器或视图切换器。</p>
</DocsCard>

<DocsCard header="选择器" href="api/select" icon="/icons/component-select-icon.png">
  <p>选择类似于原生 HTML select，在排序和选择方面有一些改进。</p>
</DocsCard>

<DocsCard header="标签" href="api/tabs" img="/icons/feature-component-tabs-icon.png">
  <p>标签启用标签式导航，这是现代应用中的标准导航模式。</p>
</DocsCard>

<DocsCard header="Toast" href="api/toast" icon="/icons/component-toast-icon.png">
  <p>Toast 是出现在应用内容上方的微妙通知，不会中断用户交互。</p>
</DocsCard>

<DocsCard header="切换开关" href="api/toggle" icon="/icons/component-toggle-icon.png">
  <p>切换开关是二元选项的输入，通常用于选项和开关。</p>
</DocsCard>

<DocsCard header="工具栏" href="api/toolbar" icon="/icons/component-toolbar-icon.png">
  <p>工具栏用于容纳与应用相关的信息和操作。</p>
</DocsCard>

<DocsCard header="排版" href="api/text" icon="/icons/component-typography-icon.png">
  <p>文本用于设置应用中文本的样式或更改颜色。</p>
</DocsCard>
</DocsCards>
