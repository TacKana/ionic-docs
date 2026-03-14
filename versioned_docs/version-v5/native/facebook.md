---
title: 'Facebook Connect Plugin | Facebook Docs in Ionic Documentation'
description: "Ionic 文档中的 Facebook 章节解释了如何使用 Facebook Connect Cordova 插件在 iOS 和 Android 上访问原生 Facebook 应用。"
sidebar_label: 'Facebook'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Facebook

使用 Facebook Connect 插件可在 iOS 和 Android 上访问原生 Facebook 应用。

需要 Cordova 插件：`cordova-plugin-facebook-connect`。更多信息请参阅 [Facebook Connect](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect)。

#### 安装步骤

要使用 Facebook 插件，首先需要在 Facebook 开发者门户 [https://developers.facebook.com/apps](https://developers.facebook.com/apps) 中创建一个新的 Facebook 应用。

[![Facebook 开发者门户界面，高亮显示“添加新应用”按钮。](/img/docs/native/Facebook/1.png "Facebook 开发者门户 - 添加新应用按钮")](https://developers.facebook.com/apps/)

获取 `App ID` 和 `App Name`。

[![Facebook 应用仪表板视图，显示应用 ID 和 API 版本详情。](/img/docs/native/Facebook/2.png "Facebook 应用仪表板，包含应用 ID 和 API 版本")](https://developers.facebook.com/apps/)

然后在终端中输入以下命令，其中 APP_ID 和 APP_NAME 来自 Facebook 开发者门户。

```bash
 ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID="123456789" --variable APP_NAME="myApplication"
```

之后，你需要在 Facebook 开发者门户的应用设置中添加你将使用的原生平台：

[![Facebook 应用设置中的下拉菜单，显示包括“仪表板”和“设置”在内的选项。](/img/docs/native/Facebook/3.png "Facebook 应用设置菜单")](https://developers.facebook.com/apps/)

点击 `'添加平台'`。

[![Facebook 应用基本设置界面，显示“添加平台”选项。](/img/docs/native/Facebook/4.png "Facebook 应用基本设置与添加平台选项")](https://developers.facebook.com/apps/)

此时，你需要打开项目根目录下的 [`config.xml`](https://cordova.apache.org/docs/en/latest/config_ref/index.html) 文件。

记下下一步要用到的 `id`：

```
<widget id="com.mycompany.testapp" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
```

你也可以将 `id` 修改为任意你想要的名称。

#### iOS 安装

在 'Bundle ID' 下，添加你 `config.xml` 文件中的 `id`：

[![Facebook 应用设置中用于 iOS 安装的 Bundle ID 输入字段。](/img/docs/native/Facebook/5.png "Facebook 应用设置中的 iOS Bundle ID 配置")](https://developers.facebook.com/apps/)

#### Android 安装

在 'Google Play 包名' 下，添加你 `config.xml` 文件中的 `id`：

[![Facebook 应用设置中用于 Android 安装的 Google Play 包名输入字段。](/img/docs/native/Facebook/6.png "Facebook 应用设置中的 Android 包名配置")](https://developers.facebook.com/apps/)

这样就完成了！你现在可以使用该插件调用 Facebook 功能了。

## 事件

应用事件让你能够了解与应用互动的用户构成，衡量 Facebook 移动应用广告的效果，并通过 Facebook 移动应用广告触达特定用户群体。

- [iOS] [https://developers.facebook.com/docs/ios/app-events](https://developers.facebook.com/docs/ios/app-events)
- [Android] [https://developers.facebook.com/docs/android/app-events](https://developers.facebook.com/docs/android/app-events)
- [JS] JavaScript 没有事件 API，因此插件函数是空的，并将自动返回成功

插件会自动为你跟踪激活事件。

事件会列在 [数据洞察页面](https://www.facebook.com/insights/) 上。

关于跟踪事件，请参阅 `logEvent` 和 `logPurchase`。

<p>
  <a href="https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect" target="_blank" rel="noopener" className="git-link">github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect</a>
</p>

<h2>卡在 Cordova 问题上了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在构建一个严肃的项目，你无法承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-facebook-connect {'\n'}$ npm install @awesome-cordova-plugins/facebook {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-facebook-connect {'\n'}$ npm install @awesome-cordova-plugins/facebook{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果你对该插件企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS
- 浏览器

## 使用方式

### React

[了解更多关于在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

```tsx
import { Facebook, FacebookLoginResponse } from '@awesome-cordova-plugins/facebook/ngx';

constructor(private fb: Facebook) { }

...

this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('已登录 Facebook！', res))
  .catch(e => console.log('登录 Facebook 时出错', e));


this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);

```