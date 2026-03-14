```tsx
import React from 'react';
import { IonList, IonItem, IonInput } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput inputmode="email" labelPlacement="stacked" placeholder="请输入用户名或邮箱地址">
          <code slot="label">inputmode="email"</code>
        </IonInput>
      </IonItem>
      <IonItem>
        <IonInput inputmode="numeric" labelPlacement="stacked" placeholder="请输入整数">
          <code slot="label">inputmode="numeric"</code>
        </IonInput>
      </IonItem>
      <IonItem>
        <IonInput inputmode="decimal" labelPlacement="stacked" placeholder="请输入小数">
          <code slot="label">inputmode="decimal"</code>
        </IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```