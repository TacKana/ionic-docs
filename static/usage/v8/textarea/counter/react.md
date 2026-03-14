```tsx
import React from 'react';
import { IonTextarea } from '@ionic/react';

function Example() {
  return (
    <>
      <IonTextarea label="默认计数器" labelPlacement="floating" counter={true} maxlength={20}></IonTextarea>

      <IonTextarea
        label="自定义计数器格式"
        labelPlacement="floating"
        counter={true}
        maxlength={20}
        counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}
      ></IonTextarea>
    </>
  );
}
export default Example;
```