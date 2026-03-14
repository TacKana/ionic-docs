---
sidebar_label: '屏幕方向'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 屏幕方向

这是一个用于以通用方式设置/锁定屏幕方向的 Cordova 插件。

需要 Cordova 插件：`cordova-plugin-screen-orientation`。更多信息，请参阅 [屏幕方向插件文档](https://github.com/apache/cordova-plugin-screen-orientation)。

<p>
  <a href="https://github.com/apache/cordova-plugin-screen-orientation" target="_blank" rel="noopener" className="git-link">github.com/apache/cordova-plugin-screen-orientation</a>
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
      $ npm install cordova-plugin-screen-orientation {'\n'}$ npm install @awesome-cordova-plugins/screen-orientation{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-screen-orientation {'\n'}$ npm install
      @awesome-cordova-plugins/screen-orientation {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供了 Ionic 团队全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或者如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS
- Windows

## 使用说明

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

constructor(private screenOrientation: ScreenOrientation) { }

...

// 获取当前方向
console.log(this.screenOrientation.type); // 打印当前方向，例如：'landscape'

// 设置为横屏
this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

// 允许用户旋转
this.screenOrientation.unlock();

// 检测方向变化
this.screenOrientation.onChange().subscribe(
   () => {
       console.log("方向已改变");
   }
);

```