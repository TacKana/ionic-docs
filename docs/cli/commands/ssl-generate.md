---
title: "ionic ssl generate"
sidebar_label: "ssl generate"
translated: true
source_hash: 7e726553
---



生成 SSL 密钥和证书

```shell
$ ionic ssl generate [options]
```

使用 OpenSSL 为 **localhost**（默认）创建自签名证书。

生成证书后，您仍需要将其添加到系统或浏览器中作为受信任的证书。

`--key-path` 和 `--cert-path` 的默认目录是 `.ionic/ssl/`。

### 选项

 - `--key-path=<path>`: 私钥文件的目标路径
      
 - `--cert-path=<path>`: 证书文件的目标路径
      


### 高级选项

 - `--country-name=<C>`: SSL 证书的国家/地区名称（C）
      
 - `--state-or-province-name=<ST>`: SSL 证书的州或省名称（ST）
      
 - `--locality-name=<L>`: SSL 证书的地区名称（L）
      
 - `--organization-name=<O>`: SSL 证书的组织名称（O）
      
 - `--common-name=<CN>`: SSL 证书的通用名称（CN）
      
 - `--bits=<bits>`: 密钥的位数（或 `-b`）
      
