# 工具函数

Ionic Vue 提供了一些工具函数，可以在应用中使用，让某些任务变得更简单，例如管理屏幕键盘和硬件返回按钮。

## 路由

### 函数

#### useIonRouter

▸ **useIonRouter**(): [`UseIonRouterResult`](#useionrouterresult)

返回 Ionic 路由实例，包含用于导航、自定义页面过渡以及原生功能路由上下文的 API 方法。此函数可以与 Vue 的 [`useRouter`](https://router.vuejs.org/api/index.html#userouter) 结合使用。

**自定义页面过渡**

```js
import { IonPage, useIonRouter } from '@ionic/vue';
import { customAnimation } from '@/animations/customAnimation';

const router = useIonRouter();
const push = () => {
  router.push('/page2', customAnimation);
};
const back = () => {
  router.back(customAnimation);
};
```

**Android 硬件返回按钮**

当用户在 Android 上按下硬件返回按钮时，你可能想知道是否处于应用的根页面。

```tsx
import { useIonRouter } from '@ionic/vue';

const ionRouter = useIonRouter();
if (ionRouter.canGoBack()) {
  // 在此执行某些操作
}
```

有关 Vue 路由的更多 API，请参阅 [Vue Router 文档](https://router.vuejs.org/api/index.html)。

### 接口

#### UseIonRouterResult

```ts
import { AnimationBuilder } from '@ionic/vue';
import { RouteLocationRaw } from 'vue-router';

interface UseIonRouterResult {
  canGoBack: (deep?: number) => boolean;
  push: (location: RouteLocationRaw, routerAnimation?: AnimationBuilder) => void;
  replace: (location: RouteLocationRaw, routerAnimation?: AnimationBuilder) => void;
  back: (routerAnimation?: AnimationBuilder) => void;
  forward: (routerAnimation?: AnimationBuilder) => void;
  navigate: (
    location: string | Location,
    routerDirection?: 'forward' | 'back' | 'root',
    routerAction?: 'push' | 'pop' | 'replace',
    routerAnimation?: AnimationBuilder
  ) => void;
}

useIonRouter(): UseIonRouterResult;
```

- `push` 方法相当于调用 `ionRouter.navigate(location, 'forward', 'push', animation)`。

- `replace` 方法相当于调用 `ionRouter.navigate(location, 'root', 'replace', animation)`。

更多使用示例请参阅 [Vue 导航文档](./navigation#navigating-using-useionrouter)。

## 硬件返回按钮

`useBackButton` 函数可用于注册回调函数，每当 Android 上的硬件返回按钮被按下时触发。此外，它还接受一个优先级参数，允许开发者在注册了多个处理器时自定义哪个处理器先触发。

```js
import { useBackButton } from '@ionic/vue';

...

useBackButton(10, () => {
  console.log('硬件返回按钮被调用！');
});
```

### 接口

```ts
type Handler = (processNextHandler: () => void) => Promise<any> | void | null;
interface UseBackButtonResult {
  unregister: () => void;
}

useBackButton(priority: number, handler: Handler): UseBackButtonResult;
```

更多信息和用法示例请参阅[硬件返回按钮文档](../developing/hardware-back-button)。

:::note
`useBackButton` 回调仅在应用运行在 Capacitor 或 Cordova 时触发。更多信息请参阅[Capacitor 和 Cordova 中的硬件返回按钮](../developing/hardware-back-button#hardware-back-button-in-capacitor-and-cordova)。
:::

## 键盘

`useKeyboard` 函数返回一个包含屏幕键盘状态的对象。该对象提供诸如屏幕键盘是否已显示以及键盘高度（以像素为单位）等信息。这些信息以 Vue 的 `ref` 形式提供，因此在你的应用中将是响应式的。

```js
import { watch } from 'vue';
import { useKeyboard } from '@ionic/vue';

const { isOpen, keyboardHeight } = useKeyboard();

watch(keyboardHeight, () => {
  console.log(`键盘高度为 ${keyboardHeight.value}px`);
});
```

### 接口

```ts
interface UseKeyboardResult {
  isOpen: Ref<boolean>;
  keyboardHeight: Ref<number>;
  unregister: () => void
}

useKeyboard(): UseKeyboardResult;
```

更多信息和用法示例请参阅[键盘文档](../developing/keyboard)。

## Ionic 生命周期

Ionic Vue 为 `setup()` 函数提供了几个生命周期钩子，以便接入 Ionic Framework 的页面生命周期。

```vue
<script setup lang="ts">
import { IonPage, onIonViewWillEnter, onIonViewDidEnter, onIonViewWillLeave, onIonViewDidLeave } from '@ionic/vue';

onIonViewDidEnter(() => {
  console.log('页面已进入');
});

onIonViewDidLeave(() => {
  console.log('页面已离开');
});

onIonViewWillEnter(() => {
  console.log('页面即将进入');
});

onIonViewWillLeave(() => {
  console.log('页面即将离开');
});
</script>
```

:::note
应用中的页面需要使用 `IonPage` 组件，才能正确触发生命周期方法和钩子。
:::

更多信息和用法示例请参阅[Vue 生命周期文档](./lifecycle)。