---
title: 'Native Background Mode | Cordova-Plugin-Background-Mode'
description: '了解 Cordova-plugin-background-mode 的使用方法。这款 Cordova 插件适用于 Ionic Native 应用，可防止应用在后台运行时进入休眠状态。'
sidebar_label: '后台模式'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 后台模式

Cordova 插件，用于防止应用在后台运行时进入休眠状态。
需要 Cordova 插件：cordova-plugin-background-mode。有关插件的更多信息，请访问：https://github.com/katzer/cordova-plugin-background-mode

<p>
  <a href="https://github.com/katzer/cordova-plugin-background-mode" target="_blank" rel="noopener" className="git-link">github.com/katzer/cordova-plugin-background-mode</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承受花费数小时进行故障排查。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-background-mode {'\n'}$ npm install @awesome-cordova-plugins/background-mode {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-background-mode {'\n'}$ npm install
      @awesome-cordova-plugins/background-mode {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对该插件的企业版本感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- AmazonFire OS
- Android
- 浏览器
- iOS
- Windows

## 使用方法

### React

[了解如何在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

```tsx
import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx';

constructor(private backgroundMode: BackgroundMode) { }

...

this.backgroundMode.enable();
```