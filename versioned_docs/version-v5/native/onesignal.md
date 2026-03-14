---
title: 'OneSignal | OneSignal Cordova SDK 推送通知插件'
description: 'OneSignal Cordova SDK 插件是为 Ionic 应用实现推送通知的简洁解决方案。查阅 OneSignal 文档了解更多信息。'
sidebar_label: 'OneSignal'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# OneSignal

OneSignal 插件是一个用于集成 [OneSignal](https://onesignal.com) 服务的客户端实现。OneSignal 是用于实现推送通知的简洁方案。

请参阅官方 [OneSignal Ionic SDK 安装指南](https://documentation.onesignal.com/docs/ionic-sdk-setup) 了解更多信息。

#### 图标配置

如果你想使用 `ionic cordova resources` 命令生成的图标：

1. 在 `hooks` 目录下创建文件 `copy_android_notification_icons.js`

2. 在 config.xml 中配置钩子

```
    <platform name="android">
        <hook type="after_prepare" src="hooks/copy_android_notification_icons.js" />
    </platform>
```

3. 将以下代码放入该文件中：

```
#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var filestocopy = [{
    "resources/android/icon/drawable-hdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-hdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-mdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-mdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xhdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-xhdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xxhdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-xxhdpi/ic_stat_onesignal_default.png"
}, {
    "resources/android/icon/drawable-xxxhdpi-icon.png":
        "platforms/android/app/src/main/res/drawable-xxxhdpi/ic_stat_onesignal_default.png"
} ];

module.exports = function(context) {

    // no need to configure below
    var rootdir = context.opts.projectRoot;

    filestocopy.forEach(function(obj) {
        Object.keys(obj).forEach(function(key) {
            var val = obj[key];
            var srcfile = path.join(rootdir, key);
            var destfile = path.join(rootdir, val);
            console.log("copying "+srcfile+" to "+destfile);
            var destdir = path.dirname(destfile);
            if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
                fs.createReadStream(srcfile).pipe(
                    fs.createWriteStream(destfile));
            }
        });
    });

};
```

3. 在项目根目录下设置文件为可执行：
   `$ chmod +x hooks/copy_android_notification_icons.js`

<p>
  <a href="https://github.com/OneSignal/OneSignal-Cordova-SDK" target="_blank" rel="noopener" className="git-link">github.com/OneSignal/OneSignal-Cordova-SDK</a>
</p>

<h2>遇到 Cordova 问题卡住了？</h2>
<DocsCard
  className="cordova-ee-card"
  header="不要在插件问题上浪费宝贵时间"
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>如果你正在开发重要项目，经不起数小时的问题排查。Ionic 专家为社区插件和高级插件提供专业的咨询服务。</p>
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
      $ npm install onesignal-cordova-plugin {'\n'}$ npm install @awesome-cordova-plugins/onesignal {'\n'}$ ionic cap
      sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add onesignal-cordova-plugin {'\n'}$ npm install @awesome-cordova-plugins/onesignal {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic 企业版包含 Ionic 团队全面支持与维护的插件。&nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">了解更多</a> 或如果你对此插件的企业版感兴趣 <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">联系我们</a>
    </blockquote>
  </TabItem>
</Tabs>

## 支持的平台

- Amazon Fire OS
- Android
- iOS
- Windows

## 使用说明

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';

constructor(private oneSignal: OneSignal) { }

...

this.oneSignal.startInit('b2f7f966-d8cc-11e4-bed1-df8f05be55ba', '703322744261');

this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

this.oneSignal.handleNotificationReceived().subscribe(() => {
 // 收到通知时的处理逻辑
});

this.oneSignal.handleNotificationOpened().subscribe(() => {
  // 点击打开通知时的处理逻辑
});

this.oneSignal.endInit();
```