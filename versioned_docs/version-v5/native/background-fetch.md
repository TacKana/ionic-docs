---
sidebar_label: 'Background Fetch'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Background Fetch

iOS 后台获取功能的实现。详情请参阅：https://developer.apple.com/reference/uikit/uiapplication#1657399  
iOS 后台获取本质上是一个 API，它大约每 15 分钟唤醒你的应用（在用户使用高峰期），并为你的应用提供 30 秒的后台运行时间。每当后台获取事件发生时，该插件都会执行你提供的回调函数 `callbackFn`。你无法提高后台获取事件的发生频率，本插件会将频率设置为可能的最小值 `UIApplicationBackgroundFetchIntervalMinimum` —— iOS 会根据设备使用情况和时间自动决定频率（例如：在高峰期，获取频率约为 15 分钟；而在凌晨 3 点用户可能休息时，频率会降低）。  
更多详细信息，请参阅 https://github.com/transistorsoft/cordova-plugin-background-fetch

<p>
  <a href="https://github.com/transistorsoft/cordova-plugin-background-fetch" target="_blank" rel="noopener" className="git-link">github.com/transistorsoft/cordova-plugin-background-fetch</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发重要项目，就经不起花费数小时进行故障排查。 Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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

    $ npm install cordova-plugin-background-fetch
    $ npm install @awesome-cordova-plugins/background-fetch
    $ ionic cap sync

  </TabItem>
  <TabItem value="Cordova">

    $ ionic cordova plugin add cordova-plugin-background-fetch
    $ npm install @awesome-cordova-plugins/background-fetch

  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队完全支持并维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或如果你对此插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
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
import { BackgroundFetch, BackgroundFetchConfig } from '@awesome-cordova-plugins/background-fetch/ngx';


constructor(private backgroundFetch: BackgroundFetch) {

  const config: BackgroundFetchConfig = {
    stopOnTerminate: false, // 设置为 true 以在用户“关闭”应用后停止后台获取功能。默认为 true。
  }

  backgroundFetch.configure(config)
     .then(() => {
         console.log('Background Fetch 已初始化');

         this.backgroundFetch.finish();

     })
     .catch(e => console.log('初始化后台获取时出错', e));

  // 启动后台获取 API。你提供给 #configure 的回调函数将在每次后台获取事件发生时执行。注意：#configure 方法会自动调用 #start，所以在配置插件后无需再调用此方法
  backgroundFetch.start();

  // 停止后台获取 API 触发获取事件。你提供给 #configure 的回调函数将不再执行。
  backgroundFetch.stop();


}
```