---
sidebar_label: 'ssh generate'
---

# ionic ssh generate

生成一对私钥和公钥 SSH 密钥

```shell
ionic ssh generate [options]
```

## 输入参数

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>key-path</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>说明</th>
      <td>
        <p>私钥文件的保存路径</p>
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
        <div>
          <p>
            要生成的密钥类型：<code>ecdsa</code>、<code>ed25519</code>、<code>rsa</code>
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th>别名</th>
      <td>
        <code>-t</code>
      </td>
    </tr>
    <tr>
      <th>默认值</th>
      <td>rsa</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-bits" id="option-bits">
            --bits
            <span class="option-spec"> =&lt;bits&gt;</span>
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
          <p>密钥的位数</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>别名</th>
      <td>
        <code>-b</code>
      </td>
    </tr>
    <tr>
      <th>默认值</th>
      <td>2048</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-annotation" id="option-annotation">
            --annotation
            <span class="option-spec"> =&lt;annotation&gt;</span>
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
          <p>公钥中的注释信息。默认会使用您的 Ionic 邮箱地址</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>别名</th>
      <td>
        <code>-C</code>
      </td>
    </tr>
  </tbody>
</table>