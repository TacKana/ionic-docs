```tsx
import React from 'react';
import { IonNote } from '@ionic/react';

function Example() {
  return (
    <>
      <IonNote>默认注释</IonNote>
      <IonNote color="primary">主色调注释</IonNote>
      <IonNote color="secondary">辅助色调注释</IonNote>
      <IonNote color="tertiary">第三色调注释</IonNote>
      <IonNote color="success">成功状态注释</IonNote>
      <IonNote color="warning">警告状态注释</IonNote>
      <IonNote color="danger">危险状态注释</IonNote>
      <IonNote color="light">浅色注释</IonNote>
      <IonNote color="medium">中等色注释</IonNote>
      <IonNote color="dark">深色注释</IonNote>
    </>
  );
}
export default Example;
```