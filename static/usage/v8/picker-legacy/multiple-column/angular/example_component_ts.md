```ts
import { Component } from '@angular/core';
import { IonButton, IonPickerLegacy } from '@ionic/angular/standalone';

interface PickerValue {
  meat: {
    text: string;
    value: string;
  };
  veggies: {
    text: string;
    value: string;
  };
  crust: {
    text: string;
    value: string;
  };
}

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonPickerLegacy],
})
export class ExampleComponent {
  public pickerColumns = [
    {
      name: 'meat',
      options: [
        {
          text: '意大利辣香肠',
          value: 'pepperoni',
        },
        {
          text: '烟熏火腿',
          value: 'smoked-ham',
        },
        {
          text: '脆培根',
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
  ];

  public pickerButtons = [
    {
      text: '取消',
      role: 'cancel',
    },
    {
      text: '确认',
      handler: (value: PickerValue) => {
        console.log(`您选择了 ${value.crust.text} 披萨，配料为 ${value.meat.text} 和 ${value.veggies.text}`);
      },
    },
  ];
}
```