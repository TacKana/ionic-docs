```html
<h2>单滑块</h2>
<ion-range
  id="range-single"
  aria-label="自定义范围"
  [min]="0"
  [max]="10"
  [value]="5"
  [pin]="true"
  [ticks]="true"
  [snaps]="true"
></ion-range>

<h2>双滑块 (A/B)</h2>
<ion-range
  id="range-a-b"
  aria-label="采用 A/B 样式的自定义双滑块范围"
  [min]="0"
  [max]="10"
  [value]="{lower: 3, upper: 7}"
  [dualKnobs]="true"
  [pin]="true"
></ion-range>

<h2>双滑块 (下限/上限)</h2>
<ion-range
  id="range-lower-upper"
  aria-label="采用下限/上限样式的自定义双滑块范围"
  [min]="0"
  [max]="10"
  [value]="{lower: 3, upper: 7}"
  [dualKnobs]="true"
  [pin]="true"
></ion-range>
```