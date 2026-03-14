---
title: 'Splash Screen Image Icon Generator | Generate Cordova Resources'
description: '通过 PNG 源图片为 Cordova 平台生成尺寸完美的图标和启动画面。使用 Ionic Cordova Resources 自动创建图标。'
sidebar_label: 'cordova resources'
---

# ionic cordova resources

自动创建图标和启动画面资源

```shell
ionic cordova resources [options]
```

使用此命令可以从 PNG 源图片为 Cordova 平台生成尺寸完美的图标和启动画面。

图标源图片的理想尺寸至少为 **1024×1024px**，并位于 **resources/icon.png**。启动画面源图片的理想尺寸至少为 **2732×2732px**，并位于 **resources/splash.png**。如果您使用过 `ionic start`，**resources/** 目录中应该已有默认的 Ionic 资源，您可以覆盖它们。

您还可以通过将特定平台的图标和启动画面放入相应的 **resources/&lt;platform&gt;/** 目录来生成它们。例如，要为 Android 生成图标，请将图像放在 **resources/android/icon.png**。

为了获得最佳效果，启动画面的设计内容应大致位于图像中心的正方形区域（**1200×1200px**）内。您可以使用 **[https://code.ionicframework.com/resources/splash.psd](https://code.ionicframework.com/resources/splash.psd)** 作为启动画面的模板。

`ionic cordova resources` 将自动更新您的 **config.xml** 以反映生成的图片中的更改，然后 Cordova 会据此进行配置。

此命令使用 `cordova-res` [工具](https://github.com/ionic-team/cordova-res) 在本地生成资源。

Cordova 参考文档：

- 图标：**[https://cordova.apache.org/docs/en/latest/config_ref/images.html](https://cordova.apache.org/docs/en/latest/config_ref/images.html)**
- 启动画面：**[https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/)**

## 示例

```shell
$ ionic cordova resources
$ ionic cordova resources ios
$ ionic cordova resources android
```

## 输入参数

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>platform</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>
          您希望为其生成资源的平台（<code>ios</code>、<code>android</code>）
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 选项

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-icon" id="option-icon">
            --icon
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>生成图标资源</p>
      </td>
    </tr>
    <tr>
      <th>别名</th>
      <td>
        <code>-i</code>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-splash" id="option-splash">
            --splash
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>生成启动画面资源</p>
      </td>
    </tr>
    <tr>
      <th>别名</th>
      <td>
        <code>-s</code>
      </td>
    </tr>
  </tbody>
</table>
