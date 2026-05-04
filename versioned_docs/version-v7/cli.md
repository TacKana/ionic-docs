---
title: Ionic CLI
sidebar_label: 概述
---

<head>
  <title>Ionic CLI 框架：用于开发应用的命令行工具</title>
  <meta
    name="description"
    content="Ionic 命令行界面（CLI）是开发 Ionic 应用的首选工具。可通过 npm 全局安装我们的框架。"
  />
</head>

Ionic 命令行界面（[CLI](/v7/reference/glossary#cli)）是开发 Ionic 应用的首选工具。

## 安装

可通过 npm 全局安装 Ionic CLI：

```shell
npm install -g @ionic/cli
```

## 帮助

Ionic CLI 内置了命令文档，可通过 `--help` 标志访问。

```shell
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

:::note
请务必在项目目录下运行 `ionic <command> --help`。

对于某些命令（如 `ionic serve`），帮助文档会根据项目类型（例如 React 与 Angular）提供上下文相关的信息。
:::

<!-- TODO: 是否需要添加图片？ -->

## 架构

Ionic CLI 使用 [TypeScript](/v7/reference/glossary#typescript) 和 [Node.js](/v7/reference/glossary#node) 构建。它支持 Node 10.3+，但始终建议使用最新的 Node LTS 版本。您可以在开源的 <a href="https://github.com/ionic-team/ionic-cli" target="_blank">GitHub 仓库</a> 上关注开发进展。

## 故障排除

要排查 Ionic CLI 的问题，以下信息可能有所帮助：

- 确保已安装最新版本的 Ionic CLI。可通过运行 `ionic --version` 获取已安装的 Ionic CLI 版本。Ionic CLI 版本与 Ionic Framework 版本无关。
- 确保已安装最新的 Node LTS 版本。请参阅 [Node & npm](/v7/intro/environment#node-npm) 环境设置。
- `--verbose` 标志会打印调试信息，这有助于缩小问题范围。
- 连接问题可能是由于代理配置不当导致的。请参阅 [使用代理](/v7/cli/using-a-proxy) 以配置请求代理。
- 在所有平台上，全局 Ionic CLI 配置目录均为 `~/.ionic`。可以安全地删除此目录，Ionic CLI 会重新生成它，但所有配置（包括用户会话）都将丢失。可通过 [CLI 环境变量](/v7/cli/configuration#environment-variables) 配置此目录。