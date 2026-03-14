```tsx
import React from 'react';
import { IonDatetime } from '@ionic/react';
function Example() {
  const isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * 只有当日期不是
     * 周日或周六时，该日期才会被启用
     */
    return utcDay !== 0 && utcDay !== 6;
  };

  return <IonDatetime isDateEnabled={isWeekday}></IonDatetime>;
}
export default Example;
```