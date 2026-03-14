---
sidebar_label: 'Open Native Settings'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# 打开原生设置

用于打开 iOS/Android 设置原生界面的插件

<p>
  <a href="https://github.com/guyromb/Cordova-open-native-settings" target="_blank" rel="noopener" className="git-link">github.com/guyromb/Cordova-open-native-settings</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间。"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果您正在构建一个严肃的项目，您无法承受花费数小时进行故障排除。Ionic 专家为社区插件和高级插件提供优质的咨询服务。</p>
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
      $ npm install cordova-open-native-settings {'\n'}$ npm install @awesome-cordova-plugins/open-native-settings{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-open-native-settings {'\n'}$ npm install
      @awesome-cordova-plugins/open-native-settings {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise 包含 Ionic 团队提供全面支持和维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a>，或者如果您对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用方法

### React

[了解更多关于在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

您可以打开以下任意设置：

```
 "about", // ios
 "accessibility", // ios, android
 "account", // ios, android
 "airplane_mode", // ios, android
 "apn", // android
 "application_details", // ios, android
 "application_development", // android
 "application", // android
 "autolock", // ios
 "battery_optimization", // android
 "bluetooth", // ios, android
 "castle", // ios
 "captioning", // android
 "cast", // android
 "cellular_usage", // ios
 "configuration_list", // ios
 "data_roaming", // android
 "date", // ios, android
 "display", // ios, android
 "dream", // android
 "facetime", // ios
 "home", // android
 "keyboard", // ios, android
 "keyboard_subtype", // android
 "locale", // ios, android
"location", // ios, android
"locations", // ios
"manage_all_applications", // android
"manage_applications", // android
"memory_card", // android
"music", // ios
"music_equalizer", // ios
"music_volume", // ios
"network", // ios, android
"nike_ipod", // ios
"nfcsharing", // android
"nfc_payment", // android
"nfc_settings", // android
"notes", // ios
"notification_id", // ios
"passbook", // ios
"phone", // ios
"photos", // ios
"print", // android
"privacy", // android
"quick_launch", // android
"reset", // ios
"ringtone", // ios
"browser", // ios
"search", // ios, android
"security", // android
"settings", // ios, android
"show_regulatory_info",
"sound", // ios, android
"software_update", // ios
"storage", // ios, android
"store", // ios, android
"sync", // android
"tethering", // ios
"twitter", // ios
"touch", // ios
"usage", // ios, android
"user_dictionary", // android
"video", // ios
"voice_input", // android
"vpn", // ios
"wallpaper", // ios
"wifi_ip", // android
"wifi", // ios, android
"wireless" // android
```

```tsx
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';


constructor(private openNativeSettings: OpenNativeSettings) { }

...


```