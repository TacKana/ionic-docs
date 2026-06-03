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

可以通过 npm 全局安装 Ionic CLI：

```shell
npm install -g @ionic/cli
```

## 帮助

Ionic CLI 自带命令文档，可通过 `--help` 标志访问。

```shell
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

:::note
请确保在你的项目目录中运行 `ionic <command> --help`。

对于某些命令（如 `ionic serve`），帮助文档会根据你的项目类型（例如 React 与 Angular）提供上下文相关的内容。
:::

<!-- TODO: image? -->

## 架构

Ionic CLI 使用 [TypeScript](/reference/glossary#typescript) 和 [Node.js](/reference/glossary#node) 构建。它支持 Node 10.3+，但始终建议使用最新的 Node LTS 版本。可关注开源 <a href="https://github.com/ionic-team/ionic-cli" target="_blank">GitHub 仓库</a>上的开发进展。

## 故障排除

要排查 Ionic CLI 的问题，以下方法可能有用：

- 确保安装了最新版本的 Ionic CLI。运行 `ionic --version` 查看已安装的版本。
- 确保安装了最新的 Node LTS 版本。参见环境设置中的 [Node 与 npm](/intro/environment#node-npm)。
- `--verbose` 标志会打印调试信息，可能有助于缩小问题范围。
- 连接问题可能是由于代理设置配置不当造成的。参见[使用代理](/cli/using-a-proxy)来配置请求代理。
- 全局 Ionic CLI 配置目录在所有平台上均为 `~/.ionic`。可以安全地删除该目录，Ionic CLI 会重新创建它，但所有配置（包括用户会话）都将丢失。可通过 [CLI 环境变量](/cli/configuration#environment-variables)配置此目录。
