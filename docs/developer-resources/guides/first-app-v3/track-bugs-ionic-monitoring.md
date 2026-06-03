# 使用 Ionic Monitoring 实时跟踪错误

Bug 不可避免，并且很难追踪——尤其是在数百种移动设备和操作系统组合的情况下。Appflow Monitoring 允许您跟踪用户手机上应用中的错误，并立即将错误信息直接发送给您，即使您的代码已被混淆！

通过快速修复生产应用中的主要问题来减少客户困扰，是提供高质量应用体验的重要组成部分。结合 Appflow Deploy，可以快速推出新更新以实时解决问题。

首先，让我们添加一个全局错误处理器，用于捕获和报告应用中所有未处理的异常。打开 `src/app/app.module.ts`，然后添加两条 import 语句：

```javascript
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
```

接下来，创建一个错误处理器类，每当遇到错误时调用 Monitoring 服务的 API：

```javascript
@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch (e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);

    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}
```

然后，在 providers 数组中，将 IonicErrorHandler 更新为 MyErrorHandler：

```javascript
{provide: ErrorHandler, useClass: MyErrorHandler},
```

最终应如下所示：

```javascript
providers: [
  // ...
  IonicErrorHandler,
  [{ provide: ErrorHandler, useClass: MyErrorHandler }],
];
```

接下来，让我们故意制造一个错误，以便演示 Ionic Monitoring 的强大功能。打开 `about.html`，将 takePicture 方法重命名为一个不存在的方法，例如 "takePhoto"：

```html
<button ion-fab (click)="photoService.takePhoto()"></button>
```

此更改完成后，每当用户点击相机按钮时，都会抛出一个异常并发送到 Ionic 的 Monitoring 服务。

最后，我们需要为应用创建一个 Source Map。该文件使 Monitoring 能够通过提供映射回原始未混淆 TypeScript 代码的堆栈跟踪来轻松定位问题。

通过运行以下命令同步当前版本的应用：

```shell
ionic monitoring syncmaps
```

在我们故意制造的错误就位后，让我们测试一下看看会发生什么。在本地运行您的应用：

```shell
ionic serve
```

点击 Gallery 标签页，然后点击相机按钮。应该会发生一个运行时错误。在浏览器中，前往 [Appflow 控制面板](https://dashboard.ionicframework.com)，然后进入 Monitor -> Monitoring。几分钟后，错误应该会出现：

![显示错误 'takePhoto is not a function' 状态为 'New' 的事件。](/img/guides/first-app-v3/monitoring-event.png 'Ionic Monitoring 事件概览')

点击该事件会显示发生情况的详细信息，包括完整的堆栈跟踪。在这个例子中，我们看到错误在 Mac OS X 的 Chrome 浏览器中发生了三次。

![事件日志的详细视图，显示 TypeError 堆栈跟踪以及设备、浏览器和操作系统等错误详细信息。](/img/guides/first-app-v3/monitoring-details.png '详细的 Ionic Monitoring 事件日志')

考虑到当今移动设备和操作系统的 proliferation，这非常强大。有了这些详细信息，我们可以精确定位问题并快速修复。

这是一个 TypeScript 错误，意味着可以使用 Live Updates 发布修复。试试看！

- 将方法名改回 "takePicture"。
- 使用 Git 推送修复。记住，"git push ionic master"。
- 从 Ionic 控制面板使用 Live Updates 推出修复。

支持数百种移动设备类型，有了 Appflow Monitoring 就变得容易多了。[立即升级到 Appflow Developer 计划](https://dashboard.ionicframework.com/settings/billing)，在错误发生时即时获得通知，将错误历史保存六十天（而不是七天），并解锁每月 10,000 次实时 Deploy 更新！
