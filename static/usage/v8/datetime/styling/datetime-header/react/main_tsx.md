```tsx
import React from 'react';
import { IonDatetime } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonDatetime presentation="date">
        <span slot="title">选择日期</span>
      </IonDatetime>
    </>
  );
}
export default Example;
```