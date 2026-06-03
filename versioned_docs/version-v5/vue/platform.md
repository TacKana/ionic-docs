# 平台

## isPlatform

`isPlatform` 方法可用于测试您的应用是否在特定平台上运行：

```tsx
import { isPlatform } from '@ionic/vue';

isPlatform('ios'); // 在 iOS 设备上运行时返回 true
```

根据用户所在的平台，`isPlatform(platformName)` 将返回 true 或 false。请注意，同一应用可以对多个平台名称返回 true。例如，从 iPad 运行的应用将对以下平台名称返回 true：mobile、ios、ipad 和 tablet。此外，如果应用是从 Cordova 运行的，则 cordova 将为 true。

## getPlatforms

`getPlatforms` 方法可用于确定您的应用当前正在哪些平台上运行。

```tsx
import { getPlatforms } from '@ionic/vue';

getPlatforms(); // 从 iPhone 返回 ["iphone", "ios", "mobile", "mobileweb"]
```

根据您使用的设备，`getPlatforms` 可以返回多个值。每个可能的值是一个平台层次结构。例如，在 iPhone 上，它将返回 mobile、ios 和 iphone。

## 平台列表

以下是所有可能的平台值及其对应描述的表格。

| 平台名称   | 描述                             |
| ---------- | -------------------------------- |
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
| mobileweb  | 在移动设备上运行的 Web 浏览器    |
| phablet    | 平板手机设备                     |
| pwa        | PWA 应用                         |
| tablet     | 平板设备                         |
