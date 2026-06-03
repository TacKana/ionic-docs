---
title: 您的第一个 Ionic 应用 - Framework v3
sidebar_label: 您的第一个 Ionic 应用 - Framework v3
---

# 您的第一个 Ionic 应用 - Framework v3

Ionic 的伟大之处在于，只需一个代码库，您就可以使用熟悉的 Web 工具和语言为任何平台构建应用。跟随我们一起创建一个可用的照片画廊。以下是前后的对比：

![Ionic 应用从空白的"Tab Two"到带有图片的"Photo Gallery"的转变。](/img/guides/first-app-v3/gallery-combined.png 'Ionic 应用照片画廊前后对比')

开始很容易。本指南的参考代码可以在 [GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/) 上找到。

## 安装 Node.js

如果您还没有安装 Node.js，请[下载 LTS 版本](https://nodejs.org/en/)。

## 安装 Ionic

在命令行中运行以下命令（在 Mac 上可能需要添加 "sudo"）：

```shell
npm install -g @ionic/cli
```

## 创建应用

接下来，使用我们的"Tabs"应用模板创建一个 Ionic 应用：

```shell
ionic start photo-gallery tabs
```

这个启动项目包含三个预置页面和 Ionic 开发的最佳实践。由于常见的构建模块已经就位，我们可以轻松地添加更多功能！

<strong>"您想将新应用与 Cordova 集成以针对原生 iOS 和 Android 吗？"</strong>

输入 "y" 并按 Enter。项目设置可能需要一些时间。

<strong>"安装免费的 Appflow SDK 并连接您的应用吗？"</strong>

输入 "y" 并按 Enter。[Appflow](https://ionicframework.com/pro) 是一组基于旗舰 Ionic Framework 构建的强大服务和功能。包括即时更新应用（跳过应用商店审核流程！）、在云端打包应用以及错误监控。

<strong>登录您的 Ionic 账户</strong>

立即登录，以便稍后在本教程中轻松访问诸如 Live Deploy 等出色功能。

<strong>您想做什么？</strong>

选择"在 Appflow 上创建新应用"。

<strong>您想使用哪个 git 托管服务？</strong>

选择"Appflow"。

<strong>您想如何连接到 Appflow？</strong>

- 如果您之前没有使用过 SSH，请选择"自动为 Appflow 设置新的 SSH 密钥对"。
- 如果您之前使用过 SSH，请选择"使用现有的 SSH 密钥对"。

接下来，进入应用文件夹，然后将代码推送到 Appflow：

```shell
$ cd photo-gallery
$ git push ionic master
```

就这样！现在是有趣的部分 - 让我们看看它的运行效果。

## 运行应用

接下来运行这个命令：

```shell
ionic serve
```

瞧！您的 Ionic 应用现在正在 Web 浏览器中运行。您的应用大部分都可以在浏览器中构建，大大提高了开发速度。

## 照片画廊！！！

有三个标签页："Home"、"About"和"Contact"。点击 About 标签页。它是一块空白画布，也就是添加相机功能的绝佳位置。让我们开始将 About 页面转变为照片画廊。Ionic 具有 LiveReload 功能，当您进行更改并保存时，应用会立即更新！

![演示 Ionic LiveReload 功能的动画 GIF，显示代码更改后应用中的实时更新。](/img/guides/first-app-v3/email-photogallery.gif 'Ionic LiveReload 功能演示')

在您喜欢的代码编辑器中打开 photo-gallery 应用文件夹，然后导航到 `/src/pages/about/about.html`。我们看到：

```html
<ion-header>
  <ion-toolbar>
    <ion-title>About</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
```

`ion-header` 表示顶部导航和工具栏，标题为"About"。我们将应用代码放在 `ion-content` 中。在这里，我们将添加一个按钮，用于打开设备相机并显示相机拍摄的图像。但首先，让我们从一些明显的事情开始：重命名 About 页面：

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

这只是我们可以用 Ionic 做的所有酷炫事情的开始。接下来，我们将把应用部署到 iOS 和 Android，然后继续构建照片画廊。
