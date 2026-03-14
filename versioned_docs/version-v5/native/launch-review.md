---
sidebar_label: '启动评价'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 启动评价

协助用户在应用商店中留下评价或评分。

- 启动当前应用在相应平台应用商店的页面，便于用户提交评价。
- 在 iOS（10.3 及以上版本）上，会调用原生的应用内评分对话框，用户无需跳转到 App Store 即可进行评分。

<p>
  <a href="https://github.com/dpa99c/cordova-launch-review" target="_blank" rel="noopener" className="git-link">github.com/dpa99c/cordova-launch-review</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要的项目，您不能承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-launch-review {'\n'}$ npm install @awesome-cordova-plugins/launch-review {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-launch-review {'\n'}$ npm install @awesome-cordova-plugins/launch-review {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对本插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用方法

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { LaunchReview } from '@awesome-cordova-plugins/launch-review/ngx';

constructor(private launchReview: LaunchReview) { }

...

this.launchReview.launch()
  .then(() => console.log('成功启动商店应用'));

if(this.launchReview.isRatingSupported()){
  this.launchReview.rating()
    .then(() => console.log('成功启动评分对话框'));
}
```