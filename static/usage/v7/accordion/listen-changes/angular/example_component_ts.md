```ts
import { Component } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonAccordion, IonAccordionGroup, IonItem, IonLabel],
})
export class ExampleComponent {
  private values: string[] = ['first', 'second', 'third'];

  accordionGroupChange = (event: CustomEvent) => {
    const collapsedItems = this.values.filter((value) => value !== event.detail.value);
    const selectedValue = event.detail.value;

    console.log(
      `展开的项目: ${selectedValue === undefined ? '无' : event.detail.value} | 折叠的项目: ${collapsedItems.join(', ')}`
    );
  };
}
```