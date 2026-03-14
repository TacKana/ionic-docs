```ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationController, GestureController, IonCard, IonCardContent } from '@ionic/angular/standalone';
import type { Animation, Gesture, GestureDetail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonCard, IonCardContent],
})
export class ExampleComponent {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;
  private gesture!: Gesture;
  private started = false;
  private initialStep = 0;

  /**
   * 轨道宽度为 344px。
   * 卡片宽度为 100px。
   * 我们希望在轨道的两端各有 16px 的边距。
   */
  private readonly MAX_TRANSLATE = 344 - 100 - 32;

  constructor(private animationCtrl: AnimationController, private gestureCtrl: GestureController) {}

  private onMove(event: GestureDetail) {
    if (!this.started) {
      this.animation.progressStart();
      this.started = true;
    }

    this.animation.progressStep(this.getStep(event));
  }

  private onEnd(event: GestureDetail) {
    if (!this.started) {
      return;
    }

    this.gesture.enable(false);

    const step = this.getStep(event);
    const shouldComplete = step > 0.5;

    this.animation.progressEnd(shouldComplete ? 1 : 0, step).onFinish(() => {
      this.gesture.enable(true);
    });

    this.initialStep = shouldComplete ? this.MAX_TRANSLATE : 0;
    this.started = false;
  }

  private clamp(min: number, n: number, max: number) {
    return Math.max(min, Math.min(n, max));
  }

  private getStep(event: GestureDetail) {
    const delta = this.initialStep + event.deltaX;
    return this.clamp(0, delta / this.MAX_TRANSLATE, 1);
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1000)
      .fromTo('transform', 'translateX(0)', `translateX(${this.MAX_TRANSLATE}px)`);

    const gesture = (this.gesture = this.gestureCtrl.create({
      el: this.card.nativeElement,
      threshold: 0,
      gestureName: 'card-drag',
      onMove: (event) => this.onMove(event),
      onEnd: (event) => this.onEnd(event),
    }));

    gesture.enable(true);
  }
}
```