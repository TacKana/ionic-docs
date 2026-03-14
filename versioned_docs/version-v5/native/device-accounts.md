---
sidebar_label: '设备账户'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 设备账户

获取与 Android 设备关联的 Google 账户

<p>
  <a href="https://github.com/xUnholy/cordova-device-accounts-v2" target="_blank" rel="noopener" className="git-link">github.com/xUnholy/cordova-device-accounts-v2</a>
</p>

<h2>被 Cordova 问题困扰？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发重要项目，承担不起数小时的问题排查成本。 Ionic 专家针对社区插件和企业版插件均提供高级咨询服务。</p>
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
      $ npm install cordova-device-accounts-v2 {'\n'}$ npm install @awesome-cordova-plugins/device-accounts {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-device-accounts-v2 {'\n'}$ npm install @awesome-cordova-plugins/device-accounts{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队全面支持维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { DeviceAccounts } from '@awesome-cordova-plugins/device-accounts/ngx';

constructor(private deviceAccounts: DeviceAccounts) { }

...

this.deviceAccounts.get()
  .then(accounts => console.log(accounts))
  .catch(error => console.error(error));

```