```tsx
import React from 'react';
import { IonSearchbar } from '@ionic/react';
import { trash } from 'ionicons/icons';

function Example() {
  return (
    <>
      {/* 聚焦时显示取消按钮 */}
      <IonSearchbar showCancelButton="focus" placeholder="聚焦时显示"></IonSearchbar>
      {/* 始终显示取消按钮 */}
      <IonSearchbar showCancelButton="always" placeholder="始终显示"></IonSearchbar>
      {/* 永不显示取消按钮 */}
      <IonSearchbar showCancelButton="never" placeholder="永不显示"></IonSearchbar>
      {/* 自定义取消按钮 */}
      <IonSearchbar
        showCancelButton="always"
        cancelButtonText="自定义取消"
        cancelButtonIcon={trash}
        placeholder="自定义取消按钮"
      ></IonSearchbar>
    </>
  );
}
export default Example;
```