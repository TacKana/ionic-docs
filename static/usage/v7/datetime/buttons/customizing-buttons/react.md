```tsx
import React, { useRef } from 'react';
import { IonButtons, IonButton, IonDatetime } from '@ionic/react';
function Example() {
  const datetime = useRef<null | HTMLIonDatetimeElement>(null);
  const reset = () => {
    datetime.current?.reset();
  };
  const cancel = () => {
    datetime.current?.cancel();
  };
  const confirm = () => {
    datetime.current?.confirm();
  };
  return (
    <IonDatetime ref={datetime}>
      <IonButtons slot="buttons">
        <IonButton color="danger" onClick={reset}>
          重置
        </IonButton>
        <IonButton color="primary" onClick={cancel}>
          取消
        </IonButton>
        <IonButton color="primary" onClick={confirm}>
          确认
        </IonButton>
      </IonButtons>
    </IonDatetime>
  );
}
export default Example;
```