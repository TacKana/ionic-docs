---
sidebar_label: 'OCR'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# OCR

该插件用于尝试从图像中识别并提取文字。
请注意：此插件依赖的 GoogleMobileVision pod 引用了已被 Apple 弃用的 UIWebview。
请不要在打算上架 App Store 的应用中使用此插件，否则你会收到 Apple 的审核拒绝通知：`已弃用的 API 使用 — Apple 将停止接受使用 UIWebView API 的应用程序提交`
更多信息请参阅以下 Github issue [Google Mobile Vision 依赖已弃用的 UIWebview](https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr/issues/27)。

<p>
  <a href="https://github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr" target="_blank" rel="noopener" className="git-link">github.com/NeutrinosPlatform/cordova-plugin-mobile-ocr</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个严肃的项目，你无法承担花费数小时进行故障排除的代价。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-mobile-ocr {'\n'}$ npm install @awesome-cordova-plugins/ocr {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-mobile-ocr {'\n'}$ npm install @awesome-cordova-plugins/ocr {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果你对本插件的企业版本感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>。
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
import { OCR, OCRSourceType } from '@awesome-cordova-plugins/ocr/ngx';


constructor(private ocr: OCR) { }

...

this.ocr.recText(OCRSourceType.NORMFILEURL, "file://path/to/image.png")
  .then((res: OCRResult) => console.log(JSON.stringify(res)))
  .catch((error: any) => console.error(error));

```