---
title: React 生命周期
sidebar_label: 生命周期
---

<head>
  <title>React 生命周期：Ionic React 应用组件生命周期指南</title>
  <meta
    name="description"
    content="React 生命周期指南讨论了如何在 Ionic React 应用中使用 Ionic 生命周期事件。阅读以了解更多关于 React 组件生命周期的信息。"
  />
</head>

本指南讨论了如何在 Ionic React 应用中使用 Ionic 生命周期事件。

## Ionic 生命周期方法

Ionic 提供了一些可在您的应用中使用的生命周期方法：

| 事件名称           | 描述                           |
| ------------------ | ------------------------------------------------------------------ |
| `ionViewWillEnter` | 当路由目标组件即将动画进入视图时触发。 |
| `ionViewDidEnter`  | 当路由目标组件完成动画进入时触发。      |
| `ionViewWillLeave` | 当路由源组件即将动画离开时触发。 |
| `ionViewDidLeave`  | 当路由源组件完成动画离开时触发。      |

这些生命周期方法仅在由路由器直接映射的组件上调用。这意味着如果 `/pageOne` 映射到 `PageOneComponent`，那么 Ionic 生命周期将在 `PageOneComponent` 上调用，但不会在 `PageOneComponent` 可能渲染的任何子组件上调用。

访问这些方法的方式取决于您使用的是基于类的组件还是函数式组件。下面我们介绍这两种方法。

## 基于类组件中的生命周期方法

要在基于类组件中使用 Ionic 生命周期方法，必须用 `withIonLifeCycle` 高阶组件（HOC）包装您的组件，如下所示：

```tsx
export default withIonLifeCycle(HomePage);
```

:::note
`withIonLifeCycle` 从 `@ionic/react` 导入
:::

然后，您可以在类组件上创建相应的生命周期方法，HOC 会在事件发生时调用该方法。以下是实现了每个生命周期方法的完整组件：

```tsx
import React from 'react';
import { IonHeader, IonPage, IonToolbar, IonTitle, IonContent, withIonLifeCycle } from '@ionic/react';

class HomePage extends React.Component {
  ionViewWillEnter() {
    console.log('ionViewWillEnter 事件已触发');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave 事件已触发');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter 事件已触发');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave 事件已触发');
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent></IonContent>
      </IonPage>
    );
  }
}

export default withIonLifeCycle(HomePage);
```

## 函数式组件中的生命周期方法

Ionic React 为每个生命周期方法导出了可在函数式组件中使用的 hooks。每个 hook 接受一个在事件触发时要调用的方法。

```tsx
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from '@ionic/react';
import React from 'react';

const HomePage: React.FC = () => {
  useIonViewDidEnter(() => {
    console.log('ionViewDidEnter 事件已触发');
  });

  useIonViewDidLeave(() => {
    console.log('ionViewDidLeave 事件已触发');
  });

  useIonViewWillEnter(() => {
    console.log('ionViewWillEnter 事件已触发');
  });

  useIonViewWillLeave(() => {
    console.log('ionViewWillLeave 事件已触发');
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};

export default HomePage;
```

:::note
函数式组件不需要像类组件那样用 `withIonLifeCycle` HOC 包装。
:::

## React 生命周期方法

所有 React 中的生命周期方法（`componentDidMount`、`componentWillUnmount` 等）仍然可以使用。但是，由于 Ionic React 管理页面的生命周期，某些事件可能不会在您预期的时候触发。例如，`componentDidMount` 在页面首次显示时触发，但如果您导航离开该页面，Ionic 可能会将该页面保留在 DOM 中，再次访问该页面时可能不会再次调用 `componentDidMount`。这种情况是 Ionic 生命周期方法存在的主要原因——为了在原生框架的事件可能不触发时，仍然为您提供一种在视图进入和离开时调用逻辑的方式。

## 每个生命周期方法的指导建议

以下是对每个生命周期事件使用场景的一些提示。

- `ionViewWillEnter` - 由于 `ionViewWillEnter` 在每次导航到视图时都会被调用（无论是否已初始化），因此它是从服务加载数据的好方法。
- `ionViewDidEnter` - 如果在使用 `ionViewWillEnter` 加载数据时遇到性能问题，您可以改为在 `ionViewDidEnter` 中进行数据调用。但此事件直到页面对用户可见后才会触发，因此您可能需要使用加载指示器或骨架屏，以防止内容在过渡完成后不自然地闪烁出现。
- `ionViewWillLeave` - 可用于清理工作，例如取消订阅数据源。由于从当前页面导航时 `componentWillUnmount` 可能不会触发，如果您不希望在屏幕不可见时仍保持活动状态，请将清理代码放在此处。
- `ionViewDidLeave` - 当此事件触发时，您知道新页面已经完全过渡进入，因此任何您通常不会在视图可见时执行的逻辑都可以放在这里。
