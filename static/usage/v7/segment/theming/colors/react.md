```tsx
import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonSegment value="default">
        <IonSegmentButton value="default">
          <IonLabel>默认</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>分段</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="primary" value="primary">
        <IonSegmentButton value="primary">
          <IonLabel>主要</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>分段</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="secondary" value="secondary">
        <IonSegmentButton value="secondary">
          <IonLabel>次要</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>分段</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="tertiary" value="tertiary">
        <IonSegmentButton value="tertiary">
          <IonLabel>三级</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>分段</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="success" value="success">
        <IonSegmentButton value="success">
          <IonLabel>成功</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>分段</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="warning" value="warning">
        <IonSegmentButton value="warning">
          <IonLabel>警告</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>分段</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="danger" value="danger">
        <IonSegmentButton value="danger">
          <IonLabel>危险</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>分段</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="light" value="light">
        <IonSegmentButton value="light">
          <IonLabel>浅色</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>分段</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="medium" value="medium">
        <IonSegmentButton value="medium">
          <IonLabel>中等</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>分段</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonSegment color="dark" value="dark">
        <IonSegmentButton value="dark">
          <IonLabel>深色</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>分段</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </>
  );
}
export default Example;
```