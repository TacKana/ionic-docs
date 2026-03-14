---
sidebar_label: 'Kommunicate'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Kommunicate

Kommunicate SDK 插件。
借助此插件，您可以轻松为您的应用添加人工客服 + 聊天机器人支持功能。
参考：TODO: 插入网站链接
文档：TODO: 插入链接

<p>
  <a href="https://github.com/Kommunicate-io/Kommunicate-Cordova-Ionic-PhoneGap-Chat-Plugin" target="_blank" rel="noopener" className="git-link">github.com/Kommunicate-io/Kommunicate-Cordova-Ionic-PhoneGap-Chat-Plugin</a>
</p>

<h2>受困于 Cordova 问题？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install kommunicate-cordova-plugin {'\n'}$ npm install @awesome-cordova-plugins/kommunicate {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add kommunicate-cordova-plugin {'\n'}$ npm install @awesome-cordova-plugins/kommunicate{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对此插件的企业版本感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- 浏览器
- iOS

## 使用

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { Kommunicate } from '@awesome-cordova-plugins/Kommunicate';

constructor(private kommunicate: Kommunicate) { }
// 如果需要，也请在 providers 数组中添加 [..., Kommunicate, ... ]

var kmUser = {
   userId : 'randomstring',
   authenticationTypeId : 1
};

this.kommunicate.login(kmUser)
  .then((res: any) => console.log("登录成功。" + res))
  .catch((error: any) => console.error("登录时出错。" + error));

var conversationObject = {
   isUnique : false
};

this.kommunicate.conversationBuilder(converationObject)
  .then((clientChannelKey: any) => console.log("Kommunicate 创建会话成功，clientChannelKey 为：" + clientChannelKey))
  .catch((error: any) => console.error("创建会话时出错。" + error));

```