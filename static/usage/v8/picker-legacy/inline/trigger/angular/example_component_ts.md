```ts
import { Component } from '@angular/core';
import { IonButton, IonPickerLegacy } from '@ionic/angular/standalone';

interface PickerValue {
  languages: {
    text: string;
    value: string;
  };
}

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonPickerLegacy],
})
export class ExampleComponent {
  public pickerColumns = [
    {
      name: 'languages',
      options: [
        {
          text: 'JavaScript',
          value: 'javascript',
        },
        {
          text: 'TypeScript',
          value: 'typescript',
        },
        {
          text: 'Rust',
          value: 'rust',
        },
        {
          text: 'C#',
          value: 'c#',
        },
      ],
    },
  ];

  public pickerButtons = [
    {
      text: '取消',
      role: 'cancel',
    },
    {
      text: '确认',
      handler: (value: PickerValue) => {
        console.log(`您选择了: ${value.languages.value}`);
      },
    },
  ];
}
```