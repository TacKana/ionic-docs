---
title: 您的第一个 Ionic 应用：Angular
sidebar_label: 您的第一个 Ionic 应用：Angular
---

# 您的第一个 Ionic 应用：Angular

Ionic 的伟大之处在于，只需一个代码库，您就可以使用熟悉的 Web 工具和语言为任何平台构建应用。跟随我们一起创建一个可用的照片画廊。以下是前后的对比：

![Ionic 应用从空白的'Tab Two'到带有图片的'Photo Gallery'的转变。](/img/guides/first-app-v3/gallery-combined.png 'Ionic 应用照片画廊前后对比')

开始很容易。请注意，本指南中引用的所有代码都可以在 [GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4/) 上找到。

## 所需工具

立即下载/安装这些工具，以确保最佳的 Ionic 开发体验：

- [Git](https://git-scm.com/downloads) 用于版本控制。
- <strong>SSH 客户端</strong>，例如 [PuTTy](https://putty.software/)，用于安全登录 Appflow。
- <strong>Node.js</strong> 用于与 Ionic 生态系统交互。[在此处下载 LTS 版本](https://nodejs.org/en/)。
- <strong>代码编辑器</strong>用于...写代码！我们推荐 [Visual Studio Code](https://code.visualstudio.com/)。
- <strong>命令行终端（CLI）</strong>：<strong>Windows</strong> 用户请注意，为了获得最佳的 Ionic 体验，我们建议使用内置命令行（cmd）或 PowerShell CLI，以管理员模式运行。对于 <strong>Mac/Linux</strong> 用户，几乎任何终端都可以。

## 安装 Ionic 和 Cordova

在命令行中运行以下命令：

```shell
npm install -g @ionic/cli cordova
```

:::note
`-g` 选项表示_全局安装_。当包全局安装时，可能会发生 `EACCES` 权限错误。

考虑设置 npm 在没有提升权限的情况下全局运行。有关更多信息，请参见[解决权限错误](../../../developing/tips.md#解决权限错误)。
:::

## 创建应用

接下来，使用我们的"Tabs"应用模板创建一个 Ionic Angular 应用：

```shell
ionic start photo-gallery tabs
```

这个启动项目包含三个预置页面和 Ionic 开发的最佳实践。由于常见的构建模块已经就位，我们可以轻松地添加更多功能！

接下来，进入应用文件夹：

```shell
cd photo-gallery
```

就这样！现在是有趣的部分 - 让我们看看应用的运行效果。

## 运行应用

接下来运行这个命令：

```shell
ionic serve
```

瞧！您的 Ionic 应用现在正在 Web 浏览器中运行。您的应用大部分都可以在浏览器中构建，大大提高了开发速度。

## 照片画廊！！！

有三个标签页。点击 Tab2 标签页。它是一块空白画布，也就是添加相机功能的绝佳位置。让我们开始将这个页面转变为照片画廊。Ionic 具有 LiveReload 功能，当您进行更改并保存时，应用会立即更新！

![演示 Ionic LiveReload 功能的动画 GIF，显示代码更改后应用中的实时更新。](/img/guides/first-app-v3/email-photogallery.gif 'Ionic LiveReload 功能演示')

在您喜欢的代码编辑器中打开 photo-gallery 应用文件夹，然后导航到 `/src/app/tab2/tab2.page.html`。我们看到：

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab Two</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
```

`ion-header` 表示顶部导航和工具栏，标题为 "Tab 2"。我们将应用代码放在 `ion-content` 中。在这里，我们将添加一个按钮，用于打开设备相机并显示相机拍摄的图像。但首先，让我们从一些明显的事情开始：重命名 Tab Two 页面：

```html
<ion-title>Photo Gallery</ion-title>
```

接下来，打开 `src/app/tabs/tabs.page.html`。将标签改为 "Gallery"，将图标名称改为 "images"：

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Gallery</ion-label>
</ion-tab-button>
```

这只是我们可以用 Ionic 做的所有酷炫事情的开始。接下来，我们将把应用部署到您的 iOS 或 Android 设备，然后继续构建照片画廊。
