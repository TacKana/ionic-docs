---
sidebar_label: 'deploy configure'
---

# ionic deploy configure

覆盖 Appflow Deploy 配置

```shell
ionic deploy configure [options]
```

此命令用于覆盖 Capacitor 项目中 Appflow Deploy 插件 (`cordova-plugin-ionic`) 的配置。

对于 Capacitor 项目，如果插件已安装，此命令会覆盖原生项目中的配置变量。

对于 Cordova 项目，此功能尚未实现，因为更好的做法是重新安装带有不同参数的插件，并让 Cordova 处理这些更改。

## 示例

```shell
$ ionic deploy configure
$ ionic deploy configure --app-id=abcd1234 --channel-name="Master" --update-method=background
$ ionic deploy configure --max-store=2 --min-background-duration=30
$ ionic deploy configure --app-id=abcd1234 --channel-name="Master" --update-method=background --max-store=2 --min-background-duration=30
$ ionic deploy configure android
$ ionic deploy configure ios
```

## 输入参数

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>platform</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>
          原生平台 (例如 <code>ios</code>, <code>android</code>)
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
      <th>描述</th>
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
      <th>描述</th>
      <td>
        <p>检查更新的频道名称</p>
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
      <th>描述</th>
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
      <th>描述</th>
      <td>
        <div>
          <p>设备上存储的已下载版本的最大数量</p>
        </div>
      </td>
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
      <th>描述</th>
      <td>
        <div>
          <p>应用在后台检查更新的最短时间间隔（秒）</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>