```tsx
import React from 'react';
import { IonInputOtp } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonInputOtp class="custom" separators="all">
        没有收到验证码？<a href="#">重新发送验证码</a>
      </IonInputOtp>
      <IonInputOtp fill="solid" class="custom" separators="all">
        没有收到验证码？<a href="#">重新发送验证码</a>
      </IonInputOtp>
    </>
  );
}
export default Example;
```