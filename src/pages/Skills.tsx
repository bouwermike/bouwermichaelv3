import ContentBox from "../components/ContentBox/ContentBox";

const Skills = () => {
  return (
    <ContentBox column={true}>
      <div className='center'>
        <h3>Education</h3>
        <p>B.Com Economics - UNISA</p>
        <h3>Skills</h3>
        <p>
          Writing | Leadership | Communication | Roadmapping | Product |
          Strategy | Humour | Agile
        </p>
        <h3>Tools</h3>
        <p>
          Jira | Salesforce | PowerBI | Tableau | Periscope Data | Metabase |
          Firebase | Github | Gitlab | Heroku
        </p>
        <h3>Code</h3>
        <p>Node.js | Express | Vue | React | React Native | GraphQL | SQL</p>
      </div>
    </ContentBox>
  );
};

export default Skills;
