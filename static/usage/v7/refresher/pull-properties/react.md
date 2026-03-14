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

function Example() {
  function handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      // 这里放置加载数据的调用
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
        <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <p>向下拉动此内容以触发刷新。</p>
      </IonContent>
    </>
  );
}
export default Example;
```