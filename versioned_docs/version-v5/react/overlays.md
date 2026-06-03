---
title: 覆盖层
sidebar_label: 叠加层
---

# 在 React 中使用叠加层组件

对于 Ionic React，有两种技术可用于显示叠加层组件，如模态框、警告框、操作菜单等。在本指南中，我们将介绍这两种方法。

## 叠加层 Hooks

从 Ionic React 5.6 开始，我们引入了新的 React hooks，您可以使用它们来控制显示和关闭叠加层。这些 hooks 提供了一种编程式的方式来控制叠加层，同时也提供了一种在 Ionic Page 之外使用叠加层的方法，而无需状态管理系统。

要使用叠加层 hook，请从 `@ionic/react` 导入您要使用的叠加层对应的 hook。例如，如果我们想使用 Alert 叠加层，我们导入 `useIonAlert`：

```tsx
import { useIonAlert } from '@ionic/react';
```

这些 hooks 返回一个数组，其中数组的第一项是显示叠加层的方法，第二项是关闭叠加层的方法：

```tsx
const [showAlert, hideAlert] = useIonAlert();
```

:::note
叠加层通常在用户完成交互后自行关闭，因此您可能不需要使用 dismiss/hide 方法。
:::

要显示叠加层，请使用 present 方法，我们将其解构为名称 `showAlert`。该方法接受一组参数，这些参数因每个叠加层而异，但通常，它们可以接受一组简单的公共参数，或者接受一个对象来指定其他选项。

```tsx
showAlert('Hello!', [{ text: 'Ok' }]);
```

对于 `useIonAlert`，第一个参数是要显示的消息，第二个参数是一个 `AlertButtons` 数组，用于自定义警告框将显示的按钮。

或者，您可以传入一个 AlertOptions 配置对象来提供额外参数，例如要添加到标记中的 CSS 类、警告框的标题，以及在警告框关闭时调用的回调函数：

```tsx
showAlert({
  cssClass: 'my-css',
  header: 'Alert',
  message: 'Hello!',
  buttons: ['Cancel', { text: 'Ok', handler: (d) => console.log('ok pressed') }],
  onDidDismiss: (e) => console.log('alert dismiss'),
});
```

显示额外自定义组件作为其标记一部分的叠加层 hooks，例如 [modals](https://ionicframework.com/docs/api/modal) 和 [popovers](https://ionicframework.com/docs/api/popover)，在初始化其 hooks 时会接受一些额外参数。第一个参数是您希望叠加层显示的组件，第二个参数是您希望在构造时传递给组件的额外 props 对象：

```tsx
const [present, dismiss] = useIonModal(({ name }) => <div>Hello {name}.</div>, {
  name: 'Dave',
});
```

## 叠加层组件

叠加层也可以通过使用 `@ionic/react` 中的组件来显示。这些组件接受一个 `isOpen` 属性，您可以通过它来控制叠加层当前是否显示。当 `isOpen` 从 true 变为 false（反之亦然）时，Ionic 会以适当的动画打开/关闭叠加层。您还可以将其他任何额外的配置选项作为 props 提供给叠加层：

```tsx
<IonAlert isOpen={showAlert} message="Hello!" buttons={[{ text: 'Ok' }]} onDidDismiss={() => setShowAlert(false)} />
```

上面，`showAlert` 布尔值是您的应用中提供的一个状态变量。

当叠加层关闭时，重要的是要接入 `onDidDismiss` 回调并设置您的状态变量，以指示叠加层不再显示。Ionic React 会监测 `isOpen` 属性的变化，以确定叠加层是否应该显示。

对于显示自定义组件的叠加层，例如 [modals](https://ionicframework.com/docs/api/modal) 和 [popovers](https://ionicframework.com/docs/api/popover)，您将组件作为子组件提供给叠加层组件：

```tsx
<IonModal isOpen={showModal}>
  <div>Hello!</div>
</IonModal>
```

:::note
叠加层组件仍然是显示叠加层的一种有效方式，并且绝不是已弃用的方法。请使用最适合您应用的方法。
:::

## Ionic 中叠加层的文档

要获取完整文档并查看 hook 和组件方法的用法示例，请访问 Ionic 中每个叠加层的文档页面：

- [Action Sheet](https://ionicframework.com/docs/api/action-sheet)
- [Alert](https://ionicframework.com/docs/api/modal#usage)
- [Loading](https://ionicframework.com/docs/api/loading)
- [Modal](https://ionicframework.com/docs/api/modal)
- [Picker](https://ionicframework.com/docs/api/picker)
- [Popover](https://ionicframework.com/docs/api/popover)
- [Toast](https://ionicframework.com/docs/api/toast)
