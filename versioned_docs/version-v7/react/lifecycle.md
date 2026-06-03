---
title: React 生命周期
sidebar_label: 生命周期
---

<head>
  <title>React 生命周期：Ionic React 应用组件生命周期指南</title>
  <meta
    name="description"
    content="React 生命周期指南讨论如何在 Ionic React 应用中使用 Ionic 生命周期事件。阅读以了解有关 React 组件生命周期的更多信息。"
  />
</head>

本指南讨论如何在 Ionic React 应用中使用 Ionic 生命周期事件。

## Ionic 生命周期方法

Ionic 提供了几个可以在应用中使用的生命周期方法：

| 事件名称           | 描述                                               |
| ------------------ | -------------------------------------------------- |
| `ionViewWillEnter` | 当路由目标组件即将动画进入视图时触发。             |
| `ionViewDidEnter`  | 当路由目标组件**已完成**动画进入时触发。           |
| `ionViewWillLeave` | 当路由来源组件即将动画离开时触发。                 |
| `ionViewDidLeave`  | 当路由来源组件**已完成**动画离开时触发。           |

这些生命周期只在由路由器直接映射的组件上调用。这意味着如果 `/pageOne` 映射到 `PageOneComponent`，那么 Ionic 生命周期将在 `PageOneComponent` 上调用，但不会在 `PageOneComponent` 可能渲染的任何子组件上调用。

访问这些方法的方式取决于您使用的是基于类的组件还是函数式组件。下面我们介绍这两种方法。

## 基于类组件中的生命周期方法

要在基于类的组件中使用 Ionic 生命周期方法，您必须使用 `withIonLifeCycle` 高阶组件（HOC）包装您的组件，如下所示：

```tsx
export default withIonLifeCycle(HomePage);
```

:::note
`withIonLifeCycle` 从 `@ionic/react` 导入
:::

然后，您可以在类组件上创建相应的生命周期方法，HOC 会在事件发生时调用该方法。以下是包含所有已实现生命周期方法的完整组件：

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

Ionic React 为每个生命周期方法导出了 hooks，您可以在函数式组件中使用。每个 hook 接受一个在事件触发时要调用的方法。

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

开发者还可以选择向每个生命周期 hook 传递响应式依赖项。这些依赖项会被传递给底层的 [React useEffect hook](https://react.dev/reference/react/useEffect#useeffect)：

```tsx
const [data, setData] = useState('foo');

useIonViewDidEnter(() => {
  console.log('ionViewDidEnter 事件已触发');
}, [data]);
```

## React 生命周期方法

React 中的所有生命周期方法（`componentDidMount`、`componentWillUnmount` 等）也都可以使用。但是，由于 Ionic React 管理页面的生命周期，某些事件可能不会在您预期的时候触发。例如，`componentDidMount` 在页面首次显示时触发，但如果您导航离开该页面，Ionic 可能会将该页面保留在 DOM 中，后续再次访问该页面时可能不会再次调用 `componentDidMount`。这就是 Ionic 生命周期方法存在的主要原因——当原生框架的事件可能不会触发时，仍然为您提供一种在视图进入和离开时调用逻辑的方式。

## 各生命周期方法的使用指导

以下是每个生命周期事件使用场景的一些建议。

- `ionViewWillEnter` - 由于 `ionViewWillEnter` 在每次导航到视图时都会被调用（无论是否已初始化），因此它是从服务加载数据的好方法。
- `ionViewDidEnter` - 如果您在使用 `ionViewWillEnter` 加载数据时遇到性能问题，可以在 `ionViewDidEnter` 中进行数据调用。但这个事件在页面对用户可见之后才会触发，因此您可能需要使用加载指示器或骨架屏，以免内容在过渡完成后不自然地闪烁出现。
- `ionViewWillLeave` - 可用于清理工作，比如取消订阅数据源。由于从当前页面导航离开时 `componentWillUnmount` 可能不会触发，如果您不希望某些逻辑在屏幕不可见时继续活动，请将清理代码放在这里。
- `ionViewDidLeave` - 当此事件触发时，您知道新页面已经完全过渡进入，因此任何您通常不希望视图可见时执行的逻辑都可以放在这里。

## 在页面之间传递状态

由于 Ionic React 管理页面的生命周期，当用户在应用中导航时，之前页面上的状态可能会更新。这可能会影响使用 React 的 `useEffect` 或 React Router 的 `useLocation` 确定的状态。例如，如果 `PageA` 调用 `useLocation`，当用户从 `PageA` 导航到 `PageB` 时，`useLocation` 的状态会发生变化。

开发者应包含适当的检查，以确保之前的页面只访问已定义的状态。

例如，如果 `testObject` 未定义，以下代码将报错：`{ state.testObject.childKey }`

相反，开发者应仅在 `testObject` 已定义时访问 `childKey`：`{ state.testObject?.childKey }`
