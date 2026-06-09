---
title: 设备 - Capacitor 插件 API
description: Device API 公开设备的内部信息，例如型号和操作系统版本，以及用户信息（如唯一 ID）。
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/device/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/device/src/definitions.ts
sidebar_label: 设备
translated: true
source_hash: 364cefaa
---
# @capacitor/device

Device API 公开设备的内部信息，例如型号和操作系统版本，以及用户信息（如唯一 ID）。

## 安装

```bash
npm install @capacitor/device
npx cap sync
```

## 示例插件用法

```typescript
import { Device } from '@capacitor/device';

const logDeviceInfo = async () => {
  const info = await Device.getInfo();

  console.log(info);
};

const logBatteryInfo = async () => {
  const info = await Device.getBatteryInfo();

  console.log(info);
};
```

## API 参考

<docgen-index>

* [`getId()`](#getid)
* [`getInfo()`](#getinfo)
* [`getBatteryInfo()`](#getbatteryinfo)
* [`getLanguageCode()`](#getlanguagecode)
* [`getLanguageTag()`](#getlanguagetag)
* [Interfaces](#接口)
* [Type Aliases](#类型别名)

</docgen-index>

<docgen-api>


### getId()

```typescript
getId() => Promise<DeviceId>
```

返回设备的唯一标识符。

**返回：** <code>Promise&lt;<a href="#deviceid">DeviceId</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### getInfo()

```typescript
getInfo() => Promise<DeviceInfo>
```

返回关于底层设备/操作系统/平台的信息。

**返回：** <code>Promise&lt;<a href="#deviceinfo">DeviceInfo</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### getBatteryInfo()

```typescript
getBatteryInfo() => Promise<BatteryInfo>
```

返回关于电池的信息。

**返回：** <code>Promise&lt;<a href="#batteryinfo">BatteryInfo</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### getLanguageCode()

```typescript
getLanguageCode() => Promise<GetLanguageCodeResult>
```

获取设备当前的语言区域代码。

**返回：** <code>Promise&lt;<a href="#getlanguagecoderesult">GetLanguageCodeResult</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### getLanguageTag()

```typescript
getLanguageTag() => Promise<LanguageTag>
```

获取设备当前的语言区域标签。

**返回：** <code>Promise&lt;<a href="#languagetag">LanguageTag</a>&gt;</code>

**自版本：** 4.0.0

--------------------


### 接口


#### DeviceId

| 属性             | 类型                | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 自版本 |
| ---------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`identifier`** | <code>string</code> | 应用可用的设备标识符。此标识符可能在现代移动平台上发生变化，这些平台只允许每个应用安装 ID。在 iOS 上，该标识符是一个 UUID，唯一标识设备到应用的供应商（[阅读更多](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor)）。在 Android 8+ 上，__该标识符是一个 64 位数字（以十六进制字符串表示）__，对每个应用签名密钥、用户和设备的组合是唯一的（[阅读更多](https://developer.android.com/reference/android/provider/Settings.Secure#ANDROID_ID)）。在 Web 上，会生成一个随机标识符并存储在 localStorage 中以供后续调用使用。如果 localStorage 不可用，则每次调用都会生成一个新的随机标识符。 | 1.0.0 |


#### DeviceInfo

| 属性                    | 类型                                                        | 描述                                                                                                                                                                                                                                                                                                                                      | 自版本 |
| ----------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| **`name`**              | <code>string</code>                                         | 设备名称。例如"John's iPhone"。仅支持 iOS 和 Android 7.1 及以上版本。在 iOS 16+ 上，如果没有相应的[授权](https://developer.apple.com/documentation/bundleresources/entitlements/com_apple_developer_device-information_user-assigned-device-name)，将返回通用设备名称。 | 1.0.0 |
| **`model`**             | <code>string</code>                                         | 设备型号。例如"iPhone13,4"。                                                                                                                                                                                                                                                                                                     | 1.0.0 |
| **`platform`**          | <code>'ios' \| 'android' \| 'web'</code>                    | 设备平台（小写）。                                                                                                                                                                                                                                                                                                                 | 1.0.0 |
| **`operatingSystem`**   | <code><a href="#operatingsystem">OperatingSystem</a></code> | 设备的操作系统。                                                                                                                                                                                                                                                                                                              | 1.0.0 |
| **`osVersion`**         | <code>string</code>                                         | 设备操作系统的版本。                                                                                                                                                                                                                                                                                                                    | 1.0.0 |
| **`iOSVersion`**        | <code>number</code>                                         | iOS 版本号。仅适用于 iOS。多部分版本号被压缩为填充到两位数的整数，例如 `"16.3.1"` -> `160301`。                                                                                                                                                                                   | 5.0.0 |
| **`androidSDKVersion`** | <code>number</code>                                         | Android SDK 版本号。仅适用于 Android。                                                                                                                                                                                                                                                                                       | 5.0.0 |
| **`manufacturer`**      | <code>string</code>                                         | 设备制造商。                                                                                                                                                                                                                                                                                                                  | 1.0.0 |
| **`isVirtual`**         | <code>boolean</code>                                        | 应用是否在模拟器中运行。                                                                                                                                                                                                                                                                                              | 1.0.0 |
| **`memUsed`**           | <code>number</code>                                         | 当前应用使用的近似内存量，以字节为单位。除以 1048576 得到 MB 数。                                                                                                                                                                                                                                           | 1.0.0 |
| **`webViewVersion`**    | <code>string</code>                                         | WebView 浏览器版本。                                                                                                                                                                                                                                                                                                                     | 1.0.0 |


#### BatteryInfo

| 属性               | 类型                 | 描述                                                       | 自版本 |
| ------------------ | -------------------- | ----------------------------------------------------------------- | ----- |
| **`batteryLevel`** | <code>number</code>  | 电池充电百分比的指示（0 到 1）。 | 1.0.0 |
| **`isCharging`**   | <code>boolean</code> | 设备是否正在充电。                                   | 1.0.0 |


#### GetLanguageCodeResult

| 属性        | 类型                | 描述                  | 自版本 |
| ----------- | ------------------- | ---------------------------- | ----- |
| **`value`** | <code>string</code> | 两个字符的语言代码。 | 1.0.0 |


#### LanguageTag

| 属性        | 类型                | 描述                                     | 自版本 |
| ----------- | ------------------- | ----------------------------------------------- | ----- |
| **`value`** | <code>string</code> | 返回格式良好的 IETF BCP 47 语言标签。 | 4.0.0 |


### 类型别名


#### OperatingSystem

<code>'ios' | 'android' | 'windows' | 'mac' | 'unknown'</code>

</docgen-api>
