---
sidebar_label: 'ABBYY Real-Time Recognition'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# ABBYY 实时识别

该插件允许您在应用中使用 ABBYY 实时识别 SDK (RTR SDK) 的文本捕获和数据捕获功能。

<p>
  <a href="https://github.com/abbyysdk/RTR-SDK.Cordova" target="_blank" rel="noopener" className="git-link">github.com/abbyysdk/RTR-SDK.Cordova</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-abbyy-rtr-sdk {'\n'}$ npm install @awesome-cordova-plugins/abbyy-rtr {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-abbyy-rtr-sdk {'\n'}$ npm install @awesome-cordova-plugins/abbyy-rtr{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用指南

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { AbbyyRTR } from '@awesome-cordova-plugins/abbyy-rtr/ngx';


constructor(private abbyyRTR: AbbyyRTR) { }

...


this.abbyyRTR.startTextCapture(options)
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));


this.abbyyRTR.startDataCapture(options)
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

```