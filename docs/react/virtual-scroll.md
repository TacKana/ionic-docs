# 虚拟滚动

:::warning 寻找 `ion-virtual-scroll`？

`ion-virtual-scroll` 已在 v6.0.0 中弃用，并在 v7.0.0 中移除。我们建议使用下面详述的 Virtuoso 包。

:::

一个值得考虑的 Ionic React 应用虚拟滚动解决方案是 [Virtuoso](https://virtuoso.dev/)。本指南将介绍如何将 `Virtuoso` 安装到你的 Ionic React 应用中，并将其与其他 Ionic 组件一起使用。

## 安装

要设置虚拟滚动器，首先安装 `react-virtuoso`：

```shell
npm install react-virtuoso
```

## 使用方法

Virtuoso 包含几个组件，但本示例将使用 `Virtuoso` 组件。该组件应添加在你的 `IonContent` 组件内部：

```tsx
import React from 'react';
import { Virtuoso } from 'react-virtuoso';
import { IonAvatar, IonContent, IonItem, IonLabel, IonPage } from '@ionic/react';
const Home: React.FC = () => (
  <IonPage>
    <IonContent>
      <Virtuoso
        style={{ height: '100%' }}
        totalCount={100}
        itemContent={(index) => {
          return (
            <div style={{ height: '56px' }}>
              <IonItem>
                <IonAvatar slot="start">
                  <img src="https://picsum.photos/seed/picsum/40/40" />
                </IonAvatar>
                <IonLabel>{index}</IonLabel>
              </IonItem>
            </div>
          );
        }}
      />
    </IonContent>
  </IonPage>
);
export default Home;
```

将 `Virtuoso` 组件添加到页面后，我们需要定义虚拟滚动容器的大小。在本例中，我们希望容器占据屏幕的全部高度，可以通过添加 `style={{ height: '100%' }}` 来实现。

接下来，我们通过 `totalCount` 属性定义要渲染的总项目数。

然后，我们可以使用 `itemContent` 属性传递一个函数，该函数将被调用来渲染虚拟滚动内容中的每个项目。

这里需要注意的一个重要事项是包裹 `IonItem` 组件的 `div`。懒加载 Ionic 组件时，可能会有几帧组件已加载但样式尚未加载。发生这种情况时，组件的尺寸将为 `0`，Virtuoso 可能会抛出错误。这是因为 Virtuoso 需要为它渲染的每个项目确定不同的位置，而当组件的尺寸为 `0` 时无法确定。

## 与 Ionic 组件一起使用

Ionic Framework 要求诸如可折叠大标题、`ion-infinite-scroll`、`ion-refresher` 和 `ion-reorder-group` 等功能在 `ion-content` 内使用。要将这些功能与虚拟滚动一起使用，你必须在虚拟滚动视口上添加 `.ion-content-scroll-host` 类。

例如：

```tsx
<IonPage>
  <IonContent scrollY={false}>
    <Virtuoso className="ion-content-scroll-host">{/* 你现有的内容和配置 */}</Virtuoso>
  </IonContent>
</IonPage>
```

## 延伸阅读

本指南仅涵盖了 `Virtuoso` 功能的一小部分。更多详情，请参阅 [Virtuoso 文档](https://virtuoso.dev/)。
