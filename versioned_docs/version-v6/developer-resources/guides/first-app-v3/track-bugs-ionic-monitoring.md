---
title: 使用 Ionic Monitoring 实时跟踪错误
sidebar_label: 使用 Ionic Monitoring 实时跟踪错误
---

# 使用 Ionic Monitoring 实时跟踪错误

错误不可避免，而且可能难以追踪——尤其是当有成百上千种移动设备和操作系统的组合时。Appflow Monitoring 允许您跟踪应用在用户手机上的错误，并即时直接发送给您，即使您的代码被压缩了！

通过快速修复生产应用中的主要问题来减少客户的不满，是提供高质量应用体验的重要组成部分。结合 Appflow Deploy，可以快速推出新更新以实时解决问题。

首先，添加一个全局错误处理器，用于捕获和报告应用中发生的所有未处理异常。打开 `src/app/app.module.ts`，然后添加两个 import 语句：

```javascript
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
```

接下来，创建一个错误处理器类，每当遇到任何错误时调用 Monitoring 服务的 API：

```javascript
@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch (e) {
      // 无法获取 IonicErrorHandler 提供者，请确保
      // IonicErrorHandler 已添加到下面的 providers 列表中
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

它应该看起来像：

```javascript
providers: [
  // ...
  IonicErrorHandler,
  [{ provide: ErrorHandler, useClass: MyErrorHandler }],
];
```

接下来，让我们故意创建一个错误，以便演示 Ionic Monitoring 的强大功能。打开 `about.html` 并将 takePicture 方法重命名为一个不存在的方法，例如 "takePhoto"：

```html
<button ion-fab (click)="photoService.takePhoto()"></button>
```

此更改后，每当用户点击相机按钮时，都会抛出一个异常并发送到 Ionic 的 Monitoring 服务。

最后，我们需要为您的应用创建一个 Source Map。这个文件通过提供映射回原始、未压缩的 TypeScript 代码的堆栈跟踪，使 Monitoring 能够轻松定位问题。

通过运行以下命令同步应用的当前版本：

```shell
ionic monitoring syncmaps
```

在我们的故意错误就位后，让我们尝试看看会发生什么。在本地运行您的应用：

```shell
ionic serve
```

点击 Gallery 标签页，然后点击相机按钮。应该会发生运行时错误。在浏览器中，前往 [Appflow 仪表板](https://dashboard.ionicframework.com)，然后 Monitor -> Monitoring。几分钟后，错误应该会出现：

![显示错误 'takePhoto is not a function' 状态为 'New' 的事件。](/img/guides/first-app-v3/monitoring-event.png 'Ionic Monitoring 事件概览')

点击事件会给我们提供关于发生了什么的许多详细信息，例如完整的堆栈跟踪。在这个例子中，我们看到错误在 Mac OS X 上的 Chrome Web 浏览器中发生了三次。

![显示 TypeError 堆栈跟踪和错误详细信息（如设备、浏览器和操作系统）的事件日志详细视图。](/img/guides/first-app-v3/monitoring-details.png '详细的 Ionic Monitoring 事件日志')

鉴于如今移动设备和操作系统的 proliferation（多样性），这非常强大。有了这些详细信息，我们可以锁定问题并快速修复。

这是一个 TypeScript 错误，意味着可以使用 Live Updates 发布修复。试试看！

- 将方法恢复为 "takePicture"。
- 使用 Git 推送修复。记住，"git push ionic master"。
- 从 Ionic 仪表板使用 Live Updates 发布修复。

有了 Appflow Monitoring，支持数百种移动设备类型变得如此轻松。[立即升级到 Appflow Developer 计划](https://dashboard.ionicframework.com/settings/billing)，获取错误发生时的即时通知，保存六十天（而不是七天）的错误历史，并解锁每月 10,000 次实时 Deploy 更新！
