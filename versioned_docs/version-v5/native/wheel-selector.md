---
sidebar_label: 'WheelSelector 插件'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# WheelSelector 插件

用于 Cordova（Android/iOS）的原生滚轮选择器。

<p>
  <a href="https://github.com/jasonmamy/cordova-wheel-selector-plugin" target="_blank" rel="noopener" className="git-link">github.com/jasonmamy/cordova-wheel-selector-plugin</a>
</p>

<h2>在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承担花费数小时进行故障排除的代价。Ionic 的专家为社区插件和高级插件提供高级咨询服务。</p>
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
      $ npm install cordova-wheel-selector-plugin {'\n'}$ npm install @awesome-cordova-plugins/wheel-selector {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-wheel-selector-plugin {'\n'}$ npm install
      @awesome-cordova-plugins/wheel-selector {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 附带 Ionic 团队提供全面支持和维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或者如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 用法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```
import { WheelSelector } from '@awesome-cordova-plugins/wheel-selector/ngx';


constructor(private selector: WheelSelector) { }

...

const jsonData = {
  numbers: [
   { description: "1" },
    { description: "2" },
    { description: "3" }
  ],
  fruits: [
    { description: "Apple" },
    { description: "Banana" },
    { description: "Tangerine" }
  ],
  firstNames: [
    { name: "Fred", id: '1' },
    { name: "Jane", id: '2' },
    { name: "Bob", id: '3' },
    { name: "Earl", id: '4' },
    { name: "Eunice", id: '5' }
  ],
  lastNames: [
    { name: "Johnson", id: '100' },
    { name: "Doe", id: '101' },
    { name: "Kinishiwa", id: '102' },
    { name: "Gordon", id: '103' },
    { name: "Smith", id: '104' }
  ]
}

...

// 基础数字选择，结果中始终返回索引
 selectANumber() {
   this.selector.show({
     title: "选择多少？",
     items: [
       this.jsonData.numbers
     ],
   }).then(
     result => {
       console.log(result[0].description + ' 索引: ' + result[0].index);
     },
     err => console.log('错误: ', err)
     );
 }

 ...

 // 基础选择，设置初始显示的默认值: '3' 'Banana'
 selectFruit() {
   this.selector.show({
     title: "选择多少？",
     items: [
       this.jsonData.numbers, this.jsonData.fruits
     ],
     positiveButtonText: "确定",
     negativeButtonText: "取消",
     defaultItems: [
 	  {index:0, value: this.jsonData.numbers[2].description},
 	  {index: 1, value: this.jsonData.fruits[3].description}
 	]
   }).then(
     result => {
       console.log(result[0].description + ' ' + result[1].description);
     },
     err => console.log('错误: ' + JSON.stringify(err))
     );
 }

 ...

 // 更复杂的用法，覆盖显示的键，然后从原始数据中检索属性
 selectNamesUsingDisplayKey() {
   this.selector.show({
     title: "选择谁？",
     items: [
       this.jsonData.firstNames, this.jsonData.lastNames
     ],
     displayKey: 'name',
     defaultItems: [
 	  {index:0, value: this.jsonData.firstNames[2].name},
       {index: 0, value: this.jsonData.lastNames[3].name}
     ]
   }).then(
     result => {
       console.log(result[0].name + ' (id= ' + this.jsonData.firstNames[result[0].index].id + '), ' +
         result[1].name + ' (id=' + this.jsonData.lastNames[result[1].index].id + ')');
     },
     err => console.log('错误: ' + JSON.stringify(err))
     );
 }

```