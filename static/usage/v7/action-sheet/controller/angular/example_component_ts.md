```ts
import { Component } from '@angular/core';
import { ActionSheetController, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton],
})
export class ExampleComponent {
  constructor(private actionSheetCtrl: ActionSheetController) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '操作',
      buttons: [
        {
          text: '删除',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: '分享',
          data: {
            action: 'share',
          },
        },
        {
          text: '取消',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
```