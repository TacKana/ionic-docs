---
sidebar_label: 'integrations enable'
---

# ionic integrations enable

为您的应用添加并启用集成功能

```shell
ionic integrations enable [options]
```

通过此命令可以启用 Cordova 等集成功能。如果项目中从未添加过该集成，`ionic integrations enable` 将下载并添加该集成。

可以通过 `--add` 选项重新添加集成。

## 输入参数

<table className="reference-table">
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
        <p>
          要启用的集成名称（例如 <code>capacitor</code>、<code>cordova</code>、<code>enterprise</code>）
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 选项

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-add" id="option-add">
            --add
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>即使已启用也重新下载并添加集成</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-root" id="option-root">
            --root
            <span class="option-spec"> =&lt;path&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>指定添加集成时的备用下载目标路径</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-quiet" id="option-quiet">
            --quiet
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>减少输出信息，忽略集成错误</p>
      </td>
    </tr>
  </tbody>
</table>