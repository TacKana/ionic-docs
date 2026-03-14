# 使用 Ionic 监控实时追踪 Bug

Bug 总是会出现，而且往往难以追踪——尤其是在面对数百种可能的移动设备和操作系统组合时。Appflow 监控功能允许您追踪用户手机上应用发生的错误，并立即将这些错误直接发送给您，即使您的代码已经过压缩处理！

通过快速修复生产环境应用中的重大问题来减少客户困扰，这是提供高质量应用体验的重要组成部分。结合 Appflow 部署功能，您可以快速推出新更新以实时解决问题。

首先，我们添加一个全局错误处理器，用于捕获并报告应用中所有未处理的异常。打开 `src/app/app.module.ts`，然后添加两条导入语句：

```javascript
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
```

接下来，创建一个错误处理类，每当遇到任何错误时都会调用监控服务的 API：

```javascript
@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch (e) {
      // 无法获取 IonicErrorHandler 提供程序，请确保
      // 已将 IonicErrorHandler 添加到下面的提供程序列表中
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);

    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}
```

然后，在提供程序数组中，将 IonicErrorHandler 更新为 MyErrorHandler：

```javascript
{provide: ErrorHandler, useClass: MyErrorHandler},
```

修改后的代码应如下所示：

```javascript
providers: [
  // ...
  IonicErrorHandler,
  [{ provide: ErrorHandler, useClass: MyErrorHandler }],
];
```

接下来，我们故意制造一个 Bug，来演示 Ionic 监控的强大功能。打开 `about.html`，将 takePicture 方法重命名为一个不存在的方法，例如 "takePhoto"：

```html
<button ion-fab (click)="photoService.takePhoto()"></button>
```

完成此更改后，每当用户点击相机按钮时，都会抛出异常并发送到 Ionic 的监控服务。

最后，我们需要为您的应用创建源映射文件。该文件能够提供回溯到原始未压缩 TypeScript 代码的堆栈跟踪，使监控功能能够轻松定位问题。

通过运行以下命令同步当前版本的应用：

```shell
ionic monitoring syncmaps
```

放置好我们故意制造的错误后，让我们来测试一下会发生什么。在本地运行您的应用：

```shell
ionic serve
```

点击图库标签页，然后点击相机按钮。此时应该会出现运行时错误。在浏览器中，前往 [Appflow 仪表板](https://dashboard.ionicframework.com)，然后点击监控 -> 监控。几分钟后，错误应该会出现：

![显示状态为“新”的错误“takePhoto 不是函数”的事件](/img/guides/first-app-v3/monitoring-event.png 'Ionic 监控事件概览')

点击事件会显示许多相关详细信息，例如完整的堆栈跟踪。在这个实例中，我们看到该错误在 Mac OS X 的 Chrome 浏览器中发生了三次。

![事件日志的详细视图，显示 TypeError 堆栈跟踪以及设备、浏览器和操作系统等错误详细信息](/img/guides/first-app-v3/monitoring-details.png 'Ionic 监控事件日志详情')

考虑到如今移动设备和操作系统的激增，这个功能非常强大。借助这些详细信息，我们可以专注解决问题并快速修复。

这是一个 TypeScript 错误，意味着可以使用实时更新功能发布修复。试试看吧！

- 将方法恢复为 "takePicture"。
- 使用 Git 推送修复。记住使用 "git push ionic master"。
- 通过 Ionic 仪表板使用实时更新功能推出修复。

借助 Appflow 监控功能，支持数百种移动设备类型变得容易得多。[立即升级到 Appflow 开发者计划](https://dashboard.ionicframework.com/settings/billing)，即可在 Bug 发生时获得即时通知，将错误历史记录保存六十天（而不是七天），并每月解锁 10,000 次实时部署更新！