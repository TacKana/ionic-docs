---
title: 'Document Viewer | Cordova Plugin Document Viewer for PDF Files'
description: 'Cordova 文档查看器插件提供了一个简洁的 API，用于查看存储在应用资源文件夹（/www/*）或通过 Cordova 文件插件可访问的任何其他文件系统目录中的 PDF 文件。'
sidebar_label: 'Document Viewer'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 文档查看器

该插件提供了一个简洁的 API，用于查看存储在应用资源文件夹（`/www/*`）或通过 Cordova 文件插件可访问的任何其他文件系统目录中的 PDF 文件。

<p>
  <a href="https://github.com/sitewaerts/cordova-plugin-document-viewer" target="_blank" rel="noopener" className="git-link">github.com/sitewaerts/cordova-plugin-document-viewer</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您承受不起花费数小时进行故障排除的代价。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-document-viewer {'\n'}$ npm install @awesome-cordova-plugins/document-viewer {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-document-viewer {'\n'}$ npm install
      @awesome-cordova-plugins/document-viewer {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持和维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对该插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
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
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';


constructor(private document: DocumentViewer) { }

...
const options: DocumentViewerOptions = {
  title: '我的PDF'
}

this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)

```