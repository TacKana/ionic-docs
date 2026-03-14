---
sidebar_label: 生命周期
---

# Ionic 页面生命周期

本指南将介绍在使用 Ionic 和 Angular 构建的应用中，页面生命周期是如何工作的。

![展示 Ionic 页面生命周期事件及其顺序的流程图。](/img/guides/lifecycle/ioniclifecycle.png 'Ionic 生命周期示意图')

## Angular 生命周期事件

Ionic 采用了 Angular 提供的生命周期事件。其中，最常用的两个 Angular 事件是：

| 事件名称       | 描述                                                                                                                               |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `ngOnInit`     | 在组件初始化期间触发一次。此事件可用于初始化本地成员，并调用只需执行一次的服务。                                                   |
| `ngOnDestroy`  | 在 Angular 销毁视图之前触发。适用于清理操作，例如取消订阅可观察对象。                                                             |

有关 Angular 组件生命周期事件的更多信息，请访问 [Angular 组件生命周期文档](https://angular.io/guide/lifecycle-hooks)。

:::note
使用 `ion-nav` 或 `ion-router-outlet` 的组件不应使用 `OnPush` 变更检测策略。这样做会阻止 `ngOnInit` 等生命周期钩子的触发。此外，异步状态变更可能无法正确渲染。
:::

## Ionic 页面事件

除了 Angular 生命周期事件外，Ionic Angular 还提供了一些额外的事件供你使用：

| 事件名称              | 描述                                                                 |
| --------------------- | -------------------------------------------------------------------- |
| `ionViewWillEnter`    | 当即将路由到的组件准备开始进入视图的动画时触发。                     |
| `ionViewDidEnter`     | 当即将路由到的组件已完成进入动画时触发。                             |
| `ionViewWillLeave`    | 当即将路由离开的组件准备开始离开动画时触发。                         |
| `ionViewDidLeave`     | 当即将路由离开的组件已完成离开动画时触发。                           |

`ionViewWillEnter` 和 `ionViewDidEnter` 的区别在于它们的触发时机。前者在 `ngOnInit` 之后、页面转场开始之前触发，而后者在转场结束后立即触发。

对于 `ionViewWillLeave` 和 `ionViewDidLeave`，`ionViewWillLeave` 在当前页面离开转场开始之前立即调用，而 `ionViewDidLeave` 直到新页面成功过渡进入（在新页面的 `ionViewDidEnter` 触发之后）才会被调用。

![动图展示页面转场期间控制台日志中的 Ionic 页面生命周期事件。](/img/guides/lifecycle/ioniclifecycle.gif 'Ionic 生命周期动画')

## Ionic 如何处理页面的生命周期

Ionic 拥有自己的路由出口，称为 `<ion-router-outlet />`。此出口扩展了 Angular 的 `<router-outlet />`，增加了一些额外功能，以便为移动设备提供更好的体验。

当应用包装在 `<ion-router-outlet />` 中时，Ionic 对导航的处理方式略有不同。当你导航到新页面时，Ionic 会将旧页面保留在现有的 DOM 中，但会将其从你的视图中隐藏，并过渡到新页面。我们这样做的原因有两个：

1. 我们可以维护旧页面的状态（屏幕上的数据、滚动位置等）。
2. 我们可以提供更流畅的返回到该页面的过渡效果，因为该页面已经存在，无需重新创建。

只有当页面被“弹出”时，例如通过 UI 中的返回按钮或浏览器的返回按钮，页面才会从 DOM 中移除。

由于这种特殊处理，`ngOnInit` 和 `ngOnDestroy` 方法可能不会在你通常认为它们应该触发的时候触发。

`ngOnInit` 只会在页面每次被全新创建时触发，但在导航回该页面时不会触发。例如，在标签页界面中导航到各个页面时，每个页面的 `ngOnInit` 方法只会被调用一次，而后续访问时不会调用。`ngOnDestroy` 只会在页面被“弹出”时触发。

## 路由守卫

在 Ionic 3 中，有几个额外的生命周期方法可用于控制页面何时可以进入 (`ionViewCanEnter`) 和离开 (`ionViewCanLeave`)。这些方法可用于保护页面免受未授权用户的访问，并在你不希望用户离开时（例如在表单填写期间）将用户保留在页面上。

这些方法在 Ionic 4 中被移除，取而代之的是使用 Angular 的路由守卫。

路由守卫有助于确定是否可以针对某个路由执行特定操作。它们是实现了特定接口的类。`CanActivate` 和 `CanDeactivate` 接口可用于实现与已移除事件 `ionViewCanEnter` 和 `ionViewCanLeave` 相同的逻辑。

```tsx
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}
```

要使用这个守卫，请将其添加到路由定义中的相应参数：

```tsx
{ path: 'settings', canActivate: [AuthGuard], loadChildren: '...',  }
```

有关如何使用路由守卫的更多信息，请参阅 Angular 的 [路由器文档](https://angular.io/guide/router)。

## 各生命周期方法的使用指南

以下是一些关于每个生命周期事件使用场景的建议。

- `ngOnInit` - 初始化你的组件，并从不需要在每次后续访问时刷新的服务中加载数据。
- `ionViewWillEnter` - 由于每次导航到该视图时都会调用 `ionViewWillEnter`（无论是否已初始化），因此它是从服务加载数据的好方法。但是，如果你的数据在动画期间返回，可能会开始大量的 DOM 操作，从而导致动画卡顿。
- `ionViewDidEnter` - 如果你在使用 `ionViewWillEnter` 加载数据时遇到性能问题，可以改为在 `ionViewDidEnter` 中进行数据调用。然而，此事件直到页面对用户可见后才会触发，因此你可能需要使用加载指示器或骨架屏，以避免内容在转场完成后不自然地闪现。
- `ionViewWillLeave` - 可用于清理操作，例如取消订阅可观察对象。由于在从当前页面导航时 `ngOnDestroy` 可能不会触发，如果你不希望清理代码在屏幕不可见时仍处于活动状态，请将清理代码放在这里。
- `ionViewDidLeave` - 当此事件触发时，你知道新页面已经完全过渡进入，因此任何在视图不可见时通常不会执行的逻辑都可以放在这里。
- `ngOnDestroy` - 用于页面的清理逻辑，这些逻辑你不希望在 `ionViewWillLeave` 中清理。