---
sidebar_label: 常见问题
slug: /native/faq
---

# 常见问题

## 什么是 Capacitor？

Capacitor 是 Ionic 团队构建的原生运行时，为 Web 开发者提供了将其 Web 应用部署到原生设备的能力。Capacitor 还通过 JavaScript 暴露原生设备能力，因此开发者可以像与任何其他 JavaScript 库交互一样访问原生定位服务、文件系统访问或通知等功能。

## 权限问题

如果你正在使用插件，安装插件后可能需要向原生项目添加额外的权限。例如，Capacitor 相机插件需要 iOS 的以下权限：

- `NSCameraUsageDescription`（`Privacy - Camera Usage Description`）
- `NSPhotoLibraryAddUsageDescription`（`Privacy - Photo Library Additions Usage Description`）
- `NSPhotoLibraryUsageDescription`（`Privacy - Photo Library Usage Description`）

你需要手动将这些权限添加到原生项目中的 `info.plist` 文件中。否则，对原生相机 API 的调用将失败。

## 意外行为

如果由于某种原因插件的行为不符合预期，请在[我们的 GitHub 仓库](https://github.com/ionic-team/capacitor-plugins)上提交问题！提供清晰的问题报告以及重现步骤可以帮助解决你的问题。
