---
title: Ionic CLI
sidebar_label: 概述
---

<head>
  <title>Ionic CLI 框架：开发应用程序的命令行界面</title>
  <meta
    name="description"
    content="Ionic 命令行界面（CLI）是开发 Ionic 应用程序的首选工具。可通过 npm 全局安装我们的框架。"
  />
</head>

Ionic 命令行界面（[CLI](/reference/glossary#cli)）是开发 Ionic 应用程序的首选工具。

## 安装

Ionic CLI 可以通过 npm 全局安装：

```shell
npm install -g @ionic/cli
```

## 帮助文档

Ionic CLI 内置了命令文档，可通过 `--help` 标志访问。

```shell
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

:::note
请务必在项目目录中运行 `ionic <command> --help`。

对于某些命令（例如 `ionic serve`），帮助文档会根据项目类型（如 React 与 Angular）提供上下文相关内容。
:::

<!-- TODO: 添加图片？ -->

## 架构

Ionic CLI 基于 [TypeScript](/reference/glossary#typescript) 和 [Node.js](/reference/glossary#node) 构建。它支持 Node 10.3+ 版本，但建议始终使用最新的 Node LTS 版本。您可以在开源 <a href="https://github.com/ionic-team/ionic-cli" target="_blank">GitHub 仓库</a> 上关注开发进展。

## 故障排除

若遇到 Ionic CLI 相关问题，以下建议可能有所帮助：

- 确保已安装最新版本的 Ionic CLI。可通过运行 `ionic --version` 获取已安装的 Ionic CLI 版本。Ionic CLI 版本与 Ionic Framework 版本无关。
- 确保已安装最新的 Node LTS 版本。请参阅 [Node & npm](/intro/environment#node-npm) 环境设置。
- `--verbose` 标志会打印调试信息，有助于缩小问题范围。
- 连接问题可能是由于代理配置不当引起的。请参阅 [使用代理](/cli/using-a-proxy) 来配置请求代理。
- 全局 Ionic CLI 配置目录在所有平台上均为 `~/.ionic`。可以安全删除此目录，Ionic CLI 将重新生成它，但所有配置（包括用户会话）都将丢失。可通过 [CLI 环境变量](/cli/configuration#environment-variables) 配置此目录。