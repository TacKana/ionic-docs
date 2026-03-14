---
title: '如何使用 Ionic Start 创建新应用项目'
description: '学习如何使用 Ionic Start 创建新的应用项目。该命令会创建一个可运行的 Ionic 应用，自动安装依赖项并设置项目结构。'
sidebar_label: 'start'
---

# ionic start

创建新项目

```shell
ionic start [options]
```

此命令用于创建一个可直接运行的 Ionic 应用。它会自动为您安装依赖项并完成项目配置。

如果直接运行 `ionic start` 而不带任何参数，系统将提示您输入新项目的相关信息。

第一个参数是应用的 `name`（名称）。请放心，后续随时可以修改此名称。除非明确指定，否则 `--project-id` 将根据 `name` 自动生成。

第二个参数是用于生成应用的 `template`（模板）。您可以使用 `--list` 选项查看所有可用模板。您也可以为 `template` 指定一个 Git 仓库 URL，此时将直接克隆现有项目。

使用 `--type` 选项可创建基于旧版 Ionic 的项目。例如，您可以通过 `--type=ionic-angular` 创建 Ionic 3 项目。使用 `--list` 可查看所有项目类型和模板。

## 示例

```shell
$ ionic start
$ ionic start --list
$ ionic start myApp
$ ionic start myApp blank
$ ionic start myApp tabs --cordova
$ ionic start myApp tabs --capacitor
$ ionic start myApp super --type=ionic-angular
$ ionic start myApp blank --type=ionic1
$ ionic start cordovaApp tabs --cordova
$ ionic start "My App" blank
$ ionic start "Conference App" https://github.com/ionic-team/ionic-conference-app
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
          新项目的名称（例如 <code>myApp</code>, <code>"My App"</code>）
        </p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>template</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>
          使用的初始模板（例如 <code>blank</code>, <code>tabs</code>；使用 <code>--list</code> 查看所有选项）
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
          <a href="#option-list" id="option-list">
            --list
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>列出可用的初始模板</p>
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
          要创建的项目类型（例如 <code>angular</code>, <code>react</code>, <code>ionic-angular</code>,{' '}
          <code>ionic1</code>）
        </p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-cordova" id="option-cordova">
            --cordova
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>包含 Cordova 集成</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-capacitor" id="option-capacitor">
            --capacitor
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>包含 Capacitor 集成</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-id" id="option-id">
            --id
            <span class="option-spec"> =&lt;id&gt;</span>
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>指定要关联的 Ionic App ID</p>
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
          <a href="#option-deps" id="option-deps">
            --no-deps
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
          <p>不安装 npm/yarn 依赖项</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-git" id="option-git">
            --no-git
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
          <p>不初始化 git 仓库</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-link" id="option-link">
            --link
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
          <p>将新应用连接到 Ionic</p>
        </div>
      </td>
    </tr>
  </tbody>
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
          <p>为应用指定一个 slug（用于目录名和包名）</p>
        </div>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-package-id" id="option-package-id">
            --package-id
            <span class="option-spec"> =&lt;id&gt;</span>
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
          <p>为应用指定 bundle ID/application ID（反向 DNS 表示法）</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>