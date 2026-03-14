```tsx
import React from 'react';
import { IonButton, IonIcon, IonItem, IonList, IonTextarea } from '@ionic/react';
import { eye, lockClosed } from 'ionicons/icons';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonTextarea labelPlacement="stacked" label="评论" placeholder="请输入您的评论">
          <IonIcon slot="start" icon={lockClosed} aria-hidden="true"></IonIcon>
          <IonButton fill="clear" slot="end" aria-label="显示/隐藏">
            <IonIcon slot="icon-only" icon={eye} aria-hidden="true"></IonIcon>
          </IonButton>
        </IonTextarea>
      </IonItem>
    </IonList>
  );
}
export default Example;
```