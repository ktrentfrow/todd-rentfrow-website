<script setup lang="ts">
import { ref } from 'vue';
import type { PageContentItem } from '@/api/interfaces';
// import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue';

const name = ref('Kevin Todd Rentfrow');
const email = ref('toddrentfrow2@gmail.com');
const links: PageContentItem[] = [
  { icon: 'mdi-home', title: 'Home', path: '/' },
  { icon: 'mdi-briefcase', title: 'Professional', path: '/professional' },
  { icon: 'mdi-golf', title: 'Personal', path: '/personal' },
  { icon: 'mdi-information', title: 'About', path: '/about' }
];
</script>

<template>
  <v-navigation-drawer permanent>
    <!-- <v-list>
      <v-list-item prepend-avatar="@/assets/todd.jpg" :subtitle="email" :title="name"></v-list-item>
    </v-list> -->

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="(link, index) in links"
        :prepend-icon="link.icon"
        :title="link.title"
        :value="link.title"
        :to="link.path"
        :key="`${link.title}-${index}`"
      ></v-list-item>
      <!-- <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Shared with me"
        value="shared"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item> -->
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
</style>