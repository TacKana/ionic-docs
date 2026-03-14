---
sidebar_label: '云设置'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 云设置

将应用程序设置存储于云端存储中，这样即使用户重新安装应用或在其他设备上安装，设置也能被恢复并在新安装中使用。

<p>
  <a href="https://github.com/dpa99c/cordova-plugin-cloud-settings" target="_blank" rel="noopener" className="git-link">github.com/dpa99c/cordova-plugin-cloud-settings</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承受数小时故障排除的代价。Ionic 专家为社区插件和企业插件提供高级咨询服务。</p>
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
      $ npm install cordova-plugin-cloud-settings {'\n'}$ npm install @awesome-cordova-plugins/cloud-settings {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-cloud-settings {'\n'}$ npm install
      @awesome-cordova-plugins/cloud-settings {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
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
import { CloudSettings } from '@awesome-cordova-plugins/cloud-settings/ngx';


constructor(private cloudSettings: CloudSettings) { }

...

this.cloudSettings.exists()
  .then((exists: boolean) => console.log("已保存的设置是否存在: " + exists) )

this.cloudSettings.load()
  .then((settings: any) => this.settings = settings)
  .catch((error: any) => console.error(error));

this.cloudSettings.save(this.settings)
  .then((savedSettings: any) => console.log("已保存的设置: " + JSON.stringify(savedSettings)))
  .catch((error: any) => console.error(error));

```