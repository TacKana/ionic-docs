---
sidebar_label: 'ssh use'
---

# ionic ssh use

设置您当前使用的 Ionic SSH 密钥

```shell
ionic ssh use [options]
```

此命令会修改 SSH 配置文件 (**~/.ssh/config**)，为 **git.ionicjs.com** 主机设置活动的私钥。如需了解更多 SSH 配置信息，请运行 `man ssh_config` 命令或访问在线手册[页面](https://linux.die.net/man/5/ssh_config)。

在进行更改之前，`ionic ssh use` 会先显示差异并请求您确认是否写入文件。

## 输入参数

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>key-path</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>要使用的私钥文件路径</p>
      </td>
    </tr>
  </tbody>
</table>