---
title: 'Geolocation | W3C Geolocator Application API Plugin'
description: "此应用插件基于 W3C 地理位置 API 规范，仅在尚未提供位置信息实现的设备上运行。"
sidebar_label: 'Geolocation'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Geolocation

本插件提供设备的定位信息，如纬度和经度。常见的定位信息来源包括全球定位系统 (GPS)，以及从网络信号推断出的位置信息，例如 IP 地址、RFID、WiFi 和蓝牙 MAC 地址，以及 GSM/CDMA 蜂窝基站 ID。

此 API 基于 W3C 地理位置 API 规范，仅在没有原生实现的设备上执行。

对于 iOS 平台，你需要在 configuration.xml 文件中添加以下配置：

```xml
<edit-config file="*-Info.plist" mode="merge" target="NSLocationWhenInUseUsageDescription">
   <string>我们需要使用您的位置信息来实现某些应用功能的完整体验。</string>
</edit-config>
```

<p>
  <a href="https://github.com/apache/cordova-plugin-geolocation" target="_blank" rel="noopener" className="git-link">github.com/apache/cordova-plugin-geolocation</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别再为插件问题浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个重要的项目，无法承受数小时的问题排查。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install cordova-plugin-geolocation {'\n'}$ npm install @awesome-cordova-plugins/geolocation {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-geolocation {'\n'}$ npm install @awesome-cordova-plugins/geolocation{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果你对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Amazon Fire OS
- Android
- Browser
- iOS
- Windows

## 使用说明

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

...

constructor(private geolocation: Geolocation) {}

...

this.geolocation.getCurrentPosition().then((resp) => {
 // resp.coords.latitude
 // resp.coords.longitude
}).catch((error) => {
  console.log('获取位置时出错', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data 可以是一组坐标，或者一个错误对象（如果发生错误时）。
 // data.coords.latitude
 // data.coords.longitude
});
```