```tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonTextarea,
  IonToggle,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>示例</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="light">
        <IonList inset={true}>
          <IonItem>
            <IonInput label="名字"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput label="姓氏"></IonInput>
          </IonItem>
          <IonItem>
            <IonToggle>
              <IonLabel>允许通知</IonLabel>
              <IonNote color="medium">随时可以取消订阅</IonNote>
            </IonToggle>
          </IonItem>
        </IonList>

        <IonList inset={true}>
          <IonItem>
            <IonTextarea label="评论" label-placement="floating" rows={5}></IonTextarea>
          </IonItem>
        </IonList>

        <IonNote color="medium" class="ion-margin-horizontal">
          您的评论将保持匿名，仅用于提升我们产品的可靠性。
        </IonNote>
      </IonContent>
    </>
  );
}
export default Example;
```