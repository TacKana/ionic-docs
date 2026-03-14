```tsx
import React from 'react';
import { IonSearchbar } from '@ionic/react';
import { searchCircle } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonSearchbar></IonSearchbar>
      <IonSearchbar searchIcon={searchCircle} placeholder="自定义搜索图标"></IonSearchbar>
    </>
  );
}
export default Example;
```