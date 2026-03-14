# Hygen 模板

此目录中的模板旨在与 [hygen](https://www.hygen.io/) 配合使用，以生成样板文件。请查看 [根目录下的 package.json](../package.json)，看是否有自定义命令来使用它们（例如 `npm run playground:new`）。你也可以运行例如 `hygen playground new` 来使用生成器。

以下是一些用于更新/创建模板的有用文档链接：

- [enquirer](https://github.com/enquirer/enquirer#toggle-prompt) 用于构建命令行提示
- [inflection](https://www.hygen.io/docs/templates#helpers-and-inflections) 和 [change case](https://www.hygen.io/docs/templates#change-case-helpers) 用于例如转换通过提示提交的变量的大小写

# 新建 Playground 模板

## 生成

要创建一个新的 playground，请运行 `npm run playground:new`。这将引导你完成一些提示，以决定为 playground 创建哪些文件以及它们的路径应该是什么。

路径默认为 `basic`。如果已经存在一个 basic playground，你需要为 playground 输入一个不同的路径。

CSS 选项会在你需要为 playground 包含自定义 CSS 时添加额外的文件。

如果你需要为多个版本的 Ionic Framework 创建组件，你（目前）需要为每个版本运行一次生成器。

## 使用

生成 playground 后，你需要将其添加到文档中的主 markdown 文件（例如 [docs/api/button.md](../docs/api/button.md)），可以按照以下示例进行操作：

```
## 功能

import Feature from '@site/static/usage/v8/button/feature/index.md';

<Feature />
```