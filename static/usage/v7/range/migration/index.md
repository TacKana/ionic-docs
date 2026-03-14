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
  <ion-label>通知</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-range label="通知"></ion-range>
</ion-item>

<!-- 固定标签 -->

<!-- 之前 -->
<ion-item>
  <ion-label position="fixed">通知</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-range label-placement="fixed" label="通知"></ion-range>
</ion-item>

<!-- 范围在行首，标签在行尾 -->

<!-- 之前 -->
<ion-item>
  <ion-label slot="end">通知</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-range label-placement="end" label="通知"></ion-range>
</ion-item>

<!-- 自定义 HTML 标签 -->

<!-- 之前 -->
<ion-item>
  <ion-label>
    <div class="custom-label">通知</div>
  </ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-range>
    <div slot="label" class="custom-label">通知</div>
  </ion-range>
</ion-item>
```
</TabItem>
<TabItem value="angular">

```html
<!-- 基础用法 -->

<!-- 之前 -->
<ion-item>
  <ion-label>通知</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-range label="通知"></ion-range>
</ion-item>

<!-- 固定标签 -->

<!-- 之前 -->
<ion-item>
  <ion-label position="fixed">通知</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-range labelPlacement="fixed" label="通知"></ion-range>
</ion-item>

<!-- 范围在行首，标签在行尾 -->

<!-- 之前 -->
<ion-item>
  <ion-label slot="end">通知</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-range labelPlacement="end" label="通知"></ion-range>
</ion-item>

<!-- 自定义 HTML 标签 -->

<!-- 之前 -->
<ion-item>
  <ion-label>
    <div class="custom-label">通知</div>
  </ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-range>
    <div slot="label" class="custom-label">通知</div>
  </ion-range>
</ion-item>
```
</TabItem>
<TabItem value="react">

```tsx
{/* 基础用法 */}

{/* 之前 */}
<IonItem>
  <IonLabel>通知</IonLabel>
  <IonRange></IonRange>
</IonItem>

{/* 之后 */}
<IonItem>
  <IonRange label="通知"></IonRange>
</IonItem>

{/* 固定标签 */}

{/* 之前 */}
<IonItem>
  <IonLabel position="fixed">通知</IonLabel>
  <IonRange></IonRange>
</IonItem>

{/* 之后 */}
<IonItem>
  <IonRange labelPlacement="fixed" label="通知"></IonRange>
</IonItem>

{/* 范围在行首，标签在行尾 */}

{/* 之前 */}
<IonItem>
  <IonLabel slot="end">通知</IonLabel>
  <IonRange></IonRange>
</IonItem>

{/* 之后 */}
<IonItem>
  <IonRange labelPlacement="end" label="通知"></IonRange>
</IonItem>

{/* 自定义 HTML 标签 */}

{/* 之前 */}
<IonItem>
  <IonLabel>
    <div className="custom-label">通知</div>
  </IonLabel>
  <IonRange></IonRange>
</IonItem>

{/* 之后 */}
<IonItem>
  <IonRange>
    <div slot="label" className="custom-label">通知</div>
  </IonRange>
</IonItem>
```
</TabItem>
<TabItem value="vue">

```html
<!-- 基础用法 -->

<!-- 之前 -->
<ion-item>
  <ion-label>通知</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-range label="通知"></ion-range>
</ion-item>

<!-- 固定标签 -->

<!-- 之前 -->
<ion-item>
  <ion-label position="fixed">通知</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-range label-placement="fixed" label="通知"></ion-range>
</ion-item>

<!-- 范围在行首，标签在行尾 -->

<!-- 之前 -->
<ion-item>
  <ion-label slot="end">通知</ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-range label-placement="end" label="通知"></ion-range>
</ion-item>

<!-- 自定义 HTML 标签 -->

<!-- 之前 -->
<ion-item>
  <ion-label>
    <div class="custom-label">通知</div>
  </ion-label>
  <ion-range></ion-range>
</ion-item>

<!-- 之后 -->
<ion-item>
  <ion-range>
    <div slot="label" class="custom-label">通知</div>
  </ion-range>
</ion-item>
```
</TabItem>
</Tabs>
````