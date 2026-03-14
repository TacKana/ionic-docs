```tsx
import React from 'react';
import { IonInputOtp } from '@ionic/react';

function Example() {
  return (
    <>
      <IonInputOtp pattern="[1-4]" value="123">
        仅允许数字 1-4
      </IonInputOtp>
      <IonInputOtp type="text" pattern="." value="!@#">
        允许所有字符
      </IonInputOtp>
      <IonInputOtp type="text" pattern="[A-Z]" autocapitalize="on" value="ABC">
        仅允许大写拉丁字母
      </IonInputOtp>
      <IonInputOtp type="text" pattern="[\p{Script=Greek}]" value="αβγ">
        仅允许希腊字符
      </IonInputOtp>
      <IonInputOtp type="text" pattern="[\p{Script=Arabic}]" value="ابت">
        仅允许阿拉伯字符
      </IonInputOtp>
      <IonInputOtp type="text" pattern="[\p{Script=Han}]" value="甲乙丙">
        仅允许中文字符
      </IonInputOtp>
    </>
  );
}
export default Example;
```