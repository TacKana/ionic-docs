---
sidebar_label: 'Firebase Analytics'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Firebase Analytics

Firebase Analytics 的 Cordova 插件

前往 Firebase 控制台，导出 `google-services.json` 和 `GoogleService-Info.plist` 文件。将这些文件放入 Cordova 应用的根目录。

注意：在 iOS 平台上，为了收集人口统计、年龄、性别等数据，你还需要在项目中添加 `AdSupport.framework`。

## 使用 Capacitor？

对于 Android 平台，你需要在 **android/app/src/main/AndroidManfiest.xml** 文件中，在 `<application>` 标签下添加以下内容：

```
<meta-data
     tools:replace="android:value"
     android:name="firebase_analytics_collection_enabled"
     android:value="true"/>

<meta-data
     tools:replace="android:value"
     android:name="google_analytics_automatic_screen_reporting_enabled"
     android:value="false"/>
```

同时，在同一文件中，你需要在 `manifest` 标签中添加 `xmlns:tools="http://schemas.android.com/tools"`。

<p>
  <a href="https://github.com/chemerisuk/cordova-plugin-firebase-analytics" target="_blank" rel="noopener" className="git-link">github.com/chemerisuk/cordova-plugin-firebase-analytics</a>
</p>

<h2>被 Cordova 问题难住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个严肃的项目，承担不起花费数小时排错的时间。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-firebase-analytics {'\n'}$ npm install @awesome-cordova-plugins/firebase-analytics{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-firebase-analytics {'\n'}$ npm install
      @awesome-cordova-plugins/firebase-analytics {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队提供全面支持和维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>， 或者如果你对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 用法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { FirebaseAnalytics } from '@awesome-cordova-plugins/firebase-analytics/ngx';


constructor(private firebaseAnalytics: FirebaseAnalytics) { }

...

this.firebaseAnalytics.logEvent('page_view', {page: "dashboard"})
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

```