import ContentBox from "../components/ContentBox/ContentBox";
import FlexGrid from "../components/FlexGrid/FlexGrid";

const Home = () => {
  return (
    <div className='fill'>
      <ContentBox column={false}>
        <FlexGrid>
          <h1>
            Hi, I'm <span className='accent'>Michael.</span>
          </h1>
          <div>
            <p>
              I'm a product &#38; business strategist with experience working
              for large and small tech companies on three continents.
            </p>
            <p>
              I sit at the intersection of development, business, and design -
              equal parts tech nerd, sales jock and UX hipster.
            </p>
            <p>
              I enjoy turning data into executable narrative - breaking down
              complex problems into simple stories that drive a product
              towards market-fit, user delight, and scalable commercial success.
            </p>
          </div>
        </FlexGrid>
      </ContentBox>
    </div>
  );
};
export default Home;
