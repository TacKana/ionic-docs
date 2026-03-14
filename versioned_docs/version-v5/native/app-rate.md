---
sidebar_label: 'App Rate'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# App Rate

AppRate 插件可以轻松地提示用户为您的应用评分，可以选择立即评分、稍后提醒或不再提醒。

需要 Cordova 插件：cordova-plugin-apprate。更多信息请查看 [AppRate 插件文档](https://github.com/pushandplay/cordova-plugin-apprate)。

<p>
  <a href="https://github.com/pushandplay/cordova-plugin-apprate" target="_blank" rel="noopener" className="git-link">github.com/pushandplay/cordova-plugin-apprate</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供优质咨询服务。</p>
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
      $ npm install cordova-plugin-apprate {'\n'}$ npm install @awesome-cordova-plugins/app-rate {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-apprate {'\n'}$ npm install @awesome-cordova-plugins/app-rate {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对此插件的企业版感兴趣，请<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>。
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- BlackBerry 10
- iOS
- Windows

## 使用方法

### React

[详细了解如何在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

```tsx
import { AppRate } from '@awesome-cordova-plugins/app-rate/ngx';

constructor(private appRate: AppRate) { }

...
// 设置特定偏好
this.appRate.preferences.storeAppURL = {
  ios: '&lt;app_id>',
  android: 'market://details?id=&lt;package_name>',
  windows: 'ms-windows-store://review/?ProductId=&lt;store_id>'
}

this.appRate.promptForRating(true);

// 或者，覆盖整个偏好对象
this.appRate.preferences = {
  usesUntilPrompt: 3,
  storeAppURL: {
   ios: '&lt;app_id>',
   android: 'market://details?id=&lt;package_name>',
   windows: 'ms-windows-store://review/?ProductId=&lt;store_id>'
  }
}

this.appRate.promptForRating(false);
```