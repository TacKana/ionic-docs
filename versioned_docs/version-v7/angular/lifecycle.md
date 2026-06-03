---
title: Ionic 页面生命周期
sidebar_label: 生命周期
---

<head>
  <title>Angular 页面组件生命周期 - 应用事件文档</title>
  <meta
    name="description"
    content="本指南介绍了在使用 Angular 构建的 Ionic 应用中页面生命周期的工作方式。了解 Ionic 如何融入 Angular 组件提供的生命周期事件。"
  />
</head>

本指南介绍了在使用 Ionic 和 Angular 构建的应用中页面生命周期的工作方式。

![说明 Ionic 页面生命周期事件及其顺序的流程图。](/img/guides/lifecycle/ioniclifecycle.png 'Ionic 生命周期图')

## Angular 生命周期事件

Ionic 融入了 Angular 提供的生命周期事件。您最常使用的两个 Angular 事件是：

| 事件名称       | 描述                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------ |
| `ngOnInit`     | 在组件初始化时触发一次。此事件可用于初始化局部成员以及调用只需要执行一次的服务。           |
| `ngOnDestroy`  | 在 Angular 销毁视图之前触发。可用于清理，例如取消订阅 observables。                        |

有关 Angular 组件生命周期事件的更多信息，请访问他们的[组件生命周期文档](https://angular.io/guide/lifecycle-hooks)。

:::note
使用 `ion-nav` 或 `ion-router-outlet` 的组件不应使用 `OnPush` 变更检测策略。这样做会阻止生命周期钩子（如 `ngOnInit`）触发。此外，异步状态变更可能无法正确渲染。
:::

## Ionic 页面事件

除了 Angular 生命周期事件之外，Ionic Angular 还提供了一些额外的事件供您使用：

| 事件名称           | 描述                                                 |
| ------------------ | ---------------------------------------------------- |
| `ionViewWillEnter` | 当路由目标组件即将动画进入视图时触发。               |
| `ionViewDidEnter`  | 当路由目标组件**完成**动画进入视图时触发。           |
| `ionViewWillLeave` | 当路由来源组件即将开始动画离开时触发。               |
| `ionViewDidLeave`  | 当路由来源组件**完成**动画离开时触发。               |

这些生命周期仅在被路由直接映射的组件上调用。这意味着如果 `/pageOne` 映射到 `PageOneComponent`，那么 Ionic 生命周期将在 `PageOneComponent` 上被调用，但不会在 `PageOneComponent` 可能渲染的任何子组件上被调用。

`ionViewWillEnter` 和 `ionViewDidEnter` 之间的区别在于它们触发的时机。前者在 `ngOnInit` 之后但在页面过渡开始之前触发，后者在过渡结束后立即触发。

对于 `ionViewWillLeave` 和 `ionViewDidLeave`，`ionViewWillLeave` 在离开当前页面的过渡开始前被调用，而 `ionViewDidLeave` 直到新页面成功过渡进入后（新页面的 `ionViewDidEnter` 触发后）才被调用。

![显示在页面过渡时控制台中 Ionic 页面生命周期事件的动画 GIF。](/img/guides/lifecycle/ioniclifecycle.gif 'Ionic 生命周期动画')

## Ionic 如何处理页面的生命周期

Ionic 有自己的路由出口，称为 `<ion-router-outlet />`。这个出口扩展了 Angular 的 `<router-outlet />`，增加了一些额外的功能，以提供更好的移动设备体验。

当应用包裹在 `<ion-router-outlet />` 中时，Ionic 对导航的处理有所不同。当您导航到一个新页面时，Ionic 会将旧页面保留在现有 DOM 中，但将其从视图中隐藏并过渡到新页面。这样做有两个原因：

1. 我们可以保持旧页面的状态（屏幕上的数据、滚动位置等）
2. 我们可以提供更平滑的返回该页面的过渡效果，因为它已经存在，无需重新创建。

页面只有在被"弹出"时才会从 DOM 中移除，例如，通过按下 UI 中的返回按钮或浏览器的返回按钮。

由于这种特殊处理，`ngOnInit` 和 `ngOnDestroy` 方法可能不会在您通常认为它们应该触发的时候触发。

`ngOnInit` 只在页面被新创建时触发，但不会在导航回该页面时触发。例如，在选项卡界面中，每个页面之间的导航只会调用每个页面的 `ngOnInit` 方法一次，而不会在后续访问时调用。`ngOnDestroy` 只会在页面被"弹出"时触发。

## 路由守卫

在 Ionic 3 中，有一些额外的生命周期方法可用于控制页面何时可以进入（`ionViewCanEnter`）和离开（`ionViewCanLeave`）。这些方法可用于保护页面免受未授权用户的访问，以及在您不希望用户离开时将其保留在页面上（例如在填写表单时）。

这些方法在 Ionic 4 中被移除，转而使用 Angular 的路由守卫。

路由守卫有助于确定是否可以针对某个路由执行特定操作。它们是实现特定接口的类。`CanActivate` 和 `CanDeactivate` 接口可用于实现与已移除的 `ionViewCanEnter` 和 `ionViewCanLeave` 事件相同的逻辑。

```tsx
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}
```

要使用此守卫，将其添加到路由定义中的相应参数：

```tsx
{ path: 'settings', canActivate: [AuthGuard], loadChildren: '...',  }
```

有关如何使用路由守卫的更多信息，请参阅 Angular 的[路由文档](https://angular.io/guide/router)。

## 每个生命周期方法的指导

以下是对每个生命周期事件用例的一些提示。

- `ngOnInit` - 初始化您的组件并从不需要在每次后续访问时刷新的服务加载数据。
- `ionViewWillEnter` - 由于 `ionViewWillEnter` 在每次导航到视图时都会被调用（无论是否已初始化），因此它是从服务加载数据的好方法。但是，如果您的数据在动画期间返回，可能会启动大量的 DOM 操作，从而导致动画卡顿。
- `ionViewDidEnter` - 如果您在使用 `ionViewWillEnter` 加载数据时遇到性能问题，可以改为在 `ionViewDidEnter` 中进行数据调用。但是，此事件在页面变得对用户可见之后才会触发，因此您可能需要使用加载指示器或骨架屏，以免内容在过渡完成后不自然地闪烁出现。
- `ionViewWillLeave` - 可用于清理操作，例如取消订阅 observables。由于 `ngOnDestroy` 在您导航离开当前页面时可能不会触发，如果不想在屏幕不可见时让它保持活动状态，请在此处放置清理代码。
- `ionViewDidLeave` - 当此事件触发时，您知道新页面已完全过渡进入，因此任何您通常在视图可见时不会执行的逻辑都可以放在这里。
- `ngOnDestroy` - 您不想在 `ionViewWillLeave` 中清理的页面清理逻辑。
