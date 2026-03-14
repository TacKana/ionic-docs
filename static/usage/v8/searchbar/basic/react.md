```tsx
import React from 'react';
import { IonSearchbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonSearchbar></IonSearchbar>
      <IonSearchbar placeholder="自定义占位符"></IonSearchbar>
      <IonSearchbar disabled={true} placeholder="已禁用"></IonSearchbar>
      <IonSearchbar value="已输入的值"></IonSearchbar>
      <IonSearchbar animated={true} placeholder="带动画效果"></IonSearchbar>
    </>
  );
}
export default Example;
```