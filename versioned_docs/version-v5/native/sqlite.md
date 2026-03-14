---
title: "SQLite | 为 iOS 和 Android 应用安装 Cordova SQLite 插件"
description: "通过为 Ionic Framework 应用安装 Cordova SQLite 插件，在支持的 iOS、Android、macOS 和 Windows 设备上访问 SQLite 数据库。"
sidebar_label: "SQLite
"
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# SQLite

在设备上访问 SQLite 数据库。

<p>
  <a href="https://github.com/litehelpers/Cordova-sqlite-storage" target="_blank" rel="noopener" className="git-link">github.com/litehelpers/Cordova-sqlite-storage</a>
</p>

<h2>是否在 Cordova 问题上卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵的时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承担花费数小时进行故障排除的成本。Ionic 的专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-sqlite-storage {'\n'}$ npm install @awesome-cordova-plugins/sqlite {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-sqlite-storage {'\n'}$ npm install @awesome-cordova-plugins/sqlite {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含由 Ionic 团队提供全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对此插件的企业版本感兴趣，<a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">请联系我们</a>。
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS
- macOS
- Windows

## 用法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

constructor(private sqlite: SQLite) { }

...

this.sqlite.create({
  name: 'data.db',
  location: 'default'
})
  .then((db: SQLiteObject) => {


    db.executeSql('create table danceMoves(name VARCHAR(32))', [])
      .then(() => console.log('SQL 语句已执行'))
      .catch(e => console.log(e));


  })
  .catch(e => console.log(e));

```