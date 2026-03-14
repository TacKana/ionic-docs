---
sidebar_label: 'package build'
---

# ionic package build

在 Appflow 上创建应用包构建

```shell
ionic package build [options]
```

此命令用于在 Appflow 上创建应用包构建。在构建运行时，它会将远程构建日志输出到终端。如果构建成功，它会在当前目录下下载生成的应用包文件。

除了 `--commit` 选项外，每个选项都可以使用 [控制面板](https://dashboard.ionicframework.com) 中设置的完整名称来指定。

对于任何 iOS 构建，`--signing-certificate` 选项都是必需的，但对于 Android 调试构建则不是必需的。

自定义构建：

- 可以使用 `--environment` 和 `--native-config` 选项来自定义暴露给构建的值组。
- 使用 `--build-stack` 覆盖首选平台。这对于构建较旧的 iOS 应用非常有用。

将构建部署到应用商店：

- 可以使用 `--destination` 选项将构建创建的应用交付到配置好的应用商店。这只能与 Android 的 `release` 构建类型以及 iOS 的 `app-store` 或 `enterprise` 构建类型一起使用。

## 示例

```shell
$ ionic package build android debug
$ ionic package build ios development --signing-certificate="iOS 签名证书名称"
$ ionic package build android debug --environment="我的自定义环境名称"
$ ionic package build android debug --native-config="我的自定义原生配置名称"
$ ionic package build android debug --commit=2345cd3305a1cf94de34e93b73a932f25baac77c
$ ionic package build ios development --signing-certificate="iOS 签名证书名称" --build-stack="iOS - Xcode 9"
$ ionic package build ios development --signing-certificate="iOS 签名证书名称" --build-file-name=my_custom_file_name.ipa
$ ionic package build ios app-store --signing-certificate="iOS 签名证书名称" --destination="Apple App Store 目标"
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
          要打包的平台 (<code>android</code>, <code>ios</code>)
        </p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>type</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>
          构建类型 (<code>debug</code>, <code>release</code>, <code>development</code>, <code>ad-hoc</code>,{' '}
          <code>app-store</code>, <code>enterprise</code>)
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
          <a href="#option-signing-certificate" id="option-signing-certificate">
            --signing-certificate
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
        <p>签名证书</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-environment" id="option-environment">
            --environment
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
        <p>暴露给构建的环境变量组</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-native-config" id="option-native-config">
            --native-config
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
        <p>暴露给构建的原生配置变量组</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-destination" id="option-destination">
            --destination
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
        <p>将构建产物部署到应用商店的配置</p>
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
          <a href="#option-commit" id="option-commit">
            --commit
            <span class="option-spec"> =&lt;sha1&gt;</span>
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
          <p>提交记录（默认为 HEAD）</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-build-stack" id="option-build-stack">
            --build-stack
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
        <div>
          <p>
            构建栈 (<code>"Android"</code>, <code>"iOS - Xcode 11 (Preferred)"</code>,{' '}
            <code>"iOS - Xcode 10"</code>)
          </p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-build-file-name" id="option-build-file-name">
            --build-file-name
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
        <div>
          <p>下载的构建文件的名称</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>