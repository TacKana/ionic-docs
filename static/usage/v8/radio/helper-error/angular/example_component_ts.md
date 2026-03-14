```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonRadioGroup, IonRadio, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [IonRadioGroup, IonRadio, IonButton, ReactiveFormsModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css',
})
export class ExampleComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      favFruit: ['', Validators.required],
    });
  }

  onSubmit() {
    // 将控件标记为已触摸以触发错误信息。
    // 如果用户在没有与选择控件交互的情况下提交表单，则需要执行此操作。
    this.myForm.get('favFruit')!.markAsTouched();
  }
}
```