---
title: '本地通知：iOS 和 Android | Cordova 本地通知插件'
description: 'Cordova 本地通知插件允许您在 iOS、Android 或 Windows 设备上通过 Ionic Framework 应用程序显示本地通知。'
sidebar_label: '本地通知'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 本地通知

此插件允许您在设备上显示本地通知

<p>
  <a href="https://github.com/katzer/cordova-plugin-local-notifications" target="_blank" rel="noopener" className="git-link">github.com/katzer/cordova-plugin-local-notifications</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发重要项目，无法承受数小时的问题排查。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
    <DocsButton className="native-ee-detail">立即联系我们</DocsButton>
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
      $ npm install cordova-plugin-local-notification {'\n'}$ npm install @awesome-cordova-plugins/local-notifications{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-local-notification {'\n'}$ npm install
      @awesome-cordova-plugins/local-notifications {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含由 Ionic 团队提供全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或如果您对本插件的企业版本感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS
- Windows

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';


constructor(private localNotifications: LocalNotifications) { }

...


// 安排单次通知
this.localNotifications.schedule({
  id: 1,
  text: '单次 ILocalNotification',
  sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
  data: { secret: key }
});


// 安排多次通知
this.localNotifications.schedule([{
   id: 1,
   text: '多次 ILocalNotification 1',
   sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
   data: { secret:key }
  },{
   id: 2,
   title: '本地 ILocalNotification 示例',
   text: '多次 ILocalNotification 2',
   icon: 'http://example.com/icon.png'
}]);


// 安排延迟通知
this.localNotifications.schedule({
   text: '延迟 ILocalNotification',
   trigger: {at: new Date(new Date().getTime() + 3600)},
   led: 'FF0000',
   sound: null
});
```