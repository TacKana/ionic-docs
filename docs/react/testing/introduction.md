---
sidebar_label: 简介
title: Ionic React 测试简介
description: 学习如何测试 Ionic React 应用。本文档概述了如何测试使用 @ionic/react 构建的应用。
---

# 测试 Ionic React 应用

本文档概述了如何测试使用 `@ionic/react` 构建的应用。内容涵盖了使用 React 进行测试的基础知识，以及开发者可用于测试应用的具体工具和库。

## 简介

测试是开发过程中的重要环节，有助于确保应用按预期运行。在 `@ionic/react` 中，测试通过结合使用多种工具和库来完成，包括 Jest 或 Vitest、React Testing Library、Playwright 或 Cypress。

## 测试类型

可编写的测试主要有两种类型：

**单元测试**：单元测试用于独立测试单个函数和组件。[Jest](https://jestjs.io)、[Vitest](https://vitest.dev/) 和 [React Testing Library](https://testing-library.com) 是常用的单元测试工具。

**集成测试**：集成测试用于测试不同组件如何协同工作。[Cypress](https://www.cypress.io) 或 [Playwright](https://playwright.dev) 是常用的集成测试工具。