```tsx
import React from 'react';
import { IonRange, IonText } from '@ionic/react';
function Example() {
  return (
    <IonRange>
      <div slot="label">
        标签包含 <IonText color="primary">自定义 HTML</IonText>
      </div>
    </IonRange>
  );
}
export default Example;
```