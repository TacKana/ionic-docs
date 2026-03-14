```ts
import { Component } from '@angular/core';
import { IonButton, ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton],
})
export class ExampleComponent {
  constructor(private toastController: ToastController) {}

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: '你好，世界！',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
```