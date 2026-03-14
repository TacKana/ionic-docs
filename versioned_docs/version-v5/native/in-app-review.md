---
sidebar_label: 'In App Review'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 应用内评分

本插件通过调用 iOS 的 SKStore​Review​Controller 类来启动应用内评分弹窗，该功能自 iOS 10.3 起提供。

请注意，此功能仅适用于 iOS 设备。

<p>
  <a href="https://github.com/omaxlive/com.omarben.inappreview" target="_blank" rel="noopener" className="git-link">github.com/omaxlive/com.omarben.inappreview</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个严肃的项目，经不起数小时的问题排查。Ionic 专家团队为社区插件和高级插件提供付费咨询服务。</p>
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
      $ npm install com.omarben.inappreview {'\n'}$ npm install @awesome-cordova-plugins/in-app-review {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add com.omarben.inappreview {'\n'}$ npm install @awesome-cordova-plugins/in-app-review{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队全面支持和维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果你对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- iOS

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { InAppReview } from '@awesome-cordova-plugins/in-app-review/ngx';


constructor(private inAppReview: InAppReview) { }

...


this.inAppReview.requestReview()
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

```