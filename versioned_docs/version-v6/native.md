---
title: Capacitor
hide_table_of_contents: true
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

import NativeEnterpriseCard from '@components/page/native/NativeEnterpriseCard';

<head>
  <title>原生 API：开源原生设备插件与集成方案</title>
  <meta
    name="description"
    content="借助原生 API 构建具有原生能力的应用体验。Ionic 的开源插件和集成方案让您能够轻松为任何应用添加原生设备功能。"
  />
  <style>{`
    :root {
      --doc-item-container-width: 60rem;
    }
  `}</style>
</head>

<intro-end />

通过 Capacitor 为您的应用添加原生功能。Capacitor 是由 Ionic 团队构建的原生运行时环境，只需安装核心包即可轻松集成到项目中。Capacitor 提供了丰富的功能，开发者可以利用它访问设备文件系统、相机以及原生定位服务等特性。所有这些功能都由统一的 TypeScript API 驱动，能够自动处理平台间的差异。

虽然 Capacitor 的核心功能是免费和开源的，但一些企业可能需要更多特性或定制化的第三方集成。如果您需要这些附加功能，请查看 [Ionic 企业版 SDK](https://ionic.io/enterprise-sdk)。

<NativeEnterpriseCard />

> 寻找旧版 Cordova 插件？请访问它们的新家：[Awesome Cordova Plugins](https://danielsogl.gitbook.io/awesome-cordova-plugins/)。