---
sidebar_label: 'Tealium'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Tealium

本插件为 Ionic Native 提供了 [Tealium](https://www.tealium.com) Cordova 插件的 TypeScript 封装。

完整文档请参阅 [https://community.tealiumiq.com/t5/Mobile-Libraries/Tealium-for-Cordova/ta-p/17618](https://community.tealiumiq.com/t5/Mobile-Libraries/Tealium-for-Cordova/ta-p/17618)

<p>
  <a href="https://github.com/Tealium/cordova-plugin" target="_blank" rel="noopener" className="git-link">github.com/Tealium/cordova-plugin</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供专业咨询服务。</p>
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
      $ npm install tealium-cordova-plugin {'\n'}$ npm install @awesome-cordova-plugins/tealium {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add tealium-cordova-plugin {'\n'}$ npm install @awesome-cordova-plugins/tealium {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队完全支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对此插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
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

```
import { Tealium, TealConfig } from '@awesome-cordova-plugins/tealium/ngx';


constructor(private tealium: Tealium) { }

...

let tealConfig: TealConfig = {
 account: "&lt;your-account>",
 profile: "&lt;your-profile>",
 environment: "&lt;your-environment>", // 通常为 "dev"、"qa" 或 "prod"
 isLifecycleEnabled: "true", // 传入 "false" 以禁用生命周期跟踪
 isCrashReporterEnabled: "false", // 传入 "true" 以启用崩溃报告器（仅限 Android）
 instance: "&lt;your-instance-name" // 一个任意的实例名称。所有后续的 API 调用请使用相同的实例名称
}

this.tealium.init(tealConfig).then(()=>{
  this.tealium.trackView({"screen_name": "homescreen"});
});

```