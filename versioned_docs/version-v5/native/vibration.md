---
sidebar_label: 'Vibration'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Vibration

使设备振动

<p>
  <a href="https://github.com/apache/cordova-plugin-vibration" target="_blank" rel="noopener" className="git-link">github.com/apache/cordova-plugin-vibration</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您承担不起花费数小时进行故障排查的代价。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-vibration {'\n'}$ npm install @awesome-cordova-plugins/vibration {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-vibration {'\n'}$ npm install @awesome-cordova-plugins/vibration {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队完全支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对本插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请与我们联系</a>。
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS
- Windows

## 用法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';

constructor(private vibration: Vibration) { }

...

// 使设备振动一秒
// iOS 上会忽略持续时间参数。
this.vibration.vibrate(1000);

// 振动 2 秒
// 暂停 1 秒
// 再振动 2 秒
// 振动模式仅在 Android 和 Windows 上有效
this.vibration.vibrate([2000,1000,2000]);

// 立即停止任何当前振动
// 仅在 Android 和 Windows 上有效
this.vibration.vibrate(0);
```