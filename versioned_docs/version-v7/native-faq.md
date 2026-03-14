---
sidebar_label: 常见问题
slug: /native/faq
---

# 常见问题

## 什么是 Capacitor？

Capacitor 是由 Ionic 团队开发的原生运行时环境，它让 Web 开发者能够将他们的网页应用部署到原生设备上。Capacitor 还通过 JavaScript 暴露原生设备功能，使开发者能够访问诸如原生定位服务、文件系统访问或通知等特性，就像使用其他 JavaScript 库一样。

## 权限问题

如果你在使用某个插件，安装后可能需要向你的原生项目添加额外的权限。例如，Capacitor Camera 插件在 iOS 上需要以下权限：

- `NSCameraUsageDescription` (`隐私 - 相机使用说明`)
- `NSPhotoLibraryAddUsageDescription` (`隐私 - 相册添加使用说明`)
- `NSPhotoLibraryUsageDescription` (`隐私 - 相册使用说明`)

你需要手动将这些权限添加到原生项目的 `info.plist` 文件中。否则，调用原生相机 API 将会失败。

## 异常行为

如果插件因某些原因出现了意料之外的行为，请[在我们的 GitHub 仓库提交问题](https://github.com/ionic-team/capacitor-plugins)。提供清晰的问题描述和复现步骤，有助于更快解决你的问题。