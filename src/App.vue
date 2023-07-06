<template>
  <div class="app" style="border: 1px solid red">
    <h1>App</h1>
    <div>count: {{ count }}</div>
    <button @click="addNumber">+1</button>
    <div>
      <router-link to="/">
        <button>home</button>
      </router-link>
      <router-link to="/about">
        <button>about</button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(100);
function addNumber() {
  count.value += 1;
}
</script>
