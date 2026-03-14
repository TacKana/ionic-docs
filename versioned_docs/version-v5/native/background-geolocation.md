---
title: 'Background Geolocation: Cordova Background Geolocation Tracking'
description: "此 Cordova 插件提供前台和后台地理定位与追踪功能，具备节能的'圆形区域监控'和'停止检测'能力。"
sidebar_label: 'Background Geolocation'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Background Geolocation

此插件提供前台和后台地理定位功能，包含节能的“圆形区域监控”和“停止检测”。更多详细信息，请访问 https://github.com/mauron85/cordova-plugin-background-geolocation

<p>
  <a href="https://github.com/mauron85/cordova-plugin-background-geolocation" target="_blank" rel="noopener" className="git-link" >github.com/mauron85/cordova-plugin-background-geolocation</a>
</p>

<h2>被 Cordova 问题难住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install @mauron85/cordova-plugin-background-geolocation {'\n'}$ npm install
      @awesome-cordova-plugins/background-geolocation {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add @mauron85/cordova-plugin-background-geolocation {'\n'}$ npm install
      @awesome-cordova-plugins/background-geolocation {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对此插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

BackgroundGeolocation 必须在 app.ts 中调用，或者在 Geolocation 之前调用。否则平台将不会向您请求后台追踪权限。

```tsx
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@awesome-cordova-plugins/background-geolocation/ngx';

constructor(private backgroundGeolocation: BackgroundGeolocation) { }

...

const config: BackgroundGeolocationConfig = {
            desiredAccuracy: 10,
            stationaryRadius: 20,
            distanceFilter: 30,
            debug: true, //  启用此选项可监听后台地理定位生命周期的声音。
            stopOnTerminate: false, // 启用此选项可在应用终止时清除后台位置设置
    };

this.backgroundGeolocation.configure(config)
  .then(() => {

    this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
      console.log(location);

      // 重要提示：您必须在此处执行 finish 方法，以通知原生插件您已完成操作，
      // 并且后台任务可以结束。无论您的操作成功与否，都必须这样做。
      // 如果不执行，iOS 会因您在后台花费过多时间而强制关闭您的应用。
      this.backgroundGeolocation.finish(); // 仅适用于 iOS
    });

  });

// 开始记录位置
this.backgroundGeolocation.start();

// 如果您希望关闭后台追踪，请调用 #stop 方法。
this.backgroundGeolocation.stop();

```