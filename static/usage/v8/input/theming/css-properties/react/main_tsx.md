```tsx
import React from 'react';
import { IonInput } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonInput
      aria-label="自定义输入框"
      placeholder="自定义输入"
      class="custom"
      helperText="辅助说明文字"
      counter={true}
      maxlength={20}
    ></IonInput>
  );
}
export default Example;
```