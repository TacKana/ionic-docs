---
sidebar_label: 'Adjust'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Adjust

这是 Adjust™ 的 Ionic Cordova SDK。你可以在 adjust.com 了解更多关于 Adjust™ 的信息。

需要 Cordova 插件：`com.adjust.sdk`。更多信息，请参阅 [Adjust Cordova SDK](https://github.com/adjust/cordova_sdk)

<p>
  <a href="https://github.com/adjust/cordova_sdk" target="_blank" rel="noopener" className="git-link">github.com/adjust/cordova_sdk</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间了。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个重要的项目，你承担不起花费数小时进行故障排查的代价。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install com.adjust.sdk {'\n'}$ npm install @awesome-cordova-plugins/adjust {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add com.adjust.sdk {'\n'}$ npm install @awesome-cordova-plugins/adjust {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果你对此插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
 import { Adjust, AdjustConfig, AdjustEnvironment } from '@awesome-cordova-plugins/adjust';

 constructor(private adjust: Adjust) { }

 ...

 const config = new AdjustConfig('APP-TOKEN-HERE', AdjustEnvironment.Sandbox);
 config.logLevel = AdjustLogLevel.Verbose;
 // 设置其他配置属性。
 adjust.create(config);

```