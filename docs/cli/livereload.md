---
title: 实时重载
sidebar_label: 实时重载
---

# 实时重载

使用"实时重载"选项，当您在开发环境中更改应用代码时，浏览器或[Web 视图](../core-concepts/webview.md)将重新加载。这对于在硬件设备上进行开发特别有用。

## 术语

"实时重载"是一个被混淆的术语。对于 `ionic serve`，"实时重载"仅指在做出更改时重新加载浏览器。"实时重载"也可以与 Capacitor 和 Cordova 一起使用，在虚拟设备和硬件设备上提供相同的体验，这消除了重新部署原生二进制文件的需要。

## 用法

由于"实时重载"需要 Web 视图从您计算机托管的 URL 加载您的应用，而不仅仅是读取设备上的文件，因此为硬件设备设置实时重载可能比较棘手。

与常规设备部署一样，您需要一根电缆将设备连接到计算机。区别在于 Ionic CLI 配置 Web 视图从您计算机上的开发服务器加载您的应用。

### Capacitor

要使用 Capacitor 的"实时重载"功能，请确保您使用的是虚拟设备或与计算机连接到同一 Wi-Fi 网络的硬件设备。然后，您需要使用 `--external` 标志指定要为开发服务器使用外部 IP 地址。

```shell
$ ionic capacitor run ios -l --external
$ ionic capacitor run android -l --external
```

:::note
请记住，使用 `--external` 选项时，您 Wi-Fi 网络上的其他人将能够访问您的应用。
:::

### Cordova

#### Android

对于 Android 设备，Ionic CLI 将自动转发开发服务器端口。这意味着您可以使用 `localhost` 地址，当在 Web 视图中加载时，它将指向您的计算机，而不是设备。

以下一体化命令将在 `localhost` 上启动实时重载服务器，并使用 Cordova 将应用部署到 Android 设备：

```shell
ionic cordova run android -l
```

#### iOS

对于 iOS 设备，端口转发尚不可用。这意味着您需要将设备连接到与计算机相同的 Wi-Fi 网络，并为开发服务器使用外部地址。

在某些情况下，Ionic CLI 不知道用来配置 Web 视图的地址，因此系统可能会提示您选择一个。请确保选择您的计算机在 Wi-Fi 网络上的地址。

以下一体化命令将在**所有地址**上启动实时重载服务器，并使用 Cordova 将应用部署到 iOS 设备：

```shell
ionic cordova run ios -l --external
```

:::note
请记住，使用 `--external` 选项时，您 Wi-Fi 网络上的其他人将能够访问您的应用。
:::

## 提示

- 对于 Cordova，使用 `--device`、`--emulator` 和 `--target` 选项来缩小目标设备范围。使用 `--list` 选项列出所有目标。使用方法请参见[命令文档](commands/cordova-run.md)。
- 您可以通过使用 `ionic serve` 和 `ionic cordova run` 或 `ionic capacitor run` 的 `--livereload-url` 选项来分离开发服务器进程和部署进程。
- 对于 Android，可以配置 [adb](https://developer.android.com/studio/command-line/adb) 在 adb 服务器运行时始终转发端口（参见 `adb reverse`）。设置端口转发后，就不再需要外部地址。您还可以通过 TCP 设置 adb 桥接，这样后续部署就不再需要 USB 电缆。
- 如果您使用 Angular 的开发容器，可能会发现实时重载不起作用。要修复它，在 `angular.json` 中将 `projects.app.architect.serve.configurations.development.poll` 设置为 `1`。

### 使用 SSL

默认情况下，实时重载将使用 HTTP，这会导致需要安全上下文的 Web API（如 [web crypto](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)）失败。要建立安全上下文，您可以使用 `--ssl` 参数来使用 HTTPS。

例如，使用 Angular 应用程序，您可以运行以下命令来传递证书和私钥，并使用 HTTPS 提供应用服务：

```shell
ionic capacitor run android --livereload --external --ssl -- --ssl-cert='server.crt' --ssl-key='server.key'
```

使用自签名证书并确保设备信任它是一个复杂的话题，在[这篇文章](https://ionic.zendesk.com/hc/en-us/articles/11384425513623)中有所介绍。
