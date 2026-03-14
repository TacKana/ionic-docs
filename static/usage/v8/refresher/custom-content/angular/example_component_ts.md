```ts
import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonContent, IonHeader, IonRefresher, IonRefresherContent, IonTitle, IonToolbar],
})
export class ExampleComponent {
  handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      // 所有加载数据的调用都应放在这里
      event.target.complete();
    }, 2000);
  }
}
```