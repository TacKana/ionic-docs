import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]}
>
<TabItem value="javascript">

**不推荐**

```ts
window.Ionic = {
  config: {
    // 当应用需要响应式值时，不推荐使用此方式
    backButtonText: 'Go Back',
  },
};
```

**推荐**

```html
<ion-back-button></ion-back-button>

<script>
  const backButton = document.querySelector('ion-back-button');

  /**
   * 返回按钮的文本可以在语言环境改变时随时更新。
   */
  backButton.text = 'Go Back';
</script>
```

</TabItem>
<TabItem value="angular">

**不推荐**

```ts
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    IonicModule.forRoot({
      // 当应用需要响应式值时，不推荐使用此方式
      backButtonText: 'Go Back'
    })
  ],
  ...
});
```

**推荐**

```html
<ion-back-button [text]="backButtonText"></ion-back-button>
```

```ts
@Component(...)
class MyComponent {
  /**
   * 返回按钮的文本可以在语言环境改变时随时更新。
   */
  backButtonText = 'Go Back';
}
```

</TabItem>
<TabItem value="angular-standalone">

**不推荐**

```ts
import { provideIonicAngular } from '@ionic/angular/standalone';

bootstrapApplication(AppComponent, {
  providers: [
    ...,
    provideIonicAngular({
      // 当应用需要响应式值时，不推荐使用此方式
      backButtonText: 'Go Back'
    })
  ]
})
```

**推荐**

```html
<ion-back-button [text]="backButtonText"></ion-back-button>
```

```ts
@Component(...)
class MyComponent {
  /**
   * 返回按钮的文本可以在语言环境改变时随时更新。
   */
  backButtonText = 'Go Back';
}
```

</TabItem>
<TabItem value="react">

**不推荐**

```tsx
import { setupIonicReact } from '@ionic/react';

setupIonicReact({
  // 当应用需要响应式值时，不推荐使用此方式
  backButtonText: 'Go Back',
});
```

**推荐**

```tsx
import { useState } from 'react';
import { IonBackButton } from '@ionic/react';

const ExampleComponent = () => {
  const [backButtonText, setBackButtonText] = useState('Go Back');
  return (
    {/*
     * 返回按钮的文本可以在语言环境改变时随时更新。
     */}
    <IonBackButton text={backButtonText}></IonBackButton>
  )
}
```

</TabItem>
<TabItem value="vue">

**不推荐**

```ts
import { IonicVue } from '@ionic/vue';
import { createApp } from 'vue';

// 当应用需要响应式值时，不推荐使用此方式
createApp(App).use(IonicVue, {
  backButtonText: 'Go Back',
});
```

**推荐**

```html
<template>
  <ion-back-button [text]="backButtonText"></ion-back-button>
</template>

<script setup lang="ts">
  import { IonBackButton } from '@ionic/vue';
  import { ref } from 'vue';

  /**
   * 返回按钮的文本可以在语言环境改变时随时更新。
   */
  const backButtonText = ref('Go Back');
</script>
```

</TabItem>
</Tabs>