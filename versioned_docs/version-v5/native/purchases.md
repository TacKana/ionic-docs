---
sidebar_label: 'Purchases（购买）'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Purchases（购买）

Purchases 是一个用于管理应用内订阅的跨平台解决方案。后端服务由 [RevenueCat](https://www.revenuecat.com) 提供。

## 功能特性

|     | RevenueCat                                                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ✅  | 服务器端收据验证                                                                                                                                             |
| ➡️  | [Webhooks](https://docs.revenuecat.com/docs/webhooks) - 增强型服务器到服务器通信，支持购买、续订、取消等事件通知                                            |
| 🎯  | 订阅状态追踪 - 无论用户使用 iOS、Android 还是 Web 平台，都能知晓其订阅状态                                                                                   |
| 📊  | 分析功能 - 自动计算转化率、月度经常性收入（MRR）和流失率等指标                                                                                               |
| 📝  | 持续更新的[在线文档](https://docs.revenuecat.com/docs)                                                                                                       |
| 🔀  | [集成服务](https://www.revenuecat.com/integrations) - 提供十余种集成方案，轻松将购买数据发送至所需位置                                                       |
| 💯  | 精心维护 - [频繁发布更新](https://github.com/RevenueCat/cordova-plugin-purchases/releases)                                                                   |
| 📮  | 优质支持 - [帮助中心](https://revenuecat.zendesk.com)                                                                                                        |
| 🤩  | 令人期待的[新功能](https://trello.com/b/RZRnWRbI/revenuecat-product-roadmap)                                                                                 |

## 快速开始

如需获取更详细的信息，请访问完整文档：[docs.revenuecat.com](https://docs.revenuecat.com/docs)

<p>
  <a href="https://github.com/RevenueCat/cordova-plugin-purchases" target="_blank" rel="noopener" className="git-link">github.com/RevenueCat/cordova-plugin-purchases</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发重要项目，经不起数小时的问题排查。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
    <DocsButton className="native-ee-detail">立即联系我们！</DocsButton>
  </div>
</DocsCard>

<h2 id="installation">
  <a href="#installation">安装</a>
</h2>
<Tabs
  groupId="runtime"
  defaultValue="Capacitor"
  values={[
    { value: 'Capacitor', label: 'Capacitor' },
    { value: 'Cordova', label: 'Cordova' },
    { value: 'Enterprise', label: 'Enterprise' },
  ]}
>
  <TabItem value="Capacitor">
    <CodeBlock className="language-shell">
      $ npm install cordova-plugin-purchases@2.0.0 {'\n'}$ npm install @awesome-cordova-plugins/purchases {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-purchases@2.0.0 {'\n'}$ npm install @awesome-cordova-plugins/purchases{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持和维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对该插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

#### 1. 获取 RevenueCat API 密钥

登录 [RevenueCat 仪表板](https://app.revenuecat.com) 并为您的应用获取一个免费的 API 密钥。

#### 2. 初始化 SDK

您应该只在应用启动时配置一次 _Purchases_（通常在应用拥有用户的唯一标识符时进行）。如果您的应用有用户账户，可以在用户登录时配置；如果可以生成随机用户标识符，也可以在启动时配置。

```tsx
 import { Platform } from "@ionic/angular";
 import { Purchases } from "@awesome-cordova-plugins/purchases/ngx";

 constructor(public platform: Platform, private purchases: Purchases) {
     platform.ready().then(() => {
         this.purchases.setDebugLogsEnabled(true); // 启用以获取调试日志
         this.purchases.setup("my_api_key", "my_app_user_id");
     }
 }
```

#### 3. 快速入门

请参阅 [快速入门指南](https://docs.revenuecat.com/docs/) 了解更多关于如何使用 SDK 的信息。

### 要求

要求 XCode 11.0+ 且最低目标 iOS 版本为 9.0+。
此插件已通过 cordova-plugin-purchases@ 版本测试。