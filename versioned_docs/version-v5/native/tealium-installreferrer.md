---
sidebar_label: 'TealiumInstallReferrer'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# TealiumInstallReferrer

该模块依赖于 [Tealium Cordova 插件](https://github.com/tealium/cordova-plugin)。如果没有安装该插件，本模块将无法正常工作。
此模块实现了一个用于接收 INSTALL_REFERRER 意图的广播接收器。

<p>
  <a href="https://github.com/Tealium/cordova-plugin" target="_blank" rel="noopener" className="git-link">github.com/Tealium/cordova-plugin</a>
</p>

<h2>被 Cordova 问题困扰？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要的项目，无法承受数小时排查问题的时间。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install tealium-cordova-installreferrer {'\n'}$ npm install @awesome-cordova-plugins/tealium-installreferrer{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add tealium-cordova-installreferrer {'\n'}$ npm install
      @awesome-cordova-plugins/tealium-installreferrer {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含 Ionic 团队提供全面支持和维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或者如果您需要此插件的企业版本，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android

## 用法

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```
import { TealiumInstallReferrer } from '@awesome-cordova-plugins/tealium-installreferrer/ngx';


constructor(private installReferrer: TealiumInstallReferrer) { }


this.installReferrer.setPersistent("main");
this.installReferrer.setVolatile("main");



```