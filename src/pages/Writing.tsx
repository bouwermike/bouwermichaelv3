import ContentBox from "../components/ContentBox/ContentBox";

const Writing = () => {
  return (
    <div className='fill'>
      <ContentBox column={true}>
        <div className='center'>
          <h1>
            I communicate best through <span className='accent'>writing.</span>
          </h1>
          <p>
            I write professionally and personally on Medium, <a href='https://medium.com/@michaelbouwer'>here</a>
            .
          </p>
        </div>
      </ContentBox>
    </div>
  );
};

export default Writing;
