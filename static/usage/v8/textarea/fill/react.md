```tsx
import React from 'react';
import { IonTextarea } from '@ionic/react';
function Example() {
  return (
    <>
      <IonTextarea label="实心文本域" labelPlacement="floating" fill="solid" placeholder="请输入文本"></IonTextarea>

      <br />

      <IonTextarea
        label="轮廓文本域"
        labelPlacement="floating"
        fill="outline"
        placeholder="请输入文本"
      ></IonTextarea>
    </>
  );
}
export default Example;
```