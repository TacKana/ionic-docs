---
sidebar_label: 'Document Scanner'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 文档扫描插件

这个插件用于处理文档图像，并校正透视变形。

<p>
  <a href="https://github.com/NeutrinosPlatform/cordova-plugin-document-scanner" target="_blank" rel="noopener" className="git-link">github.com/NeutrinosPlatform/cordova-plugin-document-scanner</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个严肃的项目，就负担不起花费数小时进行故障排除。Ionic 的专家团队为社区插件和高级插件提供优质的咨询服务。</p>
    <DocsButton className="native-ee-detail">立即联系我们！</DocsButton>
  </div>
</DocsCard>

<h2 id="installation">
  <a href="#installation">安装指南</a>
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

    $ npm install cordova-plugin-document-scanner
    $ npm install @awesome-cordova-plugins/document-scanner
    $ ionic cap sync

  </TabItem>
  <TabItem value="Cordova">

    $ ionic cordova plugin add cordova-plugin-document-scanner
    $ npm install @awesome-cordova-plugins/document-scanner

  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对本插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持平台

- Android
- iOS

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { DocumentScanner, DocumentScannerOptions } from '@awesome-cordova-plugins/document-scanner';


constructor(private documentScanner: DocumentScanner) { }

...

let opts: DocumentScannerOptions = {};
this.documentScanner.scanDocument(opts)
  .then((res: string) => console.log(res))
  .catch((error: any) => console.error(error));

```