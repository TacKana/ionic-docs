---
title: Ionic 页面生命周期
sidebar_label: 生命周期
---

<head>
  <title>Angular 页面组件生命周期 - 应用事件文档</title>
  <meta
    name="description"
    content="本指南介绍了在使用 Angular 构建的 Ionic 应用中页面生命周期的工作方式。了解 Ionic 如何利用 Angular 组件提供的生命周期事件。"
  />
</head>

本指南介绍了在使用 Ionic 和 Angular 构建的应用中页面生命周期的工作方式。

![说明 Ionic 页面生命周期事件及其顺序的流程图](/img/guides/lifecycle/ioniclifecycle.png 'Ionic 生命周期示意图')

## Angular 生命周期事件

Ionic 使用了 Angular 提供的生命周期事件。你将最常使用的两个 Angular 事件是：

| 事件名称       | 描述                                                                                             |
| -------------- | ------------------------------------------------------------------------------------------------ |
| `ngOnInit`     | 在组件初始化时触发一次。此事件可用于初始化本地成员和调用只需执行一次的服务。                       |
| `ngOnDestroy`  | 在 Angular 销毁视图之前触发。适用于清理工作，如取消订阅 observables。                             |

有关 Angular 组件生命周期事件的更多信息，请访问他们的[组件生命周期文档](https://angular.io/guide/lifecycle-hooks)。

:::note
使用 `ion-nav` 或 `ion-router-outlet` 的组件不应使用 `OnPush` 变更检测策略。这样做会阻止生命周期钩子（如 `ngOnInit`）触发。此外，异步状态变更可能无法正确渲染。
:::

## Ionic 页面事件

除了 Angular 生命周期事件之外，Ionic Angular 还提供了一些额外的事件供你使用：

| 事件名称            | 描述                                         |
| ------------------- | -------------------------------------------- |
| `ionViewWillEnter`  | 当要路由到的组件即将动画显示到视图时触发。     |
| `ionViewDidEnter`   | 当要路由到的组件已完成动画显示时触发。         |
| `ionViewWillLeave`  | 当要路由离开的组件即将开始动画时触发。         |
| `ionViewDidLeave`   | 当要路由离开的组件已完成动画时触发。           |

这些生命周期仅在由路由器直接映射的组件上调用。这意味着如果 `/pageOne` 映射到 `PageOneComponent`，那么 Ionic 生命周期将在 `PageOneComponent` 上调用，但不会在 `PageOneComponent` 可能渲染的任何子组件上调用。

`ionViewWillEnter` 和 `ionViewDidEnter` 的区别在于它们的触发时机。前者在 `ngOnInit` 之后、页面过渡动画开始之前触发，而后者在过渡动画结束后立即触发。

对于 `ionViewWillLeave` 和 `ionViewDidLeave`，`ionViewWillLeave` 在当前页面开始过渡离开之前被调用，而 `ionViewDidLeave` 直到新页面成功过渡进入后（在新页面的 `ionViewDidEnter` 触发之后）才被调用。

![显示 Ionic 页面生命周期事件在页面过渡时在控制台日志中输出的动画 GIF](/img/guides/lifecycle/ioniclifecycle.gif 'Ionic 生命周期动画')

## Ionic 如何处理页面的生命周期

Ionic 有自己的路由出口，称为 `<ion-router-outlet />`。这个出口扩展了 Angular 的 `<router-outlet />`，提供了一些额外的功能，以为移动设备提供更好的体验。

当应用包裹在 `<ion-router-outlet />` 中时，Ionic 对导航的处理略有不同。当你导航到一个新页面时，Ionic 会将旧页面保留在现有的 DOM 中，但将其隐藏起来并过渡到新页面。我们这样做有两个原因：

1. 我们可以保持旧页面的状态（屏幕上的数据、滚动位置等）。
2. 我们可以提供更平滑的返回过渡，因为页面已经存在，无需重新创建。

只有当页面被"弹出"时（例如通过按下 UI 中的返回按钮或浏览器的返回按钮），页面才会从 DOM 中移除。

由于这种特殊处理，`ngOnInit` 和 `ngOnDestroy` 方法可能不会在你通常认为应该触发的时候触发。

`ngOnInit` 只会在页面首次创建时触发，但在导航回页面时不会触发。例如，在标签界面中导航每个页面时，每个页面的 `ngOnInit` 方法只会被调用一次，而后续访问不会再调用。`ngOnDestroy` 只会在页面被"弹出"时触发。

## 路由守卫

在 Ionic 3 中，有一些额外的生命周期方法可用于控制页面何时可以进入（`ionViewCanEnter`）和离开（`ionViewCanLeave`）。这些方法可用于保护页面免受未经授权的用户访问，以及在你不希望用户离开时（例如在填写表单时）将用户保持在当前页面。

这些方法在 Ionic 4 中被移除，转而使用 Angular 的路由守卫。

路由守卫有助于确定是否可以对路由执行特定操作。它们是实现特定接口的类。`CanActivate` 和 `CanDeactivate` 接口可用于实现与被移除的 `ionViewCanEnter` 和 `ionViewCanLeave` 事件相同类型的逻辑。

```tsx
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}
```

要使用此守卫，请将其添加到路由定义中的相应参数：

```tsx
{ path: 'settings', canActivate: [AuthGuard], loadChildren: '...',  }
```

有关如何使用路由守卫的更多信息，请访问 Angular 的[路由器文档](https://angular.io/guide/router)。

## 每个生命周期方法的指导建议

以下是每个生命周期事件使用场景的一些提示。

- `ngOnInit` - 初始化你的组件并从服务加载不需要在每次后续访问时刷新的数据。
- `ionViewWillEnter` - 由于 `ionViewWillEnter` 每次导航到视图时都会被调用（无论是否已初始化），因此这是一个从服务加载数据的好方法。但是，如果你的数据在动画期间返回，可能会启动大量 DOM 操作，从而导致动画卡顿。
- `ionViewDidEnter` - 如果你在使用 `ionViewWillEnter` 加载数据时遇到性能问题，可以将数据调用改在 `ionViewDidEnter` 中执行。但是，此事件在页面被用户可见之前不会触发，因此你可能需要使用加载指示器或骨架屏，以避免内容在过渡完成后不自然地闪现。
- `ionViewWillLeave` - 可用于清理工作，如取消订阅 observables。由于 `ngOnDestroy` 在离开当前页面时可能不会触发，如果你不希望代码在屏幕不可见时仍然活动，请将清理代码放在此处。
- `ionViewDidLeave` - 当此事件触发时，你知道新页面已经完全过渡进入，因此任何你通常不希望在该视图可见时执行的逻辑都可以放在这里。
- `ngOnDestroy` - 页面的清理逻辑，适用于你不想在 `ionViewWillLeave` 中进行清理的情况。
