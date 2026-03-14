```ts
import { Component } from '@angular/core';
import { IonButton, IonToast } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonToast],
})
export class ExampleComponent {
  public toastButtons = [
    {
      text: '更多信息',
      role: 'info',
      handler: () => {
        console.log('点击了“更多信息”');
      },
    },
    {
      text: '关闭',
      role: 'cancel',
      handler: () => {
        console.log('点击了“关闭”');
      },
    },
  ];

  setRoleMessage(event: CustomEvent) {
    const { role } = event.detail;
    console.log(`以角色 ${role} 关闭`);
  }
}
```