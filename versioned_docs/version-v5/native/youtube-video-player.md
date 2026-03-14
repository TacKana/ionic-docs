---
sidebar_label: 'Youtube Video Player'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# YouTube 视频播放器

在原生 YouTube 应用中播放 YouTube 视频。

<p>
  <a href="https://github.com/ihadeed/CordovaYoutubeVideoPlayer" target="_blank" rel="noopener" className="git-link">github.com/ihadeed/CordovaYoutubeVideoPlayer</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要的项目，就无法承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-youtube-video-player {'\n'}$ npm install
      @awesome-cordova-plugins/youtube-video-player {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-youtube-video-player {'\n'}$ npm install
      @awesome-cordova-plugins/youtube-video-player {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队完全支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对此插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
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

对于 Android 5.0+，您需要在 config.xml 中添加以下内容：

```xml
&lt;preference name="YouTubeDataApiKey" value="[YOUR YOUTUBE API]" />
```

更多信息请访问：https://developers.google.com/youtube/v3/getting-started

```tsx
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';

constructor(private youtube: YoutubeVideoPlayer) { }

...


this.youtube.openVideo('myvideoid');

```