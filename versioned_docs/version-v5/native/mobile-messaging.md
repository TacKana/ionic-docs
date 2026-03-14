---
sidebar_label: '移动消息推送'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 移动消息推送

Mobile Messaging SDK 旨在为您的移动应用轻松集成消息推送通道。
只需极短的实现时间，您就能在应用中接收推送通知，并访问 [Infobip IP 消息平台](https://portal.infobip.com/push/) 的各项功能。
本文档描述了 Cordova 项目的库集成步骤。

更多信息请参阅 [Cordova 插件文档](https://github.com/infobip/mobile-messaging-cordova-plugin)

<p>
  <a href="https://github.com/infobip/mobile-messaging-cordova-plugin" target="_blank" rel="noopener" className="git-link">github.com/infobip/mobile-messaging-cordova-plugin</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install com-infobip-plugins-mobilemessaging {'\n'}$ npm install @awesome-cordova-plugins/mobile-messaging{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add com-infobip-plugins-mobilemessaging {'\n'}$ npm install
      @awesome-cordova-plugins/mobile-messaging {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { MobileMessaging } from '@awesome-cordova-plugins/mobile-messaging/ngx';


constructor(private mobileMessaging: MobileMessaging) { }

...


 this.mobileMessaging.init({
   applicationCode: '&lt;your_application_code>',
   geofencingEnabled: '&lt;true/false>',
   defaultMessageStorage: '&lt;true/false>',
   ios: {
     notificationTypes: ['alert', 'badge', 'sound']
   },
   android: {
     notificationIcon: &lt;String; a resource name for a status bar icon (without extension), located in '/platforms/android/app/src/main/res/mipmap'>,
     multipleNotifications: &lt;Boolean; set to 'true' to enable multiple notifications>,
     notificationAccentColor: &lt;String; set to hex color value in format '#RRGGBB' or '#AARRGGBB'>
    }}, (err) => {
     ...
   });

 this.mobileMessaging.register('messageReceived').subscribe((message: Message) => {
   ...
 });

```