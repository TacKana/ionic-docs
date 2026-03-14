# 你的第一个 Ionic 应用 - 框架 v3

Ionic 的强大之处在于，只需一套代码库，你就能使用熟悉的网络工具和语言为任何平台构建应用。跟着我们一起创建一个实用的照片库应用吧。这是完成前后的对比：

![一个 Ionic 应用从空白的'标签页二'变成了带有图片的'照片库'。](/img/guides/first-app-v3/gallery-combined.png 'Ionic 应用照片库前后对比')

上手非常简单。本指南的参考代码可以在 [GitHub 上找到](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/)。

## 安装 Node.js

如果你还没有安装 Node.js，请 [下载 LTS 版本](https://nodejs.org/en/)。

## 安装 Ionic

在命令行中运行以下命令（在 Mac 上可能需要添加 "sudo" 前缀）：

```shell
npm install -g @ionic/cli
```

## 创建应用

接下来，使用我们的“标签页”应用模板创建一个 Ionic 应用：

```shell
ionic start photo-gallery tabs
```

这个入门项目包含了三个预构建页面和 Ionic 开发的最佳实践。有了这些现成的通用构建模块，我们可以轻松添加更多功能！

<strong>“是否要将你的新应用与 Cordova 集成以支持原生 iOS 和 Android？”</strong>

输入 "y" 并按回车键。项目设置可能需要一些时间。

<strong>“是否安装免费的 Appflow SDK 并连接你的应用？”</strong>

输入 "y" 并按回车键。[Appflow](https://ionicframework.com/pro) 是一套基于旗舰级 Ionic 框架构建的强大服务和功能集。这包括即时更新应用（跳过应用商店审核流程！）、云端打包应用和错误监控。

<strong>登录你的 Ionic 账户</strong>

现在登录，以便在本教程后面轻松访问像实时部署这样的强大功能。

<strong>你想做什么？</strong>

选择“在 Appflow 上创建新应用”。

<strong>你想使用哪个 git 托管服务？</strong>

选择“Appflow”。

<strong>“你希望如何连接到 Appflow？”</strong>

- 如果你以前没有使用过 SSH，选择“为 Appflow 自动设置新的 SSH 密钥对”。
- 如果你以前使用过 SSH，选择“使用现有的 SSH 密钥对”。

接下来，进入应用文件夹，然后将你的代码推送到 Appflow：

```shell
$ cd photo-gallery
$ git push ionic master
```

搞定！现在到了有趣的部分——让我们看看它的实际效果。

## 运行应用

接下来运行这个命令：

```shell
ionic serve
```

瞧！你的 Ionic 应用现在已经在网络浏览器中运行了。你的大部分应用都可以直接在浏览器中构建，大大提高了开发速度。

## 照片库！！！

有三个标签页：“首页”、“关于”和“联系人”。点击关于标签页。这是一块空白的画布，正是添加相机功能的绝佳位置。让我们开始将关于页面变成照片库。Ionic 具有实时重载功能，所以当你进行更改并保存时，应用会立即更新！

![展示 Ionic 中实时重载功能的动画 GIF，显示代码更改后应用的实时更新。](/img/guides/first-app-v3/email-photogallery.gif 'Ionic 实时重载功能演示')

在你喜欢的代码编辑器中打开 photo-gallery 应用文件夹，然后导航到 `/src/pages/about/about.html`。我们看到：

```html
<ion-header>
  <ion-toolbar>
    <ion-title>About</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
```

`ion-header` 代表顶部导航和工具栏，标题是“关于”。我们将应用代码放在 `ion-content` 中。在这种情况下，我们将在这里添加一个按钮，用于打开设备摄像头并显示相机捕获的图像。但首先，让我们从一个明显的步骤开始：重命名关于页面：

```html
<ion-title>Photo Gallery</ion-title>
```

接下来，打开 `src/pages/tabs/tabs.html`。将 tabTitle 改为“Gallery”，tabIcon 改为“images”：

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
$ git commit -m “converting about page to photo gallery”
$ git push ionic master
```

这只是我们使用 Ionic 可以做的所有酷炫功能的开始。接下来，我们将把应用部署到 iOS 和 Android，然后继续构建照片库。