import Navbar from "./Navbar";
import Whyqubly from "../components/Whyqubly";
import ProductTeam from "./ProductTeam";
import EngineeringTeam from "./EngineeringTeam";
import Testimonial from "./Testimonial";
import Signup from "./Signup";
import Footer from "./Footer";

const Master = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-blue-100 to-white">
        <div className="">
          <Navbar />
        </div>
      </div>
      <Whyqubly />
      <ProductTeam />
      <EngineeringTeam />
      <div className="bg-gradient-to-t from-blue-100 to-white">
        <Testimonial />
      </div>

      <Signup />

      <div className=" bg-[#FBFCFF] ">
        <Footer />
      </div>
    </>
  );
};

export default Master;
