```tsx
import React from 'react';
import { IonButton, useIonLoading } from '@ionic/react';
function Example() {
  return (
    <>
      <IonButton id="open-loading">显示加载</IonButton>
      <IonLoading trigger="open-loading" message="加载中..." duration={3000} spinner="circles" />
    </>
  );
}
export default Example;
```