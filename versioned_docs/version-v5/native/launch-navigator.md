---
sidebar_label: '启动导航'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 启动导航

需要 Cordova 插件：uk.co.workingedge.phonegap.plugin.launchnavigator。更多信息，请参阅 [LaunchNavigator 插件文档](https://github.com/dpa99c/phonegap-launch-navigator)。

<p>
  <a href="https://github.com/dpa99c/phonegap-launch-navigator" target="_blank" rel="noopener" className="git-link">github.com/dpa99c/phonegap-launch-navigator</a>
</p>

<h2>被 Cordova 问题难住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个重要的项目，你无法承受花费数小时进行故障排除。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install uk.co.workingedge.phonegap.plugin.launchnavigator {'\n'}$ npm install
      @awesome-cordova-plugins/launch-navigator {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add uk.co.workingedge.phonegap.plugin.launchnavigator {'\n'}$ npm install
      @awesome-cordova-plugins/launch-navigator {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供了由 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果你对本插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>。
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS
- Windows
- Windows Phone 8

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

请参考插件仓库以获取详细用法。本文档页面仅解释 Native 包装器的使用。

```tsx
import { LaunchNavigator, LaunchNavigatorOptions } from '@awesome-cordova-plugins/launch-navigator/ngx';

constructor(private launchNavigator: LaunchNavigator) { }

...

let options: LaunchNavigatorOptions = {
  start: 'London, ON',
  app: LaunchNavigator.APPS.UBER
}

this.launchNavigator.navigate('Toronto, ON', options)
  .then(
    success => console.log('导航启动成功'),
    error => console.log('启动导航时出错', error)
  );
```