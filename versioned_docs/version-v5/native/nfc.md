---
sidebar_label: 'NFC'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# NFC

NFC 插件允许你读取和写入 NFC 标签。你也可以与其他支持 NFC 的设备进行数据发送和接收。

该插件可用于：

- 从 NFC 标签读取数据
- 向 NFC 标签写入数据
- 向其他支持 NFC 的设备发送数据
- 从 NFC 设备接收数据

本插件使用 NDEF（NFC 数据交换格式），以确保在 NFC 设备、标签类型和操作系统之间获得最佳的兼容性。

<p>
  <a href="https://github.com/chariotsolutions/phonegap-nfc" target="_blank" rel="noopener" className="git-link">github.com/chariotsolutions/phonegap-nfc</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵的时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个严肃的项目，你无法承受花费数小时来排查问题。Ionic 的专家为社区插件和企业级插件提供优质的咨询服务。</p>
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
      $ npm install phonegap-nfc {'\n'}$ npm install @awesome-cordova-plugins/nfc {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add phonegap-nfc {'\n'}$ npm install @awesome-cordova-plugins/nfc {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供了 Ionic 团队完全支持并维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或者如果你对本插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS
- Windows

## 用法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';

constructor(private nfc: NFC, private ndef: Ndef) { }

...

// 读取 NFC 标签 - Android
// 一旦启用读卡器模式，任何扫描到的标签都会发送给订阅者
 let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
 this.readerMode$ = this.nfc.readerMode(flags).subscribe(
     tag => console.log(JSON.stringify(tag)),
     err => console.log('读取标签时出错', err)
 );

// 读取 NFC 标签 - iOS
// 在 iOS 上，NFC 读卡器会话会在扫描标签时接管你的应用控制权，然后返回一个标签
try {
    let tag = await this.nfc.scanNdef();
    console.log(JSON.stringify(tag));
 } catch (err) {
     console.log('读取标签时出错', err);
 }

```

有关 NFC 标签操作的更多详细信息，请参阅 https://github.com/chariotsolutions/phonegap-nfc