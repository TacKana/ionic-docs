---
sidebar_label: '相册库'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 相册库

PhotoLibrary 插件允许通过 URL 访问设备中的照片。因此，你可以使用普通的 img 标签来显示照片及其缩略图，也可以使用不同的第三方库。该插件同样支持将照片和视频保存到相册库中。Angular 需要信任 cdvphotolibrary 的 URL，请查看插件主页了解如何配置。

<p>
  <a href="https://github.com/terikon/cordova-plugin-photo-library" target="_blank" rel="noopener" className="git-link">github.com/terikon/cordova-plugin-photo-library</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在构建一个重要的项目，你负担不起花费数小时进行故障排除的时间。Ionic 的专家为社区插件和高级插件都提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-photo-library {'\n'}$ npm install @awesome-cordova-plugins/photo-library {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-photo-library {'\n'}$ npm install @awesome-cordova-plugins/photo-library{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 包含 Ionic 团队提供全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果你对这个插件的企业版感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- Browser
- iOS

## 使用说明

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { PhotoLibrary } from '@awesome-cordova-plugins/photo-library/ngx';

constructor(private photoLibrary: PhotoLibrary) { }

this.photoLibrary.requestAuthorization().then(() => {
  this.photoLibrary.getLibrary().subscribe({
    next: library => {
      library.forEach(function(libraryItem) {
        console.log(libraryItem.id);          // 照片的 ID
        console.log(libraryItem.photoURL);    // 跨平台访问照片
        console.log(libraryItem.thumbnailURL);// 跨平台访问缩略图
        console.log(libraryItem.fileName);
        console.log(libraryItem.width);
        console.log(libraryItem.height);
        console.log(libraryItem.creationDate);
        console.log(libraryItem.latitude);
        console.log(libraryItem.longitude);
        console.log(libraryItem.albumIds);    // 相册项的 ID 数组，仅在使用了 includeAlbumsData 时返回
      });
    },
    error: err => { console.log('无法获取照片'); },
    complete: () => { console.log('照片获取完成'); }
  });
})
.catch(err => console.log('权限未授予'));

```