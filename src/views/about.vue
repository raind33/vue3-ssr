<template>
  <div class="app" style="border: 1px solid blue; margin: 20px">
    <h5>about</h5>
    <div>about count: {{ count }}</div>
    <button @click="addNumber">+1</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
function addNumber() {
  count.value += 1;
}
</script>
