---
title: 跨平台开发
---

# 跨平台开发

Ionic 从设计之初就致力于简化开发流程，无论您为哪个平台构建应用。Ionic 应用是真正意义上的跨平台应用：只需一套代码库，就能运行在 Android、iOS、Electron 以及渐进式 Web 应用（PWA）等平台上。在优化应用以适应这些平台时，需要注意以下几点。

## 硬件 API

在原生应用中，通常会调用 API 与设备进行交互，例如打开摄像头或获取地理位置。在 Web 环境中，这些 API 调用将无法正常工作，因为缺乏原生桥接。Ionic 提供了几种方式来处理这种情况。

### Ionic Native

[Ionic Native](../native.md) 内置了检测机制，能够判断当前是否处于原生环境中。如果处于非原生环境且没有可用的 Cordova 插件，它将输出警告而非抛出运行时错误。应用不会因此崩溃，而是会继续运行，只是缺少原生功能。

### 平台检测

在应用逻辑中，当需要调用原生 API 时，建议始终先检查原生环境状态。例如：

```tsx
this.platform.ready().then(() => {
  // 'hybrid' 可同时检测 Cordova 和 Capacitor
  if (this.platform.is('hybrid')) {
    // 调用原生 API
  } else {
    // 回退到浏览器 API
  }
});
```

当目标环境的原生 API 访问状态不确定时，这段代码会非常有用。

### 浏览器回退方案

许多原生 API（例如文件 API）在浏览器中不可用。随着浏览器 API 的不断改进和向原生功能靠拢，建议及时了解最新进展。结合前两点考虑，很容易就能创建出能自适应运行平台的优质体验。

## 桌面端适配

当计划将应用部署到桌面端时（无论是通过 <a href="https://electronjs.org" target="_blank">Electron</a> 还是作为**渐进式 Web 应用**），确保应用在较大尺寸设备上流畅运行非常重要。

### 布局设计

虽然很多人很少注意到应用的布局，但它对用户体验和可用性有着巨大影响。考虑以下常见的 UI 模式：

```html
<ion-content>
  <ion-item>
    <ion-label>项目 1</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>项目 2</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>项目 3</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>项目 4</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>项目 5</ion-label>
  </ion-item>
</ion-content>
```

这将渲染 5 个项目，每个宽度为 100%。在移动设备上可能看起来不错，如下所示，但在桌面浏览器中查看时情况就不同了。由于屏幕宽度较宽，项目会拉伸以填满整个屏幕，导致屏幕空间未被充分利用。

<img src={require('@site/static/img/building/cross-platform-items.png').default} />

为了改善这种体验，我们可以将项目包装在[网格](../layout/grid.md)组件中。视图可以轻松重写为更适合大屏幕的形式：

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <ion-item>
        <ion-label>项目 1</ion-label>
      </ion-item>
    </ion-col>
    <ion-col>
      <ion-item>
        <ion-label>项目 2</ion-label>
      </ion-item>
    </ion-col>
    <ion-col>
      <ion-item>
        <ion-label>项目 3</ion-label>
      </ion-item>
    </ion-col>
    <ion-col>
      <ion-item>
        <ion-label>项目 4</ion-label>
      </ion-item>
    </ion-col>
    <ion-col>
      <ion-item>
        <ion-label>项目 5</ion-label>
      </ion-item>
    </ion-col>
  </ion-row>
</ion-grid>
```

通过将项目包装在 `ion-grid` 元素中，Ionic 网格系统就被添加到了布局中。将每个项目包装在列中，可以使项目在网格内同一行上占据等宽空间。

<img src={require('@site/static/img/building/cross-platform-grid.png').default} />

我们还可以通过向 `<ion-grid>` 元素添加 `fixed` 属性来进一步优化。这会告诉网格根据屏幕尺寸设置固定宽度。对于大屏幕来说，这非常理想，因为如果没有网格宽度限制，项目会再次拉伸。

<img src={require('@site/static/img/building/cross-platform-grid-fixed.png').default} />

通过添加 `ion-col` 属性，可以进一步自定义网格以更改列的大小。

```html
<ion-grid fixed>
  <ion-row>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>项目 1</ion-label>
      </ion-item>
    </ion-col>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>项目 2</ion-label>
      </ion-item>
    </ion-col>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>项目 3</ion-label>
      </ion-item>
    </ion-col>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>项目 4</ion-label>
      </ion-item>
    </ion-col>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>项目 5</ion-label>
      </ion-item>
    </ion-col>
  </ion-row>
</ion-grid>
```

上面的示例涉及很多内容。以下是关键点：

- `ion-col` 的宽度来自其 `size` 属性，该属性的值表示在总可用列数中占据的列数。默认可用列数为 12。

- `size` 属性可以添加断点，格式为 `size-{breakpoint}`。该值为指定断点及以上设置尺寸。

有关网格自定义的更多信息，请参阅[网格](../layout/grid.md)文档。

## 数据存储

大多数应用在某个阶段都需要本地存储某种数据。无论是存储来自 XHR 请求的 JSON 数据，还是保存身份验证令牌，都有许多不同的存储方案可供选择。此外，如果应用在原生环境中运行，还可以创建完整的 SQLite 数据库并在其中存储数据。所有这些不同的存储机制都有各自的优缺点，但 Ionic 开发者无需为此担忧。

### Ionic 存储方案

在这种情况下，<a href="https://github.com/ionic-team/ionic-storage" target="_blank">Ionic 的存储库</a>是多环境用例的完美选择。它基于经过充分测试的 LocalForage 库构建，Ionic 的 Storage 类提供了自适应的存储机制，能够为当前运行时选择最佳的存储方案。

目前，这意味着它将依次尝试 SQLite（针对原生环境）、IndexedDB（如果可用）、WebSql 或 Local Storage。通过处理所有这些细节，它允许使用稳定的 API 进行存储操作。

```tsx
class MyClass {
  constructor(public storage: Storage) {}

  async setData(key, value) {
    const res = await this.storage.set(key, value);
    console.log(res);
  }

  async getData(key) {
    const keyVal = await this.storage.get(key);
    console.log('Key is', keyVal);
  }
}
```

还有其他存储解决方案，例如 PouchDB，它们也提供了类似的自适应存储机制。