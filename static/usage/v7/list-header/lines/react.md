```tsx
import React from 'react';
import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';

function Example() {
  return (
    <>
      <IonList>
        <IonListHeader>
          <IonLabel>默认</IonLabel>
        </IonListHeader>
        <IonItem>
          <IonLabel>项目</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>项目</IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonListHeader lines="inset">
          <IonLabel>内嵌分隔线</IonLabel>
        </IonListHeader>
        <IonItem>
          <IonLabel>项目</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>项目</IonLabel>
        </IonItem>
      </IonList>

      <IonList>
        <IonListHeader lines="full">
          <IonLabel>完整宽度分隔线</IonLabel>
        </IonListHeader>
        <IonItem>
          <IonLabel>项目</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>项目</IonLabel>
        </IonItem>
      </IonList>
    </>
  );
}
export default Example;
```