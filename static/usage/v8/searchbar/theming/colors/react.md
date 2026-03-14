```tsx
import React from 'react';
import { IonSearchbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonSearchbar placeholder="默认"></IonSearchbar>
      <IonSearchbar color="primary" placeholder="主要"></IonSearchbar>
      <IonSearchbar color="secondary" placeholder="次要"></IonSearchbar>
      <IonSearchbar color="tertiary" placeholder="第三"></IonSearchbar>
      <IonSearchbar color="success" placeholder="成功"></IonSearchbar>
      <IonSearchbar color="warning" placeholder="警告"></IonSearchbar>
      <IonSearchbar color="danger" placeholder="危险"></IonSearchbar>
      <IonSearchbar color="light" placeholder="浅色"></IonSearchbar>
      <IonSearchbar color="medium" placeholder="中性"></IonSearchbar>
      <IonSearchbar color="dark" placeholder="深色"></IonSearchbar>
    </>
  );
}
export default Example;
```