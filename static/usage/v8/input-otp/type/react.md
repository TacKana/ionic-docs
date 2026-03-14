```tsx
import React from 'react';
import { IonInputOtp } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInputOtp> 仅限数字 </IonInputOtp>
      <IonInputOtp type="text"> 字母和数字 </IonInputOtp>
    </>
  );
}
export default Example;
```