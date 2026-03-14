```tsx
import React, { useRef, useEffect } from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';
function Example() {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);

  useEffect(() => {
    if (!accordionGroup.current) {
      return;
    }

    accordionGroup.current.value = ['first', 'third'];
  }, []);

  return (
    <IonAccordionGroup ref={accordionGroup} multiple={true}>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>第一个手风琴项</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          第一项内容
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>第二个手风琴项</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          第二项内容
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>第三个手风琴项</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          第三项内容
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default Example;
```