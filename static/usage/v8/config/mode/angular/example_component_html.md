```html
<ion-button [color]="mode === 'ios' ? 'secondary' : 'tertiary'" [fill]="mode === 'ios' ? 'outline' : 'solid'">
  当前模式：{{ mode }}
</ion-button>
```