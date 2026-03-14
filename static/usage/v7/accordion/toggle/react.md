```tsx
import React, { useRef } from 'react';
import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from '@ionic/react';
function Example() {
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);
  const toggleAccordion = () => {
    if (!accordionGroup.current) {
      return;
    }
    const nativeEl = accordionGroup.current;

    if (nativeEl.value === 'second') {
      nativeEl.value = undefined;
    } else {
      nativeEl.value = 'second';
    }
  };
  return (
    <>
      <IonAccordionGroup ref={accordionGroup}>
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
      <IonButton onClick={toggleAccordion}>切换第二个折叠面板</IonButton>
    </>
  );
}
export default Example;
```