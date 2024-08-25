import data from "../helper/data";
import Picture from "../components/Picture";

const Homepage = () => {
  console.log(data);
  return (
    <div className="pictures">
      {data.map(({ photographer, src: { large } }) => {
        return (
          <div className="picture">
            <Picture img={large} />
            <div className="info">
              <h4>{photographer}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
