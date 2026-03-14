---
sidebar_label: 'Image Picker'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 图像选择器

用于多图像选择的 Cordova 插件

需要 Cordova 插件：`cordova-plugin-image-picker`。
更多信息请查看 https://github.com/Telerik-Verified-Plugins/ImagePicker

<p>
  <a href="https://github.com/Telerik-Verified-Plugins/ImagePicker" target="_blank" rel="noopener" className="git-link">github.com/Telerik-Verified-Plugins/ImagePicker</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-telerik-imagepicker {'\n'}$ npm install @awesome-cordova-plugins/image-picker {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-telerik-imagepicker {'\n'}$ npm install
      @awesome-cordova-plugins/image-picker {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含 Ionic 团队提供全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对该插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用方法

### React

[了解如何在 React 中使用 Ionic Native 组件](../native-community.md#react)

### Angular

```tsx
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';


constructor(private imagePicker: ImagePicker) { }

...

this.imagePicker.getPictures(options).then((results) => {
  for (var i = 0; i < results.length; i++) {
      console.log('图像 URI: ' + results[i]);
  }
}, (err) => { });

```