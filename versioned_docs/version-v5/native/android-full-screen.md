---
sidebar_label: 'Android 全屏'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Android 全屏

此插件使开发者能够在其 Cordova 和 PhoneGap 的 Android 应用中为用户提供真正的全屏体验。
基于 Android 4.0+ 系统，您可以使用“精简模式”实现真正的全屏，就像在 YouTube 等应用中看到的那样，将应用扩展到屏幕边缘，隐藏状态栏和导航栏，直到用户下次交互。这非常适合视频或过场动画内容。
而在 Android 4.4+ 系统中，您现在可以进入真正的全屏、完全交互式的沉浸模式。在此模式下，您的应用将保持真正的全屏状态，除非您主动退出；用户可以从屏幕顶部向下滑动以临时显示系统界面。

<p>
  <a href="https://github.com/mesmotronic/cordova-plugin-fullscreen" target="_blank" rel="noopener" className="git-link">github.com/mesmotronic/cordova-plugin-fullscreen</a>
</p>

<h2>遇到 Cordova 问题了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵的时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您负担不起花费数小时进行故障排除。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-fullscreen {'\n'}$ npm install @awesome-cordova-plugins/android-full-screen {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-fullscreen {'\n'}$ npm install
      @awesome-cordova-plugins/android-full-screen {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对此插件的企业版本感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { AndroidFullScreen } from '@awesome-cordova-plugins/android-full-screen/ngx';

constructor(private androidFullScreen: AndroidFullScreen) { }

...

this.androidFullScreen.isImmersiveModeSupported()
  .then(() => console.log('沉浸模式支持'))
  .catch(err => console.log(err));

```