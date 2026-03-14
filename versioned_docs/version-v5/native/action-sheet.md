---
sidebar_label: '操作表'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 操作表

ActionSheet 插件能够显示一个原生的选项列表供用户选择。

需要 Cordova 插件：`cordova-plugin-actionsheet`。更多信息，请参阅 [ActionSheet 插件文档](https://github.com/EddyVerbruggen/cordova-plugin-actionsheet)。

<p>
  <a href="https://github.com/EddyVerbruggen/cordova-plugin-actionsheet" target="_blank" rel="noopener" className="git-link">github.com/EddyVerbruggen/cordova-plugin-actionsheet</a>
</p>

<h2>被 Cordova 问题困扰？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发一个严肃的项目，负担不起数小时的问题排查。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-actionsheet {'\n'}$ npm install @awesome-cordova-plugins/action-sheet {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-actionsheet {'\n'}$ npm install @awesome-cordova-plugins/action-sheet{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 包含由 Ionic 团队提供全面支持和维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果你对本插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- 浏览器
- iOS
- Windows
- Windows Phone 8

## 使用方法

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { ActionSheet, ActionSheetOptions } from '@awesome-cordova-plugins/action-sheet/ngx';

constructor(private actionSheet: ActionSheet) { }

...


let buttonLabels = ['通过 Facebook 分享', '通过 Twitter 分享'];

const options: ActionSheetOptions = {
  title: '你想如何处理这张图片？',
  subtitle: '选择一个操作',
  buttonLabels: buttonLabels,
  addCancelButtonWithLabel: '取消',
  addDestructiveButtonWithLabel: '删除',
  androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
  destructiveButtonLast: true
}

this.actionSheet.show(options).then((buttonIndex: number) => {
  console.log('按下的按钮索引：' + buttonIndex);
});
```