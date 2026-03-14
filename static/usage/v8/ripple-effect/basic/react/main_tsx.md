```tsx
import React from 'react';
import { IonRippleEffect } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <div className="wrapper">
      <b>点击任意形状查看涟漪效果</b>

      <div className="ion-activatable ripple-parent rectangle">
        <IonRippleEffect></IonRippleEffect>
      </div>

      <div className="ion-activatable ripple-parent rounded-rectangle">
        <IonRippleEffect></IonRippleEffect>
      </div>

      <div className="ion-activatable ripple-parent circle">
        <IonRippleEffect></IonRippleEffect>
      </div>
    </div>
  );
}
export default Example;
```