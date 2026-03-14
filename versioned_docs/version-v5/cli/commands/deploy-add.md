---
sidebar_label: 'deploy add'
---

# ionic deploy add

向项目中添加 Appflow Deploy 功能

```shell
ionic deploy add [options]
```

此命令为 Capacitor 和 Cordova 项目添加 Appflow Deploy 插件 (`cordova-plugin-ionic`)。

对于 Capacitor 项目，该命令会执行安装插件的所有必要步骤，与原生项目同步，并将配置添加到相应的 iOS 和 Android 配置文件中。

对于 Cordova 项目，该命令仅负责使用提交的参数运行相应的 Cordova CLI 命令。

## 示例

```shell
$ ionic deploy add
$ ionic deploy add --app-id=abcd1234 --channel-name="Master" --update-method=background
$ ionic deploy add --max-store=2 --min-background-duration=30
$ ionic deploy add --app-id=abcd1234 --channel-name="Master" --update-method=background --max-store=2 --min-background-duration=30
```

## 选项

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-app-id" id="option-app-id">
            --app-id
            <span class="option-spec"> =&lt;id&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>您的 Appflow 应用 ID</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-channel-name" id="option-channel-name">
            --channel-name
            <span class="option-spec"> =&lt;name&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>检查更新的渠道名称</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-update-method" id="option-update-method">
            --update-method
            <span class="option-spec"> =&lt;name&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>决定插件行为的更新方法</p>
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
          <a href="#option-max-store" id="option-max-store">
            --max-store
            <span class="option-spec"> =&lt;quantity&gt;</span>
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
          <p>设备上存储的已下载版本的最大数量</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>默认值</th>
      <td>2</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-min-background-duration" id="option-min-background-duration">
            --min-background-duration
            <span class="option-spec"> =&lt;seconds&gt;</span>
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
          <p>应用程序在后台检查更新的最短时间间隔（秒）</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>默认值</th>
      <td>30</td>
    </tr>
  </tbody>
</table>