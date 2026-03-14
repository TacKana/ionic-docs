---
title: Ionic CLI
sidebar_label: 概述
---

<head>
  <title>Ionic CLI 框架：用于开发应用的命令行界面</title>
  <meta
    name="description"
    content="Ionic 命令行界面（CLI）是开发 Ionic 应用的核心工具。可通过 npm 全局安装我们的框架。"
  />
</head>

Ionic 命令行界面（[CLI](/docs/reference/glossary#cli)）是开发 Ionic 应用的核心工具。

## 安装

可通过 npm 全局安装 Ionic CLI：

```shell
npm install -g @ionic/cli
```

## 帮助信息

Ionic CLI 内置了命令文档，可通过 `--help` 标志访问。

```shell
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

:::note
请务必在你的项目目录中运行 `ionic <command> --help`。

对于某些命令（例如 `ionic serve`），帮助文档会根据项目类型（如 React 与 Angular）显示相应的上下文信息。
:::

<!-- TODO: 添加图片？ -->

## 架构

Ionic CLI 基于 [TypeScript](/docs/reference/glossary#typescript) 和 [Node.js](/docs/reference/glossary#node) 构建。它支持 Node 10.3+ 版本，但我们始终推荐使用最新的 Node LTS 版本。你可以在开源的 <a href="https://github.com/ionic-team/ionic-cli" target="_blank">GitHub 仓库</a> 上关注其开发进展。

## 故障排除

若遇到 Ionic CLI 相关问题，以下建议可能有所帮助：

- 确保已安装最新版本的 Ionic CLI。可通过运行 `ionic --version` 查看当前安装的版本。
- 确保已安装最新的 Node LTS 版本。请参阅 [Node & npm](/docs/intro/environment#node-npm) 环境设置指南。
- 使用 `--verbose` 标志可打印调试信息，有助于定位问题。
- 连接问题可能源于代理设置配置不当。请参阅 [使用代理](/docs/cli/using-a-proxy) 来配置请求代理。
- 全局 Ionic CLI 配置目录在所有平台下均为 `~/.ionic`。该目录可以安全删除，Ionic CLI 会重新生成它，但所有配置（包括用户会话）都将丢失。可通过 [CLI 环境变量](/docs/cli/configuration#environment-variables) 来配置此目录。