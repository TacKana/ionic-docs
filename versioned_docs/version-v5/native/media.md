---
sidebar_label: 'Media'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Media

该插件提供了在设备上录制和播放音频文件的功能。

<p>
  <a href="https://github.com/apache/cordova-plugin-media" target="_blank" rel="noopener" className="git-link">github.com/apache/cordova-plugin-media</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在构建一个严肃的项目，就承担不起花费数小时进行故障排除的代价。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-media {'\n'}$ npm install @awesome-cordova-plugins/media {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-media {'\n'}$ npm install @awesome-cordova-plugins/media {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供了由 Ionic 团队全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果你对该插件的企业版本感兴趣，请<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>。
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- 浏览器
- iOS
- Windows

## 使用说明

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';


constructor(private media: Media) { }


...


// 创建一个 Media 实例。参数期望是文件路径或 URL
// 我们可以选择性地传递第二个参数来追踪媒体的状态

const file: MediaObject = this.media.create('file.mp3');

// 监听插件事件：

file.onStatusUpdate.subscribe(status => console.log(status)); // 当文件状态改变时触发

file.onSuccess.subscribe(() => console.log('操作成功'));

file.onError.subscribe(error => console.log('错误！', error));

// 播放文件
file.play();

// 暂停文件
file.pause();

// 获取当前播放位置
file.getCurrentPosition().then((position) => {
  console.log(position);
});

// 获取文件时长
let duration = file.getDuration();
console.log(duration);

// 跳转到 10 秒处（期望传入以毫秒为单位的整数值）
file.seekTo(10000);

// 停止播放文件
file.stop();

// 释放原生音频资源
// 平台特性说明：
// iOS 只需创建一个新实例，旧实例就会被覆盖
// Android 你必须在使用完后调用 release() 来销毁 media 实例
file.release();



// 录制到文件
const file: MediaObject = this.media.create('path/to/file.mp3');

file.startRecord();

file.stopRecord();


```

如果你在使用 iOS 且录制功能不工作，这里有一些提示：
1.) 尝试使用绝对文件路径，但去掉开头的 "file://"。
那么路径看起来像这样：`/var/mobile/Containers/Data/Application/AF438B8B-7724-4FBB-8E69-083463224FC4/tmp/my_file.m4a`
示例：`this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'my_file.m4a')`
2.) 如果那样也不行，请在使用前先创建文件。
示例：

```tsx
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';

...

constructor(private media: Media, private file: File) { }

...

this.file.createFile(this.file.tempDirectory, 'my_file.m4a', true).then(() => {
  let file = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'my_file.m4a');
  file.startRecord();
  window.setTimeout(() => file.stopRecord(), 10000);
});
```

你可以在这里找到原因：https://github.com/ionic-team/ionic-native/issues/1452#issuecomment-299605906