---
sidebar_label: 'iOS DocumentPicker'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# iOS 文件选择器

在 iOS 上为用户打开文件选择器，用于选择文件并返回文件 URI。
允许用户从 iCloud 上传文件。

<p>
  <a href="https://github.com/iampossible/Cordova-DocPicker" target="_blank" rel="noopener" className="git-link">github.com/iampossible/</a>
</p>

<h2>遇到了 Cordova 问题？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要的项目，就不应该花费数小时进行故障排查。Ionic 的专家为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install cordova-plugin-documentpicker.DocumentPicker {'\n'}$ npm install
      @awesome-cordova-plugins/document-picker {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-documentpicker.DocumentPicker {'\n'}$ npm install
      @awesome-cordova-plugins/document-picker {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对本插件有企业版需求，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>。
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- iOS

## 使用指南

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { DocumentPicker } from '@awesome-cordova-plugins/document-picker/ngx';

constructor(private docPicker: DocumentPicker) { }

...

this.docPicker.getFile('all')
  .then(uri => console.log(uri))
  .catch(e => console.log(e));

```