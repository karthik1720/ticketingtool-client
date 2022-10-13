import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import httpService from "../../httpService";

import "./incident.css";
import Success from "./Success";
function Incident() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    description: "",
    priority: "4",
  });
  const [ticket, setTicket] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    console.log(data);
    httpService.post("/incident/create", data).then((response) => {});
  };

  return (
    <div className="IncidentContainer">
      <div className="IncidentStatus">
        <button
          type="button"
          onClick={handleSubmit}
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Submit
        </button>
        <Success></Success>
      </div>
      <div className="IncidentSections2">
        <div className="IncidentSection">
          <label htmlFor="IncidentNumber" className="IncidentInputLabel">
            Unique Number
          </label>
          <input
            type="text"
            className="IncidentInput"
            id="IncidentNumber"
            disabled
          />
          <label htmlFor="IncidentPriority" className="IncidentInputLabel">
            Priority
          </label>
          <select
            id="IncidentPriority"
            name="priority"
            onChange={handleChange}
            value={data.priority}
          >
            <option value="4">Low</option>
            <option value="3">Medium</option>
            <option value="2">High</option>
            <option value="1">Critical</option>
          </select>
        </div>
        <div className="IncidentSection">
          <label htmlFor="OpenedDate" className="IncidentInputLabel">
            Opened Date
          </label>
          <input
            type="text"
            className="IncidentInput"
            id="OpenedDate"
            disabled
          />
        </div>
      </div>

      <label htmlFor="IncidentTitle" className="IncidentInputLabel">
        Title
      </label>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={data.title}
        className="IncidentInput"
        id="IncidentTitle"
      />
      <label htmlFor="IncidentNumber" className="IncidentInputLabel">
        Description
      </label>
      <textarea
        type="text"
        name="description"
        onChange={handleChange}
        value={data.description}
        className="IncidentInput"
        rows="15"
        id="IncidentNumber"
      />
    </div>
  );
}

export default Incident;
