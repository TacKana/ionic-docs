```tsx
import React from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';
function Example() {
  return (
    <IonContent>
      <IonButton id="open-popover">打开弹出层</IonButton>
      <IonPopover keepContentsMounted={true} trigger="open-popover">
        <IonContent class="ion-padding">这段内容在弹出层创建时便已挂载。</IonContent>
      </IonPopover>
    </IonContent>
  );
}
export default Example;
```