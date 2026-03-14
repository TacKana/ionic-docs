# 你的第一个 Ionic 应用 - Framework v3

Ionic 的强大之处在于，只需一套代码，就能使用熟悉的 Web 工具和语言为任何平台构建应用。跟随我们一起创建一个实用的照片库应用。以下是前后效果对比：

![一款 Ionic 应用从空白的'Tab Two'变为带有图片的'Photo Gallery'的转变过程](/img/guides/first-app-v3/gallery-combined.png 'Ionic 应用照片库前后对比')

开始使用很简单。本指南的参考代码可以在 [GitHub 上找到](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/)。

## 安装 Node.js

如果尚未安装 Node.js，请[下载 LTS 版本](https://nodejs.org/en/)。

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

这个入门项目包含三个预构建页面和 Ionic 开发的最佳实践。有了现成的通用构建模块，我们可以轻松添加更多功能！

<strong>"是否要将新应用与 Cordova 集成以支持原生 iOS 和 Android？"</strong>

输入 "y" 并按回车键。项目设置可能需要几分钟时间。

<strong>"安装免费的 Appflow SDK 并连接你的应用？"</strong>

输入 "y" 并按回车键。[Appflow](https://ionicframework.com/pro) 是基于旗舰 Ionic Framework 构建的一套强大的服务和功能集。其中包括即时更新应用（跳过应用商店审核流程！）、云端打包应用和错误监控。

<strong>登录你的 Ionic 账户</strong>

现在登录，以便在本教程后续轻松访问实时部署等强大功能。

<strong>你想要做什么？</strong>

选择 "在 Appflow 上创建新应用"。

<strong>你想要使用哪个 git 托管服务？</strong>

选择 "Appflow"。

<strong>"你希望如何连接到 Appflow？"</strong>

- 如果你之前没有使用过 SSH，请选择 "为 Appflow 自动设置新的 SSH 密钥对"。
- 如果你之前使用过 SSH，请选择 "使用现有的 SSH 密钥对"。

接下来，切换到应用文件夹，然后将你的代码推送到 Appflow：

```shell
$ cd photo-gallery
$ git push ionic master
```

完成！现在是更有趣的部分——让我们看看它的实际效果。

## 运行应用

接下来运行以下命令：

```shell
ionic serve
```

瞧！你的 Ionic 应用现在在网页浏览器中运行了。大部分应用功能都可以直接在浏览器中构建，大大提高了开发速度。

## 照片库！！！

应用有三个标签页："Home"、"About" 和 "Contact"。点击 About 标签页。这是一个空白画布，正是添加相机功能的理想位置。让我们开始将 About 页面改造成照片库。Ionic 具备 LiveReload 功能，所以当你进行更改并保存时，应用会立即更新！

![展示 Ionic 中 LiveReload 功能的动画 GIF，显示代码更改后应用实时更新](/img/guides/first-app-v3/email-photogallery.gif 'Ionic LiveReload 功能演示')

在你喜欢的代码编辑器中打开 photo-gallery 应用文件夹，然后导航到 `/src/pages/about/about.html`。我们看到：

```html
<ion-header>
  <ion-toolbar>
    <ion-title>About</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
```

`ion-header` 代表顶部导航和工具栏，标题为 "About"。我们将应用代码放在 `ion-content` 中。在这里，我们将添加一个打开设备相机并显示相机拍摄图像的按钮。但首先，让我们从一个明显的改动开始：重命名 About 页面：

```html
<ion-title>Photo Gallery</ion-title>
```

接下来，打开 `src/pages/tabs/tabs.html`。将 tabTitle 改为 "Gallery"，tabIcon 改为 "images"：

```html
<ion-tabs>
  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>
  <ion-tab [root]="tab2Root" tabTitle="Gallery" tabIcon="images"></ion-tab>
  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>
</ion-tabs>
```

现在，将你的更改备份到 Appflow：

```shell
$ git add .
$ git commit -m "将 about 页面转换为照片库"
$ git push ionic master
```

这只是我们使用 Ionic 可以做的所有酷炫功能的开始。接下来，我们将把应用部署到 iOS 和 Android，然后继续构建照片库功能。