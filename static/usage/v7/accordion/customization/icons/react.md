```tsx
import React from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
import { caretDownCircle } from 'ionicons/icons';

function Example() {
  return (
    <IonAccordionGroup>
      <IonAccordion value="first" toggleIcon={caretDownCircle} toggleIconSlot="start">
        <IonItem slot="header" color="light">
          <IonLabel>第一个手风琴</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          第一个内容
        </div>
      </IonAccordion>
      <IonAccordion value="second" toggleIcon={caretDownCircle} toggleIconSlot="start">
        <IonItem slot="header" color="light">
          <IonLabel>第二个手风琴</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          第二个内容
        </div>
      </IonAccordion>
      <IonAccordion value="third" toggleIcon={caretDownCircle} toggleIconSlot="start">
        <IonItem slot="header" color="light">
          <IonLabel>第三个手风琴</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          第三个内容
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default Example;
```