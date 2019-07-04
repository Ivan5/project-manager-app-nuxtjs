<template>
  <nav>
    <v-toolbar>
      <nuxt-link to="/">
        <v-toolbar-title class="primary--text text-uppercase font-weight-black">
          Project
          <span class="white--text font-weight-light">Manager</span>
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>Create Project</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {};
</script>

<style>
a {
  text-decoration: none;
}
</style>
