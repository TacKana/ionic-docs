---
title: 'WebView | Ionic Framework Cordova WebView App Plugin'
description: 'Cordova WebView 插件允许在 Ionic Framework 应用中访问 Web View 实用工具。查看 Ionic Web View 代码库以获取有关 iOS 和 Android 系统使用的信息。'
sidebar_label: 'Ionic Webview'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Ionic Webview

访问 Web View 实用工具。

需要 Cordova 插件：`cordova-plugin-ionic-webview` > 2.0。更多信息，请查看 [Ionic Web View](https://github.com/ionic-team/cordova-plugin-ionic-webview) 代码库。

<p>
  <a href="https://github.com/ionic-team/cordova-plugin-ionic-webview" target="_blank" rel="noopener" className="git-link">github.com/ionic-team/cordova-plugin-ionic-webview</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您负担不起数小时排查故障的时间。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-ionic-webview {'\n'}$ npm install @awesome-cordova-plugins/ionic-webview {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-ionic-webview {'\n'}$ npm install @awesome-cordova-plugins/ionic-webview
      {'\n'}
      # 更多信息，请访问: [Awesome Cordova Plugins - Ionic WebView](https://danielsogl.gitbook.io/awesome-cordova-plugins/ionic-webview)
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队完全支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## Capacitor

不兼容

## 用法

### React

[了解更多关于在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

```tsx
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';


constructor(private webview: WebView) { }

...

img = this.webview.convertFileSrc('file:///Users/dan/camera-image-12345.png')

```