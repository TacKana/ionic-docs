# 使用 Ionic 监控实时追踪 Bug

Bug 总是会出现，而且很难追踪——尤其是在数百种可能的移动设备和操作系统组合中。Appflow 监控功能允许您追踪用户手机应用中的错误，并将它们即时直接发送给您，即使您的代码是压缩过的！

通过在生产应用中快速修复重大问题来减少客户困扰，是提供高质量应用体验的重要组成部分。结合 Appflow Deploy 功能，可以快速推出新的更新来解决实时问题。

首先，我们来添加一个全局错误处理器，用于捕获和报告应用中发生的所有未处理异常。打开 `src/app/app.module.ts`，然后添加两个导入语句：

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
      // 无法获取 IonicErrorHandler 提供者，请确保
      // IonicErrorHandler 已添加到下面的提供者列表中
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);

    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}
```

然后，在提供者数组中，将 IonicErrorHandler 更新为 MyErrorHandler：

```javascript
{provide: ErrorHandler, useClass: MyErrorHandler},
```

最终结果应如下所示：

```javascript
providers: [
  // ...
  IonicErrorHandler,
  [{ provide: ErrorHandler, useClass: MyErrorHandler }],
];
```

接下来，让我们故意创建一个 Bug，以便展示 Ionic 监控的强大功能。打开 `about.html`，将 takePicture 方法重命名为一个不存在的名称，例如“takePhoto”：

```html
<button ion-fab (click)="photoService.takePhoto()"></button>
```

完成此更改后，每当用户点击相机按钮时，都会抛出异常并将其发送到 Ionic 的监控服务。

最后，我们需要为您的应用创建 Source Map。该文件通过提供映射回原始未压缩 TypeScript 代码的堆栈跟踪，使监控功能能够轻松定位问题。

运行以下命令同步当前版本的应用：

```shell
ionic monitoring syncmaps
```

现在我们已经设置了故意错误，让我们来测试一下会发生什么。在本地运行您的应用：

```shell
ionic serve
```

点击 Gallery 选项卡，然后点击相机按钮。此时应发生运行时错误。在浏览器中，前往 [Appflow 控制面板](https://dashboard.ionicframework.com)，然后选择 Monitor -> Monitoring。几分钟后，错误应该会出现：

![一个显示错误'takePhoto is not a function'且状态为'New'的事件。](/img/guides/first-app-v3/monitoring-event.png 'Ionic 监控事件概览')

点击该事件会提供有关所发生情况的许多详细信息，例如完整的堆栈跟踪。在此示例中，我们看到该错误在 Chrome 浏览器中的 Mac OS X 上出现了三次。

![事件日志的详细视图，显示 TypeError 堆栈跟踪以及设备、浏览器和操作系统等错误详细信息。](/img/guides/first-app-v3/monitoring-details.png '详细的 Ionic 监控事件日志')

考虑到如今移动设备和操作系统的普及，这种功能非常强大。有了这些详细信息，我们可以精确定位问题并快速修复。

这是一个 TypeScript 错误，意味着可以使用实时更新来发布修复。试试看吧！

- 将方法恢复为“takePicture”
- 使用 Git 推送修复。记住：“git push ionic master”
- 通过 Ionic 控制面板的实时更新功能推出修复

借助 Appflow 监控，支持数百种移动设备类型变得容易得多。[立即升级到 Appflow 开发者计划](https://dashboard.ionicframework.com/settings/billing)，即可在 Bug 发生时获得即时通知，将错误历史记录保存六十天（而不是七天），并每月解锁 10,000 次实时部署更新！