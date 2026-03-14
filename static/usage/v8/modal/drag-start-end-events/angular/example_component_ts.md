```ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import type { ModalDragEventDetail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonLabel, IonModal, IonTitle, IonToolbar],
})
export class ExampleComponent {
  @ViewChild('header', { read: ElementRef })
  header!: ElementRef<HTMLIonHeaderElement>;

  onDragStart() {
    console.log('拖拽开始');

    const headerEl = this.header.nativeElement;

    headerEl.style.opacity = '0';
  }

  onDragEnd(event: CustomEvent<ModalDragEventDetail>) {
    console.log('拖拽结束');

    const headerEl = this.header.nativeElement;

    headerEl.style.opacity = '1';
  }
}
```