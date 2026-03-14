```tsx
import React from 'react';
import { IonRange } from '@ionic/react';
function Example() {
  return (
    <>
      <IonRange labelPlacement="start" label="起始位置标签"></IonRange>

      <br />

      <IonRange labelPlacement="end" label="结束位置标签"></IonRange>

      <br />

      <IonRange labelPlacement="fixed" label="固定宽度标签"></IonRange>

      <br />

      <IonRange labelPlacement="stacked" label="堆叠标签"></IonRange>
    </>
  );
}
export default Example;
```