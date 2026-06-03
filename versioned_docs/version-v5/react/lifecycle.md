---
title: 生命周期
sidebar_label: 生命周期
---

# React 生命周期

本指南讨论如何在 Ionic React 应用中使用 Ionic 生命周期事件。

## Ionic 生命周期方法

Ionic 提供了几个可在应用中使用的生命周期方法：

| 事件名称            | 描述                                 |
| ------------------- | ------------------------------------ |
| `ionViewWillEnter`  | 当路由到的组件即将动画进入视图时触发。 |
| `ionViewDidEnter`   | 当路由到的组件完成动画进入时触发。     |
| `ionViewWillLeave`  | 当路由离开的组件即将动画离开时触发。   |
| `ionViewDidLeave`   | 当路由到的组件完成动画离开时触发。     |

访问这些方法的方式取决于您使用的是基于类的组件还是函数式组件。以下我们将介绍这两种方法。

## 基于类组件中的生命周期方法

要在基于类的组件中使用 Ionic 生命周期方法，您必须使用 `withIonLifeCycle` 高阶组件（HOC）包装您的组件，如下所示：

```tsx
export default withIonLifeCycle(HomePage);
```

:::note
`withIonLifeCycle` 从 `@ionic/react` 导入
:::

然后，您可以在类组件上创建相应的生命周期方法，HOC 会在事件发生时调用该方法。下面是完整的组件，实现了每个生命周期方法：

```tsx
import React from 'react';
import { IonHeader, IonPage, IonToolbar, IonTitle, IonContent, withIonLifeCycle } from '@ionic/react';

class HomePage extends React.Component {
  ionViewWillEnter() {
    console.log('ionViewWillEnter 事件触发');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave 事件触发');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter 事件触发');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave 事件触发');
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>首页</IonTitle>
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

Ionic React 为每个生命周期方法导出了 hooks，您可以在函数式组件中使用。每个 hook 接收要在事件触发时调用的方法。

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
    console.log('ionViewDidEnter 事件触发');
  });

  useIonViewDidLeave(() => {
    console.log('ionViewDidLeave 事件触发');
  });

  useIonViewWillEnter(() => {
    console.log('ionViewWillEnter 事件触发');
  });

  useIonViewWillLeave(() => {
    console.log('ionViewWillLeave 事件触发');
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>首页</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};

export default HomePage;
```

:::note
函数式组件不需要像类组件那样使用 `withIonLifeCycle` HOC 进行包装。
:::

## React 生命周期方法

React 中所有的生命周期方法（`componentDidMount`、`componentWillUnmount` 等）同样可供使用。然而，由于 Ionic React 管理页面的生命周期，某些事件可能不会在您预期时触发。例如，`componentDidMount` 在页面首次显示时触发，但如果您导航离开该页面，Ionic 可能会将该页面保留在 DOM 中，后续再次访问该页面可能不会再次调用 `componentDidMount`。这正是 Ionic 生命周期方法存在的主要原因——当原生框架的事件可能不会触发时，它们仍然为您提供一种在视图进入和退出时调用逻辑的方式。

## 每个生命周期方法的指导建议

以下是每个生命周期事件用例的一些提示。

- `ionViewWillEnter` —— 由于每次导航到视图时（无论是否已初始化）都会调用 `ionViewWillEnter`，因此它是从服务加载数据的好方法。
- `ionViewDidEnter` —— 如果在加载数据时使用 `ionViewWillEnter` 遇到性能问题，可以在 `ionViewDidEnter` 中进行数据调用。但此事件直到页面对用户可见后才会触发，因此您可能想要使用加载指示器或骨架屏，以免内容在过渡完成后不自然地闪现。
- `ionViewWillLeave` —— 可用于清理工作，比如取消订阅数据源。由于当您从当前页面导航离开时 `componentWillUnmount` 可能不会触发，如果您不希望某些逻辑在屏幕不可见时仍处于活动状态，请在此处放置清理代码。
- `ionViewDidLeave` —— 当此事件触发时，您知道新页面已经完全过渡进入，因此任何您通常不希望视图可见时运行的逻辑都可以放在这里。
