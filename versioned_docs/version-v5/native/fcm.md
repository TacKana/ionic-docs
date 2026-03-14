---
title: 'FCM | 适用于 Firebase Cloud Messaging 的 FCM 推送通知插件'
description: 'FCM 推送通知插件为 Firebase Cloud Messaging 提供了基础功能。阅读并了解更多关于适用于 Ionic 应用的 Cordova FCM 插件信息。'
sidebar_label: 'FCM'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# FCM

为 Firebase Cloud Messaging 提供基础功能

<p>
  <a href="https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated" target="_blank" rel="noopener" className="git-link">github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated</a>
</p>

<h2>在 Cordova 问题上遇到困难？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-fcm-with-dependecy-updated {'\n'}$ npm install @awesome-cordova-plugins/fcm {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-fcm-with-dependecy-updated {'\n'}$ npm install
      @awesome-cordova-plugins/fcm {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含由 Ionic 团队提供全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或者如果您对此插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## Capacitor

不兼容

## 使用

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';

constructor(private fcm: FCM) {}

...

this.fcm.subscribeToTopic('marketing');

this.fcm.getToken().then(token => {
  backend.registerToken(token);
});

this.fcm.onNotification().subscribe(data => {
  if(data.wasTapped){
    console.log("在后台接收到通知");
  } else {
    console.log("在前台接收到通知");
  };
});

this.fcm.onTokenRefresh().subscribe(token => {
  backend.registerToken(token);
});

this.fcm.hasPermission().then(hasPermission => {
  if (hasPermission) {
    console.log("已获得权限！");
  }
})

this.fcm.clearAllNotifications();

this.fcm.unsubscribeFromTopic('marketing');

```