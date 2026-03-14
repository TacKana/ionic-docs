---
sidebar_label: 'Android ExoPlayer'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Android ExoPlayer

基于谷歌 ExoPlayer 框架的 Cordova 媒体播放器插件。

https://github.com/google/ExoPlayer

<p>
  <a href="https://github.com/frontyard/cordova-plugin-exoplayer" target="_blank" rel="noopener" className="git-link">github.com/frontyard/cordova-plugin-exoplayer</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要项目，就经不起花数小时进行故障排查。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-exoplayer {'\n'}$ npm install @awesome-cordova-plugins/android-exoplayer {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-exoplayer {'\n'}$ npm install @awesome-cordova-plugins/android-exoplayer{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队完全支持并维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android

## 使用方法

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { AndroidExoPlayer } from '@awesome-cordova-plugins/android-exoplayer/ngx';

constructor(private androidExoPlayer: AndroidExoPlayer) { }

...

this.androidExoPlayer.show({url: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube'});

```