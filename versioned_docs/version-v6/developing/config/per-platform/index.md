import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]}
>
<TabItem value="angular">

:::note
由于配置是在运行时设置的，您将无法使用 Platform 依赖注入。相反，您可以直接使用 provider 使用的底层函数。

有关您可以检测的平台类型，请参阅 [Angular 平台文档](../../../angular/platform)。
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
<TabItem value="react">

:::note
有关您可以检测的平台类型，请参阅 [React 平台文档](../../../react/platform)。
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
有关您可以检测的平台类型，请参阅 [Vue 平台文档](../../../vue/platform)。
:::

```ts title="main.ts"
import { IonicVue, isPlatform } from '@ionic/vue';

createApp(App).use(IonicVue, {
  animated: !isPlatform('mobileweb'),
});
```

</TabItem>
</Tabs>
