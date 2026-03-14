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
      header: '警告',
      subHeader: '重要消息',
      message: '这是一个警告提示！',
      buttons: ['确定'],
    });

    await alert.present();
  }
}
```