```tsx
import React from 'react';
import { IonButton, IonRadio, IonRadioGroup } from '@ionic/react';

function Example() {
  function focusElement(id: string) {
    const el = document.querySelector(id) as HTMLElement;

    const app = el.closest('ion-app');
    if (app) {
      app.setFocus([el]);
    }
  }

  return (
    <>
      <IonButton id="buttonToFocus" fill="outline">
        按钮
      </IonButton>

      <IonRadioGroup value="a">
        <IonRadio id="radioToFocus" value="a">
          单选按钮
        </IonRadio>
      </IonRadioGroup>

      <br />

      <IonButton onClick={() => focusElement('#buttonToFocus')}>聚焦按钮</IonButton>
      <IonButton onClick={() => focusElement('#radioToFocus')}>聚焦单选按钮</IonButton>
    </>
  );
}
export default Example;
```