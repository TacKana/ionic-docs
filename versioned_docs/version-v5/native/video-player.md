---
sidebar_label: 'Video Player'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 视频播放器

一款 Cordova 插件，能够让你轻松地以全屏模式立即播放视频。

需要 Cordova 插件：`com.moust.cordova.videoplayer`。更多信息请查阅 [VideoPlayer 插件文档](https://github.com/moust/cordova-plugin-videoplayer)。

<p>
  <a href="https://github.com/moust/cordova-plugin-videoplayer" target="_blank" rel="noopener" className="git-link">github.com/moust/cordova-plugin-videoplayer</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个重要的项目，就不能把时间浪费在故障排除上。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install https://github.com/moust/cordova-plugin-videoplayer.git {'\n'}$ npm install
      @awesome-cordova-plugins/video-player {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add https://github.com/moust/cordova-plugin-videoplayer.git {'\n'}$ npm install
      @awesome-cordova-plugins/video-player {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队完全支持并维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果你对这个插件的企业版感兴趣，也可以 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>。
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
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';

constructor(private videoPlayer: VideoPlayer) { }

...

// 播放视频。
this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
 console.log('视频播放完毕');
}).catch(err => {
 console.log(err);
});

```