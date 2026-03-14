---
sidebar_label: '蓝牙串口'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 蓝牙串口

此插件支持通过蓝牙进行串行通信。它专为 Android 或 iOS 设备与 Arduino 之间的通信而设计（不支持 Android 对 Android 或 iOS 对 iOS）。

<p>
  <a href="https://github.com/don/BluetoothSerial" target="_blank" rel="noopener" className="git-link">github.com/don/BluetoothSerial</a>
</p>

<h2>被 Cordova 问题卡住了？</h2>
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
    { value: 'Enterprise', label: 'Enterprise' },
  ]}
>
  <TabItem value="Capacitor">

    $ npm install cordova-plugin-bluetooth-serial
    $ npm install @awesome-cordova-plugins/bluetooth-serial
    $ ionic cap sync

  </TabItem>
  <TabItem value="Cordova">

    $ ionic cordova plugin add cordova-plugin-bluetooth-serial
    $ npm install @awesome-cordova-plugins/bluetooth-serial

  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对该插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS
- Windows Phone 8

## 使用方式

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';

constructor(private bluetoothSerial: BluetoothSerial) { }


// 写入字符串
this.bluetoothSerial.write('hello world').then(success, failure);

// 整数或字节数组
this.bluetoothSerial.write([186, 220, 222]).then(success, failure);

// 类型化数组
var data = new Uint8Array(4);
data[0] = 0x41;
data[1] = 0x42;
data[2] = 0x43;
data[3] = 0x44;
this.bluetoothSerial.write(data).then(success, failure);

// 数组缓冲区
this.bluetoothSerial.write(data.buffer).then(success, failure);
```