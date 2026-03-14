---
sidebar_label: 'Unvired Cordova SDK'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Unvired Cordova SDK

## 本插件可帮助您构建连接至 Unvired 移动平台 (UMP) 的应用程序。

## iOS 系统要求

此插件使用 Cocoapods 安装依赖库。请确保您已正确安装 Cocoapods。
安装就绪后，在安装本插件之前，请运行以下命令更新 CocoaPods 仓库。

```
pod repo update
```

<p>
  <a href="https://github.com/unvired/cordova-plugin-unvired-sdk/" target="_blank" rel="noopener" className="git-link">github.com/unvired/cordova-plugin-unvired-sdk/</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您负担不起数小时的问题排查时间。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install https://github.com/unvired/cordova-plugin-unvired-sdk {'\n'}$ npm install
      @awesome-cordova-plugins/unvired-cordova-sdk {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add https://github.com/unvired/cordova-plugin-unvired-sdk {'\n'}$ npm install
      @awesome-cordova-plugins/unvired-cordova-sdk {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- iOS
- Android
- Windows
- 浏览器

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { UnviredCordovaSDK } from '@awesome-cordova-plugins/unvired-cordova-sdk/ngx';


constructor(private unviredSDK: UnviredCordovaSDK) { }

...
// 这通常在您应用的 app.component.ts 中完成。
// 在与 UMP 交互之前，您需要初始化 SDK 并向 UMP 进行身份验证。
// SDK 初始化
let loginParameters = new LoginParameters()
loginParameters.appName = 'UNVIRED_DIGITAL_FORMS'
loginParameters.metadataPath = '../assets/metadata.json'
let loginResult: LoginResult
try {
  loginResult = await this.unviredSDK.login(loginParameters)
}
catch (error) {
  this.unviredSDK.logError("AppComponent", "Initialize", "登录时发生错误: " + error)
}


switch (loginResult.type) {
case LoginListenerType.auth_activation_required:
// 应用未激活。即，用户是第一次使用该应用。
// 在与 UMP 交互之前，需要先激活应用。
// 此时，您基本上需要导航到一个登录屏幕并接收用户的用户名和密码。
// 将用户名和密码设置到 loginParameters 对象并调用 authenticateAndActivate
try {
 // 在登录屏幕中执行此代码块。
let loginParameters = new LoginParameters();
loginParameters.url = '&lt;UMP_URL>';
loginParameters.company = '&lt;公司>';
loginParameters.username = '&lt;用户名>';
loginParameters.password = '&lt;密码>';
loginParameters.loginType = LoginType.unvired;
let authenticateActivateResult: AuthenticateActivateResult = await this.unviredSDK.authenticateAndActivate(loginParameters);
if (authenticateActivateResult.type === AuthenticateAndActivateResultType.auth_activation_success) {
// 应用已完全设置。导航到您应用的主屏幕。
} else if (authenticateActivateResult.type === AuthenticateAndActivateResultType.auth_activation_error) {
console.log("登录时发生错误: " + authenticateActivateResult.error)
} catch (error) {
this.unviredSDK.logError('LoginPage', 'auth_activation_required', '错误: ' + error);
}
break;



case LoginListenerType.app_requires_login:
// 应用已激活。但用户需要输入凭据，因为在 Unvired Admin Cockpit 中将 LOCAL_PASSWORD 设置为了 YES。
// 要为您的应用设置 LOCAL_PASSWORD 属性，请联系您的管理员。
try {
 // 在登录屏幕中执行此代码块。
 let loginParameters = new LoginParameters()
 loginParameters.username = '&lt;用户名>';
 loginParameters.password = '&lt;密码>';
 let authenticateLocalResult: AuthenticateLocalResult = await this.unviredSDK.authenticateLocal(loginParameters);
 if (authenticateLocalResult.type === AuthenticateLocalResultType.login_success) {
 // 应用已完全设置。导航到您应用的主屏幕。
 } else if (authenticateLocalResult.type === AuthenticateLocalResultType.login_error) {
  console.log("本地登录时发生错误: " + authenticateActivateResult.error)
 } catch (error) {
  this.unviredSDK.logError('LoginPage', 'app_requires_login', '错误: ' + error);
}
break;



case login_success:
// LOCAL_PASSWORD 设置为 false。
// 应用已完全初始化。用户可以开始与 UMP 交互。
// 导航到主屏幕
break;
}





// 同步 API
// 进行同步调用。
let result = await this.unviredSDK.syncForeground(RequestType.QUERY, null, {"CUSTOMER_HEADER": {"field1" : "value1", "field2" : "value2"}}, 'UNVIRED_DIGITAL_FORMS_PA_MOBILE_GET_USERS', true)

// 进行异步调用。
let result = await this.unviredSDK.syncBackground(RequestType.QUERY, null, inputObj, 'UNVIRED_DIGITAL_FORMS_PA_MOBILE_GET_USERS', 'INPUT_GET_USERS', 'GUID', false)
// 注意：订阅 NotificationListener 以获取后台数据处理进度的更新。
// 不过，在任何时刻，只能有一个屏幕监听后台数据更新。
this.unviredSDK.registerNotifListener().subscribe( data => {
switch (data.type) {
case NotificationListenerType.dataSend:
break;
case NotificationListenerType.dataChanged:
break;
case NotificationListenerType.dataReceived:
break;
.
.
.
}})





// 数据库 API
// 向数据库插入一条记录
this.unviredsdk.dbInsert("CUSTOMER_HEADER", {"NAME":"USER","NO":"0039"}, true);

// 更新数据库中的一条记录
this.unviredSDK.dbUpdate('CUSTOMER_HEADER', {"NAME":"UPDATED_USER","NO":"UPDATED_NO"}, "FORM_ID = '5caed815892215034dacad56'")

// 删除数据库中的一条记录
this.unviredSDK.dbDelete('CUSTOMER_HEADER', "FORM_ID = '5caed815892215034dacad56'")

// 执行一条 SQL 查询
this.unviredSDK.dbExecuteStatement('SELECT * FROM CUSTOMER_HEADER WHERE CUSTOMER_ID = "0039"')

```