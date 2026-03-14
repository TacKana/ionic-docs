---
sidebar_label: '电池状态'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 电池状态

需要 Cordova 插件：cordova-plugin-batterystatus。更多信息，请参阅 [BatteryStatus 插件文档](https://github.com/apache/cordova-plugin-battery-status)。

<p>
  <a href="https://github.com/apache/cordova-plugin-battery-status" target="_blank" rel="noopener" className="git-link">github.com/apache/cordova-plugin-battery-status</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要的项目，就承担不起花费数小时进行故障排查的代价。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-battery-status {'\n'}$ npm install @awesome-cordova-plugins/battery-status {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-battery-status {'\n'}$ npm install
      @awesome-cordova-plugins/battery-status {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- iOS
- Android
- Windows
- 浏览器

## 用法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { BatteryStatus } from '@awesome-cordova-plugins/battery-status/ngx';

constructor(private batteryStatus: BatteryStatus) { }

...

// 监听电池状态变化
const subscription = this.batteryStatus.onChange().subscribe(status => {
   console.log(status.level, status.isPlugged);
});

// 停止监听
subscription.unsubscribe();

```