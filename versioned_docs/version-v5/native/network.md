---
title: 'Ionic Native 网络插件：Cordova 网络信息插件'
description: 'Ionic native 网络插件需要 Cordova 插件：cordova-plugin-network-information。阅读本文了解此 Ionic 应用功能及使用详情。'
sidebar_label: '网络'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 网络

需要 Cordova 插件：cordova-plugin-network-information。更多信息请参阅 [网络插件文档](https://github.com/apache/cordova-plugin-network-information)。

<p>
  <a href="https://github.com/apache/cordova-plugin-network-information" target="_blank" rel="noopener" className="git-link">github.com/apache/cordova-plugin-network-information</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发重要项目，承担不起数小时的问题排查成本。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
    <DocsButton className="native-ee-detail">立即联系我们</DocsButton>
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
      $ npm install cordova-plugin-network-information {'\n'}$ npm install @awesome-cordova-plugins/network {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-network-information {'\n'}$ npm install @awesome-cordova-plugins/network{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Amazon Fire OS
- Android
- 浏览器
- iOS
- Windows

## 使用方法

### React

[了解如何在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

```tsx
import { Network } from '@awesome-cordova-plugins/network/ngx';

constructor(private network: Network) { }

...

// 监听网络断开连接
let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
  console.log('网络已断开 :-(');
});

// 停止断开连接监听
disconnectSubscription.unsubscribe();


// 监听网络连接
let connectSubscription = this.network.onConnect().subscribe(() => {
  console.log('网络已连接！');
  // 虽然已获得连接，但需要稍等片刻
   // 才能确定连接类型。可能还需要等待
  // 再进行任何 API 请求
  setTimeout(() => {
    if (this.network.type === 'wifi') {
      console.log('我们获得了 WiFi 连接，太棒了！');
    }
  }, 3000);
});

// 停止连接监听
connectSubscription.unsubscribe();

```