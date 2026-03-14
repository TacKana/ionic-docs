```tsx
import React from 'react';
import { IonButton, IonPickerLegacy } from '@ionic/react';

function Example() {
  return (
    <>
      <IonButton id="open-picker">打开</IonButton>
      <IonPickerLegacy
        trigger="open-picker"
        columns={[
          {
            name: 'meat',
            options: [
              {
                text: '意大利香肠',
                value: 'pepperoni',
              },
              {
                text: '烟熏火腿',
                value: 'smoked-ham',
              },
              {
                text: '酥脆培根',
                value: 'bacon',
              },
            ],
          },
          {
            name: 'veggies',
            options: [
              {
                text: '红洋葱',
                value: 'red-onion',
              },
              {
                text: '彩椒',
                value: 'peppers',
              },
              {
                text: '黑橄榄',
                value: 'black-olives',
              },
            ],
          },
          {
            name: 'crust',
            options: [
              {
                text: '平底锅式饼底',
                value: 'pan',
              },
              {
                text: '手抛饼底',
                value: 'hand-tossed',
              },
              {
                text: '芝心饼边',
                value: 'stuffed-crust',
              },
            ],
          },
        ]}
        buttons={[
          {
            text: '取消',
            role: 'cancel',
          },
          {
            text: '确认',
            handler: (value) => {
              console.log(`您选择了 ${value.crust.text} 披萨，配料为 ${value.meat.text} 和 ${value.veggies.text}`);
            },
          },
        ]}
      ></IonPickerLegacy>
    </>
  );
}

export default Example;
```