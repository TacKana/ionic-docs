# 你的第一个 Ionic 应用：Angular 版

Ionic 最棒的一点在于，使用一套代码库，你就能利用熟悉的 Web 工具和语言为任何平台构建应用。跟着我们一起创建一个实用的照片库应用吧。这是完成前后的对比效果：

![Ionic 应用从空白的“Tab Two”到带有图片的“照片库”的转变。](/img/guides/first-app-v3/gallery-combined.png 'Ionic 应用照片库前后对比')

上手非常简单。请注意，本指南中涉及的所有代码都可以[在 GitHub 上找到](https://github.com/ionic-team/photo-gallery-tutorial-ionic4/)。

## 所需工具

立即下载/安装以下工具，以确保获得最佳的 Ionic 开发体验：

- [Git](https://git-scm.com/downloads)，用于版本控制。
- **SSH 客户端**，例如 [PuTTy](https://putty.software/)，用于安全登录 Appflow。
- **Node.js**，用于与 Ionic 生态系统交互。[在此下载 LTS 版本](https://nodejs.org/en/)。
- **代码编辑器**，用于……编写代码！我们推荐 [Visual Studio Code](https://code.visualstudio.com/)。
- **命令行终端 (CLI)**：提醒 **Windows** 用户，为了获得最佳的 Ionic 体验，我们建议使用内置命令行 (cmd) 或以管理员模式运行的 Powershell CLI。对于 **Mac/Linux** 用户，几乎任何终端都能正常工作。

## 安装 Ionic 和 Cordova

在命令行中运行以下命令：

```shell
npm install -g @ionic/cli cordova
```

:::note
`-g` 选项表示**全局安装**。当包全局安装时，可能会出现 `EACCES` 权限错误。

建议配置 npm 使其无需提升权限即可全局操作。更多信息请参见[解决权限错误](../../../developing/tips.md#resolving-permission-errors)。
:::

## 创建应用

接下来，使用我们的“标签页”应用模板创建一个 Ionic Angular 应用：

```shell
ionic start photo-gallery tabs
```

这个入门项目包含三个预构建的页面和 Ionic 开发的最佳实践。有了现成的通用构建模块，我们可以轻松添加更多功能！

接下来，切换到应用文件夹：

```shell
cd photo-gallery
```

就是这样！现在开始有趣的部分——让我们看看应用的实际运行效果。

## 运行应用

接下来运行这个命令：

```shell
ionic serve
```

瞧！你的 Ionic 应用现在正在浏览器中运行。你可以在浏览器中构建应用的大部分功能，从而大大提高开发速度。

## 照片库！！！

应用有三个标签页。点击 Tab2 标签页。这是一个空白画布，也是添加相机功能的绝佳位置。让我们开始将这个页面改造成一个照片库。Ionic 具备 LiveReload 功能，当你修改代码并保存后，应用会立即更新！

![演示 Ionic LiveReload 功能的动画 GIF，展示代码修改后应用实时更新的效果。](/img/guides/first-app-v3/email-photogallery.gif 'Ionic LiveReload 功能演示')

在你喜欢的代码编辑器中打开 photo-gallery 应用文件夹，然后导航到 `/src/app/tab2/tab2.page.html`。我们看到：

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab Two</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding"></ion-content>
```

`ion-header` 代表顶部导航和工具栏，标题为“Tab 2”。我们将应用代码放入 `ion-content` 中。在这里，我们将添加一个按钮，用于打开设备相机并显示相机拍摄的图像。但首先，让我们从一个明显的地方开始：重命名 Tab Two 页面：

```html
<ion-title>Photo Gallery</ion-title>
```

接下来，打开 `src/app/tabs/tabs.page.html`。将标签更改为“Gallery”，图标名称改为“images”：

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Gallery</ion-label>
</ion-tab-button>
```

这只是我们使用 Ionic 可以做的酷炫功能的开始。接下来，我们将把应用部署到你的 iOS 或 Android 设备上，然后继续构建照片库。