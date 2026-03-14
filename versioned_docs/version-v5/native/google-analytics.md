---
sidebar_label: 'Google Analytics'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Google Analytics

此插件用于连接 Google 原生的 Universal Analytics SDK。
使用前请确保满足以下条件：

- 已创建 Cordova 3.0+ 的 iOS 和/或 Android 项目
- 已通过 Google Analytics 管理控制台创建移动应用属性
- （Android）已通过 [Android SDK 管理器](https://developer.android.com/sdk/installing/adding-packages.html) 安装 Google Play Services SDK

<p>
  <a href="https://github.com/danwilson/google-analytics-plugin" target="_blank" rel="noopener" className="git-link">github.com/danwilson/google-analytics-plugin</a>
</p>

<h2>遇到 Cordova 问题？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在进行一个重要的项目，您无法承担数小时的问题排查时间。Ionic 专家为社区插件和高级插件提供优质咨询服务。</p>
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

    $ npm install cordova-plugin-google-analytics
    $ npm install @awesome-cordova-plugins/google-analytics
    $ ionic cap sync

  </TabItem>
  <TabItem value="Cordova">

    $ ionic cordova plugin add cordova-plugin-google-analytics
    $ npm install @awesome-cordova-plugins/google-analytics

  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- Browser
- iOS
- Windows Phone 8

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { GoogleAnalytics } from '@awesome-cordova-plugins/google-analytics/ngx';

constructor(private ga: GoogleAnalytics) { }

...

this.ga.startTrackerWithId('YOUR_TRACKER_ID')
   .then(() => {
     console.log('Google analytics is ready now');
      this.ga.trackView('test');
     // 追踪器已就绪
     // 您现在可以追踪页面或设置其他信息，如应用版本或用户ID
   })
   .catch(e => console.log('Error starting GoogleAnalytics', e));


```