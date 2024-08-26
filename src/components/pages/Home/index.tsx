import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import MainBody from "../../organisms/MainBody";
import MainScreenTemplate from "../../templates/MainScreenTemplate";

const Home = () => {
  return (
    <MainScreenTemplate>
      <Header />
      <MainBody />
      <Footer />
    </MainScreenTemplate>
  );
};
export default Home;
