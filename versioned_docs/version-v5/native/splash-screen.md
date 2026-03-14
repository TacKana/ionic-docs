---
title: 'Splash Screen | Cordova Splash Screen Plugin for Android & iOS'
description: '本 Cordova 插件可在应用启动期间显示和隐藏启动画面。允许在 Android 或 iOS 应用加载完成后显示和隐藏启动画面。'
sidebar_label: 'Splash Screen'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 启动画面

本插件在应用启动期间显示和隐藏启动画面。下方提供的方法允许在应用加载完成后显示和隐藏启动画面。

<p>
  <a href="https://github.com/apache/cordova-plugin-splashscreen" target="_blank" rel="noopener" className="git-link">github.com/apache/cordova-plugin-splashscreen</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
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
    { value: 'Enterprise', label: 'Enterprise' },
  ]}
>
  <TabItem value="Capacitor">
    <CodeBlock className="language-shell">
      $ npm install cordova-plugin-splashscreen {'\n'}$ npm install @awesome-cordova-plugins/splash-screen {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-splashscreen {'\n'}$ npm install @awesome-cordova-plugins/splash-screen{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对本插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Amazon Fire OS
- Android
- iOS
- Windows

## Capacitor

不兼容

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';

constructor(private splashScreen: SplashScreen) { }

...

this.splashScreen.show();

this.splashScreen.hide();
```