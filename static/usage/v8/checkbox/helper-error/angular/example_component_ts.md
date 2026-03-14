```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonCheckbox, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [IonCheckbox, IonButton, ReactiveFormsModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
})
export class ExampleComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      agree: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    // 将控件标记为已接触以触发错误信息。
    // 如果用户未与复选框交互就提交表单，则需要此操作。
    this.myForm.get('agree')!.markAsTouched();
  }
}
```