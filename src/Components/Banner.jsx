import slider1 from "../assets/banner-1.jpg";
import slider2 from "../assets/banner-2.jpg";
import slider3 from "../assets/banner-3.jpg";

const Banner = () => {
   
  return (
    <div className="my-10" >
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          {/* Background Image */}
          <img
            src={slider1}
            className="md:w-full w-fit h-[400px] object-cover rounded-md relative"
          />

          {/* Soft Black Mask */}
          <div className="absolute inset-0 bg-black/20 rounded-md"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center text-white px-4">
            <div className="max-w-sm md:max-w-md text-center space-y-2">
              <h2 className="text-2xl font-bold">A Garden to Rest the Soul</h2>
              <p className="text-gray-200">
                A peaceful park filled with blooming flowers, where the scent of
                nature fills the air. In one corner stands a cozy little hut — a
                perfect place to sit, breathe, and let time slow down.
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          {/* Background Image */}
          <img
            src={slider2}
            className="md:w-full w-fit h-[400px] object-cover rounded-md relative"
          />
          {/* Soft Black Mask */}
          <div className="absolute inset-0 bg-black/20 rounded-md"></div>
          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center text-white px-4">
            <div className="max-w-sm md:max-w-md text-center space-y-2">
              <h2 className="text-2xl font-bold">
                The Road Through Green Silence
              </h2>
              <p className="text-gray-200">
                A quiet road winds ahead, lined with trees and bushes on both
                sides. The rustling leaves and the open path whisper stories of
                peace, waiting to be walked.
              </p>
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          {/* Background Image */}
          <img
            src={slider3}
            className="md:w-full w-fit h-[400px] object-cover rounded-md relative"
          />
          {/* Soft Black Mask */}
          <div className="absolute inset-0 bg-black/20 rounded-md"></div>
          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center text-white px-4">
            <div className="max-w-sm md:max-w-md text-center space-y-2">
              <h2 className="text-2xl font-bold">Whispers by the Lake</h2>
              <p className="text-gray-200">
                A still lake and a quiet tree — nature’s gentle whisper in a
                noisy world.
              </p>
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
