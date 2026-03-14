---
title: React Lifecycle
sidebar_label: Lifecycle
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

Ionic 提供了几个可以在应用中使用的生命周期方法：

| 事件名称            | 描述                                                                 |
| ------------------- | -------------------------------------------------------------------- |
| `ionViewWillEnter` | 当路由目标组件即将开始进入视图的动画时触发。                         |
| `ionViewDidEnter`  | 当路由目标组件已完成进入视图的动画时触发。                           |
| `ionViewWillLeave` | 当离开路由的源组件即将开始离开视图的动画时触发。                     |
| `ionViewDidLeave`  | 当离开路由的源组件已完成离开视图的动画时触发。                       |

这些生命周期仅在被路由器直接映射的组件上调用。这意味着，如果 `/pageOne` 映射到 `PageOneComponent`，那么 Ionic 生命周期将在 `PageOneComponent` 上调用，但不会在 `PageOneComponent` 可能渲染的任何子组件上调用。

访问这些方法的方式取决于您使用的是类组件还是函数组件。我们在下面介绍这两种方法。

## 类组件中的生命周期方法

要在类组件中使用 Ionic 生命周期方法，必须用 `withIonLifeCycle` 高阶组件（HOC）包装您的组件，如下所示：

```tsx
export default withIonLifeCycle(HomePage);
```

:::note
`withIonLifeCycle` 从 `@ionic/react` 导入
:::

然后，您可以在类组件上创建相应的生命周期方法，当事件发生时，HOC 会调用该方法。下面是实现了所有生命周期方法的完整组件：

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

## 函数组件中的生命周期方法

Ionic React 为每个生命周期方法导出了钩子（hooks），您可以在函数组件中使用。每个钩子都接受一个在事件触发时要调用的方法。

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
函数组件不需要像类组件那样用 `withIonLifeCycle` HOC 包装。
:::

开发人员还可以选择性地向每个生命周期钩子传递响应式依赖项。这些依赖项随后会传递给底层的 [React useEffect 钩子](https://react.dev/reference/react/useEffect#useeffect)：

```tsx
const [data, setData] = useState('foo');

useIonViewDidEnter(() => {
  console.log('ionViewDidEnter event fired');
}, [data]);
```

## React 生命周期方法

您也可以使用 React 中的所有生命周期方法（`componentDidMount`、`componentWillUnmount` 等）。然而，由于 Ionic React 管理页面的生命周期，某些事件可能不会在您预期的时候触发。例如，`componentDidMount` 在页面首次显示时触发，但如果您离开该页面，Ionic 可能会将页面保留在 DOM 中，后续再次访问该页面时可能不会再次调用 `componentDidMount`。这种情况正是 Ionic 生命周期方法存在的主要原因，以便在原生框架的事件可能不触发时，仍然为您提供一种在视图进入和退出时调用逻辑的方式。

## 各生命周期方法的使用指导

以下是关于每个生命周期事件使用场景的一些建议。

- `ionViewWillEnter` - 由于 `ionViewWillEnter` 在每次导航到该视图时都会被调用（无论是否初始化），因此它是从服务加载数据的好方法。
- `ionViewDidEnter` - 如果在使用 `ionViewWillEnter` 加载数据时遇到性能问题，可以改为在 `ionViewDidEnter` 中进行数据调用。然而，此事件直到页面对用户可见后才会触发，因此您可能需要使用加载指示器或骨架屏，以避免内容在过渡完成后不自然地闪现。
- `ionViewWillLeave` - 可用于清理工作，例如取消订阅数据源。由于 `componentWillUnmount` 在您离开当前页面时可能不会触发，因此如果您不希望代码在屏幕不可见时仍然活跃，可以将清理代码放在这里。
- `ionViewDidLeave` - 当此事件触发时，您知道新页面已经完全过渡完成，因此任何在视图可见时通常不会执行的逻辑可以放在这里。

## 页面间传递状态

由于 Ionic React 管理页面的生命周期，随着用户在应用中导航，先前页面上的状态可能会更新。这可能会影响使用 React 的 `useEffect` 或 React Router 的 `useLocation` 确定的状态。例如，如果 `PageA` 调用了 `useLocation`，当用户从 `PageA` 导航到 `PageB` 时，`useLocation` 的状态将发生变化。

开发人员应包含适当的检查，以确保先前页面仅访问已定义的状态。

例如，如果 `testObject` 未定义，以下代码将出错：`{ state.testObject.childKey }`

相反，开发人员应仅在 `testObject` 已定义时才访问 `childKey`：`{ state.testObject?.childKey }`