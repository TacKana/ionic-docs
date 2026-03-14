```tsx
import React from 'react';
import { IonInputOtp } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInputOtp separators="1,3">
        没有收到验证码？ <a href="#">重新发送验证码</a>
      </IonInputOtp>
      <IonInputOtp separators="2">
        没有收到验证码？ <a href="#">重新发送验证码</a>
      </IonInputOtp>
      <IonInputOtp separators="all">
        没有收到验证码？ <a href="#">重新发送验证码</a>
      </IonInputOtp>
    </>
  );
}
export default Example;
```