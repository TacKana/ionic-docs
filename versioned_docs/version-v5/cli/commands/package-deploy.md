---
sidebar_label: 'package deploy'
---

# ionic package deploy

将二进制文件部署到目标位置，例如使用 Appflow 发布到应用商店

```shell
ionic package deploy [options]
```

此命令使用 Appflow 将二进制文件部署到目标位置。运行过程中，远程日志会输出到终端。

该命令接收两个参数：之前创建此二进制文件的打包构建的数字 ID，以及二进制文件将要部署到的目标位置名称。
两者都可以从 [Dashboard](https://dashboard.ionicframework.com) 获取。

## 示例

```shell
ionic package deploy 123456789 "我的应用商店目标"
```

## 输入参数

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>build-id</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>所需成功打包构建的构建 ID</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>destination</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>将构建产物部署到应用商店的目标位置</p>
      </td>
    </tr>
  </tbody>
</table>