---
sidebar_label: 'capacitor copy'
---

# ionic capacitor copy

将 Web 资源复制到原生平台

```shell
ionic capacitor copy [选项]
```

`ionic capacitor copy` 命令将执行以下操作：

- 执行 Ionic 构建，编译 Web 资源
- 将 Web 资源复制到 Capacitor 原生平台

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
      <th>说明</th>
      <td>
        <p>
          要复制的目标平台（例如 <code>android</code>、<code>ios</code>、<code>electron</code>）
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
      <th>说明</th>
      <td>
        <p>不执行 Ionic 构建</p>
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
      <th>说明</th>
      <td>
        <p>
          使用 <code>production</code> 配置的标识
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
      <th>说明</th>
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
      <th>说明</th>
      <td>
        <div>
          <p>输出源代码映射</p>
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
      <th>说明</th>
      <td>
        <div>
          <p>文件变更时重新构建</p>
        </div>
      </td>
    </tr>
  </tbody>
</table>