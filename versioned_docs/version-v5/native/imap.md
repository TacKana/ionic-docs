---
sidebar_label: 'Imap'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Imap

该插件将使 Ionic 应用程序能够使用 IMAP（Internet Message Access Protocol，互联网消息访问协议）功能。
此插件目前处于 Beta 版本，仅支持 Android 平台。
该插件使用 Java Mail API。
计划中的改进包括增加对 iOS 的支持。

<p>
  <a href="https://github.com/aleksandar888/cordova-plugin-imap.git" target="_blank" rel="noopener" className="git-link">github.com/aleksandar888/cordova-plugin-imap.git</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-plugin-imap {'\n'}$ npm install @awesome-cordova-plugins/imap {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-imap {'\n'}$ npm install @awesome-cordova-plugins/imap {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 提供 Ionic 团队完全支持并维护的插件。 &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或者如果您对此插件的企业版本感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android

## 用法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { Imap } from '@awesome-cordova-plugins/imap/ngx';


constructor(private imap: Imap) { }

...


this.imap.connect({
 host: 'imap.gmail.com',
 user: 'my_email@gmail.com',
 password: 'my-pass'
})
  .then((res: Connection) => console.log(res))
  .catch((error) => console.error(error));



 this.imap.disconnect()
  .then((res: boolean) => console.log(res))
  .catch((error: any) => console.error(error));



this.imap.isConnected()
  .then((res: boolean) => console.log(res))
  .catch((error: any) => console.error(error));

 注意：必须连接到 IMAP 服务才能从以下函数获取数据。


  this.imap.listMailFolders()
  .then((res: boolean) => console.log(res))
  .catch((error: any) => console.error(error));


  this.imap.getMessageCountByFolderName('INBOX')
  .then((res: number) => {
  // 返回该文件夹中的邮件数量作为结果
   console.log(res)
  })
  .catch((error: any) => {
    console.error(error)
  });



  this.imap.searchMessagesByDatePeriod('INBOX', 1601503200000, Comparison.GE)
  .then((res: number[]) => {
  // 返回包含邮件连续编号的数组
  // 例如：[1207, 1208, 1209]
   console.log(res)
  })
  .catch((error: any) => {
    console.error(error)
  });


  this.imap.listMessagesHeadersByConsecutiveNumber('INBOX', 1200, 1280)
  .then((res: Message[]) => {
  // 返回包含邮件头数据的数组
   console.log(res)
  })
  .catch((error: any) => {
    console.error(error)
  });


  this.imap.listMessagesHeadersByDate('INBOX', 1601503200000, Comparison.GE)
  .then((res: Message[]) => {
  // 返回包含邮件头数据的数组
   console.log(res)
  })
  .catch((error: any) => {
    console.error(error)
  });


  this.imap.getFullMessageData('INBOX', 1205)
  .then((res: Message) => {
  // 返回包含完整邮件数据（包括附件）的 "Message" 对象。
   console.log(res)
  })
  .catch((error: any) => {
    console.error(error)
  });


  this.imap.copyToFolder('INBOX', 'Spam', [1204, 1205, 1206, 1207])
  .then((res: boolean) => {
  // 如果操作成功则返回 "true"，否则返回 "false"。
   console.log(res)
  })
  .catch((error: any) => {
    console.error(error)
  });


  * 在邮件上设置一个标志
  * "setFlag()" 可以通过将删除标志设置为 "FlagEnum.DELETED" 来删除邮件
  this.imap.setFlag('INBOX', [1206, 1205, 1204], FlagEnum.SEEN, true)
  .then((res: ModificationResult) => {

   // res.status - 根据删除成功与否返回 true 或 false

  //res.modifiedMessages - 例如 [1206, 1205, 1204];

  })
  .catch((error: any) => {
    console.error(error)
  });

```