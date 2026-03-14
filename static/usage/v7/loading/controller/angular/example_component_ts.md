```ts
import { Component } from '@angular/core';
import { IonButton, LoadingController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton],
})
export class ExampleComponent {
  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: '三秒后自动关闭...',
      duration: 3000,
    });

    loading.present();
  }
}
```