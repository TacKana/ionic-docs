---
sidebar_label: 配置
title: Ionic React 单元测试配置
description: 学习如何为 Ionic React 应用配置单元测试。
---

# 单元测试配置

Ionic 需要一些额外的步骤来配置单元测试。如果您使用的是 Ionic 入门项目，这些步骤已经为您完成。

### 安装 React Testing Library

React Testing Library 是一套实用工具，可以更轻松地测试 React 组件。它用于与组件交互并测试其行为。

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### 初始化 Ionic React

Ionic React 要求在运行任何测试之前调用 `setupIonicReact` 函数。如果不这样做，将导致基于模式的类（mode-based classes）和平台行为（platform behaviors）无法应用于您的组件。

在 `src/setupTest.ts` 文件中，添加以下代码：

```diff
import '@testing-library/jest-dom/extend-expect';

+ import { setupIonicReact } from '@ionic/react';

+ setupIonicReact();

// Mock matchmedia
window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () { },
    removeListener: function () { }
  };
};
```