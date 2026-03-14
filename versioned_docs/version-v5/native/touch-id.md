---
sidebar_label: 'Touch ID'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Touch ID

通过 TouchID 传感器扫描用户的指纹。

需要 Cordova 插件：`cordova-plugin-touch-id`。更多信息请参阅 [TouchID 插件文档](https://github.com/EddyVerbruggen/cordova-plugin-touch-id)。

<p>
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-touch-id" target="_blank" l="noopener" className="git-link">github.com/EddyVerbruggen/cordova-plugin-touch-id</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您不能承受花费数小时进行故障排查。Ionic 专家为社区插件和高级插件提供优质咨询服务。</p>
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
      $ npm install cordova-plugin-touch-id {'\n'}$ npm install @awesome-cordova-plugins/touch-id {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-touch-id {'\n'}$ npm install @awesome-cordova-plugins/touch-id {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供由 Ionic 团队全面支持和维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果您对该插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持平台

- iOS

## 使用

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { TouchID } from '@awesome-cordova-plugins/touch-id/ngx';

constructor(private touchId: TouchID) { }

...

this.touchId.isAvailable()
  .then(
    res => console.log('TouchID 可用！'),
    err => console.error('TouchID 不可用', err)
  );

this.touchId.verifyFingerprint('请扫描您的指纹')
  .then(
    res => console.log('成功', res),
    err => console.error('错误', err)
  );
```

### 错误代码

插件会因为各种原因拒绝请求。您的应用很可能需要对不同情况做出不同响应。

以下是一些错误代码列表：

- `-1` - 指纹扫描失败超过 3 次
- `-2` 或 `-128` - 用户点击了“取消”按钮
- `-3` - 用户点击了“输入密码”或“输入口令”按钮
- `-4` - 扫描被系统取消（例如按下 Home 键）
- `-6` - TouchID 不可用
- `-8` - TouchID 因尝试次数过多被锁定