---
title: Native APIs
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

import NativeEnterpriseCard from '@components/page/native/NativeEnterpriseCard';

<head>
  <title>Native APIs - 构建开源原生应用体验</title>
  <meta
    name="description"
    content="使用开源 Native API 构建原生应用体验。通过 Capacitor 或 Cordova，轻松为任何 Ionic 应用添加原生设备功能。"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

借助一系列开源和高级插件与集成，构建原生驱动的应用体验。通过 Capacitor 或 Cordova，轻松为任何 Ionic 应用添加原生设备功能。

<intro-end />

:::note

[了解 Ionic Native 项目](https://ionicframework.com/blog/a-new-chapter-for-ionic-native/)即将到来的变化。

:::

<DocsCards>
  <DocsCard header="Capacitor 插件" img="/img/native/capacitor@2x.png" href="https://capacitorjs.com/docs/plugins">
    <!-- prettier-ignore -->
    <p>由 Ionic 团队和 Capacitor 社区构建和维护的现代化开源原生运行时。我们推荐的原生解决方案。</p>
  </DocsCard>
  <DocsCard header="Cordova 插件" img="/img/native/cordova@2x.png" href="/native/community">
    <!-- prettier-ignore -->
    <p>由社区构建和维护的免费 Cordova 插件集合，提供 TypeScript 封装、一致的 API 和命名规范。</p>
  </DocsCard>
</DocsCards>

<NativeEnterpriseCard />

:::note
本文档适用于使用 Ionic Framework 4.0.0 及以上版本构建的应用。对于较旧的 Ionic v3 项目，请[参阅此处](https://ionicframework.com/docs/v3/native/)。
:::