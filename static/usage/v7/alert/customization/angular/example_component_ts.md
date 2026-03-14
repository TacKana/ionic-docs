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
  public alertButtons = [
    {
      text: '否',
      cssClass: 'alert-button-cancel',
    },
    {
      text: '是',
      cssClass: 'alert-button-confirm',
    },
  ];
}
```