# 交互式演示

Playground 组件能够以交互演示的形式预览组件体验，并为每个支持的框架提供代码片段。

Playground 可以根据每个示例进行定制，以满足您想要展示的组件或体验需求。

## 在设备框架内展示示例（iPhone/Pixel 5）

默认情况下，Playground 示例会在一个空容器中渲染并填满可用空间。使用 `devicePreview` 标志后，Playground 将在 iOS 模式下将演示体验渲染在 iPhone 设备框架内，在 MD 模式下渲染在 Pixel 设备框架内。

```tsx
<Playground devicePreview />
```

## 多文件示例

Playground 支持单文件和多文件示例，展示创建示例所需的代码。要为单个框架目标包含多文件示例，请使用 `files` 选项指定文件位置（在 StackBlitz 生成的项目中）和文件内容。

您可以在单个示例中混合使用多文件和单文件示例：

```tsx
import angular_example_component_html from './angular/example_component_html.md';
import angular_example_component_ts from './angular/example_component_ts.md';

import react_main_tsx from './react/main_tsx.md';
import react_main_css from './react/main_css.md';

import vue from './vue.md';
import javascript from './javascript.md';

<Playground
  files={{
    angular: {
      'src/app/example.component.html': angular_example_component_html,
      'src/app/example.component.ts': angular_example_component_ts,
    },
    react: {
      files: {
        'src/main.tsx': react_main_tsx,
        'src/main.css': react_main_css,
      },
    },
    javascript,
    vue,
  }}
/>;
```

文件位置相对于 StackBlitz 演示项目。如果不确定确切路径，请参考每个对应目标的 `stackblitz.utils.ts` 方法。`sdk.openProject` 中指定的路径将与 `files` 配置中使用的值一致。

## 创建新的 Playground

您可以通过运行 `npm run playground:new` 来[生成新的 Playground](../../../../_templates/README.md#new-playground-template)。

## 从 IonApp/IonContent 样板代码中分离

默认情况下，当在 StackBlitz 中打开时，Playground 示例会自动为每个组件示例包含以下模板包装器。

```html
<ion-app>
  <ion-content class="ion-padding">
    <!-- 演示代码在此处注入 -->
  </ion-content>
</ion-app>
```

注意：上述代码仅为示例。根据每个框架目标，代码会略有不同。

要退出此行为，请设置 `includeIonContent={false}` 以禁用此包装器。您将需要手动在代码片段中包含 `ion-content`。

```tsx
<Playground includeIonContent={false} />
```