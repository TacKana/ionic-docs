---
sidebar_label: 'doctor check'
---

# ionic doctor check

检查您的 Ionic 项目健康状况

```shell
ionic doctor check [options]
```

此命令会检测并打印常见问题及建议的修复步骤。

部分问题可以自动修复，详情请参阅 `ionic doctor treat --help`。

您可以选择性地提供 `id` 参数来检查单个问题。使用 `ionic doctor list` 可列出所有已知问题。

## 示例

```shell
$ ionic doctor check
$ ionic doctor check git-not-used
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
        <p>问题标识符</p>
      </td>
    </tr>
  </tbody>
</table>