```ts
import { Component } from '@angular/core';
import { IonButton, IonPicker } from '@ionic/angular/standalone';

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
  imports: [IonButton, IonPicker],
})
export class ExampleComponent {
  // 定义选择器的列配置
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

  // 定义选择器的按钮配置
  public pickerButtons = [
    {
      text: '取消',
      role: 'cancel',
    },
    {
      text: '确认',
      handler: (value: PickerValue) => {
        console.log(`你选择了: ${value.languages.value}`);
      },
    },
  ];
}
```