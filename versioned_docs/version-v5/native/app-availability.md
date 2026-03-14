---
sidebar_label: '应用可用性检查'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 应用可用性检查

该插件允许你检查用户设备上是否安装了某个应用。在 iOS 上需要提供 URI 方案（例如 `twitter://`），在 Android 上需要提供包名（例如 `com.twitter.android`）。

需要 Cordova 插件：cordova-plugin-appavailability。更多信息请参阅 [AppAvailability 插件文档](https://github.com/ohh2ahh/AppAvailability)。

<p>
  <a href="https://github.com/ohh2ahh/AppAvailability" target="_blank" rel="noopener" className="git-link">github.com/ohh2ahh/AppAvailability</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个严肃的项目，就承担不起耗费数小时进行故障排查的代价。Ionic 专家团队为社区插件和高级插件提供优质的咨询服务。</p>
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
    { value: 'Enterprise', label: '企业版' },
  ]}
>
  <TabItem value="Capacitor">
    <CodeBlock className="language-shell">
      $ npm install cordova-plugin-appavailability {'\n'}$ npm install @awesome-cordova-plugins/app-availability {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-appavailability {'\n'}$ npm install
      @awesome-cordova-plugins/app-availability {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果你对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用说明

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { AppAvailability } from '@awesome-cordova-plugins/app-availability/ngx';
import { Platform } from 'ionic-angular';

constructor(private appAvailability: AppAvailability, private platform: Platform) { }

...

let app;

if (this.platform.is('ios')) {
  app = 'twitter://';
} else if (this.platform.is('android')) {
  app = 'com.twitter.android';
}

this.appAvailability.check(app)
  .then(
    (yes: boolean) => console.log(app + ' 可用'),
    (no: boolean) => console.log(app + ' 不可用')
  );
```