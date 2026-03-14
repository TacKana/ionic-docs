# 样式文件夹

此文件夹包含一个全局样式文件，该文件通过 [docusaurus.config.js](/docusaurus.config.js) 引入主题。此外，还有一个组件文件夹，用于为主题组件设置样式，而不是通过 swizzling（替换）的方式。

相关 issue: https://github.com/facebook/docusaurus/pull/5987
由于目前无法覆盖主题样式，此处使用了基础的 #\_\_docusaurus 标签来增加选择器的权重。