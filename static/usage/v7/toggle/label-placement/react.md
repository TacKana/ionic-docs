```tsx
import React from 'react';
import { IonToggle } from '@ionic/react';

function Example() {
  return (
    <>
      <IonToggle labelPlacement="start">标签置于起始位置</IonToggle>
      <br />
      <br />
      <IonToggle labelPlacement="end">标签置于末尾</IonToggle>
      <br />
      <br />
      <IonToggle labelPlacement="fixed">固定宽度的标签</IonToggle>
      <br />
      <br />
      <IonToggle labelPlacement="stacked">堆叠式标签</IonToggle>
    </>
  );
}
export default Example;
```