# 组件文件夹

该文件夹用于设置网站全局组件的样式。建议的文件组织方式是在顶部定义主题相关的变量，随后是覆盖样式。所有这些部分样式文件都通过 Sass 的 `@use` 规则导入到基础样式中。

浅色主题的变量可以通过以下选择器进行设置：

```css
html[data-theme='light'] {
  --ifm-menu-color-background-active: red;
}
```

深色主题的变量可以通过以下选择器进行设置：

```css
html[data-theme='dark'] {
  --ifm-menu-color-background-active: blue;
}
```

全局变量可以在根级别像这样进行覆盖：

```css
:root {
  --sidebar-spacing-horizontal: 1.5rem;
}
```

样式可以像这样进行覆盖：

```css
#__docusaurus {
  .class-to-override {
    margin-block-start: 1rem;
  }
}
```