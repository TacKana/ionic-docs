```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [IonToggle, ReactiveFormsModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
})
export class ExampleComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      wifi: [true, Validators.requiredTrue],
    });
  }

  onChange() {
    // 将控件标记为已触摸，以触发错误消息
    // 而无需先让切换控件失去焦点
    this.myForm.get('wifi')!.markAsTouched();
  }
}
```