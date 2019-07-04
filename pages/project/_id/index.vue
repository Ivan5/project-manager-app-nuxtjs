<template>
  <v-layout>
    <v-flex>
      <h2 class="display-1 text-uppercase">{{project.title}}</h2>
      <p>{{project.desc}}</p>
      <h3 class="headline">Tasks</h3>
      <v-list two-line>
        <v-list-tile>
          <v-list-tile-action>
            <v-btn fab small>
              <v-icon>keyboard_arrow_up</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action>
            <v-btn fab small>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Task 1</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn flat color="warning">Remove</v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    project() {
      return this.$store.state.projects.find(
        p => p.id === this.$route.params.id
      );
    }
  }
};
</script>

<style>
</style>
