---
title: React 生命周期
sidebar_label: 生命周期
---

<head>
  <title>React 生命周期：Ionic React 应用组件生命周期指南</title>
  <meta
    name="description"
    content="React 生命周期指南讨论如何在 Ionic React 应用中使用 Ionic 生命周期事件。阅读了解更多关于 React 组件生命周期的信息。"
  />
</head>

本指南讨论如何在 Ionic React 应用中使用 Ionic 生命周期事件。

## Ionic 生命周期方法

Ionic 提供了一些你可以在应用中使用的生命周期方法：

| 事件名称           | 描述                                     |
| ------------------ | ---------------------------------------- |
| `ionViewWillEnter` | 当路由到的组件即将动画进入视图时触发。 |
| `ionViewDidEnter`  | 当路由到的组件**已完成**动画时触发。     |
| `ionViewWillLeave` | 当路由**离开**的组件即将开始动画时触发。 |
| `ionViewDidLeave`  | 当路由**离开**的组件**已完成**动画时触发。 |

这些生命周期仅在由路由器直接映射的组件上调用。这意味着如果 `/pageOne` 映射到 `PageOneComponent`，那么 Ionic 生命周期将在 `PageOneComponent` 上调用，但不会在 `PageOneComponent` 可能渲染的任何子组件上调用。

访问这些方法的方式取决于你使用的是基于类的组件还是函数式组件。我们将在下面介绍这两种方法。

## 基于类组件中的生命周期方法

要在基于类的组件中使用 Ionic 生命周期方法，你必须使用 `withIonLifeCycle` 高阶组件（HOC）包装你的组件，如下所示：

```tsx
export default withIonLifeCycle(HomePage);
```

:::note
`withIonLifeCycle` 从 `@ionic/react` 导入
:::

然后你可以在类组件上创建相应的生命周期方法，HOC 会在事件发生时调用该方法。以下是实现了每个生命周期方法的完整组件：

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

Ionic React 为每个生命周期方法导出了钩子（hooks），你可以在函数式组件中使用。每个钩子接受你希望在事件触发时调用的方法。

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
函数式组件不需要像基于类的组件那样使用 `withIonLifeCycle` HOC 进行包装。
:::

开发者还可以选择性地向每个生命周期钩子传递响应式依赖项。这些依赖项会被传递到底层的 [React useEffect hook](https://react.dev/reference/react/useEffect#useeffect)：

```tsx
const [data, setData] = useState('foo');

useIonViewDidEnter(() => {
  console.log('ionViewDidEnter 事件已触发');
}, [data]);
```

## React 生命周期方法

React 中的所有生命周期方法（`componentDidMount`、`componentWillUnmount` 等）你也可以使用。然而，由于 Ionic React 管理页面的生命周期，某些事件可能不会按预期触发。例如，`componentDidMount` 在页面首次显示时触发，但如果导航离开该页面，Ionic 可能会将该页面保留在 DOM 中，后续再次访问该页面时可能不会再次调用 `componentDidMount`。这就是 Ionic 生命周期方法存在的主要原因——在原生框架的事件可能不会触发的情况下，仍然提供一种在视图进入和退出时调用逻辑的方式。

## 每个生命周期方法的指导建议

以下是每种生命周期事件使用场景的一些提示。

- `ionViewWillEnter` - 由于每次导航到视图时（无论是否初始化）都会调用 `ionViewWillEnter`，因此它是从服务加载数据的好方法。
- `ionViewDidEnter` - 如果你发现使用 `ionViewWillEnter` 加载数据时存在性能问题，你可以改为在 `ionViewDidEnter` 中进行数据调用。但此事件直到页面对用户可见后才会触发，因此你可能需要使用加载指示器或骨架屏，以避免内容在过渡完成后不自然地闪现。
- `ionViewWillLeave` - 可用于清理工作，比如取消订阅数据源。由于导航离开当前页面时 `componentWillUnmount` 可能不会触发，如果你不希望代码在屏幕不可见时保持活跃，请在此处放置清理代码。
- `ionViewDidLeave` - 当此事件触发时，你知道新页面已经完全过渡进来，因此任何你通常不想在视图可见时执行的逻辑都可以放在这里。

## 在页面之间传递状态

由于 Ionic React 管理页面的生命周期，当用户在应用中导航时，前一个页面的状态可能会更新。这可能会影响使用 React 的 `useEffect` 或 React Router 的 `useLocation` 确定的状态。例如，如果 `PageA` 调用了 `useLocation`，当用户从 `PageA` 导航到 `PageB` 时，`useLocation` 的状态会发生变化。

开发者应包含适当的检查，以确保前一个页面只访问已定义的状态。

例如，如果 `testObject` 未定义，以下代码会报错：`{ state.testObject.childKey }`

相反，开发者应仅在 `testObject` 已定义时才访问 `childKey`：`{ state.testObject?.childKey }`
