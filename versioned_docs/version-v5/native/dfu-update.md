---
sidebar_label: 'Dfu Update'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Dfu Update

本插件是一个封装器，用于通过 Nordic Semiconductor 的设备固件更新（DFU）服务来升级蓝牙低功耗设备。

<p>
  <a href="https://github.com/EinfachHans/cordova-plugin-dfu-update" target="_blank" rel="noopener" className="git-link">github.com/EinfachHans/cordova-plugin-dfu-update</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-dfu-update {'\n'}$ npm install @awesome-cordova-plugins/dfu-update {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-dfu-update {'\n'}$ npm install @awesome-cordova-plugins/dfu-update{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队全面支持和维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或者如果您对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
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
import { DfuUpdate } from '@awesome-cordova-plugins/dfu-update/ngx';


constructor(private dfuUpdate: DfuUpdate) { }

...


this.dfuUpdate.updateFirmware('fileURL', 'deviceIdentifier')
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

```