---
title: App Launcher Capacitor 插件 API
description: AppLauncher API 允许打开其他应用
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/app-launcher/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/app-launcher/src/definitions.ts
sidebar_label: App Launcher
translated: true
source_hash: 29276e34
---
# @capacitor/app-launcher

AppLauncher API 允许您的应用检查某个应用是否可以打开并打开它。

在 iOS 上，您只能通过已知的 URL 方案打开应用。

在 Android 上，您可以通过已知的 URL 方案或使用其公开的包名来打开应用。

**注意：** 在 [Android 11](https://developer.android.com/about/versions/11/privacy/package-visibility) 及更高版本上，您必须在 `AndroidManifest.xml` 的 `queries` 标签中添加要查询的应用包名或 URL 方案。

示例：
```xml
<queries>
  
  <package android:name="com.twitter.android" />
  
  <intent>
      <action android:name="android.intent.action.VIEW"/>
      <data android:scheme="twitter"/>
  </intent>
</queries>
```

## 安装

```bash
npm install @capacitor/app-launcher
npx cap sync
```

## 示例

```typescript
import { AppLauncher } from '@capacitor/app-launcher';

const checkCanOpenTwitterUrl = async () => {
  const { value } = await AppLauncher.canOpenUrl({ url: 'twitter://timeline' });
  console.log('Can open url: ', value);
};

const openTwitterUrl = async () => {
  const { completed } = await AppLauncher.openUrl({ url: 'twitter://timeline' });
  console.log('openUrl completed: ', completed);
};

// Android only
const checkCanOpenTwitterPackage = async () => {
  const { value } = await AppLauncher.canOpenUrl({ url: 'com.twitter.android' });
  console.log('Can open package: ', value);
};

// Android only
const openTwitterPackage = async () => {
  const { completed } = await AppLauncher.openUrl({ url: 'com.twitter.android' });
  console.log('openUrl package completed: ', completed);
};
```

## API

<docgen-index>

* [`canOpenUrl(...)`](#canopenurl)
* [`openUrl(...)`](#openurl)
* [Interfaces](#接口)

</docgen-index>

<docgen-api>


### canOpenUrl(...)

```typescript
canOpenUrl(options: CanOpenURLOptions) => Promise<CanOpenURLResult>
```

检查是否可以使用给定的 URL 打开某个应用。

在 iOS 上，您必须声明传递给此方法的 URL 方案，方法是向应用的 `Info.plist` 文件添加
`LSApplicationQueriesSchemes` 键。
了解更多关于配置
[`Info.plist`](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist) 的信息。

对于未声明的方案，此方法始终返回 false，无论是否安装了相应的
应用。要了解有关此键的更多信息，请参阅
[LSApplicationQueriesSchemes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/plist/info/LSApplicationQueriesSchemes)。

在 Android 上，URL 可以是已知的 URLScheme 或应用包名。

在 [Android 11](https://developer.android.com/about/versions/11/privacy/package-visibility)
及更高版本上，您必须在 `AndroidManifest.xml` 的 `queries` 标签内添加要查询的应用包名或 URL 方案。

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#canopenurloptions">CanOpenURLOptions</a></code> |

**返回：** <code>Promise&lt;<a href="#canopenurlresult">CanOpenURLResult</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### openUrl(...)

```typescript
openUrl(options: OpenURLOptions) => Promise<OpenURLResult>
```

使用给定的 URL 打开一个应用。
在 iOS 上，URL 应该是一个已知的 URLScheme。
在 Android 上，URL 可以是已知的 URLScheme 或应用包名。

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#openurloptions">OpenURLOptions</a></code> |

**返回：** <code>Promise&lt;<a href="#openurlresult">OpenURLResult</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### 接口


#### CanOpenURLResult

| 属性        | 类型                 |
| ----------- | -------------------- |
| **`value`** | <code>boolean</code> |


#### CanOpenURLOptions

| 属性      | 类型                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |


#### OpenURLResult

| 属性            | 类型                 |
| --------------- | -------------------- |
| **`completed`** | <code>boolean</code> |


#### OpenURLOptions

| 属性      | 类型                |
| --------- | ------------------- |
| **`url`** | <code>string</code> |

</docgen-api>
