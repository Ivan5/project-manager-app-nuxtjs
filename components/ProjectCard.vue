<template>
  <v-flex pa-2 xs12 sm4>
    <v-card>
      <v-card-title class="primary headline grey--text text--darken-3">Project Title</v-card-title>
      <v-card-text>
        <p>
          <strong>Description:</strong> My Project Description
        </p>
        <p>
          <strong>Active Tasks:</strong> 0
        </p>
        <p>
          <strong>Completed Tasks:</strong> 0
        </p>
        <p>
          <strong>Total Tasks:</strong> 0
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <nuxt-link to>
          <v-btn flat>Open Project</v-btn>
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "project-card"
};
</script>

<style>
</style>
