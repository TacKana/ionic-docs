---
sidebar_label: 'cordova prepare'
---

# ionic cordova prepare

将资源复制到 Cordova 平台，为原生构建做好准备

```shell
ionic cordova prepare [options]
```

`ionic cordova prepare` 会执行以下操作：

- 执行 Ionic 构建，将 Web 资源编译到 **www/** 目录。
- 将 **www/** 目录复制到您的 Cordova 平台中。
- 将 **config.xml** 转换为平台特定的清单文件。
- 将图标和启动画面从 **resources/** 复制到您的 Cordova 平台中。
- 将插件文件复制到指定的平台。

如果您使用 Android Studio 或 Xcode 运行项目，可能会用到 `ionic cordova prepare`。

## 示例

```shell
$ ionic cordova prepare
$ ionic cordova prepare ios
$ ionic cordova prepare android
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
      <th>说明</th>
      <td>
        <p>
          您想要准备的平台（例如 <code>android</code>、<code>ios</code>）
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
          <a href="#option-build" id="option-build">
            --no-build
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>不调用 Ionic 构建</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-prod" id="option-prod">
            --prod
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>
          使用 <code>production</code> 配置的标志
        </p>
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
          <a href="#option-configuration" id="option-configuration">
            --configuration
            <span class="option-spec"> =&lt;conf&gt;</span>
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
          <p>指定要使用的配置。</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>别名</th>
      <td>
        <code>-c</code>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-source-map" id="option-source-map">
            --source-map
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
          <p>输出源映射</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-watch" id="option-watch">
            --watch
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
          <p>文件更改时重新构建</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>