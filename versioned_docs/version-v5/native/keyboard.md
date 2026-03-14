---
sidebar_label: 'Keyboard'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Keyboard

适用于 Cordova 的键盘插件。

需要 Cordova 插件：`cordova-plugin-ionic-keyboard`。详细信息请参阅 [Keyboard 插件文档](https://github.com/ionic-team/cordova-plugin-ionic-keyboard)。

<p>
  <a href="https://github.com/ionic-team/cordova-plugin-ionic-keyboard" target="_blank" rel="noopener" className="git-link">github.com/ionic-team/cordova-plugin-ionic-keyboard</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-ionic-keyboard {'\n'}$ npm install @awesome-cordova-plugins/keyboard {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-ionic-keyboard {'\n'}$ npm install @awesome-cordova-plugins/keyboard{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队全面支持和维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对此插件有企业版需求 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## Capacitor

不兼容

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

```tsx
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';

constructor(private keyboard: Keyboard) { }

...

this.keyboard.show();

this.keyboard.hide();

```