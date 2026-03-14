```tsx
import React from 'react';
import { IonDatetime } from '@ionic/react';
function Example() {
  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * 如果日期不是周日或周六，则启用该日期
     */
    return utcDay !== 0 && utcDay !== 6;
  };

  return <IonDatetime isDateEnabled={isWeekday}></IonDatetime>;
}
export default Example;
```