---
title: 地理位置 - Capacitor 插件 API
description: Geolocation API 提供获取和跟踪设备当前位置的简单方法，使用 GPS 以及可用的海拔、方向和速度信息。
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/geolocation/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/geolocation/src/definitions.ts
sidebar_label: 地理位置
translated: true
source_hash: 6f27580e
---
# @capacitor/geolocation

Geolocation API 提供获取和跟踪设备当前位置的简单方法，使用 GPS 以及可用的海拔、方向和速度信息。

## 安装

```bash
npm install @capacitor/geolocation
npx cap sync
```

## iOS 平台

Apple 要求在 `Info.plist` 中为位置信息指定隐私说明：

- `NSLocationAlwaysAndWhenInUseUsageDescription`（隐私 - 始终和使用时位置使用说明）
- `NSLocationWhenInUseUsageDescription`（隐私 - 使用时位置使用说明）

> [!NOTE]
> 此 Capacitor 插件不直接支持后台定位。然而，它依赖于
> [`ion-ios-geolocation`](https://github.com/ionic-team/ion-ios-geolocation)，它可以在
> 后台报告位置。因此，Apple 要求您在 `Info.plist` 中包含
> `NSLocationAlwaysAndWhenInUseUsageDescription` 条目。由于此权限
> 提示不会显示给用户，您可以安全地使用与
> `NSLocationWhenInUseUsageDescription` 相同的描述字符串。

阅读 [iOS 指南](https://capacitorjs.com/docs/ios) 中的 [配置 `Info.plist`](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist) 了解有关在 Xcode 中设置 iOS 权限的更多信息。

## Android 平台

此插件需要向 `AndroidManifest.xml` 添加以下权限：

```xml

<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.location.gps" />
```

前两个权限请求位置数据，包括粗略和精确位置，最后一行是可选的，但如果您的应用 _需要_ GPS 功能则必须。您可以省略它，但请注意，这可能导致您的应用安装在缺乏 GPS 硬件的设备上。

阅读 [Android 指南](https://capacitorjs.com/docs/android) 中的 [设置权限](https://capacitorjs.com/docs/android/configuration#setting-permissions) 了解有关设置 Android 权限的更多信息。

## API 参考

<docgen-index>

* [`getCurrentPosition(...)`](#getcurrentposition)
* [`watchPosition(...)`](#watchposition)
* [`clearWatch(...)`](#clearwatch)
* [`checkPermissions()`](#checkpermissions)
* [`requestPermissions(...)`](#requestpermissions)
* [Interfaces](#接口)
* [Type Aliases](#类型别名)

</docgen-index>

有关错误代码列表，请参阅 [错误](#错误)。

<docgen-api>


### getCurrentPosition(...)

```typescript
getCurrentPosition(options?: PositionOptions | undefined) => Promise<Position>
```

获取设备的当前 GPS 位置。

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#positionoptions">PositionOptions</a></code> |

**返回：** <code>Promise&lt;<a href="#position">Position</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### watchPosition(...)

```typescript
watchPosition(options: PositionOptions, callback: WatchPositionCallback) => Promise<CallbackID>
```

设置位置变化监听。请注意，监听位置变化会消耗大量电量。请仅在需要时进行监听。

| Param          | Type                                                                    |
| -------------- | ----------------------------------------------------------------------- |
| **`options`**  | <code><a href="#positionoptions">PositionOptions</a></code>             |
| **`callback`** | <code><a href="#watchpositioncallback">WatchPositionCallback</a></code> |

**返回：** <code>Promise&lt;string&gt;</code>

**自版本：** 1.0.0

--------------------


### clearWatch(...)

```typescript
clearWatch(options: ClearWatchOptions) => Promise<void>
```

清除指定的监听。

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#clearwatchoptions">ClearWatchOptions</a></code> |

**自版本：** 1.0.0

--------------------


### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

检查位置权限。如果系统定位服务已禁用，将抛出错误。

**返回：** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### requestPermissions(...)

```typescript
requestPermissions(permissions?: GeolocationPluginPermissions | undefined) => Promise<PermissionStatus>
```

请求位置权限。如果系统定位服务已禁用，将抛出错误。

在 Web 上不可用。

| Param             | Type                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------- |
| **`permissions`** | <code><a href="#geolocationpluginpermissions">GeolocationPluginPermissions</a></code> |

**返回：** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### 接口


#### Position

| 属性            | 类型                                                                                                                                                                                                                                                                                                       | 描述                                             | 自版本 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ----- |
| **`timestamp`** | <code>number</code>                                                                                                                                                                                                                                                                                        | 坐标的时间戳。                           | 1.0.0 |
| **`coords`**    | <code>\{ latitude: number; longitude: number; accuracy: number; altitudeAccuracy: number \| null; altitude: number \| null; speed: number \| null; heading: number \| null; magneticHeading: number \| null; trueHeading: number \| null; headingAccuracy: number \| null; course: number \| null; }</code> | GPS 坐标以及数据的精度。 | 1.0.0 |


#### PositionOptions

| 属性                         | 类型                 | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 默认值                | 自版本 |
| ---------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----- |
| **`enableHighAccuracy`**     | <code>boolean</code> | 高精度模式（例如 GPS，如果可用）。在 Android 12+ 设备上，如果用户未授予 ACCESS_FINE_LOCATION 权限（可通过 location 别名检查），将被忽略。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | <code>false</code>     | 1.0.0 |
| **`timeout`**                | <code>number</code>  | 位置更新的最长等待时间，以毫秒为单位。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | <code>10000</code>     | 1.0.0 |
| **`maximumAge`**             | <code>number</code>  | 可接受的缓存位置的最长使用时间，以毫秒为单位。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | <code>0</code>         | 1.0.0 |
| **`minimumUpdateInterval`**  | <code>number</code>  | `watchPosition` 的最小更新间隔。不要与 `interval` 混淆。如果位置更新可用速度超过此间隔，则仅在上次位置更新后最小更新间隔已过期时才会触发更新。此参数仅适用于 Android。对 iOS 或 Web 平台无效。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | <code>5000</code>      | 6.1.0 |
| **`interval`**               | <code>number</code>  | `watchPosition` 中接收位置更新的期望间隔（毫秒）。对于非常低的 `interval` 值（几秒或更少），平台可能无法保证及时的位置更新——它们可能比指定的时间更长。平台也可能能够提供比 `interval` 更快的位置更新。您可以使用 `minimumUpdateInterval` 来控制该行为。为了向后兼容 7.1.x 版本，如果未传递任何值，此参数的默认值为 `timeout` 的值。此参数仅适用于 Android。对 iOS 或 Web 平台无效。                                                                                                                                | <code>`timeout`</code> | 8.0.0 |
| **`enableLocationFallback`** | <code>boolean</code> | 是否在 Google Play Service 的位置设置检查失败时回退到 Android 框架的 `LocationManager`。这可能有多种原因——例如设备没有 Play Services 或设备没有网络连接（飞行模式）。如果设置为 `false`，失败将传播给调用者。请注意，`LocationManager` 可能不如 Google Play Services 实现有效。如果设备处于飞行模式，则仅使用 GPS 提供商，这可能需要更长时间才能返回位置，具体取决于 GPS 信号。这意味着要在这种情况下接收位置，您可能需要提供更高的超时时间。此参数仅适用于 Android。对 iOS 或 Web 平台无效。 | <code>true</code>      | 8.0.0 |


#### ClearWatchOptions

| 属性     | 类型                                              |
| -------- | ------------------------------------------------- |
| **`id`** | <code><a href="#callbackid">CallbackID</a></code> |


#### PermissionStatus

| 属性                 | 类型                                                        | 描述                                                                                                                                                                                                                                                                                                                                                        | 自版本 |
| -------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| **`location`**       | <code><a href="#permissionstate">PermissionState</a></code> | location 别名的权限状态。在 Android 上请求/检查 ACCESS_COARSE_LOCATION 和 ACCESS_FINE_LOCATION 权限。在 iOS 和 Web 上请求/检查位置权限。                                                                                                                                                                        | 1.0.0 |
| **`coarseLocation`** | <code><a href="#permissionstate">PermissionState</a></code> | coarseLocation 别名的权限状态。在 Android 上请求/检查 ACCESS_COARSE_LOCATION。在 Android 12+ 上，用户可以在近似位置（ACCESS_COARSE_LOCATION）或精确位置（ACCESS_FINE_LOCATION）之间选择，因此如果应用不需要高精度，可以使用此别名。在 iOS 和 Web 上，其值与 location 别名相同。 | 1.2.0 |


#### GeolocationPluginPermissions

| 属性              | 类型                                     |
| ----------------- | ---------------------------------------- |
| **`permissions`** | <code>GeolocationPermissionType[]</code> |


### 类型别名


#### WatchPositionCallback

<code>(position: <a href="#position">Position</a> | null, err?: any): void</code>


#### CallbackID

<code>string</code>


#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>


#### GeolocationPermissionType

<code>'location' | 'coarseLocation'</code>

</docgen-api>

### 错误

插件在原生 Android 和 iOS 上返回具有特定代码的特定错误。Web 不遵循此错误标准。

下表列出了所有插件错误：

| 错误代码           | 平台  | 消息                                  |
| -------------------- | ------------ | ---------------------------------------- |
| OS-PLUG-GLOC-0002 | Android, iOS | 尝试获取位置时出错。 |
| OS-PLUG-GLOC-0003 | Android, iOS | 位置权限请求被拒绝。 |
| OS-PLUG-GLOC-0004 | iOS          | 'getCurrentPosition' 输入参数无效。 |
| OS-PLUG-GLOC-0005 | iOS          | 'watchPosition' 输入参数无效。 |
| OS-PLUG-GLOC-0006 | iOS          | 'clearWatch' 输入参数无效。 |
| OS-PLUG-GLOC-0007 | Android, iOS | 定位服务未启用。 |
| OS-PLUG-GLOC-0008 | iOS          | 应用对位置服务的使用受到限制。 |
| OS-PLUG-GLOC-0009 | Android      | 启用位置的请求被拒绝。 |
| OS-PLUG-GLOC-0010 | Android, iOS | 无法及时获取位置。请尝试使用更高的超时时间。 |
| OS-PLUG-GLOC-0011 | Android      | 超时时间必须为正数。 |
| OS-PLUG-GLOC-0012 | Android      | 未找到 WatchId。 |
| OS-PLUG-GLOC-0013 | Android      | 需要提供 WatchId。 |
| OS-PLUG-GLOC-0014 | Android      | Google Play Services 错误，用户可解决。 |
| OS-PLUG-GLOC-0015 | Android      | Google Play Services 错误。 |
| OS-PLUG-GLOC-0016 | Android      | 位置设置错误。 |
| OS-PLUG-GLOC-0017 | Android      | 由于设备的网络和位置均已关闭，无法检索位置。 |
