import React from "react";
import AddProjectForm from "../../components/Form/AddProjectForm/AddProjecForm";

const Projects = ({
  addProjectTitle,
  setAddProjectTitle,
  addProjectDescription,
  setAddProjectDescription,
  addProjectBudget,
  setAddProjectBudget,
  addProject,
  setAddProject
}) => {
  return (
    <>
      <AddProjectForm
        addProjectTitle={addProjectTitle}
        setAddProjectTitle={setAddProjectTitle}
        addProjectDescription={addProjectDescription}
        setAddProjectDescription={setAddProjectDescription}
        addProjectBudget={addProjectBudget}
        setAddProjectBudget={setAddProjectBudget}
        addProject={addProject}
        setAddProject={setAddProject}
      />
    </>
  );
};

export default Projects;
