---
title: 'PhoneGap Plugin for Push Notifications With Cordova and Ionic'
description: '使用 Cordova 插件 phonegap-plugin-push 在 Ionic 应用中注册并接收推送通知。阅读本文了解如何在支持的平台上安装。'
sidebar_label: '推送'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 推送

注册并接收推送通知。

需要 Cordova 插件：`phonegap-plugin-push`。更多信息请查看 [推送插件文档](https://github.com/phonegap/phonegap-plugin-push)。

TypeScript 用户请参考 [推送插件关于使用 TypeScript 处理自定义通知的文档](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/TYPESCRIPT.md)。

<p>
  <a href="https://github.com/phonegap/phonegap-plugin-push" target="_blank" rel="noopener" className="git-link">github.com/phonegap/phonegap-plugin-push</a>
</p>

<h2>被 Cordova 问题困扰？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个重要的项目，您承担不起花费数小时进行故障排除的代价。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install phonegap-plugin-push {'\n'}$ npm install @awesome-cordova-plugins/push {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add phonegap-plugin-push {'\n'}$ npm install @awesome-cordova-plugins/push {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含由 Ionic 团队提供全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对插件的企业版本感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- 浏览器
- iOS
- Windows

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { Push, PushObject, PushOptions } from '@awesome-cordova-plugins/push/ngx';

constructor(private push: Push) { }

...


// 检查是否拥有权限
this.push.hasPermission()
  .then((res: any) => {

    if (res.isEnabled) {
      console.log('我们拥有发送推送通知的权限');
    } else {
      console.log('我们没有发送推送通知的权限');
    }

  });

// 创建一个通道（适用于 Android O 及以上版本）。您需要提供 id、description 和 importance 属性。
this.push.createChannel({
 id: "testchannel1",
 description: "我的第一个测试通道",
 // importance 属性范围：1 = 最低，2 = 低，3 = 正常，4 = 高，5 = 最高。
 importance: 3,
 // badge 用于控制是否在应用图标上显示角标，参见 https://developer.android.com/reference/android/app/NotificationChannel.html#setShowBadge(boolean)。
 // false = 应用图标上不显示角标。
 // true = 应用图标上显示角标。
 badge: false
}).then(() => console.log('通道已创建'));

// 删除一个通道（适用于 Android O 及以上版本）
this.push.deleteChannel('testchannel1').then(() => console.log('通道已删除'));

// 返回当前已配置通道的列表
this.push.listChannels().then((channels) => console.log('通道列表', channels))

// 初始化推送通知

const options: PushOptions = {
   android: {},
   ios: {
       alert: 'true',
       badge: true,
       sound: 'false'
   },
   windows: {},
   browser: {
       pushServiceURL: 'http://push.api.phonegap.com/v1/push'
   }
}

const pushObject: PushObject = this.push.init(options);


pushObject.on('notification').subscribe((notification: any) => console.log('收到通知', notification));

pushObject.on('registration').subscribe((registration: any) => console.log('设备已注册', registration));

pushObject.on('error').subscribe(error => console.error('推送插件错误', error));


```