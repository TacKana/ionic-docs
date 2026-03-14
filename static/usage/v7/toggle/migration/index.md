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

<!-- 旧写法 -->
<ion-item>
  <ion-label>通知</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- 新写法 -->
<ion-item>
  <ion-toggle>通知</ion-toggle>
</ion-item>

<!-- 固定标签 -->

<!-- 旧写法 -->
<ion-item>
  <ion-label position="fixed">通知</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- 新写法 -->
<ion-item>
  <ion-toggle label-placement="fixed">通知</ion-toggle>
</ion-item>

<!-- 开关在前，标签在后 -->

<!-- 旧写法 -->
<ion-item>
  <ion-label slot="end">通知</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- 新写法 -->
<ion-item>
  <ion-toggle label-placement="end">通知</ion-toggle>
</ion-item>
```
</TabItem>
<TabItem value="angular">

```html
<!-- 基础用法 -->

<!-- 旧写法 -->
<ion-item>
  <ion-label>通知</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- 新写法 -->
<ion-item>
  <ion-toggle>通知</ion-toggle>
</ion-item>

<!-- 固定标签 -->

<!-- 旧写法 -->
<ion-item>
  <ion-label position="fixed">通知</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- 新写法 -->
<ion-item>
  <ion-toggle label-placement="fixed">通知</ion-toggle>
</ion-item>

<!-- 开关在前，标签在后 -->

<!-- 旧写法 -->
<ion-item>
  <ion-label slot="end">通知</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- 新写法 -->
<ion-item>
  <ion-toggle label-placement="end">通知</ion-toggle>
</ion-item>
```
</TabItem>
<TabItem value="react">

```tsx
{/* 基础用法 */}

{/* 旧写法 */}
<IonItem>
  <IonLabel>通知</IonLabel>
  <IonToggle></IonToggle>
</IonItem>

{/* 新写法 */}
<IonItem>
  <IonToggle>通知</IonToggle>
</IonItem>

{/* 固定标签 */}

{/* 旧写法 */}
<IonItem>
  <IonLabel position="fixed">通知</IonLabel>
  <IonToggle></IonToggle>
</IonItem>

{/* 新写法 */}
<IonItem>
  <IonToggle labelPlacement="fixed">通知</IonToggle>
</IonItem>

{/* 开关在前，标签在后 */}

{/* 旧写法 */}
<IonItem>
  <IonLabel slot="end">通知</IonLabel>
  <IonToggle></IonToggle>
</IonItem>

{/* 新写法 */}
<IonItem>
  <IonToggle labelPlacement="end">通知</IonToggle>
</IonItem>
```
</TabItem>
<TabItem value="vue">

```html
<!-- 基础用法 -->

<!-- 旧写法 -->
<ion-item>
  <ion-label>通知</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- 新写法 -->
<ion-item>
  <ion-toggle>通知</ion-toggle>
</ion-item>

<!-- 固定标签 -->

<!-- 旧写法 -->
<ion-item>
  <ion-label position="fixed">通知</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- 新写法 -->
<ion-item>
  <ion-toggle label-placement="fixed">通知</ion-toggle>
</ion-item>

<!-- 开关在前，标签在后 -->

<!-- 旧写法 -->
<ion-item>
  <ion-label slot="end">通知</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<!-- 新写法 -->
<ion-item>
  <ion-toggle label-placement="end">通知</ion-toggle>
</ion-item>
```
</TabItem>
</Tabs>
````