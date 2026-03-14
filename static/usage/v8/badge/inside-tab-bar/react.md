```tsx
import React from 'react';
import { IonBadge, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { heart, calendar, musicalNote } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonTabBar color="light">
        <IonTabButton tab="tab1">
          <IonIcon icon={heart} />
          <IonLabel>收藏</IonLabel>
          <IonBadge color="danger"></IonBadge>
        </IonTabButton>
        <IonTabButton tab="tab2">
          <IonIcon icon={musicalNote} />
          <IonLabel>音乐</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3">
          <IonIcon icon={calendar} />
          <IonLabel>日历</IonLabel>
          <IonBadge color="danger">47</IonBadge>
        </IonTabButton>
      </IonTabBar>
    </>
  );
}
export default Example;
```