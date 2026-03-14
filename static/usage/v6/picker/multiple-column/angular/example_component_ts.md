```ts
import { Component } from '@angular/core';
import { IonicModule, PickerController } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  constructor(private pickerCtrl: PickerController) {}

  async openPicker() {
    const picker = await this.pickerCtrl.create({
      columns: [
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
              text: '香脆培根',
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
              text: '芝心饼底',
              value: 'stuffed-crust',
            },
          ],
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
        },
        {
          text: '确认',
          handler: (value) => {
            window.alert(`您选择了 ${value.crust.text} 披萨，配料为 ${value.meat.text} 和 ${value.veggies.text}`);
          },
        },
      ],
    });

    await picker.present();
  }
}
```