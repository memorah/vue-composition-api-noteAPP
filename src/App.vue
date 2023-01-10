<template>
  <NavBar />
  <router-link to="/" class="button">Notes</router-link>
  <router-link to="/stats" class="button">Statsaaaaasss</router-link>
  <router-link to="/test">Button 1</router-link>
  <router-link to="/button2">Button 2</router-link>
  <router-link to="/button3">Button 3</router-link>
  <router-link to="/button4">Button 4</router-link>
  <router-link to="/button5">Button 5</router-link>
  <router-link to="/button6">Button 6</router-link>
  <RouterView />
</template>

<script setup>
/* imports */
import NavBar from "@/components/layout/NavBar.vue";
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
