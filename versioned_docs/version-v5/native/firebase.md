---
sidebar_label: 'Firebase'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Firebase

本插件将 Google Firebase 的推送通知、分析、事件追踪、崩溃报告等功能带到您的 Cordova 项目中！支持 Android 和 iOS（包括 iOS 10）。

<p>
  <a href="https://github.com/arnesson/cordova-plugin-firebase" target="_blank" rel="noopener" className="git-link">github.com/arnesson/cordova-plugin-firebase</a>
</p>

<h2>被 Cordova 问题困扰？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您不能承受花费数小时进行故障排除。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-firebase {'\n'}$ npm install @awesome-cordova-plugins/firebase {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-firebase {'\n'}$ npm install @awesome-cordova-plugins/firebase {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对本插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## Capacitor

不兼容

## 使用说明

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { Firebase } from '@awesome-cordova-plugins/firebase/ngx';

constructor(private firebase: Firebase) { }

...

this.firebase.getToken()
  .then(token => console.log(`The token is ${token}`)) // 将令牌保存到服务器端，并用于向此设备推送通知
  .catch(error => console.error('Error getting token', error));

this.firebase.onNotificationOpen()
   .subscribe(data => console.log(`User opened a notification ${data}`));

this.firebase.onTokenRefresh()
  .subscribe((token: string) => console.log(`Got a new token ${token}`));

```