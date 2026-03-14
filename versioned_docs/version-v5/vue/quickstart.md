---
sidebar_label: 快速入门
---

# Ionic Vue 快速入门

## 什么是 Ionic Framework？

首先，如果你是新用户，欢迎！Ionic Framework 是一个免费开源的组件库，用于构建运行在 iOS、Android、Electron 和 Web 上的应用程序。使用你熟悉的技术（HTML、CSS、JavaScript）一次编写应用，并部署到任何平台。

除了 UI 组件，Ionic Framework 还提供了一个命令行工具，用于创建新应用，以及部署到我们支持的各种平台。

在本指南中，我们将介绍 Vue 和 Ionic Framework 的基础知识，包括所有 Ionic Framework 特有的功能。如果你熟悉 Vue，请享受本指南并了解一些关于 Ionic Framework 的新知识。如果你对两者都不熟悉，也不用担心！本指南将涵盖基础知识，并提供足够的信息来启动并运行一个应用。

## 使用 Ionic CLI 创建项目

首先，让我们安装最新版本的 Ionic CLI。

```shell
npm install -g @ionic/cli@latest
```

安装后，全局命令 `ionic` 将允许使用 Ionic Framework 和任何其他依赖项创建一个 Vue 项目。要创建一个新项目，请运行以下命令：

```shell
ionic start myApp blank --type vue
cd myApp
```

然后，我们运行 `ionic serve` 让我们的项目在浏览器中运行。

## 使用 TypeScript 或 JavaScript 构建

我们在 Ionic 热爱 TypeScript，并且长期以来一直相信它是构建可扩展应用程序的绝佳工具。也就是说，我们知道 Vue 社区多么重视简单性——无论是工具、语言还是其他方面。事实上，这很可能正是 Vue 最初吸引你的原因。从简单开始——然后根据需要扩展。

所以，如果你更喜欢使用 JavaScript 而不是 TypeScript，也是可以的。生成 Ionic Vue 应用后，请按照以下步骤操作：

1.  移除 TypeScript 依赖：

```shell
npm uninstall --save typescript @types/jest @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/cli-plugin-typescript @vue/eslint-config-typescript
```

2.  将所有 `.ts` 文件更改为 `.js`。在一个空白的 Ionic Vue 应用中，这应该只是 `src/router/index.ts` 和 `src/main.ts`。如果你使用了测试，也要更改 `tests` 目录中文件的扩展名。

3.  在 `index.html` 中，将导入的 `<script>` 文件从 `/src/main.ts` 更改为 `/src/main.js`。

4.  从 `.eslintrc.js` 中移除 `@vue/typescript/recommended` 和 `@typescript-eslint/no-explicit-any: ‘off’`。

5.  从 `src/router/index.js` 中移除 `Array<RouteRecordRaw>` 和 `RouteRecordRaw` 的导入。

6.  如果存在 `src/shims-vue.d.ts` 文件，请将其删除。这仅在使用 Vue CLI 时需要。

7.  从任何包含 `lang="ts"` 的 Vue 组件的 `script` 标签中移除它。在一个空白的 Ionic Vue 应用中，这应该只是 `src/App.vue` 和 `src/views/HomePage.vue`。

8.  删除 `tsconfig.json` 文件。

## 初探 Vue 组件

我们应用的基础在 `src` 目录中，主要入口点是 `main.ts` 文件。如果我们在代码编辑器中打开项目并打开 `main.ts`，我们应该会看到以下内容：

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

第三个导入是我们应用的根组件，简单地命名为 `App`。这是我们的第一个 Vue 组件，将用于 Vue 应用的启动过程。

第四个导入获取我们的路由配置。稍后我们将更深入地探讨这个问题。

如果我们打开 `App.vue`，应该会看到以下内容：

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

要在 Vue 中使用一个组件，必须先导入它。所以对于 Ionic Framework 来说，这意味着任何时候我们想使用一个按钮或卡片，它都必须被添加到我们的导入中。就我们的 `App` 组件而言，我们正在使用 `IonApp` 和 `IonRouterOutlet`。如果你发现自己重复导入相同的组件，也可以全局注册组件。但这会带来性能上的权衡，我们在[优化你的应用](#优化你的构建)中会讲到。

接着，让我们看看模板。

```html
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>
```

所有 Vue 组件都必须有一个 `<template>`。在里面，我们放置了 `IonApp` 和 `IonRouterOutlet` 组件。

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

Vue 3 提供了一个新的 `defineComponent` 函数，用于创建组件以改进工具支持，我们将在这里使用它。我们首先定义组件的名称，然后提供我们将在模板中使用的组件。

你可以在这里提供多个参数，例如 `methods`、`setup` 等。这将在 Vue 的 [组合式 API 文档](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api) 中作为一部分进行解释。

## 初始化路由

Ionic Vue 使用 [vue-router](https://router.vuejs.org/) 依赖，所以如果你已经熟悉 Vue Router，你将能够把你对导航的了解应用到 Ionic Vue 中。让我们看看我们之前提到的路由配置。在 `router/index.ts` 中，你应该会看到类似于以下内容：

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
此示例使用的是 Ionic Vue 空白启动器应用，因此你实际的路由可能略有不同。
:::

这里的设置与你直接使用 `vue-router` 相同，但你需要从 `@ionic/vue-router` 包中导入诸如 `createRouter` 和 `createWebHistory` 之类的依赖。

导入依赖后，我们可以在 `routes` 数组中声明我们的路由。然后，我们可以创建一个路由实例，并向其提供我们的路由和我们想要使用的历史记录类型。

使用 Ionic Vue，懒加载是开箱即用的。我们可以不导入 `Home` 组件，而是这样做：

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

现在，你可能想知道：为什么我们在描述组件路径时使用 `@`？`@` 符号是一个快捷方式，用于描述相对于 `src` 目录的路径。如果我们试图在嵌套几层深的文件中引用一个组件，这将非常有用。我们可以简单地使用 `'@/views/Home.vue'`，而不是使用 `'../../../views/Home.vue'`。

## 一个带有样式的组件

现在 `App` 组件确实没有太多可以修改的地方。它是一个容器组件的基本示例。有了路由逻辑，它只负责渲染与给定 URL 路由匹配的组件。既然我们已经设置好了一个组件/路由，让我们继续修改我们的 `Home` 组件。

目前，`Home` 组件看起来像这样：

![显示消息"准备好创建应用了吗？从 Ionic UI 组件开始"的 Ionic Vue 主页截图](/img/guides/quickstart/home-page.png 'Ionic Vue 主页组件')

```html
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>空白</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">空白</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>准备好创建应用了吗？</strong>
        <p>
          从 Ionic
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components"
            >UI 组件</a
          >开始
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

与我们开始的 `App` 组件非常相似，我们有一些特定 Ionic Framework 组件的导入，一个来自 Vue 的导入，Vue 组件，以及伴随组件的样式。

对于我们的样式，请注意我们指定了样式为 `scoped`。这意味着我们在这里编写的样式仅适用于此组件。这对于防止样式从组件中泄露并影响应用程序的其他部分非常有用。我们强烈建议在 Ionic Vue 应用中使用 `scoped` 样式。

`IonPage` 是所有页面（具有路由/URL 的组件）的基础组件，并包含全屏组件的一些常见构建块，如页眉、标题和内容组件。

:::note
创建自己的页面时，不要忘记将 `IonPage` 作为它们的根组件。让 `IonPage` 成为根组件很重要，因为它有助于确保过渡正常工作，并提供 Ionic Framework 组件所依赖的基础 CSS。
:::

`IonHeader` 是一个旨在位于页面顶部的组件。除了处理一些基于 flexbox 的布局外，它本身作用不大。它旨在容纳诸如 `IonToolbar` 或 `IonSearchbar` 之类的组件。

`IonContent`，顾名思义，是我们页面的主要内容区域。它负责提供用户将与之交互的可滚动内容，以及可能在应用中使用的任何滚动事件。

我们当前的内容相对简单，但不包含任何可以在真实应用中使用的东西，所以让我们改变一下。

:::note
为简洁起见，我们将省略组件的重复部分，例如函数声明或其他组件的导入语句。
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

查看我们的代码，我们有一个名为 slot 的特殊属性。这是让 `IonItem` 知道在渲染时将 `IonCheckbox` 放在哪里的关键。这不是 Vue API，而是一个 Web 标准 API。此外，这与你可能记得的 Vue 2 中的插槽 API 不同。

让我们看看 Ionic Framework 的另一个组件，FAB。浮动操作按钮是一种很好的方式，可以提供从应用其余部分提升出来的主要操作。对于这个 FAB，我们需要三个组件：一个 FAB，一个 FAB 按钮和一个图标。

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

在我们的主 `IonFab` 上，我们通过 vertical 和 horizontal 属性设置其位置。我们还通过 slot 属性将渲染位置设置为 "fixed"。这将告诉 `IonFab` 在 `IonContent` 的可滚动内容之外进行渲染。

现在让我们为此连接一个点击处理器。当点击 FAB 按钮时，我们想导航到一个新页面（我们马上会创建）。为此，我们需要访问 Vue Router 的导航 API。这可以通过从 `vue-router` 包中导入 `useRouter` 来实现。

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

在我们的组件文件中，我们导入了 `useRouter` 函数。调用时，此函数将路由依赖项注入到组件中。它使我们能够访问 Vue Router 的历史 API，允许我们将新路由推送到导航堆栈上。在我们的 `IonFabButton` 上，我们可以添加一个点击处理器，然后调用 `router.push` 并传入新路由。在这种情况下，我们将导航到 `new`。

```html
<ion-fab-button @click="() => router.push('/new')"> ... </ion-fab-button>
```

## 创建新路由

现在我们已经具备了在应用中导航的条件，我们需要创建一个新组件并将新路由添加到我们的路由声明中。让我们打开 `router/index.ts` 文件并添加新路由。

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

现在我们的路由器有了路由 `/new` 的条目，我们将创建所需的组件 `NewItem`。它将存在于 `views/NewItem.vue` 中。

让我们先用一些占位内容填充 `NewItem.vue` 文件。

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
每个视图必须包含一个 `IonPage` 组件。没有它，页面过渡将无法正常工作。有关更多信息，请参阅 [IonPage 文档](navigation.md#ionpage)。
:::

这里的内容应该看起来与 `Home` 组件相似。不同之处在于 `IonBackButton` 组件。它用于导航回上一个路由。看起来很简单，对吧？好的，但是如果我们重新加载页面呢？

在这种情况下，内存中的历史记录丢失了，所以后退按钮会消失。为了解决这个问题，我们可以设置 `default-href` 属性值，指定在没有历史记录时要导航到的 URL。

```html
<ion-back-button default-href="/home"></ion-back-button>
```

现在，如果没有应用历史记录，我们将能够导航回我们的主页路由。

## 调用组件上的方法

为了调用任何 Ionic Vue 组件的方法，你首先需要获取对组件实例的引用。接下来，你需要使用 `$el` 访问底层的 Web 组件并调用该方法。

在其他框架集成中，如 Ionic React，不需要这样做，因为你提供的任何 `ref` 都会自动转发到底层的 Web 组件实例。由于 Vue 管理 ref 的方式存在限制，我们在这里无法做同样的事情。

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

Ionic Vue 预装了 [Ionicons](https://ionic.io/ionicons/)。开发人员有几种选项可以在他们的应用程序中使用它们。

### 动态导入

动态导入是使用 Ionicons 的推荐方法。这涉及从 `ionicons` 包中导入你选择的图标，并将其传递给你的模板：

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

让我们分解一下我们在这里做什么。首先，我们从 `ionicons/icons` 导入 `heart` 图标。这将为我们的图标加载适当的 SVG 数据。

接下来，我们在 `setup` 方法中将 `heart` 数据传递给我们的模板。

最后，我们通过 `icon` 属性将图标数据传递到 `ion-icon` 组件中。

开发人员还可以选择根据模式设置不同的图标：

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

请注意，任何带连字符的图标名称在导入时应使用驼峰式写法。

### 全局导入

另一种选择是全局导入特定的图标。通常不推荐这样做，因为它会强制图标在每次应用程序启动时加载，并可能增加应用程序的初始块大小。

话虽如此，在某些用例下，全局加载特定图标可能是有意义的：

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

在 `main.ts` 中，`addIcons` 函数让我们全局注册图标，并为其指定一个字符串作为键。然后我们在 `Home` 组件中通过该键引用图标。

## 优化你的构建

Vue 提供了几个工具来微调你的应用程序。本节将介绍与 Ionic Framework 最相关的选项。

### 局部组件注册（推荐）

默认情况下，Ionic Framework 组件是局部注册的。使用局部注册时，这些组件会被导入并提供给你想要使用它们的每个 Vue 组件。这是推荐的方法，因为它允许懒加载和摇树优化与 Ionic Framework 组件正常工作。

这种方法的一个缺点是，多次重新导入 Ionic Framework 组件可能会很繁琐。但是，我们觉得你因此获得的性能优势是值得的。

还要注意，局部注册的组件在子组件中不可用。你需要在子组件中重新导入你想使用的 Ionic Framework 组件。

让我们看看局部组件注册是如何工作的：

```html
<template>
  <ion-page>
    <ion-content>
      <子组件></子组件>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { IonContent, IonPage } from '@ionic/vue';
  import 子组件 from '@/components/Subcomponent.vue';

  export default defineComponent({
    components: { IonContent, IonPage, 子组件 },
  });
</script>
```

在上面的例子中，我们使用了 `IonPage` 和 `IonContent` 组件。要使用它们，我们首先从 `@ionic/vue` 导入它们。然后，我们在 `components` 选项中将它们提供给我们的 Vue 组件。之后，我们就可以在模板中使用这些组件了。

请注意，由于我们是局部注册这些组件，`IonPage` 和 `IonContent` 在 `子组件` 中将不可用，除非我们也在那里注册它们。

有关更多信息，请参阅 <a href="https://v3.vuejs.org/guide/component-registration.html#local-registration" target="_blank" rel="noopener noreferrer">局部注册 Vue 文档</a>。

### 全局组件注册

注册组件的另一种选择是使用全局注册。全局注册涉及在 `main.ts` 中导入你想使用的组件，并在你的 Vue 应用实例上调用 `component` 方法。

虽然这使得将 Ionic Framework 组件添加到 Vue 应用变得更容易，但全局注册通常并不理想。引用 Vue 文档的话："如果你正在使用像 Webpack 这样的构建系统，全局注册所有组件意味着即使你停止使用某个组件，它仍然可能被包含在你的最终构建中。这不必要地增加了用户必须下载的 JavaScript 的数量"。

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
      <子组件></子组件>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import 子组件 from '@/components/Subcomponent.vue';

  export default defineComponent({
    components: { 子组件 },
  });
</script>
```

在上面的例子中，我们使用了 `IonPage` 和 `IonContent` 组件。要使用它们，我们首先在 `main.ts` 中从 `@ionic/vue` 导入它们。然后，我们在应用实例上调用 `component` 方法，并将标签名和组件定义传递给它。完成此操作后，我们可以在应用程序的其余部分使用这些组件，而无需将它们导入每个 Vue 组件。

有关更多信息，请参阅 <a href="https://v3.vuejs.org/guide/component-registration.html#global-registration" target="_blank" rel="noopener noreferrer">全局注册 Vue 文档</a>。

### 预取应用程序 JavaScript

默认情况下，Vue CLI 会自动为你的应用程序中的 JavaScript 生成预取提示。预取利用浏览器空闲时间下载用户可能在不久的将来访问的文档。当用户访问需要预取文档的页面时，可以从浏览器缓存中快速提供该文档。

预取会消耗带宽，所以如果你的应用很大，你可能希望禁用它。你可以通过修改或创建 `vue.config.js` 文件来实现：

**vue.config.js**

```js
module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
};
```

上面的配置将阻止所有文件被预取，而是在需要时才加载。你也可以选择预取特定的代码块。查看 <a href="https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch" target="_blank" rel="noopener noreferrer">关于预取的 Vue CLI 文档</a> 获取更多示例。

## 构建原生应用

我们现在已经掌握了 Ionic Vue 应用的基础知识，包括一些 UI 组件和导航。Ionic Framework 组件的伟大之处在于它们可以在任何地方运行，包括 iOS、Android 和 PWA。为了部署到移动设备、桌面等平台，我们使用 Ionic 的跨平台应用运行时 [Capacitor](https://capacitorjs.com)。它提供了一套一致的、以 Web 为中心的 API，使应用能够尽可能接近 Web 标准，同时在支持它们的平台上访问丰富的原生设备功能。

添加原生功能很容易。首先，将 Capacitor 添加到你的项目中：

```shell
ionic integrations enable capacitor
```

接下来，构建项目，然后添加你选择的平台：

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

其他详细信息可以在[这里](https://capacitorjs.com/docs/getting-started/with-ionic)找到。

接下来，查看所有可用的 [API](https://capacitorjs.com/docs/apis)。有一些很棒的功能，包括[相机 API](https://capacitorjs.com/docs/apis/camera)。我们只需几行代码就可以实现拍照功能：

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic 空白</ion-title>
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

## 下一步去哪里

本指南涵盖了创建 Ionic Vue 应用、添加一些基本导航以及介绍 Capacitor 作为构建原生应用的方法的基础知识。要更深入地了解使用 Vue 和 Capacitor 构建完整的 Ionic Framework 应用，请遵循我们的[第一个应用指南](your-first-app.md)。

要更详细地了解 Ionic Framework 的组件，请查看[组件 API 页面](https://ionicframework.com/docs/components)。有关 Vue 的更多详细信息，请查阅 [Vue 文档](https://v3.vuejs.org/)。要继续构建原生功能，请参阅 [Capacitor 文档](https://capacitorjs.com/docs/)。

祝你应用构建愉快！🎉