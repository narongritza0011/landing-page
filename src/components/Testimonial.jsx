import Profile from "../assets/Profile.svg";
import BigSpring from "../assets/icons/BigSpring.svg";
import Mine from "../assets/icons/Mine.svg";
import Shake from "../assets/icons/Shake.svg";
import Tonkean from "../assets/icons/Tonkean.svg";
import Clearbit from "../assets/icons/Clearbit.svg";

// import Profile from "../assets/Profile.svg";
// import Profile from "../assets/Profile.svg";
// import Profile from "../assets/Profile.svg";
// import Profile from "../assets/Profile.svg";

/* eslint-disable react/no-unescaped-entities */
const Testimonial = () => {
  return (
    <>
      <div className="bg-shape-profile-top h-64 w-full"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* desktop */}
        <div className="hidden md:block ">
          <div className="grid justify-items-center	mt-10 h-90 ">
            <h1 className="font-medium text-2xl text-center py-4  ">
              "What I love about Qubly is the easy way we can collaborate even
              if there is a lot of people involved in the process"
            </h1>

            <img src={Profile} className="h-full" alt="" />
            <h3 className="font-bold text-base	">
              Guillaume Cabane CTO @ BigSpring
            </h3>

            <hr className="w-full  mx-auto my-4  grow-0 rounded divide-solid bg-[#DEC9FA]" />

            <div className="flex flex-row justify-stretch lg:gap-36	md:gap-14 py-4 ">
              <div className="">
                <img src={Tonkean} className="h-full" alt="" />
              </div>
              <div>
                <img src={BigSpring} className="h-full" alt="" />
              </div>
              <div>
                <img src={Clearbit} className="h-full" alt="" />
              </div>
              <div>
                <img src={Mine} className="h-full" alt="" />
              </div>
              <div>
                <img src={Shake} className="h-full" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="md:hidden">
          <div className="grid justify-items-center	mt-10 h-90 ">
            <h1 className="font-medium text-2xl text-center py-4  ">
              "What I love about Qubly is the easy way we can collaborate even
              if there is a lot of people involved in the process"
            </h1>

            <img src={Profile} className="h-full" alt="" />
            <h3 className="font-bold text-base	">
              Guillaume Cabane CTO @ BigSpring
            </h3>

            <hr className="w-full  mx-auto my-4  grow-0 rounded divide-solid bg-[#DEC9FA]" />

            <div className="flex flex-col justify-stretch	gap-10 py-2 ">
              <div className="">
                <img src={Tonkean} className="h-full" alt="" />
              </div>
              <div>
                <img src={BigSpring} className="h-full" alt="" />
              </div>
              <div>
                <img src={Clearbit} className="h-full" alt="" />
              </div>
              <div>
                <img src={Mine} className="h-full" alt="" />
              </div>
              <div>
                <img src={Shake} className="h-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-profile-bottom h-64 w-full"></div>
    </>
  );
};

export default Testimonial;
