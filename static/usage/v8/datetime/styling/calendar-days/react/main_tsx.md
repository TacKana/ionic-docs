```tsx
import React, { useEffect, useState } from 'react';
import { IonDatetime } from '@ionic/react';

import './main.css';

function Example() {
  const [datetime, setDatetime] = useState<string | null>(null);

  useEffect(() => {
    const date = new Date();

    // 将日期选择器的值设置为当前日期的前两天
    let dayChange = -2;

    // 如果设置后的日期会进入上个月
    // 则改为向后推两天，以确保日期保持在同一个月内
    if (date.getDate() + dayChange <= 0) {
      dayChange = -dayChange;
    }

    // 将日期选择器的值设置为上面计算出的日期
    date.setDate(date.getDate() + dayChange);
    setDatetime(date.toISOString());
  }, []);

  return <IonDatetime presentation="date" value={datetime}></IonDatetime>;
}
export default Example;
```