---
sidebar_label: 简介
title: Ionic React 测试简介
description: 了解如何测试 Ionic React 应用。本文档概述了如何测试使用 @ionic/react 构建的应用。
---

# 测试 Ionic React

本文档概述了如何测试使用 `@ionic/react` 构建的应用。它涵盖了 React 测试的基础知识，以及开发者可以用来测试其应用的特定工具和库。

## 简介

测试是开发过程中的重要组成部分，它有助于确保应用按预期工作。在 `@ionic/react` 中，测试是使用工具和库的组合来完成的，包括 Jest 或 Vitest、React Testing Library、Playwright 或 Cypress。

## 测试类型

可以编写两种类型的测试：

**单元测试**：单元测试用于隔离测试单个函数和组件。[Jest](https://jestjs.io)、[Vitest](https://vitest.dev/) 和 [React Testing Library](https://testing-library.com) 常用于单元测试。

**集成测试**：集成测试用于测试不同组件如何协同工作。[Cypress](https://www.cypress.io) 或 [Playwright](https://playwright.dev) 常用于集成测试。
