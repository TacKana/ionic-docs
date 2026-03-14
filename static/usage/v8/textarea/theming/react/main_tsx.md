```tsx
import React from 'react';
import { IonTextarea } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonTextarea
      aria-label="Custom textarea"
      placeholder="在此输入内容"
      class="custom"
      helperText="辅助说明文本"
      counter={true}
      maxlength={100}
    ></IonTextarea>
  );
}
export default Example;
```