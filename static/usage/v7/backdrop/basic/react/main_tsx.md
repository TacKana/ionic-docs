```tsx
import React from 'react';
import {
  IonBackdrop,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonCheckbox,
  IonButton,
} from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonBackdrop visible={true}></IonBackdrop>
      <div className="ion-page">
        <IonHeader>
          <IonToolbar>
            <IonTitle>背景遮罩</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <IonCheckbox>复选框</IonCheckbox>
          </IonItem>
          <IonButton expand="block">按钮</IonButton>
        </IonContent>
      </div>
    </>
  );
}
export default Example;
```