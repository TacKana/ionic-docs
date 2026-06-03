---
title: "ionic cordova resources"
sidebar_label: "cordova resources"
translated: true
source_hash: 327848e4
---



自动创建图标和启动画面资源

```shell
$ ionic cordova resources [platform] [options]
```

使用此命令从 PNG 源图像为您的 Cordova 平台生成完美尺寸的图标和启动画面。

图标源图像理想情况下应至少为 **1024x1024px**，位于 **resources/icon.png**。启动画面源图像理想情况下应至少为 **2732x2732px**，位于 **resources/splash.png**。如果您使用了 `ionic start`，**resources/** 目录中应该已有默认的 Ionic 资源，您可以覆盖它们。

您也可以通过将图像放置在相应的 **resources/&lt;platform&gt;/** 目录中来生成平台特定的图标和启动画面。例如，要为 Android 生成图标，请将图像放置在 **resources/android/icon.png**。

为获得最佳效果，启动画面的设计应大致适合图像中心的一个正方形（**1200x1200px**）区域。您可以使用 **[https://code.ionicframework.com/resources/splash.psd](https://code.ionicframework.com/resources/splash.psd)** 作为启动画面的模板。

`ionic cordova resources` 将自动更新您的 **config.xml** 以反映生成图像的变化，Cordova 随后会进行配置。

此命令使用 `cordova-res` [工具](https://github.com/ionic-team/cordova-res) 在本地生成资源。

Cordova 参考文档：
- 图标：**[https://cordova.apache.org/docs/en/latest/config_ref/images.html](https://cordova.apache.org/docs/en/latest/config_ref/images.html)**
- 启动画面：**[https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/)**

### platform
您想要为其生成资源的平台（`ios`、`android`）




### 选项

 - `--icon`: 生成图标资源（或 `-i`）
      
 - `--splash`: 生成启动画面资源（或 `-s`）
      

## 示例

```shell
$ ionic cordova resources 
$ ionic cordova resources ios
$ ionic cordova resources android
```
