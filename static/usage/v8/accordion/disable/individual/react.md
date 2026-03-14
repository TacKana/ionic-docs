```tsx
import React from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
function Example() {
  return (
    <IonAccordionGroup>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>第一个折叠面板</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          第一个内容
        </div>
      </IonAccordion>
      <IonAccordion value="second" disabled={true}>
        <IonItem slot="header" color="light">
          <IonLabel>第二个折叠面板</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          第二个内容
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>第三个折叠面板</IonLabel>
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