# 你的第一个 Ionic 应用 - Framework v3

Ionic 的强大之处在于，通过一个代码库，您可以使用熟悉的 Web 工具和语言为任何平台构建应用。跟随我们一起创建一个可用的照片库应用。以下是前后对比：

![一个 Ionic 应用从空白的 "Tab Two" 变为带图片的 "Photo Gallery" 的转变过程。](/img/guides/first-app-v3/gallery-combined.png 'Ionic 应用照片库前后对比')

入门非常简单。本指南的参考代码可以在 [GitHub 上找到](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/)。

## 安装 Node.js

如果您还没有安装 Node.js，请[下载 LTS 版本](https://nodejs.org/en/)。

## 安装 Ionic

在命令行中运行以下命令（在 Mac 上可能需要添加 "sudo" 前缀）：

```shell
npm install -g @ionic/cli
```

## 创建应用

接下来，使用我们的 "Tabs" 应用模板创建一个 Ionic 应用：

```shell
ionic start photo-gallery tabs
```

这个启动项目包含三个预构建页面和 Ionic 开发的最佳实践。有了这些通用构建模块，我们可以轻松添加更多功能！

<strong>"您是否希望将新应用与 Cordova 集成以支持原生 iOS 和 Android？"</strong>

输入 "y" 并按回车。项目设置可能需要一些时间。

<strong>"是否安装免费的 Appflow SDK 并连接您的应用？"</strong>

输入 "y" 并按回车。[Appflow](https://ionicframework.com/pro) 是一组基于 Ionic Framework 构建的强大服务和功能集，包括：即时更新您的应用（跳过应用商店审核流程！）、云端打包应用以及错误监控。

<strong>登录您的 Ionic 账户</strong>

立即登录，以便在本教程后续轻松使用 Live Deploys 等强大功能。

<strong>您想要做什么？</strong>

选择"在 Appflow 上创建一个新应用"。

<strong>您想使用哪个 Git 托管服务？</strong>

选择"Appflow"。

<strong>"您希望如何连接到 Appflow？"</strong>

- 如果您之前没有使用过 SSH，请选择"自动为 Appflow 设置新的 SSH 密钥对"。
- 如果您之前使用过 SSH，请选择"使用现有的 SSH 密钥对"。

接下来，进入应用文件夹，然后将代码推送到 Appflow：

```shell
$ cd photo-gallery
$ git push ionic master
```

就是这样！现在进入有趣的部分——让我们看看它的效果。

## 运行应用

接下来运行以下命令：

```shell
ionic serve
```

瞧！您的 Ionic 应用现在正在 Web 浏览器中运行。您的应用大部分都可以直接在浏览器中构建，大大提高了开发速度。

## 照片库！！！

有三个标签页："Home"、"About" 和 "Contact"。点击 About 标签页。它是一个空白画布，即添加相机功能的完美位置。让我们开始将 About 页面转变为照片库。Ionic 具有 LiveReload 功能，因此当您更改并保存时，应用会立即更新！

![演示 Ionic LiveReload 功能的 GIF 动画，展示代码更改后应用的实时更新。](/img/guides/first-app-v3/email-photogallery.gif 'Ionic LiveReload 功能演示')

在您喜欢的代码编辑器中打开 photo-gallery 应用文件夹，然后导航到 `/src/pages/about/about.html`。我们看到：

```html
<ion-header>
  <ion-toolbar>
    <ion-title>About</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
```

`ion-header` 表示顶部导航和工具栏，标题为 "About"。我们将应用代码放入 `ion-content` 中。在这里，我们将添加一个按钮，用于打开设备相机并显示拍摄的图像。但首先，让我们从一些显而易见的事情开始：重命名 About 页面：

```html
<ion-title>Photo Gallery</ion-title>
```

接下来，打开 `src/pages/tabs/tabs.html`。将 tabTitle 改为 "Gallery"，将 tabIcon 改为 "images"：

```html
<ion-tabs>
  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>
  <ion-tab [root]="tab2Root" tabTitle="Gallery" tabIcon="images"></ion-tab>
  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>
</ion-tabs>
```

现在，将您的更改备份到 Appflow：

```shell
$ git add .
$ git commit -m "converting about page to photo gallery"
$ git push ionic master
```

这只是我们使用 Ionic 可以做的所有酷事情的开端。接下来，我们将把应用部署到 iOS 和 Android，然后继续构建照片库。
