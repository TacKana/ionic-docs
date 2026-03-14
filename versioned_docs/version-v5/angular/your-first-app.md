---
sidebar_label: 构建你的第一个应用
---

# 你的第一个 Ionic 应用：Angular 版

Ionic 的强大之处在于，只需一套代码，你就可以使用 HTML、CSS 和 JavaScript 为任何平台构建应用。跟随我们的步骤，通过创建一个真实的应用来学习 Ionic 应用开发的基础知识。

这是最终应用在三个平台上的运行效果：

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0ASQ13Y1Rk4"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

:::note
寻找涵盖 Ionic 4 和 Cordova 的旧版指南？[请点击此处](../developer-resources/guides/first-app-v4/intro.md)
:::

## 我们将构建什么

我们将创建一个照片墙应用，它能够使用设备摄像头拍照，在网格中显示照片，并永久保存在设备上。

主要功能包括：

- 一套基于 Angular 的代码，使用 Ionic 框架的[UI 组件](https://ionicframework.com/docs/components)在 Web、iOS 和 Android 上运行。
- 使用 Ionic 官方的原生应用运行时 [Capacitor](https://capacitorjs.com) 部署为原生 iOS 和 Android 移动应用。
- 照片墙功能由 Capacitor 的 [Camera](https://capacitorjs.com/docs/apis/camera)、[Filesystem](https://capacitorjs.com/docs/apis/filesystem) 和 [Preferences](https://capacitorjs.com/docs/apis/preferences) API 提供支持。

本指南中引用的完整应用代码可在 [GitHub](https://github.com/ionic-team/photo-gallery-capacitor-ng) 上找到。

## 下载所需工具

立即下载并安装这些工具，以确保获得最佳的 Ionic 开发体验：

- **Node.js**：用于与 Ionic 生态系统交互。[在此下载 LTS 版本](https://nodejs.org/en/)。
- **代码编辑器**：用于编写代码！我们推荐 [Visual Studio Code](https://code.visualstudio.com/)。
- **命令行界面/终端 (CLI)**：
  - **Windows** 用户：为了获得最佳 Ionic 体验，我们建议使用内置命令行 (cmd) 或 Powershell CLI，并以管理员模式运行。
  - **Mac/Linux** 用户：几乎任何终端都可以。

## 安装 Ionic 工具

在命令行终端中运行以下命令，安装 Ionic CLI (`ionic`)、用于在设备和模拟器上运行原生二进制文件的 `native-run`，以及用于生成原生应用图标和启动屏的 `cordova-res`：

:::note
要在 Visual Studio Code 中打开终端，请转到 Terminal -> New Terminal。
:::

```shell
npm install -g @ionic/cli native-run cordova-res
```

:::note
`-g` 选项表示*全局安装*。当包被全局安装时，可能会出现 `EACCES` 权限错误。

考虑设置 npm 在没有提升权限的情况下全局操作。更多信息请参阅[解决权限错误](../developing/tips.md#resolving-permission-errors)。
:::

## 创建应用

接下来，创建一个 Ionic Angular 应用，使用“Tabs”起始模板，并添加 Capacitor 以实现原生功能：

```shell
ionic start photo-gallery tabs --type=angular --capacitor
```

这个起始项目包含了三个预构建的页面和 Ionic 开发的最佳实践。有了现成的通用构建模块，我们可以轻松添加更多功能！

接下来，进入应用文件夹：

```shell
cd photo-gallery
```

接下来我们需要安装必要的 Capacitor 插件，以使应用的原生功能正常工作：

```shell
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

### PWA 元素

一些 Capacitor 插件，包括 Camera API，通过 Ionic 的 [PWA Elements 库](https://github.com/ionic-team/ionic-pwa-elements)提供基于 Web 的功能和 UI。

它是一个独立的依赖项，所以接下来安装它：

```shell
npm install @ionic/pwa-elements
```

接下来，通过编辑 `src/main.ts` 导入 `@ionic/pwa-elements`。

```tsx
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// 在平台引导后调用元素加载器
defineCustomElements(window);
```

就这样！现在进入有趣的部分——让我们看看应用的实际运行效果。

## 运行应用

接下来运行这个命令：

```shell
ionic serve
```

瞧！你的 Ionic 应用现在正在 Web 浏览器中运行。你的大部分应用都可以在浏览器中直接构建和测试，这大大提高了开发和测试速度。

## 照片墙！！！

有三个标签页。点击 Tab2 标签页。它是一个空白画布，是变成照片墙的绝佳位置。Ionic CLI 具备实时重载功能，所以当你做出更改并保存时，应用会立即更新！

![展示 Ionic 应用中实时重载功能的动态 GIF，代码更改会立即更新浏览器中的应用](/img/guides/first-app-cap-ng/email-photogallery.gif 'Ionic 应用中的实时重载功能')

在你选择的代码编辑器中打开 photo-gallery 应用文件夹，然后导航到 `/src/app/tab2/tab2.page.html`。我们看到：

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab 2</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Tab 2</ion-title>
    </ion-toolbar>
  </ion-header>
</ion-content>
```

`ion-header` 代表顶部导航和工具栏，标题为“Tab 2”（由于支持 iOS 的[可折叠大标题](https://ionicframework.com/docs/api/title#collapsible-large-titles)，所以有两个）。将两个 `ion-title` 元素重命名为：

```html
<ion-title>照片墙</ion-title>
```

我们将应用的视觉元素放在 `<ion-content>` 中。在这里，我们将添加一个打开设备摄像头并显示摄像头捕获图像的按钮。首先在页面底部添加一个[浮动操作按钮](https://ionicframework.com/docs/api/fab) (FAB)，并将摄像头图像设置为图标。

```html
<ion-content>
  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button>
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

接下来，打开 `src/app/tabs/tabs.page.html`。将标签改为“照片”，图标名称改为“images”：

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>照片</ion-label>
</ion-tab-button>
```

保存所有更改，即可看到它们在浏览器中自动应用。这只是我们使用 Ionic 可以实现的众多炫酷功能的开始。接下来，我们将在 Web 上实现拍照功能，然后为 iOS 和 Android 构建。