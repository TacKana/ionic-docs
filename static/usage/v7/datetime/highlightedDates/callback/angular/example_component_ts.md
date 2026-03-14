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
  highlightedDates = (isoString: string) => {
    const date = new Date(isoString);
    const utcDay = date.getUTCDate();

    // 如果日期能被 5 整除，应用第一种样式
    if (utcDay % 5 === 0) {
      return {
        textColor: '#800080',
        backgroundColor: '#ffc0cb',
      };
    }

    // 如果日期能被 3 整除，应用第二种样式
    if (utcDay % 3 === 0) {
      return {
        textColor: 'var(--ion-color-secondary-contrast)',
        backgroundColor: 'var(--ion-color-secondary)',
      };
    }

    return undefined;
  };
}
```