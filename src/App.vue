<template>
  <div>
    <NavBar />
    <div class="container is-max-desktop px-2 py-4">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
/* imports */
import NavBar from "@/components/layout/NavBar.vue";
</script>

<style>
@import "bulma/css/bulma.min.css";
</style>
