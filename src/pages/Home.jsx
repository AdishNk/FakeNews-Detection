import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Input from "./Input";

function Home() {
  return (
    <>
      <Nav />
      <div className="center_container">
        <Input />
      </div>
      <Footer />
    </>
  );
}

export default Home;
