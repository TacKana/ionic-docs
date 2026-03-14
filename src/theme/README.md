# 主题文件夹

此文件夹用于覆盖 Docusaurus 的基础主题。其中存放着[自定义组件](https://docusaurus.io/docs/swizzling)。除非绝对必要，否则不应自定义组件，以便未来版本能够进行更新。如果可以使用 `@theme-original` 别名进行浅层自定义组件，则应优先考虑这种方式。已自定义的组件应添加到 prettier 忽略列表中，并且所有代码更新都应添加注释，以便更顺畅地进行版本升级。对于已进行不安全自定义的组件，其样式文件绝对不应被编辑。所有样式都应通过[组件局部样式](/src/styles/components)来完成。

- 原始主题：[`@docusaurus/theme-classic`](https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic)
- [原始主题源代码](https://github.com/facebook/docusaurus/tree/26ae4164d6f90c231c6687363a3907b5f9f172b8/packages/docusaurus-theme-classic/src/theme)