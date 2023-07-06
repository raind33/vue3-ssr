<template>
  <div class="home" style="border: 1px solid green; margin: 20px">
    <div>home count: {{ count }}</div>
    <button @click="addNumber">+1</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(100);
function addNumber() {
  count.value += 1;
}
</script>
