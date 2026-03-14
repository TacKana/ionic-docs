---
sidebar_label: 'Device'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 设备

访问底层设备和平台的相关信息。

<p>
  <a href="https://github.com/apache/cordova-plugin-device" target="_blank" rel="noopener" className="git-link">github.com/apache/cordova-plugin-device</a>
</p>

<h2>遇到了 Cordova 问题？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵的时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个重要的项目，无法承受数小时的问题排查。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-device {'\n'}$ npm install @awesome-cordova-plugins/device {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-device {'\n'}$ npm install @awesome-cordova-plugins/device {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 包含由 Ionic 团队提供全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对此插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- 浏览器
- iOS
- macOS
- Windows

## 使用说明

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { Device } from '@awesome-cordova-plugins/device/ngx';

constructor(private device: Device) { }

...

console.log('设备 UUID 是：' + this.device.uuid);
```