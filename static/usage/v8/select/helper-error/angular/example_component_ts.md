```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonSelect, IonSelectOption, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [IonSelect, IonSelectOption, IonButton, ReactiveFormsModule],
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
    // 将控件标记为已触摸，以触发错误消息。
    // 如果用户在未与选择器交互的情况下提交表单，则需要此操作。
    this.myForm.get('favFruit')!.markAsTouched();
  }
}
```