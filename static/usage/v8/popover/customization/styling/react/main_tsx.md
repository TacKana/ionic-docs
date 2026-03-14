```tsx
import React from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonButton id="trigger-button">点击我</IonButton>
      <IonPopover trigger="trigger-button">
        <IonContent className="ion-padding">你好，风格化的世界！</IonContent>
      </IonPopover>
    </>
  );
}
export default Example;
```