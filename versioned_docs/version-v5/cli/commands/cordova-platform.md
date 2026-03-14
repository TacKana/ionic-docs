---
title: 'ionic cordova platform：移除、添加与管理 Cordova 平台'
description: '使用 ionic cordova platform 管理、添加和移除 Cordova 平台。类似于直接运行 cordova，但会添加默认的 Ionic 图标和启动画面资源，并提供友好的检查。'
sidebar_label: 'cordova platform'
---

# ionic cordova platform

管理 Cordova 平台目标

```shell
ionic cordova platform [options]
```

类似于直接运行 `cordova platform`，但会添加默认的 Ionic 图标和启动画面资源（在 `add` 操作期间），并提供友好的检查。

## 示例

```shell
$ ionic cordova platform
$ ionic cordova platform add ios
$ ionic cordova platform add android
$ ionic cordova platform rm ios
```

## 输入参数

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>action</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>
          对平台执行 <code>add</code>（添加）、<code>remove</code>（移除）或 <code>update</code>（更新）操作；或 <code>ls</code>（列出）、<code>check</code>（检查）、<code>save</code>（保存）所有项目平台
        </p>
      </td>
    </tr>
  </tbody>
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
          要添加的平台（例如 <code>android</code>、<code>ios</code>）
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
          <a href="#option-resources" id="option-resources">
            --no-resources
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
          不预生成图标和启动画面资源（对应于 <code>add</code> 操作）
        </p>
      </td>
    </tr>
  </tbody>
</table>