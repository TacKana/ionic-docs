import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (独立组件)' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]}
>
<TabItem value="javascript">

```javascript title="example.js"
window.Ionic = {
  config: {
    rippleEffect: false,
    mode: 'md',
  },
};
```

</TabItem>
<TabItem value="angular">

```tsx title="app.module.ts"
import { IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'md'
    })
  ],
  ...
})
```

</TabItem>
<TabItem value="angular-standalone">

```ts title="main.ts"
import { provideIonicAngular } from '@ionic/angular/standalone';

bootstrapApplication(AppComponent, {
  providers: [
    ...,
    provideIonicAngular({
      rippleEffect: false,
      mode: 'md'
    })
  ]
})
```

</TabItem>
<TabItem value="react">

`setupIonicReact` 函数必须在渲染任何 Ionic 组件（包括 `IonApp`）之前调用。

```tsx title="App.tsx"
import { setupIonicReact } from '@ionic/react';

setupIonicReact({
  rippleEffect: false,
  mode: 'md',
});
```

</TabItem>
<TabItem value="vue">

```tsx title="main.ts"
import { IonicVue } from '@ionic/vue';
import { createApp } from 'vue';

createApp(App).use(IonicVue, {
  rippleEffect: false,
  mode: 'md',
});
```

</TabItem>
</Tabs>