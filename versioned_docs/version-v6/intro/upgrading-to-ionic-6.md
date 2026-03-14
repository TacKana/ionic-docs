# 升级到 Ionic 6

按照本指南将您的 Ionic 5 应用升级到 Ionic 6。

## 开始之前

### Angular

1. Ionic 6 支持 Angular 12+。请按照 [Angular 更新指南](https://update.angular.io/) 更新到最新版本的 Angular。
2. 更新到 Ionic 6 的最新版本：

```shell
npm install @ionic/angular@6
```

如果您正在使用 Ionic Angular Server，请确保也更新它：

```shell
npm install @ionic/angular@6 @ionic/angular-server@6
```

3. 移除所有 `Config.set()` 的使用方式。改为在 `IonicModule.forRoot()` 中设置您的配置。请参阅 [配置文档](../developing/config) 获取更多示例。
4. 移除所有之前从 `@ionic/angular` 导出的 `setupConfig` 函数的使用方式。改为在 `IonicModule.forRoot()` 中设置您的配置。

### React

1. Ionic 6 支持 React 17+。更新到最新版本的 React：

```shell
npm install react@latest react-dom@latest
```

2. 更新到 Ionic 6 的最新版本：

```shell
npm install @ionic/react@6 @ionic/react-router@6
```

3. 更新 `package.json` 中 `scripts` 对象的 `test` 字段，包含 `transformIgnorePatterns`：

```json
"scripts": {
  "test": "react-scripts test --transformIgnorePatterns 'node_modules/(?!(@ionic/react|@ionic/react-router|@ionic/core|@stencil/core|ionicons)/)'",
  ...
}
```

4. 在您的 `App` 组件文件中导入并调用 `setupIonicReact`。如果您也在使用 `setupConfig`，请将您的配置传递给 `setupIonicReact` 代替：

**升级前**

```tsx title="App.tsx"
import { setupConfig } from '@ionic/react';

...

setupConfig({
  mode: 'md'
});
```

**升级后**

```tsx title="App.tsx"
import { setupIonicReact } from '@ionic/react';

...

setupIonicReact({
  mode: 'md'
});
```

:::note
即使开发者不设置自定义配置，也必须导入并调用 `setupIonicReact`。
:::

请参阅 [配置文档](../developing/config) 获取更多示例。

5. 将所有控制器导入从 `@ionic/core` 更新为 `@ionic/core/components`。以下以 `menuController` 为例展示迁移方式：

**升级前**

```tsx
import { menuController } from '@ionic/core';
```

**升级后**

```tsx
import { menuController } from '@ionic/core/components';
```

### Vue

1. Ionic 6 支持 Vue 3.0.6+。更新到最新版本的 Vue：

```shell
npm install vue@3 vue-router@4
```

2. 对于使用 Vue CLI 的应用，请安装 Vue CLI 5：

```shell
npm install -g @vue/cli@next
```

然后，升级所有 Vue CLI 插件：

```shell
vue upgrade --next
```

3. 更新到 Ionic 6 的最新版本：

```shell
npm install @ionic/vue@6 @ionic/vue-router@6
```

4. 将以下 `transformIgnorePatterns` 添加到 `jest.config.js` 或 `package.json` 的 `jest` 字段中：

```js title="jest.config.js"
module.exports = {
  ...
  transformIgnorePatterns: ['/node_modules/(?!@ionic/vue|@ionic/vue-router|@ionic/core|@stencil/core|ionicons)']
}
```

```json title="package.json"
  {
    ...
    "jest": {
      "transformIgnorePatterns": ["/node_modules/(?!@ionic/vue|@ionic/vue-router|@ionic/core|@stencil/core|ionicons)"]
    }
  }
```

更多信息请参阅下面的 [测试部分](#测试)。

5. 移除所有之前从 `@ionic/vue` 导出的 `setupConfig` 函数的使用方式。改为在安装 `IonicVue` 插件时设置您的配置。请参阅 [配置文档](../developing/config) 获取更多示例。

6. 将 `useIonRouter` 的 `IonRouter` 类型重命名为 `UseIonRouterResult`。

7. 将 `useKeyboard` 的 `IonKeyboardRef` 类型重命名为 `UseKeyboardResult`。

8. 重命名所有覆盖层事件监听器以使用新格式：

**升级前**

```html
<ion-modal
  :is-open="modalOpenRef"
  @onWillPresent="onModalWillPresentHandler"
  @onDidPresent="onModalDidPresentHandler"
  @onWillDismiss="onModalWillDismissHandler"
  @onDidDismiss="onModalDidDismissHandler"
>
  ...
</ion-modal>
```

**升级后**

```html
<ion-modal
  :is-open="modalOpenRef"
  @willPresent="onModalWillPresentHandler"
  @didPresent="onModalDidPresentHandler"
  @willDismiss="onModalWillDismissHandler"
  @didDismiss="onModalDidDismissHandler"
>
  ...
</ion-modal>
```

:::note
这适用于 `ion-action-sheet`、`ion-alert`、`ion-loading`、`ion-modal`、`ion-picker`、`ion-popover` 和 `ion-toast`。
:::

9. 在所有正在使用的 `ion-tabs` 中传入一个 `ion-router-outlet`：

**升级前**

```html
<ion-tabs>
  <ion-tab-bar slot="bottom"> ... </ion-tab-bar>
</ion-tabs>

<script>
  import { IonTabs, IonTabBar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonTabs, IonTabBar },
  });
</script>
```

**升级后**

```html
<ion-tabs>
  <ion-router-outlet></ion-router-outlet>
  <ion-tab-bar slot="bottom"> ... </ion-tab-bar>
</ion-tabs>

<script>
  import { IonTabs, IonTabBar, IonRouterOutlet } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonTabs, IonTabBar, IonRouterOutlet },
  });
</script>
```

10. 标签页内的额外路由应重写为同级路由，而不是子路由：

**升级前**

```ts
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
        children: {
          {
            path: 'view',
            component: () => import('@/views/Tab1View.vue')
          }
        }
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]
```

**升级后**

```ts
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1',
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1',
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
      },
      {
        path: 'tab1/view',
        component: () => import('@/views/Tab1View.vue'),
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue'),
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue'),
      },
    ],
  },
];
```

### Core

1. 更新到 Ionic 6 的最新版本：

```shell
npm install @ionic/core@6
```

## 更新您的代码

### Datetime（日期时间）

1. 移除所有 `placeholder`、`pickerOptions`、`pickerFormat`、`monthNames`、`monthShortNames`、`dayNames` 和 `dayShortNames` 属性的使用方式。`ion-datetime` 现在会根据设备设置的语言和地区自动格式化组件内显示的月份名称、日期名称和时间。更多信息请参阅 [ion-datetime 本地化文档](../api/datetime#localization)。

2. 移除所有 `text` 和 `placeholder` CSS Shadow Parts 的使用方式。

3. 移除所有 `--padding-bottom`、`--padding-end`、`--padding-start`、`--padding-top` 和 `--placeholder-color` CSS 变量的使用方式。要自定义 `ion-datetime` 的内边距，您可以使用任何 `padding` CSS 属性。

4. 移除所有 `open` 方法的使用方式。要在覆盖层中显示日期时间，请将其放置在 `ion-modal` 或 `ion-popover` 组件内部。更多信息请参阅 [ion-datetime 使用示例](../api/datetime#usage)。

5. 移除所有 `displayFormat` 或 `displayTimezone` 属性的使用方式。要解析 `ionChange` 事件负载中提供的 UTC 字符串，我们建议使用 [date-fns](https://date-fns.org/)。示例请参阅 [ion-datetime 日期解析文档](../api/datetime#parsing-dates)。

:::note
更多迁移示例请参阅 [Datetime 迁移示例应用](https://github.com/ionic-team/datetime-migration-samples)。
:::

### Icon（图标）

Ionic 6 现在附带了 Ionicons 6。请查看 [Ionicons 6 破坏性变更指南](https://github.com/ionic-team/ionicons/releases/tag/v6.0.0) 并进行必要的更改。

### Input（输入框）

确保不要将 `null` 作为值传递给 `placeholder` 属性。我们建议使用 `undefined` 代替。

### Modal（模态框）

`ion-modal` 现在使用 Shadow DOM。更新所有针对 `ion-modal` 内部样式的代码，使用 [ion-modal CSS 变量](../api/modal#css-custom-properties) 或 [ion-modal CSS Shadow Parts](../api/modal#css-shadow-parts)：

**升级前**

```css
ion-modal .modal-wrapper {
  ...;
}

ion-modal ion-backdrop {
  ...;
}
```

**升级后**

```css
ion-modal::part(content) {
  ...;
}

ion-modal::part(backdrop) {
  ...;
}
```

### Popover（弹出框）

`ion-popover` 现在使用 Shadow DOM。更新所有针对 `ion-popover` 内部样式的代码，使用 [ion-popover CSS 变量](../api/popover#css-custom-properties) 或 [ion-popover CSS Shadow Parts](../api/popover#css-shadow-parts)：

**升级前**

```css
ion-popover .popover-arrow {
  ...;
}

ion-popover ion-backdrop {
  ...;
}

ion-popover .popover-content {
  ...;
}
```

**升级后**

```css
ion-popover::part(arrow) {
  ...;
}

ion-popover::part(backdrop) {
  ...;
}

ion-popover::part(content) {
  ...;
}
```

### Radio（单选按钮）

移除所有 `RadioChangeEventDetail` 接口的使用方式。

### Select（选择框）

确保不要将 `null` 作为值传递给 `placeholder` 属性。我们建议使用 `undefined` 代替。

### Textarea（文本区域）

确保不要将 `null` 作为值传递给 `placeholder` 属性。我们建议使用 `undefined` 代替。

### 浏览器支持

Ionic 支持的浏览器列表已更改。请查看 [浏览器支持指南](../reference/browser-support)，确保您将应用部署到支持的浏览器。

如果您有 `browserslist` 或 `.browserslistrc` 文件，请使用以下内容更新它：

```
Chrome >=60
Firefox >=63
Edge >=79
Safari >=13
iOS >=13
```

### 测试

Ionic 6 现在以 ES 模块形式发布。ES 模块在所有主流浏览器中都得到支持，并带来了开发者体验和代码维护的改进。使用 Jest 进行测试的开发者需要更新他们的 Jest 配置，因为截至 Jest 27，Jest 尚未完全支持 ES 模块。

此更新涉及使用 Babel 将 Ionic 的 ES 模块编译为 CommonJS (CJS) 格式，这是 Jest 能够理解的格式。一旦 Jest 支持 ES 模块，此更改将不再必要。有关 Jest 中 ES 模块支持的更新，请参阅 https://github.com/facebook/jest/issues/9430。

如果您是从头开始创建一个新的 Ionic 应用，此配置已在我们提供的入门应用模板中为您完成。对于已有的 Ionic 应用，请按照以下步骤使 Jest 在 Ionic 6 中正常工作：

1. 在您的 Jest 配置中添加一个 `transformIgnorePatterns` 字段，其中包含相关的 Ionic 包。这通常位于 `jest.config.js` 或 `package.json` 的 `jest` 字段中：

```js title="jest.config.js"
module.exports = {
  ...
  transformIgnorePatterns: ['/node_modules/(?!@ionic/core|@stencil/core|ionicons)']
}
```

```json title="package.json"
  {
    ...
    "jest": {
      "transformIgnorePatterns": ["/node_modules/(?!@ionic/core|@stencil/core|ionicons)"]
    }
  }
```

:::note
如果您使用的是 Ionic React 或 Ionic Vue，请确保将相应的包添加到 `transformIgnorePatterns` 数组中。对于 Ionic React，这包括 `@ionic/react` 和 `@ionic/react-router`。对于 Ionic Vue，这包括 `@ionic/vue` 和 `@ionic/vue-router`。
:::

对于使用 Create React App (CRA) 的开发者，目前无法在 Jest 配置文件中更新 `transformIgnorePatterns`。这是 CRA 的限制，Ionic 无法控制。但是，我们可以直接将 `transformIgnorePatterns` 传递给 `react-scripts test` 命令：

```json title="package.json"
"scripts": {
  "test": "react-scripts test --transformIgnorePatterns 'node_modules/(?!(@ionic/react|@ionic/react-router|@ionic/core|@stencil/core|ionicons)/)'",
  ...
}
```

如果仍然遇到问题，可以尝试以下方法：

1. 验证 `@babel/preset-env` 是否包含在您的 [项目级配置](https://babeljs.io/docs/en/config-files#project-wide-configuration) 中，而不是 [文件相对配置](https://babeljs.io/docs/en/config-files#file-relative-configuration) 中。这通常意味着在 `<project-root>/babel.config.json` 中定义 Babel 配置。

2. 如果您的 `package.json` 文件中有 `browserslist/test` 字段，请确保它设置为 `current node`。

## 需要升级帮助？

请务必查看 [Ionic 6 破坏性变更指南](https://github.com/ionic-team/ionic-framework/blob/main/BREAKING.md)。其中包含了一些默认属性和 CSS 变量值的更改，开发者可能需要了解。本页仅列出了需要用户操作的破坏性变更。

如果您需要升级帮助，请在 [Ionic 论坛](https://forum.ionicframework.com/) 上发帖。