---
sidebar_label: 'config unset'
---

# ionic config unset

删除配置值

```shell
ionic config unset [options]
```

此命令会从项目的 **./ionic.config.json** 文件中删除配置值。使用 `--global` 选项时，也可操作全局 CLI 配置（**~/.ionic/config.json**）。

对于嵌套属性，请使用点号分隔各个层级。例如，属性名 `integrations.cordova` 将在 **integrations** 对象中查找 **cordova** 属性。

对于多应用项目，此命令默认作用于当前项目。若要在项目配置文件根目录下操作，请使用 `--root` 选项。

## 示例

```shell
$ ionic config unset
$ ionic config unset type
$ ionic config unset --global git.setup
$ ionic config unset -g interactive
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
      <th>描述</th>
      <td>
        <p>您希望删除的属性名</p>
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
      <th>描述</th>
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
          <a href="#option-root" id="option-root">
            --root
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <div>
          <p>
            操作 <strong>./ionic.config.json</strong> 的根目录
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>