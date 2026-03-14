---
sidebar_label: 'Call Number'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 拨号插件

直接从你的 Cordova/Ionic 应用中拨打电话号码。
**注意**：iOS 模拟器（以及某些 Android 模拟器）可能无法访问电话子系统。

<p>
  <a href="https://github.com/Rohfosho/CordovaCallNumberPlugin" target="_blank" rel="noopener" className="git-link">github.com/Rohfosho/CordovaCallNumberPlugin</a>
</p>

<h2>遇到 Cordova 问题无法解决？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个严肃的项目，你无法承担花费数小时进行故障排除的代价。Ionic 专家为社区插件和官方插件提供高级咨询服务。</p>
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
      $ npm install call-number {'\n'}$ npm install @awesome-cordova-plugins/call-number {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add call-number {'\n'}$ npm install @awesome-cordova-plugins/call-number {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或者如果你对此插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用方法

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

constructor(private callNumber: CallNumber) { }

...

this.callNumber.callNumber("18001010101", true)
  .then(res => console.log('拨号器已启动！', res))
  .catch(err => console.log('启动拨号器时出错', err));

```