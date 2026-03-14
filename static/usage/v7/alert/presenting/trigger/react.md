```tsx
import React from 'react';
import { IonAlert, IonButton } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="present-alert">点击我</IonButton>
      <IonAlert
        trigger="present-alert"
        header="简短的标题最为合适"
        subHeader="副标题为可选"
        message="消息内容应简短且语句完整。"
        buttons={['操作']}
      ></IonAlert>
    </>
  );
}
export default Example;
```