---
title: Angular 性能
sidebar_label: 性能
---

<head>
  <title>Angular 性能：使用 ngFor 管理应用组件变更</title>
  <meta
    name="description"
    content="了解 Angular 如何使用 ngFor 管理 Ionic 组件的变更传播。阅读有关 Ionic 应用中 Angular 性能的更多信息。"
  />
</head>

## \*ngFor 与 Ionic 组件

当将 `*ngFor` 与 Ionic 组件一起使用时，我们建议使用 Angular 的 `trackBy` 选项。这使 Angular 能够以更高效的方式管理变更传播，并且只更新组件内部的内容，而不是完全重新创建组件。

通过使用 `trackBy`，您可以为每个循环元素提供稳定的标识，以便 Angular 可以跟踪迭代器中的插入和删除。以下是如何使用 `trackBy` 的示例：

**home.page.html**

```html
<ion-item *ngFor="let item of items; trackBy:trackItems">
  <ion-label>{{ item.value }}</ion-label>
</ion-item>
```

**home.component.ts**

```tsx

items = [
  { id: 0, value: 'Item 0' },
  { id: 1, value: 'Item 1' },
  ...
]

trackItems(index: number, itemObject: any) {
  return itemObject.id;
}
```

在此示例中，我们有一个名为 `items` 的对象数组。每个对象包含一个 `value` 和一个 `id`。使用 `trackBy`，我们传递一个 `trackItems` 函数，该函数返回每个对象的 `id`。这个 `id` 用于为每个循环元素提供稳定的标识。

有关 Angular 如何使用 `ngFor` 管理变更传播的更多信息，请参阅 https://angular.io/api/common/NgForOf#change-propagation。

## 来自 Ionic 团队

[如何在 Ionic Angular 中实现懒加载](https://ionicframework.com/blog/how-to-lazy-load-in-ionic-angular/)

[使用骨架屏提升感知性能](https://ionicframework.com/blog/improved-perceived-performance-with-skeleton-screens/)

## 来自 Angular 团队

[构建高性能和渐进式 Angular 应用](https://web.dev/angular) - web.dev

## 来自社区

<!-- cspell:disable -->

[Ionic 中的高性能动画](https://www.joshmorony.com/high-performance-animations-in-ionic/) - Josh Morony

[Ionic 中的高性能列表过滤](https://www.joshmorony.com/high-performance-list-filtering-in-ionic-2/) - Josh Morony

[通过高效的 DOM 写入提升 Ionic 性能](https://www.joshmorony.com/increasing-performance-with-efficient-dom-writes-in-ionic-2/) - Josh Morony

[Ionic Framework 很快（但您的代码可能不是）](https://www.joshmorony.com/ionic-framework-is-fast-but-your-code-might-not-be/) - Josh Morony

<!-- cspell:enable -->

:::note
您有想分享的指南吗？点击下面的 _编辑此页面_ 按钮。
:::
