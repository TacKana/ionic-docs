---
sidebar_label: '定位精度'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 定位精度

这是一个适用于 Android 和 iOS 的 Cordova/Phonegap 插件，用于请求启用/更改定位服务。它通过触发应用内的原生对话框来实现，避免了用户需要离开你的应用去手动更改定位设置。

<p>
  <a href="https://github.com/dpa99c/cordova-plugin-request-location-accuracy" target="_blank" rel="noopener" className="git-link" >github.com/dpa99c/cordova-plugin-request-location-accuracy</a>
</p>

<h2>被 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个严肃的项目，你负担不起花费数小时进行故障排除。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-request-location-accuracy {'\n'}$ npm install
      @awesome-cordova-plugins/location-accuracy {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-request-location-accuracy {'\n'}$ npm install
      @awesome-cordova-plugins/location-accuracy {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队完全支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果你对该插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
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
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';

constructor(private locationAccuracy: LocationAccuracy) { }

...

this.locationAccuracy.canRequest().then((canRequest: boolean) => {

  if(canRequest) {
    // iOS 将忽略精度选项
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => console.log('请求成功'),
      error => console.log('请求定位权限时出错', error)
    );
  }

});

```