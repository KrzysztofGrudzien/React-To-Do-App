import React from "react";
import "./AddProjectForm.scss";
import { v4 as uuidv4 } from "uuid";

const AddProjectForm = ({
  addProjectTitle,
  setAddProjectTitle,
  addProjectDescription,
  setAddProjectDescription,
  addProjectBudget,
  setAddProjectBudget,
  addProject,
  setAddProject
}) => {
  const handleOnClickAddProject = e => {
    e.preventDefault();
    setAddProject([
      ...addProject,
      {
        title: addProjectTitle,
        description: addProjectDescription,
        budget: addProjectBudget,
        id: uuidv4()
      }
    ]);
    setAddProjectBudget(0);
    setAddProjectTitle("");
    setAddProjectDescription("");
  };

  const handleOnChangeProjectTitle = e => {
    setAddProjectTitle(e.target.value);
  };

  const handleOnChangeProjectBudget = e => {
    setAddProjectBudget(parseInt(e.target.value === "" ? 0 : e.target.value));
  };

  const handleOnChangeProjectDescription = e => {
    setAddProjectDescription(e.target.value);
  };

  return (
    <div className="form-container">
      <h2>CREATE NEW PROJECT</h2>
      <form className="project-form">
        <div className="project-form-wrapper">
          <div className="project-input-wrapper">
            <h3 className="project-input-title">Title</h3>
            <input
              type="text"
              placeholder="Enter title of project"
              className="project-input"
              onChange={handleOnChangeProjectTitle}
              value={addProjectTitle}
            />
          </div>
          <div className="project-input-wrapper">
            <h3 className="project-input-title">Budget</h3>
            <input
              type="number"
              min="0"
              className="project-input"
              value={addProjectBudget}
              onChange={handleOnChangeProjectBudget}
            />
          </div>
          <div className="project-textarea-wrapper">
            <h3 className="project-input-title">Description</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter title of project"
              className="project-textarea"
              onChange={handleOnChangeProjectDescription}
              value={addProjectDescription}
            ></textarea>
          </div>
          <button onClick={handleOnClickAddProject}>Add project</button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectForm;
