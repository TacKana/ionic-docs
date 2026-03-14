```html
<style>
  /* 所有范围控件的通用样式 */
  ion-range {
    --knob-size: 34px;
  }

  ion-range::part(knob) {
    background: #fff;
    box-sizing: border-box;
  }

  /* 隐藏 Material Design 指示器 */
  ion-range::part(knob)::before {
    display: none;
  }

  ion-range::part(pin) {
    color: #fff;
    border-radius: 50%;
  }

  ion-range::part(tick),
  ion-range::part(tick-active) {
    height: 8px;
    top: 17px;
  }

  /* 单滑块范围控件 */
  #range-single::part(bar),
  #range-single::part(tick) {
    background: #bed4ff;
  }

  #range-single::part(bar-active),
  #range-single::part(tick-active) {
    background: #40a2fd;
  }

  #range-single::part(knob) {
    border: 4px solid #40a2fd;
  }

  #range-single::part(knob pressed) {
    background: #bed4ff;
  }

  #range-single::part(pin),
  #range-single::part(pin)::before {
    background: #40a2fd;
  }

  /* 双滑块（A/B）范围控件 */
  #range-a-b::part(bar-active) {
    background: #1ea9ca;
  }

  #range-a-b::part(knob-a) {
    border: 4px solid #0f8fd6;
  }

  #range-a-b::part(knob-a pressed) {
    background: #cfeefe;
  }

  #range-a-b::part(pin-a),
  #range-a-b::part(pin-a)::before {
    background: #0f8fd6;
  }

  #range-a-b::part(knob-b) {
    border: 4px solid #2dc2bd;
  }

  #range-a-b::part(knob-b pressed) {
    background: #d4f5f3;
  }

  #range-a-b::part(pin-b),
  #range-a-b::part(pin-b)::before {
    background: #2dc2bd;
  }

  /* 双滑块（下限/上限）范围控件 */
  #range-lower-upper::part(bar-active) {
    background: linear-gradient(to right, #0059ff 0%, #b77bff 100%);
  }

  #range-lower-upper::part(knob-lower) {
    border: 4px solid #0059ff;
  }

  #range-lower-upper::part(knob-lower pressed) {
    background: #bed4ff;
  }

  #range-lower-upper::part(pin-lower),
  #range-lower-upper::part(pin-lower)::before {
    background: #0059ff;
  }

  #range-lower-upper::part(knob-upper) {
    border: 4px solid #b77bff;
  }

  #range-lower-upper::part(knob-upper pressed) {
    background: #f1e5ff;
  }

  #range-lower-upper::part(pin-upper),
  #range-lower-upper::part(pin-upper)::before {
    background: #b77bff;
  }
</style>

<template>
  <h2>单滑块</h2>
  <ion-range
    id="range-single"
    aria-label="自定义范围控件"
    :min="0"
    :max="10"
    :value="5"
    :pin="true"
    :ticks="true"
    :snaps="true"
  ></ion-range>

  <h2>双滑块（A/B）</h2>
  <ion-range
    id="range-a-b"
    aria-label="带 A/B 样式的自定义双滑块范围控件"
    :min="0"
    :max="10"
    :value="{lower: 3, upper: 7}"
    :dual-knobs="true"
    :pin="true"
  ></ion-range>

  <h2>双滑块（下限/上限）</h2>
  <ion-range
    id="range-lower-upper"
    aria-label="带下限/上限样式的自定义双滑块范围控件"
    :min="0"
    :max="10"
    :value="{lower: 3, upper: 7}"
    :dual-knobs="true"
    :pin="true"
  ></ion-range>
</template>

<script setup lang="ts">
  import { IonRange } from '@ionic/vue';
</script>
```