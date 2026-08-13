---
title: Ionic CLI
sidebar_label: 概述
---

<head>
  <title>Ionic CLI 框架：用于开发应用的命令行界面</title>
  <meta
    name="description"
    content="Ionic 命令行界面（CLI）是开发 Ionic 应用的首选工具。使用 npm 全局安装我们的框架。"
  />
</head>

Ionic 命令行界面（[CLI](/reference/glossary#cli)）是开发 Ionic 应用的首选工具。

## 安装

Ionic CLI 可以通过 npm 全局安装：

```shell
npm install -g @ionic/cli
```

## 帮助

Ionic CLI 附带命令文档，可以使用 `--help` 标志访问。

```shell
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

:::note
请务必在你的项目目录中运行 `ionic <command> --help`。

对于某些命令，如 `ionic serve`，帮助文档与你的项目类型相关，例如 React 与 Angular。
:::

{/* TODO：添加图片？ */}

## 架构

Ionic CLI 使用 [TypeScript](/reference/glossary#typescript) 和 [Node.js](/reference/glossary#node) 构建。它支持 Node 10.3+，但始终建议使用最新的 Node LTS。在开源 <a href="https://github.com/ionic-team/ionic-cli" target="_blank">GitHub 仓库</a>上关注开发进度。

## 故障排除

要解决 Ionic CLI 的问题，以下内容可能有用：

- 确保安装了最新版本的 Ionic CLI。通过运行 `ionic --version` 获取已安装的 Ionic CLI 版本。Ionic CLI 版本与 Ionic 框架版本无关。
- 确保安装了最新的 Node LTS。参见 [Node 与 npm](/intro/environment#node-与-npm) 环境设置。
- `--verbose` 标志会打印调试消息，这可能会缩小问题范围。
- 连接问题可能是由于代理设置配置不当造成的。参阅[使用代理](/cli/using-a-proxy)配置请求代理。
- 全局 Ionic CLI 配置目录在所有平台上都是 `~/.ionic`。可以安全地删除它，Ionic CLI 将重新创建它，但所有配置（包括用户会话）将丢失。使用 [CLI 环境变量](/cli/configuration#环境变量)配置此目录。
