```tsx
import React from 'react';
import { IonCheckbox } from '@ionic/react';

function Example() {
  return (
    <>
      <IonCheckbox labelPlacement="start">标签置于起始位置</IonCheckbox>

      <br />

      <IonCheckbox labelPlacement="end">标签置于末尾位置</IonCheckbox>

      <br />

      <IonCheckbox labelPlacement="fixed">固定宽度标签</IonCheckbox>

      <br />

      <IonCheckbox labelPlacement="stacked">堆叠标签</IonCheckbox>
    </>
  );
}
export default Example;
```