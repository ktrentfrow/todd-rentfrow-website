<script setup lang="ts">
import { ref } from 'vue';
import type { PageContentItem } from '@/api/interfaces';

const name = ref('Kevin Todd Rentfrow');
const email = ref('toddrentfrow2@gmail.com');
const links: PageContentItem[] = [
  { icon: 'mdi-folder', title: 'Home', path: '/' },
  { icon: 'mdi-account-multiple', title: 'Professional', path: '/professional' },
  { icon: 'mdi-star', title: 'Personal', path: '/personal' },
  { icon: 'mdi-star', title: 'About', path: '/about' }
];
</script>

<template>
  <v-app-bar title="">
    <v-avatar color="secondary">
      <div>
        <img alt="Vue logo" class="logo" src="@/assets/todd.jpg" width="50" height="50" />
        <!-- <v-img alt="Todd" src="./assets/todd.jpg"></v-img> -->
      </div>
    </v-avatar>
    <v-list>
      <v-list-item prepend-avatar="@/assets/todd.jpg" :subtitle="email" :title="name"></v-list-item>
    </v-list>
    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/professional">Professional</RouterLink>
        <RouterLink to="/personal">Personal</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  </v-app-bar>
</template>

<style scoped>
.logo {
  /* display: block; */
  text-align: center;
  /* margin-left: 1000px; */
  /* margin: 0 auto 2rem; */
}

.logo {
  /* margin: 0 2rem 0 0; */
}
</style>