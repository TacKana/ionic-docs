---
sidebar_label: 'repair'
---

# ionic repair

移除并重新创建依赖项和生成的文件

```shell
ionic repair [options]
```

当遇到难以排查的错误或问题时，这个命令可能会很有用。它能够移除并重新创建项目的依赖项。

对于 Cordova 应用，它会移除并重新创建生成的原生项目以及项目的原生依赖项。

## 选项

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-cordova" id="option-cordova">
            --cordova
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>仅对 Cordova 平台和插件执行修复步骤。</p>
      </td>
    </tr>
  </tbody>
</table>