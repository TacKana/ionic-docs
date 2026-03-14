```tsx
import React from 'react';
import { IonAlert, IonButton } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonButton id="present-alert">点击我</IonButton>
      <IonAlert
        trigger="present-alert"
        header="确定吗？"
        className="custom-alert"
        buttons={[
          {
            text: '否',
            cssClass: 'alert-button-cancel',
          },
          {
            text: '是',
            cssClass: 'alert-button-confirm',
          },
        ]}
      ></IonAlert>
    </>
  );
}
export default Example;
```