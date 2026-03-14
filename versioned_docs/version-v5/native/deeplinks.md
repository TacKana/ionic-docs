---
sidebar_label: '深度链接'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 深度链接

该插件用于在 iOS 和 Android 平台上处理自定义 URL 方案链接以及通用应用链接（Universal App Links）的深度链接。

请阅读 [ionic 插件深度链接文档](https://github.com/ionic-team/ionic-plugin-deeplinks) 了解 iOS 和 Android 的集成配置。
您需要在 `config.xml` 中添加 `universal-links`，并为 iOS 设置 Apple App Site Association (AASA)，为 Android 设置 Asset Links。

<p>
  <a href="https://github.com/ionic-team/ionic-plugin-deeplinks" target="_blank" rel="noopener" className="git-link">github.com/ionic-team/ionic-plugin-deeplinks</a>
</p>

<h2>卡在 Cordova 问题上了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您不能承受花费数小时来排查问题。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install ionic-plugin-deeplinks {'\n'}$ npm install @awesome-cordova-plugins/deeplinks {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add ionic-plugin-deeplinks {'\n'}$ npm install @awesome-cordova-plugins/deeplinks {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对该插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- Browser
- iOS

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { Deeplinks } from '@awesome-cordova-plugins/deeplinks/ngx';

constructor(private deeplinks: Deeplinks) { }

this.deeplinks.route({
     '/about-us': AboutPage,
     '/universal-links-test': AboutPage,
     '/products/:productId': ProductPage
   }).subscribe(match => {
     // match.$route - 匹配到的路由，即 route() 参数中匹配成功的条目
     // match.$args - 链接中传递的参数
     // match.$link - 完整的链接数据
     console.log('成功匹配路由', match);
   }, nomatch => {
     // nomatch.$link - 完整的链接数据
     console.error('收到一个未匹配的深度链接', nomatch);
   });
```

另外，如果您使用 Ionic，有一个便利方法可以接收 `NavController` 的引用，并为您处理实际的导航操作：

```tsx
this.deeplinks
  .routeWithNavController(this.navController, {
    '/about-us': AboutPage,
    '/products/:productId': ProductPage,
  })
  .subscribe(
    (match) => {
      // match.$route - 匹配到的路由，即 route() 参数中匹配成功的条目
      // match.$args - 链接中传递的参数
      // match.$link - 完整的链接数据
      console.log('成功匹配路由', match);
    },
    (nomatch) => {
      // nomatch.$link - 完整的链接数据
      console.error("收到一个未匹配的深度链接", nomatch);
    }
  );
```

请参考 [Ionic 深度链接演示](https://github.com/ionic-team/ionic2-deeplinks-demo/blob/master/app/app.ts) 了解如何在运行时获取 `NavController` 引用。