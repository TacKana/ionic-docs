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
  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '警告！',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = '警告已取消';
          },
        },
        {
          text: '确认',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = '警告已确认';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `以角色 ${role} 关闭`;
  }
}
```