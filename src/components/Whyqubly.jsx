import timeline from "../assets/icons/timeline.svg";
import newsletter from "../assets/icons/newsletter-dev.svg";
import chart from "../assets/icons/chart-bar-33.svg";
import { FaEye } from "react-icons/fa";

const Whyqubly = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* desktop */}
        <div className="hidden md:block">
          <div className="grid mb-10 grid-cols-3 grid-rows-2  mt-20">
            <div className=" col-span-3 mb-4">
              <div className="my-4 text-center">
                <a className="cursor-pointer bg-[#f7f1ff] transition duration-300 ease-in-out  text-[#722ED1] py-2 px-6 text-center   rounded-3xl border-[#722ED1] text-sm	font-medium	w-35 hover:bg-white  hover:shadow-lg ">
                  <span className="absolute pl-0  pt-1 mr-5">
                    <FaEye size={16} />
                  </span>
                  <span className="ml-5"> Why Qubly</span>{" "}
                </a>
              </div>
              <div className="mx-24    text-center">
                <h1 className="font-bold  text-2xl not-italic text-center">
                  Get actionable insights from Big Data in 3 steps
                </h1>
              </div>
              <div className="mx-24  mt-4  text-center">
                <p className="sub-title-color    text-center  text-[#8989A2] font-medium">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod <br /> tempor invidunt ut labore et dolore
                  magna aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>

            <div className="   flex  flex-col  items-center">
              <img src={chart} className="" alt="" />
              <h1 className="my-4 font-bold text-base not-italic text-center">
                Valuable business insights
              </h1>
              <p className="sub-title-color text-center  text-[#8989A2] font-medium">
                Collect processed & cleansed data that <br /> is ready to be
                analyzed to gather <br /> valuable business insights.
              </p>
            </div>
            <div className=" flex  flex-col  items-center">
              <img src={newsletter} alt="" />
              <h1 className="my-4  font-bold text-base not-italic text-center">
                Powerful Algorithms
              </h1>
              <p className="sub-title-color text-center  text-[#8989A2] font-medium">
                With the help of powerful algorithms,
                <br /> quality rules & techniques, obtain <br /> simplified &
                enriched data.
              </p>
            </div>

            <div className=" flex  flex-col  items-center">
              <img src={timeline} alt="" />
              <h1 className="my-4  font-bold text-base not-italic text-center">
                Data in real-time
              </h1>
              <p className="sub-title-color text-center text-[#8989A2] font-medium">
                Collect data in real-time from multiple <br /> channels and move
                it into a data lake, in <br /> its original format.
              </p>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className=" md:hidden">
          <div className="grid mb-10 grid-cols-3 grid-rows-1 gap-4  mt-20">
            <div className=" col-span-3 mb-4">
              <div className="my-4 text-center">
                <a className="cursor-pointer bg-[#f7f1ff] transition duration-300 ease-in-out text-[#722ED1] py-2 px-6 text-center   rounded-3xl border-[#722ED1] text-sm	font-medium	w-35 hover:color-primary hover:text-white hover:shadow-lg ">
                  <span className="absolute pl-0  pt-1 mr-5">
                    <FaEye size={16} />
                  </span>
                  <span className="ml-5"> Why Qubly</span>
                </a>
              </div>
              <div className="mx-24    text-center">
                <h1 className="font-bold  text-2xl not-italic text-center">
                  Get actionable insights from Big Data in 3 steps
                </h1>
              </div>
              <div className="mx-24  mt-4  text-center">
                <p className="sub-title-color    text-center  text-[#8989A2] font-medium">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod <br /> tempor invidunt ut labore et dolore
                  magna aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </div>

            <div className="flex  flex-col  items-center col-span-3">
              <img src={chart} className="" alt="" />
              <h1 className="my-4 font-bold text-base not-italic text-center">
                Valuable business insights
              </h1>
              <p className="sub-title-color text-start  text-[#8989A2] font-medium">
                Collect processed & cleansed data that <br /> is ready to be
                analyzed to gather <br /> valuable business insights.
              </p>
            </div>
            <div className=" flex  flex-col  items-center col-span-3">
              <img src={newsletter} alt="" />
              <h1 className="my-4  font-bold text-base not-italic text-center">
                Powerful Algorithms
              </h1>
              <p className="sub-title-color text-center  text-[#8989A2] font-medium">
                With the help of powerful algorithms,
                <br /> quality rules & techniques, obtain <br /> simplified &
                enriched data.
              </p>
            </div>

            <div className=" flex  flex-col  items-center col-span-3">
              <img src={timeline} alt="" />
              <h1 className="my-4  font-bold text-base not-italic text-center">
                Data in real-time
              </h1>
              <p className="sub-title-color text-center  text-[#8989A2] font-medium">
                Collect data in real-time from multiple <br /> channels and move
                it into a data lake, in <br /> its original format.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyqubly;
