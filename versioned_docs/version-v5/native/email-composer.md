---
sidebar_label: 'Email Composer'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 邮件编辑器

需要 Cordova 插件：cordova-plugin-email-composer。更多信息，请参阅 [Email Composer 插件文档](https://github.com/hypery2k/cordova-email-plugin)。

<p>
  <a href="https://github.com/katzer/cordova-plugin-email-composer" target="_blank" rel="noopener" className="git-link">github.com/katzer/cordova-plugin-email-composer</a>
</p>

<h2>被 Cordova 问题难住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个严肃的项目，你无法承担数小时的问题排查。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-email-composer {'\n'}$ npm install @awesome-cordova-plugins/email-composer {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-email-composer {'\n'}$ npm install
      @awesome-cordova-plugins/email-composer {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队完全支持及维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果你对本插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Amazon Fire OS
- Android
- 浏览器
- iOS
- Windows
- macOS

## 使用方法

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

constructor(private emailComposer: EmailComposer) { }

...


this.emailComposer.getClients().then((apps: []) => {
   // 返回设备上已配置的邮件客户端数组
});

this.emailComposer.hasClient().then(app, (isValid: boolean) => {
 if (isValid) {
   // 现在我们知道已配置了有效的邮件客户端
   // 如果不指定应用，当至少配置了一个邮件客户端时，将返回 true
 }
});

this.emailComposer.hasAccount().then((isValid: boolean) => {
 if (isValid) {
   // 现在我们知道已配置了有效的邮件账户
 }
});

this.emailComposer.isAvailable().then(app, (available: boolean) => {
 if(available) {
   // 现在我们知道可以发送邮件了，这会调用 hasClient 和 hasAccount
   // 如果不指定应用，当至少配置了一个邮件客户端时，将返回 true
 }
});

let email = {
  to: 'max@mustermann.de',
  cc: 'erika@mustermann.de',
  bcc: ['john@doe.com', 'jane@doe.com'],
  attachments: [
    'file://img/logo.png',
    'res://icon.png',
    'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
    'file://README.pdf'
  ],
  subject: 'Cordova Icons',
  body: 'How are you? Nice greetings from Leipzig',
  isHtml: true
}

// 使用默认选项发送文本消息
this.emailComposer.open(email);
```

你也可以为邮件应用分配别名

```ts
// 添加别名
this.email.addAlias('gmail', 'com.google.android.gm');

// 然后发送邮件时使用别名
this.email.open({
  app: 'gmail',
  ...
});
```