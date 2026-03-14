---
title: 'Barcode Scanner | 安装摄像头条码扫描插件'
description: "Ionic 条码扫描插件可打开摄像头视图并自动扫描条码，将数据返回给您的应用。阅读本文了解安装和使用方法。"
sidebar_label: '条码扫描器'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 条码扫描器

条码扫描器插件能够打开摄像头视图并自动扫描条码，将扫描结果数据返回给您的应用程序。

需要 Cordova 插件：`phonegap-plugin-barcodescanner`。更多信息请参阅 [BarcodeScanner 插件文档](https://github.com/phonegap/phonegap-plugin-barcodescanner)。

<p>
  <a href="https://github.com/phonegap/phonegap-plugin-barcodescanner" target="_blank" rel="noopener" className="git-link">github.com/phonegap/phonegap-plugin-barcodescanner</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发重要项目，承担不起数小时的问题排查成本。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
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
    { value: 'Enterprise', label: '企业版' },
  ]}
>
  <TabItem value="Capacitor">
    <CodeBlock className="language-shell">
      $ npm install phonegap-plugin-barcodescanner {'\n'}$ npm install @awesome-cordova-plugins/barcode-scanner {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add phonegap-plugin-barcodescanner {'\n'}$ npm install
      @awesome-cordova-plugins/barcode-scanner {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队全面支持维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对该插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- BlackBerry 10
- 浏览器
- iOS
- Windows

## 使用方法

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

constructor(private barcodeScanner: BarcodeScanner) { }

...


this.barcodeScanner.scan().then(barcodeData => {
 console.log('条码数据', barcodeData);
}).catch(err => {
	console.log('错误', err);
});
```