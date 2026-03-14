---
sidebar_label: 'doctor treat'
---

# ionic doctor treat

诊断并尝试修复 Ionic 项目中的常见问题

```shell
ionic doctor treat [options]
```

此命令会检测并尝试修复常见问题。在尝试修复之前，会显示修复步骤并弹出确认提示。

可选择提供 `id` 参数来尝试修复单个问题。使用 `ionic doctor list` 可列出所有已知问题。

## 使用示例

```shell
$ ionic doctor treat
$ ionic doctor treat git-not-used
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
      <th>参数说明</th>
      <td>
        <p>问题标识符</p>
      </td>
    </tr>
  </tbody>
</table>