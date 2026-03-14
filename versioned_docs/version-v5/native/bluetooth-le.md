---
sidebar_label: 'BluetoothLE'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# BluetoothLE

该插件提供了在 Android、iOS 以及部分 Windows 平台上与蓝牙低功耗（Bluetooth LE）设备交互的最完整实现。
它是为 Ionic 封装的 [randdusing/cordova-plugin-bluetoothle](https://github.com/randdusing/cordova-plugin-bluetoothle/blob/master/readme.md) Cordova 插件。
它支持外设 **和** 中心模式，并涵盖了 Android 和 iOS 上可用的大部分 API 方法。

<p>
  <a href="https://github.com/randdusing/cordova-plugin-bluetoothle" target="_blank" rel="noopener" className="git-link">github.com/randdusing/cordova-plugin-bluetoothle</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵的时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要的项目，您负担不起花费数小时进行故障排查。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-bluetoothle {'\n'}$ npm install @awesome-cordova-plugins/bluetooth-le {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-bluetoothle {'\n'}$ npm install @awesome-cordova-plugins/bluetooth-le{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队完全支持并维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对该插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 用法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { BluetoothLE } from '@awesome-cordova-plugins/bluetooth-le/ngx';


constructor(public bluetoothle: BluetoothLE, public plt: Platform) {

 this.plt.ready().then((readySource) => {

   console.log('Platform ready from', readySource);

   this.bluetoothle.initialize().then(ble => {
     console.log('ble', ble.status) // 打印 'enabled'
   });

  });
}

```