```tsx
import React from 'react';
import { IonButton, IonToast } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonButton id="open-toast">打开 Toast</IonButton>
      <IonToast
        trigger="open-toast"
        duration={3000}
        message="你好，风格化世界！"
        className="custom-toast"
        buttons={[
          {
            text: '关闭',
            role: 'cancel',
          },
        ]}
      ></IonToast>
    </>
  );
}
export default Example;
```