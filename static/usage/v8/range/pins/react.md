```tsx
import React from 'react';
import { IonRange } from '@ionic/react';
function Example() {
  return <IonRange aria-label="带数值提示的范围滑块" pin={true} pinFormatter={(value: number) => `${value}%`}></IonRange>;
}
export default Example;
```