import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div className="mb-10">
      <VerticalTimeline
        className="vertical-timeline-element--work"
        contentStyle={{
          boxShadow: "none",
          backgroundColor: "transparent",
          color: "#000000",
        }}
        lineColor="#000000"
        contentArrowStyle={{ opacity: 0 }}
        animate={false}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#e7e8ec", color: "#000000", borderRadius:"10px" }}
          contentArrowStyle={{ borderRight: "7px solid #e7e8ec" }}
          date="2011 - present"
          iconStyle={{ background: "#e7e8ec", color: "#000000" }}
        >
          <h1 className="text-4xl">lorem10</h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#000000" }}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
