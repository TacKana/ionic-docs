---
sidebar_label: 'Firebase Vision'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Firebase Vision

Firebase MLKit Vision 的 Cordova 插件

<p>
  <a href="https://github.com/alon22/cordova-plugin-firebase-mlvision" target="_blank" rel="noopener" className="git-link">github.com/alon22/cordova-plugin-firebase-mlvision</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要的项目，您无法承受花费数小时排查问题。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
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

    $ npm install cordova-plugin-firebase-mlvision
    $ npm install @awesome-cordova-plugins/firebase-vision
    $ ionic cap sync

  </TabItem>
  <TabItem value="Cordova">

    $ ionic cordova plugin add cordova-plugin-firebase-mlvision
    $ npm install @awesome-cordova-plugins/firebase-vision

  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含由 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对这个插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用方法

### React

[了解更多如何在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

```tsx
import { FirebaseVision } from '@awesome-cordova-plugins/firebase-vision/ngx';


constructor(private firebaseVision: FirebaseVision) { }

...


this.firebaseVision.onDeviceTextRecognizer(FILE_URI)
  .then((res: string) => console.log(res))
  .catch((error: string) => console.error(error));

this.firebaseVision.barcodeDetector(FILE_URI)
  .then((res: Barcode[]) => console.log(res))
  .catch((error: string) => console.error(error));

this.firebaseVision.imageLabeler(FILE_URI)
  .then((res: ImageLabel[]) => console.log(res))
  .catch((error: string) => console.error(error));

```