---
sidebar_label: Android 开发
---

# Android 开发

本指南涵盖如何使用 [Capacitor](../reference/glossary.md#capacitor) 或 [Cordova](../reference/glossary.md#cordova) 在 Android 模拟器和设备上运行和调试 Ionic 应用。Android 应用可以在 Windows、macOS 和 Linux 上开发。

## Android Studio

[Android Studio](https://developer.android.com/studio/) 是用于创建原生 Android 应用的 IDE。它包含 [Android SDK](../reference/glossary.md#android-sdk)，需要配置以便在命令行中使用。

Android Studio 也用于[创建 Android 虚拟设备](android.md#创建-android-虚拟设备)，这是 Android 模拟器所必需的。Ionic 应用也可以[部署到设备](android.md#设置-android-设备)。

:::note
我们不建议使用 Android Studio 来_开发_ Ionic 应用。相反，它只应用于为原生 Android 平台构建和运行应用，以及管理 Android SDK 和虚拟设备。
:::

### 安装 Android Studio

从 <a href="https://developer.android.com/studio/" target="_blank">Android 网站</a> 下载 Android Studio。更详细的安装说明可以在 <a href="https://developer.android.com/studio/install" target="_blank">用户指南</a> 中找到。

### 安装 Android SDK

安装完成后，打开 Android Studio。IDE 应该会检测到需要安装 Android SDK。在 **SDK Components Setup** 屏幕中，完成 SDK 的安装。记下 **Android SDK Location**。

![Android Studio SDK Components Setup 屏幕显示已选择安装 Android SDK 和 API 28：Android 9.0 (Pie)。](/img/installation/android-studio-sdk-setup.png 'Android Studio SDK Components Setup')

默认情况下，会安装最新的稳定 SDK Platform，其中包含针对该 Android 版本所需的一系列包。

要安装系统镜像和其他次要的 SDK 平台包，您可能需要确保在 SDK Manager 底部勾选了 **Show Package Details**。

![Android Studio SDK Manager 显示已安装和可用的 SDK 包。](/img/installation/android-studio-sdk.png 'Android Studio SDK Manager')

作为参考，以后可以在 Android Studio 的 **Configure** &raquo; **SDK Manager** 菜单（Android Studio 欢迎屏幕）或 **Tools** &raquo; **SDK Manager**（Android 项目内）中管理 Android SDK。

### 配置命令行工具

Android SDK 附带了一些<a href="https://developer.android.com/studio/command-line/" target="_blank">有用的命令行工具</a>。在使用它们之前，需要设置一些环境变量。以下说明适用于 macOS 和 Linux。对于 Windows，请查看在终端会话中设置和持久化环境变量的文档。

在 `~/.bashrc`、`~/.bash_profile` 或类似的 shell 启动脚本中，进行以下修改：

1. 设置 `ANDROID_SDK_ROOT` 环境变量。此路径应为上一节中使用的 **Android SDK Location**。要在 Android Studio 中查找 SDK Location，请点击 **File** > **Project Structure**。在左侧窗格中选择 **SDK Location**。路径会显示在 **Android SDK location** 下。

   ```shell
   $ export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
   ```

1. 将 Android SDK 命令行目录添加到 `PATH`。每个目录对应一类<a href="https://developer.android.com/studio/command-line/" target="_blank">命令行工具</a>。

   ```shell-session
   $ # avdmanager, sdkmanager
   $ export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
   $ # adb, logcat
   $ export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
   $ # emulator
   $ export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
   ```

:::note

对于 `apksigner` 和 `zipalign`，还需要将 `$ANDROID_SDK_ROOT/build-tools<version>` 添加到 `PATH`。

:::

### 创建 Android 虚拟设备

Android 虚拟设备 (AVD) 是 Android 模拟器用于运行 Android OS 的蓝图。以下文档是快速设置 Android 模拟器的方法。有关更详细的说明和信息，请参见 <a href="https://developer.android.com/studio/run/managing-avds" target="_blank">Android 文档</a>。

AVD 通过 AVD Manager 管理。在 Android Studio 欢迎屏幕中，点击 **Configure** &raquo; **AVD Manager**。也可以在 Android 项目中通过 **Tools** &raquo; **AVD Manager** 菜单打开 AVD Manager。

![Android Studio AVD Manager 提供创建新 Android 虚拟设备的选项。](/img/installation/android-studio-avd-setup.png 'Android Studio AVD Manager')

点击 **Create Virtual Device** 并选择合适的设备定义。如果不确定，请选择 **Pixel 2**。然后，选择合适的系统镜像。如果不确定，请选择带有 Google Play 服务的 **Pie** (API 28)。有关 Android 版本的信息，请参见 <a href="https://en.wikipedia.org/wiki/Android_version_history" target="_blank">Android 版本历史</a>。

AVD 创建完成后，将其启动到 Android 模拟器中。保持模拟器运行是在为 Android 开发 Ionic 应用时确保检测到的最佳方式。

<img
  style={{ maxWidth: '25rem', margin: '1rem auto' }}
  src={require('@site/static/img/installation/android-emulator-booting.png').default}
  alt="Android 模拟器启动中"
/>

### 设置 Android 设备

实际的 Android 硬件也可以用于 Ionic 应用开发。但首先，需要将设备设置为开发模式。以下文档是快速设置 Android 设备以进行开发的方法。有关更详细的说明和信息，请参见 <a href="https://developer.android.com/studio/run/device" target="_blank">Android 文档</a>。

1. 在设备上启用 USB 调试。打开 **Settings**，导航到 **Developer options**，并启用 **USB debugging**。可能需要先启用 **Developer options** 菜单。请参见 <a href="https://developer.android.com/studio/debug/dev-options" target="_blank">Android 文档</a> 获取说明。
1. 确保设备有权连接到计算机。对于 macOS，无需额外设置。对于 Windows，请<a href="https://developer.android.com/studio/run/oem-usb" target="_blank">安装 OEM USB 驱动程序</a>。

通过使用 USB 线将设备连接到计算机并使用以下命令验证连接是否正常：

```shell
adb devices
```

设备应该会被列出。有关故障排除和详细信息，请参见完整的 <a href="https://developer.android.com/studio/command-line/adb" target="_blank">`adb` 文档</a>。

## Cordova 设置

Cordova 需要额外设置以支持程序化构建。对于 Capacitor，本节不是必需的。

### Java

原生 Android 应用使用 <a href="https://java.com/en/" target="_blank">Java</a> 编程语言编译。如果您使用的是 **`cordova-android`** `10.0.0` 或更高版本，请下载 <a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" target="_blank">Java Development Kit (JDK) 11</a>。

:::note
如果您使用的是低于 `10.0.0` 的任何版本的 **`cordova-android`**，请安装 <a href="https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html" target="_blank">Java Development Kit (JDK) 8</a>。
:::

### Gradle

<!-- prettier-ignore -->
<a href="https://gradle.org/" target="_blank">Gradle</a> 是 Android 应用中使用的构建工具，必须单独安装。详情请参见 <a href="https://gradle.org/install/" target="_blank">安装页面</a>。

## 项目设置

在将应用部署到 Android 模拟器和设备之前，必须先配置原生项目。

1. **生成原生项目（如果尚未存在）。**

   对于 Capacitor，运行以下命令：

   ```shell
   $ ionic capacitor add android
   ```

   对于 Cordova，运行以下命令：

   ```shell
   $ ionic cordova prepare android
   ```

2. **设置[包标识符](../reference/glossary.md#package-id)。**

   对于 Capacitor，打开 `capacitor.config.json` 文件并修改 `appId` 属性。

   对于 Cordova，打开 `config.xml` 文件并修改根元素 `<widget>` 的 `id` 属性。更多信息请参见 [Cordova 文档](https://cordova.apache.org/docs/en/latest/config_ref/#widget)。

## 使用 Capacitor 运行

Capacitor 使用 Android Studio 来构建和运行应用到模拟器和设备。

1. **开发 Ionic 应用并将其同步到原生项目。**

   每次有意义的更改后，Ionic 应用必须构建为 Web 资源，然后更改才能出现在 Android 模拟器和设备上。然后，Web 资源必须复制到原生项目中。幸运的是，通过一个简单的 Ionic CLI 命令，这个过程就变得容易了。

   ```shell
   $ ionic capacitor copy android
   ```

2. **在 Android Studio 中，点击 Run 按钮，然后选择目标模拟器或设备。**

![Android Studio 中用于构建和运行 Android 应用的 Run 按钮区域。](/img/running/android-studio-run-button-area.png 'Android Studio Run 按钮区域')

### 实时重载

要启动实时重载服务器，请运行以下命令。

```shell
ionic capacitor run android -l --host=YOUR_IP_ADDRESS
```

在设备上运行时，请确保设备和开发机器连接到同一网络。

## 使用 Cordova 运行

Ionic CLI 可以通过单个命令构建、复制和部署 Ionic 应用到 Android 模拟器和设备。它还可以启动一个开发服务器（类似于 `ionic serve` 中使用的），提供[实时重载](../reference/glossary.md#livereload)功能。

运行以下命令以启动一个长期运行的 CLI 进程，该进程会启动实时重载服务器：

```shell
ionic cordova run android -l
```

现在，当对应用的源文件进行更改时，Web 资源会重新构建，更改会立即反映在模拟器或设备上，无需重新部署。

## 调试 Android 应用

应用在 Android 设备或模拟器上运行后，可以使用 Chrome DevTools 进行调试。

### 使用 Chrome DevTools

Chrome 支持 Android 模拟器和设备的 Web 开发者工具。在模拟器运行或设备连接到计算机时，在 Chrome 中打开 `chrome://inspect` 并 **Inspect** 需要调试的应用。

:::note
确保您的应用正在设备或模拟器上运行，否则它不会显示在列表中。
:::

![Chrome DevTools 显示可供检查的设备列表。](/img/running/android-chrome-devtools.png 'Android 版的 Chrome DevTools')

### 查看原生日志

如果使用 Android Studio 运行，原生日志可以在 **Logcat** 中找到。

:::note
如果 **Logcat** 窗口被隐藏，可以在 **View** &raquo; **Tool Windows** &raquo; **Logcat** 中启用它。
:::

![Android Studio 中的 Logcat 窗口显示来自 Android 设备的日志。](/img/running/android-studio-logcat.png 'Android Studio Logcat')

您也可以使用 [ADB](https://developer.android.com/studio/command-line/adb) 访问 **Logcat**。

```shell
adb logcat
```
