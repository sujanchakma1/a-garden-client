import Aos from "aos";
import React, { useEffect } from "react";

const Extra1 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: false
    });
  }, []);
  return (
    <section
      className="my-12 bg-base-200 px-4 max-w-4xl mx-auto text-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <h2 className="text-3xl font-bold mb-4">
        Welcome to Our Gardening Community!
      </h2>
      <p className="text-gray-400 text-lg leading-relaxed">
        We are dedicated to connecting gardeners and nature lovers from all
        walks of life. Discover expert tips, find the best gardeners near you,
        and share your green journey with a friendly community. Whether you are
        a beginner or a pro, we are here to help your garden flourish.
      </p>
    </section>
  );
};

export default Extra1;
