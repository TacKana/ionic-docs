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
<!-- 标签 (Label) 及其位置 (Label Position) -->

<!-- 之前 -->
<ion-item>
  <ion-label position="floating">邮箱:</ion-label>
  <ion-input></ion-input>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-input label="邮箱:" label-placement="floating"></ion-input>
</ion-item>


<!-- 填充样式 (Fill) -->

<!-- 之前 -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">邮箱:</ion-label>
  <ion-input></ion-input>
</ion-item>

<!-- 之后 -->

<!-- 使用 `fill` 属性的输入框不应放置在 ion-item 中 -->
<ion-input fill="outline" shape="round" label="邮箱:" label-placement="floating"></ion-input>

<!-- ion-item 上特定于输入框的功能 -->

<!-- 之前 -->
<ion-item counter="true">
  <ion-label position="floating">邮箱:</ion-label>
  <ion-input maxlength="100"></ion-input>
  <div slot="helper">请输入邮箱</div>
  <div slot="error">请输入有效的邮箱地址</div>
</ion-item>

<!-- 之后 -->

<!--
  当输入框位于 item/list 中时，不应使用计数器 (counter) 和帮助文本 (helper text) 等元数据。
  如果你需要为输入框提供更多上下文，请考虑在 ion-list 下方使用 ion-note。
-->

<ion-input
  label="邮箱:"
  counter="true"
  maxlength="100"
  helper-text="请输入邮箱"
  error-text="请输入有效的邮箱地址"
></ion-input>
```
</TabItem>
<TabItem value="angular">

```html
<!-- 标签 (Label) 及其位置 (Label Position) -->

<!-- 之前 -->
<ion-item>
  <ion-label position="floating">邮箱:</ion-label>
  <ion-input></ion-input>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-input label="邮箱:" labelPlacement="floating"></ion-input>
</ion-item>


<!-- 填充样式 (Fill) -->

<!-- 之前 -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">邮箱:</ion-label>
  <ion-input></ion-input>
</ion-item>

<!-- 之后 -->

<!-- 使用 `fill` 属性的输入框不应放置在 ion-item 中 -->
<ion-input fill="outline" shape="round" label="邮箱:" labelPlacement="floating"></ion-input>

<!-- ion-item 上特定于输入框的功能 -->

<!-- 之前 -->
<ion-item [counter]="true">
  <ion-label position="floating">邮箱:</ion-label>
  <ion-input maxlength="100"></ion-input>
  <div slot="helper">请输入邮箱</div>
  <div slot="error">请输入有效的邮箱地址</div>
</ion-item>

<!-- 之后 -->

<!--
  当输入框位于 item/list 中时，不应使用计数器 (counter) 和帮助文本 (helper text) 等元数据。
  如果你需要为输入框提供更多上下文，请考虑在 ion-list 下方使用 ion-note。
-->

<ion-input
  label="邮箱:"
  [counter]="true"
  maxlength="100"
  helperText="请输入邮箱"
  errorText="请输入有效的邮箱地址"
></ion-input>
```
</TabItem>
<TabItem value="react">

```tsx
{/* 标签 (Label) 及其位置 (Label Position) */}

{/* 之前 */}
<IonItem>
  <IonLabel position="floating">邮箱:</IonLabel>
  <IonInput></IonInput>
</IonItem>

{/* 之后 */}
<IonItem>
  <IonInput label="邮箱:" labelPlacement="floating"></IonInput>
</IonItem>


{/* 填充样式 (Fill) */}

{/* 之前 */}
<IonItem fill="outline" shape="round">
  <IonLabel position="floating">邮箱:</IonLabel>
  <IonInput></IonInput>
</IonItem>

{/* 之后 */}

{/* 使用 `fill` 属性的输入框不应放置在 IonItem 中 */}
<IonInput fill="outline" shape="round" label="邮箱:" labelPlacement="floating"></IonInput>

{/* IonItem 上特定于输入框的功能 */}

{/* 之前 */}
<IonItem counter={true}>
  <IonLabel position="floating">邮箱:</IonLabel>
  <IonInput maxlength="100"></IonInput>
  <div slot="helper">请输入邮箱</div>
  <div slot="error">请输入有效的邮箱地址</div>
</IonItem>

{/* 之后 */}

{/*
  当输入框位于 item/list 中时，不应使用计数器 (counter) 和帮助文本 (helper text) 等元数据。
  如果你需要为输入框提供更多上下文，请考虑在 IonList 下方使用 IonNote。
*/}

<IonInput
  label="邮箱:"
  counter={true}
  maxlength="100}
  helperText="请输入邮箱"
  errorText="请输入有效的邮箱地址"
></IonInput>
```
</TabItem>
<TabItem value="vue">

```html
<!-- 标签 (Label) 及其位置 (Label Position) -->

<!-- 之前 -->
<ion-item>
  <ion-label position="floating">邮箱:</ion-label>
  <ion-input></ion-input>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-input label="邮箱:" label-placement="floating"></ion-input>
</ion-item>


<!-- 填充样式 (Fill) -->

<!-- 之前 -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">邮箱:</ion-label>
  <ion-input></ion-input>
</ion-item>

<!-- 之后 -->

<!-- 使用 `fill` 属性的输入框不应放置在 ion-item 中 -->
<ion-input fill="outline" shape="round" label="邮箱:" label-placement="floating"></ion-input>

<!-- ion-item 上特定于输入框的功能 -->

<!-- 之前 -->
<ion-item :counter="true">
  <ion-label position="floating">邮箱:</ion-label>
  <ion-input maxlength="100"></ion-input>
  <div slot="helper">请输入邮箱</div>
  <div slot="error">请输入有效的邮箱地址</div>
</ion-item>

<!-- 之后 -->

<!--
  当输入框位于 item/list 中时，不应使用计数器 (counter) 和帮助文本 (helper text) 等元数据。
  如果你需要为输入框提供更多上下文，请考虑在 ion-list 下方使用 ion-note。
-->

<ion-input
  label="邮箱:"
  :counter="true"
  maxlength="100"
  helper-text="请输入邮箱"
  error-text="请输入有效的邮箱地址"
></ion-input>
```
</TabItem>
</Tabs>
````