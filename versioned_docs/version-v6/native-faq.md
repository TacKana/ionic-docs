---
sidebar_label: FAQ
slug: /native/faq
---

# 常见问题解答

## 什么是 Capacitor？

Capacitor 是由 Ionic 团队构建的本地运行时环境，它让 Web 开发者能够将他们的 Web 应用部署到原生设备上。Capacitor 还通过 JavaScript 暴露原生设备功能，使开发者可以像使用任何其他 JavaScript 库一样访问诸如原生定位服务、文件系统访问或通知等功能。

## 权限问题

如果您正在使用某个插件，安装该插件后可能需要向您的原生项目添加额外的权限。例如，Capacitor Camera 插件需要为 iOS 添加以下权限：

- `NSCameraUsageDescription` (`隐私 - 相机使用说明`)
- `NSPhotoLibraryAddUsageDescription` (`隐私 - 相册添加使用说明`)
- `NSPhotoLibraryUsageDescription` (`隐私 - 相册使用说明`)

您需要手动将这些权限添加到原生项目的 `info.plist` 文件中。否则，调用原生相机 API 将会失败。

## 意外行为

如果出于某些原因，插件的行为出现了意外情况，请[在我们的 GitHub 仓库上提交问题](https://github.com/ionic-team/capacitor-plugins)！提供清晰的问题描述和可复现的步骤，有助于更快地解决您的问题。