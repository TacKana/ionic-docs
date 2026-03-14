---
sidebar_label: 'deploy build'
---

# ionic deploy build

在 Appflow 上创建部署构建

```shell
ionic deploy build [options]
```

此命令会在 Appflow 上创建部署构建。当构建运行时，它会将远程构建日志输出到终端。

自定义构建：

- 可以使用 `--environment` 和 `--channel` 选项来定制暴露给构建的变量组。

除了 `--commit` 之外，所有选项都可以使用在 Appflow [仪表板](https://dashboard.ionicframework.com) 中设置的完整名称来指定。

## 示例

```shell
$ ionic deploy build
$ ionic deploy build --environment="我的自定义环境名称"
$ ionic deploy build --commit=2345cd3305a1cf94de34e93b73a932f25baac77c
$ ionic deploy build --channel="Master"
$ ionic deploy build --channel="Master" --channel="我的自定义频道"
```

## 选项

<table className="reference-table">
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
        <p>暴露给你的构建的环境变量组</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-channel" id="option-channel">
            --channel
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
        <p>
          你想要自动部署构建的频道。如果需要指定多个频道，此选项可以重复多次。
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
          <p>提交（默认为 HEAD）</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>