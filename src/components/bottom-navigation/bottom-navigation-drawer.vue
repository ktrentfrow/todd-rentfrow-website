<script setup lang="ts">
import { ref } from 'vue';
import type { PageContentItem } from '@/api/interfaces';
import { BottomNavItem } from '@/stores/navigation/interfaces';
import VueMarkdown from 'vue-markdown-render';

interface Props {
  showBottomNavigation: boolean;
  bottomText: string;
  bottomLabel: string;
}

const props = defineProps<Props>();
const src = ref('# header');
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

// const GetBottomLabel = () => {
//   return props.bottomLabel;
// };
</script>

<template>
  <v-navigation-drawer v-if="props.showBottomNavigation" permanent location="bottom">
    <div class="bd">
      <vue-markdown :source="props.bottomText" />
    </div>
    <!--   
    <v-textarea
      :label="GetBottomLabel()"
      :model-value="props.bottomText"
      name="input-7-1"
      variant="filled"
    ></v-textarea> -->
  </v-navigation-drawer>
</template>

<style scoped>
.bd {
  max-height: 20vh;
  overflow: auto;
}
</style>