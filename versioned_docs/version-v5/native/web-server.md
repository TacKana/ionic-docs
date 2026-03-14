---
sidebar_label: 'Web Server'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Web Server

该插件允许您为 Android 和 iOS 设备启动一个本地动态内容 Web 服务器。

<p>
  <a href="https://github.com/bykof/cordova-plugin-webserver.git" target="_blank" rel="noopener" className="git-link">github.com/bykof/cordova-plugin-webserver.git</a>
</p>

<h2>遇到 Cordova 问题卡住了吗？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵的时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个重要的项目，您无法承担花费数小时进行故障排除的代价。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-webserver {'\n'}$ npm install @awesome-cordova-plugins/web-server {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-webserver {'\n'}$ npm install @awesome-cordova-plugins/web-server {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { WebServer } from '@awesome-cordova-plugins/web-server/ngx';


constructor(private webServer: WebServer) { }

...

this.webServer.onRequest().subscribe(data => {
  console.log(data);
  const res: Response = {
    status: 200,
    body: '',
    headers: {
      'Content-Type': 'text/html'
    }
  };

  this.webServer.sendResponse(data.requestId, res)
    .catch((error: any) => console.error(error));
});

this.webServer.start(80)
  .catch((error: any) => console.error(error));

```