---
sidebar_label: 'BlinkId'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# BlinkId

用于条形码和文档扫描的 Microblink SDK 封装器。有关可用的识别器和其他设置，请参阅 blinkid-phonegap 仓库

<p>
  <a href="https://github.com/BlinkID/blinkid-phonegap" target="_blank" rel="noopener" className="git-link">github.com/BlinkID/blinkid-phonegap</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install blinkid-cordova {'\n'}$ npm install @awesome-cordova-plugins/blinkid {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add blinkid-cordova {'\n'}$ npm install @awesome-cordova-plugins/blinkid {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- iOS
- Android

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { BlinkId, RecognizerResultState } from '@awesome-cordova-plugins/blinkid/ngx';

constructor(private blinkId: BlinkId) { }

...

const overlaySettings = new this.blinkId.DocumentOverlaySettings();

const usdlRecognizer = new this.blinkId.UsdlRecognizer();
const usdlSuccessFrameGrabber = new this.blinkId.SuccessFrameGrabberRecognizer(usdlRecognizer);

const barcodeRecognizer = new this.blinkId.BarcodeRecognizer();
barcodeRecognizer.scanPdf417 = true;

const recognizerCollection = new this.blinkId.RecognizerCollection([
  usdlSuccessFrameGrabber,
  barcodeRecognizer,
]);

const canceled = await this.blinkId.scanWithCamera(
  overlaySettings,
  recognizerCollection,
  { ios: IOS_LICENSE_KEY, android: ANDROID_LICENSE_KEY },
);

if (!canceled) {
  if (usdlRecognizer.result.resultState === RecognizerResultState.valid) {
    const successFrame = usdlSuccessFrameGrabber.result.successFrame;
    if (successFrame) {
      this.base64Img = `data:image/jpg;base64, ${successFrame}`;
      this.fields = usdlRecognizer.result.fields;
    }
  } else {
    this.barcodeStringData = barcodeRecognizer.result.stringData;
  }
}

...

const overlaySettings = new this.blinkId.BlinkCardOverlaySettings();
const recognizer = new this.blinkId.BlinkCardRecognizer();
recognizer.returnFullDocumentImage = false;
recognizer.detectGlare = true;
recognizer.extractCvv = true;
recognizer.extractValidThru = true;
recognizer.extractOwner = true;

const recognizerCollection = new this.blinkId.RecognizerCollection([recognizer]);
const canceled = await this.blinkId.scanWithCamera(
  overlaySettings,
  recognizerCollection,
  {
    ios: '', //iOS 许可证密钥
    android: '' //Android 许可证密钥
  },
);

if (!canceled) {
  if (recognizer.result.resultState === RecognizerResultState.valid) {
    const results = recognizer.result;

    if (results.resultState === RecognizerResultState.valid) {
      const ccInfo = {
        cardNumber: Number(results.cardNumber),
        expirationMonth: Number(results.validThru.month),
        expirationYear: Number(results.validThru.year),
        cvv: Number(results.cvv)
      };
    }
  }
```