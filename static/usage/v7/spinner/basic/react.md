```tsx
import React from 'react';
import { IonItem, IonLabel, IonSpinner } from '@ionic/react';

function Example() {
  return (
    <>
      <IonItem>
        <IonLabel>默认</IonLabel>
        <IonSpinner></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>点状</IonLabel>
        <IonSpinner name="dots"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>线条</IonLabel>
        <IonSpinner name="lines"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>细线条</IonLabel>
        <IonSpinner name="lines-small"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>锐利线条</IonLabel>
        <IonSpinner name="lines-sharp"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>细锐利线条</IonLabel>
        <IonSpinner name="lines-sharp-small"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>气泡</IonLabel>
        <IonSpinner name="bubbles"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>圆圈</IonLabel>
        <IonSpinner name="circles"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>环形</IonLabel>
        <IonSpinner name="circular"></IonSpinner>
      </IonItem>

      <IonItem>
        <IonLabel>新月形</IonLabel>
        <IonSpinner name="crescent"></IonSpinner>
      </IonItem>
    </>
  );
}
export default Example;
```