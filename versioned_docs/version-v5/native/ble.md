---
sidebar_label: 'BLE'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# BLE

此插件实现了手机与低功耗蓝牙（BLE）外设之间的通信。

该插件为 iOS 和 Android 提供了简洁的 JavaScript API。

- 扫描外设
- 连接外设
- 读取特征值
- 向特征写入新值
- 当特征值变化时获取通知

扫描外设时会返回广播信息。连接外设时会返回服务、特征和属性信息。所有访问都通过服务和特征的 UUID 进行。插件在内部管理句柄。

支持同时连接多个外设。

<p>
  <a href="https://github.com/don/cordova-plugin-ble-central" target="_blank" rel="noopener" className="git-link">github.com/don/</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在进行一个严肃的项目，您无法承担数小时故障排查的代价。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-ble-central {'\n'}$ npm install @awesome-cordova-plugins/ble {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-ble-central {'\n'}$ npm install @awesome-cordova-plugins/ble {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对该插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
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

import { BLE } from '@awesome-cordova-plugins/ble/ngx';

constructor(private ble: BLE) { }

```

## 外设数据

扫描和连接时，外设数据会传递给成功回调函数。扫描时传递的数据有限。

```tsx
  {
      'name': 'Battery Demo',
      'id': '20:FF:D0:FF:D1:C0',
      'advertising': [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
      'rssi': -55
  }
```

连接后，外设对象还会包含服务、特征和描述符信息。

```tsx
  {
      'name': 'Battery Demo',
      'id': '20:FF:D0:FF:D1:C0',
      'advertising': [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
      'rssi': -55,
      'services': [
          '1800',
          '1801',
          '180f'
      ],
      'characteristics': [
          {
              'service': '1800',
              'characteristic': '2a00',
              'properties': [
                  'Read'
              ]
          },
          {
              'service': '1800',
              'characteristic': '2a01',
              'properties': [
                  'Read'
              ]
          },
          {
              'service': '1801',
              'characteristic': '2a05',
              'properties': [
                  'Read'
              ]
          },
          {
              'service': '180f',
              'characteristic': '2a19',
              'properties': [
                  'Read'
              ],
              'descriptors': [
                  {
                      'uuid': '2901'
                  },
                  {
                      'uuid': '2904'
                  }
              ]
          }
      ]
  }
```

## 广播数据

扫描设备时会返回蓝牙广播数据。其格式因平台而异。在 Android 上，广播数据是原始的广播字节。iOS 不允许访问原始广播数据，因此会返回一个数据字典。

Android 和 iOS 的广播信息似乎是广播数据和扫描响应数据的组合。

### Android

```tsx
  {
      'name': 'demo',
      'id': '00:1A:7D:DA:71:13',
      'advertising': ArrayBuffer,
     'rssi': -37
 }
```

将广播信息转换为 Uint8Array 进行处理：`var adData = new Uint8Array(peripheral.advertising)`

### iOS

请注意，iOS 使用 [Advertisement Data Retrieval Keys](https://developer.apple.com/library/ios/documentation/CoreBluetooth/Reference/CBCentralManagerDelegate_Protocol/index.html#//apple_ref/doc/constant_group/Advertisement_Data_Retrieval_Keys) 常量的字符串值。这在未来可能会改变。

```tsx
  {
      'name': 'demo',
      'id': 'D8479A4F-7517-BCD3-91B5-3302B2F81802',
      'advertising': {
          'kCBAdvDataChannel': 37,
          'kCBAdvDataServiceData': {
              'FED8': {
                  'byteLength': 7 // 数据未显示
              }
          },
          'kCBAdvDataLocalName': 'demo',
          'kCBAdvDataServiceUUIDs': ['FED8'],
          'kCBAdvDataManufacturerData': {
              'byteLength': 7  // 数据未显示
          },
          'kCBAdvDataTxPowerLevel': 32,
          'kCBAdvDataIsConnectable': true
      },
      'rssi': -53
  }
```

## 类型化数组

此插件使用类型化数组或 ArrayBuffer 来发送和接收数据。

这意味着您需要在发送前将数据转换为 ArrayBuffer，在接收时从 ArrayBuffer 转换回来。

```tsx
  // 仅限 ASCII
  function stringToBytes(string) {
     var array = new Uint8Array(string.length);
     for (var i = 0, l = string.length; i &lt; l; i++) {
         array[i] = string.charCodeAt(i);
      }
      return array.buffer;
  }

  // 仅限 ASCII
  function bytesToString(buffer) {
      return String.fromCharCode.apply(null, new Uint8Array(buffer));
  }
```

您可以在 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) 和 [HTML5 Rocks](http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/) 的文章中了解更多关于类型化数组的信息。

## UUID

UUID 始终是字符串，而不是数字。一些 16 位 UUID，例如 '2220' 看起来像整数，但它们不是（整数 2220 的十六进制是 0x8AC）。对于 128 位 UUID 这不是问题，因为它们看起来像字符串 82b9e6e1-593a-456f-be9b-9215160ebcac。所有 16 位 UUID 也应该作为字符串传递给方法。