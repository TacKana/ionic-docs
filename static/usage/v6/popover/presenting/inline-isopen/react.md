```tsx
import React, { useRef, useState } from 'react';
import { IonButton, IonContent, IonPopover } from '@ionic/react';

function Example() {
  const popover = useRef<HTMLIonPopoverElement>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const openPopover = (e: any) => {
    popover.current!.event = e;
    setPopoverOpen(true);
  };

  return (
    <>
      <IonButton onClick={openPopover}>点击我</IonButton>
      <IonPopover ref={popover} isOpen={popoverOpen} onDidDismiss={() => setPopoverOpen(false)}>
        <IonContent class="ion-padding">你好，世界！</IonContent>
      </IonPopover>
    </>
  );
}
export default Example;
```