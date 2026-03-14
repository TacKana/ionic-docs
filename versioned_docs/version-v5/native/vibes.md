---
sidebar_label: 'Vibes'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Vibes

该插件可将 Vibes 推送 SDK 集成到您的 Cordova 项目中，同时支持 Android 和 iOS 平台。

<p>
  <a href="https://github.com/vibes/vibes-cordova.git" target="_blank" rel="noopener" className="git-link">github.com/vibes/vibes-cordova.git</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在进行一个重要的项目，您无法承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install vibes-cordova {'\n'}$ npm install @awesome-cordova-plugins/vibes {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add vibes-cordova {'\n'}$ npm install @awesome-cordova-plugins/vibes {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对该插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>。
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用方法

### React

[了解如何在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

```tsx
import { Vibes } from '@awesome-cordova-plugins/vibes/ngx';


constructor(private vibes: Vibes) { }

...


this.vibes.registerDevice()
  .then((res: any) => console.log(`设备注册成功: ${res}`)) // 从 `res` JSON 对象中检索并保存 device_id
  .catch((error: any) => console.error('注册设备时出错', error));

this.vibes.registerPush()
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error('注册推送时出错', error));

this.vibes.getVibesDeviceInfo()
  .then((res: any) => console.log(res)) // 从 JSON 对象中检索 `device_id` 和 `push_token`
  .catch((error: any) => console.error('检索设备信息时出错', error));

this.vibes.fetchInboxMessages()
  .then((res: any) => console.log(res)) // 获取此用户的收件箱消息。
  .catch((error: any) => console.error('获取此用户的收件箱消息时出错', error));
```