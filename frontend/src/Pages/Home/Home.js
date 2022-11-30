import Navbar from "../../Components/Navbar/Navbar";
import "./home.scss";
import List from "../../Components/List/List";
import Footer from "../../Components/Footer/Footer"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <h1 className="streamingProvider">Netflix</h1>
      <List />
      <h1 className="streamingProvider">Amazon Prime</h1>
      <List />
      <h1 className="streamingProvider">Disney+</h1>
      <List />
      <h1 className="streamingProvider">Hulu</h1>
      <List />
      <Footer />
    </div>
  );
};

export default Home;