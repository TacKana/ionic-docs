```tsx
import React from 'react';
import { IonSearchbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonSearchbar placeholder="默认"></IonSearchbar>
      <IonSearchbar color="primary" placeholder="主色"></IonSearchbar>
      <IonSearchbar color="secondary" placeholder="次色"></IonSearchbar>
      <IonSearchbar color="tertiary" placeholder="第三色"></IonSearchbar>
      <IonSearchbar color="success" placeholder="成功状态"></IonSearchbar>
      <IonSearchbar color="warning" placeholder="警告状态"></IonSearchbar>
      <IonSearchbar color="danger" placeholder="危险状态"></IonSearchbar>
      <IonSearchbar color="light" placeholder="浅色主题"></IonSearchbar>
      <IonSearchbar color="medium" placeholder="中等色调"></IonSearchbar>
      <IonSearchbar color="dark" placeholder="深色主题"></IonSearchbar>
    </>
  );
}
export default Example;
```