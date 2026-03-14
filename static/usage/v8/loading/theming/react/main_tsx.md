```tsx
import React from 'react';
import { IonButton, IonLoading } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonButton id="open-loading">显示加载中</IonButton>
      <IonLoading className="custom-loading" trigger="open-loading" message="加载中" duration={3000} />
    </>
  );
}
export default Example;
```