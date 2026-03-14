```ts
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  imports: [FormsModule, IonicModule],
  standalone: true,
})
export class ExampleComponent {
  @ViewChild(IonModal) modal: IonModal;

  message = '此模态框示例使用触发器，在按钮被点击时自动打开模态框。';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `你好，${ev.detail.data}!`;
    }
  }
}
```