```ts
import { Component } from '@angular/core';
import { IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonDatetime],
})
export class ExampleComponent {
  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * 只有当日期不是
     * 周日或周六时，才启用该日期
     */
    return utcDay !== 0 && utcDay !== 6;
  };
}
```