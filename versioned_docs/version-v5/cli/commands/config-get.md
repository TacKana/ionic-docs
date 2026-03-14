---
sidebar_label: 'config get'
---

# ionic config get

打印配置值

```shell
ionic config get [options]
```

该命令从项目的 **./ionic.config.json** 文件中读取并打印配置值。您也可以通过 `--global` 选项操作全局 CLI 配置（**~/.ionic/config.json**）。

对于嵌套属性，请使用点号分隔层级。例如，属性名称 `integrations.cordova` 将在 **integrations** 对象中查找 **cordova** 属性。

如果没有提供 `property` 参数，此命令将打印整个配置文件。

对于多应用项目，此命令默认作用于当前项目范围。若要在项目配置文件的根级别操作，请使用 `--root` 选项。

如果您以编程方式使用此命令，可以配合 `--json` 选项使用。

此命令会对已知的敏感字段进行输出脱敏处理（使用 `--json` 选项时会禁用该功能）。

## 示例

```shell
$ ionic config get
$ ionic config get id
$ ionic config get --global user.email
$ ionic config get -g npmClient
```

## 输入参数

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>property</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>需要获取的属性名称</p>
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
          <a href="#option-global" id="option-global">
            --global
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>使用全局 CLI 配置</p>
      </td>
    </tr>
    <tr>
      <th>别名</th>
      <td>
        <code>-g</code>
      </td>
    </tr>
  </tbody>
</table>

## 高级选项

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-json" id="option-json">
            --json
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <div>
          <p>以 JSON 格式输出配置值</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-root" id="option-root">
            --root
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <div>
          <p>
            在 <strong>./ionic.config.json</strong> 的根级别操作
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>