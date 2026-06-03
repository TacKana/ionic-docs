---
sidebar_label: 快速入门
---

# Ionic Vue 快速入门

## 什么是 Ionic Framework？

首先，如果您是新手，欢迎！Ionic Framework 是一个免费开源组件库，用于构建可在 iOS、Android、Electron 和 Web 上运行的应用。使用熟悉的技术（HTML、CSS、JavaScript）一次编写应用，即可部署到任何平台。

除了 UI 组件，Ionic Framework 还提供了一个命令行工具，用于创建新应用以及部署到我们支持的各种平台。

在本指南中，我们将介绍 Vue 和 Ionic Framework 的基础知识，包括所有 Ionic Framework 特有的功能。如果您熟悉 Vue，请享受本指南并学习一些关于 Ionic Framework 的新知识。如果您对两者都不熟悉，也没关系！本指南将涵盖基础知识，并提供足够的信息来让应用运行起来。

## 使用 Ionic CLI 创建项目

首先，让我们安装最新版本的 Ionic CLI。

```shell
npm install -g @ionic/cli@latest
```

之后，全局命令 `ionic` 将允许使用 Ionic Framework 和其他依赖创建 Vue 项目。要创建新项目，请运行以下命令：

```shell
ionic start myApp blank --type vue
cd myApp
```

然后，我们运行 `ionic serve`，项目就会在浏览器中运行起来。

## 使用 TypeScript 或 JavaScript 构建

Ionic 团队热爱 TypeScript，并且一直认为它是构建可扩展应用的好工具。尽管如此，我们理解 Vue 社区对简洁性的重视——无论是在工具、语言还是其他方面。事实上，这很可能也是 Vue 最初吸引您的原因。从简单开始——然后根据需要扩展。

所以，如果您更喜欢使用 JavaScript 而不是 TypeScript，完全可以。生成 Ionic Vue 应用后，按照以下步骤操作：

1. 移除 TypeScript 依赖：

```shell
npm uninstall --save typescript @types/jest @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/cli-plugin-typescript @vue/eslint-config-typescript
```

2. 将所有 `.ts` 文件改为 `.js`。在一个空白的 Ionic Vue 应用中，应该只有 `src/router/index.ts` 和 `src/main.ts`。如果您使用了测试文件，也要更改 `tests` 目录中的文件扩展名。

3. 在 `index.html` 中，将引入的 `<script>` 文件从 `/src/main.ts` 改为 `/src/main.js`。

4. 从 `.eslintrc.js` 中移除 `@vue/typescript/recommended` 和 `@typescript-eslint/no-explicit-any: 'off',`。

5. 从 `src/router/index.js` 中移除 `Array<RouteRecordRaw>` 以及 `RouteRecordRaw` 的导入。

6. 如果存在 `src/shims-vue.d.ts` 文件，请删除它。这仅在使用 Vue CLI 时需要。

7. 移除任何 Vue 组件中 `script` 标签上的 `lang="ts"`。在空白的 Ionic Vue 应用中，这应该只有 `src/App.vue` 和 `src/views/HomePage.vue`。

8. 删除 `tsconfig.json` 文件。

## 查看 Vue 组件

我们应用的基础将在 `src` 目录中，主要入口点将是 `main.ts` 文件。如果在代码编辑器中打开项目并打开 `main.ts`，我们应该看到以下内容：

```ts
import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';

import App from './App.vue';
import router from './router';

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.mount('#app');
});
```

那么这里发生了什么？前四行引入了一些依赖。`createApp` 函数让我们初始化 Vue 应用程序，而 `IonicVue` 是一个插件，允许我们在 Vue 环境中使用 Ionic Framework。

第三个导入是我们应用的根组件，简称为 `App`。这是我们的第一个 Vue 组件，将用于 Vue 应用的引导过程。

第四个导入获取我们的路由配置。我们稍后将更深入地了解这个。

如果我们打开 `App.vue`，应该看到以下内容：

```html
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
  import { IonApp, IonRouterOutlet } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
    components: {
      IonApp,
      IonRouterOutlet,
    },
  });
</script>
```

让我们分解一下，从第一组导入开始。

```tsx
import { IonApp, IonRouterOutlet } from '@ionic/vue';
```

要在 Vue 中使用组件，必须先导入它。对于 Ionic Framework，这意味着每当我们要使用 Button 或 Card 时，都必须将其添加到导入中。在我们的 `App` 组件中，我们使用了 `IonApp` 和 `IonRouterOutlet`。如果您发现自己反复导入相同的组件，也可以全局注册组件。这会带来一些性能权衡，我们在[优化应用](#优化构建)中会介绍。

接下来，让我们看看模板。

```html
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>
```

所有 Vue 组件都必须有一个 `<template>`。在其中，我们放置了 `IonApp` 和 `IonRouterOutlet` 组件。

最后，让我们看看组件定义：

```tsx
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
});
```

Vue 3 提供了新的 `defineComponent` 函数来创建组件以获得更好的工具支持，我们将在这里使用它。我们首先定义组件的名称，然后提供我们将在模板中使用的组件。

这里可以传入多个参数，如 `methods`、`setup` 等。这将在 Vue 的[组合式 API 文档](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api)中进行说明。

## 初始化路由器

Ionic Vue 使用 [vue-router](https://router.vuejs.org/) 依赖，所以如果您已经熟悉 Vue Router，您可以将所学知识应用到 Ionic Vue 的导航中。让我们看看之前提到的路由配置。在 `router/index.ts` 中，您应该看到类似以下的内容：

```tsx
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

:::note
此示例使用的是 Ionic Vue Blank 启动应用，所以您的实际路由可能会有所不同。
:::

这里的设置与直接使用 `vue-router` 相同，但您需要从 `@ionic/vue-router` 包中导入 `createRouter` 和 `createWebHistory` 等依赖。

导入依赖后，我们可以在 `routes` 数组中声明路由。然后，我们可以创建一个路由器实例，并提供路由和我们要使用的历史记录类型。

Ionic Vue 默认支持懒加载。我们也可以不导入 `Home` 组件，而是这样做：

```tsx
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
];
```

现在，您可能会想：为什么我们在描述组件路径时使用 `@` 符号？`@` 符号是一个快捷方式，用于描述相对于 `src` 目录的路径。当我们要在深层文件夹中引用组件时，这非常有用。我们不需要写 `'../../../views/Home.vue'`，只需写 `'@/views/Home.vue'` 即可。

## 一个有样式的组件

`App` 组件这里没有太多需要修改的地方。它是一个容器组件的基本示例。设置好路由逻辑后，它只负责渲染与给定 URL 路由匹配的组件。由于我们已经有了一组组件/路由设置，让我们继续修改 `Home` 组件。

目前，`Home` 组件看起来是这样的：

![Ionic Vue Home 页面截图，显示消息"准备好创建应用了吗？从 Ionic UI 组件开始"](/img/guides/quickstart/home-page.png 'Ionic Vue Home 组件')

```html
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>准备好创建应用了吗？</strong>
        <p>
          从 Ionic
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components"
            >UI 组件</a
          >
          开始
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Home',
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
    },
  });
</script>

<style scoped>
  #container {
    text-align: center;

    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  #container strong {
    font-size: 20px;
    line-height: 26px;
  }

  #container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
  }

  #container a {
    text-decoration: none;
  }
</style>
```

与我们开始的 `App` 组件类似，我们导入了一些特定的 Ionic Framework 组件、来自 Vue 的导入、Vue 组件以及伴随组件的样式。

对于样式，请注意我们指定了样式为 `scoped`。这意味着我们在这里编写的样式只会应用于此组件。这对于防止样式泄漏到组件外并影响应用的其他部分非常有用。我们强烈建议在 Ionic Vue 应用中使用 `scoped` 样式。

`IonPage` 是所有页面（具有路由/URL 的组件）的基础组件，包含全屏组件的一些常见构建块，如 header、title 和 content 组件。

:::note
创建自己的页面时，不要忘记将 `IonPage` 作为它们的根组件。将 `IonPage` 作为根组件非常重要，因为它有助于确保过渡效果正常工作，并提供 Ionic Framework 组件所依赖的基础 CSS。
:::

`IonHeader` 是一个设计用于页面顶部的组件。除了处理一些基于 flexbox 的布局外，它本身并不做太多事情。它用于容纳 `IonToolbar` 或 `IonSearchbar` 等组件。

`IonContent`，顾名思义，是我们页面的主要内容区域。它负责提供用户可交互的可滚动内容，以及应用中可能使用的任何滚动事件。

我们当前的内容相对简单，但不包含任何可以在实际应用中使用的功能，所以让我们来改变一下。

:::note
为简洁起见，我们将省略组件中重复的部分，如函数声明或其他组件的导入语句。
:::

```html
<template>
  <ion-page>
    ...
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1>创建想法</h1>
            <ion-note>向 Brandy 提出想法</ion-note>
          </ion-label>
          <ion-badge color="success" slot="end"> 5 天 </ion-badge>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
```

在我们的 `IonContent` 中，我们添加了一个 `IonList` 和一个更复杂的 `IonItem` 组件。让我们看看 `IonItem`，因为它是这里的核心。

```html
<ion-item>
  <ion-checkbox slot="start"></ion-checkbox>
  <ion-label>
    <h1>创建想法</h1>
    <ion-note>向 Brandy 提出想法</ion-note>
  </ion-label>
  <ion-badge color="success" slot="end"> 5 天 </ion-badge>
</ion-item>
```

查看我们的代码，有一个特殊的属性叫做 `slot`。这是让 `IonItem` 知道在渲染时将 `IonCheckbox` 放在哪里的关键。这不是 Vue API，而是 Web 标准 API。此外，这与您可能记得的 Vue 2 中的 slots API 不同。

让我们看看 Ionic Framework 的另一个组件——FAB。浮动操作按钮是提供比应用其他部分更高层级的主要操作的一种好方式。对于这个 FAB，我们需要三个组件：一个 FAB、一个 FAB 按钮和一个图标。

```html
<template>
  <ion-page>
    <ion-content>
      <ion-list> ... </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
  import { add } from 'ionicons/icons';

  ...

  export default defineComponent({
    name: 'Home',
    ...,
    setup() {
      return {
        add
      }
    }
  })
</script>
```

在我们的主 `IonFab` 上，我们使用 `vertical` 和 `horizontal` 属性设置其位置。我们还使用 `slot` 属性将渲染位置设置为 `fixed`。这将告诉 `IonFab` 在 `IonContent` 的可滚动内容之外渲染。

现在让我们为它添加一个点击处理程序。点击 FAB 按钮时，我们想导航到一个新页面（我们将马上创建）。为此，我们需要访问 Vue Router 的导航 API。可以通过从 `vue-router` 包导入 `useRouter` 来实现。

```html
<template>
  <ion-page>
    <ion-content>
      <ion-list> ... </ion-list>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button @click="() => router.push('/new')">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
  import { add } from 'ionicons/icons';
  import { useRouter } from 'vue-router';

  ...

  export default defineComponent({
    name: 'Home',
    components: {
      IonContent,
      IonFab,
      IonFabButton,
      IonHeader,
      IonIcon,
      IonPage,
      IonTitle,
      IonToolbar
    },
    setup() {
      return {
        router: useRouter(),
        add
      }
    }
  });
</script>
```

在我们的组件文件中，我们导入了 `useRouter` 函数。调用时，此函数将路由器依赖注入到组件中。它让我们可以访问 Vue Router 的 history API，从而允许我们将新路由推送到导航堆栈上。在我们的 `IonFabButton` 上，我们可以添加一个点击处理程序，只需调用 `router.push` 并传入新路由。在这种情况下，我们将导航到 `new`。

```html
<ion-fab-button @click="() => router.push('/new')"> ... </ion-fab-button>
```

## 创建新路由

现在我们已经有了在应用中导航的各个部分，我们需要创建一个新组件并将新路由添加到路由声明中。让我们打开 `router/index.ts` 文件并添加新路由。

```tsx
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import NewItem from '@/views/NewItem.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/new',
    name: 'NewItem',
    component: NewItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```

现在我们的路由器有了 `/new` 路由的条目，我们将创建所需的组件 `NewItem`。它将存在于 `views/NewItem.vue` 中。

让我们暂时用一些占位内容填充 `NewItem.vue` 文件。

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>新项目</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content></ion-content>
  </ion-page>
</template>

<script>
  import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'NewItem',
    components: {
      IonBackButton,
      IonButtons,
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
    },
  });
</script>
```

:::note
每个视图必须包含一个 `IonPage` 组件。没有它，页面过渡将无法正常工作。有关更多信息，请参见 [IonPage 文档](navigation.md#ionpage)。
:::

这里的内容应该与 `Home` 组件类似。不同的是这里的 `IonBackButton` 组件。它用于导航回上一个路由。看起来很简单，对吧？但是，如果我们重新加载页面呢？

在这种情况下，内存中的历史记录会丢失，所以返回按钮会消失。为了解决这个问题，我们可以在没有历史记录时设置 `default-href` 属性值，指定要导航到的 URL。

```html
<ion-back-button default-href="/home"></ion-back-button>
```

现在，如果不存在应用历史记录，我们仍然可以导航回首页路由。

## 调用组件方法

为了调用任何 Ionic Vue 组件的方法，您首先需要获取组件实例的引用。然后，您需要使用 `$el` 访问底层 Web 组件并调用方法。

在其他框架集成中，如 Ionic React，这是不需要的，因为您提供的任何 `ref` 都会自动转发到底层 Web 组件实例。由于 Vue 管理 refs 的限制，我们在这里无法做同样的事情。

```html
<template>
  <ion-content ref="content">
    <ion-button @click="scrollToBottom">滚动到底部</ion-button>

    ...
  </ion-content>
</template>

<script lang="ts">
  import { IonButton, IonContent } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    components: { IonButton, IonContent },
    setup() {
      const content = ref();
      const scrollToBottom = () => {
        content.value.$el.scrollToBottom(300);
      };

      return { content, scrollToBottom };
    },
  });
</script>
```

## 添加图标

Ionic Vue 预装了 [Ionicons](https://ionic.io/ionicons/)。开发人员有几种方式在应用中使用它们。

### 动态导入

动态导入是使用 Ionicons 的推荐方式。这涉及从 `ionicons` 包中导入您选择的图标并将其传递给模板：

```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon :icon="heart"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
  import { heart } from 'ionicons/icons';
  import { IonContent, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Icon',
    components: {
      IonContent,
      IonPage,
    },
    setup() {
      return { heart };
    },
  });
</script>
```

让我们分解一下我们在这里做的事情。首先，我们从 `ionicons/icons` 导入 `heart` 图标。这将加载我们图标对应的 SVG 数据。

接下来，我们在 `setup` 方法中将 `heart` 数据传递给模板。

最后，我们通过 `icon` 属性将图标数据传递给 `ion-icon` 组件。

开发人员还可以根据 mode 设置不同的图标：

```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon :ios="logoApple" :md="logoAndroid"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
  import { logoAndroid, logoApple } from 'ionicons/icons';
  import { IonContent, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Icon',
    components: {
      IonContent,
      IonPage,
    },
    setup() {
      return { logoAndroid, logoApple };
    },
  });
</script>
```

请注意，任何带有连字符的图标名称在导入时都应使用驼峰式写法。

### 全局导入

另一个选项是全局导入特定图标。通常不推荐这样做，因为它会强制在应用启动时加载图标，并可能增加应用的初始打包大小。

话虽如此，在某些用例中全局加载特定图标是有意义的：

**main.ts**

```tsx
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

addIcons({
  heart: heart,
});
```

**Home.vue**

```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon icon="heart"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonContent, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Home',
    components: {
      IonContent,
      IonPage,
    },
  });
</script>
```

在 `main.ts` 中，`addIcons` 函数让我们可以全局注册图标，并为它指定一个字符串作为键。然后我们在 `Home` 组件中通过该键引用图标。

## 优化构建

Vue 为您提供了多种微调应用的工。本节将介绍与 Ionic Framework 最相关的选项。

### 局部组件注册（推荐）

默认情况下，Ionic Framework 组件是局部注册的。使用局部注册，这些组件会被导入并提供给您想要使用它们的每个 Vue 组件。这是推荐的方法，因为它允许 Ionic Framework 组件正常工作时的懒加载和 tree-shaking。

这种方法的一个缺点是，多次重新导入 Ionic Framework 组件可能有些繁琐。但是，我们认为您获得的性能优势是值得的。

另请注意，局部注册的组件在子组件中不可用。您需要重新导入想要在子组件中使用的 Ionic Framework 组件。

让我们看看局部组件注册是如何工作的：

```html
<template>
  <ion-page>
    <ion-content>
      <Subcomponent></Subcomponent>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { IonContent, IonPage } from '@ionic/vue';
  import Subcomponent from '@/components/Subcomponent.vue';

  export default defineComponent({
    components: { IonContent, IonPage, Subcomponent },
  });
</script>
```

在上面的示例中，我们使用了 `IonPage` 和 `IonContent` 组件。要使用它们，我们首先从 `@ionic/vue` 导入它们。然后，我们在 Vue 组件的 `components` 选项中提供它们。之后，我们就可以在模板中使用这些组件了。

请注意，由于我们是局部注册这些组件，`IonPage` 和 `IonContent` 在 `Subcomponent` 中不可用，除非我们也在那里注册它们。

更多信息，请参见 <a href="https://v3.vuejs.org/guide/component-registration.html#local-registration" target="_blank" rel="noopener noreferrer">Vue 局部注册文档</a>。

### 全局组件注册

注册组件的另一种方式是使用全局注册。全局注册涉及在 `main.ts` 中导入要使用的组件，并在 Vue 应用实例上调用 `component` 方法。

虽然这使得将 Ionic Framework 组件添加到 Vue 应用更容易，但全局注册通常并不理想。引用 Vue 文档的话："如果您使用像 Webpack 这样的构建系统，全局注册所有组件意味着即使您停止使用某个组件，它仍可能包含在最终构建中。这不必要地增加了用户必须下载的 JavaScript 数量。"

让我们看看全局组件注册是如何工作的：

**main.ts**

```tsx
import { IonContent, IonicVue, IonPage } from '@ionic/vue';

const app = createApp(App).use(IonicVue).use(router);

app.component('ion-content', IonContent);
app.component('ion-page', IonPage);
```

**MyComponent.vue**

```html
<template>
  <ion-page>
    <ion-content>
      <Subcomponent></Subcomponent>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Subcomponent from '@/components/Subcomponent.vue';

  export default defineComponent({
    components: { Subcomponent },
  });
</script>
```

在上面的示例中，我们使用了 `IonPage` 和 `IonContent` 组件。要使用它们，我们首先在 `main.ts` 中从 `@ionic/vue` 导入它们。然后，我们在应用实例上调用 `component` 方法，传入标签名和组件定义。完成后，我们就可以在应用的其余部分使用这些组件，而无需在每个 Vue 组件中导入它们。

更多信息，请参见 <a href="https://v3.vuejs.org/guide/component-registration.html#global-registration" target="_blank" rel="noopener noreferrer">Vue 全局注册文档</a>。

### 预取应用 JavaScript

默认情况下，Vue CLI 会自动为应用中的 JavaScript 生成预取提示。预取利用浏览器的空闲时间下载用户可能在不久的将来访问的文档。当用户访问需要预取文档的页面时，可以从浏览器缓存中快速提供。

预取会消耗带宽，所以如果您有一个大型应用，可能希望禁用它。可以通过修改或创建 `vue.config.js` 文件来实现：

**vue.config.js**

```js
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
};
```

以上配置将阻止所有文件被预取，而是在需要时才加载。您也可以选择预取某些 chunk。请查看 <a href="https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch" target="_blank" rel="noopener noreferrer">Vue CLI 预取文档</a> 了解更多示例。

## 构建原生应用

我们现在已经掌握了 Ionic Vue 应用的基础知识，包括一些 UI 组件和导航。Ionic Framework 组件的美妙之处在于它们可以在任何地方工作，包括 iOS、Android 和 PWA。要部署到移动端、桌面端等平台，我们使用 Ionic 的跨平台应用运行时 [Capacitor](https://capacitorjs.com)。它提供了一套一致的、以 Web 为中心的 API，使应用尽可能接近 Web 标准，同时能够在支持它们的平台上访问丰富的原生设备功能。

添加原生功能很容易。首先，将 Capacitor 添加到您的项目：

```shell
ionic integrations enable capacitor
```

接下来，构建项目，然后添加您选择的平台：

```shell
ionic build
ionic cap add ios
ionic cap add android
```

我们使用标准的原生 IDE（Xcode 和 Android Studio）来打开、构建和运行 iOS 和 Android 项目：

```shell
ionic cap open ios
ionic cap open android
```

更多详情请参见[这里](https://capacitorjs.com/docs/getting-started/with-ionic)。

接下来，查看所有可用的 [API](https://capacitorjs.com/docs/apis)。有一些很棒的功功能，包括 [Camera API](https://capacitorjs.com/docs/apis/camera)。我们只需几行代码就可以实现拍照功能：

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <img :src="photo" />
      <ion-button @click="takePhoto()">拍照</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonHeader, IonPage, IonTitle } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';
  import { Plugins, CameraResultType } from '@capacitor/core';
  const { Camera } = Plugins;

  export default defineComponent({
    name: 'Home',
    components: {
      IonButton,
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
    },
    setup() {
      const imageSrc = ref('');
      const takePhoto = async () => {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri,
        });

        imageSrc.value = image.webPath;
      };

      return {
        photo: imageSrc,
        takePhoto,
      };
    },
  });
</script>
```

## 下一步

本指南涵盖了创建 Ionic Vue 应用、添加基本导航以及介绍 Capacitor 作为构建原生应用方式的基础知识。要更深入地学习使用 Vue 和 Capacitor 构建完整的 Ionic Framework 应用，请跟随我们的[第一个应用指南](your-first-app.md)。

要更详细地了解 Ionic Framework 的组件，请查看[组件 API 页面](https://ionicframework.com/docs/components)。有关 Vue 的更多详情，请查阅 [Vue 文档](https://v3.vuejs.org/)。要继续构建原生功能，请参见 [Capacitor 文档](https://capacitorjs.com/docs/)。

祝您构建应用愉快！
