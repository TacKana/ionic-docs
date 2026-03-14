```html
<template>
  <ion-header collapse="fade">
    <ion-toolbar>
      <ion-title>页眉</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>动物趣闻</h1>

    <h2>犀牛</h2>
    <img
      alt="站立在草丛旁的犀牛"
      src="https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
    />
    <p>
      犀牛因其最显著的特征之一——角而得名。"犀牛"一词源于希腊语，rhino意为"鼻子"，ceros意为"角"。不同种类的犀牛角数量各异：非洲的两种犀牛（黑犀牛和白犀牛）以及苏门答腊犀牛有两个角，而爪哇犀牛和独角犀牛只有一个角。
    </p>

    <h2>海龟</h2>
    <img
      alt="水中的棕色海龟"
      src="https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    />
    <p>
      海龟的特征是拥有流线型的大壳以及无法缩回壳内的头部和四肢。与其他龟类不同，海龟不能将四肢和头部缩入壳中。它们的四肢已进化为适合游泳的鳍状肢，因此在陆地上时非常脆弱。
    </p>

    <h2>长颈鹿</h2>
    <img
      alt="伸出舌头的长颈鹿"
      src="https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
    />
    <p>
      长颈鹿以其修长挺拔的外形而闻名。它们背部有一个类似骆驼的小驼峰，身上的斑纹则与豹子相似。由于这些特征的结合，有些人将长颈鹿称为"骆驼豹"，这也正是其物种名称"camelopardalis"的由来。
    </p>

    <h2>大象</h2>
    <img
      alt="日落时分草原上的两只灰色大象"
      src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1754&q=80"
    />
    <p>
      大象是现存最大的陆地动物，拥有庞大的身躯、大耳朵和长鼻子。大象的长鼻子功能多样：可用于拾取物品、发出警告声、问候其他大象，或吸水饮用及洗澡。
    </p>

    <h2>海豚</h2>
    <img
      alt="水中的黑白海豚"
      src="https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
    />
    <p>
      海豚的颜色因种类而异，从白色、珍珠色、粉色到深棕色、灰色、蓝色和黑色不等。它们拥有光滑的皮肤、鳍状肢和背鳍，修长的吻部约有100颗牙齿，身体呈流线型。头顶有一个喷水孔，开启时会露出一对鼻孔，海豚浮出水面时通过这些鼻孔呼吸。
    </p>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
</script>
```