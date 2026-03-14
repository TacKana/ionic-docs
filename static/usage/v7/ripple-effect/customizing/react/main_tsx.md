```tsx
import React from 'react';
import { IonRippleEffect } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <div className="wrapper">
      <b>点击任意形状查看波纹效果</b>

      <div className="ion-activatable ripple-parent custom-parent">
        自定义父元素颜色
        <IonRippleEffect></IonRippleEffect>
      </div>

      <div className="ion-activatable ripple-parent">
        自定义波纹颜色
        <IonRippleEffect className="custom-ripple"></IonRippleEffect>
      </div>
    </div>
  );
}
export default Example;
```