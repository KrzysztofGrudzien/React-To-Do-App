import React, { useState } from "react";
import "./AddTaskForm.scss";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import CONSTANT from "../../../utils/constant";

const Form = ({
  setInputValue,
  setToDoLists,
  toDoLists,
  inputValue,
  category,
  setCategory,
  textareaValue,
  setTextAreaValue,
  status,
  hours,
  setHours,
  setMinutes,
  minutes,
  setSeconds,
  seconds,
  setDate,
  date,
  priority,
  setPriority,
  author,
  setAuthor,
  comment,
  setComment,
  client,
  setClient,
  addProject,
  addProjectTitle,
  setAddProjectTitle
}) => {
  const [subtasks, setSubtasks] = useState([]);
  const [subtask, setSubtask] = useState("");
  const [isOpenAddSubtaskModal, setIsOpenAddSubtaskModal] = useState(false);

  const handleOnChangeInputValue = e => {
    setInputValue(e.target.value);
  };

  const handleOnClickSubmit = e => {
    e.preventDefault();
    setToDoLists([
      ...toDoLists,
      {
        text: inputValue,
        note: textareaValue,
        completed: false,
        id: uuidv4(),
        category: category,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        date: date,
        priority: priority,
        author: author,
        comment: comment,
        client: client,
        project: addProjectTitle,
        subtasks: subtasks
      }
    ]);
    setInputValue("");
    setTextAreaValue("");
    setComment("");
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const handleOnClickAddSubtask = e => {
    e.preventDefault();
    setSubtasks([
      ...subtasks,
      {
        title: subtask,
        id: uuidv4()
      }
    ]);
  };

  const handleIsOpenAddSubtaskModal = e => {
    e.preventDefault();
    setIsOpenAddSubtaskModal(prevState => !prevState);
  };

  const handleOnChangeSubtask = e => {
    setSubtask(e.target.value);
  };

  const handleOnChangeSelectCategory = e => {
    setCategory(e.target.value);
  };

  const handleOnChangeTextNote = e => {
    setTextAreaValue(e.target.value);
  };

  const handleOnChangeSelectPriority = e => {
    setPriority(e.target.value);
  };

  const handleOnChangeHours = e => {
    setHours(parseInt(e.target.value === "" ? 0 : e.target.value));
  };

  const handleOnChangeMinutes = e => {
    setMinutes(parseInt(e.target.value === "" ? 0 : e.target.value));
  };

  const handleOnChangeSeconds = e => {
    setSeconds(parseInt(e.target.value === "" ? 0 : e.target.value));
  };

  const handleOnChangeDate = e => {
    setDate(e.target.value);
  };

  const handleOnChangeTextComment = e => {
    setComment(e.target.value);
  };

  const handleOnClickChooseAuthor = name => {
    setAuthor(name);
  };

  const handleOnChangeSelectClient = e => {
    setClient(e.target.value);
  };

  const handleOnChangeSelectProject = e => {
    setAddProjectTitle(e.target.value);
  };

  return (
    <form className="todo-form">
      {isOpenAddSubtaskModal ? (
        <div className="todo-subtasks-wrapper">
          <button
            className="todo-subtask-close"
            onClick={handleIsOpenAddSubtaskModal}
          />
          <div className="todo-subtask-wrapper">
            <input
              type="text"
              placeholder="Enter subtask"
              className="todo-input-subtask"
              onChange={handleOnChangeSubtask}
            />
            <button
              className="todo-subtask-add"
              onClick={handleOnClickAddSubtask}
            />
          </div>
        </div>
      ) : null}
      <h2 className="todo-form-title">
        TASK <b>TO DO</b>
      </h2>
      <div className="todo-form-wrapper">
        <input
          type="text"
          className={`todo-input ${inputValue.length > 100 ? "invalid" : ""}`}
          onChange={handleOnChangeInputValue}
          value={inputValue}
          placeholder="Enter a todo task"
        />
        <div className="todo-additional-task">
          <input
            className="todo-input-additional-task"
            type="text"
            placeholder="click and add additional tasks"
            disabled
          />
          <button
            className="todo-additional-task-add"
            onClick={handleIsOpenAddSubtaskModal}
          />
        </div>
      </div>
      <div className="todo-textarea-wrapper">
        <textarea
          type="text"
          className="todo-textarea"
          onChange={handleOnChangeTextNote}
          value={textareaValue}
          placeholder="Enter a note to this task"
        />
        <textarea
          type="text"
          className="todo-textarea-comment"
          onChange={handleOnChangeTextComment}
          value={comment}
          placeholder="Enter your comment to this task"
        />
      </div>
      <div className="todo-categories">
        <h2 className="todo-categories-title">PROJECTS CATEGORY</h2>
        <div className="todo-category">
          <label for="development">
            <input
              className="todo-radio"
              type="radio"
              name="category"
              id="development"
              onChange={handleOnChangeSelectCategory}
              value="development"
            />
            Development
          </label>
        </div>
        <div className="todo-category">
          <label for="webdesign">
            <input
              className="todo-radio"
              type="radio"
              name="category"
              id="webdesign"
              onChange={handleOnChangeSelectCategory}
              value="webdesign"
            />
            Webdesign
          </label>
        </div>
        <div className="todo-category">
          <label for="english">
            <input
              className="todo-radio"
              type="radio"
              name="category"
              id="english"
              onChange={handleOnChangeSelectCategory}
              value="english"
            />
            English
          </label>
        </div>
        <div className="todo-category">
          <label for="vr">
            <input
              className="todo-radio"
              type="radio"
              name="category"
              id="vr"
              onChange={handleOnChangeSelectCategory}
              value="vr"
            />
            VR / 3D Development
          </label>
        </div>
        <div className="todo-category">
          <label for="marketing">
            <input
              className="todo-radio"
              type="radio"
              name="category"
              id="marketing"
              onChange={handleOnChangeSelectCategory}
              value="marketing"
            />
            Marketing
          </label>
        </div>
        <div className="todo-category">
          <label for="home">
            <input
              className="todo-radio"
              type="radio"
              name="category"
              id="home"
              onChange={handleOnChangeSelectCategory}
              value="home"
            />
            Home Duties
          </label>
        </div>
      </div>
      <div className="todo-additional-wrapper">
        <div className="todo-additional">
          <h2 className="todo-additional-title">CLIENT</h2>
          <select
            className="todo-select todo-select-additional"
            onChange={handleOnChangeSelectClient}
          >
            <option value="Client 1">Client 1</option>
            <option value="Client 2">Client 2</option>
            <option value="Client 3">Client 3</option>
            <option value="Client 4">Client 4</option>
            <option value="Client 5">Client 5</option>
            <option value="Client 6">Client 6</option>
          </select>
        </div>
        <div className="todo-additional">
          <h2 className="todo-additional-title">CURRENT PROJECT</h2>
          <select
            className="todo-select todo-select-additional"
            onChange={handleOnChangeSelectProject}
          >
            {addProject.map(project => (
              <option value={project.title} key={project.id}>
                {project.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="todo-radio-box">
        <div className="todo-time">
          <h2 className="todo-time-title">TIME YOU NEED</h2>
          <div className="todo-time-wrapper">
            <label>Hours</label>
            <input
              type="number"
              min="0"
              className="todo-input-time"
              placeholder="0"
              value={hours}
              onChange={handleOnChangeHours}
            />
          </div>
          <div className="todo-time-wrapper">
            <label>Minutes</label>
            <input
              type="number"
              min="0"
              max="59"
              className="todo-input-time"
              placeholder="0"
              value={minutes >= 60 ? 59 : minutes}
              onChange={handleOnChangeMinutes}
            />
          </div>
          <div className="todo-time-wrapper">
            <label>Seconds</label>
            <input
              type="number"
              min="0"
              max="59"
              className="todo-input-time"
              placeholder="0"
              value={seconds}
              onChange={handleOnChangeSeconds}
            />
          </div>
        </div>
        <div className="todo-date">
          <h2 className="todo-date-title">CHOOSE DATE</h2>
          <input
            type="date"
            className="todo-date-value"
            onChange={handleOnChangeDate}
          />
        </div>
        <div className="todo-priorities">
          <h2 className="todo-priorities-title">PRIORITY</h2>
          <div className="todo-priority">
            <label for="low">
              <input
                className="todo-radio"
                type="radio"
                name="priority"
                id="low"
                onChange={handleOnChangeSelectPriority}
                value="low"
              />
              Low
            </label>
          </div>
          <div className="todo-priority">
            <label for="medium">
              <input
                className="todo-radio"
                type="radio"
                name="priority"
                id="medium"
                onChange={handleOnChangeSelectPriority}
                value="medium"
              />
              Medium
            </label>
          </div>
          <div className="todo-priority">
            <label for="high">
              <input
                className="todo-radio"
                type="radio"
                name="priority"
                id="high"
                onChange={handleOnChangeSelectPriority}
                value="high"
              />
              High
            </label>
          </div>
        </div>
      </div>
      <div className="todo-team">
        <h2 className="todo-team-title">FOR WHO THIS TASK?</h2>
        <div
          className="todo-team-member"
          onClick={() => handleOnClickChooseAuthor(CONSTANT.AUTHOR.WICK)}
        >
          <img
            src={CONSTANT.AUTHOR_IMG.WICK}
            alt=""
            className="todo-team-member-img responsive"
            alt="fullstack developer"
          />
          <p className="todo-team-member-name">John Wick</p>
          <p className="todo-team-member-position">FullStack Developer</p>
        </div>
        <div
          className="todo-team-member"
          onClick={() => handleOnClickChooseAuthor(CONSTANT.AUTHOR.HANNIBAL)}
        >
          <img
            src={CONSTANT.AUTHOR_IMG.HANNIBAL}
            alt=""
            className="todo-team-member-img responsive"
            alt="designer developer"
          />
          <p className="todo-team-member-name">Hanibal Lecter</p>
          <p className="todo-team-member-position">UX/UI Designer</p>
        </div>
        <div
          className="todo-team-member"
          onClick={() => handleOnClickChooseAuthor(CONSTANT.AUTHOR.RAMBO)}
        >
          <img
            src={CONSTANT.AUTHOR_IMG.RAMBO}
            alt=""
            className="todo-team-member-img responsive"
            alt="backend developer"
          />
          <p className="todo-team-member-name">John Rambo</p>
          <p className="todo-team-member-position">Backend Developer</p>
        </div>
        <div
          className="todo-team-member"
          onClick={() => handleOnClickChooseAuthor(CONSTANT.AUTHOR.LEON)}
        >
          <img
            src={CONSTANT.AUTHOR_IMG.LEON}
            alt=""
            className="todo-team-member-img responsive"
            alt="frontend developer"
          />
          <p className="todo-team-member-name">Leon</p>
          <p className="todo-team-member-position">Frontend Developer</p>
        </div>
        <div
          className="todo-team-member"
          onClick={() => handleOnClickChooseAuthor(CONSTANT.AUTHOR.BILL)}
        >
          <img
            src={CONSTANT.AUTHOR_IMG.BILL}
            alt=""
            className="todo-team-member-img responsive"
            alt="frontend developer"
          />
          <p className="todo-team-member-name">Kill Bill</p>
          <p className="todo-team-member-position">Frontend Developer</p>
        </div>
      </div>
      <button
        className={inputValue.length < 1 ? "todo-button active" : "todo-button"}
        type="submit"
        onClick={handleOnClickSubmit}
        disabled={
          inputValue.length < 10 || inputValue.length > 100 ? !status : status
        }
      >
        add task
      </button>
      <button className="todo-button mr-10" style={{ display: "none" }}>
        save task
      </button>
    </form>
  );
};

Form.propTypes = {
  setInputValue: PropTypes.func.isRequired,
  setToDoLists: PropTypes.func.isRequired,
  setTextAreaValue: PropTypes.func.isRequired,
  textareaValue: PropTypes.string.isRequired,
  toDoLists: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
};

export default Form;
