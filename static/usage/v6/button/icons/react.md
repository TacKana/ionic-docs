```tsx
import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';

function Example() {
  return (
    <>
      {/* 左侧图标按钮 */}
      <IonButton>
        <IonIcon slot="start" icon={star}></IonIcon>
        左侧图标
      </IonButton>

      {/* 右侧图标按钮 */}
      <IonButton>
        右侧图标
        <IonIcon slot="end" icon={star}></IonIcon>
      </IonButton>

      {/* 仅图标按钮 */}
      <IonButton>
        <IonIcon slot="icon-only" icon={star}></IonIcon>
      </IonButton>
    </>
  );
}
export default Example;
```