---
sidebar_label: 'generate'
---

# ionic generate

生成页面、组件与 Angular 功能模块

```shell
ionic generate [选项]
```

使用 Ionic Generate 自动化创建框架功能模块。此命令借助 Angular CLI 来生成 `pages`、`components`、`directives`、`services` 等功能。

- 查看完整的可用类型列表，请运行 `npx ng g --help`
- 查看特定类型的选项列表，请运行 `npx ng g <类型> --help`

您可以通过指定路径，将功能模块嵌套在任意层级的子目录中。例如，指定名称 `"pages/New Page"` 将在 **src/app/pages/new-page/** 路径下生成页面文件。

若要在实际修改文件前测试生成器效果，可使用 `--dry-run` 选项。

## 示例

```shell
$ ionic generate
$ ionic generate page
$ ionic generate page contact
$ ionic generate component contact/form
$ ionic generate component login-form --change-detection=OnPush
$ ionic generate directive ripple --skip-import
$ ionic generate service api/user
```

## 输入参数

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>type</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>
          功能模块类型（例如：<code>page</code>、<code>component</code>、<code>directive</code>、{' '}
          <code>service</code>）
        </p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>name</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>待生成功能模块的名称/路径</p>
      </td>
    </tr>
  </tbody>
</table>