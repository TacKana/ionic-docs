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

<!-- 迁移前 -->
<ion-item>
  <ion-label position="floating">最爱的水果:</ion-label>
  <ion-select>...</ion-select>
</ion-item>

<!-- 迁移后 -->
<ion-item>
  <ion-select label="最爱的水果:" label-placement="floating">...</ion-select>
</ion-item>


<!-- 填充样式 -->

<!-- 迁移前 -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">最爱的水果:</ion-label>
  <ion-select>...</ion-select>
</ion-item>

<!-- 迁移后 -->

<!-- 使用 `fill` 属性的输入组件不应放在 ion-item 中 -->
<ion-select fill="outline" shape="round" label="最爱的水果:" label-placement="floating">...</ion-select>
```
</TabItem>
<TabItem value="angular">

```html
<!-- 标签与标签位置 -->

<!-- 迁移前 -->
<ion-item>
  <ion-label position="floating">最爱的水果:</ion-label>
  <ion-select>...</ion-select>
</ion-item>

<!-- 迁移后 -->
<ion-item>
  <ion-select label="最爱的水果:" labelPlacement="floating">...</ion-select>
</ion-item>


<!-- 填充样式 -->

<!-- 迁移前 -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">最爱的水果:</ion-label>
  <ion-select>...</ion-select>
</ion-item>

<!-- 迁移后 -->

<!-- 使用 `fill` 属性的输入组件不应放在 ion-item 中 -->
<ion-select fill="outline" shape="round" label="最爱的水果:" labelPlacement="floating">...</ion-select>
```
</TabItem>
<TabItem value="react">

```tsx
{/* 标签与标签位置 */}

{/* 迁移前 */}
<IonItem>
  <IonLabel position="floating">最爱的水果:</IonLabel>
  <IonSelect>...</IonSelect>
</IonItem>

{/* 迁移后 */}
<IonItem>
  <IonSelect label="最爱的水果:" labelPlacement="floating">...</IonSelect>
</IonItem>


{/* 填充样式 */}

{/* 迁移前 */}
<IonItem fill="outline" shape="round">
  <IonLabel position="floating">最爱的水果:</IonLabel>
  <IonSelect>...</IonSelect>
</IonItem>

{/* 迁移后 */}

{/* 使用 `fill` 属性的输入组件不应放在 IonItem 中 */}
<IonSelect fill="outline" shape="round" label="最爱的水果:" labelPlacement="floating">...</IonSelect>
```
</TabItem>
<TabItem value="vue">

```html
<!-- 标签与标签位置 -->

<!-- 迁移前 -->
<ion-item>
  <ion-label position="floating">最爱的水果:</ion-label>
  <ion-select>...</ion-select>
</ion-item>

<!-- 迁移后 -->
<ion-item>
  <ion-select label="最爱的水果:" label-placement="floating">...</ion-select>
</ion-item>


<!-- 填充样式 -->

<!-- 迁移前 -->
<ion-item fill="outline" shape="round">
  <ion-label position="floating">最爱的水果:</ion-label>
  <ion-select>...</ion-select>
</ion-item>

<!-- 迁移后 -->

<!-- 使用 `fill` 属性的输入组件不应放在 ion-item 中 -->
<ion-select fill="outline" shape="round" label="最爱的水果:" label-placement="floating">...</ion-select>
```
</TabItem>
</Tabs>
````