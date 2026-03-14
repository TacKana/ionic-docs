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

import './main.css';

function Example() {
  function handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      // 此处添加加载数据的调用
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

      <IonContent scrollY={false}>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <div className="ion-content-scroll-host ion-padding">
          <p>向下拉动此内容以触发刷新。</p>
        </div>
      </IonContent>
    </>
  );
}
export default Example;
```