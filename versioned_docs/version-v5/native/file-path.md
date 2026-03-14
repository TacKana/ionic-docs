---
sidebar_label: '文件路径'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 文件路径

该插件允许你解析 Android 内容 URI 对应的原生文件系统路径，其实现基于 aFileChooser 库中的代码。

<p>
  <a href="https://github.com/hiddentao/cordova-plugin-filepath" target="_blank" rel="noopener" className="git-link">github.com/hiddentao/cordova-plugin-filepath</a>
</p>

<h2>被 Cordova 问题困扰？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个重要的项目，你无法承受花费数小时进行故障排查。Ionic 专家为社区插件和企业级插件提供高级咨询服务。</p>
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
      $ npm install cordova-plugin-filepath {'\n'}$ npm install @awesome-cordova-plugins/file-path {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-filepath {'\n'}$ npm install @awesome-cordova-plugins/file-path {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供了由 Ionic 团队全面支持并维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果你对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android

## 使用说明

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { FilePath } from '@awesome-cordova-plugins/file-path/ngx';

constructor(private filePath: FilePath) { }

...

this.filePath.resolveNativePath(path)
  .then(filePath => console.log(filePath))
  .catch(err => console.log(err));

```