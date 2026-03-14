# 实时重载

在构建 Ionic 应用时，提升开发效率的一个选项是使用**实时重载**。启用后，当检测到应用中的变更时，实时重载会自动刷新浏览器或 [Web View](../core-concepts/webview.md)。这在硬件设备上进行开发时尤为有用。

## 术语说明

实时重载是一个容易混淆的术语。在 `ionic serve` 中，实时重载仅指在代码变更时重新加载浏览器。实时重载也可以与 Capacitor 和 Cordova 配合使用，在虚拟设备和硬件设备上提供相同的体验，从而避免了重新部署原生二进制文件的需求。

## 使用方法

由于实时重载要求 Web View 从您计算机托管的 URL 加载应用，而不是直接从设备读取文件，因此在硬件设备上设置实时重载可能会有些棘手。

与常规设备部署一样，您需要使用数据线将设备连接到计算机。不同之处在于，Ionic CLI 会配置 Web View 从您计算机上的开发服务器加载应用。

### Capacitor

要在 Capacitor 中使用实时重载，请确保您使用的是虚拟设备，或者硬件设备与计算机连接到同一个 Wi-Fi 网络。然后，您需要使用 `--external` 标志指定开发服务器使用外部地址。

```shell
$ ionic capacitor run ios -l --external
$ ionic capacitor run android -l --external
```

:::note
请注意，使用 `--external` 选项时，同一 Wi-Fi 网络上的其他用户将能够访问您的应用。
:::

### Cordova

#### Android

对于 Android 设备，Ionic CLI 会自动转发开发服务器的端口。这意味着您可以使用 `localhost` 地址，在 Web View 中加载时，它将指向您的计算机，而不是设备。

以下一键式命令将在 `localhost` 上启动实时重载服务器，并使用 Cordova 将应用部署到 Android 设备：

```shell
ionic cordova run android -l
```

#### iOS

对于 iOS 设备，目前尚不支持端口转发。这意味着您需要将设备与计算机连接到同一 Wi-Fi 网络，并为开发服务器使用外部地址。

:::note
您可以关注 [此议题](https://github.com/ionic-team/native-run/issues/20) 以了解 Ionic 在 iOS 端口转发方面的进展。
:::

在某些情况下，Ionic CLI 可能无法确定用于配置 Web View 的地址，因此您可能会被提示选择一个。请务必选择您计算机在 Wi-Fi 网络上的地址。

以下一键式命令将在**所有地址**上启动实时重载服务器，并使用 Cordova 将应用部署到 iOS 设备：

```shell
ionic cordova run ios -l --external
```

:::note
请注意，使用 `--external` 选项时，同一 Wi-Fi 网络上的其他用户将能够访问您的应用。
:::

## 实用技巧

- 在 Cordova 中，使用 `--device`、`--emulator` 和 `--target` 选项来缩小目标设备范围。使用 `--list` 选项列出所有目标设备。具体用法请参阅 [命令文档](commands/cordova-run.md)。
- 您可以通过 `ionic serve` 和 `ionic cordova run` 或 `ionic capacitor run` 的 `--livereload-url` 选项，将开发服务器进程和部署进程分开。
- 对于 Android，可以配置 [adb](https://developer.android.com/studio/command-line/adb) 使其在 adb 服务器运行时始终转发端口（参见 `adb reverse`）。设置端口转发后，就不再需要外部地址了。您还可以通过 TCP 设置 adb 桥接，这样后续部署就不再需要 USB 数据线了。