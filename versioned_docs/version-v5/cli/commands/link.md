---
sidebar_label: 'link'
---

# ionic link

将本地应用连接到 Ionic

```shell
ionic link [options]
```

使用此命令将 Appflow 上的应用链接到本地的 Ionic 项目。

如果省略 `id` 参数，此命令将提示你从 Appflow 中选择一个应用。

Appflow 使用基于 Git 的工作流来管理应用更新。在链接过程中，请选择 **GitHub**（推荐）或 **Appflow** 作为 Git 托管服务。更多信息请参阅我们的[文档](https://ionicframework.com/docs/appflow/basics/git)。

最终，此命令会设置 **./ionic.config.json** 中的 **id** 属性，从而将此应用标记为已链接。

如果在链接过程中遇到问题，请联系我们的[技术支持](https://ion.link/support-request)。

## 示例

```shell
$ ionic link
$ ionic link a1b2c3d4
```

## 输入参数

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>id</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>
          要链接的应用的 Appflow ID（例如 <code>a1b2c3d4</code>）
        </p>
      </td>
    </tr>
  </tbody>
</table>