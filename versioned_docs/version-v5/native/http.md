---
sidebar_label: 'HTTP'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# HTTP

这是一个用于与 HTTP 服务器通信的 Cordova / Phonegap 插件。支持 iOS 和 Android 平台。

相较于 JavaScript 原生请求的优势：

- 支持 SSL / TLS 证书固定
- 不受 CORS 限制影响
- 可处理 HTTP 401 状态码 - 更多信息请参阅 [Issue CB-2415](https://issues.apache.org/jira/browse/CB-2415)

<p>
  <a href="https://github.com/silkimen/cordova-plugin-advanced-http" target="_blank" rel="noopener" className="git-link">github.com/silkimen/cordova-plugin-advanced-http</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要浪费时间在插件问题上。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您无法承受数小时排查问题的时间。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install cordova-plugin-advanced-http {'\n'}$ npm install @awesome-cordova-plugins/http {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-advanced-http {'\n'}$ npm install @awesome-cordova-plugins/http {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队完全支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用说明

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

constructor(private http: HTTP) {}

...

this.http.get('http://ionic.io', {}, {})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // 服务器返回的数据
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // 错误信息字符串
    console.log(error.headers);

  });

```