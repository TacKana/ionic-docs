```tsx
import React from 'react';
import { IonInput } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInput aria-label="Primary input" color="primary" placeholder="主要输入框"></IonInput>
      <IonInput aria-label="Secondary input" color="secondary" placeholder="次要输入框"></IonInput>
      <IonInput aria-label="Tertiary input" color="tertiary" placeholder="三级输入框"></IonInput>
      <IonInput aria-label="Success input" color="success" placeholder="成功输入框"></IonInput>
      <IonInput aria-label="Warning input" color="warning" placeholder="警告输入框"></IonInput>
      <IonInput aria-label="Danger input" color="danger" placeholder="危险输入框"></IonInput>
      <IonInput aria-label="Light input" color="light" placeholder="浅色输入框"></IonInput>
      <IonInput aria-label="Medium input" color="medium" placeholder="中等输入框"></IonInput>
      <IonInput aria-label="Dark input" color="dark" placeholder="深色输入框"></IonInput>
    </>
  );
}
export default Example;
```