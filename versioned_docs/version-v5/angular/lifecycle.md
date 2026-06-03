---
title: 生命周期
sidebar_label: 生命周期
---

# Ionic 页面生命周期

本指南介绍了在使用 Ionic 和 Angular 构建的应用中，页面生命周期的工作原理。

![展示 Ionic 页面生命周期事件及其顺序的流程图。](/img/guides/lifecycle/ioniclifecycle.png 'Ionic 生命周期图')

## Angular 生命周期事件

Ionic 支持 Angular 提供的生命周期事件。您最常使用的两个 Angular 事件是：

| 事件名称      | 描述                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngOnInit`    | 在组件初始化时触发一次。此事件可用于初始化局部成员变量，并调用只需要执行一次的服务。 |
| `ngOnDestroy` | 在 Angular 销毁视图之前触发。适用于执行清理操作，例如取消订阅 observables。       |

有关 Angular 组件生命周期事件的更多信息，请访问其[组件生命周期文档](https://angular.io/guide/lifecycle-hooks)。

:::note
使用 `ion-nav` 或 `ion-router-outlet` 的组件不应使用 `OnPush` 变更检测策略。这样做会阻止 `ngOnInit` 等生命周期钩子的触发。此外，异步状态变更可能无法正确渲染。
:::

## Ionic 页面事件

除了 Angular 生命周期事件之外，Ionic Angular 还提供了一些额外的事件供您使用：

| 事件名称           | 描述                                                          |
| ------------------ | ------------------------------------------------------------------ |
| `ionViewWillEnter` | 当路由目标组件即将动画进入视图时触发。 |
| `ionViewDidEnter`  | 当路由目标组件完成动画进入后触发。        |
| `ionViewWillLeave` | 当路由源组件即将动画离开时触发。         |
| `ionViewDidLeave`  | 当路由目标组件完成动画进入后触发。        |

`ionViewWillEnter` 和 `ionViewDidEnter` 的区别在于触发时机。前者在 `ngOnInit` 之后、页面过渡动画开始之前触发，而后者则在过渡动画结束后直接触发。

对于 `ionViewWillLeave` 和 `ionViewDidLeave`，`ionViewWillLeave` 在当前页面开始过渡离开之前直接调用，而 `ionViewDidLeave` 则在新页面成功过渡进入之后（即新页面的 `ionViewDidEnter` 触发之后）才被调用。

![展示 Ionic 页面生命周期事件在控制台日志中随页面过渡变化的动画 GIF。](/img/guides/lifecycle/ioniclifecycle.gif 'Ionic 生命周期动画')

## Ionic 如何处理页面的生命周期

Ionic 有自己的路由出口，称为 `<ion-router-outlet />`。这个出口扩展了 Angular 的 `<router-outlet />`，增加了一些额外的功能，为移动设备带来更好的体验。

当应用被包裹在 `<ion-router-outlet />` 中时，Ionic 对导航的处理有所不同。当您导航到一个新页面时，Ionic 会将旧页面保留在现有的 DOM 中，但将其隐藏并过渡到新页面。这样做有两个原因：

1. 我们可以保持旧页面的状态（屏幕上的数据、滚动位置等）
2. 由于页面已经存在，无需重新创建，因此可以更平滑地过渡回该页面。

页面只有在被"弹出"时才会从 DOM 中移除，例如通过按下界面中的返回按钮或浏览器的返回按钮。

由于这种特殊处理，`ngOnInit` 和 `ngOnDestroy` 方法可能不会在您通常认为应该触发的时候触发。

`ngOnInit` 仅在页面首次创建时触发，而不会在导航回页面时触发。例如，在标签页界面中导航时，每个页面的 `ngOnInit` 方法只会被调用一次，后续访问不会再次调用。`ngOnDestroy` 仅在页面被"弹出"时触发。

## 路由守卫

在 Ionic 3 中，有一些额外的生命周期方法可用于控制页面何时可以进入（`ionViewCanEnter`）和离开（`ionViewCanLeave`）。这些方法可用于保护页面免受未经授权的用户访问，以及在您不希望用户离开时（例如填写表单时）将用户保持在当前页面上。

这些方法在 Ionic 4 中被移除，转而使用 Angular 的路由守卫。

路由守卫有助于确定是否可以对某个路由执行特定操作。它们是实现了特定接口的类。`CanActivate` 和 `CanDeactivate` 接口可用于实现与已移除的事件 `ionViewCanEnter` 和 `ionViewCanLeave` 相同的逻辑。

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

有关如何使用路由守卫的更多信息，请参阅 Angular 的[路由文档](https://angular.io/guide/router)。

## 每个生命周期方法的使用指导

以下是对每个生命周期事件使用场景的一些建议。

- `ngOnInit` - 初始化组件并从服务中加载不需要在每次后续访问时刷新的数据。
- `ionViewWillEnter` - 由于 `ionViewWillEnter` 在每次导航到视图时都会被调用（无论是否已初始化），因此它是从服务加载数据的好方法。但是，如果您的数据在动画期间返回，可能会触发大量 DOM 操作，导致动画卡顿。
- `ionViewDidEnter` - 如果您发现使用 `ionViewWillEnter` 加载数据时出现性能问题，可以在 `ionViewDidEnter` 中执行数据调用。然而，此事件会在页面对用户可见之后才触发，因此您可能需要使用加载指示器或骨架屏，以防止内容在过渡完成后突兀地闪现。
- `ionViewWillLeave` - 可用于清理操作，例如取消订阅 observables。由于 `ngOnDestroy` 可能不会在您离开当前页面时触发，如果您不希望某些逻辑在屏幕不可见时保持活动状态，请将清理代码放在此处。
- `ionViewDidLeave` - 当此事件触发时，您知道新页面已完全过渡进入，因此任何您通常不在视图可见时执行的逻辑都可以放在此处。
- `ngOnDestroy` - 用于您不希望放在 `ionViewWillLeave` 中清理的页面级清理逻辑。
