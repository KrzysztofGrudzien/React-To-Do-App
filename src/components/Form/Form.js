import React, { useState } from "react";
import "./Form.scss";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import FullStackImg from "../../assets/images/johnny-wick.jpg";
import FrontendOneImg from "../../assets/images/leon.jpg";
import BackendImg from "../../assets/images/rambo.png";
import FrontendTwoImg from "../../assets/images/kill-bill.jpg";
import DesignerImg from "../../assets/images/hannibal.jpg";
import CheckedIcon from "../../assets/icons/checkbox-checked-blue.svg";
import UnCheckedIcon from "../../assets/icons/checkbox-unchecked.svg";
import BinIcon from "../../assets/icons/bin-blue.svg";
import TickIcon from "../../assets/icons/tick-green.svg";

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
  priority,
  setPriority,
  author,
  setAuthor
}) => {
  const handleOnChangeInputValue = e => {
    setInputValue(e.target.value);
  };

  const handleOnClickSubmit = e => {
    e.preventDefault();
    const newDate = new Date();
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
        date: newDate.toString().slice(0, 24),
        priority: priority,
        author: author
      }
    ]);
    setInputValue("");
    setTextAreaValue("");
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setAuthor("");
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
    console.log(e.target.value);
  };

  const [startDate, setStartDate] = useState(new Date());

  const handleOnClickChooseWick = () => {
    setAuthor("John Wick");
  };

  const handleOnClickChooseLecter = () => {
    setAuthor("Hannibal Lecter");
  };

  const handleOnClickChooseRambo = () => {
    setAuthor("John Rambo");
  };
  const handleOnClickChooseBill = () => {
    setAuthor("Kill Bill");
  };
  const handleOnClickChooseLeon = () => {
    setAuthor("Leon");
  };

  return (
    <form className="todo-form">
      {/* <div className="todo-subtasks-wrapper"> 
        <button className="todo-subtask-close" />
        <div className="todo-subtask-wrapper">
          <input
            type="text"
            placeholder="Enter subtask"
            className="todo-input-subtask"
          />
          <button className="todo-subtask-add" />
        </div>
        <ul className="todo-subtask-list">
          <li className="todo-subtask-item">
            <img src={CheckedIcon} alt="checked icon" />
            lorem ipsum dolor sit amet, lorem ipsum appour luctus
            <div>
              <img src={TickIcon} alt="tick icon" />
              <img src={BinIcon} alt="trash icon" />
            </div>
          </li>
          <li className="todo-subtask-item">
            <img src={UnCheckedIcon} alt="checked icon" />
            lorem ipsum dolor sit amet, lorem ipsum appour luctus
            <div>
              <img src={TickIcon} alt="tick icon" />
              <img src={BinIcon} alt="trash icon" />
            </div>
          </li>
          <li className="todo-subtask-item">
            <img src={UnCheckedIcon} alt="checked icon" />
            lorem ipsum dolor sit amet, lorem ipsum appour luctus
            <div>
              <img src={TickIcon} alt="tick icon" />
              <img src={BinIcon} alt="trash icon" />
            </div>
          </li>
        </ul>
      </div>
      */}
      <h2 className="todo-form-title">
        TASK <b>TO DO</b>
      </h2>
      {/*
      <p
        className={`todo-info-validation  ${
          inputValue.length < 10 || inputValue.length > 100 ? "" : "done"
        }`}
      >
        The title must has at least 10 characters but no more than 100
      </p>
      */}
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
          <button className="todo-additional-task-add" />
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
          <select className="todo-select todo-select-additional">
            <option value="">Client 1</option>
            <option value="">Client 2</option>
            <option value="">Client 3</option>
            <option value="">Client 4</option>
            <option value="">Client 5</option>
            <option value="">Client 6</option>
          </select>
        </div>
        <div className="todo-additional">
          <h2 className="todo-additional-title">CURRENT PROJECT</h2>
          <select className="todo-select todo-select-additional">
            <option value="">Landing page based on Gatsby for Company Z</option>
            <option value="">
              Mortgae calulator based on Node.js and MongoDB
            </option>
            <option value="">Branding Campange for Company Y</option>
            <option value="">SPA - for my company</option>
            <option value="">Graphic layout for Company X</option>
            <option value="">Experimental Three.js Website</option>
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
          <input type="date" className="todo-date-value" />
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
        <div className="todo-team-member" onClick={handleOnClickChooseWick}>
          <img
            src={FullStackImg}
            alt=""
            className="todo-team-member-img responsive"
            alt="fullstack developer"
          />
          <p className="todo-team-member-name">John Wick</p>
          <p className="todo-team-member-position">FullStack Developer</p>
        </div>
        <div className="todo-team-member" onClick={handleOnClickChooseLecter}>
          <img
            src={DesignerImg}
            alt=""
            className="todo-team-member-img responsive"
            alt="designer developer"
          />
          <p className="todo-team-member-name">Hanibal Lecter</p>
          <p className="todo-team-member-position">UX/UI Designer</p>
        </div>
        <div className="todo-team-member" onClick={handleOnClickChooseRambo}>
          <img
            src={BackendImg}
            alt=""
            className="todo-team-member-img responsive"
            alt="backend developer"
          />
          <p className="todo-team-member-name">John Rambo</p>
          <p className="todo-team-member-position">Backend Developer</p>
        </div>
        <div className="todo-team-member" onClick={handleOnClickChooseLeon}>
          <img
            src={FrontendOneImg}
            alt=""
            className="todo-team-member-img responsive"
            alt="frontend developer"
          />
          <p className="todo-team-member-name">Leon</p>
          <p className="todo-team-member-position">Frontend Developer</p>
        </div>
        <div className="todo-team-member" onClick={handleOnClickChooseBill}>
          <img
            src={FrontendTwoImg}
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
