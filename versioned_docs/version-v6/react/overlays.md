---
sidebar_label: 覆盖层
---

# 在 React 中使用覆盖层组件

对于 Ionic React，有两种技术可用于显示覆盖层组件，如模态框、警告框、操作菜单等。在本指南中，我们将介绍这两种方法。

## 覆盖层 Hooks

从 Ionic React 5.6 开始，我们引入了新的 React hooks，您可以使用它们来控制覆盖层的显示和关闭。这些 hooks 提供了一种编程方式来控制覆盖层，以及在 Ionic 页面之外使用覆盖层而无需状态管理系统的方法。

要使用覆盖层 hook，您从 `@ionic/react` 导入要使用的覆盖层对应的 hook。例如，如果我们想使用 Alert 覆盖层，我们导入 `useIonAlert`：

```tsx
import { useIonAlert } from '@ionic/react';
```

这些 hooks 返回一个数组，数组中的第一个元素是显示 hook 的方法，第二个是关闭 hook 的方法：

```tsx
const [showAlert, hideAlert] = useIonAlert();
```

:::note
覆盖层通常在用户完成交互后自行关闭，因此您可能不需要使用关闭/隐藏方法。
:::

要显示覆盖层，您使用展示方法，我们将其解构命名为 `showAlert`。该方法接受一组参数，这些参数根据每个覆盖层而有所不同，但通常，它们可以接受一组简单的公共参数，或者接受一个对象来指定额外的选项。

```tsx
showAlert('您好！', [{ text: '确定' }]);
```

对于 `useIonAlert`，第一个参数是要显示的消息，第二个参数是 `AlertButtons` 数组，用于自定义警告框将显示的按钮。

或者，您可以传入一个 AlertOptions 配置对象来提供额外的参数，例如要添加到标记中的 CSS 类、警告框的标题以及警告框关闭时调用的回调函数：

```tsx
showAlert({
  cssClass: 'my-css',
  header: '警告',
  message: '您好！',
  buttons: ['取消', { text: '确定', handler: (d) => console.log('已按确定') }],
  onDidDismiss: (e) => console.log('警告框关闭'),
});
```

在其标记中显示额外自定义组件的覆盖层 hooks，如[模态框](https://ionicframework.com/docs/api/modal)和[弹出框](https://ionicframework.com/docs/api/popover)，在初始化其 hooks 时会接受一些额外的参数。第一个参数是您希望覆盖层显示的组件，第二个是您希望在组件构造时传入的额外 props 对象：

```tsx
const [present, dismiss] = useIonModal(({ name }) => <div>您好 {name}。</div>, {
  name: 'Dave',
});
```

## 覆盖层组件

覆盖层也可以通过使用 `@ionic/react` 中的组件来显示。这些组件接受一个 `isOpen` prop，您可以通过它来控制覆盖层当前是否显示。当 `isOpen` 从 true 变为 false（反之亦然）时，Ionic 将使用适当的动画打开/关闭覆盖层。您还可以将任何其他额外的配置选项作为 props 提供给覆盖层：

```tsx
<IonAlert isOpen={showAlert} message="您好！" buttons={[{ text: '确定' }]} onDidDismiss={() => setShowAlert(false)} />
```

上面，`showAlert` 布尔值是来自应用的状态片段。

当覆盖层关闭时，重要的是要关联 `onDidDismiss` 回调，并设置状态变量以指示覆盖层不再显示。Ionic React 会监听 `isOpen` prop 的变化来确定覆盖层是否应该显示。

对于显示自定义组件的覆盖层，如[模态框](https://ionicframework.com/docs/api/modal)和[弹出框](https://ionicframework.com/docs/api/popover)，您将组件作为子组件提供给覆盖层组件：

```tsx
<IonModal isOpen={showModal}>
  <div>您好！</div>
</IonModal>
```

:::note
覆盖层组件仍然是显示覆盖层的有效方式，绝不是已弃用的方法。请使用最适合您应用的方法。
:::

## Ionic 中覆盖层的文档

有关完整文档以及 hook 和组件方法的用法示例，请访问 Ionic 中每个覆盖层的文档页面：

- [Action Sheet（操作菜单）](https://ionicframework.com/docs/api/action-sheet)
- [Alert（警告框）](https://ionicframework.com/docs/api/alert)
- [Loading（加载指示器）](https://ionicframework.com/docs/api/loading)
- [Modal（模态框）](https://ionicframework.com/docs/api/modal)
- [Picker（选择器）](https://ionicframework.com/docs/api/picker)
- [Popover（弹出框）](https://ionicframework.com/docs/api/popover)
- [Toast（提示条）](https://ionicframework.com/docs/api/toast)
