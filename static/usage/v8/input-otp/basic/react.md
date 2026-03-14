```tsx
import React from 'react';
import { IonInputOtp } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInputOtp>
        没有收到验证码？ <a href="#">重新发送验证码</a>
      </IonInputOtp>
      <IonInputOtp length="6">
        没有收到验证码？ <a href="#">重新发送验证码</a>
      </IonInputOtp>
    </>
  );
}
export default Example;
```