---
sidebar_label: '语音识别'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 语音识别

这个插件利用云端服务实现语音识别功能

<p>
  <a href="https://github.com/pbakondy/cordova-plugin-speechrecognition" target="_blank" rel="noopener" className="git-link">github.com/pbakondy/cordova-plugin-speechrecognition</a>
</p>

<h2>被 Cordova 问题困扰？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在开发重要项目，无法承担数小时的问题排查时间。Ionic 专家为社区插件和高级插件提供专业咨询服务。</p>
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
      $ npm install cordova-plugin-speechrecognition {'\n'}$ npm install @awesome-cordova-plugins/speech-recognition{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-speechrecognition {'\n'}$ npm install
      @awesome-cordova-plugins/speech-recognition {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版提供 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，如果您对此插件的企业版感兴趣，请 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 用法

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { SpeechRecognition } from '@awesome-cordova-plugins/speech-recognition/ngx';

constructor(private speechRecognition: SpeechRecognition) { }

...



// 检查功能是否可用
this.speechRecognition.isRecognitionAvailable()
  .then((available: boolean) => console.log(available))

// 开始识别过程
this.speechRecognition.startListening(options)
  .subscribe(
    (matches: string[]) => console.log(matches),
    (onerror) => console.log('error:', onerror)
  )

// 停止识别过程（仅限 iOS）
this.speechRecognition.stopListening()

// 获取支持的语言列表
this.speechRecognition.getSupportedLanguages()
  .then(
    (languages: string[]) => console.log(languages),
    (error) => console.log(error)
  )

// 检查权限
this.speechRecognition.hasPermission()
  .then((hasPermission: boolean) => console.log(hasPermission))

// 请求权限
this.speechRecognition.requestPermission()
  .then(
    () => console.log('已授权'),
    () => console.log('已拒绝')
  )

```