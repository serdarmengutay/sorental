import Logo from "../../atoms/Logo";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import MainScreenTemplate from "../../templates/MainScreenTemplate";

const Home = () => {
  return (
    <MainScreenTemplate>
      <Header />
      <div>
        <h1>
          Welcome to <Logo />
        </h1>
      </div>
      <Footer />
    </MainScreenTemplate>
  );
};
export default Home;
