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
        <v-btn flat @click="projectDialog = !projectDialog">Create Project</v-btn>
        <v-btn flat @click="taskDialog = !taskDialog">Create Task</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-dialog width="768" v-model="projectDialog">
      <v-card>
        <v-card-title>Create a Project</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-text-field label="Title" v-model="title"></v-text-field>
          <v-text-field label="Short Description" v-model="desc"></v-text-field>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="projectDialog = false">Close</v-btn>
          <v-btn
            color="primary"
            class="grey--text text--darken-3"
            @click="createProject"
          >Create Project</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      projectDialog: false,
      taskDialog: false,
      title: "",
      desc: ""
    };
  },
  methods: {
    createProject() {
      let id = Math.random()
        .toString(36)
        .slice(2);
      this.$store.commit("newProject", {
        id: id,
        title: this.title,
        desc: this.desc,
        tasks: []
      });

      this.projectDialog = false;
      this.title = "";
      this.desc = "";
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
