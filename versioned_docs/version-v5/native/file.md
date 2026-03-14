---
title: 'File API 插件：实现设备文件读写访问'
description: 'File API 插件允许对设备上的文件进行读写访问，并提供了访问文件和目录的静态便捷方法。'
sidebar_label: '文件'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 文件

该插件实现了 File API，允许对设备上的文件进行读写访问。

File 类提供了访问文件和目录的静态便捷方法。

示例：

```
import { File } from '@awesome-cordova-plugins/file/ngx';

constructor(private file: File) { }

...

this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('目录已存在')).catch(err =>
  console.log('目录不存在'));

```

该插件基于多个规范实现，包括：HTML5 File API http: //www.w3.org/TR/FileAPI/
（现已废弃的）Directories and System 扩展 最新版本：http: //www.w3.org/TR/2012/WD-file-system-api-20120417/
虽然大部分插件代码是基于早期规范编写的：http:
//www.w3.org/TR/2011/WD-file-system-api-20110419/ 同时还实现了 FileWriter 规范：http:
//dev.w3.org/2009/dap/file-system/file-writer.html

<p>
  <a href="https://github.com/apache/cordova-plugin-file" target="_blank" rel="noopener" className="git-link">github.com/apache/cordova-plugin-file</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个重要的项目，承受不起数小时的问题排查时间。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-file {'\n'}$ npm install @awesome-cordova-plugins/file {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-file {'\n'}$ npm install @awesome-cordova-plugins/file {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对该插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- 浏览器
- iOS
- macOS
- Windows