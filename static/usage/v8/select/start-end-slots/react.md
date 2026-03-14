```tsx
import React from 'react';
import { IonButton, IonIcon, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import { eye, leaf } from 'ionicons/icons';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect labelPlacement="stacked" label="最爱的水果" value="apple">
          <IonIcon slot="start" icon={leaf} aria-hidden="true"></IonIcon>
          <IonSelectOption value="apple">苹果</IonSelectOption>
          <IonSelectOption value="banana">香蕉</IonSelectOption>
          <IonSelectOption value="orange">橙子</IonSelectOption>
          <IonButton fill="clear" slot="end" aria-label="显示/隐藏密码">
            <IonIcon slot="icon-only" icon={eye} aria-hidden="true"></IonIcon>
          </IonButton>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Example;
```