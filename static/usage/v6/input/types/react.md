```tsx
import React from 'react';
import { IonInput, IonItem, IonLabel, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel>文本输入</IonLabel>
        <IonInput placeholder="请输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>数字输入</IonLabel>
        <IonInput type="number" placeholder="000"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>密码输入</IonLabel>
        <IonInput type="password" value="password"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>邮箱输入</IonLabel>
        <IonInput type="email" placeholder="email@domain.com"></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>电话输入</IonLabel>
        <IonInput type="tel" placeholder="888-888-8888"></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```