```tsx
import React from 'react';
import { IonTextarea } from '@ionic/react';
function Example() {
  return (
    <IonTextarea
      placeholder="输入文本，离开文本区域，返回后再输入以清除内容"
      clearOnEdit={true}
    ></IonTextarea>
  );
}
export default Example;
```