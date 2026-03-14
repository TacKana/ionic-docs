```tsx
import React from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';
function Example() {
  return (
    <IonContent>
      <IonButton id="open-popover">打开气泡弹窗</IonButton>
      <IonPopover keepContentsMounted={true} trigger="open-popover">
        <IonContent class="ion-padding">此内容在气泡弹窗创建时就已加载。</IonContent>
      </IonPopover>
    </IonContent>
  );
}
export default Example;
```