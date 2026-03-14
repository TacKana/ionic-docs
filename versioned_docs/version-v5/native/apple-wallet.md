---
sidebar_label: 'Apple Wallet'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Apple Wallet

一个 Cordova 插件，使用户能够将支付卡添加到他们的 Apple Wallet。

<p>
  <a href="https://github.com/tomavic/cordova-apple-wallet" target="_blank" rel="noopener" className="git-link">/github.com/tomavic/cordova-apple-wallet</a>
</p>

<h2>被 Cordova 问题困住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个重要的项目，你无法承受花费数小时进行故障排查。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-apple-wallet {'\n'}$ npm install @awesome-cordova-plugins/apple-wallet {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-apple-wallet {'\n'}$ npm install @awesome-cordova-plugins/apple-wallet {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果你对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- iOS

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { AppleWallet } from '@awesome-cordova-plugins/apple-wallet/ngx';


constructor(private appleWallet: AppleWallet) { }


...


// 一个简单的调用来判断当前设备是否支持 Apple Pay 并已安装支持的卡片。
this.appleWallet.isAvailable()
 .then((res: boolean) => {
   // 期望 res 是布尔值
  })
 .catch((err) => {
   // 在这里捕获 {{err}}
 });

...


// 一个简单的调用来检查卡片资格
this.appleWallet.checkCardEligibility(primaryAccountIdentifier: string)
 .then((res: boolean) => {
   // 期望 res 是布尔值
  })
 .catch((err) => {
   // 在这里捕获 {{err}}
 });


...


// 一个简单的调用来通过卡号后缀检查卡片资格
this.appleWallet.checkCardEligibilityBySuffix(cardSuffix: string)
 .then((res: boolean) => {
   // 期望 res 是布尔值
  })
 .catch((err) => {
   // 在这里捕获 {{err}}
 });


...

// 一个简单的调用来检查是否有配对的 Apple Watch，以便你可以切换“添加到手表”按钮的可见性
this.appleWallet.checkPairedDevices()
 .then((res: WatchExistData) => {
   // 该对象包含表示配对设备存在的布尔标志
  })
 .catch((err) => {
   // 在这里捕获 {{err}}
 });


...



// 一个简单的调用，通过卡号后缀检查已配对的设备
this.appleWallet.checkPairedDevicesBySuffix(cardSuffix: string)
 .then((res: PairedDevicesFlags) => {
   // 该对象包含布尔值，用于确认卡片是否已存在于钱包或配对手表中
  })
 .catch((err) => {
   // 在这里捕获 {{err}}
 });


...


// 一个简单的调用，提供初始化新的 PKAddPaymentPassViewController 对象所需的配置数据。
// 此方法提供添加支付通行证（信用卡/借记卡）请求所需的数据。在成功回调后，使用我们的回调委托方法 `AppleWallet.completeAddPaymentPass` 将证书链传递给你的发卡机构服务器端。发卡机构服务器端应返回一个加密的 JSON 负载，其中包含加密的卡片数据，这是获取最终响应所必需的

this.appleWallet.startAddPaymentPass(data: cardData)
 .then((res: SignatureCertificatesData) => {
   // 用户已继续并成功请求将卡片添加到他的钱包
   // 使用回调响应 JSON 负载来完成添加过程
  })
 .catch((err) => {
   // 在这里捕获 {{err}}
 });


...


this.appleWallet.completeAddPaymentPass(data: encryptedCardData)
 .then((res: string) => {
   // 期望 res 是字符串，要么是 'success'，要么是 'error'
  })
 .catch((err) => {
   // 在这里捕获 {{err}}
   // 无法添加卡片或发生错误
   // PKAddPaymentPassViewController 将被关闭
 });

```