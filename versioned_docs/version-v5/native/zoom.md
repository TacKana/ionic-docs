---
sidebar_label: 'Zoom'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Zoom

一款 Cordova 插件，用于在 Cordova 应用程序中使用 Zoom 视频会议服务。

<p>
  <a href="https://github.com/zoom/zoom-sdk-ionic" target="_blank" rel="noopener" className="git-link">github.com/zoom/zoom-sdk-ionic</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个重要的项目，您无法承担耗费数小时进行故障排除的代价。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova.plugin.zoom {'\n'}$ npm install @awesome-cordova-plugins/zoom {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova.plugin.zoom {'\n'}$ npm install @awesome-cordova-plugins/zoom {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队完全支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
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
import { Zoom } from '@awesome-cordova-plugins/zoom';


constructor(private zoomService: Zoom) { }

...

// 初始化 Zoom SDK，需要在应用启动时调用。
this.zoomService.initialize(API_KEY, API_SECRET)
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));

// 使用 Zoom 用户名和密码登录用户。
this.zoomService.login(userName, password)
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));

// 注销用户。
this.zoomService.logout()
  .then((success: boolean) => console.log(success))
  .catch((error: any) => console.log(error));

// 检查用户是否已登录。
this.zoomService.isLoggedIn()
  .then((success: boolean) => console.log(success))
  .catch((error: any) => console.log(error));

// 会议选项（仅适用于 Android）
let options = {
"no_driving_mode":true,
"no_invite":true,
"no_meeting_end_message":true,
"no_titlebar":false,
"no_bottom_toolbar":false,
"no_dial_in_via_phone":true,
"no_dial_out_to_phone":true,
"no_disconnect_audio":true,
"no_share":true,
"no_audio":true,
"no_video":true,
"no_meeting_error_message":true
};

// 加入会议。
this.zoomService.joinMeeting(meetingNumber, meetingPassword, displayName, options)
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));

// 为非登录用户启动一个现有会议。
this.zoomService.startMeetingWithZAK(meetingNumber, displayName, zoomToken, zoomAccessToken, userId, options)
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));

// 为已登录用户启动一个现有会议。
this.zoomService.startMeeting(meetingNumber, vanityId, options)
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));

// 为已登录用户启动一个即时会议。
this.zoomService.startInstantMeeting()
  .then((success: anu) => console.log(success))
  .catch((error: any) => console.log(error));

// 设置语言。
this.zoomService.setLanguage("en-US")
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));
```