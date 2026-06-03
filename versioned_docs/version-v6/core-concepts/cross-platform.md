---
title: 跨平台
---

# 跨平台

Ionic 从设计之初就致力于让开发变得简单，无论你为哪个平台构建应用。Ionic 应用是真正的跨平台应用：能够从单一代码库作为 Android、iOS、Electron 和渐进式 Web 应用（PWA）运行。在优化应用以在这些平台上运行时，有一些需要注意的要点。

## 硬件 API

在原生应用中，通常会调用 API 与设备通信，例如打开相机或访问地理位置。这些 API 调用在 Web 环境中无法工作，因为没有原生桥接。Ionic 有几种方式处理这个问题。

### Ionic Native

[Ionic Native](../native.md) 有其自己的内部逻辑来检测是否在原生环境中。它不会抛出运行时错误，而是在非原生环境且没有可用的 Cordova 插件时打印警告。应用不会崩溃，并将继续运行，尽管没有原生功能。

### 平台检测

在应用的逻辑中，每当需要调用原生 API 时，建议始终先检查原生环境的状态。例如：

```tsx
this.platform.ready().then(() => {
  // 'hybrid' 检测 Cordova 和 Capacitor
  if (this.platform.is('hybrid')) {
    // 调用你的原生 API
  } else {
    // 回退到浏览器 API
  }
});
```

这段代码在目标环境不确定能否访问原生 API 时会非常有用。

### 浏览器回退

人们使用的许多原生 API（例如 File API）在浏览器中不可用。这些 API 一直在改进并追赶原生能力，因此建议对它们进行研究。综合考虑前两点，可以很容易地创建一个能够适配应用运行平台的良好体验。

## 桌面端

当计划将应用部署到桌面端时，无论是使用 <a href="https://electronjs.org" target="_blank">Electron</a> 还是作为<strong>渐进式 Web 应用</strong>，确保应用在较大设备上流畅运行非常重要。

### 布局

很多人很少注意到应用的布局，但它对体验和可用性有着巨大影响。考虑这个常见的 UI 模式：

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

这将渲染 5 个项目，每个宽度为 100%。这在移动设备上看起来可能很好，如下所示，但在桌面浏览器上查看则完全是另一回事。由于宽屏幕宽度，项目会被拉伸填充整个屏幕，留下未使用的屏幕空间。

<img src={require('@site/static/img/building/cross-platform-items.png').default} />

要改善这种体验，我们可以将项目包裹在 [Grid](../api/grid.md) 组件中。视图可以轻松重写为在较大屏幕上更易用的形式：

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

通过将项目包裹在 `ion-grid` 元素中，我们将 Ionic 网格系统添加到了布局中。将每个项目包裹在列中使得项目在网格内沿同一行占据相等的宽度。

<img src={require('@site/static/img/building/cross-platform-grid.png').default} />

我们还可以更进一步，将 `fixed` 属性添加到 `<ion-grid>` 元素。这告诉网格根据屏幕大小具有固定宽度。这对于较大的屏幕非常完美，因为如果没有为网格设置宽度，项目将再次开始拉伸。

<img src={require('@site/static/img/building/cross-platform-grid-fixed.png').default} />

通过添加 `ion-col` 属性，可以进一步自定义网格来更改列的大小。

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

上面的示例做了很多事情。关键点如下：

- `ion-col` 的宽度来自于添加到其上的 `size` 属性，其中 size 的值是在总可用列中占用的列数。默认的可用列数是 12。

- `size` 属性可以添加断点，格式为 `size-{breakpoint}`。这个值会为指定的断点及以上设置大小。

有关使用网格进行自定义的更多信息，请参阅 [Grid](../api/grid.md) 文档。

## 存储

大多数应用在某个时候需要本地存储某种数据。无论是存储来自 XHR 请求的 JSON 数据，还是保存认证令牌，都有许多不同的存储选项可用。除此之外，如果应用在原生环境中运行，还可以创建完整的 SQLite 数据库并在其中存储数据。所有这些不同的存储机制都有各自的优缺点，但 Ionic 开发者不必担心这些。

### Ionic Storage

在这种情况下，<a href="https://github.com/ionic-team/ionic-storage" target="_blank">Ionic 的 Storage 库</a>是多环境使用场景的完美选择。Ionic 的 storage 类建立在经过充分测试的 LocalForage 库之上，提供一种可适配的存储机制，会为当前运行时选择最佳的存储解决方案。

目前，这意味着它将依次使用 SQLite（原生环境）、IndexedDB（如果可用）、WebSql 或 Local Storage。通过处理所有这些，可以使用稳定的 API 进行存储写入。

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

还有其他存储解决方案可用，如 PouchDB，它们提供类似的可适配存储机制。
