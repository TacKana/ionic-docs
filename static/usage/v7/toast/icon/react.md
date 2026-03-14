```tsx
import React from 'react';
import { IonButton, IonToast } from '@ionic/react';
import { globe } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonButton id="open-toast">打开提示</IonButton>
      <IonToast trigger="open-toast" message="你好，世界！" duration={3000} icon={globe}></IonToast>
    </>
  );
}
export default Example;
```