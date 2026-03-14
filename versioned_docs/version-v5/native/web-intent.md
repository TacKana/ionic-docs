---
sidebar_label: 'Web Intent'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Web Intent

该插件为 Android 意图机制提供了一个通用适配层，提供了多种处理发送和接收意图的方式。

<p>
  <a href="https://github.com/darryncampbell/ darryncampbell-cordova-plugin-intent" target="_blank" rel="noopener" className="git-link">github.com/darryncampbell/darryncampbell-cordova-plugin-intent</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您不能花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install com-darryncampbell-cordova-plugin-intent {'\n'}$ npm install @awesome-cordova-plugins/web-intent{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add com-darryncampbell-cordova-plugin-intent {'\n'}$ npm install
      @awesome-cordova-plugins/web-intent {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队提供全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对该插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>。
    </blockquote>
  </TabItem>
</Tabs>

## 支持平台

- Android

## 使用说明

### React

[了解如何在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

有关使用信息，请参考该插件的 Github 仓库。

```tsx
import { WebIntent } from '@awesome-cordova-plugins/web-intent/ngx';

constructor(private webIntent: WebIntent) { }

...

const options = {
  action: this.webIntent.ACTION_VIEW,
  url: 'path/to/file',
  type: 'application/vnd.android.package-archive'
}

this.webIntent.startActivity(options).then(onSuccess, onError);

```