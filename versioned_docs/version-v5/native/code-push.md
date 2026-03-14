---
sidebar_label: '代码热更新'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 代码热更新

这是微软为 Cordova 提供的代码热更新插件，支持 iOS 和 Android 平台。

更多信息请访问 https://github.com/Dellos7/example-cordova-code-push-plugin

<p>
  <a href="https://github.com/Microsoft/cordova-plugin-code-push" target="_blank" rel="noopener" className="git-link">github.com/Microsoft/cordova-plugin-code-push</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间了"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个重要的项目，经不起数小时的问题排查。Ionic 专家为社区插件和高级插件提供专业咨询服务。</p>
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
      $ npm install cordova-plugin-code-push {'\n'}$ npm install @awesome-cordova-plugins/code-push {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-code-push {'\n'}$ npm install @awesome-cordova-plugins/code-push {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含 Ionic 团队全面支持维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果你想获取此插件的企业版本 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用方法

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { CodePush } from '@awesome-cordova-plugins/code-push/ngx';

constructor(private codePush: CodePush) { }

...

// 注意 - 由于 syncStatus 会包含更新的当前状态
// observable 的错误和完成方法通常不会触发
this.codePush.sync().subscribe((syncStatus) => console.log(syncStatus));

const downloadProgress = (progress) => { console.log(`已下载 ${progress.receivedBytes} / ${progress.totalBytes}`); }
this.codePush.sync({}, downloadProgress).subscribe((syncStatus) => console.log(syncStatus));

```