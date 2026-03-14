---
sidebar_label: 'AllInOneSDK'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# AllInOneSDK

用于 Cordova/Ionic 应用的 Paytm 一站式 SDK 插件
Paytm 一站式 SDK 通过调用 Paytm 应用（如果已安装在用户智能手机上）来完成订单支付，为用户提供快速、安全、流畅的支付体验。
Paytm 一站式 SDK 支持通过用户 Paytm 账户中可用的 Paytm 钱包、Paytm 支付银行、已保存的借记卡/信用卡、网上银行、BHIM UPI 和 EMI 进行支付。如果用户设备上未安装 Paytm 应用，交易将通过一站式 SDK 内的 Web 视图处理。
有关 Paytm 一站式 SDK 的更多信息，请访问 https://developer.paytm.com/docs/all-in-one-sdk/hybrid-apps/cordova/

<p>
  <a href="https://github.com/paytm/paytm-allinonesdk-ionic-cordova.git" target="_blank" rel="noopener" className="git-link">github.com/paytm/paytm-allinonesdk-ionic-cordova.git</a>
</p>

<h2>遇到 Cordova 问题无法解决？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要的项目，您无法承受花费数小时进行故障排查。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install cordova-paytm-allinonesdk {'\n'}$ npm install @awesome-cordova-plugins/all-in-one-sdk {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-paytm-allinonesdk {'\n'}$ npm install @awesome-cordova-plugins/all-in-one-sdk{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版附带由 Ionic 团队提供全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
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
import { AllInOneSDK } from '@awesome-cordova-plugins/all-in-one-sdk/ngx';


constructor(private allInOneSDK: AllInOneSDK) { }

...

有关以下参数，请参阅 [文档](https://developer.paytm.com/docs/all-in-one-sdk/hybrid-apps/cordova/)
let paymentIntent = { mid : merchantID, orderId: orderId, txnToken: transactionToken, amount: amount, isStaging: isStaging, callbackUrl:callBackURL,  restrictAppInvoke:restrictAppInvoke  }

this.allInOneSDK.startTransaction(paymentIntent)
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

```

对于 iOS：
添加插件后，打开 iOS 项目（可在 &lt;projectName>/platforms/ios 找到）。
如果商户没有回调 URL，请在 Info.plist 中添加一个条目：LSApplicationQueriesSchemes(Array) Item 0 (String)-> paytm
添加一个 URL Scheme：“paytm”+”MID”