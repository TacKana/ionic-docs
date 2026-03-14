---
sidebar_label: 'Firebase Dynamic Links'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Firebase Dynamic Links

适用于 Firebase Dynamic Links 的 Cordova 插件

变量 APP_DOMAIN 和 APP_PATH 指定了您的应用将启动活动来处理链接的网页 URL。它们也用于设置应用索引支持。
前往 Firebase 控制台，导出 google-services.json 和 GoogleService-Info.plist 文件。将这些文件放入 Cordova 应用文件夹的根目录。

配置项：

当您拥有适用于多个平台的应用时，会使用 GoogleIOSClientId 和 GoogleAndroidClientId 这些配置项来设置动态链接。
您可以在 GoogleService-Info.plist 文件（键 ANDROID_CLIENT_ID）和 google-services.json 文件（键 client[0].oauth_client[0].client_id）中找到对应的值。

config.xml：

```xml
<platform name="ios">
    <preference name="GoogleIOSClientId" value="..." />
</platform>
<platform name="android">
    <preference name="GoogleAndroidClientId" value="..." />
</platform>
```

<p>
  <a href="https://github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks" target="_blank" rel="noopener" className="git-link">github.com/chemerisuk/cordova-plugin-firebase-dynamiclinks</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵的时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承受花费数小时进行故障排除的代价。Ionic 的专家团队为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-firebase-dynamiclinks {'\n'}$ npm install
      @awesome-cordova-plugins/firebase-dynamic-links {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-firebase-dynamiclinks {'\n'}$ npm install
      @awesome-cordova-plugins/firebase-dynamic-links {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对该插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { FirebaseDynamicLinks } from '@awesome-cordova-plugins/firebase-dynamic-links/ngx';


constructor(private firebaseDynamicLinks: FirebaseDynamicLinks) { }

...
// 在通过动态链接打开应用后，在此处处理逻辑
this.firebaseDynamicLinks.onDynamicLink()
  .subscribe((res: any) => console.log(res), (error:any) => console.log(error));
```