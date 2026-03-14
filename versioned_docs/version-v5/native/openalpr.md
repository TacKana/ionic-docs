---
sidebar_label: 'OpenALPR'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# OpenALPR

该 Cordova 插件集成了 OpenALPR（自动车牌识别）库，支持从图片中提取车牌信息。

<p>
  <a href="https://github.com/iMicknl/cordova-plugin-openalpr" target="_blank" rel="noopener" className="git-link">github.com/iMicknl/cordova-plugin-openalpr</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发重要项目，承担不起数小时的问题排查成本。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install cordova-plugin-openalpr {'\n'}$ npm install @awesome-cordova-plugins/openalpr {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-openalpr {'\n'}$ npm install @awesome-cordova-plugins/openalpr {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队全面支持与维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或如果您对该插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { OpenALPR, OpenALPROptions, OpenALPRResult } from '@awesome-cordova-plugins/openalpr/ngx';


constructor(private openALPR: OpenALPR) { }

const scanOptions: OpenALPROptions = {
   country: this.openALPR.Country.EU,
   amount: 3
}

// 要获取 imageData，您可以使用例如 @awesome-cordova-plugins/camera 模块。它支持 DestinationType.FILE_URI 和 DATA_URL

this.openALPR.scan(imageData, scanOptions)
  .then((res: [OpenALPRResult]) => console.log(res))
  .catch((error: Error) => console.error(error));

```