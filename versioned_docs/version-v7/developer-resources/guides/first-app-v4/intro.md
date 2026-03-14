# 你的首个 Ionic 应用：Angular 版

Ionic 最大的优势在于，只需一套代码，就能使用熟悉的 Web 工具和语言为所有平台构建应用。接下来，我们将一步步创建一个实用的照片库应用。看看完成前后的对比：

![Ionic 应用从空白的“标签页二”变身为包含图片的“照片库”的过程](/img/guides/first-app-v3/gallery-combined.png '照片库应用前后对比')

上手非常简单。请注意，本指南中涉及的所有代码都可以在 [GitHub 上找到](https://github.com/ionic-team/photo-gallery-tutorial-ionic4/)。

## 所需工具

立即下载/安装以下工具，以确保获得最佳的 Ionic 开发体验：

- [Git](https://git-scm.com/downloads) 用于版本控制。
- **SSH 客户端**，例如 [PuTTy](https://putty.software/)，用于安全登录 Appflow。
- **Node.js** 用于与 Ionic 生态系统交互。[在此下载 LTS 版本](https://nodejs.org/en/)。
- **代码编辑器** 用于……编写代码！我们推荐 [Visual Studio Code](https://code.visualstudio.com/)。
- **命令行终端（CLI）**：**Windows** 用户请注意，为了获得最佳的 Ionic 体验，我们建议使用内置的命令行（cmd）或以管理员模式运行的 Powershell CLI。**Mac/Linux** 用户则可以使用几乎任何终端。

## 安装 Ionic 和 Cordova

在命令行中运行以下命令：

```shell
npm install -g @ionic/cli cordova
```

:::note
`-g` 选项表示**全局安装**。全局安装包时，可能会出现 `EACCES` 权限错误。

建议配置 npm 使其无需提升权限即可全局操作。更多信息请参阅[解决权限错误](../../../developing/tips.md#resolving-permission-errors)。
:::

## 创建应用

接下来，使用我们的“标签页”应用模板创建一个 Ionic Angular 应用：

```shell
ionic start photo-gallery tabs
```

这个入门项目包含了三个预构建页面和 Ionic 开发的最佳实践。有了现成的常见构建模块，我们可以轻松添加更多功能！

接下来，切换到应用文件夹：

```shell
cd photo-gallery
```

搞定！现在进入有趣的部分——让我们看看应用的实际效果。

## 运行应用

接下来运行这个命令：

```shell
ionic serve
```

瞧！你的 Ionic 应用现在正在浏览器中运行。大部分应用功能都可以直接在浏览器中构建，这大大提高了开发速度。

## 照片库！！！

应用中有三个标签页。点击 Tab2 标签页。这是一块空白画布，正是添加相机功能的绝佳位置。让我们开始将这个页面改造成照片库。Ionic 支持 LiveReload，因此当你做出更改并保存时，应用会立即更新！

![展示 Ionic 的 LiveReload 功能的动画 GIF，显示应用更改时的实时更新效果](/img/guides/first-app-v3/email-photogallery.gif 'Ionic LiveReload 功能演示')

在你喜欢的代码编辑器中打开 photo-gallery 应用文件夹，然后导航到 `/src/app/tab2/tab2.page.html`。我们看到：

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab Two</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
```

`ion-header` 代表顶部的导航栏和工具栏，标题为“Tab 2”。我们将应用代码放在 `ion-content` 中。在这里，我们将添加一个按钮，用于打开设备相机并显示拍摄的图像。但首先，让我们从一个明显的改动开始：重命名 Tab Two 页面：

```html
<ion-title>Photo Gallery</ion-title>
```

接下来，打开 `src/app/tabs/tabs.page.html`。将标签改为“Gallery”，图标名称改为“images”：

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Gallery</ion-label>
</ion-tab-button>
```

这只是 Ionic 强大功能的开端。接下来，我们将把应用部署到你的 iOS 或 Android 设备上，然后继续构建照片库。