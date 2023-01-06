import FeaturedInfo from "../components/FeaturedInfo";
import Sales from "../components/Sales";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Sales />
    </div>
  );
}

export default Home;
