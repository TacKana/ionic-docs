```tsx
import React from 'react';
import { IonNote } from '@ionic/react';

function Example() {
  return (
    <>
      <IonNote>默认注释</IonNote>
      <IonNote color="primary">主要注释</IonNote>
      <IonNote color="secondary">次要注释</IonNote>
      <IonNote color="tertiary">第三级注释</IonNote>
      <IonNote color="success">成功注释</IonNote>
      <IonNote color="warning">警告注释</IonNote>
      <IonNote color="danger">危险注释</IonNote>
      <IonNote color="light">浅色注释</IonNote>
      <IonNote color="medium">中等注释</IonNote>
      <IonNote color="dark">深色注释</IonNote>
    </>
  );
}
export default Example;
```