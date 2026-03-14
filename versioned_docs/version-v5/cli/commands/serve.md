---
sidebar_label: 'serve'
---

# ionic serve

启动本地开发服务器用于应用开发与测试

```shell
ionic serve [options]
```

轻松启动一个将在浏览器中打开的开发服务器。它会监视源文件中的更改，并自动重新加载更新后的构建。

默认情况下，`ionic serve` 在 `localhost` 上启动开发服务器。若要向局域网提供服务，请指定 `--external` 选项，该选项将使用所有网络接口，并打印服务你的应用的外部地址。

尝试使用 `--lab` 选项可同时查看多个平台。

`ionic serve` 使用 Angular CLI。使用 `ng serve --help` 可列出为应用提供服务的所有 Angular CLI 选项。请参阅 `ng serve` [文档](https://angular.io/cli/serve) 以获取解释。下面未列出的选项被视为高级选项，可以在 Ionic CLI 参数后使用 `--` 分隔符传递给 Angular CLI。请参阅示例。

开发服务器可以通过 `--ssl` 选项使用 HTTPS **(实验性功能)**。HTTPS 存在一些已知问题。请参阅 issue [#3305](https://github.com/ionic-team/ionic-cli/issues/3305)。

## 示例

```shell
$ ionic serve
$ ionic serve --external
$ ionic serve --lab
$ ionic serve -- --proxy-config proxy.conf.json
```

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
            --no-livereload
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>不启动开发服务器——仅提供文件服务</p>
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
        <p>不打开浏览器窗口</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-lab" id="option-lab">
            --lab
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>在浏览器中同时测试你的应用在多个平台类型上的效果</p>
      </td>
    </tr>
    <tr>
      <th>别名</th>
      <td>
        <code>-l</code>
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
          <p>将应用控制台日志打印到终端</p>
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
          <p>输出源码映射</p>
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
          <p>用于浏览器或 Web 视图的主机</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-lab-host" id="option-lab-host">
            --lab-host
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
          <p>为 Ionic Lab 服务器使用特定主机</p>
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
          <a href="#option-lab-port" id="option-lab-port">
            --lab-port
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
          <p>为 Ionic Lab 服务器使用特定端口</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>默认值</th>
      <td>8200</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-browser" id="option-browser">
            --browser
            <span class="option-spec"> =&lt;browser&gt;</span>
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
            指定要使用的浏览器 (<code>safari</code>, <code>firefox</code>, <code>google chrome</code>)
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th>别名</th>
      <td>
        <code>-w</code>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-browseroption" id="option-browseroption">
            --browseroption
            <span class="option-spec"> =&lt;path&gt;</span>
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
            指定要打开的路径 (<code>/#/tab/dash</code>)
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th>别名</th>
      <td>
        <code>-o</code>
      </td>
    </tr>
  </tbody>
</table>