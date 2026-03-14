```tsx
import React from 'react';
import { IonButton, IonLoading } from '@ionic/react';
function Example() {
  return (
    <>
      <IonButton id="open-loading">显示加载中</IonButton>
      <IonLoading trigger="open-loading" message="3秒后关闭..." duration={3000} />
    </>
  );
}
export default Example;
```