---
title: 跨平台开发
---

# 跨平台开发

Ionic 从底层构建时就考虑了开发便捷性，无论你为哪个平台构建应用。Ionic 应用是真正跨平台的：能够作为 Android、iOS、Electron 和渐进式 Web 应用（PWA）运行，所有这些都来自同一个代码库。在优化应用以在这些平台上工作时，有几个要点需要注意。

## 硬件 API

在原生应用中，通常需要调用 API 与设备通信，例如打开摄像头或访问地理位置。这些 API 调用在 Web 环境中无法工作，因为没有原生桥接。Ionic 有几种方式来处理这个问题。

### Ionic Native

[Ionic Native](../native.md) 有自己的内部逻辑来检测是否处于原生环境中。如果不是原生环境且没有可用的 Cordova 插件，它不会抛出运行时错误，而是会打印警告。应用不会崩溃，会继续工作，只是缺少原生功能。

### 平台检测

在应用逻辑中，每当需要进行原生 API 调用时，建议始终先检查原生环境的状态。例如：

```tsx
this.platform.ready().then(() => {
  // 'hybrid' 可以检测 Cordova 和 Capacitor
  if (this.platform.is('hybrid')) {
    // 执行原生 API 调用
  } else {
    // 回退到浏览器 API
  }
});
```

当目标环境对原生 API 的访问不确定时，这段代码会非常有帮助。

### 浏览器回退方案

许多人们使用的原生 API（例如文件 API）在浏览器中不可用。这些 API 正在不断改进并逐渐赶上原生功能，因此建议研究它们。考虑到前两点，创建能够适应应用运行平台的优秀体验是相当容易的。

## 响应式 UI

当计划部署可能在不同设备上使用的应用时，确保应用在大屏幕尺寸上流畅运行非常重要。

### 布局

许多人很少注意到应用的布局，但它对体验和可用性有着重大影响。考虑这个常见的 UI 模式：

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

这将渲染 5 个项目，每个宽度为 100%。这在手机上可能看起来很好，但在大屏幕上查看就是另一回事了。由于屏幕宽度较大，项目会拉伸以填满整个屏幕，导致屏幕空间未被充分利用。

<img src={require('@site/static/img/building/cross-platform-items.png').default} />

为改善这种体验，我们可以将项目包装在 [Grid](../api/grid.md) 组件中。视图可以轻松重写为在大屏幕上更易用的形式：

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

通过将项目包装在 `ion-grid` 元素中，Ionic 网格系统就添加到我们的布局中。将每个项目包装在列中，使项目在网格内同一行上占据相等的宽度。

<img src={require('@site/static/img/building/cross-platform-grid.png').default} />

我们可以通过向 `<ion-grid>` 元素添加 `fixed` 属性来进一步优化。这会告诉网格根据屏幕尺寸设置固定宽度。这对于大屏幕非常完美，因为如果没有网格宽度，项目会再次开始拉伸。

<img src={require('@site/static/img/building/cross-platform-grid-fixed.png').default} />

网格可以通过添加 `ion-col` 属性来进一步定制，以更改列的大小。

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

上面的例子中有很多内容。以下是关键点：

- `ion-col` 的宽度来自添加到它的 `size` 属性，其中 size 的值是占用的列数占可用总列数的比例。默认可用列数为 12。

- `size` 属性可以添加断点，`size-{breakpoint}`。这个值为指定的断点及以上设置大小。

有关使用网格进行定制的更多信息，请参阅 [Grid](../api/grid.md) 文档。

## 存储

大多数应用在某个时间点都需要在本地存储某种数据。无论是存储来自 XHR 请求的 JSON，还是保存认证令牌，都有许多不同的存储选项可用。除此之外，如果应用在原生环境中运行，还可以创建完整的 SQLite 数据库并在其中存储数据。所有这些不同的存储机制都有各自的优缺点，但 Ionic 开发者不必为此担心。

### Ionic Storage

在这种情况下，<a href="https://github.com/ionic-team/ionic-storage" target="_blank">Ionic 的 Storage 库</a> 是多环境使用场景的完美选择。基于经过充分测试的 LocalForage 库构建，Ionic 的存储类提供了一个适应性强的存储机制，将为当前运行时选择最佳的存储解决方案。

目前这意味着它将通过 SQLite（原生）、IndexedDB（如果可用）、WebSql 或 Local Storage 运行。通过处理所有这些，它允许使用稳定的 API 进行存储写入。

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

还有其他存储解决方案，例如 PouchDB，它们提供了类似的、适应性强的存储机制。