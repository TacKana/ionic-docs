# Docs 文件夹

`/docs` 文件夹存放所有 markdown 文件。页面结构大致映射到网站的路由，因为路径可以在 frontmatter 中更改。

## 版本控制

该文件夹还可以包含组件、资产以及在运行 docusaurus 版本控制脚本时需要版本化的所有其他内容。例如，如果有一个页面组件仅适用于当前 Ionic 版本的 `layout` 部分，可以将其添加到 `docs/layout/_components/` 文件夹中。运行版本控制脚本时，该组件将被复制到 `versioned_docs/version-{X}/layout/_components/`，并且 `docs/layout/_components/` 中现在会有一个单独的组件，可以删除或更新到最新版本。相同的概念适用于图像和其他文件。

如果组件需要在版本之间共享，可以将它们放在 `src/components/` 中。如果图像和其他服务文件需要在版本之间共享，可以将它们放在 `static/` 中。

## 自动生成的文件

这些目录中的所有 markdown 文件都是从 [scripts](/scripts) 生成的：

- `docs/api/`
- `docs/cli/commands/`
- `docs/native/`