---
sidebar_label: 'PSPDFKit-Cordova'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# PSPDFKit-Cordova

用于在 Cordova 和 Ionic 项目中使用 PSPDFKit 的官方插件。

<p>
  <a href="https://github.com/PSPDFKit/PSPDFKit-Cordova" target="_blank" rel="noopener" className="git-link">github.com/PSPDFKit/PSPDFKit-Cordova</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，就承担不起花费数小时进行故障排查的代价。Ionic 专家针对社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install pspdfkit-cordova {'\n'}$ npm install @awesome-cordova-plugins/pspdfkit-cordova {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add pspdfkit-cordova {'\n'}$ npm install @awesome-cordova-plugins/pspdfkit-cordova {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队提供全面支持与维护的插件。&nbsp;
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
import { PSPDFKit } from '@awesome-cordova-plugins/pspdfkit-cordova/ngx';


constructor(private pspdfkit: PSPDFKit) { }

...

// 在此处设置您的许可证密钥。
this.pspdfkit.setLicenseKey("YOUR KEY");

// 以单页模式、黑色背景显示 PDF。
this.pspdfkit.present('document.pdf', {pageMode: 'single', backgroundColor: "black"})
  .then(result => {
     console.log(result); // 成功
  })
  .catch(error => {
     console.log(error); // 失败
  });
}

// 滚动到索引为 1 的页面。
this.pspdfkit.setPage(1, true);

```