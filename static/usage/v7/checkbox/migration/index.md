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
<!-- 基础用法 -->

<!-- 之前 -->
<ion-item>
  <ion-label>复选框标签</ion-label>
  <ion-checkbox></ion-checkbox>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-checkbox>复选框标签</ion-checkbox>
</ion-item>

<!-- 固定标签 -->

<!-- 之前 -->
<ion-item>
  <ion-label position="fixed">复选框标签</ion-label>
  <ion-checkbox></ion-checkbox>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-checkbox label-placement="fixed">复选框标签</ion-checkbox>
</ion-item>

<!-- 复选框在行首，标签在行尾 -->

<!-- 之前 -->
<ion-item>
  <ion-label slot="end">复选框标签</ion-label>
  <ion-checkbox></ion-checkbox>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-checkbox label-placement="end">复选框标签</ion-checkbox>
</ion-item>
```
</TabItem>
<TabItem value="angular">

```html
<!-- 基础用法 -->

<!-- 之前 -->
<ion-item>
  <ion-label>复选框标签</ion-label>
  <ion-checkbox></ion-checkbox>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-checkbox>复选框标签</ion-checkbox>
</ion-item>

<!-- 固定标签 -->

<!-- 之前 -->
<ion-item>
  <ion-label position="fixed">复选框标签</ion-label>
  <ion-checkbox></ion-checkbox>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-checkbox labelPlacement="fixed">复选框标签</ion-checkbox>
</ion-item>

<!-- 复选框在行首，标签在行尾 -->

<!-- 之前 -->
<ion-item>
  <ion-label slot="end">复选框标签</ion-label>
  <ion-checkbox></ion-checkbox>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-checkbox labelPlacement="end">复选框标签</ion-checkbox>
</ion-item>
```
</TabItem>
<TabItem value="react">

```tsx
{/* 基础用法 */}

{/* 之前 */}
<IonItem>
  <IonLabel>复选框标签</IonLabel>
  <IonCheckbox></IonCheckbox>
</IonItem>

{/* 之后 */}
<IonItem>
  <IonCheckbox>复选框标签</IonCheckbox>
</IonItem>

{/* 固定标签 */}

{/* 之前 */}
<IonItem>
  <IonLabel position="fixed">复选框标签</IonLabel>
  <IonCheckbox></IonCheckbox>
</IonItem>

{/* 之后 */}
<IonItem>
  <IonCheckbox labelPlacement="fixed">复选框标签</IonCheckbox>
</IonItem>

{/* 复选框在行首，标签在行尾 */}

{/* 之前 */}
<IonItem>
  <IonLabel slot="end">复选框标签</IonLabel>
  <IonCheckbox></IonCheckbox>
</IonItem>

{/* 之后 */}
<IonItem>
  <IonCheckbox labelPlacement="end">复选框标签</IonCheckbox>
</IonItem>
```
</TabItem>
<TabItem value="vue">

```html
<!-- 基础用法 -->

<!-- 之前 -->
<ion-item>
  <ion-label>复选框标签</ion-label>
  <ion-checkbox></ion-checkbox>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-checkbox>复选框标签</ion-checkbox>
</ion-item>

<!-- 固定标签 -->

<!-- 之前 -->
<ion-item>
  <ion-label position="fixed">复选框标签</ion-label>
  <ion-checkbox></ion-checkbox>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-checkbox label-placement="fixed">复选框标签</ion-checkbox>
</ion-item>

<!-- 复选框在行首，标签在行尾 -->

<!-- 之前 -->
<ion-item>
  <ion-label slot="end">复选框标签</ion-label>
  <ion-checkbox></ion-checkbox>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-checkbox label-placement="end">复选框标签</ion-checkbox>
</ion-item>
```
</TabItem>
</Tabs>
````