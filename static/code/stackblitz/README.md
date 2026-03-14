# StackBlitz

此目录包含了为各个框架目标生成 playground 示例的源文件。这些文件的内容将被加载并注入到从 Playground 打开的 StackBlitz 示例中。

## 目录结构

文件按 Ionic 版本 (`v6`、`v7`、`v8`) 和框架 (`angular`、`html`、`react`、`vue`) 组织：

```
stackblitz/
├── v6/
│   ├── angular/
│   ├── html/
│   ├── react/
│   └── vue/
├── v7/
│   ├── angular/
│   ├── html/
│   ├── react/
│   └── vue/
└── v8/
    ├── angular/
    ├── html/
    ├── react/
    └── vue/
```

## Angular

| 文件                       | 说明                                                         |
| -------------------------- | ------------------------------------------------------------ |
| `angular.json`             | Angular 应用程序的主要配置文件。                           |
| `app.component.css`        | 应用组件的样式。                                           |
| `app.component.html`       | 应用组件的模板。                                           |
| `app.component.ts`         | 应用组件的类/入口点。                                      |
| `app.component.withContent.html` | 包含 `ion-content` 包装器的应用组件模板。         |
| `app.component.withContent.ts` | 包含 `ion-content` 包装器的应用组件类/入口点。     |
| `app.routes.ts`            | 应用程序路由配置。                                         |
| `example.component.ts`     | 用于演示的示例组件。                                       |
| `global.css`               | 全局样式。                                                 |
| `index.html`               | 主 HTML 模板。                                             |
| `main.ts`                  | 负责引导应用程序启动。                                     |
| `package.json`             | 项目依赖项。                                               |
| `package-lock.json`        | 锁定依赖版本。                                             |
| `styles.css`               | Ionic 默认样式。                                           |
| `tsconfig.app.json`        | 应用程序的 TypeScript 配置。                               |
| `tsconfig.json`            | TypeScript 配置。                                          |
| `variables.css`            | 主题相关的 CSS 变量。                                      |

## HTML

| 文件                     | 说明                                                               |
| ------------------------ | ------------------------------------------------------------------ |
| `index.html`             | 主模板文件，包含指向最新 `@ionic/core` 发布的 CDN 链接。         |
| `index.withContent.html` | 包含 `ion-content` 包装器的主模板。                           |
| `index.ts`               | 定义 Ionic 的 Stencil 水合包。                                    |
| `package.json`           | 项目依赖项。                                                     |
| `package-lock.json`      | 锁定依赖版本。                                                   |
| `tsconfig.json`          | TypeScript 配置。                                                |
| `variables.css`          | 主题相关的 CSS 变量。                                            |
| `vite.config.ts`         | Vite 配置文件。                                                  |

## React

| 文件                 | 说明                                                                 |
| -------------------- | -------------------------------------------------------------------- |
| `app.tsx`            | 导入所需的 Ionic 样式和 `setupIonicReact()` 函数以初始化 Web 组件。 |
| `app.withContent.tsx` | 包含 `ion-content` 包装器的应用组件。                         |
| `browserslistrc`     | 浏览器支持配置。                                                   |
| `eslintrc.js`        | ESLint 配置。                                                      |
| `index.html`         | 用于创建挂载 React 的元素的 HTML 模板。                            |
| `index.tsx`          | 渲染 React 应用程序的样板代码。                                      |
| `package.json`       | 项目依赖项。                                                       |
| `package-lock.json`  | 锁定依赖版本。                                                     |
| `tsconfig.json`      | TypeScript 配置。                                                  |
| `variables.css`      | 主题相关的 CSS 变量。                                              |
| `vite.config.js`     | Vite 配置文件。                                                    |

## Vue

| 文件                 | 说明                                                           |
| -------------------- | -------------------------------------------------------------- |
| `App.vue`            | 主 Vue 组件，将每个示例包装在 `ion-app` 中。                 |
| `App.withContent.vue` | 包含 `ion-content` 包装器的主 Vue 组件。               |
| `index.html`         | 用于创建挂载 Vue 的元素的 HTML 模板。                          |
| `main.ts`            | 初始化 Ionic Vue 并导入全局样式。                              |
| `package.json`       | 项目依赖项。                                                   |
| `package-lock.json`  | 锁定依赖版本。                                                 |
| `tsconfig.json`      | TypeScript 配置。                                              |
| `tsconfig.node.json` | Node 环境的 TypeScript 配置。                                |
| `variables.css`      | 主题相关的 CSS 变量。                                          |
| `vite.config.ts`     | Vite 配置文件。                                                |

## 点文件

点文件必须保存时去掉点，否则无法正确获取。但是，在创建 StackBlitz 项目时，可以使用点。

例如，如果你有一个 `.eslintrc.js` 文件，你需要将其保存为此仓库中的 `eslintrc.js`。在创建 StackBlitz 项目时，该文件的内容可以保存为 `.eslintrc.js`。