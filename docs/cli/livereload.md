# 实时重载

使用实时重载功能可在开发环境中修改应用代码时，自动刷新浏览器或 [Web View](../core-concepts/webview.md)。这在硬件设备上进行开发时尤为实用。

## 术语说明

实时重载是一个复合型术语。在使用 `ionic serve` 时，它仅指代码变更时重新加载浏览器。实时重载同样可用于 Capacitor 和 Cordova，在虚拟设备和硬件设备上提供相同的体验，从而避免了重新部署原生二进制文件的需求。

## 使用方法

由于实时重载要求 Web View 从计算机托管的 URL 加载应用，而非直接读取设备上的文件，因此为硬件设备配置实时重载可能较为复杂。

与常规设备部署类似，您需要通过数据线将设备连接至计算机。不同之处在于，Ionic CLI 会将 Web View 配置为从计算机的开发者服务器加载应用。

### Capacitor

要在 Capacitor 中使用实时重载，请确保您使用的是虚拟设备，或与计算机连接至同一 Wi-Fi 网络的硬件设备。随后，您需要通过 `--external` 标志指定使用外部 IP 地址作为开发者服务器。

```shell
$ ionic capacitor run ios -l --external
$ ionic capacitor run android -l --external
```

:::note
请注意：使用 `--external` 选项时，同一 Wi-Fi 网络中的其他用户将能够访问您的应用。
:::

### Cordova

#### Android

对于 Android 设备，Ionic CLI 会自动转发开发者服务器端口。这意味着您可以使用 `localhost` 地址，在 Web View 中加载时该地址将指向您的计算机而非设备。

以下一体化命令将在 `localhost` 上启动实时重载服务器，并使用 Cordova 将应用部署到 Android 设备：

```shell
ionic cordova run android -l
```

#### iOS

对于 iOS 设备，目前尚不支持端口转发。这意味着您需要将设备与计算机连接至同一 Wi-Fi 网络，并为开发者服务器使用外部地址。

某些情况下，Ionic CLI 可能无法确定配置 Web View 所需的地址，此时会提示您进行选择。请务必选择计算机在 Wi-Fi 网络中的地址。

以下一体化命令将在**所有地址**上启动实时重载服务器，并使用 Cordova 将应用部署到 iOS 设备：

```shell
ionic cordova run ios -l --external
```

:::note
请注意：使用 `--external` 选项时，同一 Wi-Fi 网络中的其他用户将能够访问您的应用。
:::

## 实用技巧

- 使用 Cordova 时，可通过 `--device`、`--emulator` 和 `--target` 选项精确指定目标设备。使用 `--list` 选项可列出所有可用目标。具体用法请参阅[命令文档](commands/cordova-run.md)。
- 您可以将开发者服务器进程与部署进程分离，分别使用 `ionic serve` 和 `ionic cordova run` 或 `ionic capacitor run` 的 `--livereload-url` 选项。
- 对于 Android，可配置 [adb](https://developer.android.com/studio/command-line/adb) 在 adb 服务器运行时始终转发端口（参见 `adb reverse`）。配置端口转发后，将不再需要外部地址。您还可以通过 TCP 设置 adb 桥接，使得后续部署无需 USB 数据线。
- 若在 Angular 开发容器中使用实时重载时遇到问题，可在 `angular.json` 中将 `projects.app.architect.serve.configurations.development.poll` 设置为 `1`。

### 使用 SSL

默认情况下，实时重载使用 HTTP 协议，这会导致需要安全上下文的 Web API（如 [web crypto](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)）失效。要建立安全上下文，您可以使用 `--ssl` 参数启用 HTTPS。

例如，对于 Angular 应用，您可以运行以下命令传递证书和私钥，通过 HTTPS 提供服务：

```shell
ionic capacitor run android --livereload --external --ssl -- --ssl-cert='server.crt' --ssl-key='server.key'
```

使用自签名证书并确保设备信任该证书是一个复杂的话题，[本文](https://ionic.zendesk.com/hc/en-us/articles/11384425513623)对此进行了详细说明。