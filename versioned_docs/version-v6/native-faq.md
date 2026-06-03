---
sidebar_label: 常见问题
slug: /native/faq
---

# 常见问题

## 什么是 Capacitor？

Capacitor 是由 Ionic 团队构建的原生运行时，为 Web 开发者提供将其 Web 应用部署到原生设备的能力。Capacitor 还通过 JavaScript 暴露原生设备能力，使开发者能够像与任何其他 JavaScript 库交互一样访问原生定位服务、文件系统或通知等功能。

## 权限问题

如果你在使用插件，安装插件后可能需要在原生项目中添加额外的权限。例如，Capacitor Camera 插件需要 iOS 的以下权限：

- `NSCameraUsageDescription`（隐私 - 相机使用说明）
- `NSPhotoLibraryAddUsageDescription`（隐私 - 照片库添加使用说明）
- `NSPhotoLibraryUsageDescription`（隐私 - 照片库使用说明）

你需要手动将这些权限添加到原生项目的 `info.plist` 中。否则，对原生相机 API 的调用将失败。

## 意外行为

如果插件因某种原因表现出意外的行为，请[在我们的 GitHub 仓库上提交一个 issue](https://github.com/ionic-team/capacitor-plugins)！提供清晰的 issue 报告以及复现步骤可以帮助解决你的问题。
