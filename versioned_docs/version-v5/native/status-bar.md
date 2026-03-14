---
title: 'Status Bar | Cordova StatusBar Plugin for iOS and Android Apps'
description: '使用 Cordova StatusBar 插件管理原生状态栏的外观。了解如何在支持的 iOS 和 Android 平台上安装状态栏。'
sidebar_label: 'Status Bar'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Status Bar

管理原生状态栏的外观。

需要 Cordova 插件：`cordova-plugin-statusbar`。更多信息，请参阅 [StatusBar 插件文档](https://github.com/apache/cordova-plugin-statusbar)。

<p>
  <a href="https://github.com/apache/cordova-plugin-statusbar" target="_blank" rel="noopener" className="git-link">github.com/apache/cordova-plugin-statusbar</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您不能承受花费数小时进行故障排除的代价。Ionic 的专家为社区插件和高级插件提供高级咨询服务。</p>
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
      $ npm install cordova-plugin-statusbar {'\n'}$ npm install @awesome-cordova-plugins/status-bar {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-statusbar {'\n'}$ npm install @awesome-cordova-plugins/status-bar {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含由 Ionic 团队提供全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对本插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>。
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS
- Windows

## Capacitor

不兼容

## 使用方法

### React

[了解有关在 React 中使用 Ionic Native 组件的更多信息](../native-community.md#react)

### Angular

```tsx
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

constructor(private statusBar: StatusBar) { }

...

// 让状态栏覆盖 webview
this.statusBar.overlaysWebView(true);

// 将状态栏设置为白色
this.statusBar.backgroundColorByHexString('#ffffff');
```