---
sidebar_label: 'Insomnia'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Insomnia

防止移动设备的屏幕进入休眠状态。

<p>
  <a href="https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin" target="_blank" el="noopener" className="git-link">github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要的项目，承受不起花费数小时进行故障排除的代价。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-insomnia {'\n'}$ npm install @awesome-cordova-plugins/insomnia {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-insomnia {'\n'}$ npm install @awesome-cordova-plugins/insomnia {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 包含了 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对此插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- Browser
- Firefox OS
- iOS
- Windows
- Windows Phone 8

## 使用说明

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';

constructor(private insomnia: Insomnia) { }

...

this.insomnia.keepAwake()
  .then(
    () => console.log('success'),
    () => console.log('error')
  );

this.insomnia.allowSleepAgain()
  .then(
    () => console.log('success'),
    () => console.log('error')
  );
```