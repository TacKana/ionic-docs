---
title: '安装相机 | Cordova 相机插件用于 Ionic 应用'
description: '使用 Cordova 插件在 Ionic Framework 中安装相机，并在支持的平台上通过相机组件拍摄照片或录制视频。'
sidebar_label: '相机'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 相机

拍摄照片或录制视频。

需要 Cordova 插件：`cordova-plugin-camera`。更多信息请参阅 [Cordova 相机插件文档](https://github.com/apache/cordova-plugin-camera)。

[警告] 自 IOS 10 起，相机功能需要权限配置，请在 config.xml 文件中添加以下内容：

```xml
<config-file parent="NSCameraUsageDescription" platform="ios" target="*-Info.plist">
 <string>您可以拍摄照片</string>
</config-file>
```

并将其放在 `<platform name='ios'>` 部分内。

<p>
  <a href="https://github.com/apache/cordova-plugin-camera" target="_blank" rel="noopener" className="git-link">github.com/apache/cordova-plugin-camera</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-camera {'\n'}$ npm install @awesome-cordova-plugins/camera {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-camera {'\n'}$ npm install @awesome-cordova-plugins/camera {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含 Ionic 团队提供全面支持和维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或如果您对此插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- 浏览器
- iOS
- Windows

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

constructor(private camera: Camera) { }

...


const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData 可以是 base64 编码的字符串或文件 URI
 // 如果是 base64 (DATA_URL)：
 let base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // 处理错误
});
```