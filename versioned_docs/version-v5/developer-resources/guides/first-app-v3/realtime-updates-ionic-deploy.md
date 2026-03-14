# 使用 Appflow Live Updates 实现实时应用更新

正如您到目前为止所见，使用 Ionic 框架构建 Web 和移动应用既快速又简单。然而，没有什么比应用商店的延迟更能破坏快速迭代了。幸运的是，通过 Appflow 的部署功能，您可以直接向用户推送实时代码更改。结合无缝的后台更新机制，用户将始终升级到最新版本。

设置过程快速简单。作为参考，请继续查看 GitHub 上的[第三部分文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part3)。首先，安装 Appflow JavaScript 库：

```shell
npm install @ionic/pro@latest --save
```

然后，添加 Appflow 插件。以下是安装命令：

```shell
$ ionic cordova plugin add cordova-plugin-ionic@latest --save
--variable APP_ID=YOUR_APP_ID --variable CHANNEL_NAME=YOUR_CHANNEL_NAME
```

需要提供两个唯一值：您的应用 ID 和渠道名称。登录 Appflow，然后在应用仪表板中找到应用 ID：

![Appflow 仪表板中应用 ID 的位置。](/img/guides/first-app-v3/app-id-location.png 'Appflow 应用 ID 位置')

我们将使用 "Master" 作为渠道名称。将其整合后如下所示：

```shell
$ ionic cordova plugin add cordova-plugin-ionic@latest --save
--variable APP_ID=381533B9 --variable CHANNEL_NAME=Master
```

添加此插件后，您会注意到 `config.xml` 和 `package.json` 已更新为您的应用详细信息：

```xml
<plugin name="cordova-plugin-ionic" spec="^5.0.6">
    <variable name="APP_ID" value="381533B9" />
    <variable name="CHANNEL_NAME" value="Master" />
    <variable name="WARN_DEBUG" value="true" />
    <variable name="UPDATE_API" value="https://api.ionicjs.com" />
    <variable name="UPDATE_METHOD" value="background" />
    <variable name="MAX_STORE" value="2" />
    <variable name="MIN_BACKGROUND_DURATION" value="30" />
</plugin>
```

接下来，修改 `src/app/app.module.ts` 以包含应用启动时的 Appflow 初始化：

```javascript
import { Pro } from '@ionic/pro';

Pro.init('YOUR_APP_ID', {
  appVersion: 'APP_VERSION',
});
```

例如，这看起来像：

```javascript
Pro.init('381533B9', {
  appVersion: '0.0.1',
});
```

接下来，将代码推送到 Appflow：

```shell
git add .
git commit -m "adding Appflow"
git push ionic master
```

接下来，创建应用的本地原生构建。

## Android 构建

请按照 [Android 设置说明](../../../developing/android.md)，其中包括在您的计算机上安装 Java 8 和 Android Studio。然后，在终端中运行：

```shell
ionic cordova build android --prod
```

这将生成一个未签名的调试版本（意味着该应用可以在任何 Android 设备上运行）。

## iOS 构建

iOS 的设置比 Android [稍微复杂一些](../../../developing/ios.md)，需要 Mac 电脑。确保 XCode 更新到最新版本并设置开发团队。然后，在终端中运行：

```shell
ionic cordova build ios --prod
```

然后，继续[按照这里的说明](../../../deployment/app-store.md)处理签名证书等事宜。构建好应用的原生版本后，让我们将其复制到您选择的设备上。

## 将原生应用添加到本地设备

现在是有趣的部分：在您的设备上测试原生应用！对于 iOS，最简单的方法（适用于 PC 和 Mac）是使用 iTunes。连接您的 iOS 设备，找到 IPA 文件，然后从文件系统中将 IPA 文件拖放到 iTunes 中的设备上。应用将立即安装并准备就绪：

<div class="wistia_responsive_padding" style={{ padding: '62.5% 0 0 0', position: 'relative' }}>
  <div
    class="wistia_responsive_wrapper"
    style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
  >
    <iframe
      src="https://fast.wistia.net/embed/iframe/s5v4fujv7w?videoFoam=true"
      title="Wistia video player"
      allowtransparency="true"
      frameBorder="0"
      scrolling="no"
      class="wistia_embed"
      name="wistia_embed"
      allowFullScreen
      mozallowfullscreen
      webkitallowfullscreen
      oallowfullscreen
      msallowfullscreen
      width="100%"
      height="100%"
    ></iframe>
  </div>
</div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

对于 Android 测试，跨所有操作系统平台最简单的方法是使用 [Android Studio](https://developer.android.com/studio/)，这是 Google 官方的 Android IDE。下载后，将您的 Android 设备连接到计算机。在 Studio 启动屏幕上，选择 "Profile or debug APK"，然后选择最近构建的 APK 文件。

在右上角，点击播放按钮。选择您连接的设备，然后点击确定：

<div class="wistia_responsive_padding" style={{ padding: '62.5% 0 0 0', position: 'relative' }}>
  <div
    class="wistia_responsive_wrapper"
    style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
  >
    <iframe
      src="https://fast.wistia.net/embed/iframe/b2ys5v4sno?videoFoam=true"
      title="Wistia video player"
      allowtransparency="true"
      frameBorder="0"
      scrolling="no"
      class="wistia_embed"
      name="wistia_embed"
      allowFullScreen
      mozallowfullscreen
      webkitallowfullscreen
      oallowfullscreen
      msallowfullscreen
      width="100%"
      height="100%"
    ></iframe>
  </div>
</div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## 部署更改

通过 Appflow Deploy，任何 JavaScript、HTML 或 CSS 更改都可以自动推送给应用用户。在您喜欢的代码编辑器中打开 Photo Gallery 应用，然后更新图库页面的标题：

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Photo Viewer</ion-title>
  </ion-toolbar>
</ion-header>
```

接下来，将代码推送到 Appflow：

```shell
$ git add .
$ git commit -m "change name to Photo Viewer"
$ git push ionic master
```

登录 [Appflow 仪表板](https://dashboard.ionicframework.com) 并导航至 Deploy -> Builds。您将看到这个最新的提交立即开始构建。由于我们将 Appflow 插件分配给了 Master 分支（我们总是 Git Push 的分支），渠道标签也将指向此提交，从而有效地将此更改自动部署给所有应用用户：

![Appflow 仪表板中的 Deploy Builds 部分。](/img/guides/first-app-v3/deploy-channel.png 'Appflow Deploy Builds')

渠道指向您应用的特定 JavaScript 构建或快照，该构建将共享给监听该渠道更新的设备。您可以随时更改渠道指向的构建。

每次用户启动我们的 Photo Gallery 应用时，它都会轮询 Appflow 以获取更新。如果有新代码可用，更新将在后台下载。有[多种方式](https://ionic.io/docs/appflow/deploy/api#update_method)可以控制更新如何执行，但默认情况下，更新将在用户关闭然后重新打开应用时应用。

当最新的构建成功后，关闭 Photo Gallery 应用的本地副本或将其置于后台 30 秒（[MIN_BACKGROUND_DURATION 默认值](https://ionic.io/docs/appflow/deploy/api#min_background_duration)），然后重新打开它。Photo Gallery 页面的标题应从 "Photo Gallery" 更改为 "Photo Viewer"。

如果您部署了一个更改，然后发现有错误怎么办？或者您只是不喜欢 "Photo Viewer" 这个名字？没问题：Appflow Deploy 同样可以轻松地回滚更改！

在 Deploy Builds 页面上，点击前一个提交上的 "Assign to Channel" 按钮，然后点击 "Deploy"。应用用户将恢复到之前的版本，我们的 "Photo Gallery" 名称也已恢复。

![Appflow 中的 Deploy Builds 部分，带有标签为 'set name to Photo Gallery' 的提交被分配给主渠道以进行回滚。](/img/guides/first-app-v3/deploy-revertChange.png 'Appflow Deploy Revert Change')

这只是 Appflow Live Updates 功能的冰山一角！您还可以设置多个部署渠道，向特定用户组发送定向更新。使用它来运行 A/B 测试，或按受众、地理位置或测试组定向分发更新。

## 在创建本地原生构建时遇到困难？

为 Android 和 iOS 构建原生应用二进制文件可能很痛苦。工具不完善，新的操作系统版本通常会导致具有挑战性的升级，并且在开发团队中创建一致的构建可能令人沮丧。幸运的是，Appflow 的 Package 功能使这一切变得简单：只需上传您的 iOS 证书和 Android 密钥库文件，剩下的就交给我们！

[开始在云端打包您的应用](https://dashboard.ionicframework.com/settings/billing)，每月享受 10,000 次 Ionic Deploys。

接下来，我们将介绍 Appflow Monitoring - 实时跟踪应用错误。