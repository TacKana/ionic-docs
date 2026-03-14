# 预览

根据您的目标平台和需求，有多种不同的选项来测试原生功能。

- 在本地 Web 浏览器中运行（使用[平台检测](../core-concepts/cross-platform.md)实现原生功能）
- [部署到 iOS](ios.md)
- [部署到 Android](android.md)

## 在本地 Web 浏览器中运行

Ionic 最强大的功能之一是，您的大部分应用开发都可以直接在桌面浏览器中进行。借助完整的传统 Web 开发工具（Chrome/Safari/Firefox 开发者工具），您可以编写代码，然后快速测试/调试，无需重新编译或部署到模拟器或设备上。

为此，请在项目目录的命令行中运行 `ionic serve`：

```shell-session
$ ionic serve
> ng run app:serve --host=0.0.0.0 --port=8100

[INFO] 开发服务器正在运行！

       本地地址：http://localhost:8100
       外部地址：http://192.168.1.169:8100

       按 Ctrl+C 退出此进程

[INFO] 浏览器窗口已打开至 http://localhost:8100！
```

当 `ionic serve` 运行时，您可以继续开发您的应用程序。当您保存更改时，应用程序将重新加载并应用这些更改。

实现原生功能时，请使用[平台检测](../core-concepts/cross-platform.md)。
当您准备好在实际设备上进行测试时，请参阅[iOS](ios.md)和[Android](android.md)的相关说明。