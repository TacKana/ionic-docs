```tsx
import React from 'react';
import { IonInput } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInput label="实心输入框" labelPlacement="floating" fill="solid" placeholder="请输入文本"></IonInput>

      <br />

      <IonInput label="描边输入框" labelPlacement="floating" fill="outline" placeholder="请输入文本"></IonInput>
    </>
  );
}
export default Example;
```