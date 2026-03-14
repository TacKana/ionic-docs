---
sidebar_label: 'login'
---

# ionic login

登录 Ionic 账户

```shell
ionic login [options]
```

通过身份验证获取用户令牌，该令牌将存储在 CLI 配置中。最安全的登录方式是直接运行 `ionic login` 不带参数，这会在浏览器中打开页面供您提交凭据。

如果设置了 `IONIC_TOKEN` 环境变量，CLI 会自动进行身份验证。要获取您的用户令牌，请先使用 `ionic login <email> <password>` 登录，然后使用 `ionic config get -g tokens.user` 打印令牌。（**注意**：通过浏览器登录获取的令牌有效期较短，不建议与 `IONIC_TOKEN` 环境变量配合使用。）

`ionic login` 也支持通过标准输入传递 `password`，例如：`echo "<password>" | ionic login <email>`。

如果您需要创建 Ionic 账户，请使用 `ionic signup` 命令或访问 Ionic [官网](https://ionicframework.com/signup)。

您可以在 [控制面板](https://dashboard.ionicframework.com/reset-password) 重置密码。

如果遇到登录问题，请通过 [支持渠道](https://ion.link/support-request) 联系我们。

## 使用示例

```shell
$ ionic login
$ ionic login john@example.com
$ ionic login hello@example.com secret
```

## 输入参数

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>email</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>您的电子邮件地址</p>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>password</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>描述</th>
      <td>
        <p>您的密码</p>
      </td>
    </tr>
  </tbody>
</table>