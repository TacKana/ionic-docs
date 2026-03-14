```html
<template>
  <ion-content :fullscreen="true" class="ion-padding">
    <h1>动物趣闻</h1>

    <h2>犀牛</h2>
    <img
      alt="rhino standing near grass"
      src="https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
    />
    <p>
      犀牛的名称来源于其最显著的特征之一：它的角。英文名"rhinoceros"源自希腊语，rhino意为"鼻子"，ceros意为"角"。不同种类的犀牛角数量各异。非洲的两种犀牛（黑犀牛和白犀牛）以及苏门答腊犀牛都有两只角，而爪哇犀牛和印度犀牛则只有一只角。
    </p>

    <h2>海龟</h2>
    <img
      alt="brown sea turtle in water"
      src="https://images.unsplash.com/photo-1573551089778-46a7abc39d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    />
    <p>
      海龟的特征是拥有流线型的大壳，以及无法缩回壳内的头部和四肢。与其他龟类不同，海龟不能将四肢和头部缩回壳中。它们的四肢已进化成适合游泳的鳍状肢，因此在陆地上时显得尤为脆弱。
    </p>

    <h2>长颈鹿</h2>
    <img
      alt="giraffe sticking its tongue out"
      src="https://images.unsplash.com/photo-1577114995803-d8ce0e2b4aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
    />
    <p>
      长颈鹿以其高大修长的外形而闻名。它们的背上有一个类似骆驼的小驼峰，身上的斑点图案则与豹子相似。由于这些特征的组合，有些人将长颈鹿称为"骆驼豹"。这也正是长颈鹿的学名"camelopardalis"的由来。
    </p>

    <h2>大象</h2>
    <img
      alt="two grey elephants on grass plains during sunset"
      src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1754&q=80"
    />
    <p>
      大象是现存最大的陆地动物，拥有庞大的身躯、大耳朵和长长的鼻子。大象的长鼻子功能多样，可以用来拾取物品、发出警告声、向其他大象打招呼，或者吸水用于饮用或洗澡。
    </p>

    <h2>海豚</h2>
    <img
      alt="black and white dolphin in water"
      src="https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
    />
    <p>
      海豚的颜色因种类而异，从白色、珍珠色、粉红色到较深的棕色、灰色、蓝色和黑色不等。它们拥有光滑的皮肤、鳍状肢和背鳍。细长的吻部约有100颗牙齿，身体呈流线型。头顶有一个喷水孔，孔盖打开时会露出一对鼻孔。海豚浮出水面时就是用这些鼻孔进行呼吸的。
    </p>
  </ion-content>
  <ion-footer :translucent="true">
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script setup lang="ts">
  import { IonContent, IonFooter, IonTitle, IonToolbar } from '@ionic/vue';
</script>
```