---
title: Platform | Ionic Platform 服务使应用适配任意设备
description: Ionic Platform 服务可用于获取有关当前设备的信息。利用这些信息，您可以完全自定义应用以适配任意设备。
sidebar_label: Platform
---

# Platform

Platform 服务可用于获取有关当前设备的信息。您可以使用 `platforms` 方法获取与设备关联的所有平台信息，包括应用是否在平板上查看、是否在移动设备或浏览器上运行，以及具体的平台（iOS、Android 等）。您还可以获取设备的方向、是否使用从右到左的语言方向等等。利用这些信息，您可以完全自定义应用以适配任意设备。

## 使用方法

```tsx
import { Platform } from '@ionic/angular';

@Component({...})
export class MyPage {
  constructor(public platform: Platform) {

  }
}
```

## 方法

### `is(platformName: Platforms) => boolean`

根据用户所在的平台，`is(platformName)` 将返回 true 或 false。请注意，同一个应用可能对多个平台名称返回 true。例如，在 iPad 上运行的应用将对以下平台名称返回 true：`mobile`、`ios`、`ipad` 和 `tablet`。此外，如果应用是从 Cordova 运行的，则 `cordova` 将为 true。

#### 参数

| 名称           | 类型        | 描述                                                                                                                              |
| -------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `platformName` | `Platforms` | 平台名称。可用选项包括 android、capacitor、cordova、desktop、electron、hybrid、ios、ipad、iphone、mobile、phablet、pwa、tablet |

#### 平台

下表列出了所有可能的平台值及其相应描述。

| 平台名称   | 描述                              |
| ---------- | --------------------------------- |
| android    | 运行 Android 的设备                 |
| capacitor  | 运行 Capacitor 的设备               |
| cordova    | 运行 Cordova 的设备                 |
| desktop    | 桌面设备                         |
| electron   | 运行 Electron 的桌面设备            |
| hybrid     | 运行 Capacitor 或 Cordova 的设备    |
| ios        | 运行 iOS 的设备                     |
| ipad       | iPad 设备                           |
| iphone     | iPhone 设备                         |
| mobile     | 移动设备                          |
| mobileweb  | 在移动设备中运行的 Web 浏览器 |
| phablet    | 平板手机设备                         |
| pwa        | PWA 应用                                |
| tablet     | 平板设备                          |

### `platforms() => string[]`

根据您所使用的设备，`platforms` 可以返回多个值。每个可能的值是一个平台层次结构。例如，在 iPhone 上，它将返回 `mobile`、`ios` 和 `iphone`。

### `ready() => Promise<string>`

返回一个 promise，当平台准备就绪并且可以调用原生功能时该 promise 被解析。如果应用在 Web 浏览器内运行，则 promise 将在 DOM 准备就绪时解析。当应用在 Cordova 等应用引擎中运行时，则 promise 将在 Cordova 触发 `deviceready` 事件时解析。解析值是 `readySource`，它指明了所使用的平台。

例如，当 Cordova 准备就绪时，解析的 ready source 是 `cordova`。默认的 ready source 值为 `dom`。`readySource` 在需要根据应用运行的平台执行不同逻辑时非常有用。例如，只有 Capacitor 和 Cordova 可以执行状态栏插件，因此 Web 不应运行状态栏插件逻辑。

### `isRTL() => boolean`

返回此应用是否使用从右到左的语言方向。我们建议应用的 `index.html` 文件已经设置了正确的 `dir` 属性值，例如 `<html dir="ltr">` 或 `<html dir="rtl">`。[W3C：HTML 中的结构标记和从右到左文本](http://www.w3.org/International/questions/qa-html-dir)

### `isLandscape() => boolean`

如果应用处于横屏模式，则返回 `true`。

### `isPortrait() => boolean`

如果应用处于竖屏模式，则返回 `true`。

### `width() => number`

使用 `window.innerWidth` 获取平台视口的宽度。

### `height() => number`

使用 `window.innerHeight` 获取平台视口的高度。

### `url() => string`

获取当前 URL。

### `testUserAgent(expression: string) => boolean`

如果 user agent 字符串中包含该表达式，则返回 `true`。

### 参数

| 名称       | 类型   | 描述                           |
| ---------- | ------ | ------------------------------ |
| expression | string | 要在 user agent 中检查的字符串 |

## 事件

### `pause`

当原生平台将应用置于后台时（通常当用户切换到其他应用时），`pause` 事件会触发。此事件在 Cordova/Capacitor 应用被置于后台时触发，但在标准 Web 浏览器中不会触发。

#### 使用方法

```tsx
this.platform.pause.subscribe(async () => {
  alert('检测到暂停事件');
});
```

### `resize`

当浏览器窗口尺寸发生变化时，`resize` 事件会触发。这可能是由于浏览器窗口被物理调整大小，或者设备改变了方向。

#### 使用方法

```tsx
this.platform.resize.subscribe(async () => {
  alert('检测到调整大小事件');
});
```

### `resume`

当原生平台将应用从后台拉回时，`resume` 事件会触发。此事件在 Cordova/Capacitor 应用从后台恢复时触发，但在标准 Web 浏览器中不会触发。

#### 使用方法

```tsx
this.platform.resume.subscribe(async () => {
  alert('检测到恢复事件');
});
```
