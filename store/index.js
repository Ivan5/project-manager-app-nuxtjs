export const state = () => ({
  projects: [
    {
      id: "1",
      title: "Project 1",
      desc: "This is Project 1",
      tasks: []
    },
    {
      id: "2",
      title: "Project 2",
      desc: "This is Project 2",
      tasks: []
    }
  ]
});

export const mutations = {
  newProject(state, project) {
    state.projects.push(project);
  },

  newTask(state, payload) {
    state.projects.map(project => {
      if (project.id == payload.id) {
        let id = Math.random()
          .toString(36)
          .slice(2);
        project.tasks.push({
          id,
          todo: payload.todo,
          done: false,
          weight: project.tasks.length + 1
        });
      }
    });
  }
};
