---
title: Ionic CLI
sidebar_label: 概览
---

<head>
  <title>Ionic CLI 框架：用于开发应用的命令行界面</title>
  <meta
    name="description"
    content="Ionic 命令行界面（CLI）是开发 Ionic 应用的首选工具。通过 npm 全局安装我们的框架。"
  />
</head>

Ionic 命令行界面（[CLI](/reference/glossary#cli)）是开发 Ionic 应用的首选工具。

## 安装

Ionic CLI 可以通过 npm 全局安装：

```shell
npm install -g @ionic/cli
```

## 帮助

Ionic CLI 附带了命令文档，可通过 `--help` 标志访问。

```shell
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

:::note
请务必在您的项目目录中运行 `ionic <command> --help`。

对于某些命令，例如 `ionic serve`，帮助文档会根据项目类型提供上下文相关的信息，例如 React 与 Angular 的区别。
:::

{/* TODO：图片？ */}

## 架构

Ionic CLI 使用 [TypeScript](/reference/glossary#typescript) 和 [Node.js](/reference/glossary#node) 构建。它支持 Node 10.3+，但始终建议使用最新的 Node LTS 版本。您可以在开源 <a href="https://github.com/ionic-team/ionic-cli" target="_blank">GitHub 仓库</a> 中关注其开发进展。

## 故障排除

要排查 Ionic CLI 的问题，以下方法可能会有所帮助：

- 确保已安装最新版本的 Ionic CLI。运行 `ionic --version` 可查看已安装的 Ionic CLI 版本。Ionic CLI 版本与 Ionic Framework 版本无关。
- 确保已安装最新的 Node LTS。请参阅 [Node 与 npm](/intro/environment#node-与-npm) 环境设置。
- `--verbose` 标志会输出调试信息，可能有助于缩小问题范围。
- 连接问题可能是由于代理设置配置不当造成的。请参阅[使用代理](/cli/using-a-proxy)来配置请求代理。
- 全局 Ionic CLI 配置目录在所有平台上均为 `~/.ionic`。可以安全地删除它，Ionic CLI 会重新创建，但所有配置（包括用户会话）都将丢失。可通过 [CLI 环境变量](/cli/configuration#环境变量)配置此目录。
