<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigation';
import { BottomNavItem } from '@/stores/navigation/interfaces';
// import type { IWorkHistory } from '@ktrentfrow/common';

// interface Props {
//   workHistories: Array<IWorkHistory>;
// }
// const props = defineProps<Props>();

const navStore = useNavigationStore();
// import { ref } from 'vue';
// import type { PageContentItem } from '@/api/interfaces';
// import { RouterLink, RouterView } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue';

// const name = ref('Kevin Todd Rentfrow');
// const email = ref('toddrentfrow2@gmail.com');
// const links: PageContentItem[] = [
//   { icon: 'mdi-home', title: 'Home', path: '/' },
//   { icon: 'mdi-briefcase', title: 'Professional', path: '/professional' },
//   { icon: 'mdi-golf', title: 'Personal', path: '/personal' },
//   { icon: 'mdi-information', title: 'About', path: '/about' }
// ];
const setDetails = (name: string) => {
  navStore.setBottomNavigationItem(name);
  //   if (type === 'BlueHalo') {
  //     navStore.setBottomNavigationItem(BottomNavItem.BLUEHALO);
  //     navStore.setShowBottomNavigation(true);
  //   } else if (type === 'Brockwell Technologies Incorparated') {
  //     navStore.setBottomNavigationItem(BottomNavItem.BROCKWELL);
  //     navStore.setShowBottomNavigation(true);
  //   } else {
  //     navStore.setBottomNavigationItem(BottomNavItem.NONE);
  //     navStore.setShowBottomNavigation(false);
  //   }
};

const getDate = (dt?: string | Date) => {
  if (dt) {
    return new Date(dt).toLocaleDateString();
  } else {
    return 'Present';
  }
};
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col class="d-flex align-end" cols="6">
        <v-timeline align="start">
          <v-timeline-item
            v-for="(history, index) in navStore.workHistories"
            :key="index"
            size="large"
          >
            <template v-slot:opposite>
              <h2>{{ history.companyName }}</h2>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="text-h5"> {{ history.title }} </v-card-title>
              <v-card-subtitle>{{ history.city }}, {{ history.state }} </v-card-subtitle>
              <v-card-subtitle
                >{{ getDate(history.startDate) }} - {{ getDate(history.endDate) }}</v-card-subtitle
              >
              <div align="right">
                <v-btn
                  @click="setDetails(history.companyName)"
                  variant="text"
                  density="compact"
                  size="small"
                >
                  {{
                    navStore.bottomItemName === history.companyName
                      ? 'Hide Details'
                      : 'show Details'
                  }}
                </v-btn>
              </div>
            </v-card>
          </v-timeline-item>
          <!-- <v-timeline-item size="large">
            <template v-slot:opposite>
              <h1>Brockwell Technologies</h1>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="text-h5"> Senior Software Engineer </v-card-title>
              <v-card-text
                >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec
                ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril
                disputando voluptatibus, vix an salutandi sententiae.</v-card-text
              >
            </v-card>
          </v-timeline-item> -->
        </v-timeline>
      </v-col>
      <!-- <v-col cols="6">
        <v-textarea
          label="Label"
          model-value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.
        I am on a new line"
          name="input-7-1"
          variant="filled"
          auto-grow
        ></v-textarea>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<style scoped>
</style>