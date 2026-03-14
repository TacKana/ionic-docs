```tsx
import React from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';
function Example() {
  return (
    <>
      <IonButton id="click-trigger">左键点击我</IonButton>
      <IonPopover trigger="click-trigger" triggerAction="click">
        <IonContent class="ion-padding">你好，世界！</IonContent>
      </IonPopover>

      <IonButton id="context-menu-trigger">右键点击我</IonButton>
      <IonPopover trigger="context-menu-trigger" triggerAction="context-menu">
        <IonContent class="ion-padding">你好，世界！</IonContent>
      </IonPopover>

      <IonButton id="hover-trigger">鼠标悬停</IonButton>
      <IonPopover trigger="hover-trigger" triggerAction="hover">
        <IonContent class="ion-padding">你好，世界！</IonContent>
      </IonPopover>
    </>
  );
}
export default Example;
```