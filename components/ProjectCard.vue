<template>
  <v-flex pa-2 xs12 sm4>
    <v-card>
      <v-card-title class="primary headline grey--text text--darken-3">{{project.title}}</v-card-title>
      <v-card-text>
        <p>
          <strong>Description:</strong>
          {{project.desc}}
        </p>
        <p>
          <strong>Active Tasks:</strong>
          {{project.tasks.filter(task => !task.done ).length}}
        </p>
        <p>
          <strong>Completed Tasks:</strong>
          {{project.tasks.filter(task => task.done ).length}}
        </p>
        <p>
          <strong>Total Tasks:</strong>
          {{project.tasks.length}}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <nuxt-link :to="'/project/'+project.id">
          <v-btn flat>Open Project</v-btn>
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "project-card",
  props: ["project"]
};
</script>

<style>
</style>
