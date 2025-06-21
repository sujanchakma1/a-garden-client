import React from "react";

const Extra2 = () => {
  return (
    <section className="my-10 px-4 te text-center items-center">
      <h2 className="text-2xl font-bold mb-4">🌟 Happy Gardeners</h2>

      <div className="md:flex space-y-5 gap-5">
        <div className="w-full rounded-box">
          <div className=" w-full">
            <div className="bg-base-200 p-6 rounded-lg hover:shadow-2xl text-center">
              <p>
                “Thanks to this platform, I’ve found more clients and feel
                motivated to share my gardening journey!”
              </p>
              <p className="font-bold mt-2">– Emily Smith</p>
            </div>
          </div>
          {/* More testimonial cards */}
        </div>
        <div className=" w-full rounded-box">
          <div className=" w-full">
            <div className="bg-base-200 hover:shadow-2xl p-6 rounded-lg text-center">
              <p>
                "This has been a game-changer for me. I'm now fully booked for
                the season!",
              </p>
              <p className="font-bold mt-2">– Ali Khan</p>
            </div>
          </div>
          {/* More testimonial cards */}
        </div>
      </div>
    </section>
  );
};

export default Extra2;
