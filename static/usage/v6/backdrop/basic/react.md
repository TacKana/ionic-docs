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
  IonLabel,
  IonButton,
} from '@ionic/react';

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
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>复选框</IonLabel>
          </IonItem>
          <IonButton expand="block">按钮</IonButton>
        </IonContent>
      </div>
    </>
  );
}
export default Example;
```