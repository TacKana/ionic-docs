---
title: "File Transfer | Cordova Docs File Transfer Download Plugin"
description: "Cordova 文件传输插件支持文档文件的上传与下载。该插件兼容 iOS、Android、Windows 等多个平台。"
sidebar_label: "File Transfer"
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# File Transfer

该插件允许你上传和下载文件。

<p>
  <a href="https://github.com/apache/cordova-plugin-file-transfer" target="_blank" rel="noopener" className="git-link">github.com/apache/cordova-plugin-file-transfer</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个重要的项目，就无法承受花费数小时进行故障排除。Ionic 的专家为社区插件和企业级插件提供高级咨询服务。</p>
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
      $ npm install cordova-plugin-file-transfer {'\n'}$ npm install @awesome-cordova-plugins/file-transfer {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-file-transfer {'\n'}$ npm install @awesome-cordova-plugins/file-transfer{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或如果你对该插件的企业版感兴趣，请<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>。
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Amazon Fire OS
- Android
- Browser
- iOS
- Ubuntu
- Windows
- Windows Phone

## 使用方法

### React

[进一步了解在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

```tsx
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { File } from '@awesome-cordova-plugins/file';

constructor(private transfer: FileTransfer, private file: File) { }

...

const fileTransfer: FileTransferObject = this.transfer.create();

// 上传文件：
fileTransfer.upload(..).then(..).catch(..);

// 下载文件：
fileTransfer.download(..).then(..).catch(..);

// 中止当前传输：
fileTransfer.abort();

// 完整示例
upload() {
  let options: FileUploadOptions = {
     fileKey: 'file',
     fileName: 'name.jpg',
     headers: {}
     .....
  }

  fileTransfer.upload('&lt;file path>', '&lt;api endpoint>', options)
   .then((data) => {
     // 成功
   }, (err) => {
     // 错误
   })
}

download() {
  const url = 'http://www.example.com/file.pdf';
  fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
    console.log('下载完成：' + entry.toURL());
  }, (error) => {
    // 处理错误
  });
}

```

若要将文件存储在不同的或公开可访问的目录中，请参考以下链接
https://github.com/apache/cordova-plugin-file#where-to-store-files