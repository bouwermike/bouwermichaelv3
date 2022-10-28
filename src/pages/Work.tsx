import ContentBox from "../components/ContentBox/ContentBox";
import WorkCard from "../components/WorkCard/WorkCard";
import workHistory from "../data/workhistory";

const Work = () => {
  return (
    <ContentBox column={true}>
      {workHistory.map((e, i) => (
        <div key={i}>
          <WorkCard
            dark={i % 2 === 0 ? false : true}
            company={e.company}
            link={e.link}
            jobtitle={e.jobtitle}
            location={e.location}
            duration={e.duration}
            description={e.description}
          />
        </div>
      ))}
    </ContentBox>
  );
};
export default Work;
