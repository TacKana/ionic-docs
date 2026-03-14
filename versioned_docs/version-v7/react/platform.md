# 平台

## isPlatform

`isPlatform` 方法可用于测试你的应用是否在特定平台上运行：

```tsx
import { isPlatform } from '@ionic/react';

isPlatform('ios'); // 在 iOS 设备上运行时返回 true
```

根据用户所在的平台，`isPlatform(platformName)` 将返回 true 或 false。请注意，同一个应用可能对多个平台名称返回 true。例如，在 iPad 上运行的应用会对以下平台名称返回 true：mobile、ios、ipad 和 tablet。此外，如果应用是从 Cordova 运行的，那么 cordova 也会返回 true。

## getPlatforms

`getPlatforms` 方法可用于确定你的应用当前正在哪些平台上运行：

```tsx
import { getPlatforms } from '@ionic/react';

getPlatforms(); // 在 iPhone 上返回 ["iphone", "ios", "mobile", "mobileweb"]
```

根据你所在的设备，`getPlatforms` 可能返回多个值。每个可能的值都是平台的层级结构。例如，在 iPhone 上，它会返回 mobile、ios 和 iphone。

## 平台

下表列出了所有可能的平台值及其对应描述：

| 平台名称   | 描述                                      |
| ---------- | ----------------------------------------- |
| android    | 运行 Android 的设备                       |
| capacitor  | 运行 Capacitor 的设备                     |
| cordova    | 运行 Cordova 的设备                       |
| desktop    | 桌面设备                                  |
| electron   | 运行 Electron 的桌面设备                  |
| hybrid     | 运行 Capacitor 或 Cordova 的设备          |
| ios        | 运行 iOS 的设备                           |
| ipad       | iPad 设备                                 |
| iphone     | iPhone 设备                               |
| mobile     | 移动设备                                  |
| mobileweb  | 在移动设备中运行的 Web 浏览器             |
| phablet    | 平板手机设备                              |
| pwa        | PWA 应用                                  |
| tablet     | 平板设备                                  |

## 自定义平台检测函数

可以通过在全局 [Ionic 配置](../developing/config) 中提供替代函数来覆盖用于检测特定平台的函数。每个函数以 `window` 作为参数并返回布尔值：

```tsx
setupIonicReact({
  platform: {
    /** 默认的 `desktop` 函数对带触摸屏的设备返回 false。
     * 但这并不总是我们想要的，因此此函数改为测试用户代理。
     **/
    desktop: (win) => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
      return !isMobile;
    },
  },
});
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