```tsx
import React, { useState } from 'react';
import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  IonRefresher,
  IonRefresherContent,
  RefresherCustomEvent,
  RefresherPullEndCustomEvent,
} from '@ionic/react';

interface TodoItem {
  label: string;
  checked: boolean;
  disabled: boolean;
}

function Example() {
  const [items, setItems] = useState<TodoItem[]>([
    { label: 'Finalize Q1 budget proposal', checked: false, disabled: false },
    { label: 'Review design mockups', checked: true, disabled: false },
    { label: 'Sync with engineering on API docs', checked: true, disabled: false },
    { label: 'Approve PTO requests for March', checked: false, disabled: false },
    { label: 'Draft monthly newsletter', checked: false, disabled: false },
  ]);

  function handlePullStart() {
    console.log('下拉刷新开始');

    // 下拉开始时禁用所有复选框
    setItems((prev) => prev.map((item) => ({ ...item, disabled: true })));
  }

  function handlePullEnd(event: RefresherPullEndCustomEvent) {
    console.log('下拉结束，原因: "' + event.detail.reason + '"');

    // 下拉结束时重新启用所有复选框
    setItems((prev) => prev.map((item) => ({ ...item, disabled: false })));
  }

  function handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      // 在此处添加加载数据的调用
      event.target.complete();
      console.log('刷新完成');
    }, 2000);
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>下拉刷新</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding">
        <IonRefresher
          id="refresher"
          slot="fixed"
          onIonPullStart={handlePullStart}
          onIonPullEnd={handlePullEnd}
          onIonRefresh={handleRefresh}
        >
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <p>向下拉动此内容以触发刷新。</p>

        <IonList lines="full">
          {items.map((item: TodoItem) => (
            <IonItem key={item.label}>
              <IonCheckbox slot="start" checked={item.checked} disabled={item.disabled}></IonCheckbox>
              <IonLabel>{item.label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </>
  );
}

export default Example;
```