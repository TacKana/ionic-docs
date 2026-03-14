```tsx
import React from 'react';
import { IonSearchbar } from '@ionic/react';
import { trash } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonSearchbar showCancelButton="focus" placeholder="获得焦点时显示"></IonSearchbar>
      <IonSearchbar showCancelButton="always" placeholder="始终显示"></IonSearchbar>
      <IonSearchbar showCancelButton="never" placeholder="从不显示"></IonSearchbar>
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