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
      header: '请输入您的信息',
      buttons: ['确定'],
      inputs: [
        {
          placeholder: '姓名',
        },
        {
          placeholder: '昵称（最多8个字符）',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: '年龄',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: '关于您自己的一些介绍',
        },
      ],
    });

    await alert.present();
  }
}
```