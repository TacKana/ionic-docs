```ts
import { Component } from '@angular/core';
import { IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html', // 组件模板文件路径
  styleUrls: ['example.component.css'], // 组件样式文件路径
  imports: [IonToggle], // 导入的独立组件
})
export class ExampleComponent {} // 示例组件类
```