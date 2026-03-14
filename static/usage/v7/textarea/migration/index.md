import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```html
<!-- 标签与标签位置 -->

<!-- 之前 -->
<ion-item>
  <ion-label position="floating">标签：</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-textarea label="标签：" label-placement="floating"></ion-textarea>
</ion-item>


<!-- 填充模式 -->

<!-- 之前 -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">标签：</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- 之后 -->

<!-- 使用 `fill` 属性的 Textarea 不应放在 ion-item 中 -->
<ion-textarea fill="outline" shape="round" label="标签：" label-placement="floating"></ion-textarea>

<!-- ion-item 上的 Textarea 特有功能 -->

<!-- 之前 -->
<ion-item counter="true">
  <ion-label position="floating">标签：</ion-label>
  <ion-textarea maxlength="100"></ion-textarea>
  <div slot="helper">输入文本</div>
  <div slot="error">请输入文本</div>
</ion-item>

<!-- 之后 -->

<!--
  当 textarea 位于 item/list 中时，不应使用计数器、帮助文本等元数据。
  如需为 textarea 提供更多上下文，可考虑在 ion-list 下方使用 ion-note。
-->

<ion-textarea
  label="标签："
  counter="true"
  maxlength="100"
  helper-text="输入文本"
  error-text="请输入文本"
></ion-textarea>
```
</TabItem>
<TabItem value="angular">

```html
<!-- 标签与标签位置 -->

<!-- 之前 -->
<ion-item>
  <ion-label position="floating">标签：</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-textarea label="标签：" labelPlacement="floating"></ion-textarea>
</ion-item>


<!-- 填充模式 -->

<!-- 之前 -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">标签：</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- 之后 -->

<!-- 使用 `fill` 属性的 Textarea 不应放在 ion-item 中 -->
<ion-textarea fill="outline" shape="round" label="标签：" labelPlacement="floating"></ion-textarea>

<!-- ion-item 上的 Textarea 特有功能 -->

<!-- 之前 -->
<ion-item [counter]="true">
  <ion-label position="floating">标签：</ion-label>
  <ion-textarea maxlength="100"></ion-textarea>
  <div slot="helper">输入文本</div>
  <div slot="error">请输入文本</div>
</ion-item>

<!-- 之后 -->

<!--
  当 textarea 位于 item/list 中时，不应使用计数器、帮助文本等元数据。
  如需为 textarea 提供更多上下文，可考虑在 ion-list 下方使用 ion-note。
-->

<ion-textarea
  label="标签："
  [counter]="true"
  maxlength="100"
  helperText="输入文本"
  errorText="请输入文本"
></ion-textarea>
```
</TabItem>
<TabItem value="react">

```tsx
{/* 标签与标签位置 */}

{/* 之前 */}
<IonItem>
  <IonLabel position="floating">标签：</IonLabel>
  <IonTextarea></IonTextarea>
</IonItem>

{/* 之后 */}
<IonItem>
  <IonTextarea label="标签：" labelPlacement="floating"></IonTextarea>
</IonItem>


{/* 填充模式 */}

{/* 之前 */}
<IonItem fill="outline" shape="round">
  <IonLabel position="floating">标签：</IonLabel>
  <IonTextarea></IonTextarea>
</IonItem>

{/* 之后 */}

{/* 使用 `fill` 属性的 Textarea 不应放在 IonItem 中 */}
<IonTextarea fill="outline" shape="round" label="标签：" labelPlacement="floating"></IonTextarea>

{/* IonItem 上的 Textarea 特有功能 */}

{/* 之前 */}
<IonItem counter={true}>
  <IonLabel position="floating">标签：</IonLabel>
  <IonTextarea maxlength="100"></IonTextarea>
  <div slot="helper">输入文本</div>
  <div slot="error">请输入文本</div>
</IonItem>

{/* 之后 */}

{/*
  当 textarea 位于 item/list 中时，不应使用计数器、帮助文本等元数据。
  如需为 textarea 提供更多上下文，可考虑在 IonList 下方使用 IonNote。
*/}

<IonTextarea
  label="标签："
  counter={true}
  maxlength="100"
  helperText="输入文本"
  errorText="请输入文本"
></IonTextarea>
```
</TabItem>
<TabItem value="vue">

```html
<!-- 标签与标签位置 -->

<!-- 之前 -->
<ion-item>
  <ion-label position="floating">标签：</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-textarea label="标签：" label-placement="floating"></ion-textarea>
</ion-item>


<!-- 填充模式 -->

<!-- 之前 -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">标签：</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>

<!-- 之后 -->

<!-- 使用 `fill` 属性的 Textarea 不应放在 ion-item 中 -->
<ion-textarea fill="outline" shape="round" label="标签：" label-placement="floating"></ion-textarea>

<!-- ion-item 上的 Textarea 特有功能 -->

<!-- 之前 -->
<ion-item :counter="true">
  <ion-label position="floating">标签：</ion-label>
  <ion-textarea maxlength="100"></ion-textarea>
  <div slot="helper">输入文本</div>
  <div slot="error">请输入文本</div>
</ion-item>

<!-- 之后 -->

<!--
  当 textarea 位于 item/list 中时，不应使用计数器、帮助文本等元数据。
  如需为 textarea 提供更多上下文，可考虑在 ion-list 下方使用 ion-note。
-->

<ion-textarea
  label="标签："
  :counter="true"
  maxlength="100"
  helper-text="输入文本"
  error-text="请输入文本"
></ion-textarea>
```
</TabItem>
</Tabs>
````