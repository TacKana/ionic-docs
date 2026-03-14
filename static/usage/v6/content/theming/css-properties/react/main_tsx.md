```tsx
import React from 'react';
import { IonContent } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <IonContent className="ion-padding">
      <h1>一级标题</h1>
      <h2>二级标题</h2>
      <h3>三级标题</h3>
      <h4>四级标题</h4>
      <h5>五级标题</h5>
      <h6>六级标题</h6>

      <p>这里是一段关于内容的简短文字描述。不多不少，恰到好处。</p>
    </IonContent>
  );
}
export default Example;
```