---
sidebar_label: 'doctor list'
---

# ionic doctor list

列出所有问题及其标识符

```shell
ionic doctor list [options]
```

问题可能带有不同的标签：

- **可处理**：`ionic doctor treat` 可以尝试修复该问题
- **已忽略**：已配置为在 `ionic doctor check` 或 `ionic doctor treat` 中不被检测
- **显式检测**：仅在使用 `ionic doctor check <issue-id>` 时才会被显式检测

您可以通过使用 `ionic config set -g doctor.issues.<issue-id>.ignored true/false` 来切换某个问题是否被忽略，其中 `<issue-id>` 与此命令列出的 ID 相匹配。