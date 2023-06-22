import electronic from "../assets/icons/electronic-circuit.svg";
import image from "../assets/Group.svg";

const ProductTeam = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:block">
          <div className=" grid grid-cols-2  gap-4 justify-items-center mt-20">
            <div>
              <img src={image} alt="" />
            </div>

            <div className="mt-12 flex flex-col p-10  justify-center	">
              <div className="grid grid-cols-2 py-6">
                <div className="font-medium cursor-pointer transition duration-300 ease-in-out w-64 justify-self-start text-[#722ED1] bg-[#F7F1FF] px-4 py-2 rounded-full flex items-center gap-3 hover:bg-white hover:text-[#722ED1] hover:shadow-lg  ">
                  <img src={electronic} alt="" />
                  <p>For Product Teams</p>
                </div>
              </div>

              <h1 className="font-bold text-2xl not-italic text-start my-4">
                Launch with the best stack
              </h1>

              <p className="sub-title-color    self-start  text-[#8989A2] font-medium">
                A centralized platform that integrates zillions of data sources
                using Big Data ELT (Extract, Load & Transform) that leaves no
                data behind
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className=" grid grid-cols-1   gap-4 justify-items-center mt-20">
            <div>
              <img src={image} alt="" />
            </div>

            <div className="mt-12 flex flex-col p-10 items-center 	">
              <div className="font-medium cursor-pointer transition duration-300 ease-in-out  text-[#722ED1] bg-[#F7F1FF] px-4 py-2 rounded-full flex items-center gap-3 hover:bg-white hover:text-[#722ED1] hover:shadow-lg  ">
                <img src={electronic} alt="" />
                <p>For Product Teams</p>
              </div>

              <h1 className="font-bold text-2xl not-italic text-center my-4">
                Launch with the best stack
              </h1>

              <p className="sub-title-color    text-center  text-[#8989A2] font-medium">
                A centralized platform that integrates zillions of data sources
                using Big Data ELT (Extract, Load & Transform) that leaves no
                data behind
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTeam;
