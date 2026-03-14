---
sidebar_label: 'Sign In With Apple'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 使用 Apple 登录

Sign in with Apple（使用 Apple 登录）让用户能够轻松地使用其 Apple ID 登录您的应用和网站。
用户无需填写表单、验证电子邮件地址或设置新密码，
他们可以直接通过 Apple 登录创建账户并立即开始使用您的应用。
所有账户均受双重认证保护，安全性更高，
且 Apple 不会追踪用户在您应用或网站中的活动。
_来源：_ https://developer.apple.com/sign-in-with-apple/

<p>
  <a href="https://github.com/twogate/cordova-plugin-sign-in-with-apple" target="_blank" rel="noopener" className="git-link">github.com/twogate/cordova-plugin-sign-in-with-apple</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您不能承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install cordova-plugin-sign-in-with-apple {'\n'}$ npm install @awesome-cordova-plugins/sign-in-with-apple{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-sign-in-with-apple {'\n'}$ npm install
      @awesome-cordova-plugins/sign-in-with-apple {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供了由 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对该插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- iOS

## 用法

### React

[了解如何在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

```tsx
import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest } from '@awesome-cordova-plugins/sign-in-with-apple/ngx';


constructor(private signInWithApple: SignInWithApple) { }

...


  this.signInWithApple.signin({
    requestedScopes: [
      ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
      ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
    ]
  })
  .then((res: AppleSignInResponse) => {
    // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user
    alert('发送令牌到 Apple 进行验证：' + res.identityToken);
    console.log(res);
  })
  .catch((error: AppleSignInErrorResponse) => {
    alert(error.code + ' ' + error.localizedDescription);
    console.error(error);
  });
```