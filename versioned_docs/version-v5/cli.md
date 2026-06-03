---
sidebar_label: 概览
title: 'Ionic CLI 框架：用于开发应用的命令行界面'
description: Ionic 命令行界面（CLI）是开发 Ionic 应用的首选工具。通过 npm 全局安装我们的框架。
---

# Ionic CLI

Ionic 命令行界面（[CLI](/docs/reference/glossary#cli)）是开发 Ionic 应用的首选工具。

## 安装

Ionic CLI 可以通过 npm 全局安装：

```shell
npm install -g @ionic/cli
```

## 帮助

Ionic CLI 附带了命令文档，可以通过 `--help` 标志访问。

```shell
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

:::note
请确保在您的项目目录中运行 `ionic <command> --help`。

对于某些命令，如 `ionic serve`，帮助文档会根据项目类型（例如 React 与 Angular）提供上下文相关信息。
:::

<!-- TODO: image? -->

## 架构

Ionic CLI 使用 [TypeScript](/docs/reference/glossary#typescript) 和 [Node.js](/docs/reference/glossary#node) 构建。它支持 Node 10.3+，但始终推荐使用最新的 Node LTS 版本。在开源的 <a href="https://github.com/ionic-team/ionic-cli" target="_blank">GitHub 仓库</a>中关注开发进展。

## 故障排除

要排查 Ionic CLI 的问题，以下方法可能会有所帮助：

- 确保安装了最新版本的 Ionic CLI。通过运行 `ionic --version` 查看已安装的版本。
- 确保安装了最新的 Node LTS 版本。参见 [Node 与 npm](/docs/intro/environment#node-npm) 环境设置。
- `--verbose` 标志会打印调试信息，这可能有助于缩小问题范围。
- 连接问题可能是由于代理设置不正确导致的。参见[使用代理](/docs/cli/using-a-proxy)配置请求代理。
- 全局 Ionic CLI 配置目录在所有平台上都是 `~/.ionic`。可以安全地删除它，Ionic CLI 会重新生成，但所有配置（包括用户会话）都将丢失。通过 [CLI 环境变量](/docs/cli/configuration#environment-variables)配置此目录。
