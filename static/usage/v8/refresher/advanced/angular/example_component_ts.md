```ts
import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherCustomEvent,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { ellipse } from 'ionicons/icons';

interface Item {
  name: string;
  unread: boolean;
}

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['./example.component.css'],
  imports: [
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
  ],
})
export class ExampleComponent {
  public names = [
    'Burt Bear',
    'Charlie Cheetah',
    'Donald Duck',
    'Eva Eagle',
    'Ellie Elephant',
    'Gino Giraffe',
    'Isabella Iguana',
    'Karl Kitten',
    'Lionel Lion',
    'Molly Mouse',
    'Paul Puppy',
    'Rachel Rabbit',
    'Ted Turtle',
  ];
  public items: Item[] = [];

  constructor() {
    /**
     * 应用中需要使用的所有图标
     * 都可以在 app.component.ts 中注册，
     * 然后即可在应用的任何地方通过名称引用。
     */
    addIcons({ ellipse });
  }

  ngOnInit() {
    this.addItems(5);
  }

  chooseRandomName() {
    return this.names[Math.floor(Math.random() * this.names.length)];
  }

  addItems(count: number, unread = false) {
    for (let i = 0; i < count; i++) {
      this.items.unshift({
        name: this.chooseRandomName(),
        unread: unread,
      });
    }
  }

  handleRefresh(event: RefresherCustomEvent) {
    setTimeout(() => {
      this.addItems(3, true);
      event.target.complete();
    }, 2000);
  }
}
```