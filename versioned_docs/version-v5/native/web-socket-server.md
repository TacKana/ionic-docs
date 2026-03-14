---
sidebar_label: 'WebSocket Server'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# WebSocket 服务器

此插件允许您运行一个轻量级、基础功能的单例 WebSocket 服务器。

<p>
  <a href="https://github.com/becvert/cordova-plugin-websocket-server" target="_blank" rel="noopener" className="git-link">github.com/becvert/cordova-plugin-websocket-server</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在进行一个严肃的项目，您无法承担花费数小时进行故障排除的代价。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-websocket-server {'\n'}$ npm install @awesome-cordova-plugins/web-socket-server{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-websocket-server {'\n'}$ npm install
      @awesome-cordova-plugins/web-socket-server {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队完全支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或如果您对此插件的企业版本感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
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

```tsx
import { WebSocketServer } from '@awesome-cordova-plugins/web-socket-server';

constructor(private wsserver: WebSocketServer) { }

...

// 启动 WebSocket 服务器
this.wsserver.start(8888, {}).subscribe({
  next: server => console.log(`正在监听 ${server.addr}:${server.port}`),
  error: error => console.log(`意外错误`, error);
});

// 监听所有消息
this.wsserver.watchMessage().subscribe(result => {
  console.log(`收到来自 ${result.conn.uuid} 的消息：${result.msg}`);
});

// 向指定 uuid 的连接发送消息
this.wsserver.send({ uuid: '8e7c4f48-de68-4b6f-8fca-1067a353968d' }, 'Hello World');

// 停止 WebSocket 服务器
this.wsserver.stop().then(server => {
  console.log(`已停止监听 ${server.addr}:${server.port}`);
});

```