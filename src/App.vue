<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar">
      <v-avatar color="secondary">
        <div>
          <img alt="Vue logo" class="logo" src="@/assets/todd.jpg" width="60" height="60" />
          <!-- <v-img alt="Todd" src="./assets/todd.jpg"></v-img> -->
        </div>
      </v-avatar>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/professional">Professional</RouterLink>
        <RouterLink to="/personal">Personal</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </v-app-bar>

    <!-- <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          subtitle="sandra_a88@gmailcom"
          title="Sandra Adams"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Shared with me"
          value="shared"
        ></v-list-item>
        <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
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

.logo {
  /* display: block; */
  text-align: center;
  margin-left: 1000px;
  /* margin: 0 auto 2rem; */
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

  .logo {
    margin: 0 2rem 0 0;
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
