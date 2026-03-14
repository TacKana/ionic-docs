# 你的首个 Ionic 应用 - Framework v3

Ionic 的一大优势在于，只需一套代码库，你就可以使用熟悉的 Web 工具和语言为任何平台构建应用。跟随我们一起创建一个实用的照片画廊应用。这是完成前后的对比：

![Ionic 应用从空白的"标签页二"转变为带有图像的"照片画廊"](/img/guides/first-app-v3/gallery-combined.png 'Ionic 应用照片画廊前后对比')

上手非常简单。本指南的参考代码可以在 [GitHub 上找到](https://github.com/ionic-team/photo-gallery-tutorial-ionic3/)。

## 安装 Node.js

如果尚未安装 Node.js，请[下载 LTS 版本](https://nodejs.org/en/)。

## 安装 Ionic

在命令行中运行以下命令（在 Mac 上可能需要添加 "sudo" 前缀）：

```shell
npm install -g @ionic/cli
```

## 创建应用

接下来，使用我们的"标签页"应用模板创建一个 Ionic 应用：

```shell
ionic start photo-gallery tabs
```

这个入门项目包含三个预构建的页面和 Ionic 开发的最佳实践。由于常用的构建模块已经就位，我们可以轻松添加更多功能！

<strong>"是否要将新应用与 Cordova 集成，以面向原生 iOS 和 Android 平台？"</strong>

输入 "y" 并按回车键。项目设置可能需要一些时间。

<strong>"安装免费的 Appflow SDK 并连接你的应用？"</strong>

输入 "y" 并按回车键。[Appflow](https://ionicframework.com/pro) 是基于旗舰版 Ionic Framework 构建的一套强大服务和功能集。这包括即时更新应用（跳过应用商店审核流程！）、云端打包应用和错误监控。

<strong>登录你的 Ionic 账户</strong>

现在登录，以便在本教程后续轻松访问实时部署等强大功能。

<strong>你想要做什么？</strong>

选择"在 Appflow 上创建新应用。"

<strong>你希望使用哪个 Git 托管服务？</strong>

选择"Appflow。"

<strong>"你希望如何连接到 Appflow？"</strong>

- 如果之前未使用过 SSH，请选择"为 Appflow 自动设置新的 SSH 密钥对"。
- 如果之前使用过 SSH，请选择"使用现有的 SSH 密钥对"。

接下来，切换到应用文件夹，然后将代码推送到 Appflow：

```shell
$ cd photo-gallery
$ git push ionic master
```

就是这样！现在开始有趣的部分——让我们看看它的实际效果。

## 运行应用

接下来运行此命令：

```shell
ionic serve
```

瞧！你的 Ionic 应用现在正在 Web 浏览器中运行。大部分应用功能都可以直接在浏览器中构建，大大提高了开发速度。

## 照片画廊！！！

有三个标签页："首页"、"关于"和"联系"。点击关于标签页。这是一个空白画布，也就是添加相机功能的绝佳位置。让我们开始将关于页面转变为照片画廊。Ionic 支持实时重载，当你进行更改并保存时，应用会立即更新！

![动画 GIF 演示了在 Ionic 应用的关于页面添加照片画廊功能](/img/guides/first-app-v3/email-photogallery.gif 'Ionic 照片画廊功能')

在你喜欢的代码编辑器中打开 photo-gallery 应用文件夹，然后导航到 `/src/pages/about/about.html`。我们看到：

```html
<ion-header>
  <ion-toolbar>
    <ion-title>关于</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
```

`ion-header` 表示顶部的导航栏和工具栏，标题为"关于"。我们将应用代码放在 `ion-content` 中。在这里，我们将添加一个按钮来打开设备相机并显示相机拍摄的图像。但首先，让我们从一个明显的修改开始：重命名关于页面：

```html
<ion-title>照片画廊</ion-title>
```

接下来，打开 `src/pages/tabs/tabs.html`。将 tabTitle 改为"画廊"，tabIcon 改为"images"：

```html
<ion-tabs>
  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>
  <ion-tab [root]="tab2Root" tabTitle="画廊" tabIcon="images"></ion-tab>
  <ion-tab [root]="tab3Root" tabTitle="联系" tabIcon="contacts"></ion-tab>
</ion-tabs>
```

现在，将你的更改备份到 Appflow：

```shell
$ git add .
$ git commit -m “将关于页面转换为照片画廊”
$ git push ionic master
```

这只是我们使用 Ionic 可以实现的众多酷炫功能的开始。接下来，我们将把应用部署到 iOS 和 Android，然后继续构建照片画廊。