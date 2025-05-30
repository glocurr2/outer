<template>
  <header>
    <div>
      <header class="app-header"><BookHeader /></header>
    </div>
  </header>
  <RouterView />
  <footer style="color: white">&copy; {{ copyright }}</footer>
</template>

<script setup>
import BookHeader from "./components/BookHeader.vue";
const copyright = new Date().getFullYear() + " " + "outerspacebook.net";
</script>

<style scoped></style>
