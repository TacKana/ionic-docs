---
sidebar_label: 覆盖层
---

# 在 React 中使用覆盖层组件

对于 Ionic React，有两种技术可用于显示覆盖层组件，如模态框、警告框、操作菜单等。在本指南中，我们将介绍这两种方法。

## 覆盖层 Hooks

从 Ionic React 5.6 开始，我们引入了新的 React hooks，可用于控制显示和关闭覆盖层。这些 hooks 提供了一种编程方式来控制覆盖层，以及一种无需状态管理系统即可在 Ionic 页面之外使用覆盖层的方式。

要使用覆盖层 hook，你需要从 `@ionic/react` 导入你想要使用的覆盖层的 hook。例如，如果我们想使用警告框覆盖层，我们导入 `useIonAlert`：

```tsx
import { useIonAlert } from '@ionic/react';
```

这些 hooks 返回一个数组，其中数组中的第一个元素是显示 hook 的方法，第二个是关闭 hook 的方法：

```tsx
const [showAlert, hideAlert] = useIonAlert();
```

:::note
覆盖层通常在用户完成交互后自动关闭，因此你可能不需要使用关闭/隐藏方法。
:::

要显示覆盖层，你使用呈现方法（我们将其解构为 `showAlert` 名称）。该方法接受一组参数，这些参数因覆盖层而异，但通常它们可以接受一组简单的常用参数，或者接受一个对象来指定其他选项。

```tsx
showAlert('你好！', [{ text: '确定' }]);
```

对于 `useIonAlert`，第一个参数是要显示的消息，第二个参数是一个 `AlertButtons` 数组，用于自定义警告框将显示的按钮。

或者，你可以传入一个 AlertOptions 配置对象来提供额外的参数，例如要添加到标记中的 CSS 类、警告框的标题，以及警告框关闭时调用的回调函数：

```tsx
showAlert({
  cssClass: 'my-css',
  header: '警告',
  message: '你好！',
  buttons: ['取消', { text: '确定', handler: (d) => console.log('确定了') }],
  onDidDismiss: (e) => console.log('警告框已关闭'),
});
```

显示额外自定义组件作为其标记一部分的覆盖层 hooks，例如[模态框](https://ionicframework.com/docs/api/modal)和[弹出框](https://ionicframework.com/docs/api/popover)，在初始化其 hooks 时需要几个额外的参数。第一个参数是你希望覆盖层显示的组件，第二个是你希望在构造时传递给组件的额外 props 对象：

```tsx
const [present, dismiss] = useIonModal(({ name }) => <div>你好 {name}。</div>, {
  name: 'Dave',
});
```

## 覆盖层组件

覆盖层也可以使用 `@ionic/react` 中的组件来显示。这些组件接受一个 `isOpen` prop，你提供它来控制覆盖层当前是否显示。当 `isOpen` 从 true 切换到 false（反之亦然）时，Ionic 将以适当的动画打开/关闭覆盖层。你还可以将任何其他配置选项作为 props 提供给覆盖层：

```tsx
<IonAlert isOpen={showAlert} message="你好！" buttons={[{ text: '确定' }]} onDidDismiss={() => setShowAlert(false)} />
```

上面，`showAlert` 布尔值是你的应用中提供的一个状态变量。

当覆盖层关闭时，重要的是要接入 `onDidDismiss` 回调并将状态变量设置为覆盖层不再显示。Ionic React 会监视 `isOpen` prop 的变化，以确定覆盖层是否应该显示。

对于显示自定义组件的覆盖层，例如[模态框](https://ionicframework.com/docs/api/modal)和[弹出框](https://ionicframework.com/docs/api/popover)，你将组件作为子元素提供给覆盖层组件：

```tsx
<IonModal isOpen={showModal}>
  <div>你好！</div>
</IonModal>
```

:::note
覆盖层组件仍然是显示覆盖层的有效方法，绝不是已弃用的方法。使用最适合你应用的方法。
:::

## Ionic 中覆盖层的文档

有关完整文档以及查看 hook 和组件方法的使用示例，请访问 Ionic 中每个覆盖层的文档页面：

- [操作菜单](https://ionicframework.com/docs/api/action-sheet)
- [警告框](https://ionicframework.com/docs/api/alert)
- [加载指示器](https://ionicframework.com/docs/api/loading)
- [模态框](https://ionicframework.com/docs/api/modal)
- [选择器](https://ionicframework.com/docs/api/picker)
- [弹出框](https://ionicframework.com/docs/api/popover)
- [提示条](https://ionicframework.com/docs/api/toast)
