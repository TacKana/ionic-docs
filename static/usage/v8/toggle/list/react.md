```tsx
import React from 'react';
import { IonItem, IonList, IonToggle } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonToggle>接收推送通知</IonToggle>
      </IonItem>
      <IonItem>
        <IonToggle>接收电子邮件</IonToggle>
      </IonItem>
      <IonItem>
        <IonToggle>接收短信</IonToggle>
      </IonItem>
    </IonList>
  );
}
export default Example;
```