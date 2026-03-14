```tsx
import React from 'react';
import { IonInput, IonItem, IonList, IonText } from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput labelPlacement="floating" value="hi@ionic.io">
          <div slot="label">
            邮箱 <IonText color="danger">(必填)</IonText>
          </div>
        </IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```