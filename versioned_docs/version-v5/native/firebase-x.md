---
sidebar_label: 'Firebase X'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Firebase X

该插件将 Google Firebase 的推送通知、分析、事件追踪、崩溃报告等功能引入您的 Cordova 项目！支持 Android 和 iOS 平台。
它是基于已停止维护的 ionic-native 插件 Firebase 的一个活跃分支。

<p>
  <a href="https://github.com/dpa99c/cordova-plugin-firebasex" target="_blank" rel="noopener" className="git-link">github.com/dpa99c/cordova-plugin-firebasex</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-firebasex {'\n'}$ npm install @awesome-cordova-plugins/firebase-x {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-firebasex {'\n'}$ npm install @awesome-cordova-plugins/firebase-x {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含由 Ionic 团队提供全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对此插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用说明

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { FirebaseX } from '@awesome-cordova-plugins/firebase-x/ngx';


constructor(private firebaseX: FirebaseX) { }

...


this.firebaseX.getToken()
  .then(token => console.log(`The token is ${token}`)) // 将令牌保存到服务器端，并用它向此设备推送通知
  .catch(error => console.error('Error getting token', error));

this.firebaseX.onMessageReceived()
  .subscribe(data => console.log(`User opened a notification ${data}`));

this.firebaseX.onTokenRefresh()
  .subscribe((token: string) => console.log(`Got a new token ${token}`));
```