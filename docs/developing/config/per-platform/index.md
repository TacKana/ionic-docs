import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]}
>
<TabItem value="angular">

:::note
由于配置是在运行时设置的，你将无法访问平台依赖注入（Platform Dependency Injection）。不过，你可以直接使用该提供者（provider）所依赖的底层函数。

关于可检测的平台类型，请参阅 [Angular 平台文档](/angular/platform)。
:::

```ts title="app.module.ts"
import { isPlatform, IonicModule } from '@ionic/angular';

@NgModule({
  ...
  imports: [
    IonicModule.forRoot({
      animated: !isPlatform('mobileweb')
    })
  ],
  ...
})
```

</TabItem>
<TabItem value="angular-standalone">

:::note
由于配置是在运行时设置的，你将无法访问平台依赖注入（Platform Dependency Injection）。不过，你可以直接使用该提供者（provider）所依赖的底层函数。

关于可检测的平台类型，请参阅 [Angular 平台文档](/angular/platform)。
:::

```ts title="main.ts"
import { isPlatform, provideIonicAngular } from '@ionic/angular/standalone';

bootstrapApplication(AppComponent, {
  providers: [
    ...,
    provideIonicAngular({
      animated: !isPlatform('mobileweb')
    })
  ]
})
```

</TabItem>
<TabItem value="react">

:::note
关于可检测的平台类型，请参阅 [React 平台文档](/react/platform)。
:::

```tsx title="App.tsx"
import { isPlatform, setupIonicReact } from '@ionic/react';

setupIonicReact({
  animated: !isPlatform('mobileweb'),
});
```

</TabItem>
<TabItem value="vue">

:::note
关于可检测的平台类型，请参阅 [Vue 平台文档](/vue/platform)。
:::

```ts title="main.ts"
import { IonicVue, isPlatform } from '@ionic/vue';

createApp(App).use(IonicVue, {
  animated: !isPlatform('mobileweb'),
});
```

</TabItem>
</Tabs>
