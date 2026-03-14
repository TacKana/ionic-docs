# 实时重载

使用实时重载功能可以在开发环境中修改应用代码时，自动刷新浏览器或 [Web 视图](../core-concepts/webview.md)。这对于使用硬件设备进行开发尤其有用。

## 术语说明

实时重载是一个合并术语。在使用 `ionic serve` 时，实时重载仅指代码更改时重新加载浏览器。它也可与 Capacitor 和 Cordova 配合使用，在虚拟设备和硬件设备上提供相同的体验，从而无需重新部署原生二进制文件。

## 使用方法

由于实时重载要求 Web 视图从你计算机托管的 URL 加载应用，而不仅仅是读取设备上的文件，因此在硬件设备上设置实时重载可能会比较复杂。

与常规的设备部署一样，你需要通过数据线将设备连接到计算机。不同之处在于 Ionic CLI 会配置 Web 视图，使其从你计算机上的开发服务器加载应用。

### Capacitor

要在 Capacitor 中使用实时重载，请确保你使用的是虚拟设备，或是与计算机连接到同一 Wi-Fi 网络的硬件设备。然后，你需要使用 `--external` 标志指定开发服务器使用外部 IP 地址。

```shell
$ ionic capacitor run ios -l --external
$ ionic capacitor run android -l --external
```

:::note
请注意，使用 `--external` 选项时，同一 Wi-Fi 网络上的其他用户将能够访问你的应用。
:::

### Cordova

#### Android

对于 Android 设备，Ionic CLI 会自动转发开发服务器端口。这意味着你可以使用 `localhost` 地址，并且在 Web 视图中加载时会指向你的计算机，而不是设备。

以下一体化命令将在 `localhost` 上启动实时重载服务器，并使用 Cordova 将应用部署到 Android 设备：

```shell
ionic cordova run android -l
```

#### iOS

对于 iOS 设备，目前尚不支持端口转发。这意味着你需要将设备连接到与计算机相同的 Wi-Fi 网络，并为开发服务器使用外部地址。

在某些情况下，Ionic CLI 可能无法确定用于配置 Web 视图的地址，因此可能会提示你选择一个。请务必选择你计算机在 Wi-Fi 网络中的地址。

以下一体化命令将在**所有地址**上启动实时重载服务器，并使用 Cordova 将应用部署到 iOS 设备：

```shell
ionic cordova run ios -l --external
```

:::note
请注意，使用 `--external` 选项时，同一 Wi-Fi 网络上的其他用户将能够访问你的应用。
:::

## 使用技巧

- 使用 Cordova 时，可以利用 `--device`、`--emulator` 和 `--target` 选项来筛选目标设备。使用 `--list` 选项可列出所有目标设备。具体用法请参阅[命令文档](commands/cordova-run.md)。
- 可以通过 `ionic serve` 结合 `ionic cordova run` 或 `ionic capacitor run` 的 `--livereload-url` 选项，将开发服务器进程和部署进程分开执行。
- 对于 Android 设备，可以配置 [adb](https://developer.android.com/studio/command-line/adb) 在 adb 服务器运行时始终转发端口（参见 `adb reverse`）。设置端口转发后，就不再需要外部地址了。你还可以通过 TCP 设置 adb 桥接，这样后续部署就不再需要 USB 数据线。
- 如果你在使用 Angular 的开发容器，可能会发现实时重载无法正常工作。要解决此问题，请在 `angular.json` 中将 `projects.app.architect.serve.configurations.development.poll` 设置为 `1`。

### 使用 SSL

默认情况下，实时重载使用 HTTP，这会导致需要安全上下文的 Web API（如 [web crypto](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Crypto_API)）无法正常工作。要建立安全上下文，可以使用 `--ssl` 参数启用 HTTPS。

例如，对于 Angular 应用，可以运行以下命令传递证书和私钥，并通过 HTTPS 提供应用：

```shell
ionic capacitor run android --livereload --external --ssl -- --ssl-cert='server.crt' --ssl-key='server.key'
```

使用自签名证书并确保设备信任该证书是一个复杂的话题，详细内容可参阅[这篇文章](https://ionic.zendesk.com/hc/en-us/articles/11384425513623)。