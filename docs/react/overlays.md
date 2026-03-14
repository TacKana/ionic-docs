---
sidebar_label: 叠加层
---

# 在 React 中使用叠加层组件

对于 Ionic React，有两种技术可用于显示模态框（modal）、警告框（alert）、动作表（action sheet）等叠加层组件。本指南将详细介绍这两种方法。

## 叠加层钩子

从 Ionic React 5.6 开始，我们引入了新的 React 钩子（hooks），可用于控制叠加层的显示和关闭。这些钩子提供了一种以编程方式控制叠加层的方法，同时也能让你在 Ionic 页面之外使用叠加层，而无需依赖状态管理系统。

要使用叠加层钩子，你需要从 `@ionic/react` 导入所需的钩子。例如，如果我们想使用警告框叠加层，就导入 `useIonAlert`：

```tsx
import { useIonAlert } from '@ionic/react';
```

这些钩子返回一个数组，其中第一项是显示叠加层的方法，第二项是关闭叠加层的方法：

```tsx
const [showAlert, hideAlert] = useIonAlert();
```

:::note
叠加层通常会在用户完成交互后自动关闭，因此你可能不需要使用关闭/隐藏方法。
:::

要显示叠加层，你可以使用显示方法（这里我们将其解构为 `showAlert`）。该方法接收的参数因不同叠加层而异，但通常可以接受一组简单的通用参数，或者一个用于指定额外选项的对象。

```tsx
showAlert('Hello!', [{ text: 'Ok' }]);
```

对于 `useIonAlert`，第一个参数是要显示的消息，第二个参数是 `AlertButtons` 数组，用于自定义警告框显示的按钮。

或者，你也可以传入一个 AlertOptions 配置对象，以提供额外的参数，例如要添加到标记中的 CSS 类、警告框的标题以及警告框关闭时调用的回调函数：

```tsx
showAlert({
  cssClass: 'my-css',
  header: 'Alert',
  message: 'Hello!',
  buttons: ['Cancel', { text: 'Ok', handler: (d) => console.log('ok pressed') }],
  onDidDismiss: (e) => console.log('alert dismiss'),
});
```

那些在其标记中显示额外自定义组件的叠加层钩子，例如[模态框](https://ionicframework.com/docs/api/modal)和[弹出框](https://ionicframework.com/docs/api/popover)，在初始化钩子时会接收几个额外的参数。第一个参数是你希望叠加层显示的组件，第二个参数是一个对象，包含你想在组件构造时传递的额外属性：

```tsx
const [present, dismiss] = useIonModal(({ name }) => <div>Hello {name}.</div>, {
  name: 'Dave',
});
```

## 叠加层组件

叠加层也可以通过使用 `@ionic/react` 中的组件来显示。这些组件接收一个 `isOpen` 属性，你可以通过它来控制叠加层当前是否显示。当 `isOpen` 从 true 变为 false（或相反）时，Ionic 会以适当的动画打开/关闭叠加层。你还可以向叠加层提供任何其他额外的配置选项作为属性：

```tsx
<IonAlert isOpen={showAlert} message="Hello!" buttons={[{ text: 'Ok' }]} onDidDismiss={() => setShowAlert(false)} />
```

上面的 `showAlert` 布尔值是你应用程序中的一个状态变量。

当叠加层关闭时，务必在 `onDidDismiss` 回调中设置你的状态变量，以表明叠加层不再显示。Ionic React 会检测 `isOpen` 属性的变化，以确定是否应显示叠加层。

对于显示自定义组件的叠加层，例如[模态框](https://ionicframework.com/docs/api/modal)和[弹出框](https://ionicframework.com/docs/api/popover)，你需要将组件作为子元素传递给叠加层组件：

```tsx
<IonModal isOpen={showModal}>
  <div>Hello!</div>
</IonModal>
```

:::note
叠加层组件仍然是显示叠加层的有效方式，绝不是已弃用的方法。请选择最适合你应用程序的方式。
:::

## Ionic 叠加层文档

要查看完整的文档以及钩子和组件两种使用方式的示例，请访问 Ionic 中每个叠加层的文档页面：

- [动作表](https://ionicframework.com/docs/api/action-sheet)
- [警告框](https://ionicframework.com/docs/api/alert)
- [加载指示器](https://ionicframework.com/docs/api/loading)
- [模态框](https://ionicframework.com/docs/api/modal)
- [选择器](https://ionicframework.com/docs/api/picker)
- [弹出框](https://ionicframework.com/docs/api/popover)
- [轻提示](https://ionicframework.com/docs/api/toast)