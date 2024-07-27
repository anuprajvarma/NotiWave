import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="text-4xl font-bold text-white">
        {/* Section for displaying notification illustration */}
        <div className="m-2 mt-12">
          <div className="relative">
            <img
              src="/Illustration.png"
              alt="waves around bell"
              className="m-auto relative"
            />
            <img
              src="/ri_notification-2-line.png"
              alt="Notification"
              className="m-auto absolute inset-0"
            />
          </div>
        </div>

        <div>
          <p className="font-inter font-semibold text-[29px] text-center text-white mt-6">
            Lorem Ipsum...
          </p>
          <p className="font-inter font-normal text-white text-[19px] text-opacity-40 text-center pt-4">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        {/* Section for sending notifications */}
        <div className="flex items-center justify-center mt-16 mb-6 ml-10 mr-10">
          <button className="relative w-[327px] h-[46px] rounded-md p-0 shadow-md overflow-hidden border-2 border-violet-700 border-solid bg-indigo-950 font-inter font-semibold text-[16px] text-center text-white small-screen  md:w-[280px] md:h-[42px] lg:w-[300px] lg:h-[42px]">
            <span className="absolute inset-0 z-[-1] border-solid border-[1.4px] rounded-md"></span>
            <span className="text-sm">Send Notification</span>
          </button>
        </div>
      </div>
    </>
  );
}
