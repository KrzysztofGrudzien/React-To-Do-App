import React from "react";
import Summary from "../Summary/Summary";
import styled from "styled-components";
import "./WelcomeDataInfo.scss";
import SummaryPriority from "../SummaryPriority/SummaryPriority";

const ProjectsDescription = styled.li`
  border-left: 3px solid
    ${({ web, eng, vr, mark, home }) =>
      web
        ? "#24c770"
        : eng
        ? "#e11bda"
        : vr
        ? "#d2d820"
        : mark
        ? "#ff3e6a"
        : home
        ? "#ec7a17"
        : "#4c74f8"};
  font-weight: 600;
  margin: 10px 0;
  padding: 5px;
`;

const WelcomeDataInfo = ({ toDoLists }) => {
  return (
    <div className="welcome-data-info-wrapper">
      <Summary toDoLists={toDoLists} />
      <section className="project-titles">
        <h2 className="project-title">CATEGORY OF PROJECT</h2>
        <ul className="project-title-list">
          <ProjectsDescription className="project-title-item">
            Development
          </ProjectsDescription>
          <ProjectsDescription web className="project-title-item">
            Webdesign
          </ProjectsDescription>
          <ProjectsDescription eng className="project-title-item">
            English conversation/homework
          </ProjectsDescription>
          <ProjectsDescription vr className="project-title-item">
            VR / 3D Development
          </ProjectsDescription>
          <ProjectsDescription mark className="project-title-item">
            Marketing
          </ProjectsDescription>
          <ProjectsDescription home className="project-title-item">
            Home duties
          </ProjectsDescription>
        </ul>
      </section>
      <SummaryPriority toDoLists={toDoLists} />
    </div>
  );
};

export default WelcomeDataInfo;
