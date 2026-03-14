```tsx
import React from 'react';
import { IonToggle } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <IonToggle aria-label="启用通知"></IonToggle>
      <IonToggle checked={true} aria-label="启用通知"></IonToggle>
    </>
  );
}
export default Example;
```