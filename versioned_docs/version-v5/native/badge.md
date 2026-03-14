---
sidebar_label: 'Badge'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Badge

角标数字的核心作用是让应用能够通知用户某些待处理事项——例如未读消息——即使应用未在前台运行。

需要 Cordova 插件：cordova-plugin-badge。更多信息，请参阅 [Badge 插件文档](https://github.com/katzer/cordova-plugin-badge)。

Android 注意：历史上，角标功能通常由第三方启动器实现，只有在使用这些启动器（例如三星或 Nova 启动器）且用户启用了该功能时才会显示。从 Android 8 (Oreo) 开始，官方引入了[通知角标](https://developer.android.com/training/notify-user/badges)来反映未读通知。此插件在运行 Android 8 或更新版本的设备上可能无法按预期工作。有关在通知中使用角标的更多信息，请参阅[本地通知插件文档](https://github.com/katzer/cordova-plugin-local-notifications)。

<p>
  <a href="https://github.com/katzer/cordova-plugin-badge" target="_blank" rel="noopener" className="git-link">github.com/katzer/cordova-plugin-badge</a>
</p>

<h2>遇到 Cordova 问题？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，就承担不起耗费数小时进行故障排查的代价。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-badge {'\n'}$ npm install @awesome-cordova-plugins/badge {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-badge {'\n'}$ npm install @awesome-cordova-plugins/badge {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队完全支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对此插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- Browser
- iOS
- Windows

## 使用

### React

[了解在 React 中使用 Ionic Native 组件的更多信息](../native-community.md#react)

### Angular

```tsx
import { Badge } from '@awesome-cordova-plugins/badge/ngx';

constructor(private badge: Badge) { }

...

this.badge.set(10);
this.badge.increase(1);
this.badge.clear();
```