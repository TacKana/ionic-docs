```tsx
import React from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <div className="container">
      <IonButton id="top-center">侧边=顶部，对齐=居中</IonButton>
      <IonPopover trigger="top-center" side="top" alignment="center">
        <IonContent class="ion-padding">你好，世界！</IonContent>
      </IonPopover>

      <IonButton id="bottom-start">侧边=底部，对齐=起始</IonButton>
      <IonPopover trigger="bottom-start" side="bottom" alignment="start">
        <IonContent class="ion-padding">你好，世界！</IonContent>
      </IonPopover>

      <IonButton id="left-start">侧边=左侧，对齐=起始</IonButton>
      <IonPopover trigger="left-start" side="left" alignment="start">
        <IonContent class="ion-padding">你好，世界！</IonContent>
      </IonPopover>

      <IonButton id="right-end">侧边=右侧，对齐=末尾</IonButton>
      <IonPopover trigger="right-end" side="right" alignment="end">
        <IonContent class="ion-padding">你好，世界！</IonContent>
      </IonPopover>
    </div>
  );
}
export default Example;
```