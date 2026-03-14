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

<!-- 旧版写法 -->
<ion-item>
  <ion-label>单选标签</ion-label>
  <ion-radio></ion-radio>
</ion-item>

<!-- 新版写法 -->
<ion-item>
  <ion-radio>单选标签</ion-radio>
</ion-item>

<!-- 固定标签 -->

<!-- 旧版写法 -->
<ion-item>
  <ion-label position="fixed">单选标签</ion-label>
  <ion-radio></ion-radio>
</ion-item>

<!-- 新版写法 -->
<ion-item>
  <ion-radio label-placement="fixed">单选标签</ion-radio>
</ion-item>

<!-- 单选框在行首，标签在行尾 -->

<!-- 旧版写法 -->
<ion-item>
  <ion-label slot="end">单选标签</ion-label>
  <ion-radio></ion-radio>
</ion-item>

<!-- 新版写法 -->
<ion-item>
  <ion-radio label-placement="end">单选标签</ion-radio>
</ion-item>
```
</TabItem>
<TabItem value="angular">

```html
<!-- 基础用法 -->

<!-- 旧版写法 -->
<ion-item>
  <ion-label>单选标签</ion-label>
  <ion-radio></ion-radio>
</ion-item>

<!-- 新版写法 -->
<ion-item>
  <ion-radio>单选标签</ion-radio>
</ion-item>

<!-- 固定标签 -->

<!-- 旧版写法 -->
<ion-item>
  <ion-label position="fixed">单选标签</ion-label>
  <ion-radio></ion-radio>
</ion-item>

<!-- 新版写法 -->
<ion-item>
  <ion-radio labelPlacement="fixed">单选标签</ion-radio>
</ion-item>

<!-- 单选框在行首，标签在行尾 -->

<!-- 旧版写法 -->
<ion-item>
  <ion-label slot="end">单选标签</ion-label>
  <ion-radio></ion-radio>
</ion-item>

<!-- 新版写法 -->
<ion-item>
  <ion-radio labelPlacement="end">单选标签</ion-radio>
</ion-item>
```
</TabItem>
<TabItem value="react">

```tsx
{/* 基础用法 */}

{/* 旧版写法 */}
<IonItem>
  <IonLabel>单选标签</IonLabel>
  <IonRadio></IonRadio>
</IonItem>

{/* 新版写法 */}
<IonItem>
  <IonRadio>单选标签</IonRadio>
</IonItem>

{/* 固定标签 */}

{/* 旧版写法 */}
<IonItem>
  <IonLabel position="fixed">单选标签</IonLabel>
  <IonRadio></IonRadio>
</IonItem>

{/* 新版写法 */}
<IonItem>
  <IonRadio labelPlacement="fixed">单选标签</IonRadio>
</IonItem>

{/* 单选框在行首，标签在行尾 */}

{/* 旧版写法 */}
<IonItem>
  <IonLabel slot="end">单选标签</IonLabel>
  <IonRadio></IonRadio>
</IonItem>

{/* 新版写法 */}
<IonItem>
  <IonRadio labelPlacement="end">单选标签</IonRadio>
</IonItem>
```
</TabItem>
<TabItem value="vue">

```html
<!-- 基础用法 -->

<!-- 旧版写法 -->
<ion-item>
  <ion-label>单选标签</ion-label>
  <ion-radio></ion-radio>
</ion-item>

<!-- 新版写法 -->
<ion-item>
  <ion-radio>单选标签</ion-radio>
</ion-item>

<!-- 固定标签 -->

<!-- 旧版写法 -->
<ion-item>
  <ion-label position="fixed">单选标签</ion-label>
  <ion-radio></ion-radio>
</ion-item>

<!-- 新版写法 -->
<ion-item>
  <ion-radio label-placement="fixed">单选标签</ion-radio>
</ion-item>

<!-- 单选框在行首，标签在行尾 -->

<!-- 旧版写法 -->
<ion-item>
  <ion-label slot="end">单选标签</ion-label>
  <ion-radio></ion-radio>
</ion-item>

<!-- 新版写法 -->
<ion-item>
  <ion-radio label-placement="end">单选标签</ion-radio>
</ion-item>
```
</TabItem>
</Tabs>
````