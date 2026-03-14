# 使用代理服务器

Ionic CLI 内置了代理支持功能。可以通过配置文件或环境变量来配置代理设置。

要通过配置文件配置代理设置，请运行以下命令并指定代理服务器的 URL：

```shell
ionic config set -g proxy http://proxy.example.com:8888
```

要通过环境变量配置代理设置，请使用以下命令之一：

```shell
$ export HTTP_PROXY="http://proxy.example.com:8888" # npm 也会使用此设置
$ export HTTPS_PROXY="https://proxy.example.com:8888" # npm 也会使用此设置
$ export IONIC_HTTP_PROXY="http://proxy.example.com:8888"
```

### 其他命令行工具

您使用的每个命令行工具都需要单独配置才能代理网络请求。

#### npm

```shell
npm config set proxy http://proxy.company.com:8888
```

#### git

```shell
git config --global http.proxy http://proxy.example.com:8888
```

### SSL 配置

可以配置 Ionic CLI 以使用不同的 SSL 设置进行 HTTP 请求。

```shell
$ ionic config set -g ssl.cafile /path/to/cafile # CA 根证书的文件路径
$ ionic config set -g ssl.certfile /path/to/certfile # 客户端证书的文件路径
$ ionic config set -g ssl.keyfile /path/to/keyfile # 客户端密钥文件的文件路径
```

`cafile`、`certfile` 和 `keyfile` 条目可以在 `~/.ionic/config.json` 中手动编辑为字符串数组，以包含多个文件。