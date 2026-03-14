```tsx
import React from 'react';
import { IonInputOtp } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInputOtp shape="round"> 圆角 </IonInputOtp>
      <IonInputOtp shape="soft"> 柔和 </IonInputOtp>
      <IonInputOtp shape="rectangular"> 矩形 </IonInputOtp>
    </>
  );
}
export default Example;
```