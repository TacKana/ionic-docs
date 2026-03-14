---
sidebar_label: 'TealiumAdIdentifier'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# TealiumAdIdentifier

本模块依赖于 [Tealium Cordova Plugin](https://github.com/tealium/cordova-plugin)。如果没有安装该插件，此模块将无法正常工作。
该模块的作用是让 IDFA 和 Google 广告标识符在 Tealium 数据层中可用。

<p>
  <a href="https://github.com/Tealium/cordova-plugin" target="_blank" rel="noopener" className="git-link">github.com/Tealium/cordova-plugin</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，就经不起花费数小时来排查问题。Ionic 的专家团队为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install tealium-cordova-adidentifier {'\n'}$ npm install @awesome-cordova-plugins/tealium-adidentifier{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add tealium-cordova-adidentifier {'\n'}$ npm install
      @awesome-cordova-plugins/tealium-adidentifier {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或如果您对该插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 用法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```
import { TealiumAdIdentifier } from '@awesome-cordova-plugins/tealium-adidentifier/ngx';


constructor(private adIdentifier: TealiumAdIdentifier) { }

...


this.adIdentifier.setPersistent("main");
this.adIdentifier.setVolatile("main");

```