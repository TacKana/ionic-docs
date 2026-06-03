---
title: 覆盖层
sidebar_label: 覆盖层
---

# 在 React 中使用覆盖层组件

对于 Ionic React，有两种技术可以用来显示覆盖层组件，如模态框、警告框、操作菜单等。在本指南中，我们将介绍这两种方法。

## 覆盖层 Hooks

从 Ionic React 5.6 开始，我们引入了新的 React hooks，您可以使用它们来控制显示和关闭覆盖层。这些 hooks 提供了一种编程式的覆盖层控制方式，以及一种无需状态管理系统即可在 Ionic Page 之外使用覆盖层的方式。

要使用覆盖层 hook，请从 `@ionic/react` 导入您要使用的覆盖层对应的 hook。例如，如果我们要使用警告框覆盖层，我们导入 `useIonAlert`：

```tsx
import { useIonAlert } from '@ionic/react';
```

这些 hooks 返回一个数组，其中数组的第一项是显示 hook 的方法，第二项是关闭 hook 的方法：

```tsx
const [showAlert, hideAlert] = useIonAlert();
```

:::note
覆盖层通常在用户完成交互后自行关闭，因此您可能不需要使用 dismiss/hide 方法。
:::

要显示覆盖层，请使用 present 方法，我们将其解构为 `showAlert` 名称。该方法接受一组参数，这些参数因每种覆盖层而异，但通常它们可以接受一组简单的常用参数或一个对象来指定额外选项。

```tsx
showAlert('Hello!', [{ text: 'Ok' }]);
```

对于 `useIonAlert`，第一个参数是要显示的消息，第二个是用于自定义警告框按钮的 `AlertButtons` 数组。

或者，您可以传入一个 AlertOptions 配置对象来提供额外的参数，例如要添加到标记中的 CSS 类、警告框的标题以及在警告框关闭时调用的回调函数：

```tsx
showAlert({
  cssClass: 'my-css',
  header: '警告',
  message: '你好！',
  buttons: ['取消', { text: '确定', handler: (d) => console.log('ok pressed') }],
  onDidDismiss: (e) => console.log('alert dismiss'),
});
```

在其标记中显示额外自定义组件的覆盖层 hooks，例如[模态框](https://ionicframework.com/docs/api/modal)和[弹出框](https://ionicframework.com/docs/api/popover)，在初始化其 hooks 时会接受一些额外的参数。第一个参数是您希望覆盖层显示的组件，第二个是您希望在构建组件时传递给组件的额外 props 对象：

```tsx
const [present, dismiss] = useIonModal(({ name }) => <div>你好 {name}.</div>, {
  name: 'Dave',
});
```

## 覆盖层组件

覆盖层也可以通过使用来自 `@ionic/react` 的组件来显示。这些组件接受一个 `isOpen` 属性，您提供该属性来控制覆盖层当前是否显示。当 `isOpen` 从 true 变为 false（反之亦然）时，Ionic 会以适当的动画打开/关闭覆盖层。您还可以将任何其他额外的配置选项作为 props 提供给覆盖层：

```tsx
<IonAlert isOpen={showAlert} message="你好！" buttons={[{ text: '确定' }]} onDidDismiss={() => setShowAlert(false)} />
```

上面，`showAlert` 布尔值是来自您应用程序的状态。

当覆盖层关闭时，重要的是要接入 `onDidDismiss` 回调，并将您的状态变量设置为指示覆盖层不再显示。Ionic React 会观察 `isOpen` 属性的变化，以确定覆盖层是否应该显示。

对于显示自定义组件的覆盖层，例如[模态框](https://ionicframework.com/docs/api/modal)和[弹出框](https://ionicframework.com/docs/api/popover)，您将组件作为子元素提供给覆盖层组件：

```tsx
<IonModal isOpen={showModal}>
  <div>你好！</div>
</IonModal>
```

:::note
覆盖层组件仍然是显示覆盖层的有效方式，绝不是已弃用的方法。请使用最适合您应用程序的方法。
:::

## Ionic 覆盖层文档

有关完整文档以及查看 hook 和组件方法的使用示例，请访问 Ionic 中每种覆盖层的文档页面：

- [Action Sheet（操作菜单）](https://ionicframework.com/docs/api/action-sheet)
- [Alert（警告框）](https://ionicframework.com/docs/api/alert)
- [Loading（加载）](https://ionicframework.com/docs/api/loading)
- [Modal（模态框）](https://ionicframework.com/docs/api/modal)
- [Picker（选择器）](https://ionicframework.com/docs/api/picker)
- [Popover（弹出框）](https://ionicframework.com/docs/api/popover)
- [Toast（提示条）](https://ionicframework.com/docs/api/toast)
