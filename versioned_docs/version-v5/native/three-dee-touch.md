---
sidebar_label: '3D Touch'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 3D Touch

3D Touch 插件为你的 Cordova 应用添加 3D Touch 功能。

需要 Cordova 插件：`cordova-plugin-3dtouch`。更多信息请查看 [3D Touch 插件文档](https://github.com/EddyVerbruggen/cordova-plugin-3dtouch)。

<p>
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-3dtouch" target="_blank" rel="noopener" className="git-link">github.com/EddyVerbruggen/cordova-plugin-3dtouch</a>
</p>

<h2>被 Cordova 问题困扰？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个重要的项目，你无法承受花费数小时进行故障排查。Ionic 专家为社区插件和高级插件提供优质咨询服务。</p>
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
      $ npm install cordova-plugin-3dtouch {'\n'}$ npm install @awesome-cordova-plugins/three-dee-touch {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-3dtouch {'\n'}$ npm install @awesome-cordova-plugins/three-dee-touch{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果你对该插件的企业版感兴趣，请<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- iOS

## 使用方式

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

请务必参考原始插件仓库以获取详细用法。这里的示例可能不够充分。

```tsx
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@awesome-cordova-plugins/three-dee-touch/ngx';

constructor(private threeDeeTouch: ThreeDeeTouch) { }

...

this.threeDeeTouch.isAvailable().then(isAvailable => console.log('3D Touch 可用吗？ ' + isAvailable));

this.threeDeeTouch.watchForceTouches()
  .subscribe(
    (data: ThreeDeeTouchForceTouch) => {
      console.log('压力触控力度：%' + data.force);
      console.log('压力触控时间戳：' + data.timestamp);
      console.log('压力触控 x 坐标：' + data.x);
      console.log('压力触控 y 坐标：' + data.y);
    }
  );


let actions: ThreeDeeTouchQuickAction[] = [
  {
    type: 'checkin',
    title: '签到',
    subtitle: '快速签到',
    iconType: 'Compose'
  },
  {
    type: 'share',
    title: '分享',
    subtitle: '用心分享',
    iconType: 'Share'
  },
  {
    type: 'search',
    title: '搜索',
    iconType: 'Search'
  },
  {
    title: '显示收藏',
    iconTemplate: 'HeartTemplate'
  }
];

this.threeDeeTouch.configureQuickActions(actions);

this.threeDeeTouch.onHomeIconPressed().subscribe(
 (payload) => {
   // 返回一个对象，代表你按下的按钮
   console.log('按下了 ${payload.title} 按钮')
   console.log(payload.type)

 }
)
```