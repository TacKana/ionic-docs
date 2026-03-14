```tsx
import React from 'react';
import { IonChip } from '@ionic/react';
function Example() {
  return (
    <>
      <IonChip>默认</IonChip>
      <IonChip disabled={true}>禁用状态</IonChip>
      <IonChip outline={true}>轮廓样式</IonChip>
    </>
  );
}
export default Example;
```