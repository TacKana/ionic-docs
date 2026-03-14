```tsx
import React from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, AccordionGroupCustomEvent } from '@ionic/react';
function Example() {
  const values = ['first', 'second', 'third'];
  const accordionGroupChange = (event: AccordionGroupCustomEvent) => {
    const collapsedItems = values.filter((value) => value !== event.detail.value);
    const selectedValue = event.detail.value;

    console.log(
      `展开项: ${selectedValue === undefined ? '无' : event.detail.value} | 折叠项: ${collapsedItems.join(', ')}`
    );
  };

  return (
    <IonAccordionGroup onIonChange={accordionGroupChange}>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>第一个折叠面板</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          第一个内容区域
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>第二个折叠面板</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          第二个内容区域
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>第三个折叠面板</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          第三个内容区域
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default Example;
```