---
sidebar_label: 生命周期
---

# React 生命周期

本指南将讨论如何在 Ionic React 应用中使用 Ionic 生命周期事件。

## Ionic 生命周期方法

Ionic 提供了一些生命周期方法，供您在应用中使用：

| 事件名称             | 描述                                                                 |
| -------------------- | -------------------------------------------------------------------- |
| `ionViewWillEnter`   | 当即将动画进入视图的路由组件触发。                                     |
| `ionViewDidEnter`    | 当路由组件完成动画进入视图时触发。                                     |
| `ionViewWillLeave`   | 当即将离开视图的路由组件开始动画时触发。                               |
| `ionViewDidLeave`    | 当路由组件完成动画离开视图时触发。                                     |

根据您使用的是类组件还是函数组件，访问这些方法的方式有所不同。下面我们将介绍这两种方法。

## 类组件中的生命周期方法

要在类组件中使用 Ionic 生命周期方法，您必须使用 `withIonLifeCycle` 高阶组件（HOC）包装您的组件，如下所示：

```tsx
export default withIonLifeCycle(HomePage);
```

:::note
`withIonLifeCycle` 从 `@ionic/react` 导入
:::

然后，您可以在类组件上创建相应的生命周期方法，当事件发生时，HOC 会调用该方法。下面是一个实现了所有生命周期方法的完整组件示例：

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

Ionic React 为每个生命周期方法导出了钩子，您可以在函数组件中使用。每个钩子都接受一个回调函数，当事件触发时会调用该函数。

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

## React 生命周期方法

您也可以使用所有 React 生命周期方法（`componentDidMount`、`componentWillUnmount` 等）。但是，由于 Ionic React 管理页面的生命周期，某些事件可能不会在您期望的时候触发。例如，`componentDidMount` 在页面首次显示时触发，但如果您从页面导航离开，Ionic 可能会将页面保留在 DOM 中，再次访问该页面时可能不会再次调用 `componentDidMount`。这种情况正是 Ionic 生命周期方法存在的主要原因，它为您提供了一种方式，在原生框架事件可能不会触发时，仍然可以在视图进入和退出时调用逻辑。

## 各生命周期方法的使用指导

以下是关于每个生命周期事件使用场景的一些建议。

- `ionViewWillEnter` - 由于 `ionViewWillEnter` 在每次导航到视图时都会调用（无论是否已初始化），因此它是从服务加载数据的好方法。
- `ionViewDidEnter` - 如果在使用 `ionViewWillEnter` 加载数据时遇到性能问题，可以改用 `ionViewDidEnter` 进行数据调用。但是，此事件要等到页面对用户可见后才会触发，因此您可能需要使用加载指示器或骨架屏，以避免在过渡完成后内容突然闪现。
- `ionViewWillLeave` - 可用于清理工作，例如取消订阅数据源。由于 `componentWillUnmount` 在从当前页面导航时可能不会触发，如果您不希望屏幕不可见时某些代码仍在运行，可以将清理代码放在这里。
- `ionViewDidLeave` - 当此事件触发时，您知道新页面已经完全过渡完成，因此可以在此处执行那些在视图可见时通常不会执行的逻辑。