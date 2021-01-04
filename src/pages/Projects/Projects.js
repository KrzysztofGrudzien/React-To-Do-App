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
  setAddProject,
  addProjectDate,
  setAddProjectDate,
  addProjectClient,
  setAddProjectClient
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
        addProjectDate={addProjectDate}
        setAddProjectDate={setAddProjectDate}
        addProjectClient={addProjectClient}
        setAddProjectClient={setAddProjectClient}
      />
    </>
  );
};

export default Projects;
