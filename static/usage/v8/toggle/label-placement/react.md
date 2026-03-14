```tsx
import React from 'react';
import { IonToggle } from '@ionic/react';

function Example() {
  return (
    <>
      <IonToggle labelPlacement="start">标签在开头</IonToggle>
      <br />
      <br />
      <IonToggle labelPlacement="end">标签在末尾</IonToggle>
      <br />
      <br />
      <IonToggle labelPlacement="fixed">固定宽度标签</IonToggle>
      <br />
      <br />
      <IonToggle labelPlacement="stacked">堆叠标签</IonToggle>
    </>
  );
}
export default Example;
```