```ts
import { Component } from '@angular/core';
import { AlertController, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton],
})
export class ExampleComponent {
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '标题宜简短',
      subHeader: '子标题为可选',
      message: '消息应为简短、完整的句子。',
      buttons: ['操作'],
    });

    await alert.present();
  }
}
```