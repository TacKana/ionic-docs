---
sidebar_label: 'SumUp'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# SumUp

用于与 SumUp 支付终端通信的插件

<p>
  <a href="https://github.com/mariusbackes/cordova-plugin-sumup" target="_blank" rel="noopener" className="git-link">github.com/mariusbackes/cordova-plugin-sumup</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承受花费数小时进行故障排查。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-sumup-plugin {'\n'}$ npm install @awesome-cordova-plugins/sum-up {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-sumup-plugin {'\n'}$ npm install @awesome-cordova-plugins/sum-up {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供来自 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或者如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用说明

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { SumUp } from '@awesome-cordova-plugins/sum-up';


constructor(private sumUp: SumUp) { }

const sumUpKeys: SumUpKeys = new SumUpKeys();
sumUpKeys.affiliateKey = 'YOUR_API_KEY'; // 如果安装时未提供
sumUpKeys.accessToken = 'YOUR_ACCESS_TOKEN';

this.sumUp.login(sumUpKeys)
  .then((res: SumUpResponse) => console.log(res))
  .catch((error: SumUpResponse) => console.error(error));

 this.sumUp.auth('YOUR_ACCESS_TOKEN')
  .then((res: SumUpResponse) => console.log(res))
  .catch((error: SumUpResponse) => console.error(error));

 this.sumUp.getSettings()
  .then((res: SumUpResponse) => console.log(res))
  .catch((error: SumUpResponse) => console.error(error));

 this.sumUp.logout()
  .then((res: SumUpResponse) => console.log(res))
  .catch((error: SumUpResponse) => console.error(error));

 this.sumUp.isLoggedIn()
  .then((res: SumUpLoginStatus) => console.log(res))
  .catch((error: SumUpLoginStatus) => console.error(error));

 this.sumUp.prepare()
  .then((res: SumUpResponse) => console.log(res))
  .catch((error: SumUpResponse) => console.error(error));

this.sumUp.closeConnection()
  .then((res: SumUpResponse) => console.log(res))
  .catch((error: SumUpResponse) => console.error(error));

this.sumUp.pay(10.0, 'EUR')
  .then((res: SumUpPayment) => console.log(res))
  .catch((error: SumUpPayment) => console.error(error));

```