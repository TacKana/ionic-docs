---
title: '应用版本 | Cordova 插件：读取 Ionic 应用的版本信息'
description: '应用版本功能可从目标构建设置中读取您的 Ionic 应用版本。使用前需安装 cordova-plugin-app-version 插件。阅读了解更多信息。'
sidebar_label: '应用版本'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 应用版本

从目标构建设置中读取您的应用版本信息。

需要 Cordova 插件：`cordova-plugin-app-version`。更多信息请参阅 [Cordova 应用版本文档](https://github.com/whiteoctober/cordova-plugin-app-version)。

<p>
  <a href="https://github.com/whiteoctober/cordova-plugin-app-version" target="_blank" rel="noopener" className="git-link">github.com/whiteoctober/cordova-plugin-app-version</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建重要项目，经不起数小时的问题排查。Ionic 专家为社区插件和高级插件提供专业咨询服务。</p>
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
      $ npm install cordova-plugin-app-version {'\n'}$ npm install @awesome-cordova-plugins/app-version {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-app-version {'\n'}$ npm install @awesome-cordova-plugins/app-version{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含 Ionic 团队提供全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>或如果您对该插件的企业版本感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS
- Windows

## 使用说明

### React

[了解在 React 中使用 Ionic Native 组件的更多信息](../native-community.md#react)

### Angular

```tsx
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';

constructor(private appVersion: AppVersion) { }

...


this.appVersion.getAppName();
this.appVersion.getPackageName();
this.appVersion.getVersionCode();
this.appVersion.getVersionNumber();

```