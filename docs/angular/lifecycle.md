---
title: Ionic Page Life Cycle
sidebar_label: Lifecycle
---

<head>
  <title>Angular 页面组件生命周期 - 应用事件文档</title>
  <meta
    name="description"
    content="本指南介绍在使用 Angular 构建的 Ionic 应用中页面生命周期的工作原理。了解 Ionic 如何利用 Angular 组件提供的生命周期事件。"
  />
</head>

本指南将介绍在使用 Ionic 和 Angular 构建的应用中，页面生命周期的工作原理。

![展示 Ionic 页面生命周期事件及其顺序的流程图](/img/guides/lifecycle/ioniclifecycle.png 'Ionic 生命周期示意图')

## Angular 生命周期事件

Ionic 充分利用了 Angular 提供的生命周期事件。您最常使用的两个 Angular 事件是：

| 事件名称        | 描述                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngOnInit`      | 在组件初始化期间触发一次。此事件可用于初始化局部成员以及调用只需执行一次的服务。                                                              |
| `ngOnDestroy`   | 在 Angular 销毁视图之前触发。适用于清理操作，例如取消订阅可观察对象。                                                                         |

有关 Angular 组件生命周期事件的更多信息，请访问其 [组件生命周期文档](https://angular.io/guide/lifecycle-hooks)。

:::note
使用 `ion-nav` 或 `ion-router-outlet` 的组件不应使用 `OnPush` 变更检测策略。这样做会阻止诸如 `ngOnInit` 等生命周期钩子的触发。此外，异步状态变更可能无法正确渲染。
:::

## Ionic 页面事件

除了 Angular 生命周期事件外，Ionic Angular 还提供了一些您可以使用的额外事件：

| 事件名称             | 描述                                                                        |
| -------------------- | --------------------------------------------------------------------------- |
| `ionViewWillEnter`   | 当路由到的组件即将动画进入视图时触发。                                      |
| `ionViewDidEnter`    | 当路由到的组件动画**已完成**时触发。                                        |
| `ionViewWillLeave`   | 当路由**离开**的组件即将开始动画时触发。                                    |
| `ionViewDidLeave`    | 当路由**离开**的组件动画**已完成**时触发。                                  |

这些生命周期仅在由路由器直接映射的组件上调用。这意味着如果 `/pageOne` 映射到 `PageOneComponent`，那么 Ionic 生命周期将在 `PageOneComponent` 上调用，但不会在 `PageOneComponent` 可能渲染的任何子组件上调用。

`ionViewWillEnter` 和 `ionViewDidEnter` 的区别在于它们触发的时间。前者在 `ngOnInit` 之后、页面过渡开始之前触发，而后者在过渡结束后立即触发。

对于 `ionViewWillLeave` 和 `ionViewDidLeave`，`ionViewWillLeave` 在离开当前页面的过渡开始之前直接调用，而 `ionViewDidLeave` 直到新页面成功过渡进入（在新页面的 `ionViewDidEnter` 触发之后）才会被调用。

![展示页面过渡期间控制台日志中 Ionic 页面生命周期事件的动画 GIF](/img/guides/lifecycle/ioniclifecycle.gif 'Ionic 生命周期动画')

## Ionic 如何处理页面的生命周期

Ionic 拥有自己的路由器出口，称为 `<ion-router-outlet />`。这个出口扩展了 Angular 的 `<router-outlet />`，增加了一些额外的功能，以便为移动设备提供更好的体验。

当应用被包裹在 `<ion-router-outlet />` 中时，Ionic 对导航的处理方式略有不同。当您导航到新页面时，Ionic 会将旧页面保留在现有的 DOM 中，但会将其从视图中隐藏并过渡到新页面。我们这样做的原因有两点：

1. 我们可以维护旧页面的状态（屏幕上的数据、滚动位置等）。
2. 由于页面已经存在且无需重新创建，我们可以提供更平滑的返回页面过渡。

只有当页面被“弹出”时，例如通过 UI 中的返回按钮或浏览器的返回按钮，页面才会从 DOM 中移除。

由于这种特殊处理，`ngOnInit` 和 `ngOnDestroy` 方法可能不会在您通常认为它们应该触发的时候触发。

`ngOnInit` 仅在每次页面新创建时触发，但在导航回页面时不会触发。例如，在标签页界面中导航到每个页面时，每个页面的 `ngOnInit` 方法只会调用一次，后续访问时不会调用。`ngOnDestroy` 仅在页面被“弹出”时触发。

## 路由守卫

在 Ionic 3 中，有一些额外的生命周期方法可用于控制页面何时可以进入（`ionViewCanEnter`）和离开（`ionViewCanLeave`）。这些方法可用于保护页面免受未经授权的用户访问，并在您不希望用户离开时（例如在填写表单期间）将用户保持在页面上。

这些方法在 Ionic 4 中被移除，转而使用 Angular 的路由守卫。

路由守卫有助于确定是否可以对路由执行特定操作。它们是实现特定接口的类。可以使用 `CanActivate` 和 `CanDeactivate` 接口来实现与已移除事件 `ionViewCanEnter` 和 `ionViewCanLeave` 相同的逻辑。

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

有关如何使用路由守卫的更多信息，请转到 Angular 的 [路由器文档](https://angular.io/guide/router)。

## 各生命周期方法的使用指导

以下是关于每个生命周期事件使用场景的一些建议：

- `ngOnInit` - 初始化组件并从每次后续访问时无需刷新的服务加载数据。
- `ionViewWillEnter` - 由于 `ionViewWillEnter` 在每次导航到视图时都会被调用（无论是否已初始化），因此它是从服务加载数据的好方法。但是，如果数据在动画期间返回，可能会开始大量 DOM 操作，从而导致动画卡顿。
- `ionViewDidEnter` - 如果在使用 `ionViewWillEnter` 加载数据时遇到性能问题，可以改为在 `ionViewDidEnter` 中进行数据调用。但是，此事件直到页面对用户可见后才会触发，因此您可能希望使用加载指示器或骨架屏，以避免内容在过渡完成后不自然地闪现。
- `ionViewWillLeave` - 可用于清理操作，例如取消订阅可观察对象。由于 `ngOnDestroy` 在您从当前页面导航时可能不会触发，如果您不希望清理代码在屏幕不可见时仍处于活动状态，请将清理代码放在此处。
- `ionViewDidLeave` - 当此事件触发时，您知道新页面已完全过渡进入，因此任何在视图可见时通常不会执行的逻辑都可以放在这里。
- `ngOnDestroy` - 页面清理逻辑，如果您不想在 `ionViewWillLeave` 中清理。