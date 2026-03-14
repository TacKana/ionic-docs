```tsx
import React from 'react';
import { IonInputOtp } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInputOtp length={2} color="primary">主色调</IonInputOtp>
      <IonInputOtp length={2} color="secondary">辅助色</IonInputOtp>
      <IonInputOtp length={2} color="tertiary">第三色</IonInputOtp>
      <IonInputOtp length={2} color="success">成功</IonInputOtp>
      <IonInputOtp length={2} color="warning">警告</IonInputOtp>
      <IonInputOtp length={2} color="danger">危险</IonInputOtp>
      <IonInputOtp length={2} color="light">浅色</IonInputOtp>
      <IonInputOtp length={2} color="medium">中等</IonInputOtp>
      <IonInputOtp length={2} color="dark">深色</IonInputOtp>
    </>
  );
}
export default Example;
```