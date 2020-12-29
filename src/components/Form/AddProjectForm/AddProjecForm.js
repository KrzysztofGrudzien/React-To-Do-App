import React from "react";

const AddProjectForm = () => {
  return (
    <>
      <h2>Add Project</h2>
      <form className="project-form">
        <div className="project-form-wrapper">
          <div className="project-input-wrapper">
            <h3>Title</h3>
            <input type="text" placeholder="Enter title of project" />
          </div>
          <div className="project-input-wrapper">
            <h3>Budget</h3>
            <input type="number" min="0" />
          </div>
          <div className="project-textarea-wrapper">
            <h3>Description</h3>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter title of project"
            ></textarea>
          </div>
          <button>Add new project</button>
        </div>
      </form>
    </>
  );
};

export default AddProjectForm;
