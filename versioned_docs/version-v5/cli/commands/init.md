---
sidebar_label: 'init'
---

# ionic init

为现有项目初始化 Ionic 配置

```shell
ionic init [options]
```

此命令将在当前目录下初始化一个 Ionic 应用。通常，这意味着会创建一个 `ionic.config.json` 文件。如果在多应用项目中使用，应用将在根目录的 `ionic.config.json` 中初始化。

`ionic init` 会提示输入项目名称，然后继续确定您的项目类型。您可以通过命令行指定 `name` 参数和 `--type` 选项来提供这些值。

如果指定了 `--multi-app` 标志，此命令会将您的项目初始化为多应用项目，支持在 monorepo 和非传统仓库结构中管理多个应用。详见多应用项目的[文档](https://ionicframework.com/docs/cli/configuration#multi-app-projects)。一旦多应用项目初始化完成，您可以在项目中的应用目录中再次运行 `ionic init` 来初始化它们。

## 示例

```shell
$ ionic init
$ ionic init "My App"
$ ionic init "My App" --type=angular
$ ionic init --multi-app
```

## 输入参数

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>name</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>
          您的项目名称（例如 <code>myApp</code>、<code>"My App"</code>）
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
          <a href="#option-type" id="option-type">
            --type
            <span class="option-spec"> =&lt;type&gt;</span>
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
          项目类型（例如 <code>angular</code>、<code>react</code>、<code>vue</code>、<code>custom</code>）
        </p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-force" id="option-force">
            --force
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>即使项目已存在也强制初始化</p>
      </td>
    </tr>
    <tr>
      <th>别名</th>
      <td>
        <code>-f</code>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-multi-app" id="option-multi-app">
            --multi-app
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>初始化为多应用项目</p>
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
          <a href="#option-project-id" id="option-project-id">
            --project-id
            <span class="option-spec"> =&lt;slug&gt;</span>
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
          <p>为您的应用指定一个简短标识符</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-default" id="option-default">
            --default
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
          <p>将初始化的应用标记为默认项目</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>