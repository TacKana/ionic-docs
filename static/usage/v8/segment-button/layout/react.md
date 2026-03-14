```tsx
import React from 'react';
import { IonIcon, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import { call, heart, pin } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonSegment value="heart">
        <IonSegmentButton value="call">
          <IonIcon icon={call}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="heart">
          <IonIcon icon={heart}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="pin">
          <IonIcon icon={pin}></IonIcon>
        </IonSegmentButton>
      </IonSegment>

      <IonSegment value="heart">
        <IonSegmentButton value="call">
          <IonLabel>呼叫</IonLabel>
          <IonIcon icon={call}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="heart">
          <IonLabel>收藏</IonLabel>
          <IonIcon icon={heart}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="pin">
          <IonLabel>标记</IonLabel>
          <IonIcon icon={pin}></IonIcon>
        </IonSegmentButton>
      </IonSegment>

      <IonSegment value="heart">
        <IonSegmentButton value="call" layout="icon-bottom">
          <IonLabel>呼叫</IonLabel>
          <IonIcon icon={call}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="heart" layout="icon-bottom">
          <IonLabel>收藏</IonLabel>
          <IonIcon icon={heart}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="pin" layout="icon-bottom">
          <IonLabel>标记</IonLabel>
          <IonIcon icon={pin}></IonIcon>
        </IonSegmentButton>
      </IonSegment>

      <IonSegment value="heart">
        <IonSegmentButton value="call" layout="icon-start">
          <IonLabel>呼叫</IonLabel>
          <IonIcon icon={call}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="heart" layout="icon-start">
          <IonLabel>收藏</IonLabel>
          <IonIcon icon={heart}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="pin" layout="icon-start">
          <IonLabel>标记</IonLabel>
          <IonIcon icon={pin}></IonIcon>
        </IonSegmentButton>
      </IonSegment>

      <IonSegment value="heart">
        <IonSegmentButton value="call" layout="icon-end">
          <IonLabel>呼叫</IonLabel>
          <IonIcon icon={call}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="heart" layout="icon-end">
          <IonLabel>收藏</IonLabel>
          <IonIcon icon={heart}></IonIcon>
        </IonSegmentButton>
        <IonSegmentButton value="pin" layout="icon-end">
          <IonLabel>标记</IonLabel>
          <IonIcon icon={pin}></IonIcon>
        </IonSegmentButton>
      </IonSegment>
    </>
  );
}
export default Example;
```