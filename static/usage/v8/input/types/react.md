```tsx
import React from 'react';
import { IonInput, IonItem, IonList } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput label="文本输入" placeholder="请输入文本"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="数字输入" type="number" placeholder="000"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="密码输入" type="password" value="password"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="邮箱输入" type="email" placeholder="email@domain.com"></IonInput>
      </IonItem>

      <IonItem>
        <IonInput label="电话输入" type="tel" placeholder="888-888-8888"></IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```