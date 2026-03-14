```tsx
import React from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';
function Example() {
  return (
    <>
      <IonButton id="auto-trigger">大小=自动</IonButton>
      <IonPopover trigger="auto-trigger" size="auto">
        <IonContent class="ion-padding">你好！</IonContent>
      </IonPopover>

      <IonButton id="cover-trigger">大小=覆盖</IonButton>
      <IonPopover trigger="cover-trigger" size="cover">
        <IonContent class="ion-padding">你好！</IonContent>
      </IonPopover>
    </>
  );
}
export default Example;
```