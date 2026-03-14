```html
<ion-content scroll-y="false">
  <div class="ion-content-scroll-host">
    <ion-list>
      <!-- 默认情况下重新排序手势处于禁用状态，启用后即可拖拽项目 -->
      <ion-reorder-group disabled="false">
        <ion-item>
          <ion-label> 项目 1 </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label> 项目 2 </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label> 项目 3 </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label> 项目 4 </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>

        <ion-item>
          <ion-label> 项目 5 </ion-label>
          <ion-reorder slot="end"></ion-reorder>
        </ion-item>
      </ion-reorder-group>
    </ion-list>
  </div>
</ion-content>

<script>
  const reorderGroup = document.querySelector('ion-reorder-group');

  reorderGroup.addEventListener('ionItemReorder', ({ detail }) => {
    // `from` 和 `to` 属性分别包含拖拽开始和结束时项目的索引位置
    console.log('拖拽从索引', detail.from, '到', detail.to);

    // 完成重新排序，并根据手势结束位置在 DOM 中定位项目
    // 此方法也可以由重新排序组直接调用
    detail.complete();
  });
</script>

<style>
  .ion-content-scroll-host {
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
</style>
```