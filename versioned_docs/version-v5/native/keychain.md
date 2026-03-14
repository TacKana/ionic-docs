---
sidebar_label: 'Keychain'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Keychain

在 iOS 钥匙串中读写数据

需要 Cordova 插件：`cordova-plugin-ios-keychain`。更多信息请查看 [Keychain 插件文档](https://github.com/ionic-team/cordova-plugin-ios-keychain)

如需支持更多平台，另请参阅 [Secure Storage](https://ionicframework.com/docs/native/secure-storage/)。

<p>
  <a href="https://github.com/ionic-team/cordova-plugin-ios-keychain" target="_blank" rel="noopener" className="git-link">github.com/ionic-team/cordova-plugin-ios-keychain</a>
</p>

<h2>被 Cordova 问题困扰？</h2>
<DocsCard
  className="cordova-ee-card"
  header="别在插件问题上浪费宝贵时间"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在进行严肃的项目开发，经不起数小时的问题排查。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install cordova-plugin-ios-keychain {'\n'}$ npm install @awesome-cordova-plugins/keychain {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-ios-keychain {'\n'}$ npm install @awesome-cordova-plugins/keychain{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对该插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- iOS

## 使用方法

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { Keychain } from '@awesome-cordova-plugins/keychain/ngx';

constructor(private keychain: Keychain) { }

...

this.keychain.set(key, value).then(() => {
  this.keychain.get(key)
    .then(value => console.log('获取的值', value))
    .catch(err => console.error('获取时出错', err));
})
.catch(err => console.error('设置时出错', err));
```