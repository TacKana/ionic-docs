---
sidebar_label: 'Firebase Config'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Firebase Config

适用于 Cordova 的 Firebase 配置插件

<p>
  <a href="https://github.com/chemerisuk/cordova-plugin-firebase-config" target="_blank" rel="noopener" className="git-link">github.com/chemerisuk/cordova-plugin-firebase-config</a>
</p>

<h2>遇到 Cordova 问题卡住了吗？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要的项目，您无法承受花费数小时进行故障排查。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-firebase-config {'\n'}$ npm install @awesome-cordova-plugins/firebase-config {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-firebase-config {'\n'}$ npm install
      @awesome-cordova-plugins/firebase-config {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含由 Ionic 团队完全支持并维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或者如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
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
import { FirebaseConfig } from '@awesome-cordova-plugins/firebase-config/ngx';


constructor(private firebaseConfig: FirebaseConfig) { }

...


this.firebaseConfig.getBoolean('my_key')
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

```