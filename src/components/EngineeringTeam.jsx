import image from "../assets/image6.svg";
import electronic from "../assets/icons/compass.svg";

const EngineeringTeam = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:block">
          <div className=" grid grid-cols-2  gap-4 justify-items-center mt-20">
            <div className="mt-12 flex flex-col p-10  justify-center	">
              <div className="grid grid-cols-2 py-6">
                <div className="font-medium cursor-pointer w-64 justify-self-start transition duration-300 ease-in-out text-[#722ED1] bg-[#F7F1FF] px-4 py-2 rounded-full flex items-center gap-3 hover:bg-white hover:text-[#722ED1] hover:shadow-lg  ">
                  <img src={electronic} alt="" />
                  <p>For Engineering Teams</p>
                </div>
              </div>

              <h1 className="font-bold text-2xl not-italic text-start my-4">
                Data-driven pipelines in minutes
              </h1>

              <p className="sub-title-color    self-start text-[#8989A2] font-medium">
                Maintenance-free data pipelines with quick set-up and
                straight-forward deployments that are powered by a modern &
                scalable platform.
              </p>
            </div>
            <div>
              <img src={image} alt="" />
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className=" grid grid-cols-1  gap-4 justify-items-center mt-20">
            <div className="mt-12 flex flex-col p-10 items-center 	">
              <div className="font-medium cursor-pointer   text-[#722ED1] transition duration-300 ease-in-out bg-[#F7F1FF] px-4 py-2 rounded-full flex items-center gap-3 hover:bg-white hover:text-[#722ED1] hover:shadow-lg  ">
                <img src={electronic} alt="" />
                <p>For Engineering Teams</p>
              </div>

              <h1 className="font-bold text-2xl not-italic text-center my-4">
                Data-driven pipelines in minutes
              </h1>

              <p className="sub-title-color    text-center  text-[#8989A2] font-medium">
                Maintenance-free data pipelines with quick set-up and
                straight-forward deployments that are powered by a modern &
                scalable platform.
              </p>
            </div>
            <div>
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EngineeringTeam;
