---
sidebar_label: 'Photo Viewer'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 图片查看器

该插件能够以全屏模式展示您的图片，并支持平移、缩放和分享图片。

<p>
  <a href="https://github.com/sarriaroman/photoviewer" target="_blank" rel="noopener" className="git-link">github.com/sarriaroman/photoviewer</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个重要的项目，就负担不起耗费数小时进行故障排查的时间。Ionic 的专家为社区插件和高级插件均提供专业的咨询服务。</p>
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
      $ npm install com-sarriaroman-photoviewer {'\n'}$ npm install @awesome-cordova-plugins/photo-viewer {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add com-sarriaroman-photoviewer {'\n'}$ npm install @awesome-cordova-plugins/photo-viewer{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供由 Ionic 团队完全支持并维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对本插件的企业版本感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
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
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';

constructor(private photoViewer: PhotoViewer) { }

...

this.photoViewer.show('https://mysite.com/path/to/image.jpg');

this.photoViewer.show('https://mysite.com/path/to/image.jpg', '我的图片标题', {share: false});

this.photoViewer.show('https://mysecuresite.com/path/to/image.jpg', '我的图片标题', {share: false, headers: '{username:foo,password:bar}'});
```