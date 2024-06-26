<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';
import LeftNavigationDrawer from './components/left-navigation/left-navigation-drawer.vue';
import BottomNavigationDrawer from './components/bottom-navigation/bottom-navigation-drawer.vue';
import ApplicationBar from './components/application-bar/application-bar.vue';
import { useNavigationStore } from '@/stores/navigation';

const navStore = useNavigationStore();

onMounted(() => {
  navStore.getWorkHistories();
});
</script>

<template>
  <v-layout class="rounded rounded-md">
    <application-bar />

    <!-- <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <left-navigation-drawer />
    <bottom-navigation-drawer
      :bottomLabel="navStore.bottomItemName"
      :showBottomNavigation="navStore.showBottomNavigation"
      :bottomText="navStore.bottomTextDisplay"
    />
    <v-main class="" style="min-height: 300px">
      <!-- <v-main class="d-flex align-center justify-center" style="min-height: 300px"> -->
      <!-- <img alt="Vue logo" class="logo" src="@/assets/todd.jpg" width="125" height="125" /> -->
      <RouterView />
    </v-main>
  </v-layout>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
