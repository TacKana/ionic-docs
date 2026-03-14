```tsx
import React from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/react';
import { create } from 'ionicons/icons';

import './main.css';

function Example() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>标题</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={create} slot="icon-only"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonList inset={true}>
          <IonItem>
            <IonInput label="姓名"></IonInput>
          </IonItem>
          <IonItem>
            <IonCheckbox>领取免费小狗</IonCheckbox>
          </IonItem>
          <IonItem>
            <IonToggle>启用通知</IonToggle>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem>
            <IonLabel>项目 1</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>项目 2</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>项目 3</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>页脚</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
}
export default Example;
```