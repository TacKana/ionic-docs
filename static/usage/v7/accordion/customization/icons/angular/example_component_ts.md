```ts
import { Component } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { caretDownCircle } from 'ionicons/icons';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonAccordion, IonAccordionGroup, IonItem, IonLabel],
})
export class ExampleComponent {
  constructor() {
    /**
     * 应用中需要使用的图标
     * 可以在 app.component.ts 中注册，
     * 之后便可在应用的任何地方通过名称引用。
     */
    addIcons({ caretDownCircle });
  }
}
```