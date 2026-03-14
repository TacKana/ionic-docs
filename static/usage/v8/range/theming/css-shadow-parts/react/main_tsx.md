```tsx
import React from 'react';
import { IonRange } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <h2>单旋钮</h2>
      <IonRange
        id="range-single"
        aria-label="自定义范围"
        min={0}
        max={10}
        value={5}
        pin={true}
        ticks={true}
        snaps={true}
      ></IonRange>

      <h2>双旋钮（A/B）</h2>
      <IonRange
        id="range-a-b"
        aria-label="采用 A/B 样式的自定义双旋钮范围"
        min={0}
        max={10}
        value={{ lower: 3, upper: 7 }}
        dualKnobs={true}
        pin={true}
      ></IonRange>

      <h2>双旋钮（下限/上限）</h2>
      <IonRange
        id="range-lower-upper"
        aria-label="采用下限/上限样式的自定义双旋钮范围"
        min={0}
        max={10}
        value={{ lower: 3, upper: 7 }}
        dualKnobs={true}
        pin={true}
      ></IonRange>
    </>
  );
}

export default Example;
```