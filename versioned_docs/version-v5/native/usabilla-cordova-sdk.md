---
sidebar_label: 'Usabilla'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Usabilla

Usabilla SDK 旨在通过您的移动应用，以轻松灵活的方式收集用户反馈。
本文档介绍了如何在 Cordova 项目中集成该库。

更多信息请查看 [Cordova 插件文档](https://github.com/usabilla/usabilla-u4a-cordova)

<p>
  <a href="https://github.com/usabilla/usabilla-u4a-cordova" target="_blank" rel="noopener" className="git-link">github.com/usabilla/usabilla-u4a-cordova</a>
</p>

<h2>是否在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要的项目，您负担不起数小时的问题排查时间。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install usabilla-cordova {'\n'}$ npm install @awesome-cordova-plugins/usabilla-cordova-sdk {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add usabilla-cordova {'\n'}$ npm install @awesome-cordova-plugins/usabilla-cordova-sdk{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含由 Ionic 团队提供全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或如果您对该插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

```tsx
import { Usabilla } from '@awesome-cordova-plugins/usabilla-cordova-sdk/ngx';


constructor(private usabilla: Usabilla) { }

...


 this.usabilla.initialize(
   appID: '&lt;your_application_id>',
   custom_vars: {
     "key": "value"
   });

 this.usabilla.loadFeedbackForm(
   formID : '&lt;your_form_id>'
   );

```