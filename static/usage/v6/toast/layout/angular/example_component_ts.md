```ts
import { Component } from '@angular/core';
import { IonicModule, ToastController, ToastOptions } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [IonicModule],
  standalone: true,
})
export class ExampleComponent {
  constructor(private toastController: ToastController) {}

  async presentToast(opts: ToastOptions) {
    const toast = await this.toastController.create(opts);

    await toast.present();
  }

  async presentBaselineToast() {
    await this.presentToast({
      duration: 3000,
      message: '这是一个带有长消息和按钮的提示框，按钮与消息显示在同一行。',
      buttons: [{ text: '操作按钮文字较长' }],
    });
  }

  async presentStackedToast() {
    await this.presentToast({
      duration: 3000,
      message: '这是一个带有长消息和按钮的提示框，按钮显示在消息的下一行。',
      buttons: [{ text: '操作按钮文字较长' }],
      layout: 'stacked',
    });
  }
}
```