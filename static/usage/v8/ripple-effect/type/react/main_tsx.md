```tsx
import React from 'react';
import { IonRippleEffect } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <div className="wrapper">
      <b>点击任意形状查看涟漪效果</b>

      <div className="ion-activatable ripple-parent rounded-rectangle">
        有界波纹
        <IonRippleEffect></IonRippleEffect>
      </div>

      <div className="ion-activatable ripple-parent circle">
        无界波纹
        <IonRippleEffect type="unbounded"></IonRippleEffect>
      </div>
    </div>
  );
}
export default Example;
```