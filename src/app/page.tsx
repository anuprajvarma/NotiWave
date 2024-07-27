"use client";

import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const handleSendNotification = async () => {
    let permission = await Notification.requestPermission();

    if (permission === "granted") {
      let notificationOptions = {
        body: "Some Notification information",
        icon: "/notification-icon.png",
      };
      let notif = new Notification("My New Notification", notificationOptions);
      toast.success("Notification Sent Successfully");
    } else {
      toast.error("Notification Permission Denied");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="text-4xl font-bold text-white bg-gradient-to-t from-transparent to-violet-700/50">
        <div className="pt-12">
          <p className="font-inter font-medium text-[16px] text-center text-white my-5">
            Hola!
          </p>
          <div className="relative">
            <img
              src="/Illustration.png"
              alt="waves around bell"
              className="m-auto relative"
            />
            <img
              src="/Vector.png"
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
          <button
            onClick={handleSendNotification}
            className="relative transation duration-300 hover:bg-indigo-900 hover:border-violet-500 w-[327px] h-[46px] rounded-xl p-0 shadow-md overflow-hidden border-2 border-violet-700 border-solid bg-indigo-950 font-inter font-semibold text-[16px] text-center text-white small-screen  md:w-[280px] md:h-[42px] lg:w-[300px] lg:h-[42px]"
          >
            <span className="absolute inset-0 z-[-1] border-solid border-[1.4px] rounded-md"></span>
            <span className="text-sm">Send Notification</span>
          </button>
        </div>
      </div>
    </>
  );
}
