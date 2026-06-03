---
title: 使用代理
sidebar_label: 使用代理
---

# 使用代理

代理支持内置于 Ionic CLI 中。可以通过配置文件或环境变量来配置代理设置。

要通过配置文件配置代理设置，请使用代理服务器的 URL 运行以下命令：

```shell
ionic config set -g proxy http://proxy.example.com:8888
```

要通过环境变量配置代理设置，请使用以下之一：

```shell
$ export HTTP_PROXY="http://proxy.example.com:8888" # 也被 npm 使用
$ export HTTPS_PROXY="https://proxy.example.com:8888" # 也被 npm 使用
$ export IONIC_HTTP_PROXY="http://proxy.example.com:8888"
```

### 其他 CLI

您使用的每个 CLI 都必须单独配置以代理网络请求。

#### npm

```shell
npm config set proxy http://proxy.company.com:8888
```

#### git

```shell
git config --global http.proxy http://proxy.example.com:8888
```

### SSL 配置

Ionic CLI 可以配置为对 HTTP 请求使用各种 SSL 设置。

```shell
$ ionic config set -g ssl.cafile /path/to/cafile # CA 根证书的文件路径
$ ionic config set -g ssl.certfile /path/to/certfile # 客户端证书的文件路径
$ ionic config set -g ssl.keyfile /path/to/keyfile # 客户端密钥文件的文件路径
```

`cafile`、`certfile` 和 `keyfile` 条目可以手动编辑为 `~/.ionic/config.json` 中的字符串数组，以包含多个文件。
