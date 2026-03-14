---
sidebar_label: FAQ
slug: /native/faq
---

# 常见问题解答

## 什么是 Capacitor？

Capacitor 是由 Ionic 团队构建的原生运行时，它让 Web 开发者能够将自己的 Web 应用部署到原生设备上。Capacitor 还通过 JavaScript 暴露了原生设备的功能，因此开发者可以像使用任何其他 JavaScript 库一样，访问原生定位服务、文件系统访问或通知等功能。

## 权限问题

如果你正在使用某个插件，安装该插件后可能需要在你的原生项目中添加额外的权限。例如，Capacitor Camera 插件在 iOS 上需要以下权限：

- `NSCameraUsageDescription` (`隐私 - 相机使用说明`)
- `NSPhotoLibraryAddUsageDescription` (`隐私 - 照片库添加使用说明`)
- `NSPhotoLibraryUsageDescription` (`隐私 - 照片库使用说明`)

你需要手动将这些权限添加到原生项目的 `info.plist` 文件中。否则，调用原生相机 API 将会失败。

## 意外行为

如果插件由于某些原因出现了预期之外的行为，请在 [我们的 GitHub 仓库提交问题](https://github.com/ionic-team/capacitor-plugins) 提供清晰的问题描述和复现步骤，这将有助于解决你的问题。