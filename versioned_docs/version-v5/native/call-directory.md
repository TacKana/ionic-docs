---
sidebar_label: 'Call Directory'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 来电识别目录

此插件可以将电话号码添加到 Callkit 来电识别目录扩展中。在使用 `addIdentification` 和 `removeIdentification` 方法后，请调用 `reloadExtension` 来使更改在来电识别目录扩展中生效。

<p>
  <a href="https://github.com/GEDYSIntraWare/cordova-plugin-call-directory" target="_blank" rel="noopener" className="git-link">github.com/GEDYSIntraWare/cordova-plugin-call-directory</a>
</p>

<h2>被 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个重要的项目，您无法承受花费数小时进行故障排查。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install cordova-plugin-call-directory {'\n'}$ npm install @awesome-cordova-plugins/call-directory {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-call-directory {'\n'}$ npm install
      @awesome-cordova-plugins/call-directory {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队全面支持和维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- iOS

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { CallDirectory } from '@awesome-cordova-plugins/call-directory/ngx';


constructor(private callDirectory: CallDirectory) { }


let items = [{label: "Hello", number: "123"}];
this.callDirectory.addIdentification(items)
  .then((res: any) => console.log(res))
  .catch((error: any) => console.error(error));

this.callDirectory.reloadExtension()
  .then(res: string) => console.log(res))
  .catch((error: any) => console.error(error));
```