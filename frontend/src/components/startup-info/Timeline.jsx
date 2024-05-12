import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div className="pb-10">
      <VerticalTimeline
        className="vertical-timeline-element--work"
        contentStyle={{
          boxShadow: "none",
          backgroundColor: "transparent",
          color: "#000000",
        }}
        lineColor="#000000"
        contentArrowStyle={{ opacity: 0 }}
        animate={true}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#e7e8ec",
            color: "#000000",
            borderRadius: "10px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #e7e8ec" }}
          date="August 2023"
          iconStyle={{ background: "#e7e8ec", color: "#000000" }}
        >
          <h1 className="text-xl">
            Organized a free educaitonal workshop for young minds.{" "}
          </h1>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#e7e8ec",
            color: "#000000",
            borderRadius: "10px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #e7e8ec" }}
          date="November 2023"
          iconStyle={{ background: "#e7e8ec", color: "#000000" }}
        >
          <h1 className="text-xl">
            Distributed clothes to needy on children&apos;s day
          </h1>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
