# 实时重载

在构建 Ionic 应用时，**实时重载**（Live Reload）是一项能显著提升开发效率的功能。启用后，当检测到应用代码发生变化时，实时重载会自动刷新浏览器或 [Web View](../core-concepts/webview.md)。这在硬件设备上进行开发时尤为实用。

## 术语说明

实时重载这个术语有多种含义。在使用 `ionic serve` 时，它仅指在代码变更时重新加载浏览器。实时重载也可与 Capacitor 和 Cordova 配合使用，在虚拟设备和硬件设备上提供相同的开发体验，从而无需重新部署原生二进制文件。

## 使用方法

由于实时重载要求 Web View 从计算机托管的 URL 加载应用，而不是直接从设备读取文件，因此在硬件设备上设置实时重载可能较为复杂。

与常规的设备部署一样，你需要通过数据线将设备连接到计算机。不同之处在于，Ionic CLI 会将 Web View 配置为从计算机上的开发服务器加载应用。

### Capacitor

Capacitor 目前尚未提供程序化的开发构建（相关进展请关注[此问题](https://github.com/ionic-team/capacitor/issues/324)），因此 Ionic CLI **不会**自动为 iOS 和 Android 转发端口。

要在 Capacitor 中使用实时重载，请确保你使用的是虚拟设备，或者硬件设备与计算机连接在同一 Wi-Fi 网络下。然后，你需要使用 `--external` 标志指定开发服务器使用外部地址。

```shell
$ ionic capacitor run ios -l --external
$ ionic capacitor run android -l --external
```

:::note
请注意，使用 `--external` 选项时，同一 Wi-Fi 网络中的其他设备将能够访问你的应用。
:::

### Cordova

#### Android

对于 Android 设备，Ionic CLI 会自动转发开发服务器端口。这意味着你可以使用 `localhost` 地址，并且在 Web View 中加载时，它将指向你的计算机，而不是设备本身。

以下一体化命令将在 `localhost` 上启动实时重载服务器，并使用 Cordova 将应用部署到 Android 设备：

```shell
ionic cordova run android -l
```

#### iOS

对于 iOS 设备，目前尚不支持端口转发。这意味着你需要将设备连接到与计算机相同的 Wi-Fi 网络，并为开发服务器使用外部地址。

:::note
你可以关注[此问题](https://github.com/ionic-team/native-run/issues/20)了解 Ionic 在 iOS 端口转发方面的进展。
:::

在某些情况下，Ionic CLI 可能无法确定用于配置 Web View 的地址，因此可能会提示你选择一个。请务必选择计算机在 Wi-Fi 网络中的地址。

以下一体化命令将在**所有地址**上启动实时重载服务器，并使用 Cordova 将应用部署到 iOS 设备：

```shell
ionic cordova run ios -l --external
```

:::note
请注意，使用 `--external` 选项时，同一 Wi-Fi 网络中的其他设备将能够访问你的应用。
:::

## 实用技巧

- 使用 Cordova 时，可通过 `--device`、`--emulator` 和 `--target` 选项来筛选目标设备。使用 `--list` 选项可列出所有可用目标。详细用法请参阅[命令文档](commands/cordova-run.md)。
- 你可以将开发服务器进程和部署进程分开，分别使用 `ionic serve` 和 `ionic cordova run` 或 `ionic capacitor run` 的 `--livereload-url` 选项。
- 对于 Android，可以配置 [adb](https://developer.android.com/studio/command-line/adb) 在 adb 服务器运行时始终转发端口（参见 `adb reverse`）。设置端口转发后，就不再需要外部地址了。你还可以通过 TCP 设置 adb 桥接，这样后续部署就不再需要 USB 数据线。