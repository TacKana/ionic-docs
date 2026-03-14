```tsx
import React from 'react';
import { IonAlert, IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="present-alert">点击我</IonButton>
      <IonAlert
        trigger="present-alert"
        header="简洁的标题最佳"
        subHeader="子标题为可选"
        message="消息应简短且表达完整。"
        buttons={['操作']}
      ></IonAlert>
    </>
  );
}
export default Example;
```