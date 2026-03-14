---
sidebar_label: '原生页面过渡'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 原生页面过渡

原生页面过渡插件利用硬件加速，为视图之间的切换提供流畅的动画效果。你可以完全控制过渡类型、持续时间和方向。

<p>
  <a href="https://github.com/Telerik-Verified-Plugins/NativePageTransitions" target="_blank" rel="noopener" className="git-link">github.com/Telerik-Verified-Plugins/NativePageTransitions</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个严肃的项目，就负担不起数小时的问题排查时间。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install com.telerik.plugins.nativepagetransitions {'\n'}$ npm install
      @awesome-cordova-plugins/native-page-transitions {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add com.telerik.plugins.nativepagetransitions {'\n'}$ npm install
      @awesome-cordova-plugins/native-page-transitions {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含由 Ionic 团队提供全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或者如果你对该插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS
- Windows Phone 8

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

```tsx
import { NativePageTransitions, NativeTransitionOptions } from '@awesome-cordova-plugins/native-page-transitions/ngx';

constructor(private nativePageTransitions: NativePageTransitions) { }

...


// 页面/模态框关闭时添加过渡效果的示例
ionViewWillLeave() {

 let options: NativeTransitionOptions = {
    direction: 'up',
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60
   }

 this.nativePageTransitions.slide(options)
   .then(onSuccess)
   .catch(onError);

}


// 推入新页面时添加过渡效果的示例
openPage(page: any) {

  this.nativePageTransitions.slide(options);
  this.navCtrl.push(page);

}

```