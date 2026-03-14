---
title: Environment Setup
---

<head>
  <title>环境设置 | Ionic 应用搭建所需的 Node 与 NPM 环境</title>
  <meta
    name="description"
    content="开始使用 Ionic Framework 唯一的要求是具备 Node 和 npm 环境。了解 Ionic 应用所需的环境设置。"
  />
</head>

要开始使用 Ionic Framework，唯一的要求是具备 [Node 与 npm](#node--npm) 环境。

当然，代码编辑器也是必需的。推荐使用 [Visual Studio Code](https://code.visualstudio.com/)。Visual Studio Code 是微软推出的一款免费、功能齐全的文本编辑器。

## 终端

:::note
Ionic 开发很大程度上需要熟悉命令行操作。如果你是命令行新手，可以参考 [这篇博客文章](https://ionicframework.com/blog/new-to-the-command-line/) 快速入门。
:::

通常，我们推荐使用系统内置的终端。许多第三方终端能与 Ionic 良好配合，但可能不被官方支持。

- 对于 Windows 系统，**命令提示符** 和 **PowerShell** 是受支持的。<a href="https://docs.microsoft.com/en-us/windows/wsl/faq" target="_blank">WSL</a> 已知可以运行 Ionic，但可能不被官方支持。
- 对于 macOS 系统，内置的 **终端** 应用是受支持的。

Git Bash（来自 <a href="https://git-scm.com" target="_blank">git-scm.com</a>）不支持 TTY 交互功能，因此 **不被 Ionic 支持**。

## Node 与 npm

几乎所有现代 JavaScript 项目的工具都基于 [Node.js](../reference/glossary.md#node)。[下载页面](https://nodejs.org/en/download/) 提供了适用于所有平台的预构建安装包。我们建议选择 LTS 版本以确保最佳的兼容性。

Node 捆绑了 JavaScript 包管理器 [npm](../reference/glossary.md#npm)。

要验证安装是否成功，请打开一个新的终端窗口并运行：

```shell
$ node --version
$ npm --version
```

:::note
在 macOS 上，使用 `npm` 安装全局包时经常会出现权限错误。如果遇到 `EACCES` 错误，请参阅 [解决权限错误](../developing/tips.md#resolving-permission-errors) 章节。
:::

## Git

虽然不是必需，但我们强烈推荐安装版本控制系统 [Git](../reference/glossary.md#git)。

Git 通常与 Git 托管服务（如 [GitHub](https://github.com/)）配合使用，这种情况下需要进行额外的设置。请按照 Git 托管服务的文档教程来设置 Git：

- GitHub: [设置 Git](https://help.github.com/en/articles/set-up-git)
- GitLab: [安装 Git](https://docs.gitlab.com/ee/topics/git/how_to_install_git)
- Bitbucket: [安装 Git](https://www.atlassian.com/git/tutorials/install-git)

如果没有使用托管服务，请按照 [官方安装说明](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) 操作。命令行工具可以从 [下载页面](https://git-scm.com/downloads) 获取。

要验证安装是否成功，请打开一个新的终端窗口并运行：

```shell
git --version
```

### Git 图形界面

Git 是一个命令行工具，但也有许多 [图形界面客户端](https://git-scm.com/downloads/guis/) 可供选择。推荐使用 [GitHub Desktop](https://desktop.github.com/)，它与 GitHub 配合良好。