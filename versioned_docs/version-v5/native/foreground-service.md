---
sidebar_label: '前台服务'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 前台服务

该插件允许 Android 设备在后台持续运行服务，通过使用一个持续显示的前台通知来实现。这主要是为了配合某些插件（例如 'cordova-geolocation'）使用，这些插件在 Android API 26+ 系统上，当应用处于后台时无法运行。

对于 Android API 28+，需要将以下 XML 代码片段插入到 `config.xml` 文件中：

```
...
<platform name="android">
  <config-file parent="/*" target="AndroidManifest.xml">
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
  </config-file>
  ...
```

<p>
  <a href="https://github.com/DavidBriglio/cordova-plugin-foreground-service" target="_blank" rel="noopener" className="git-link">github.com/DavidBriglio/cordova-plugin-foreground-service</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要的项目，您无法承受花费数小时进行故障排查。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-foreground-service {'\n'}$ npm install @awesome-cordova-plugins/foreground-service{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-foreground-service {'\n'}$ npm install
      @awesome-cordova-plugins/foreground-service {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对此插件的企业版感兴趣，请<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>。
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
import { ForegroundService } from '@awesome-cordova-plugins/foreground-service/ngx';


constructor(public foregroundService: ForegroundService) { }

...

startService() {
 // 通知重要性是可选的，默认值为 1 - 低（无声音或振动）
 this.foregroundService.start('GPS 正在运行', '后台服务', 'drawable/fsicon');
}

stopService() {
 // 停止前台服务
 this.foregroundService.stop();
}

```