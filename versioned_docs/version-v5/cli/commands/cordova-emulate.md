---
title: '使用 Ionic Cordova 模拟器运行 Android 和 iOS 应用'
description: '在模拟器上运行 Ionic 项目，适用于 Android 和 iOS 应用。通过 Ionic Cordova Emulator 构建您的应用并部署到设备和模拟器。'
sidebar_label: 'cordova emulate'
---

# ionic cordova emulate

在模拟器上运行 Ionic 项目

```shell
ionic cordova emulate [options]
```

使用此命令构建您的应用并将其部署到设备和模拟器。可选地指定 `--livereload` 选项以使用 `ionic serve` 中的开发服务器实现热重载功能。

此命令首先会使用 `ionic build` 构建 Web 资源（或使用 `--livereload` 选项的 `ionic serve`）。然后，使用 `cordova build` 编译和准备您的应用。最后，使用 `native-run` [工具](https://github.com/ionic-team/native-run) 在设备上运行您的应用。要在此过程中使用 Cordova 替代，请使用 `--no-native-run` 选项。

如果您有多个设备和模拟器，可以使用 `--target` 选项指定目标设备。您可以使用 `--list` 列出所有目标设备。

对于 Android 和 iOS，您可以使用这些[文档](https://ionicframework.com/docs/developer-resources/developer-tips)在设备上设置远程调试，以便使用浏览器开发工具。

当在硬件设备上使用 `--livereload` 时，请记住热重载需要设备与计算机之间的活动连接。在某些情况下，您可能需要使用 `--external` 选项在外部地址上托管开发服务器。有关更多信息，请参阅这些[文档](https://ionicframework.com/docs/cli/livereload)。

就像 `ionic cordova build` 一样，您可以使用 `--` 分隔符将其他选项传递给 Cordova CLI。要将其他选项传递给开发服务器，请考虑单独使用 `ionic serve` 并使用 `--livereload-url` 选项。

## 示例

```shell
$ ionic cordova emulate android
$ ionic cordova emulate android --buildConfig=build.json
$ ionic cordova emulate android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true
$ ionic cordova emulate android --prod --release -- -- --keystore=filename.keystore --alias=myalias
$ ionic cordova emulate android --prod --release -- -- --minSdkVersion=21
$ ionic cordova emulate android --prod --release -- -- --versionCode=55
$ ionic cordova emulate android --prod --release --buildConfig=build.json
$ ionic cordova emulate android -l
$ ionic cordova emulate ios
$ ionic cordova emulate ios --buildConfig=build.json
$ ionic cordova emulate ios --livereload --external
$ ionic cordova emulate ios --livereload-url=http://localhost:8100
$ ionic cordova emulate ios --prod --release
$ ionic cordova emulate ios --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"
$ ionic cordova emulate ios --prod --release --buildConfig=build.json
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
          要运行的平台（例如 <code>android</code>、<code>ios</code>）
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
          <a href="#option-ssl" id="option-ssl">
            --ssl
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>为开发服务器使用 HTTPS</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-list" id="option-list">
            --list
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>列出所有可用的目标设备</p>
      </td>
    </tr>
  </tbody>
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
        <p>不调用 Ionic 构建</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-external" id="option-external">
            --external
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
          在所有网络接口上托管开发服务器（即 <code>--host=0.0.0.0</code>）
        </p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-livereload" id="option-livereload">
            --livereload
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>启动开发服务器以热重载 www 文件</p>
      </td>
    </tr>
    <tr>
      <th>别名</th>
      <td>
        <code>-l</code>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-livereload-url" id="option-livereload-url">
            --livereload-url
            <span class="option-spec"> =&lt;url&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>提供开发服务器的自定义 URL</p>
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
          <a href="#option-native-run" id="option-native-run">
            --no-native-run
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
          不使用 <code>native-run</code> 运行应用；改用 Cordova
        </p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-connect" id="option-connect">
            --connect
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>将运行中的应用与进程绑定</p>
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
          <a href="#option-consolelogs" id="option-consolelogs">
            --consolelogs
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
          <p>将应用控制台日志输出到终端</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-consolelogs-port" id="option-consolelogs-port">
            --consolelogs-port
            <span class="option-spec"> =&lt;port&gt;</span>
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
          <p>为控制台日志服务器使用特定端口</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-host" id="option-host">
            --host
            <span class="option-spec"> =&lt;host&gt;</span>
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
          <p>为开发服务器使用特定主机</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>默认值</th>
      <td>localhost</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-port" id="option-port">
            --port
            <span class="option-spec"> =&lt;port&gt;</span>
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
          <p>为开发服务器使用特定端口</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>别名</th>
      <td>
        <code>-p</code>
      </td>
    </tr>
    <tr>
      <th>默认值</th>
      <td>8100</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-public-host" id="option-public-host">
            --public-host
            <span class="option-spec"> =&lt;host&gt;</span>
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
          <p>浏览器或 Web 视图使用的主机</p>
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
          <p>输出源映射</p>
        </div>
      </td>
    </tr>
  </tbody>
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
          <a href="#option-target" id="option-target">
            --target
            <span class="option-spec"> =&lt;target&gt;</span>
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
            将构建部署到特定设备（使用 <code>--list</code> 查看所有设备）
          </p>
        </div>
      </td>
    </tr>
  </tbody>
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
      <th>描述</th>
      <td>
        <div>
          <p>以 JSON 格式输出目标设备</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>