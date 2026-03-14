```ts
import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '选择你最喜欢的颜色',
      buttons: ['确认'],
      inputs: [
        {
          label: '红色',
          type: 'radio',
          value: 'red',
        },
        {
          label: '蓝色',
          type: 'radio',
          value: 'blue',
        },
        {
          label: '绿色',
          type: 'radio',
          value: 'green',
        },
      ],
    });

    await alert.present();
  }
}
```