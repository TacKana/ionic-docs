```tsx
import React from 'react';
import { IonCol, IonGrid, IonInput, IonRow } from '@ionic/react';

import './main.css';

function Example() {
  return (
    <>
      <b>
        第一列的 <code>size</code> 设置为 <code>"auto"</code>
      </b>
      <IonGrid>
        <IonRow>
          <IonCol size="auto">1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
        </IonRow>
      </IonGrid>

      <b>
        第三列包含一个输入框，其 <code>size</code> 设置为 <code>"auto"</code>
      </b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol size="auto">
            <IonInput placeholder="3"></IonInput>
          </IonCol>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
        </IonRow>
      </IonGrid>

      <b>
        第二列的 <code>size</code> 设置为 <code>"auto"</code> 并定义了宽度
      </b>
      <IonGrid>
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol size="auto">
            <div style={{ width: '150px' }}>2</div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}
export default Example;
```