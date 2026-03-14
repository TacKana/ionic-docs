---
sidebar_label: 'App Center Analytics'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# App Center Analytics

App Center Analytics 可帮助您了解用户行为和客户参与度，从而优化您的应用。
SDK 会自动捕获会话次数和设备属性（如型号、操作系统版本等）。
您可以定义自定义事件来衡量对您而言重要的指标。
所有捕获的信息都可在 App Center 门户中查看，供您分析数据。

欲了解更多信息，请访问 https://docs.microsoft.com/en-us/appcenter/sdk/analytics/cordova

<p>
  <a href="https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics" target="_blank" rel="noopener" className="git-link">github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您负担不起数小时故障排除的时间。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-appcenter-analytics {'\n'}$ npm install @awesome-cordova-plugins/app-center-analytics{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-appcenter-analytics {'\n'}$ npm install
      @awesome-cordova-plugins/app-center-analytics {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或如果您对该插件的企业版本感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>。
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 用法

### React

[了解更多关于在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

```tsx
import { AppCenterAnalytics } from '@awesome-cordova-plugins/app-center-analytics/ngx';


constructor(private appCenterAnalytics: AppCenterAnalytics) { }

...

this.appCenterAnalytics.setEnabled(true).then(() => {
   this.appCenterAnalytics.trackEvent('My Event', { TEST: 'HELLO_WORLD' }).then(() => {
       console.log('自定义事件已追踪');
   });
});

```