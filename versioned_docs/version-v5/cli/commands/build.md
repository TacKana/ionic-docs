---
title: 'Angular NG Build Configuration to Build Ionic Apps | ionic build'
description: '构建 Web 资源并准备您的 Ionic 应用以适配任何平台目标。Ionic build 使用 Angular CLI——有关如何使用配置的详细信息，请参阅 ng build 文档。'
sidebar_label: 'build'
---

# ionic build

构建 Web 资源并准备您的应用以适配任何平台目标

```shell
ionic build [选项]
```

`ionic build` 将执行 Ionic 构建，该操作会编译 Web 资源并准备部署。

`ionic build` 使用 Angular CLI。使用 `ng build --help` 可列出构建应用的所有 Angular CLI 选项。有关解释，请参阅 `ng build` [文档](https://angular.io/cli/build)。下面未列出的选项被视为高级选项，可以在 Ionic CLI 参数后使用 `--` 分隔符传递给 `ng` CLI。请参阅示例。

## 示例

```shell
$ ionic build
$ ionic build --prod
$ ionic build --watch
```

## 选项

<table className="reference-table">
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
      <th>描述</th>
      <td>
        <div>
          <p>文件更改时重新构建</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-engine" id="option-engine">
            --engine
            <span class="option-spec"> =&lt;engine&gt;</span>
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
            目标引擎（例如 <code>browser</code>、<code>cordova</code>）
          </p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-platform" id="option-platform">
            --platform
            <span class="option-spec"> =&lt;platform&gt;</span>
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
            所选引擎的目标平台（例如 <code>ios</code>、<code>android</code>）
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>