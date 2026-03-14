```tsx
import React from 'react';
import { IonButton, IonIcon, IonInput, IonItem, IonList } from '@ionic/react';
import { eye, lockClosed } from 'ionicons/icons';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonInput labelPlacement="stacked" label="邮箱" placeholder="email@domain.com">
          <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
          <IonButton fill="clear" slot="end" aria-label="显示/隐藏">
            <IonIcon slot="icon-only" icon={eye} aria-hidden="true"></IonIcon>
          </IonButton>
        </IonInput>
      </IonItem>
    </IonList>
  );
}
export default Example;
```