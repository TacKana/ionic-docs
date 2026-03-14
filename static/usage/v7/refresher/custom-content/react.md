```tsx
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
} from '@ionic/react';
import { chevronDownCircleOutline } from 'ionicons/icons';

function Example() {
  function handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      // 加载数据的操作写在这里
      event.detail.complete();
    }, 2000);
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>下拉刷新</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent
            pullingIcon={chevronDownCircleOutline}
            pullingText="下拉刷新"
            refreshingSpinner="circles"
            refreshingText="刷新中..."
          ></IonRefresherContent>
        </IonRefresher>

        <p>向下拉动此内容来触发刷新。</p>
      </IonContent>
    </>
  );
}
export default Example;
```