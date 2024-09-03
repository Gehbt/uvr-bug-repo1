<script setup>
import { useRouter } from "vue-router";

const pages = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },{
    path: "/from-root",
    name: "from-root",
  }
];
</script>

<template>
  <nav>
    <template v-for="page in pages" :key="`nav-${page.name}`">
      &nbsp;<RouterLink :to="page.path">{{ page.name }}</RouterLink>
    </template>
  </nav>
  <RouterView />
</template>
