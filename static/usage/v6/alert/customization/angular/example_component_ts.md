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
      header: '确认操作', // 翻译提示标题
      cssClass: 'custom-alert',
      buttons: [
        {
          text: '取消', // 翻译取消按钮
          cssClass: 'alert-button-cancel',
        },
        {
          text: '确定', // 翻译确认按钮
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }
}
```