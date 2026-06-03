---
title: "ionic ssh generate"
sidebar_label: "ssh generate"
translated: true
source_hash: 719818a7
---



生成私钥和公钥 SSH 密钥对

```shell
$ ionic ssh generate [key-path] [options]
```



### key-path
私钥文件的目标路径




### 高级选项

 - `--type=<type>`: 要生成的密钥类型：`ecdsa`、`ed25519`、`rsa`（或 `-t`）
      
 - `--bits=<bits>`: 密钥的位数（或 `-b`）
      
 - `--annotation=<annotation>`: 公钥中的注释（备注）。将使用您的 Ionic 电子邮件地址（或 `-C`）
      
