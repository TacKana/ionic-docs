```ts
import { Component } from '@angular/core';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonItem, IonList, IonSelect, IonSelectOption],
})
export class ExampleComponent {
  handleChange(event: CustomEvent) {
    console.log('ionChange 事件触发，值为: ' + event.detail.value);
  }

  handleCancel() {
    console.log('ionCancel 事件触发');
  }

  handleDismiss() {
    console.log('ionDismiss 事件触发');
  }
}
```