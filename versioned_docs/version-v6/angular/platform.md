---
title: 平台
---

<head>
  <title>平台 | Ionic Platform 自定义应用适配任意设备</title>
  <meta
    name="description"
    content="Ionic Platform 服务可用于获取当前设备的信息。利用这些信息，你可以完全自定义应用以适配任意设备。"
  />
</head>

Platform 服务可用于获取当前设备的信息。你可以使用 `platforms` 方法获取与设备关联的所有平台信息，包括应用是否在平板上查看、是否在移动设备或浏览器上，以及确切的平台（iOS、Android 等）。你还可以获取设备的方向、是否使用从右到左的语言方向等等。有了这些信息，你可以完全自定义应用以适配任意设备。

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

### `is`

|                 |                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **描述**        | 根据用户所在的平台，`is(platformName)` 将返回 true 或 false。请注意，同一个应用对多个平台名称可能返回 true。例如，在 iPad 上运行的应用将对以下平台名称返回 true：`mobile`、`ios`、`ipad` 和 `tablet`。此外，如果应用是从 Cordova 运行的，则 `cordova` 将为 true。 |
| **签名**        | `is(platformName: Platforms) => boolean`                                                                                                                                                                                                                                                                                                                                  |

#### 参数

| 名称           | 类型        | 描述                                                                                                                                         |
| -------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `platformName` | `Platforms` | 平台名称。可用选项为 android, capacitor, cordova, desktop, electron, hybrid, ios, ipad, iphone, mobile, phablet, pwa, tablet |

#### 平台

以下是所有可能的平台值及其对应描述的表格。

| 平台名称   | 描述                              |
| ---------- | --------------------------------- |
| android    | 运行 Android 的设备              |
| capacitor  | 运行 Capacitor 的设备            |
| cordova    | 运行 Cordova 的设备              |
| desktop    | 桌面设备                         |
| electron   | 运行 Electron 的桌面设备         |
| hybrid     | 运行 Capacitor 或 Cordova 的设备 |
| ios        | 运行 iOS 的设备                  |
| ipad       | iPad 设备                        |
| iphone     | iPhone 设备                      |
| mobile     | 移动设备                         |
| mobileweb  | 在移动设备中运行的 Web 浏览器    |
| phablet    | 平板手机设备                     |
| pwa        | PWA 应用                         |
| tablet     | 平板设备                         |

#### 自定义平台检测函数

可以通过在全局 [Ionic 配置](../developing/config) 中提供替代函数来覆盖检测特定平台的函数。每个函数接受 `window` 作为参数并返回布尔值。

```tsx
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      platform: {
        /** 默认的 `desktop` 函数对带触摸屏的设备返回 false。
        * 这并非总是期望的行为，因此此函数改用 User Agent 进行测试。
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
| **描述**        | 根据你所使用的设备，`platforms` 可以返回多个值。每个可能的值都是平台的层次结构。例如，在 iPhone 上，它将返回 `mobile`、`ios` 和 `iphone`。 |
| **签名**        | `platforms() => string[]`                                                                                                                                                                               |

### `ready`

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **描述**        | 当平台准备就绪且可以调用原生功能时返回一个 promise。如果应用在 Web 浏览器中运行，则 promise 将在 DOM 准备好时 resolve。当应用在 Cordova 等应用引擎中运行时，promise 将在 Cordova 触发 `deviceready` 事件时 resolve。resolve 的值是 `readySource`，它指明了所使用的平台。 <br /><br />例如，当 Cordova 准备好时，resolve 的 ready source 是 `cordova`。默认的 ready source 值为 `dom`。`readySource` 在根据不同平台运行不同逻辑时很有用。例如，只有 Capacitor 和 Cordova 可以执行状态栏插件，因此 Web 不应运行状态栏插件逻辑。 |
| **签名**        | `ready() => Promise<string>`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### `isRTL`

|                 |                                                                                                                                                                                                                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **描述**        | 返回此应用是否使用从右到左的语言方向。我们建议应用的 `index.html` 文件已经设置了正确的 `dir` 属性值，如 `<html dir="ltr">` 或 `<html dir="rtl">`。[W3C：HTML 中的结构标记与从右到左文本](http://www.w3.org/International/questions/qa-html-dir) |
| **签名**        | `isRTL() => boolean`                                                                                                                                                                                                                                                                                                               |

### `isLandscape`

|                 |                                                 |
| --------------- | ----------------------------------------------- |
| **描述**        | 如果应用处于横屏模式，则返回 `true`。 |
| **签名**        | `isLandscape() => boolean`                      |

### `isPortrait`

|                 |                                                |
| --------------- | ---------------------------------------------- |
| **描述**        | 如果应用处于竖屏模式，则返回 `true`。 |
| **签名**        | `isPortrait() => boolean`                      |

### `width`

|                 |                                                                      |
| --------------- | -------------------------------------------------------------------- |
| **描述**        | 使用 `window.innerWidth` 获取平台视口的宽度。 |
| **签名**        | `width() => number`                                                  |

### `height`

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **描述**        | 使用 `window.innerHeight` 获取平台视口的高度。 |
| **签名**        | `height() => number`                                                   |

### `url`

|                 |                      |
| --------------- | -------------------- |
| **描述**        | 获取当前 URL。       |
| **签名**        | `url() => string`    |

### `testUserAgent`

|                 |                                                                        |
| --------------- | ---------------------------------------------------------------------- |
| **描述**        | 如果表达式包含在 user agent 字符串中，则返回 `true`。 |
| **签名**        | `testUserAgent(expression: string) => boolean`                         |

#### 参数

| 名称       | 类型   | 描述                           |
| ---------- | ------ | ------------------------------ |
| expression | string | 要在 user agent 中检查的字符串  |

## 事件

### `pause`

`pause` 事件在原生平台将应用置于后台时触发，通常发生在用户切换到其他应用时。此事件在 Cordova/Capacitor 应用被置于后台时触发，但在标准 Web 浏览器中不会触发。

#### 示例

```tsx
this.platform.pause.subscribe(async () => {
  alert('Pause event detected');
});
```

### `resize`

`resize` 事件在浏览器窗口尺寸发生变化时触发。可能是由于浏览器窗口被物理调整大小，或设备方向改变。

#### 示例

```tsx
this.platform.resize.subscribe(async () => {
  alert('Resize event detected');
});
```

### `resume`

`resume` 事件在原生平台将应用从后台拉回时触发。此事件在 Cordova/Capacitor 应用从后台恢复时触发，但在标准 Web 浏览器中不会触发。

#### 示例

```tsx
this.platform.resume.subscribe(async () => {
  alert('Resume event detected');
});
```
