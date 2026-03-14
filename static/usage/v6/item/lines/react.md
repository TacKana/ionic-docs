```tsx
import React from 'react';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { informationCircle, star } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>默认项目分隔线</IonLabel>
      </IonItem>

      <IonItem lines="inset">
        <IonLabel>内嵌分隔线项目</IonLabel>
      </IonItem>

      <IonItem lines="full">
        <IonLabel>完整分隔线项目</IonLabel>
      </IonItem>

      <IonItem lines="none">
        <IonLabel>无分隔线项目</IonLabel>
      </IonItem>

      <IonItem>
        <IonIcon icon={star} slot="start"></IonIcon>
        <IonLabel>默认项目分隔线</IonLabel>
        <IonIcon icon={informationCircle} slot="end"></IonIcon>
      </IonItem>

      <IonItem lines="inset">
        <IonIcon icon={star} slot="start"></IonIcon>
        <IonLabel>内嵌分隔线项目</IonLabel>
        <IonIcon icon={informationCircle} slot="end"></IonIcon>
      </IonItem>

      <IonItem lines="full">
        <IonIcon icon={star} slot="start"></IonIcon>
        <IonLabel>完整分隔线项目</IonLabel>
        <IonIcon icon={informationCircle} slot="end"></IonIcon>
      </IonItem>

      <IonItem lines="none">
        <IonIcon icon={star} slot="start"></IonIcon>
        <IonLabel>无分隔线项目</IonLabel>
        <IonIcon icon={informationCircle} slot="end"></IonIcon>
      </IonItem>
    </>
  );
}
export default Example;
```