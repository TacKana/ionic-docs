---
disableHtmlPreviews: true
---

# 跨平台开发

Ionic 从底层设计之初就致力于简化开发流程，无论你为哪个平台构建应用。Ionic 应用是真正的跨平台应用：只需一套代码库，就能以 Android、iOS、Electron 和渐进式 Web 应用（PWA）的形式运行。在优化应用以适应不同平台时，需要注意以下几点。

## 硬件 API

在原生应用中，通常需要通过 API 调用与设备交互，例如调用摄像头或获取地理位置。在 Web 环境中，由于缺少原生桥接，这些 API 调用将无法正常工作。Ionic 提供了几种方式来处理这种情况。

### Ionic Native

[Ionic Native](../native.md) 内置了检测当前环境是否为原生环境的逻辑。如果检测到非原生环境且没有可用的 Cordova 插件，它不会抛出运行时错误，而是输出警告信息。应用不会因此崩溃，仍能继续运行，只是无法使用原生功能。

### 平台检测

在应用逻辑中，当需要进行原生 API 调用时，建议始终先检查原生环境的状态。例如：

```tsx
this.platform.ready().then(() => {
  // 'hybrid' 能同时检测 Cordova 和 Capacitor
  if (this.platform.is('hybrid')) {
    // 执行原生 API 调用
  } else {
    // 回退使用浏览器 API
  }
});
```

当目标环境对原生 API 的访问状态不确定时，这段代码会非常有帮助。

### 浏览器回退方案

许多原生 API（例如文件 API）在浏览器中不可用。随着 Web API 的不断改进并逐渐接近原生功能，建议对此进行研究。结合前两点考虑，可以轻松创建出能根据运行平台自适应调整的优秀用户体验。

## 桌面端

当计划将应用部署到桌面端时，无论是使用 <a href="https://electronjs.org" target="_blank">Electron</a> 还是作为**渐进式 Web 应用**，确保应用在较大尺寸设备上流畅运行至关重要。

### 布局设计

很多人很少注意到应用的布局，但它对用户体验和可用性有着巨大影响。考虑以下常见的 UI 模式：

```html
<ion-content>
  <ion-item>
    <ion-label>Item 1</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Item 2</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Item 3</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Item 4</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Item 5</ion-label>
  </ion-item>
</ion-content>
```

这将渲染 5 个宽度各为 100% 的项目。在移动设备上看起来可能很棒（如下图所示），但在桌面浏览器上查看时情况就不同了。由于屏幕宽度较大，项目会被拉伸以填满整个屏幕，导致屏幕空间未被充分利用。

<img src={require('@site/static/img/building/cross-platform-items.png').default} />

为了改善这种体验，我们可以将项目包裹在 [Grid](../api/grid.md) 组件中。可以轻松将视图重写为更适合大屏幕的布局：

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <ion-item>
        <ion-label>Item 1</ion-label>
      </ion-item>
    </ion-col>
    <ion-col>
      <ion-item>
        <ion-label>Item 2</ion-label>
      </ion-item>
    </ion-col>
    <ion-col>
      <ion-item>
        <ion-label>Item 3</ion-label>
      </ion-item>
    </ion-col>
    <ion-col>
      <ion-item>
        <ion-label>Item 4</ion-label>
      </ion-item>
    </ion-col>
    <ion-col>
      <ion-item>
        <ion-label>Item 5</ion-label>
      </ion-item>
    </ion-col>
  </ion-row>
</ion-grid>
```

通过将项目包裹在 `ion-grid` 元素中，Ionic 的网格系统就被添加到我们的布局中。将每个项目包裹在列中，可以使项目在网格内同一行中占据等宽的宽度。

<img src={require('@site/static/img/building/cross-platform-grid.png').default} />

我们还可以通过给 `<ion-grid>` 元素添加 `fixed` 属性来进一步优化。这会使网格根据屏幕尺寸获得固定的宽度。对于大屏幕来说，这非常完美，因为如果没有网格宽度限制，项目会再次被拉伸。

<img src={require('@site/static/img/building/cross-platform-grid-fixed.png').default} />

通过添加 `ion-col` 属性，可以进一步自定义网格以改变列的大小。

```html
<ion-grid fixed>
  <ion-row>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>Item 1</ion-label>
      </ion-item>
    </ion-col>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>Item 2</ion-label>
      </ion-item>
    </ion-col>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>Item 3</ion-label>
      </ion-item>
    </ion-col>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>Item 4</ion-label>
      </ion-item>
    </ion-col>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>Item 5</ion-label>
      </ion-item>
    </ion-col>
  </ion-row>
</ion-grid>
```

上面的例子中有很多细节。以下是关键点：

- `ion-col` 的宽度来自其 `size` 属性，该属性的值表示该列在总可用列数中所占的列数。默认总列数为 12。

- `size` 属性可以添加断点后缀，格式为 `size-{breakpoint}`。该值为指定断点及以上屏幕尺寸设置列的大小。

有关网格自定义的更多信息，请参阅 [Grid](../api/grid.md) 文档。

## 数据存储

大多数应用在某个阶段都需要在本地存储某种数据。无论是存储来自 XHR 请求的 JSON 数据，还是保存身份验证令牌，都有许多不同的存储方案可选。此外，如果应用在原生环境中运行，还可以创建完整的 SQLite 数据库并将数据存储其中。所有这些不同的存储机制各有优缺点，但 Ionic 开发者不必为此烦恼。

### Ionic 存储

在这种情况下，<a href="https://github.com/ionic-team/ionic-storage" target="_blank">Ionic 的存储库</a> 是应对多环境使用场景的完美选择。基于经过充分测试的 LocalForage 库构建，Ionic 的存储类提供了一种自适应的存储机制，能够为当前运行时选择最佳的存储解决方案。

目前这意味着它将依次尝试：原生环境使用 SQLite，可用时使用 IndexedDB，或使用 WebSql，或使用 Local Storage。通过处理所有这些细节，它允许开发者使用稳定的 API 进行存储操作。

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

还有其他存储解决方案，例如 PouchDB，也提供了类似的自适应存储机制。