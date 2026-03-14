```tsx
import React from 'react';
import { IonSearchbar } from '@ionic/react';

function Example() {
  return (
    <>
      <IonSearchbar></IonSearchbar>
      <IonSearchbar placeholder="自定义占位文本"></IonSearchbar>
      <IonSearchbar disabled={true} placeholder="禁用状态"></IonSearchbar>
      <IonSearchbar value="预设值"></IonSearchbar>
      <IonSearchbar animated={true} placeholder="带动画效果"></IonSearchbar>
    </>
  );
}
export default Example;
```