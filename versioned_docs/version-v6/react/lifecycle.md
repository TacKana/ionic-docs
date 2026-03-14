---
title: React Lifecycle
sidebar_label: Lifecycle
---

<head>
  <title>React 生命周期：Ionic React 应用组件生命周期指南</title>
  <meta
    name="description"
    content="本指南讨论了如何在 Ionic React 应用中使用 Ionic 生命周期事件。阅读以了解更多关于 React 组件生命周期的信息。"
  />
</head>

本指南将介绍如何在 Ionic React 应用中使用 Ionic 生命周期事件。

## Ionic 生命周期方法

Ionic 提供了一些可以在应用中使用的生命周期方法：

| 事件名称           | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| `ionViewWillEnter` | 当即将进入页面的组件开始动画进入视图时触发。                 |
| `ionViewDidEnter`  | 当进入页面的组件动画完成时触发。                             |
| `ionViewWillLeave` | 当即将离开页面的组件开始动画时触发。                         |
| `ionViewDidLeave`  | 当离开页面的组件动画完成时触发。                             |

这些生命周期方法仅在被路由器直接映射的组件上调用。这意味着如果 `/pageOne` 映射到 `PageOneComponent`，那么 Ionic 生命周期方法将在 `PageOneComponent` 上调用，但不会在 `PageOneComponent` 可能渲染的任何子组件上调用。

访问这些方法的方式取决于你使用的是基于类的组件还是函数式组件。下面我们将介绍这两种方式。

## 基于类的组件中的生命周期方法

要在基于类的组件中使用 Ionic 生命周期方法，必须使用 `withIonLifeCycle` 高阶组件（HOC）包装你的组件，如下所示：

```tsx
export default withIonLifeCycle(HomePage);
```

:::note
`withIonLifeCycle` 是从 `@ionic/react` 导入的。
:::

然后，你可以在类组件上创建相应的生命周期方法，当事件发生时 HOC 会调用该方法。下面是一个实现了所有生命周期方法的完整组件：

```tsx
import React from 'react';
import { IonHeader, IonPage, IonToolbar, IonTitle, IonContent, withIonLifeCycle } from '@ionic/react';

class HomePage extends React.Component {
  ionViewWillEnter() {
    console.log('ionViewWillEnter event fired');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave event fired');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter event fired');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave event fired');
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

Ionic React 为每个生命周期方法导出了可在函数式组件中使用的钩子。每个钩子都接收一个在事件触发时要调用的方法。

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
    console.log('ionViewDidEnter event fired');
  });

  useIonViewDidLeave(() => {
    console.log('ionViewDidLeave event fired');
  });

  useIonViewWillEnter(() => {
    console.log('ionViewWillEnter event fired');
  });

  useIonViewWillLeave(() => {
    console.log('ionViewWillLeave event fired');
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

你同样可以使用 React 的所有生命周期方法（`componentDidMount`、`componentWillUnmount` 等）。然而，由于 Ionic React 管理页面的生命周期，某些事件可能不会在你预期的时候触发。例如，`componentDidMount` 在页面首次显示时触发，但如果你从页面导航离开，Ionic 可能会将页面保留在 DOM 中，后续再次访问该页面时可能不会再次调用 `componentDidMount`。这种情况正是 Ionic 生命周期方法存在的主要原因：当原生框架的事件可能无法触发时，仍能提供一种方式在视图进入和退出时执行逻辑。

## 各生命周期方法使用建议

以下是一些关于每个生命周期事件使用场景的建议。

- `ionViewWillEnter` - 由于 `ionViewWillEnter` 在每次导航到该视图时都会调用（无论是否已初始化），因此适合在此方法中从服务加载数据。
- `ionViewDidEnter` - 如果在 `ionViewWillEnter` 中加载数据时遇到性能问题，可以改为在 `ionViewDidEnter` 中进行数据调用。但请注意，该事件直到页面对用户可见后才会触发，因此你可能需要使用加载指示器或骨架屏，以避免内容在过渡完成后不自然地闪现。
- `ionViewWillLeave` - 可用于清理工作，例如取消订阅数据源。由于从当前页面导航离开时 `componentWillUnmount` 可能不会触发，如果你不希望某些逻辑在屏幕不可见时仍保持活动，可以将清理代码放在此处。
- `ionViewDidLeave` - 当此事件触发时，表示新页面已完全过渡进入，因此可以在此处执行那些在视图不可见时通常不会执行的逻辑。