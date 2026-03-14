```tsx
import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonSegment value="first">
        <IonSegmentButton value="first" contentId="first">
          <IonLabel>第一项</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="second" contentId="second">
          <IonLabel>第二项</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="third" contentId="third">
          <IonLabel>第三项</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegmentView>
        <IonSegmentContent id="first">第一项内容</IonSegmentContent>
        <IonSegmentContent id="second">第二项内容</IonSegmentContent>
        <IonSegmentContent id="third">第三项内容</IonSegmentContent>
      </IonSegmentView>
    </>
  );
}
export default Example;
```