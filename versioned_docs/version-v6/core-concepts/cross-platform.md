---
title: 跨平台开发
---

# 跨平台开发

Ionic 从底层设计就致力于简化开发流程，无论您要为哪个平台构建应用。Ionic 应用是真正的跨平台应用：只需一套代码库，就能运行于 Android、iOS、Electron 和渐进式 Web 应用（PWA）等环境。在优化应用以适应不同平台时，有几个要点需要注意。

## 硬件 API

在原生应用中，调用 API 与设备通信是很常见的操作，例如打开摄像头或获取地理位置信息。但在网页环境中，由于没有原生桥接机制，这些 API 调用将无法正常工作。Ionic 提供了以下几种处理方式。

### Ionic Native

[Ionic Native](../native.md) 内置了检测是否处于原生环境的逻辑。如果当前不是原生环境且没有可用的 Cordova 插件，它会输出警告而不是抛出运行时错误。应用不会崩溃，只是缺少原生功能，仍可继续运行。

### 平台检测

在应用逻辑中，每当需要调用原生 API 时，建议先检查当前的原生环境状态。例如：

```tsx
this.platform.ready().then(() => {
  // 'hybrid' 可同时检测 Cordova 和 Capacitor
  if (this.platform.is('hybrid')) {
    // 执行原生 API 调用
  } else {
    // 回退到浏览器 API
  }
});
```

当应用运行环境对原生 API 的访问不确定时，这段代码会非常有用。

### 浏览器回退方案

许多常用的原生 API（例如文件 API）在浏览器中不可用。虽然这些 API 在不断改进并逐渐向原生功能靠拢，但还是建议您深入了解它们。结合前两点考虑，我们可以轻松创建出能自适应运行平台的优质用户体验。

## 桌面端应用

当计划将应用部署到桌面端时，无论是使用 <a href="https://electronjs.org" target="_blank">Electron</a> 还是作为**渐进式 Web 应用**，确保应用在大屏幕设备上流畅运行都至关重要。

### 布局设计

很多人很少注意到应用的布局，但它对用户体验和可用性有着重要影响。考虑下面这个常见的 UI 模式：

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

这将渲染 5 个宽度各为 100% 的项目。在移动设备上看起来可能不错，如下图所示，但在桌面浏览器中查看就完全不同了。由于屏幕宽度较大，项目会被拉伸以填满整个屏幕，导致屏幕空间利用不足。

<img src={require('@site/static/img/building/cross-platform-items.png').default} />

为了改善这种体验，我们可以将项目包裹在 [Grid](../api/grid.md) 组件中。原来的视图可以轻松重写为更适合大屏幕使用的布局：

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

通过将项目包裹在 `ion-grid` 元素中，我们为布局添加了 Ionic 网格系统。将每个项目包裹在列中，可以让这些项目在网格内的同一行中占据等宽的空间。

<img src={require('@site/static/img/building/cross-platform-grid.png').default} />

我们还可以在 `<ion-grid>` 元素上添加 `fixed` 属性来进一步优化。这会根据屏幕尺寸设置网格的固定宽度。对于大屏幕来说，如果没有网格宽度限制，项目会再次拉伸，因此这个属性非常适合大屏幕场景。

<img src={require('@site/static/img/building/cross-platform-grid-fixed.png').default} />

通过添加 `ion-col` 属性，可以进一步定制网格来改变列的大小。

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

上面的例子包含了很多信息，以下是关键点：

- `ion-col` 的宽度来自于添加的 `size` 属性，其值表示该列占总可用列数的比例。默认的可用列数为 12。

- `size` 属性可以添加断点后缀：`size-{breakpoint}`。这个值为指定断点及以上的屏幕尺寸设置列宽。

有关网格定制的更多信息，请参阅 [Grid](../api/grid.md) 文档。

## 数据存储

大多数应用在某个阶段都需要在本地存储某种数据。无论是存储来自 XHR 请求的 JSON 数据，还是保存身份验证令牌，都有许多不同的存储方案可供选择。此外，如果应用在原生环境中运行，还可以创建完整的 SQLite 数据库来存储数据。所有这些不同的存储机制各有优缺点，但 Ionic 开发者不必为此担心。

### Ionic Storage

在这种情况下，<a href="https://github.com/ionic-team/ionic-storage" target="_blank">Ionic 的 Storage 库</a>是多环境用例的理想选择。它基于经过充分测试的 LocalForage 库构建，Ionic 的存储类提供了一个自适应的存储机制，能够为当前运行时选择最佳的存储解决方案。

目前这意味着它会在原生环境中使用 SQLite，在网页环境中使用 IndexedDB（如果可用）、WebSQL 或 Local Storage。通过处理所有这些细节，它允许开发者使用稳定的 API 进行数据存储。

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