---
sidebar_label: 常见问题
slug: /native/faq
---

# 常见问题

## 什么是 Capacitor？

Capacitor 是由 Ionic 团队构建的原生运行环境，为 Web 开发者提供了将 Web 应用部署到原生设备的能力。Capacitor 还通过 JavaScript 暴露原生设备能力，使开发者可以像使用任何其他 JavaScript 库一样访问原生定位服务、文件系统访问或通知等功能。

## 权限问题

如果您在使用插件，安装插件后可能需要在原生项目中添加额外的权限。例如，Capacitor Camera 插件在 iOS 上需要以下权限：

- `NSCameraUsageDescription`（隐私 - 相机使用说明）
- `NSPhotoLibraryAddUsageDescription`（隐私 - 照片库添加使用说明）
- `NSPhotoLibraryUsageDescription`（隐私 - 照片库使用说明）

您需要手动将这些权限添加到原生项目的 `info.plist` 中。否则，对原生相机 API 的调用将会失败。

## 异常行为

如果插件出于某种原因表现出异常行为，请[在我们的 GitHub 仓库上提交 issue](https://github.com/ionic-team/capacitor-plugins)！提供清晰的 issue 报告以及复现步骤有助于解决问题。
