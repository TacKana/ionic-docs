---
sidebar_label: 'Flashlight'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 手电筒

此插件允许你打开或关闭设备的手电筒/闪光灯。

需要 Cordova 插件：`cordova-plugin-flashlight`。更多信息，请参阅 [Flashlight 插件文档](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin)。

<p>
  <a href="https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin" target="_blank" rel="noopener" className="git-link">github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵的时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个严肃的项目，你无法承受花费数小时进行故障排除。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-flashlight {'\n'}$ npm install @awesome-cordova-plugins/flashlight {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-flashlight {'\n'}$ npm install @awesome-cordova-plugins/flashlight{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 包含 Ionic 团队提供全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果你对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>。
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS
- Windows Phone 8

## 使用

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';

constructor(private flashlight: Flashlight) { }

...

this.flashlight.switchOn();

```