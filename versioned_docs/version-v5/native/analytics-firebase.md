---
sidebar_label: 'Analytics Firebase'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Analytics Firebase

适用于 Ionic Native 应用的 Google Analytics Firebase 插件。

<p>
  <a href="https://github.com/appfeel/analytics-google" target="_blank" rel="noopener" className="git-link">github.com/appfeel/analytics-google</a>
</p>

<h2>被 Cordova 问题困扰？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-analytics {'\n'}$ npm install @awesome-cordova-plugins/analytics-firebase {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-analytics {'\n'}$ npm install
      @awesome-cordova-plugins/analytics-firebase {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含由 Ionic 团队提供全面支持和维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
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
import { AnalyticsFirebase } from '@awesome-cordova-plugins/analytics-firebase';


constructor(private analyticsFirebase: AnalyticsFirebase) { }

// 使用默认事件和参数追踪一个事件
const eventParams = {};
eventParams[this.analyticsFirebase.DEFAULT_PARAMS.LEVEL] = 29;
this.analyticsFirebase.logEvent(this.analyticsFirebase.DEFAULT_EVENTS.LEVEL_UP, eventParams)
  .then(() => console.log('事件追踪成功'))
  .catch(err => console.log('追踪事件时出错：', err));

// 使用自定义事件和参数追踪一个事件
const eventParams = {};
eventParams['my-prop'] = 29;
this.analyticsFirebase.logEvent('my-event', eventParams)
  .then(() => console.log('事件追踪成功'))
  .catch(err => console.log('追踪事件时出错：', err));


// 重置分析数据
this.analyticsFirebase.resetAnalyticsData()
  .then(() => console.log('分析数据已重置'))
  .catch(err => console.log('重置分析数据时出错：', err));


// 追踪一个屏幕视图
this.analyticsFirebase.setCurrentScreen('Home')
  .then(() => console.log('视图追踪成功'))
  .catch(err => console.log('追踪视图时出错：', err));


// 设置用户 ID
this.analyticsFirebase.setUserId('USER-ID')
  .then(() => console.log('用户 ID 设置成功'))
  .catch(err => console.log('设置用户 ID 时出错：', err));


// 设置默认属性中的用户属性
this.analyticsFirebase.setUserProperty('KEY', 'VALUE')
  .then(() => console.log('用户属性设置成功'))
  .catch(err => console.log('设置用户属性时出错：', err));

```