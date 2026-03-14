```ts
import { Component, ViewEncapsulation } from '@angular/core';
import { IonDatetime } from '@ionic/angular/standalone';

// 此示例中关闭了 ViewEncapsulation，因为当前不支持样式化多个 CSS 影子部件
// 详见 https://github.com/angular/angular/issues/22515
@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [IonDatetime],
})
export class ExampleComponent {}
```