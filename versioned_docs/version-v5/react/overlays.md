---
sidebar_label: 覆盖层组件
---

# 在 React 中使用覆盖层组件

对于 Ionic React，有两种技术可以用来显示覆盖层组件，例如模态框、警告框、操作表等。在本指南中，我们将详细介绍这两种方法。

## 覆盖层 Hooks

从 Ionic React 5.6 开始，我们引入了新的 React hooks，可用于控制覆盖层的显示和关闭。这些 hooks 提供了一种以编程方式控制覆盖层的方法，同时也允许您在 Ionic 页面之外使用覆盖层，而无需依赖状态管理系统。

要使用某个覆盖层 hook，您需要从 `@ionic/react` 导入所需的 hook。例如，如果我们想使用警告框覆盖层，就导入 `useIonAlert`：

```tsx
import { useIonAlert } from '@ionic/react';
```

这些 hooks 返回一个数组，其中数组的第一项是显示覆盖层的方法，第二项是关闭覆盖层的方法：

```tsx
const [showAlert, hideAlert] = useIonAlert();
```

:::note
覆盖层通常在用户完成交互后自动关闭，因此您可能不需要使用关闭/隐藏方法。
:::

要显示覆盖层，您可以使用显示方法（这里我们解构为 `showAlert`）。该方法接收一组参数，这些参数根据每个覆盖层类型而有所不同，但通常它们可以接收一组简单的通用参数，或者一个用于指定额外选项的对象。

```tsx
showAlert('你好！', [{ text: '确定' }]);
```

对于 `useIonAlert`，第一个参数是要显示的消息，第二个是 `AlertButtons` 数组，用于自定义警告框显示的按钮。

或者，您可以传入一个 AlertOptions 配置对象来提供额外参数，例如要添加到标记中的 CSS 类、警告框的标题以及警告框关闭时的回调函数：

```tsx
showAlert({
  cssClass: 'my-css',
  header: '警告',
  message: '你好！',
  buttons: ['取消', { text: '确定', handler: (d) => console.log('确定按钮被按下') }],
  onDidDismiss: (e) => console.log('警告框已关闭'),
});
```

那些在其标记中显示额外自定义组件的覆盖层 hooks，例如[模态框](https://ionicframework.com/docs/api/modal)和[弹出框](https://ionicframework.com/docs/api/popover)，在初始化时需要多接收几个参数。第一个参数是您希望覆盖层显示的组件，第二个是组件构造时要传入的额外属性对象：

```tsx
const [present, dismiss] = useIonModal(({ name }) => <div>你好 {name}。</div>, {
  name: 'Dave',
});
```

## 覆盖层组件

覆盖层也可以通过使用 `@ionic/react` 中的组件来显示。这些组件接收一个 `isOpen` 属性，您可以通过该属性控制覆盖层当前是否显示。当 `isOpen` 从 true 切换到 false（或反之）时，Ionic 将以适当的动画打开/关闭覆盖层。您还可以通过属性向覆盖层提供任何其他额外的配置选项：

```tsx
<IonAlert isOpen={showAlert} message="你好！" buttons={[{ text: '确定' }]} onDidDismiss={() => setShowAlert(false)} />
```

上面的 `showAlert` 布尔值来自您应用程序中的状态。

当覆盖层关闭时，连接到 `onDidDismiss` 回调函数并设置状态变量以指示覆盖层不再显示非常重要。Ionic React 通过检测 `isOpen` 属性的变化来确定是否应该显示覆盖层。

对于显示自定义组件的覆盖层，例如[模态框](https://ionicframework.com/docs/api/modal)和[弹出框](https://ionicframework.com/docs/api/popover)，您可以将组件作为覆盖层组件的子元素提供：

```tsx
<IonModal isOpen={showModal}>
  <div>你好！</div>
</IonModal>
```

:::note
覆盖层组件仍然是显示覆盖层的有效方法，绝不是已弃用的方法。请根据您的应用程序选择最适合的方法。
:::

## Ionic 覆盖层文档

要查看完整的文档以及 hook 和组件两种方法的用法示例，请访问 Ionic 中每个覆盖层的文档页面：

- [操作表](https://ionicframework.com/docs/api/action-sheet)
- [警告框](https://ionicframework.com/docs/api/modal#usage)
- [加载指示器](https://ionicframework.com/docs/api/loading)
- [模态框](https://ionicframework.com/docs/api/modal)
- [选择器](https://ionicframework.com/docs/api/picker)
- [弹出框](https://ionicframework.com/docs/api/popover)
- [轻提示](https://ionicframework.com/docs/api/toast)