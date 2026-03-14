```html
<ion-button id="popover-button">打开菜单</ion-button>
<ion-popover trigger="popover-button" [dismissOnSelect]="true">
  <ng-template>
    <ion-content>
      <ion-list>
        <ion-item [button]="true" [detail]="false">选项 1</ion-item>
        <ion-item [button]="true" [detail]="false">选项 2</ion-item>
        <ion-item [button]="true" id="nested-trigger">更多选项...</ion-item>

        <ion-popover trigger="nested-trigger" [dismissOnSelect]="true" side="end">
          <ng-template>
            <ion-content>
              <ion-list>
                <ion-item [button]="true" [detail]="false">嵌套选项</ion-item>
              </ion-list>
            </ion-content>
          </ng-template>
        </ion-popover>
      </ion-list>
    </ion-content>
  </ng-template>
</ion-popover>
```