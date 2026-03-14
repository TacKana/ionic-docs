# 平台

## isPlatform 方法

`isPlatform` 方法可用于检测您的应用是否运行在特定平台上：

```tsx
import { isPlatform } from '@ionic/vue';

isPlatform('ios'); // 在 iOS 设备上运行时返回 true
```

根据用户所在的平台，isPlatform(platformName) 将返回 true 或 false。请注意，同一个应用可能对多个平台名称返回 true。例如，在 iPad 上运行的应用会对以下平台名称返回 true：mobile、ios、ipad 和 tablet。此外，如果应用运行在 Cordova 上，则 cordova 会返回 true。

## getPlatforms 方法

`getPlatforms` 方法可用于确定您的应用当前运行在哪些平台上。

```tsx
import { getPlatforms } from '@ionic/vue';

getPlatforms(); // 在 iPhone 上返回 ["iphone", "ios", "mobile", "mobileweb"]
```

根据您所在的设备，`getPlatforms` 可能返回多个值。每个可能的值代表一个平台层级。例如，在 iPhone 上，它会返回 mobile、ios 和 iphone。

## 平台列表

下表列出了所有可能的平台值及其对应描述。

| 平台名称    | 描述                                   |
| ----------- | -------------------------------------- |
| android     | 运行 Android 的设备                    |
| capacitor   | 运行 Capacitor 的设备                  |
| cordova     | 运行 Cordova 的设备                    |
| desktop     | 桌面设备                               |
| electron    | 运行 Electron 的桌面设备               |
| hybrid      | 运行 Capacitor 或 Cordova 的设备       |
| ios         | 运行 iOS 的设备                        |
| ipad        | iPad 设备                              |
| iphone      | iPhone 设备                            |
| mobile      | 移动设备                               |
| mobileweb   | 在移动设备中运行的网页浏览器           |
| phablet     | 平板手机设备                           |
| pwa         | 渐进式 Web 应用（PWA）                 |
| tablet      | 平板设备                               |