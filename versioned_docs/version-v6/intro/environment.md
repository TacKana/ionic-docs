---
title: 环境设置
---

<head>
  <title>环境设置 | Ionic 应用设置的 Node 与 npm 环境</title>
  <meta
    name="description"
    content="开始使用 Ionic Framework，唯一的先决条件是 Node 和 npm 环境。了解你的 Ionic 应用需要哪些环境设置。"
  />
</head>

要开始使用 Ionic Framework，唯一的先决条件是 [Node 与 npm](#node-与-npm) 环境。

当然，还需要一个代码编辑器。推荐使用 [Visual Studio Code](https://code.visualstudio.com/)。Visual Studio Code 是微软制作的一款免费、功能齐全的文本编辑器。

## 终端

:::note
Ionic 开发的大部分工作都需要熟悉命令行。如果你不熟悉命令行，请参阅[这篇博客文章](https://ionicframework.com/blog/new-to-the-command-line/)进行快速入门介绍。
:::

一般来说，我们推荐使用内置终端。许多第三方终端可以很好地与 Ionic 配合使用，但可能不受官方支持。

- 对于 Windows，**Command Prompt** 和 **PowerShell** 受支持。<a href="https://docs.microsoft.com/en-us/windows/wsl/faq" target="_blank">WSL</a> 已知可以与 Ionic 配合使用，但可能不受官方支持。
- 对于 macOS，内置的 **Terminal** 应用受支持。

Git Bash（来自 <a href="https://git-scm.com" target="_blank">git-scm.com</a>）不支持 TTY 交互，且**不受** Ionic 支持。

## Node 与 npm

几乎所有现代 JavaScript 项目的工具都基于 [Node.js](../reference/glossary.md#node)。[下载页面](https://nodejs.org/en/download/)提供了适用于所有平台的预构建安装包。我们建议选择 LTS 版本以确保最佳兼容性。

Node 自带 [npm](../reference/glossary.md#npm)，这是 JavaScript 的包管理器。

要验证安装，请打开一个新的终端窗口并运行：

```shell
$ node --version
$ npm --version
```

:::note
在 macOS 上使用 `npm` 安装全局包时，权限错误很常见。如果遇到 `EACCES` 错误，请参阅[解决权限错误](../developing/tips.md#解决权限错误)。
:::

## Git

虽然不是必需的，但强烈推荐使用版本控制系统 [Git](../reference/glossary.md#git)。

Git 通常伴随着 Git 托管服务，如 [GitHub](https://github.com/)，这时需要进行额外的设置。请按照 Git 托管服务文档中的教程来设置 Git：

- GitHub：[设置 Git](https://help.github.com/en/articles/set-up-git)
- GitLab：[安装 Git](https://docs.gitlab.com/ee/topics/git/how_to_install_git)
- Bitbucket：[安装 Git](https://www.atlassian.com/git/tutorials/install-git)

或者，按照[官方安装说明](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)进行安装。命令行工具可以从[下载页面](https://git-scm.com/downloads)获取。

要验证安装，请打开一个新的终端窗口并运行：

```shell
git --version
```

### Git GUI

Git 是一个命令行工具，但有许多 [GUI 客户端](https://git-scm.com/downloads/guis/)可用。推荐使用 [GitHub Desktop](https://desktop.github.com/)，它与 GitHub 配合良好。
