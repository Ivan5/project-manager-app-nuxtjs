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

export const mutatiosn = {
  newProject(state, project) {
    console.log("New Project");
  }
};
