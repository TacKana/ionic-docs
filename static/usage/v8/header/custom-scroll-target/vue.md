```html
<template>
  <ion-header collapse="fade">
    <ion-toolbar>
      <ion-title>标题</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content :scroll-y="false">
    <div class="ion-content-scroll-host ion-padding">
      <h1>动物趣闻</h1>

      <h2>犀牛</h2>
      <img
        alt="站在草丛旁的犀牛"
        src="https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
      />
      <p>
        犀牛（rhinoceros）的名字来源于它最显著的特征之一：角。这个词源自希腊语，rhino意为“鼻子”，ceros意为“角”。不同种类的犀牛角的数量也不同。两种非洲犀牛（黑犀牛和白犀牛）以及苏门答腊犀牛有两个角，而爪哇犀牛和印度犀牛只有一个角。
      </p>

      <h2>海龟</h2>
      <img
        alt="水中的棕色海龟"
        src="https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
      />
      <p>
        海龟的特征是拥有一个大型流线型甲壳，以及无法缩回壳内的头部和四肢。与其他龟类不同，海龟无法将四肢和头部缩进壳内。它们的四肢是适应游泳的鳍状肢，因此在陆地上时非常脆弱。
      </p>

      <h2>长颈鹿</h2>
      <img
        alt="伸出舌头的长颈鹿"
        src="https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
      />
      <p>
        长颈鹿以其高大修长的外形而闻名。它们的背部有一个类似骆驼的小驼峰，身上的斑点图案则与豹子相似。由于这些特征的结合，有些人曾称长颈鹿为“骆驼豹”。长颈鹿的物种名称“camelopardalis”便由此而来。
      </p>

      <h2>大象</h2>
      <img
        alt="日落时分草原上的两只灰色大象"
        src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1754&q=80"
      />
      <p>
        大象是现存最大的陆地动物，拥有庞大的身躯、巨大的耳朵和长长的鼻子。大象的长鼻子具有多种功能，可以用来拾取物体、发出警告声、问候其他大象，或者吸水饮用及洗澡。
      </p>

      <h2>海豚</h2>
      <img
        alt="水中的黑白海豚"
        src="https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
      />
      <p>
        海豚的颜色因物种而异，从白色、珍珠色、粉色到更深的棕色、灰色、蓝色和黑色。它们拥有光滑的皮肤、鳍状肢和一个背鳍。它们的吻部细长，约有100颗牙齿，身体呈流线型。头顶有一个喷水孔，上面有一个可以打开露出鼻孔的皮瓣。海豚浮出水面时通过这些鼻孔呼吸。
      </p>
    </div>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
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