---
sidebar_label: 'WifiWizard2'
---

# WifiWizard2

WifiWizard2 能够在 Cordova/Phonegap 项目中为 Android 和 iOS 应用提供 Wifi 管理功能。

本项目是 WifiWizard 插件的一个分支，包含了修复、更新以及从 Cordova Network Manager 插件中提取的补丁。

## 安装

<Tabs
  groupId="runtime"
  defaultValue="Capacitor"
  values={[
    { value: 'Capacitor', label: 'Capacitor' },
    { value: 'Cordova', label: 'Cordova' },
    { value: 'Enterprise', label: 'Enterprise' },
  ]}
>
  <TabItem value="Capacitor">

```shell
$ npm install cordova-plugin-wifiwizard2
$ npm install @awesome-cordova-plugins/wifi-wizard-2
$ ionic cap sync
```

  </TabItem>
  <TabItem value="Cordova">

```shell
$ ionic cordova plugin add cordova-plugin-wifiwizard2
$ npm install @awesome-cordova-plugins/wifi-wizard-2
```

  </TabItem>
  <TabItem value="Enterprise">

> Ionic Enterprise 提供由 Ionic 团队全面支持和维护的插件。[了解更多](https://ionic.io/docs/premier-plugins) 或如果您对此插件的企业版感兴趣，[联系我们](https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine)。

  </TabItem>
</Tabs>

## 支持的平台

- Android
- iOS

## 使用方法

### React

[了解更多在 React 中使用 Ionic Native 组件的信息](../native-community.md#react)

### Angular

```tsx
import { WifiWizard2 } from '@awesome-cordova-plugins/wifi-wizard-2/ngx';

constructor(private wifiWizard2: WifiWizard2) { }
```

# 全局函数
这些函数适用于 Android 和 iOS 应用。
```tsx
this.wifiWizard2.getConnectedSSID()
```

- 返回当前连接的网络 SSID（仅当已连接时）。成功时回调返回 SSID，失败时回调被调用（如果未连接或无法获取）。
- 注意：如果无法获取 SSID，此方法**不会**像原版 WifiWizard 那样返回 BSSID。

```tsx
this.wifiWizard2.getConnectedBSSID();
```

- 功能同上，但返回的是 BSSID（MAC地址）。

```tsx
this.wifiWizard2.timeout(delay);
```

- `delay`：延迟时间，单位为毫秒。
- 这是一个辅助性的异步延迟函数，`delay` 是可选的，默认为 2000 毫秒（2秒）。
- 此方法在延迟后总是返回一个已解决的 Promise，它永远不会拒绝或抛出错误。

**在异步函数中使用示例**

```tsx
async function example() {
  await this.wifiWifiWizard2.timeout(4000);
  // 等待 4 秒后执行某些操作
}
```

**在标准非异步函数中使用示例**

```tsx
function example(){
   this.wifiWifiWizard2.timeout(4000).then( function(){
       // 等待 4 秒后执行某些操作
   }):
}
```

**可能抛出的错误**

- `TIMEOUT_WAITING_FOR_SCAN`：等待扫描超时（超过 10 秒+）。
- `SCAN_FAILED`：无法启动扫描。

# iOS 函数

关于功能，请注意以下几点：

- 连接/断开功能仅适用于 iOS 11+。
- 无法在模拟器中运行，因此在用 xCode 构建时，需要连接真实设备。
- 确保将 'HotspotConfiguration' 和 'NetworkExtensions' 功能添加到您的 xCode 项目中。
- 要连接到开放网络，请省略 `ssidPassword` 参数或传入 `false`。

```tsx
this.wifiWizard2.iOSConnectNetwork(ssid, ssidPassword);
```

```tsx
this.wifiWizard2.iOSDisconnectNetwork(ssid);
```

# Android 函数

- **WifiWizard2** 在调用任何需要启用 WiFi 的 Android 相关方法时，如果 WiFi 被禁用，它会自动尝试启用 WiFi。

## Connect 与 Enable

在编写 Android Java 代码时，并没有直接的 `connect` 方法，你基本上是对网络执行 `enable` 或 `disable` 操作。在原始版本的 WifiWizard 中，`connect` 方法基本上只是在 Android 中调用 `enable`。
在 WifiWizard2 3.0.0+ 版本中，我改变了这种方式，将其转换为一个辅助方法，以消除依次调用 `formatWifiConfig`、`add` 和 `enable` 的繁琐步骤... `connect` 方法现在会自动调用 `formatWifiConfig`，然后调用 `add` 来添加或更新网络配置，最后调用 `enable`。
如果 `connect` 方法无法更新现有的网络配置（由用户或其他应用添加），但存在一个有效的网络 ID，它仍会尝试启用该网络 ID。

```tsx
this.wifiWizard2.connect(ssid, bindAll, password, algorithm, isHiddenSSID);
```

- `ssid`：要连接的 SSID，*必需*。
- `bindAll`：设置为 `true` 以告诉 Android 将您 Android 应用的所有连接都通过此 WiFi 连接进行路由（默认为 `false`），*可选*。
- 关于 `bindAll` 功能的更多细节，请参阅 `WifiWizard2.enable` 方法。
- 如果连接的是开放网络，则不需要 `algorithm` 和 `password` 参数。
- 目前仅支持 `WPA` 和 `WEP` 算法。
- 对于 `WPA2`，只需将 `WPA` 作为算法传入即可。
- 如果您要连接的网络是隐藏网络，请将 `isHiddenSSID` 设置为 `true`。
- 这些参数与 `formatWifiConfig` 的参数相同。
- 此方法本质上依次调用 `formatWifiConfig`、`add` 和 `enable`。
- 如果无法更新网络配置（由用户或其他应用添加），但存在有效的网络 ID，此方法仍会尝试启用该网络。
- Promise 将在此方法验证连接到 WiFi 已完成状态后才会返回（最多等待 60 秒）。

**可能抛出的错误**

- `CONNECT_FAILED_TIMEOUT`：无法验证连接，60 秒后超时。
- `INVALID_NETWORK_ID_TO_CONNECT`：无法基于生成的 wifi 配置进行连接。
- `INTERPUT_EXCEPT_WHILE_CONNECTING`：在等待连接时发生中断异常。

## Disconnect 与 Disable

与上面的 Connect 和 Enable 类似，但在这种情况下，`disconnect` 会首先禁用网络，然后尝试移除它（如果传入了 SSID）。

```tsx
this.wifiWizard2.disconnect(ssid);
```

- `ssid` 可以是 SSID（字符串）或网络 ID（整数）。
- `ssid` 是**可选的**...如果不传，将断开当前的 WiFi 连接（现在几乎所有 Android 版本在断开连接后都会自动重新连接到上一个 WiFi）。
- 如果提供了 `ssid`，此方法将首先尝试 `disable` 网络，然后尝试 `remove` 网络配置。
- 如果您不想移除网络配置，请改用 `disable` 方法。

**可能抛出的错误**

- `DISCONNECT_NET_REMOVE_ERROR`：Android 在移除 wifi 配置时返回错误。
- `DISCONNECT_NET_DISABLE_ERROR`：无法基于生成的 wifi 配置进行连接。
- `DISCONNECT_NET_ID_NOT_FOUND`：无法根据传入的 SSID 确定要断开/移除的网络 ID。
- `ERROR_DISCONNECT`：Android 断开 wifi 时出错（仅在未传入 SSID 时）。

```tsx
this.wifiWizard2.formatWifiConfig(ssid, password, algorithm, isHiddenSSID);
```

- 如果连接的是开放网络，则不需要 `algorithm` 和 `password` 参数。
- 目前仅支持 `WPA` 和 `WEP` 算法。
- 对于 `WPA2`，只需将 `WPA` 作为算法传入即可。
- 如果您要连接的网络是隐藏网络，请将 `isHiddenSSID` 设置为 `true`。

```tsx
this.wifiWizard2.formatWPAConfig(ssid, password, isHiddenSSID);
```

- 这是一个辅助方法，它调用 `WifiWizard2.formatWifiConfig( ssid, password, 'WPA', isHiddenSSID );`

```tsx
this.wifiWizard2.add(wifi);
```

- `wifi` 必须是一个由 `formatWifiConfig` 格式化后的对象，在调用 `enable` **之前**，必须先执行此步骤。

**可能抛出的错误**

- `AUTH_TYPE_NOT_SUPPORTED`：指定的认证类型无效。
- `ERROR_ADDING_NETWORK`：Android 返回 `-1`，表示添加网络时出错。
- `ERROR_UPDATING_NETWORK`：与上面类似，但找到了一个现有的网络 ID，并且无法更新它。

```tsx
this.wifiWizard2.remove(ssid);
```

- `ssid` 可以是 SSID（字符串）或网络 ID（整数）。
- 请注意，较新版本的 Android 通常只允许移除由您的应用程序创建的 wifi 配置。

**可能抛出的错误**

- `UNABLE_TO_REMOVE`：Android 返回移除网络失败。
- `REMOVE_NETWORK_NOT_FOUND`：无法根据传入的 SSID 确定网络 ID。

```tsx
this.wifiWizard2.listNetworks();
```

```tsx
this.wifiWizard2.scan([options]);
```

- 功能与依次调用 `startScan` 然后 `getScanResults` 相同，但此方法会在扫描完成并返回结果后才 resolve promise。

```tsx
this.wifiWizard2.startScan();
```

- 建议直接使用 `scan` 方法而不是 `startScan`。

**可能抛出的错误**

- `STARTSCAN_FAILED`：Android 返回启动扫描失败。

```tsx
this.wifiWizard2.getScanResults([options]);
```

- `getScanResults` 应在调用 `startScan` 之后调用（建议使用 `scan`，因为它会自动启动扫描并返回结果）。
- `[options]` 是可选的。如果您不想指定选项，可以直接将成功回调作为第一个参数，失败回调作为第二个参数。
- 获取可用网络列表，该列表是一个对象数组，并传递给 listHandler 函数。数组的格式如下：

```tsx
networks = [
{   "level": signal_level, // 原始 RSSI 值
       "SSID": ssid, // 字符串形式的 SSID，带有转义的双引号: "\"ssid name\""
       "BSSID": bssid // WiFi 路由器的 MAC 地址，字符串形式
       "frequency": 接入点信道的频率，单位 MHz
       "capabilities": capabilities // 描述接入点支持的身份验证、密钥管理和加密方案。
       "timestamp": timestamp // 扫描完成时的时间戳
       "channelWidth":
       "centerFreq0":
       "centerFreq1":
   }
]
```

- `channelWidth`、`centerFreq0` 和 `centerFreq1` 仅在 API > 23 (Android 6.0) 上支持，更旧的 API 将对这些值返回 null。

可以传入一个选项对象。目前，唯一支持的选项是 `numLevels`，其行为如下：

- 如果 `(n == true || n < 2)`，`*.getScanResults({numLevels: n})` 将像以前一样返回数据，分为 5 个级别；
- 如果 `(n > 1)`，`*.getScanResults({numLevels: n})` 将计算信号电平，分为 n 个级别；
- 如果 `(n == false)`，`*.getScanResults({numLevels: n})` 将使用原始信号电平；

```tsx
this.wifiWizard2.isWifiEnabled();
```

- 返回布尔值，表示 WiFi 是否已启用。

```tsx
this.wifiWizard2.setWifiEnabled(enabled);
```

- 传入 `true` 作为 `enabled` 参数以启用 WiFi。
- 您无需在调用需要启用 WiFi 的其他方法之前调用此函数来启用 WiFi。如果调用的方法需要启用 WiFi，此插件会自动启用 WiFi。

**可能抛出的错误**

- `ERROR_SETWIFIENABLED`：WiFi 状态与调用（启用或禁用）不匹配。

```tsx
this.wifiWizard2.getConnectedNetworkID();
```

- 返回当前连接的网络 ID（仅当已连接时），成功时回调返回 ID，否则失败回调被调用。

**可能抛出的错误**

- `GET_CONNECTED_NET_ID_ERROR`：无法确定当前连接的网络 ID（可能未连接）。

## 3.1.1+ 版本新功能

```tsx
this.wifiWizard2.resetBindAll();
```

- 在不断开 WiFi 连接的情况下，禁用对 WiFi 网络的 bindAll。

```tsx
this.wifiWizard2.setBindAll();
```

- 在不断开 WiFi 连接的情况下，启用对 WiFi 网络的 bindAll。

```tsx
this.wifiWizard2.canConnectToInternet();
```

- 返回布尔值（true 或 false），表示设备是否能够通过 HTTP 连接（因为 ping 不可靠）连接到 https://www.google.com。
- 与其他异步函数一样，未知错误仍会被抛出。
- 如果您在调用 `connect` 或 `enable` 时为 `bindAll` 传入了 `true`，您的应用将强制通过 wifi 连接进行 ping 操作。
- 如果您没有为 `bindAll` 传入 `true`（或传入了 `false`），并且该 wifi 没有互联网连接，那么 Android 5.0+ (API 21+) 将使用蜂窝网络连接进行 ping 操作（因为当 wifi 没有互联网时，Android 会使用蜂窝网络连接）。[更多细节](https://android-developers.googleblog.com/2016/07/connecting-your-app-to-wi-fi-device.html)

```tsx
this.wifiWizard2.canConnectToRouter();
```

- 由于 `canPingWifiRouter` 非常不可靠，此方法使用 HTTP 连接来测试是否能够连接到路由器（因为大多数路由器应该在 80 端口上运行 web 服务器）。
- 与其他异步函数一样，未知错误仍会被抛出。
- 这对于测试您的 Android 应用在连接到 WiFi 后是否能够连接到私有网络非常有用。
- 添加此功能是为了测试 `bindAll` 特性，以解决 Android 5.0+ (API 21+) 在 WiFi 没有互联网连接时不通过 WiFi 路由调用的问题。[查看 Android 博客](https://android-developers.googleblog.com/2016/07/connecting-your-app-to-wi-fi-device.html)
- 尝试连接路由器 IP 上的 HTTP 服务器（端口 80）（例如：`http://192.168.0.1/`，其中 `192.168.0.1` 是自动检测到的 IP 地址）。

## 3.0.0+ 版本新功能

```tsx
this.wifiWizard2.isConnectedToInternet();
```

- 返回布尔值（true 或 false），表示设备是否能够 ping 通 8.8.8.8。
- 与其他异步函数一样，未知错误仍会被抛出。
- 如果您在调用 `connect` 或 `enable` 时为 `bindAll` 传入了 `true`，您的应用将强制通过 wifi 连接进行 ping 操作。
- 如果您没有为 `bindAll` 传入 `true`（或传入了 `false`），并且该 wifi 没有互联网连接，那么 Android 5.0+ (API 21+) 将使用蜂窝网络连接进行 ping 操作（因为当 wifi 没有互联网时，Android 会使用蜂窝网络连接）。[更多细节](https://android-developers.googleblog.com/2016/07/connecting-your-app-to-wi-fi-device.html)

```tsx
this.wifiWizard2.canPingWifiRouter();
```

- 返回布尔值（true 或 false），表示设备是否能够 ping 通已连接的 WiFi 路由器 IP（从 DHCP 信息获取）。
- 3.1.1+ 版本使用 HTTP 连接来测试是否能够连接到路由器（因为之前的 ping 方法不起作用）。
- 与其他异步函数一样，未知错误仍会被抛出。
- 这对于测试您的 Android 应用在连接到 WiFi 后是否能够连接到私有网络非常有用。
- 添加此功能是为了测试 `bindAll` 特性，以解决 Android 5.0+ (API 21+) 在 WiFi 没有互联网连接时不通过 WiFi 路由调用的问题。[查看 Android 博客](https://android-developers.googleblog.com/2016/07/connecting-your-app-to-wi-fi-device.html)

```tsx
this.wifiWizard2.enableWifi();
```

```tsx
this.wifiWizard2.disableWifi();
```

```tsx
this.wifiWizard2.getWifiIP();
```

- 返回当前连接的 WiFi 的 IPv4 地址，如果未找到 IP 或 WiFi 未连接，则 reject promise。

```tsx
this.wifiWizard2.getWifiRouterIP();
```

- 返回当前连接的 WiFi 的 IPv4 路由器 IP，如果无法确定或 WiFi 未连接，则 reject promise。

**可能抛出的错误**

- `NO_VALID_IP_IDENTIFIED`：如果无法确定有效的 IP（设备返回的 IP 是 `0.0.0.0`）。

```tsx
this.wifiWizard2.getWifiIPInfo();
```

- 返回一个包含 IPv4 地址和子网掩码的 JSON 对象 `{"ip": "192.168.1.2", "subnet": "255.255.255.0" }`，如果未找到或未连接，则 reject promise。

**可能抛出的错误**

- `NO_VALID_IP_IDENTIFIED`：如果无法确定有效的 IP（设备返回的 IP 是 `0.0.0.0`）。

```tsx
this.wifiWizard2.reconnect();
```

- 重新连接到当前活动的接入点，**前提是我们当前处于断开状态。**

**可能抛出的错误**

- `ERROR_RECONNECT`：Android 在重新连接时返回错误。

```tsx
this.wifiWizard2.reassociate();
```

- 重新连接到当前活动的接入点，**即使我们已经连接了。**

**可能抛出的错误**

- `ERROR_REASSOCIATE`：Android 在重新关联时返回错误。

```tsx
this.wifiWizard2.getSSIDNetworkID(ssid);
```

- 根据传入的 SSID 获取 Android 网络 ID。

```tsx
this.wifiWizard2.disable(ssid);
```

- `ssid` 可以是 SSID（字符串）或网络 ID（整数）。
- 禁用传入的 SSID 网络。
- 请注意，较新版本的 Android 通常只允许禁用由您的应用程序创建的网络。

**可能抛出的错误**

- `UNABLE_TO_DISABLE`：Android 返回禁用网络失败。
- `DISABLE_NETWORK_NOT_FOUND`：无法根据传入的 SSID 确定要禁用的网络 ID。

```tsx
this.wifiWizard2.requestPermission();
```

- 请求 `ACCESS_FINE_LOCATION` 权限。
- 此 Android 权限是运行 `scan`、`startScan` 和 `getScanResults` 所必需的。
- 您可以手动运行此函数来请求权限，或者当上述函数之一被调用时，WifiWizard2 会自动请求权限。

**可能抛出的错误**

- `PERMISSION_DENIED`：用户在设备上拒绝了权限。

```tsx
this.wifiWizard2.enable(ssid, bindAll, waitForConnection);
```

- `ssid` 可以是 SSID（字符串）或网络 ID（整数）。
- `bindAll`：设置为 `true` 以告诉 Android 将您 Android 应用的所有连接都通过此 WiFi 连接进行路由。
- Android 5.0+ (API 21+) 如果 WiFi 设备没有互联网连接，将不会将连接路由到该 WiFi 设备。为 `bindAll` 传入 `true` 将强制 Android 将您 Android 应用的连接通过 Wifi 进行路由，无论其是否有互联网连接。
- 如果您因为 WiFi 没有互联网而无法通过 WiFi 连接到本地 IP，请尝试启用 `bindAll`，这应该可以解决问题。
- 在我的测试中，某些版本的 Android（5.0 - 7.1.2）仍然会在 WiFi 没有互联网的情况下通过 WiFi 路由连接，但哪些版本能工作、哪些不能是随机的。
- 测试 Android 8.0+ 发现，如果 wifi 没有互联网，100% 的情况下不会通过 WiFi 路由连接，因此对于 Android 8.0 或更高版本，您**必须**启用此选项，才能在没有互联网的情况下通过 wifi 路由您应用的连接。
- 当启用 `bindAll` 时，您应用中的**所有**连接都将通过 WiFi 进行路由，直到您调用 `disconnect` 或 `disable`。
- 有关[更多细节](https://android-developers.googleblog.com/2016/07/connecting-your-app-to-wi-fi-device.html)，请参阅 Google Android 博客。
- 此功能**仅**适用于 Android 5.0+ (API 21+)，如果设备运行的 API 低于 21，`bindAll` 将被忽略（因为低于 21 的 API 默认就是这样做的）。
- 启用传入的 SSID 网络。
- 在调用 `enable` 之前，您**必须**先调用 `WifiWizard2.add(wifi)`，因为 wifi 配置必须先存在，然后才能启用它（或者之前使用过 `connect` 且未调用 `disconnect`）。
- 此方法**不会**等待或验证是否连接到了 wifi 网络。传入 `true` 给 `waitForConnection` 可以让 promise 仅在确认连接到特定 `ssid` 的 COMPLETED 状态后才返回。

**可能抛出的错误**

- `UNABLE_TO_ENABLE`：Android 返回 `-1` 表示启用失败。

# 安装

## 主分支

运行 `cordova plugin add https://github.com/tripflex/wifiwizard2`

从主分支（GitHub 上的最新代码）安装。

要安装特定分支（添加 `#标签名`，用此仓库的标签名替换 `标签名`，例如：
`cordova plugin add https://github.com/tripflex/wifiwizard2#v3.1.1`

可用的标签在此处查找：
https://github.com/tripflex/WifiWizard2/tags

如果您想使用最新最稳定的版本，请运行下面的 'Releases' 命令。

## 发布版本

运行 `cordova plugin add cordova-plugin-wifiwizard2`

## Meteor

要在 Meteor 项目中安装并使用此插件，您必须指定 NPM 仓库中的确切版本：
[https://www.npmjs.com/package/cordova-plugin-wifiwizard2](https://www.npmjs.com/package/cordova-plugin-wifiwizard2)

截至 2019 年 4 月 4 日，最新版本是 3.1.1：

`meteor add cordova:cordova-plugin-wifiwizard2@3.1.1`

# 错误/拒绝

方法现在会返回如下格式化的字符串错误，而不是返回通用的错误消息。这允许您自己检查返回的具体错误，并自定义错误消息。
在未来的版本中，我可能会添加简单的方法来覆盖通用消息，或设置您自己的消息，但目前，每个方法/函数下方都可以找到返回的错误。

## 通用的**可能抛出的错误**

`WIFI_NOT_ENABLED`

```

```