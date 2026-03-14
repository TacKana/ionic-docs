```tsx
import React from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';
function Example() {
  return (
    <IonContent>
      <IonButton id="open-popover">打开弹出层</IonButton>
      <IonPopover keepContentsMounted={true} trigger="open-popover">
        <IonContent class="ion-padding">此内容在弹出层创建时便已加载完成。</IonContent>
      </IonPopover>
    </IonContent>
  );
}
export default Example;
```