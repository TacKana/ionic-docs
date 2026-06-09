---
title: 状态栏 - Capacitor 插件 API
description: StatusBar API 提供配置状态栏样式以及显示或隐藏状态栏的方法。
editUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/status-bar/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/main/status-bar/src/definitions.ts
sidebar_label: 状态栏
translated: true
source_hash: 1d00520f
---
# @capacitor/status-bar

StatusBar API 提供配置状态栏样式以及显示或隐藏状态栏的方法。

## 安装

```bash
npm install @capacitor/status-bar
npx cap sync
```

## Android 16+ 行为变更

对于使用 **Capacitor 8**、目标为 **Android 16（API 级别 36）** 及更高版本的应用，以下 Status Bar 配置选项 **不再有效**：

- `overlaysWebView`
- `backgroundColor`

这些选项依赖于选择退出 Android 的**边到边**系统 UI 行为的能力，该行为允许应用控制状态栏的覆盖方式及其背景颜色。

在 **Android 15（API 级别 35）** 中，仍然可以通过在应用布局文件中设置 `windowOptOutEdgeToEdgeEnforcement` 属性来选择退出此强制行为。如果没有该属性，应用将假定 `overlaysWebView` 始终为 `true`。更多详情请参阅 Android 文档：[https://developer.android.com/reference/android/R.attr#windowOptOutEdgeToEdgeEnforcement](https://developer.android.com.reference/android/R.attr#windowOptOutEdgeToEdgeEnforcement)

从 **Android 16** 开始，此选择退出选项**不再可用**，该行为由系统强制执行。因此，`overlaysWebView` 和 `backgroundColor` 配置选项不再有任何效果。

## iOS 注意

此插件需要在 `Info.plist` 中将 "View controller-based status bar appearance"（`UIViewControllerBasedStatusBarAppearance`）设置为 `YES`。阅读 [配置 iOS](https://capacitorjs.com/docs/ios/configuration) 获取帮助。

状态栏可见性默认为可见，样式默认为 `Style.Default`。您可以通过在 `Info.plist` 中添加 `UIStatusBarHidden` 和/或 `UIStatusBarStyle` 来更改这些默认值。

## 示例

```typescript
import { StatusBar, Style } from '@capacitor/status-bar';

// 仅 iOS
window.addEventListener('statusTap', function () {
  console.log('statusbar tapped');
});

// 在透明状态栏下显示内容
StatusBar.setOverlaysWebView({ overlay: true });

const setStatusBarStyleDark = async () => {
  await StatusBar.setStyle({ style: Style.Dark });
};

const setStatusBarStyleLight = async () => {
  await StatusBar.setStyle({ style: Style.Light });
};

const hideStatusBar = async () => {
  await StatusBar.hide();
};

const showStatusBar = async () => {
  await StatusBar.show();
};
```

## 配置

<docgen-config>

可用的配置值：

| 属性                  | 类型                 | 描述                                                                                                                               | 默认值              | 自版本 |
| --------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ----- |
| **`overlaysWebView`** | <code>boolean</code> | 状态栏是否覆盖。在 Android 15+ 上不可用。                                                                   | <code>true</code>    | 1.0.0 |
| **`style`**           | <code>string</code>  | 状态栏文本的样式。                                                                                 | <code>default</code> | 1.0.0 |
| **`backgroundColor`** | <code>string</code>  | 状态栏背景颜色，十六进制格式 #RRGGBB。如果 `overlaysWebView` 为 true 则无效。在 Android 15+ 上不可用。 | <code>#000000</code> | 1.0.0 |

### 示例

在 `capacitor.config.json` 中：

```json
{
  "plugins": {
    "StatusBar": {
      "overlaysWebView": false,
      "style": "DARK",
      "backgroundColor": "#ffffffff"
    }
  }
}
```

在 `capacitor.config.ts` 中：

```ts
/// <reference types="@capacitor/status-bar" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    StatusBar: {
      overlaysWebView: false,
      style: "DARK",
      backgroundColor: "#ffffffff",
    },
  },
};

export default config;
```

</docgen-config>

## API 参考

<docgen-index>

* [`setStyle(...)`](#setstyle)
* [`setBackgroundColor(...)`](#setbackgroundcolor)
* [`show(...)`](#show)
* [`hide(...)`](#hide)
* [`getInfo()`](#getinfo)
* [`setOverlaysWebView(...)`](#setoverlayswebview)
* [`addListener('statusBarVisibilityChanged', ...)`](#addlistenerstatusbarvisibilitychanged-)
* [`addListener('statusBarOverlayChanged', ...)`](#addlistenerstatusbaroverlaychanged-)
* [Interfaces](#接口)
* [Type Aliases](#类型别名)
* [Enums](#枚举)

</docgen-index>

<docgen-api>


### setStyle(...)

```typescript
setStyle(options: StyleOptions) => Promise<void>
```

设置状态栏的当前样式。

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#styleoptions">StyleOptions</a></code> |

**自版本：** 1.0.0

--------------------


### setBackgroundColor(...)

```typescript
setBackgroundColor(options: BackgroundColorOptions) => Promise<void>
```

设置状态栏的背景颜色。如果样式设置为默认值，调用此函数会更新状态栏的前景色，但 iOS 17 以下版本除外。在 Android 15+ 上不可用。

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#backgroundcoloroptions">BackgroundColorOptions</a></code> |

**自版本：** 1.0.0

--------------------


### show(...)

```typescript
show(options?: AnimationOptions | undefined) => Promise<void>
```

显示状态栏。在 iOS 上，如果状态栏最初是隐藏的且初始样式设置为 `UIStatusBarStyleLightContent`，第一次 show 调用的动画可能显示文本先为深色再过渡到浅色的闪烁问题。建议在第一次调用时使用 <a href="#animation">`Animation.None`</a> 作为动画。

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#animationoptions">AnimationOptions</a></code> |

**自版本：** 1.0.0

--------------------


### hide(...)

```typescript
hide(options?: AnimationOptions | undefined) => Promise<void>
```

隐藏状态栏。

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#animationoptions">AnimationOptions</a></code> |

**自版本：** 1.0.0

--------------------


### getInfo()

```typescript
getInfo() => Promise<StatusBarInfo>
```

获取关于状态栏当前状态的信息。

**返回：** <code>Promise&lt;<a href="#statusbarinfo">StatusBarInfo</a>&gt;</code>

**自版本：** 1.0.0

--------------------


### setOverlaysWebView(...)

```typescript
setOverlaysWebView(options: SetOverlaysWebViewOptions) => Promise<void>
```

设置状态栏是否应覆盖 WebView，以使用其下方的空间。在 Android 15+ 上不可用。

| Param         | Type                                                                            |
| ------------- | ------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#setoverlayswebviewoptions">SetOverlaysWebViewOptions</a></code> |

**自版本：** 1.0.0

--------------------


### addListener('statusBarVisibilityChanged', ...)

```typescript
addListener(eventName: 'statusBarVisibilityChanged', listenerFunc: VisibilityChangeListener) => Promise<PluginListenerHandle>
```

监听状态栏可见性变化。当调用 hide 或 show 方法时触发。

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`eventName`**    | <code>'statusBarVisibilityChanged'</code>                                     |
| **`listenerFunc`** | <code><a href="#visibilitychangelistener">VisibilityChangeListener</a></code> |

**返回：** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

**自版本：** 7.0.0

--------------------


### addListener('statusBarOverlayChanged', ...)

```typescript
addListener(eventName: 'statusBarOverlayChanged', listenerFunc: OverlayChangeListener) => Promise<PluginListenerHandle>
```

监听状态栏覆盖变化。当调用 setOverlaysWebView 时触发。

| Param              | Type                                                                    |
| ------------------ | ----------------------------------------------------------------------- |
| **`eventName`**    | <code>'statusBarOverlayChanged'</code>                                  |
| **`listenerFunc`** | <code><a href="#overlaychangelistener">OverlayChangeListener</a></code> |

**返回：** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

**自版本：** 7.0.0

--------------------


### 接口


#### StyleOptions

| 属性        | 类型                                    | 描述                                               | 自版本 |
| ----------- | --------------------------------------- | --------------------------------------------------------- | ----- |
| **`style`** | <code><a href="#style">Style</a></code> | 状态栏文本的样式。 | 1.0.0 |


#### BackgroundColorOptions

| 属性        | 类型                | 描述                                       | 自版本 |
| ----------- | ------------------- | ------------------------------------------------- | ----- |
| **`color`** | <code>string</code> | 状态栏颜色设置的十六进制颜色值。 | 1.0.0 |


#### AnimationOptions

| 属性            | 类型                                            | 描述                                                                                         | 默认值                     | 自版本 |
| --------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------- | ----- |
| **`animation`** | <code><a href="#animation">Animation</a></code> | 显示或隐藏时使用的状态栏动画类型。此选项仅在 iOS 上受支持。 | <code>Animation.Fade</code> | 1.0.0 |


#### StatusBarInfo

| 属性           | 类型                                    | 描述                                | 自版本 |
| -------------- | --------------------------------------- | ------------------------------------------ | ----- |
| **`visible`**  | <code>boolean</code>                    | 状态栏是否可见。  | 1.0.0 |
| **`style`**    | <code><a href="#style">Style</a></code> | 当前状态栏样式。              | 1.0.0 |
| **`color`**    | <code>string</code>                     | 当前状态栏颜色。              | 1.0.0 |
| **`overlays`** | <code>boolean</code>                    | 状态栏是否覆盖。 | 1.0.0 |
| **`height`**   | <code>number</code>                     | 状态栏的高度。              | 7.0.0 |


#### SetOverlaysWebViewOptions

| 属性          | 类型                 | 描述                               | 自版本 |
| ------------- | -------------------- | ----------------------------------------- | ----- |
| **`overlay`** | <code>boolean</code> | 是否覆盖状态栏。 | 1.0.0 |


#### PluginListenerHandle

| 属性         | 类型                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### 类型别名


#### VisibilityChangeListener

<code>(info: <a href="#statusbarinfo">StatusBarInfo</a>): void</code>


#### OverlayChangeListener

<code>(info: <a href="#statusbarinfo">StatusBarInfo</a>): void</code>


### 枚举


#### Style

| 成员       | 值                  | 描述                                                                                                                                                                          | 自版本 |
| ------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| **`Dark`**    | <code>'DARK'</code>    | 深色背景上的浅色文本。                                                                                                                                                     | 1.0.0 |
| **`Light`**   | <code>'LIGHT'</code>   | 浅色背景上的深色文本。                                                                                                                                                     | 1.0.0 |
| **`Default`** | <code>'DEFAULT'</code> | 样式基于设备外观。如果设备使用深色模式，状态栏文本将为浅色。如果设备使用浅色模式，状态栏文本将为深色。 | 1.0.0 |


#### Animation

| 成员     | 值                | 描述                                                   | 自版本 |
| ----------- | -------------------- | ------------------------------------------------------------- | ----- |
| **`None`**  | <code>'NONE'</code>  | 显示/隐藏时无动画。                                | 1.0.0 |
| **`Slide`** | <code>'SLIDE'</code> | 显示/隐藏时的滑动动画。在 iOS 15+ 上无效。 | 1.0.0 |
| **`Fade`**  | <code>'FADE'</code>  | 显示/隐藏时的淡入淡出动画。                              | 1.0.0 |

</docgen-api>
