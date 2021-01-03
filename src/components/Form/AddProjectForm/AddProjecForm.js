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
    <>
      <div className="form-container">
        <h2 className="form-container-title">CREATE NEW PROJECT</h2>
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
            <div className="project-input-wrapper">
              <h3 className="project-input-title">Description</h3>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Enter description of project"
                className="project-textarea"
                onChange={handleOnChangeProjectDescription}
                value={addProjectDescription}
              ></textarea>
            </div>
            <div className="project-input-wrapper">
              <h3 className="project-input-title">CLIENT</h3>
              <select type="select" className="client-input">
                <option value="Client 1">Client 1</option>
                <option value="Client 1">Client 2</option>
                <option value="Client 1">Client 3</option>
                <option value="Client 1">Client 4</option>
                <option value="Client 1">Client 5</option>
              </select>
              <div className="project-input-data">
                <h3 className="project-input-title">DEADLINE</h3>
                <input type="date" className="project-input" />
                <button onClick={handleOnClickAddProject}>Add project</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <h2 className="form-container-title form-container-title-project">
        {addProject.length > 0 ? "ALL PROJECTS" : "NO PROJECTS TO DO"}
      </h2>
      <ul className="projects-list">
        <li className="projects-list-title">
          <div className="projects-list-title-item">ID</div>
          <div className="projects-list-title-item">Name of project</div>
          <div className="projects-list-title-item">Details</div>
        </li>
        {addProject.map((project, index) => {
          return (
            <li className="projects-list-item">
              <div className="project-item-index">{index + 1}</div>
              <div className="project-item-title">{project.title}</div>
              <div className="project-item-link-box">
                <a className="project-item-link" href="#">
                  details
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AddProjectForm;
