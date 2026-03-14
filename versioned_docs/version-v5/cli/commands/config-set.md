---
sidebar_label: 'config set'
---

# ionic config set

设置配置值

```shell
ionic config set [options]
```

此命令将配置值写入项目的 **./ionic.config.json** 文件。也可以使用 `--global` 选项操作全局 CLI 配置 (**~/.ionic/config.json**)。

对于嵌套属性，请使用点号分隔嵌套层级。例如，属性名 `integrations.cordova` 会在 **integrations** 对象中查找 **cordova** 属性。

对于多应用项目，此命令默认作用于当前项目。如需在项目配置文件根目录操作，请使用 `--root` 选项。

此命令会尝试将 `value` 转换为合适的 JSON 类型。如果值可被 JSON 解析（如 `123`、`true`、`[]` 等），则采用解析结果；否则将值解释为字符串。如需更严格的输入处理，请使用 `--json` 选项，该选项会在遇到非 JSON 值时报错。

默认情况下，如果 `property` 已存在且为对象或数组，则不会覆盖该值。要禁用此检查并始终覆盖属性，请使用 `--force` 选项。

## 使用示例

```shell
$ ionic config set name newAppName
$ ionic config set name "\"newAppName\"" --json
$ ionic config set -g interactive false
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
        <p>要设置的属性名称</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>value</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>指定属性的新值</p>
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
          <p>
            始终将 <code>value</code> 解释为 JSON
          </p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-force" id="option-force">
            --force
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
          <p>始终覆盖现有值</p>
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
            在 <strong>./ionic.config.json</strong> 根目录操作
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>