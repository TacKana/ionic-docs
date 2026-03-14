---
sidebar_label: '音乐控制'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 音乐控制

适用于 Cordova 应用的音乐控制插件。
显示带有播放/暂停、上一首、下一首按钮的“媒体”通知，允许用户控制播放。
同时处理耳机事件（插入、拔出、耳机按钮）。

<p>
  <a href="https://github.com/ghenry22/cordova-plugin-music-controls2" target="_blank" rel="noopener" className="git-link">github.com/ghenry22/cordova-plugin-music-controls2</a>
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
    { value: 'Enterprise', label: '企业版' },
  ]}
>
  <TabItem value="Capacitor">
    <CodeBlock className="language-shell">
      $ npm install cordova-plugin-music-controls2 {'\n'}$ npm install @awesome-cordova-plugins/music-controls {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-music-controls2 {'\n'}$ npm install
      @awesome-cordova-plugins/music-controls {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对此插件的企业版本感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS
- Windows

## Capacitor

不兼容

## 使用方式

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { MusicControls } from '@awesome-cordova-plugins/music-controls/ngx';

constructor(private musicControls: MusicControls) { }

...

this.musicControls.create({
  track       : 'Time is Running Out',        // 可选，默认值: ''
  artist      : 'Muse',                       // 可选，默认值: ''
  cover       : 'albums/absolution.jpg',      // 可选，默认值: 无
  // cover 可以是本地路径（使用完整路径 'file:///storage/emulated/...'，或者如果 my_image.jpg 在您应用的 www 文件夹中，仅用 'my_image.jpg'）
  //           或者是远程 URL ('http://...', 'https://...', 'ftp://...')
  isPlaying   : true,                         // 可选，默认值: true
  dismissable : true,                         // 可选，默认值: false

  // 隐藏上一首/下一首/关闭按钮:
  hasPrev   : false,      // 显示上一首按钮，可选，默认值: true
  hasNext   : false,      // 显示下一首按钮，可选，默认值: true
  hasClose  : true,       // 显示关闭按钮，可选，默认值: false

// 仅限 iOS，可选
  album       : 'Absolution',     // 可选，默认值: ''
  duration : 60, // 可选，默认值: 0
  elapsed : 10, // 可选，默认值: 0
  hasSkipForward : true,  // 显示快进按钮，可选，默认值: false
  hasSkipBackward : true, // 显示快退按钮，可选，默认值: false
  skipForwardInterval: 15, // 快进显示的时间间隔（秒），可选，默认值: 0
  skipBackwardInterval: 15, // 快退显示的时间间隔（秒），可选，默认值: 0
  hasScrubbing: false, // 在控制中心和锁屏进度条上启用滑动快进，可选

  // 仅限 Android，可选
  // 当通知（和滚动文本）更新时在状态栏中显示的文本，可选
  ticker    : '正在播放 "Time is Running Out"',
  // 所有图标默认使用其内置的 Android 等效图标
  playIcon: 'media_play',
  pauseIcon: 'media_pause',
  prevIcon: 'media_prev',
  nextIcon: 'media_next',
  closeIcon: 'media_close',
  notificationIcon: 'notification'
 });

 this.musicControls.subscribe().subscribe(action => {

   function events(action) {
     const message = JSON.parse(action).message;
     	switch(message) {
     		case 'music-controls-next':
     			// 执行操作
     			break;
     		case 'music-controls-previous':
     			// 执行操作
     			break;
     		case 'music-controls-pause':
     			// 执行操作
     			break;
     		case 'music-controls-play':
     			// 执行操作
     			break;
     		case 'music-controls-destroy':
     			// 执行操作
     			break;

         // 外部控制（仅限 iOS）
         case 'music-controls-toggle-play-pause' :
     			// 执行操作
     			break;
         case 'music-controls-seek-to':
           const seekToInSeconds = JSON.parse(action).position;
           this.musicControls.updateElapsed({
             elapsed: seekToInSeconds,
             isPlaying: true
           });
           // 执行操作
           break;
         case 'music-controls-skip-forward':
           // 执行操作
           break;
         case 'music-controls-skip-backward':
           // 执行操作
           break;

     		// 耳机事件（仅限 Android）
     		// 所有媒体按钮事件如下
     		case 'music-controls-media-button' :
     			// 执行操作
     			break;
     		case 'music-controls-headset-unplugged':
     			// 执行操作
     			break;
     		case 'music-controls-headset-plugged':
     			// 执行操作
     			break;
     		default:
     			break;
     	}
     }
    });

 this.musicControls.listen(); // 激活上面的观察者

 this.musicControls.updateIsPlaying(true);


```