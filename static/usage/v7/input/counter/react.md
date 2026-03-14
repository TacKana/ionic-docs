```tsx
import React from 'react';
import { IonInput } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInput label="默认计数器" labelPlacement="floating" counter={true} maxlength={20}></IonInput>

      <IonInput
        id="custom-input"
        label="自定义计数器格式"
        labelPlacement="floating"
        counter={true}
        maxlength={20}
        counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}
      ></IonInput>
    </>
  );
}
export default Example;
```