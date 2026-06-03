---
title: 版本管理
sidebar_label: 版本管理
---

# 版本管理

<!-- TOC goes here -->

Ionic Framework 遵循 <a href="https://semver.org/" target="_blank">语义化版本控制（SemVer）</a>约定：<code>major.minor.patch</code>。不兼容的 API 更改会增加 <code>major</code> 版本，添加向后兼容的功能会增加 <code>minor</code> 版本，向后兼容的错误修复会增加 <code>patch</code> 版本。

## 发布计划

### 主版本发布

当 API 中引入破坏性更改时，将发布主版本。主版本大约每 **6 个月**发布一次，可能包含破坏性更改。在主版本最终发布之前，将发布多个候选版本以收集反馈。候选版本中将包含变更内容和原因的概要说明。

### 次版本发布

当添加新功能或引入非破坏性的 API 更改时，将发布次版本。我们将对任何更改进行充分测试，以确保对发布有信心，但新代码总是可能带来新问题。如果进行了任何功能或 API 更改，我们计划**每月**发布一个次版本。

### 补丁版本发布

当包含错误修复但 API 未更改且未引入破坏性更改时，将发布补丁版本。我们计划**每两周**发布一个新的补丁版本，但有时可能需要提前或延后发布。为确保补丁版本能够修复现有代码而不会引入新功能带来的新问题，补丁版本将始终在次版本之前发布。

## 更新日志

要查看 Ionic 所有显著更改的列表，请参考 <a href="https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md" target="_blank">changelog</a>。其中包含了每个版本下所有错误修复和新功能的有序列表。
