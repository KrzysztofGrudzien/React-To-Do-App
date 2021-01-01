import React from "react";
import "./AddClientForm.scss";

const AddClientForm = () => {
  return (
    <div className="form-container">
      <h2>CREATE NEW CLIENT</h2>
      <form className="client-form">
        <div className="client-form-wrapper">
          <div className="client-input-wrapper">
            <h3 className="client-input-title">OWNER NAME</h3>
            <input
              type="text"
              placeholder="Enter client name"
              className="client-input"
            />
          </div>
          <div className="client-input-wrapper">
            <h3 className="client-input-title">OWNER LAST NAME</h3>
            <input
              type="text"
              placeholder="Enter client surname"
              className="client-input"
            />
          </div>
          <div className="client-input-wrapper">
            <h3 className="client-input-title">COMPANY NAME</h3>
            <input
              type="text"
              placeholder="Enter title of client"
              className="client-input"
            />
          </div>
          <div className="client-input-wrapper">
            <h3 className="client-input-title">E-MAIL</h3>
            <input
              type="email"
              placeholder="Enter email of client"
              className="client-input"
            />
          </div>
          <div className="client-input-wrapper">
            <h3 className="client-input-title">POST CODE</h3>
            <input
              type="text"
              className="client-input"
              placeholder="Enter post code"
            />
          </div>
          <div className="client-input-wrapper">
            <h3 className="client-input-title">CITY</h3>
            <input
              type="text"
              className="client-input"
              placeholder="Enter city"
            />
          </div>
          <div className="client-input-wrapper">
            <h3 className="client-input-title">STATE / PROVINCE / COMMUNE</h3>
            <input
              type="text"
              className="client-input"
              placeholder="Enter STATE / PROVINCE / COMMUNE"
            />
          </div>
          <div className="client-input-wrapper">
            <h3 className="client-input-title">STREET</h3>
            <input
              type="text"
              className="client-input"
              placeholder="Enter name of street"
            />
          </div>
          <div className="client-input-wrapper">
            <h3 className="client-input-title">NUMBER</h3>
            <input type="number" min="0" className="client-input" value="0" />
          </div>
          <div className="client-input-wrapper">
            <h3 className="client-input-title">ADDITIONAL</h3>
            <input type="text" className="client-input" value="none" />
          </div>
          <div className="client-input-wrapper">
            <h3 className="client-input-title">TYPE OF BUSINESS</h3>
            <select type="select" className="client-input">
              <option value="logistic">Logistic</option>
              <option value="it">IT</option>
              <option value="administration">Administration</option>
              <option value="advertisment">Advertisement</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="client-input-wrapper">
            <h3 className="client-input-title">NIP</h3>
            <input
              type="number"
              min="0"
              className="client-input"
              value="0000000000"
            />
          </div>
          <div className="client-input-wrapper">
            <h3 className="client-input-title">BANK</h3>
            <select type="select" className="client-input">
              <option value="santander">Santander</option>
              <option value="bnp">BNP Paribas</option>
              <option value="mbank">mBank</option>
              <option value="alior">Alior</option>
            </select>
          </div>
          <div className="client-input-wrapper">
            <h3 className="client-input-title">BANK ACCOUNT</h3>
            <input
              type="number"
              min="0"
              className="client-input"
              value="0000011111222223333344444555556"
            />
          </div>
          <div className="client-input-wrapper">
            <h3 className="client-input-title">PHONE NUMBER</h3>
            <input
              type="number"
              min="0"
              className="client-input"
              value="1234546789"
            />
          </div>
          <button>Add client</button>
        </div>
      </form>
    </div>
  );
};

export default AddClientForm;
