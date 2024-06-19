<template>
  <v-timeline>
    <v-timeline-item size="large">
      <template v-slot:opposite>
        <h1>Blue Halo</h1>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="text-h5"> Senior Software Engineer </v-card-title>
        <v-card-text
          >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,
          sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
          voluptatibus, vix an salutandi sententiae.</v-card-text
        >
      </v-card>
    </v-timeline-item>
    <v-timeline-item size="large">
      <template v-slot:opposite>
        <h1>Brockwell Technologies</h1>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="text-h5"> Senior Software Engineer </v-card-title>
        <v-card-text
          >Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,
          sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
          voluptatibus, vix an salutandi sententiae.</v-card-text
        >
      </v-card>
    </v-timeline-item>
  </v-timeline>
  <!-- <div class="about">
    <h1>This is a professional page</h1>
  </div> -->
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
