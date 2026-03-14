```tsx
import React from 'react';
import { IonChip } from '@ionic/react';
function Example() {
  return (
    <>
      <IonChip>默认</IonChip>
      <IonChip color="primary">主色</IonChip>
      <IonChip color="secondary">辅色</IonChip>
      <IonChip color="tertiary">第三色</IonChip>
      <IonChip color="success">成功</IonChip>
      <IonChip color="warning">警告</IonChip>
      <IonChip color="danger">危险</IonChip>
      <IonChip color="light">浅色</IonChip>
      <IonChip color="medium">中等</IonChip>
      <IonChip color="dark">深色</IonChip>
    </>
  );
}
export default Example;
```