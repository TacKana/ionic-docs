---
sidebar_label: 'ios-aswebauthenticationsession-api'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# ios-aswebauthenticationsession-api

iOS 12 ASWebAuthenticationSession API 插件

<p>
  <a href="https://github.com/jwelker110/cordova-plugin-ios-aswebauthenticationsession-api" target="_blank" rel="noopener" className="git-link">github.com/jwelker110/cordova-plugin-ios-aswebauthenticationsession-api</a>
</p>

<h2>被 Cordova 问题难住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别再为插件问题浪费宝贵时间了。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要的项目，您无法承受花费数小时进行故障排查。Ionic 的专家团队为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install cordova-plugin-ios-aswebauthenticationsession-api {'\n'}$ npm install
      @awesome-cordova-plugins/ios-aswebauthenticationsession-api {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-ios-aswebauthenticationsession-api {'\n'}$ npm install
      @awesome-cordova-plugins/ios-aswebauthenticationsession-api {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对本插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- iOS

## 使用方法

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { IosASWebauthenticationSession } from '@awesome-cordova-plugins/ios-aswebauthenticationsession-api/ngx';


constructor(private IosASWebauthenticationSession: ios-aswebauthenticationsession-api) { }

...


this.IosASWebauthenticationSession.start(callbackUrl, authorizeURL)
  .then((redirectUrl: string) => console.log(redirectUrl))
  .catch((error: any) => console.error(error));

```