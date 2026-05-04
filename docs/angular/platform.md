---
title: Platform
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Platform | Ionic 平台服务，为任意设备定制应用</title>
  <meta
    name="description"
    content="Ionic Platform 服务可用于获取当前设备信息。利用这些信息，您可以完全定制应用以适应任何设备。"
  />
</head>

Platform 服务可用于获取当前设备的信息。您可以使用 `platforms` 方法获取与设备相关的所有平台信息，包括应用是否在平板电脑上运行、是否在移动设备或浏览器中查看，以及具体的平台（iOS、Android 等）。您还可以获取设备的方向、是否使用从右到左的语言方向等等。利用这些信息，您可以完全定制应用以适应任何设备。

## 使用方法

<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
  ]}
>
<TabItem value="angular">

```tsx
import { Platform } from '@ionic/angular';

@Component({...})
export class MyPage {
  constructor(public platform: Platform) {

  }
}
```

</TabItem>
<TabItem value="angular-standalone">

```tsx
import { Platform } from '@ionic/angular/standalone';

@Component({...})
export class MyPage {
  constructor(public platform: Platform) {

  }
}
```

</TabItem>
</Tabs>

## 方法

### `is`

|                 |                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **说明**        | 根据用户所在的平台，`is(platformName)` 将返回 true 或 false。请注意，同一个应用可能对多个平台名称返回 true。例如，在 iPad 上运行的应用会对以下平台名称返回 true：`mobile`、`ios`、`ipad` 和 `tablet`。此外，如果应用是从 Cordova 运行的，那么 `cordova` 将为 true。                                                                                                          |
| **签名**        | `is(platformName: Platforms) => boolean`                                                                                                                                                                                                                                                                                                                                  |

#### 参数

| 参数名           | 类型        | 描述                                                                                                                                         |
| ---------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `platformName`   | `Platforms` | 平台名称。可用选项包括 android、capacitor、cordova、desktop、electron、hybrid、ios、ipad、iphone、mobile、phablet、pwa、tablet                |

#### 平台列表

下表列出了所有可能的平台值及其对应的描述。

| 平台名称   | 描述                               |
| ---------- | ---------------------------------- |
| android    | 运行 Android 的设备                |
| capacitor  | 运行 Capacitor 的设备              |
| cordova    | 运行 Cordova 的设备                |
| desktop    | 桌面设备                           |
| electron   | 运行 Electron 的桌面设备           |
| hybrid     | 运行 Capacitor 或 Cordova 的设备   |
| ios        | 运行 iOS 的设备                    |
| ipad       | iPad 设备                          |
| iphone     | iPhone 设备                        |
| mobile     | 移动设备                           |
| mobileweb  | 在移动设备中运行的网页浏览器       |
| phablet    | 平板手机设备                       |
| pwa        | PWA 应用                           |
| tablet     | 平板设备                           |

<LegacyAnchor id="customizing-platform-detection-methods" />

#### 自定义平台检测函数

可以通过在全局 [Ionic 配置](../developing/config) 中提供替代函数来覆盖用于检测特定平台的函数。每个函数都以 `window` 作为参数并返回一个布尔值。

```tsx
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      platform: {
        /** 默认的 `desktop` 函数对于带有触摸屏的设备返回 false。
        * 这并不总是我们想要的，因此此函数改为测试用户代理。
        **/
        'desktop': (win) => {
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
          return !isMobile;
        }
      },
    }),
    AppRoutingModule
  ],
  ...
})
```

```ts
type PlatformConfig = {
  android?: ((win: Window) => boolean) | undefined;
  capacitor?: ((win: Window) => boolean) | undefined;
  cordova?: ((win: Window) => boolean) | undefined;
  desktop?: ((win: Window) => boolean) | undefined;
  electron?: ((win: Window) => boolean) | undefined;
  hybrid?: ((win: Window) => boolean) | undefined;
  ios?: ((win: Window) => boolean) | undefined;
  ipad?: ((win: Window) => boolean) | undefined;
  iphone?: ((win: Window) => boolean) | undefined;
  mobile?: ((win: Window) => boolean) | undefined;
  mobileweb?: ((win: Window) => boolean) | undefined;
  phablet?: ((win: Window) => boolean) | undefined;
  pwa?: ((win: Window) => boolean) | undefined;
  tablet?: ((win: Window) => boolean) | undefined;
};
```

### `platforms`

|                 |                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **说明**        | 根据您所在的设备，`platforms` 可以返回多个值。每个可能的值都是一个平台层次结构。例如，在 iPhone 上，它将返回 `mobile`、`ios` 和 `iphone`。                                                               |
| **签名**        | `platforms() => string[]`                                                                                                                                                                               |

### `ready`

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **说明**        | 当平台准备就绪且可以调用原生功能时返回一个 Promise。如果应用运行在网页浏览器中，则当 DOM 准备就绪时 Promise 会解析。当应用运行在应用引擎（如 Cordova）中时，则当 Cordova 触发 `deviceready` 事件时 Promise 会解析。解析后的值是 `readySource`，它说明了所使用的平台。<br /><br />例如，当 Cordova 准备就绪时，解析后的 ready source 是 `cordova`。默认的 ready source 值是 `dom`。`readySource` 很有用，因为根据应用运行的平台可能需要运行不同的逻辑。例如，只有 Capacitor 和 Cordova 可以执行状态栏插件，因此网页端不应运行状态栏插件逻辑。 |
| **签名**        | `ready() => Promise<string>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### `isRTL`

|                 |                                                                                                                                                                                                                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **说明**        | 返回此应用是否使用从右到左的语言方向。我们建议应用的 `index.html` 文件已经设置了正确的 `dir` 属性值，例如 `<html dir="ltr">` 或 `<html dir="rtl">`。 [W3C: HTML 中的结构化标记和从右到左文本](http://www.w3.org/International/questions/qa-html-dir)                                                                                |
| **签名**        | `isRTL() => boolean`                                                                                                                                                                                                                                                                                                               |

### `isLandscape`

|                 |                                                 |
| --------------- | ----------------------------------------------- |
| **说明**        | 如果应用处于横屏模式，则返回 `true`。           |
| **签名**        | `isLandscape() => boolean`                      |

### `isPortrait`

|                 |                                                |
| --------------- | ---------------------------------------------- |
| **说明**        | 如果应用处于竖屏模式，则返回 `true`。          |
| **签名**        | `isPortrait() => boolean`                      |

### `width`

|                 |                                                                      |
| --------------- | -------------------------------------------------------------------- |
| **说明**        | 使用 `window.innerWidth` 获取平台视口的宽度。                        |
| **签名**        | `width() => number`                                                  |

### `height`

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **说明**        | 使用 `window.innerHeight` 获取平台视口的高度。                         |
| **签名**        | `height() => number`                                                   |

### `url`

|                 |                      |
| --------------- | -------------------- |
| **说明**        | 获取当前 URL。       |
| **签名**        | `url() => string`    |

### `testUserAgent`

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **说明**        | 如果表达式包含在用户代理字符串中，则返回 `true`。                      |
| **签名**        | `testUserAgent(expression: string) => boolean`                         |

#### 参数

| 参数名     | 类型   | 描述                           |
| ---------- | ------ | ------------------------------ |
| expression | string | 要在用户代理中检查的字符串     |

## 事件

### `pause`

当原生平台将应用程序置于后台时（通常是用户切换到另一个应用时），会触发 `pause` 事件。当 Cordova/Capacitor 应用被置于后台时，此事件会触发，但在标准网页浏览器中不会触发。

#### 示例

```tsx
this.platform.pause.subscribe(async () => {
  alert('检测到暂停事件');
});
```

### `resize`

当浏览器窗口的尺寸发生变化时，会触发 `resize` 事件。这可能是由于浏览器窗口被物理调整大小，或者是由于设备方向发生变化。

#### 示例

```tsx
this.platform.resize.subscribe(async () => {
  alert('检测到调整大小事件');
});
```

### `resume`

当原生平台将应用程序从后台拉出时，会触发 `resume` 事件。当 Cordova/Capacitor 应用从后台恢复时，此事件会触发，但在标准网页浏览器中不会触发。

#### 示例

```tsx
this.platform.resume.subscribe(async () => {
  alert('检测到恢复事件');
});
```
