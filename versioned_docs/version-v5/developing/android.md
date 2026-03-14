---
sidebar_label: Android 开发
---

# Android 开发

本指南将介绍如何使用 [Capacitor](../reference/glossary.md#capacitor) 或 [Cordova](../reference/glossary.md#cordova) 在 Android 模拟器和设备上运行和调试 Ionic 应用。Android 应用可以在 Windows、macOS 和 Linux 系统上进行开发。

## Android Studio

[Android Studio](https://developer.android.com/studio/) 是开发原生 Android 应用的集成开发环境（IDE）。它包含了 [Android SDK](../reference/glossary.md#android-sdk)，需要在命令行中对其进行配置才能使用。

Android Studio 还用于[创建 Android 虚拟设备](android.md#creating-an-android-virtual-device)，这是 Android 模拟器所必需的。Ionic 应用也可以[直接部署到实体设备上](android.md#set-up-an-android-device)。

:::note
我们不建议使用 Android Studio 来*开发* Ionic 应用。它应该仅用于构建和运行 Android 原生平台的应用，以及管理 Android SDK 和虚拟设备。
:::

### 安装 Android Studio

从 <a href="https://developer.android.com/studio/" target="_blank">Android 官网</a>下载 Android Studio。更详细的安装说明可以在<a href="https://developer.android.com/studio/install" target="_blank">用户指南</a>中找到。

### 安装 Android SDK

安装完成后，打开 Android Studio。IDE 应该会检测到需要安装 Android SDK。在 **SDK 组件设置** 界面中，完成 SDK 的安装。请记下 **Android SDK 位置**。

![Android Studio SDK 组件设置界面，显示已选择安装 Android SDK 和 API 28: Android 9.0 (Pie)。](/img/installation/android-studio-sdk-setup.png 'Android Studio SDK 组件设置')

默认情况下，会安装最新的稳定版 SDK 平台，其中包含针对该 Android 版本所需的一系列软件包。

要安装系统映像和其他次要的 SDK 平台软件包，您可能需要确保在 SDK 管理器的底部勾选了 **显示软件包详细信息**。

![Android Studio SDK 管理器显示已安装和可用的 SDK 软件包。](/img/installation/android-studio-sdk.png 'Android Studio SDK 管理器')

作为参考，您可以在 Android Studio 欢迎界面的 **Configure** &raquo; **SDK Manager** 菜单中，或 Android 项目内的 **Tools** &raquo; **SDK Manager** 菜单中，通过 Android Studio 管理 Android SDK。

### 配置命令行工具

Android SDK 附带了一些<a href="https://developer.android.com/studio/command-line/" target="_blank">有用的命令行工具</a>。在使用它们之前，需要设置一些环境变量。以下说明适用于 macOS 和 Linux。对于 Windows，请查阅在终端会话中设置和持久化环境变量的文档。

在 `~/.bashrc`、`~/.bash_profile` 或类似的 shell 启动脚本中，进行以下修改：

1.  设置 `ANDROID_SDK_ROOT` 环境变量。此路径应为上一节中使用的 **Android SDK 位置**。要在 Android Studio 中查找 SDK 位置，请点击 **File** > **Project Structure**。在左侧窗格中选择 **SDK Location**。路径显示在 **Android SDK location** 下方。

    ```shell
    $ export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
    ```

1.  将 Android SDK 命令行工具目录添加到 `PATH` 中。每个目录对应一类<a href="https://developer.android.com/studio/command-line/" target="_blank">命令行工具</a>。

    ```shell-session
    $ # avdmanager, sdkmanager
    $ export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
    $ # adb, logcat
    $ export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
    $ # emulator
    $ export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
    ```

:::note

对于 `apksigner` 和 `zipalign`，还必须将 `$ANDROID_SDK_ROOT/build-tools<version>` 添加到 `PATH` 中。

:::

### 创建 Android 虚拟设备

Android 虚拟设备（AVD）是 Android 模拟器用来运行 Android 操作系统的蓝图。以下文档是快速设置 Android 模拟器的方法。更详细的说明和信息，请参阅<a href="https://developer.android.com/studio/run/managing-avds" target="_blank"> Android 官方文档</a>。

AVD 通过 AVD 管理器进行管理。在 Android Studio 欢迎界面中，点击 **Configure** &raquo; **AVD Manager**。也可以在 Android 项目内通过 **Tools** &raquo; **AVD Manager** 菜单打开 AVD 管理器。

![Android Studio AVD 管理器，显示创建新 Android 虚拟设备的选项。](/img/installation/android-studio-avd-setup.png 'Android Studio AVD 管理器')

点击 **Create Virtual Device** 并选择一个合适的设备定义。如果不确定，请选择 **Pixel 2**。然后，选择一个合适的系统映像。如果不确定，请选择带有 Google Play 服务的 **Pie** (API 28)。有关 Android 版本的信息，请参阅<a href="https://en.wikipedia.org/wiki/Android_version_history" target="_blank"> Android 版本历史</a>。

创建 AVD 后，将其启动到 Android 模拟器中。在开发 Android 平台的 Ionic 应用时，保持模拟器运行是确保其可被检测到的最佳方式。

<img
  style={{ maxWidth: '25rem', margin: '1rem auto' }}
  src={require('@site/static/img/installation/android-emulator-booting.png').default}
  alt="Android 模拟器正在启动"
/>

### 设置 Android 设备

也可以使用真实的 Android 硬件设备进行 Ionic 应用开发。但首先，必须将设备设置为开发模式。以下文档是快速设置 Android 设备用于开发的方法。更详细的说明和信息，请参阅<a href="https://developer.android.com/studio/run/device" target="_blank"> Android 官方文档</a>。

1.  在设备上启用 USB 调试功能。打开 **设置**，导航到 **开发者选项**，并启用 **USB 调试**。可能首先需要启用 **开发者选项** 菜单。操作方法请参阅<a href="https://developer.android.com/studio/debug/dev-options" target="_blank"> Android 官方文档</a>。
1.  确保设备有权限连接到计算机。对于 macOS，无需额外设置。对于 Windows，需要<a href="https://developer.android.com/studio/run/oem-usb" target="_blank">安装 OEM USB 驱动程序</a>。

通过 USB 数据线将设备连接到计算机，并使用以下命令验证连接是否正常：

```shell
adb devices
```

设备应该出现在列表中。如需故障排除和详细信息，请参阅完整的 <a href="https://developer.android.com/studio/command-line/adb" target="_blank">`adb` 文档</a>。

## Cordova 设置

若要让 Cordova 支持程序化构建，需要进行额外的设置。对于 Capacitor，则不需要此部分内容。

### Java

原生 Android 应用使用 <a href="https://java.com/en/" target="_blank">Java</a> 编程语言编译。如果您使用的是 **`cordova-android`** `10.0.0` 或更高版本，请下载 <a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" target="_blank">Java 开发工具包 (JDK) 11</a>。

:::note
如果您使用的是 **`cordova-android`** `10.0.0` 以下的任何版本，请安装 <a href="https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html" target="_blank">Java 开发工具包 (JDK) 8</a>。
:::

### Gradle

<!-- prettier-ignore -->
<a href="https://gradle.org/" target="_blank">Gradle</a> 是 Android 应用中使用的构建工具，必须单独安装。详情请参阅<a href="https://gradle.org/install/" target="_blank">安装页面</a>。

## 项目设置

在将应用部署到 Android 模拟器和设备之前，必须配置原生项目。

1.  **如果原生项目尚不存在，则生成它。**
    对于 Capacitor，运行以下命令：

    ```shell
    $ ionic capacitor add android
    ```

    对于 Cordova，运行以下命令：

    ```shell
    $ ionic cordova prepare android
    ```

2.  **设置 [包标识 (Package ID)](../reference/glossary.md#package-id)。**
    对于 Capacitor，打开 `capacitor.config.json` 文件并修改 `appId` 属性。
    对于 Cordova，打开 `config.xml` 文件并修改根元素 `<widget>` 的 `id` 属性。更多信息请参阅 [Cordova 文档](https://cordova.apache.org/docs/en/latest/config_ref/#widget)。

## 使用 Capacitor 运行

Capacitor 使用 Android Studio 来构建应用并将其运行在模拟器或设备上。

1.  **开发 Ionic 应用并将其同步到原生项目。**
    每当有重要更改时，必须先将 Ionic 应用构建为 Web 资源，才能在 Android 模拟器或设备上看到更改。然后，必须将这些 Web 资源复制到原生项目中。幸运的是，一个 Ionic CLI 命令就能轻松完成这个过程。

    ```shell
    $ ionic capacitor copy android
    ```

2.  **在 Android Studio 中，点击运行按钮，然后选择目标模拟器或设备。**

![Android Studio 中用于构建和运行 Android 应用的运行按钮区域。](/img/running/android-studio-run-button-area.png 'Android Studio 运行按钮区域')

### 实时重载

要启动实时重载服务器，请运行以下命令。

```shell
ionic capacitor run android -l --host=你的IP地址
```

在设备上运行时，请确保设备和您的开发机器连接到同一个网络。

## 使用 Cordova 运行

Ionic CLI 可以通过一个命令将 Ionic 应用构建、复制并部署到 Android 模拟器和设备上。它还可以启动一个开发服务器（类似于 `ionic serve` 中使用的服务器），以提供[实时重载 (live-reload)](../reference/glossary.md#livereload) 功能。

运行以下命令来启动一个长期运行的 CLI 进程，该进程会启动实时重载服务器：

```shell
ionic cordova run android -l
```

现在，当修改应用的源文件时，Web 资源会被重新构建，并且更改会反映在模拟器或设备上，无需重新部署。

## 调试 Android 应用

一旦应用在 Android 设备或模拟器上运行，就可以使用 Chrome DevTools 进行调试。

### 使用 Chrome DevTools

Chrome 为 Android 模拟器和设备提供了 Web 开发者工具支持。在模拟器运行时，或者设备连接到计算机后，在 Chrome 中访问 `chrome://inspect`，然后**检查**需要调试的应用。

:::note
请确保您的应用正在设备或模拟器上运行，否则它不会显示在列表中。
:::

![Chrome DevTools 显示可用于检查的设备列表。](/img/running/android-chrome-devtools.png '用于 Android 的 Chrome DevTools')

### 查看原生日志

如果使用 Android Studio 运行，可以在 **Logcat** 中找到原生日志。

:::note
如果 **Logcat** 窗口被隐藏，您可以在 **View** &raquo; **Tool Windows** &raquo; **Logcat** 中启用它。
:::

![Android Studio 中的 Logcat 窗口，显示来自 Android 设备的日志。](/img/running/android-studio-logcat.png 'Android Studio Logcat')

您也可以使用 [ADB](https://developer.android.com/studio/command-line/adb) 访问 **Logcat**。

```shell
adb logcat
```