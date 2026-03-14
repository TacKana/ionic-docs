```tsx
import React from 'react';
import { IonBadge, IonItem, IonLabel, IonList } from '@ionic/react';
function Example() {
  return (
    <IonList>
      <IonItem>
        <IonLabel>关注者</IonLabel>
        <IonBadge color="primary">22k</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>点赞数</IonLabel>
        <IonBadge color="secondary">118k</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>收藏数</IonLabel>
        <IonBadge color="tertiary">34k</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>已完成</IonLabel>
        <IonBadge color="success">80</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>警告</IonLabel>
        <IonBadge color="warning">70</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>通知</IonLabel>
        <IonBadge color="danger">1000</IonBadge>
      </IonItem>
    </IonList>
  );
}
export default Example;
```