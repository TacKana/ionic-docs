```tsx
import React from 'react';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { informationCircle, star } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>默认项目线条</IonLabel>
      </IonItem>

      <IonItem lines="inset">
        <IonLabel>项目线条内嵌</IonLabel>
      </IonItem>

      <IonItem lines="full">
        <IonLabel>项目线条全宽</IonLabel>
      </IonItem>

      <IonItem lines="none">
        <IonLabel>项目线条隐藏</IonLabel>
      </IonItem>

      <IonItem>
        <IonIcon icon={star} slot="start"></IonIcon>
        <IonLabel>默认项目线条</IonLabel>
        <IonIcon icon={informationCircle} slot="end"></IonIcon>
      </IonItem>

      <IonItem lines="inset">
        <IonIcon icon={star} slot="start"></IonIcon>
        <IonLabel>项目线条内嵌</IonLabel>
        <IonIcon icon={informationCircle} slot="end"></IonIcon>
      </IonItem>

      <IonItem lines="full">
        <IonIcon icon={star} slot="start"></IonIcon>
        <IonLabel>项目线条全宽</IonLabel>
        <IonIcon icon={informationCircle} slot="end"></IonIcon>
      </IonItem>

      <IonItem lines="none">
        <IonIcon icon={star} slot="start"></IonIcon>
        <IonLabel>项目线条隐藏</IonLabel>
        <IonIcon icon={informationCircle} slot="end"></IonIcon>
      </IonItem>
    </>
  );
}
export default Example;
```