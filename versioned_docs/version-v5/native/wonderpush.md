---
sidebar_label: '推送通知 - WonderPush'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 推送通知 - WonderPush

向 iOS 和 Android 设备发送无限制的推送通知。

快速入门：[Ionic 快速开始指南](https://docs.wonderpush.com/docs/ionic-quickstart)

高级细分、自动化和个性化推送消息，每 1000 名订阅者仅需 €1。

需要 Cordova 插件 `wonderpush-cordova-sdk`。

[WonderPush 推送通知](https://www.wonderpush.com) 是留存用户、扩大受众的最有效方式，同时完全符合 GDPR 法规。

<p>
  <a href="https://github.com/wonderpush/wonderpush-cordova-sdk" target="_blank" rel="noopener" className="git-link">github.com/wonderpush/wonderpush-cordova-sdk</a>
</p>

<h2>遇到 Cordova 问题无法解决？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个重要的项目，无法承受数小时的问题排查。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install wonderpush-cordova-sdk {'\n'}$ npm install @awesome-cordova-plugins/wonderpush {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add wonderpush-cordova-sdk {'\n'}$ npm install @awesome-cordova-plugins/wonderpush {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或如果你对该插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
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
import { WonderPush } from '@awesome-cordova-plugins/wonderpush';


constructor(private wonderPush: WonderPush) { }

...

// 订阅用户
this.wonderPush.subscribeToNotifications()
  .then(() => console.log("用户已订阅通知"))
  .catch((error: any) => console.error(error));


// 发送事件（以购买为例）
this.wonderPush.sendEvent('purchase', {
  float_price: 12.99,
  string_sku: "X123456"
});

// 为用户添加标签（例如标记为顾客）
this.wonderPush.addTag('customer');

// 个性化
// 1. 存储用户详细信息。
// 2. 使用这些信息创建细分群体。
// 3. 在通知中包含这些信息。
this.wonderPush.putProperties({
  string_name: 'John D.',
  int_age: 24
});

// GDPR
// 1. 设置 REQUIRES_USER_CONSENT=true 以启用 GDPR 合规性。
// 2. 在调用 setUserConsent(true) 之前，WonderPush 不会启动。
const onClick = (userConsent: boolean) => this.wonderPush.setUserConsent(userConsent);

// 监听通知点击事件
document.addEventListener('wonderpush.notificationOpen', function(event) {
  console.log('通知已打开', event.notification);
  if (event.notificationType === 'data') {
    console.log('静默通知', event.notification);
  }
});
```