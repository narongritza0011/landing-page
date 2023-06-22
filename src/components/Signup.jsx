import image1 from "../assets/signup/accenture-4.svg";
import image2 from "../assets/signup/airbnb.svg";
import image3 from "../assets/signup/react.svg";
import image4 from "../assets/signup/sky-4.svg";
import LoginGoogle from "../assets/btn_google_signin_dark_normal_web@2x.svg";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* desktop */}
        <div className="hidden md:block ">
          <div className="grid grid-cols-2 	my-20 p-6">
            <div id="content">
              <div className="grid grid-cols-1 justify-items-center">
                <h1 className="text-2xl text-[#160637]	 font-bold mb-4">
                  See why the world’s best companies use Qubly to become truly
                  data-driven.
                </h1>
              </div>

              <div className="grid grid-cols-3 justify-items-center mb-4">
                <hr className="w-full  mx-auto my-4  grow-0 rounded divide-solid bg-[#DEC9FA]" />
                <p className="text-center  font-medium	text-base text-[#8989A2]">
                  Trusted by
                </p>
                <hr className="w-full  mx-auto my-4  grow-0 rounded divide-solid bg-[#DEC9FA]" />
              </div>

              <div className="grid grid-cols-2 grid-rows-2 gap-10 justify-items-center mb-4">
                <img src={image1} className="h-full" alt="" />
                <img src={image3} className="h-full" alt="" />
                <img src={image2} className="h-full" alt="" />
                <img src={image4} className="h-full" alt="" />
              </div>
            </div>

            <div id="form" className="bg-[#F9F0FF] px-6 pb-6 ">
              <div className="bg-white grid grid-cols-1   justify-items-center gap-x-6 px-10">
                <h1 className="font-bold text-2xl	text-center  mb-4">Sign Up</h1>
                <button className="bg-[#722ED1] transition duration-300 ease-in-out hover:shadow-lg w-full flex-wrap  font-medium	rounded	 my-2 hover:bg-white  hover:text-[#722ED1] hover:border hover:border-[#722ED1] p-3 text-white">
                  Start your free trial
                </button>
                <input
                  type="text"
                  placeholder="Your primary email"
                  className="my-2 p-3 border w-full border-[#D9D9D9] rounded focus:outline-none focus:border-[#722ED1] "
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="my-2 p-3 border w-full border-[#D9D9D9] rounded focus:outline-none focus:border-[#722ED1]"
                />
                <input
                  type="text"
                  placeholder="Re-type Password"
                  className="my-2 p-3 border w-full border-[#D9D9D9] rounded focus:outline-none focus:border-[#722ED1]"
                />
                <p className="font-medium">OR</p>
                <img
                  src={LoginGoogle}
                  className="h-full cursor-pointer	hover:shadow-lg"
                  alt=""
                />
                <hr className="w-full  mx-auto my-4  grow-0 rounded divide-solid border-[#8989A2] opacity-40 " />
                <p className="font-medium text-[#8989A2] ">
                  Already have an account?
                  <Link to="/login" className="text-[#722ED1] pl-1">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className=" md:hidden ">
          <div className="grid grid-cols-1 	my-20 p-6">
            <div id="content ">
              <div className="grid grid-cols-1 justify-items-center mb-6">
                <h1 className="text-2xl text-[#160637]	 font-bold mb-4">
                  See why the world’s best companies use Qubly to become truly
                  data-driven.
                </h1>
              </div>

              <div className="grid grid-cols-3 justify-items-center mb-4">
                <hr className="w-full  mx-auto my-4  grow-0 rounded divide-solid bg-[#DEC9FA]" />
                <p className="text-center  font-medium	text-base text-[#8989A2]">
                  Trusted by
                </p>
                <hr className="w-full  mx-auto my-4  grow-0 rounded divide-solid bg-[#DEC9FA]" />
              </div>

              <div className="grid grid-cols-2 grid-rows-2 gap-10 justify-items-center mb-4">
                <img src={image1} className="h-full" alt="" />
                <img src={image3} className="h-full" alt="" />
                <img src={image2} className="h-full" alt="" />
                <img src={image4} className="h-full" alt="" />
              </div>
            </div>

            <div id="form" className="bg-[#F9F0FF] px-6 pb-6 mt-6">
              <div className="bg-white grid grid-cols-1   justify-items-center gap-x-6 px-10">
                <h1 className="font-bold text-2xl	text-center  mb-4">Sign Up</h1>
                <button className="bg-[#722ED1] transition duration-300 ease-in-out hover:shadow-lg w-full flex-wrap  font-medium	rounded	 my-2 hover:bg-white  hover:text-[#722ED1] hover:border hover:border-[#722ED1] p-3 text-white">
                  Start your free trial
                </button>
                <input
                  type="text"
                  placeholder="Your primary email"
                  className="my-2 p-3 border w-full  border-[#D9D9D9] transition duration-300 ease-in-out rounded focus:outline-none focus:border-[#722ED1] "
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="my-2 p-3 border w-full border-[#D9D9D9] transition duration-300 ease-in-out rounded focus:outline-none focus:border-[#722ED1]"
                />
                <input
                  type="text"
                  placeholder="Re-type Password"
                  className="my-2 p-3 border w-full border-[#D9D9D9] transition duration-300 ease-in-out rounded focus:outline-none focus:border-[#722ED1]"
                />
                <p className="font-medium">OR</p>
                <img
                  src={LoginGoogle}
                  className="h-full cursor-pointer	hover:shadow-lg transition duration-300 ease-in-out"
                  alt=""
                />
                <hr className="w-full  mx-auto my-4  grow-0 rounded divide-solid border-[#8989A2] opacity-40 " />
                <p className="font-medium text-[#8989A2] ">
                  Already have an account?
                  <Link to="/login" className="text-[#722ED1] pl-1">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
