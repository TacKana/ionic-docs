---
sidebar_label: '主题检测'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 主题检测

用于检测暗色模式是否启用的 Cordova 插件

<p>
  <a href="https://github.com/mariusbackes/cordova-plugin-theme-detection" target="_blank" rel="noopener" className="git-link">github.com/mariusbackes/cordova-plugin-theme-detection</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个严肃的项目，你无法承受花费数小时进行故障排除的代价。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-theme-detection {'\n'}$ npm install @awesome-cordova-plugins/theme-detection {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-theme-detection {'\n'}$ npm install
      @awesome-cordova-plugins/theme-detection {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队完全支持并维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果你对该插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- iOS
- Android

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { ThemeDetection } from '@awesome-cordova-plugins/theme-detection';


constructor(private themeDetection: ThemeDetection) { }

...

this.themeDetection.isAvailable()
  .then((res: ThemeDetectionResponse) => {
     if(res.value) {
       this.themeDetection.isDarkModeEnabled().then((res: ThemeDetectionResponse) => {
         console.log(res);
       })
       .catch((error: any) => console.error(error));
     }
  })
  .catch((error: any) => console.error(error));

```