```tsx
import React, { useRef } from 'react';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, AccordionGroupCustomEvent } from '@ionic/react';
function Example() {
  const listenerOut = useRef<null | HTMLParagraphElement>(null);
  const values = ['first', 'second', 'third'];
  const accordionGroupChange = (ev: AccordionGroupCustomEvent) => {
    const nativeEl = listenerOut.current;
    if (!nativeEl) {
      return;
    }

    const collapsedItems = values.filter((value) => value !== ev.detail.value);
    const selectedValue = ev.detail.value;

    nativeEl.innerText = `
      展开项：${selectedValue === undefined ? '无' : ev.detail.value}
      折叠项：${collapsedItems.join(', ')}
    `;
  };

  return (
    <>
      <IonAccordionGroup onIonChange={accordionGroupChange}>
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel>第一个折叠面板</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            第一个内容区
          </div>
        </IonAccordion>
        <IonAccordion value="second">
          <IonItem slot="header" color="light">
            <IonLabel>第二个折叠面板</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            第二个内容区
          </div>
        </IonAccordion>
        <IonAccordion value="third">
          <IonItem slot="header" color="light">
            <IonLabel>第三个折叠面板</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            第三个内容区
          </div>
        </IonAccordion>
      </IonAccordionGroup>
      <p ref={listenerOut}></p>
    </>
  );
}
export default Example;
```