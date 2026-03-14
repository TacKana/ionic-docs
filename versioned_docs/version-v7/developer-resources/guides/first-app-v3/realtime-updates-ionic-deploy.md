# 使用 Appflow 实时更新功能为应用推送在线更新

到目前为止，您已经看到使用 Ionic 框架构建 Web 和移动应用既快速又便捷。然而，没有什么比 App Store 的审核延迟更能打乱快速迭代的步伐了。幸运的是，借助 Appflow 的 Deploy 功能，您可以直接向用户推送实时代码变更。配合无缝的后台更新机制，用户总能升级到最新版本。

设置过程简单快捷。作为参考，请继续查看 GitHub 上的 [第三部分文件夹](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part3)。首先，安装 Appflow JavaScript 库：

```shell
npm install @ionic/pro@latest --save
```

然后，添加 Appflow 插件。以下是安装命令：

```shell
$ ionic cordova plugin add cordova-plugin-ionic@latest --save
--variable APP_ID=您的应用ID --variable CHANNEL_NAME=您的渠道名称
```

需要提供两个唯一值：您的应用 ID 和渠道名称。登录 Appflow，然后在应用仪表板中找到应用 ID：

![Appflow 仪表板中应用 ID 的位置。](/img/guides/first-app-v3/app-id-location.png 'Appflow 应用 ID 位置')

我们将使用 "Master" 作为渠道名称。组合起来如下所示：

```shell
$ ionic cordova plugin add cordova-plugin-ionic@latest --save
--variable APP_ID=381533B9 --variable CHANNEL_NAME=Master
```

添加此插件后，您会注意到 `config.xml` 和 `package.json` 已更新为您的应用详情：

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

接下来，修改 `src/app/app.module.ts`，在应用启动时包含 Appflow 的初始化：

```javascript
import { Pro } from '@ionic/pro';

Pro.init('您的应用ID', {
  appVersion: '应用版本',
});
```

例如，如下所示：

```javascript
Pro.init('381533B9', {
  appVersion: '0.0.1',
});
```

然后，将代码推送到 Appflow：

```shell
git add .
git commit -m "添加 Appflow"
git push ionic master
```

接下来，为应用创建一个本地原生构建。

## Android 构建

请遵循 [Android 设置说明](../../../developing/android.md)，其中包括在您的机器上安装 Java 8 和 Android Studio。然后，在终端中运行：

```shell
ionic cordova build android --prod
```

这将生成一个未签名的调试版构建（意味着该应用可以在任何 Android 设备上运行）。

## iOS 构建

iOS 的设置比 Android [稍微复杂一些](../../../developing/ios.md)，并且需要 Mac 电脑。确保将 XCode 更新到最新版本，并设置开发团队。然后，在终端中运行：

```shell
ionic cordova build ios --prod
```

然后，继续 [按照这里的说明](../../../deployment/app-store.md) 操作，包括签名证书等。构建好应用的原生版本后，让我们将其复制到您选择的设备上。

## 将原生应用添加到本地设备

现在到了有趣的部分：在您的设备上测试原生应用！对于 iOS，最简单的方法（适用于 PC 和 Mac）是使用 iTunes。连接您的 iOS 设备，找到您的 IPA 文件，然后将 IPA 文件从文件系统拖放到 iTunes 中的设备上。应用将立即安装并可以使用：

<div class="wistia_responsive_padding" style={{ padding: '62.5% 0 0 0', position: 'relative' }}>
  <div
    class="wistia_responsive_wrapper"
    style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}
  >
    <iframe
      src="https://fast.wistia.net/embed/iframe/s5v4fujv7w?videoFoam=true"
      title="Wistia 视频播放器"
      allowtransparency="true"
      frameborder="0"
      scrolling="no"
      class="wistia_embed"
      name="wistia_embed"
      allowfullscreen
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
      title="Wistia 视频播放器"
      allowtransparency="true"
      frameborder="0"
      scrolling="no"
      class="wistia_embed"
      name="wistia_embed"
      allowfullscreen
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

## 部署变更

使用 Appflow Deploy，任何 JavaScript、HTML 或 CSS 变更都可以自动推送给应用用户。在您喜欢的代码编辑器中打开 Photo Gallery 应用，然后更新 Gallery 页面的标题：

```html
<ion-header>
  <ion-toolbar>
    <ion-title>照片查看器</ion-title>
  </ion-toolbar>
</ion-header>
```

接下来，将代码推送到 Appflow：

```shell
$ git add .
$ git commit -m "将名称更改为照片查看器"
$ git push ionic master
```

登录 [Appflow 仪表板](https://dashboard.ionicframework.com) 并导航到 Deploy -> Builds。您将看到最新的提交立即开始构建。由于我们将 Appflow 插件分配给了 Master 分支（我们总是 Git Push 到的分支），Channel 标签也将指向此提交，从而有效地将此变更自动部署给所有应用用户：

![Appflow 仪表板中的 Deploy Builds 部分。](/img/guides/first-app-v3/deploy-channel.png 'Appflow Deploy Builds')

Channel（渠道）指向您应用的特定 JavaScript 构建或快照，该构建将共享给监听该渠道更新请求的设备。您可以随时更改 Channel 指向的构建。

每次用户启动我们的 Photo Gallery 应用时，它都会从 Appflow 轮询更新。如果有新代码可用，更新将在后台下载。有 [几种方式](https://ionic.io/docs/appflow/deploy/api#update_method) 可以控制更新的执行方式，但默认情况下，更新将在用户下次关闭然后重新打开应用时应用。

当最新的构建成功后，关闭您的 Photo Gallery 应用本地副本或将其置于后台 30 秒（[MIN_BACKGROUND_DURATION 默认值](https://ionic.io/docs/appflow/deploy/api#min_background_duration)），然后重新打开。Photo Gallery 页面的标题应从 "Photo Gallery" 更改为 "Photo Viewer"。

如果您部署了一个变更，然后发现存在 bug 怎么办？或者只是对 "Photo Viewer" 这个名称不满意？没问题：Appflow Deploy 也使得回滚变更变得容易！

在 Deploy Builds 页面上，点击先前提交上的 "Assign to Channel" 按钮，然后点击 "Deploy"。应用用户将恢复到先前版本，我们的 "Photo Gallery" 名称已恢复。

![Appflow 中的 Deploy Builds 部分，一个标记为 'set name to Photo Gallery' 的提交被分配给 master 渠道以进行回滚。](/img/guides/first-app-v3/deploy-revertChange.png 'Appflow Deploy 回滚变更')

这只是您可以使用 Appflow 实时更新功能的一小部分！您还可以设置多个部署渠道，向特定用户组发送定向更新。用它来运行 A/B 测试，或按受众、地理位置或测试组定向分发更新。

## 在创建本地原生构建时遇到困难？

为 Android 和 iOS 构建原生应用二进制文件可能很痛苦。工具并不理想，新操作系统版本通常会导致具有挑战性的升级，并且在您的开发团队中创建一致的构建可能会令人沮丧。幸运的是，Appflow 的 Package 功能使这一切变得简单：只需上传您的 iOS 证书和 Android 密钥库文件，剩下的就交给我们了！

[开始在云端打包您的应用](https://dashboard.ionicframework.com/settings/billing)，每月还可获得 10,000 次 Ionic 部署。

接下来，我们将介绍 Appflow Monitoring - 实时跟踪您的应用错误。