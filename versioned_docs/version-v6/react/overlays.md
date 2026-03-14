---
sidebar_label: 覆盖层组件
---

# 在 React 中使用覆盖层组件

对于 Ionic React，有两种技术可以用来显示覆盖层组件，比如模态框、警告框、操作表等。本指南将详细介绍这两种方法。

## 覆盖层钩子

从 Ionic React 5.6 开始，我们引入了新的 React 钩子，可以用来控制覆盖层的显示和关闭。这些钩子提供了一种编程方式来控制覆盖层，同时也允许你在 Ionic 页面之外使用覆盖层，而无需状态管理系统。

要使用覆盖层钩子，你需要从 `@ionic/react` 导入你想要使用的覆盖层钩子。例如，如果我们想使用警告框覆盖层，就导入 `useIonAlert`：

```tsx
import { useIonAlert } from '@ionic/react';
```

钩子返回一个数组，其中数组的第一项是显示钩子的方法，第二项是关闭钩子的方法：

```tsx
const [showAlert, hideAlert] = useIonAlert();
```

:::note
覆盖层通常在用户完成交互后会自动关闭，所以你可能不需要使用关闭/隐藏方法。
:::

要显示覆盖层，你可以使用显示方法（我们将其解构为 `showAlert`）。该方法接收一组参数，这些参数根据每个覆盖层而有所不同，但通常它们可以接收一组简单的通用参数，或者一个用于指定额外选项的对象。

```tsx
showAlert('Hello!', [{ text: 'Ok' }]);
```

对于 `useIonAlert`，第一个参数是要显示的消息，第二个是 `AlertButtons` 数组，用于自定义警告框显示的按钮。

或者，你可以传入一个 AlertOptions 配置对象来提供额外的参数，例如要添加到标记中的 CSS 类、警告框的标题，以及警告框关闭时调用的回调函数：

```tsx
showAlert({
  cssClass: 'my-css',
  header: 'Alert',
  message: 'Hello!',
  buttons: ['Cancel', { text: 'Ok', handler: (d) => console.log('ok pressed') }],
  onDidDismiss: (e) => console.log('alert dismiss'),
});
```

那些在其标记中显示额外自定义组件的覆盖层钩子，比如[模态框](https://ionicframework.com/docs/api/modal)和[弹出框](https://ionicframework.com/docs/api/popover)，在初始化钩子时会接收几个额外的参数。第一个参数是你希望覆盖层显示的组件，第二个是组件构造时要传入的额外属性对象：

```tsx
const [present, dismiss] = useIonModal(({ name }) => <div>Hello {name}.</div>, {
  name: 'Dave',
});
```

## 覆盖层组件

覆盖层也可以通过使用 `@ionic/react` 中的组件来显示。这些组件接收一个 `isOpen` 属性，由你提供来控制覆盖层当前是否显示。当 `isOpen` 从 true 切换到 false（或反之亦然）时，Ionic 会以适当的动画打开/关闭覆盖层。你还可以向覆盖层提供任何其他额外的配置选项作为属性：

```tsx
<IonAlert isOpen={showAlert} message="Hello!" buttons={[{ text: 'Ok' }]} onDidDismiss={() => setShowAlert(false)} />
```

上面的 `showAlert` 布尔值是你应用程序中的一个状态变量。

当覆盖层关闭时，重要的是要在 `onDidDismiss` 回调中设置你的状态变量，以指示覆盖层不再显示。Ionic React 会检查 `isOpen` 属性的变化，以确定是否应该显示覆盖层。

对于显示自定义组件的覆盖层，比如[模态框](https://ionicframework.com/docs/api/modal)和[弹出框](https://ionicframework.com/docs/api/popover)，你可以将组件作为覆盖层组件的子元素提供：

```tsx
<IonModal isOpen={showModal}>
  <div>Hello!</div>
</IonModal>
```

:::note
覆盖层组件仍然是显示覆盖层的有效方法，绝不是已弃用的方法。请使用最适合你应用程序的方法。
:::

## Ionic 中覆盖层的文档

要查看完整的文档以及钩子和组件方法的使用示例，请访问 Ionic 中每个覆盖层的文档页面：

- [操作表](https://ionicframework.com/docs/api/action-sheet)
- [警告框](https://ionicframework.com/docs/api/alert)
- [加载框](https://ionicframework.com/docs/api/loading)
- [模态框](https://ionicframework.com/docs/api/modal)
- [选择器](https://ionicframework.com/docs/api/picker)
- [弹出框](https://ionicframework.com/docs/api/popover)
- [提示框](https://ionicframework.com/docs/api/toast)