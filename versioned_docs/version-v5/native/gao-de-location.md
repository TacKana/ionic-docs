---
sidebar_label: 'Gao De Location'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 高德定位

由于原生的 GPS 定位使用的是 Google 浏览器定位，而 Google 已退出中国市场，导致 Android 设备上的 GPS 定位功能无法正常使用。
高德定位可以直接返回地址信息。

<p>
  <a href="https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git" target="_blank" rel="noopener" className="git-link">github.com/waliu/cordova-plugin-gaodelocation-chenyu.git</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您无法承受花费数小时进行故障排查。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-gaodelocation-chenyu {'\n'}$ npm install @awesome-cordova-plugins/gao-de-location{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-gaodelocation-chenyu {'\n'}$ npm install
      @awesome-cordova-plugins/gao-de-location {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供了由 Ionic 团队完全支持并维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对该插件的企业版本感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
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
import { GaoDeLocation } from '@awesome-cordova-plugins/gao-de-location/ngx';


constructor(private gaoDeLocation: GaoDeLocation) { }


const positionOptions: PositionOptions = {
    androidOption: {
     locationMode: LocationModeEnum.Hight_Accuracy,
     gpsFirst: false,
      HttpTimeOut: 30000,
      interval: 2000,
      needAddress: true,
      onceLocation: false,
      onceLocationLatest: false,
      locationProtocol: LocationProtocolEnum.HTTP,
      sensorEnable: false,
      wifiScan: true,
      locationCacheEnable: true
    }, iosOption: {
      desiredAccuracy: DesiredAccuracyEnum.kCLLocationAccuracyBest,
      pausesLocationUpdatesAutomatically: 'YES',
      allowsBackgroundLocationUpdates: 'NO',
      locationTimeout: 10,
      reGeocodeTimeout: 5,
    }
  };
const positionRes: PositionRes = await this.gaoDeLocation.getCurrentPosition(positionOptions).catch((e: any) => {
    console.log(e);
  }) || null;
console.log(JSON.stringify(positionRes));


this.gaoDeLocation.startSerialLocation(positionOptions).subscribe((positionRes: PositionRes) => {
   console.log(JSON.stringify(positionRes));
});

const positionRes: any = this.gaoDeLocation.stopSerialLocation().catch((e) => {
    console.log(e);
  }) || null;
console.log(JSON.stringify(positionRes));

```