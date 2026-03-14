```tsx
import React from 'react';
import { IonInput } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInput color="primary" placeholder="主色调输入框"></IonInput>
      <IonInput color="secondary" placeholder="次要色调输入框"></IonInput>
      <IonInput color="tertiary" placeholder="第三色调输入框"></IonInput>
      <IonInput color="success" placeholder="成功状态输入框"></IonInput>
      <IonInput color="warning" placeholder="警告状态输入框"></IonInput>
      <IonInput color="danger" placeholder="危险状态输入框"></IonInput>
      <IonInput color="light" placeholder="浅色输入框"></IonInput>
      <IonInput color="medium" placeholder="中等色调输入框"></IonInput>
      <IonInput color="dark" placeholder="深色输入框"></IonInput>
    </>
  );
}
export default Example;
```