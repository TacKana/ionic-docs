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
      message: 'Hello World!', // 保持原文不变，因为这是代码中的字符串值
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}
```