import React from "react";
import "./AddProjectForm.scss";

const AddProjectForm = () => {
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
            />
          </div>
          <div className="project-input-wrapper">
            <h3 className="project-input-title">Budget</h3>
            <input type="number" min="0" className="project-input" value="0" />
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
            ></textarea>
          </div>
          <button>Add project</button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectForm;
