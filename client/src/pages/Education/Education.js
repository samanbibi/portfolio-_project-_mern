import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import "./Education.css";
import { MdSchool } from "react-icons/md";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#537D5D", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019-2021"
            iconStyle={{ background: "#537D5D", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">FSC, Pre Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Peace Group of School And Colleges, Nowshera
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#537D5D", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2017 - 2020"
            iconStyle={{ background: "#537D5D", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BS Software Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Islamia College and University ,Peshawar
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;