<template>
  <v-layout row wrap>
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </v-layout>
</template>

<script>
import ProjectCard from "~/components/ProjectCard.vue";
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  },
  components: {
    ProjectCard
  }
};
</script>
