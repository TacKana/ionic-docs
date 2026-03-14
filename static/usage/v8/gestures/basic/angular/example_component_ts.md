```ts
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { GestureController, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle } from '@ionic/angular/standalone';
import type { GestureDetail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle],
})
export class ExampleComponent {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  @ViewChild('debug', { read: ElementRef }) debug!: ElementRef<HTMLParagraphElement>;

  isCardActive = false;

  constructor(private el: ElementRef, private gestureCtrl: GestureController, private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const gesture = this.gestureCtrl.create({
      el: this.el.nativeElement.closest('ion-content'),
      onStart: () => this.onStart(),
      onMove: (detail) => this.onMove(detail),
      onEnd: () => this.onEnd(),
      gestureName: 'example',
    });

    gesture.enable();
  }

  private onStart() {
    this.isCardActive = true;
    this.cdRef.detectChanges();
  }

  private onMove(detail: GestureDetail) {
    const { type, currentX, deltaX, velocityX } = detail;
    this.debug.nativeElement.innerHTML = `
      <div>类型: ${type}</div>
      <div>当前 X 坐标: ${currentX}</div>
      <div>X 轴偏移量: ${deltaX}</div>
      <div>X 轴速度: ${velocityX}</div>`;
  }

  private onEnd() {
    this.isCardActive = false;
    this.cdRef.detectChanges();
  }
}
```