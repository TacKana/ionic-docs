---
sidebar_label: 'cordova build'
---

# ionic cordova build

使用 Cordova 构建 Android 和 iOS 平台目标

```shell
ionic cordova build [options]
```

与直接运行 `cordova build` 类似，`ionic cordova build` 也会从 `ionic build` 构建 Web 资源，并为 Android 和 iOS 平台提供友好的检查。

要向 Cordova CLI 传递额外选项，请在 Ionic CLI 参数后使用 `--` 分隔符。

Cordova CLI 要求为 Android [构建](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#using-flags)的平台特定参数使用分隔符，因此 Ionic CLI 需要额外分隔符，但 iOS [构建](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#using-flags)不需要。请查看示例命令了解分隔符的使用方法。为避免使用标志，可考虑使用 `--buildConfig` 配合 **build.json** 文件。

## 示例

```shell
$ ionic cordova build android
$ ionic cordova build android --buildConfig=build.json
$ ionic cordova build android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
$ ionic cordova build android --prod --release -- -- --keystore=filename.keystore --alias=myalias
$ ionic cordova build android --prod --release -- -- --minSdkVersion=21
$ ionic cordova build android --prod --release -- -- --versionCode=55
$ ionic cordova build android --prod --release --buildConfig=build.json
$ ionic cordova build ios
$ ionic cordova build ios --buildConfig=build.json
$ ionic cordova build ios --prod --release
$ ionic cordova build ios --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"
$ ionic cordova build ios --prod --release --buildConfig=build.json
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
          要构建的平台（例如 <code>android</code>、<code>ios</code>）
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
        <p>不触发 Ionic 构建</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-debug" id="option-debug">
            --debug
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>标记为调试构建</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-release" id="option-release">
            --release
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>标记为发布构建</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-device" id="option-device">
            --device
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>将构建部署到设备</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-emulator" id="option-emulator">
            --emulator
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>将构建部署到模拟器</p>
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
          <a href="#option-buildConfig" id="option-buildConfig">
            --buildConfig
            <span class="option-spec"> =&lt;file&gt;</span>
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
          <p>使用指定的构建配置</p>
        </div>
      </td>
    </tr>
  </tbody>
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
          <p>指定要使用的配置</p>
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
          <p>输出源码映射</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>