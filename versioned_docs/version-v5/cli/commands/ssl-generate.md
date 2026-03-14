---
sidebar_label: 'ssl generate'
---

# ionic ssl generate

生成 SSL 密钥和证书

```shell
ionic ssl generate [options]
```

使用 OpenSSL 为 **localhost**（默认）创建自签名证书。

生成证书后，您仍然需要将其添加到系统或浏览器中作为受信任证书。

`--key-path` 和 `--cert-path` 的默认目录是 `.ionic/ssl/`。

## 选项

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-key-path" id="option-key-path">
            --key-path
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
        <p>私钥文件的目标路径</p>
      </td>
    </tr>
    <tr>
      <th>默认值</th>
      <td>./.ionic/ssl/key.pem</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-cert-path" id="option-cert-path">
            --cert-path
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
        <p>证书文件的目标路径</p>
      </td>
    </tr>
    <tr>
      <th>默认值</th>
      <td>./.ionic/ssl/cert.pem</td>
    </tr>
  </tbody>
</table>

## 高级选项

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-country-name" id="option-country-name">
            --country-name
            <span class="option-spec"> =&lt;C&gt;</span>
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
          <p>SSL 证书的国家名称 (C)</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>默认值</th>
      <td>US</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-state-or-province-name" id="option-state-or-province-name">
            --state-or-province-name
            <span class="option-spec"> =&lt;ST&gt;</span>
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
          <p>SSL 证书的州或省名称 (ST)</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>默认值</th>
      <td>Wisconsin</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-locality-name" id="option-locality-name">
            --locality-name
            <span class="option-spec"> =&lt;L&gt;</span>
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
          <p>SSL 证书的城市名称 (L)</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>默认值</th>
      <td>Madison</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-organization-name" id="option-organization-name">
            --organization-name
            <span class="option-spec"> =&lt;O&gt;</span>
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
          <p>SSL 证书的组织名称 (O)</p>
        </div>
      </td>
    </tr>
    <tr>
      <th>默认值</th>
      <td>Ionic</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-common-name" id="option-common-name">
            --common-name
            <span class="option-spec"> =&lt;CN&gt;</span>
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
          <p>SSL 证书的通用名称 (CN)</p>
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
      <th>描述</th>
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
</table>