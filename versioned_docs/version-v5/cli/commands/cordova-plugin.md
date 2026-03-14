---
sidebar_label: 'cordova plugin'
---

# ionic cordova plugin

管理 Cordova 插件

```shell
ionic cordova plugin [options]
```

类似于直接运行 `cordova plugin` 命令，但提供了更友好的检查机制。

## 示例

```shell
$ ionic cordova plugin
$ ionic cordova plugin add cordova-plugin-inappbrowser@latest
$ ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=XXXXX
$ ionic cordova plugin rm cordova-plugin-camera
```

## 输入参数

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>action</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>
          <code>add</code> 或 <code>remove</code> 插件；<code>ls</code> 或 <code>save</code> 所有项目插件
        </p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>plugin</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>
          插件名称（对应 <code>add</code> 和 <code>remove</code> 操作）
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
          <a href="#option-variable" id="option-variable">
            --variable
            <span class="option-spec"> =&lt;KEY=VALUE&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>指定插件变量</p>
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
          <a href="#option-force" id="option-force">
            --force
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
            强制覆盖已存在的插件（对应 <code>add</code> 操作）
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>