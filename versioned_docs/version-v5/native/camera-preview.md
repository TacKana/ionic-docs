---
sidebar_label: 'Camera Preview'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Camera Preview

在 HTML 中显示摄像头预览

需要 Cordova 插件：`https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview.git`。更多信息，请参阅 [Cordova Camera Preview 文档](https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview)。

<p>
  <a href="https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview" target="_blank" rel="noopener" className="git-link">github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview</a>
</p>

<h2>遇到 Cordova 问题了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您没有时间耗费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-camera-preview {'\n'}$ npm install @awesome-cordova-plugins/camera-preview {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-camera-preview {'\n'}$ npm install
      @awesome-cordova-plugins/camera-preview {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队全面支持和维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@awesome-cordova-plugins/camera-preview/ngx';

constructor(private cameraPreview: CameraPreview) { }

...

// 摄像头选项（尺寸和位置）。在以下示例中，预览使用后置摄像头并在 webview 后方显示预览
const cameraPreviewOpts: CameraPreviewOptions = {
  x: 0,
  y: 0,
  width: window.screen.width,
  height: window.screen.height,
  camera: 'rear',
  tapPhoto: true,
  previewDrag: true,
  toBack: true,
  alpha: 1
}

// 启动摄像头
this.cameraPreview.startCamera(cameraPreviewOpts).then(
  (res) => {
    console.log(res)
  },
  (err) => {
    console.log(err)
  });

// 设置每次拍照时运行的处理器
this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
  console.log(result);
  // 对结果进行处理
});


// 图片选项
const pictureOpts: CameraPreviewPictureOptions = {
  width: 1280,
  height: 1280,
  quality: 85
}

// 拍照
this.cameraPreview.takePicture(this.pictureOpts).then((imageData) => {
  this.picture = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
  console.log(err);
  this.picture = 'assets/img/test.jpg';
});

// 拍摄快照
this.cameraPreview.takeSnapshot(this.pictureOpts).then((imageData) => {
  this.picture = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
  console.log(err);
  this.picture = 'assets/img/test.jpg';
});


// 切换摄像头
this.cameraPreview.switchCamera();

// 设置颜色效果为负片
this.cameraPreview.setColorEffect('negative');

// 停止摄像头预览
this.cameraPreview.stopCamera();

```