---
sidebar_label: 'capacitor build'
---

# ionic capacitor build

为指定平台构建 Ionic 项目

```shell
ionic capacitor build [options]
```

`ionic capacitor build` 将执行以下操作：

- 执行 `ionic build`
- 将 Web 资源复制到指定的原生平台
- 打开原生项目的 IDE（iOS 使用 Xcode，Android 使用 Android Studio）

一旦 Web 资源和配置被复制到您的原生项目中，您就可以使用原生 IDE 来构建您的应用。目前尚不支持以编程方式构建原生项目。

要配置您的原生项目，请参阅通用配置 [文档](https://capacitorjs.com/docs/basics/configuring-your-app) 以及 [iOS](https://capacitorjs.com/docs/ios/configuration) 和 [Android](https://capacitorjs.com/docs/android/configuration) 的底层配置。

## 示例

```shell
$ ionic capacitor build
$ ionic capacitor build android
$ ionic capacitor build ios
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
          要构建的目标平台（例如 <code>android</code>, <code>ios</code>）
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
      <th>描述</th>
      <td>
        <p>不执行 Ionic build</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-open" id="option-open">
            --no-open
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>不执行 Capacitor open</p>
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
      <th>描述</th>
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
      <th>描述</th>
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
      <th>描述</th>
      <td>
        <div>
          <p>输出 source maps</p>
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
      <th>描述</th>
      <td>
        <div>
          <p>当文件更改时重新构建</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>