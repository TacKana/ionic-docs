```ts
import { Component } from '@angular/core';
import { IonAlert, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonAlert, IonButton],
})
export class ExampleComponent {
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      label: '红色',
      type: 'radio',
      value: 'red',
    },
    {
      label: '蓝色',
      type: 'radio',
      value: 'blue',
    },
    {
      label: '绿色',
      type: 'radio',
      value: 'green',
    },
  ];
}
```