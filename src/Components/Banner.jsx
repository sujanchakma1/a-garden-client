import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";

const Banner = () => {
  return (
    <div className="my-10">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slider1}
            className="md:w-full w-fit h-[450px] object-cover rounded-md relative"
          />
          <div className="absolute text-white text-center mt-10 p-20 space-y-2">
            <h2 className="text-2xl font-bold">A Flower Garden</h2>
            <p className="text-gray-200">
              It's a famous and beautiful garden in England with lots of
              different "rooms" made with hedges and plants. An American man
              named Lawrence Johnston created it a long time ago.
            </p>
            <button className="btn btn-active btn-success">Search</button>
          </div>
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
          <img
            src={slider2}
            className="w-full h-[450px] object-cover rounded-md relative"
          />
          <div className="absolute text-white text-center mt-8 p-14 space-y-2">
            <h2 className="text-2xl font-bold">Armstrong Garden Center</h2>
            <p className="text-gray-200">
              It shows Serene Gardens at Gardens by the Bay. The scene includes The gardens
              appear peaceful and well-maintained.
            </p>
            <button className="btn btn-active btn-success">Search</button>
          </div>
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
          <img
            src={slider3}
            className="w-full h-[450px] object-cover rounded-md relative"
          />
          <div className="absolute text-white text-center mt-10 p-20 space-y-2">
            <h2 className="text-2xl font-bold">Two Women Plants Garden</h2>
            <p className="text-gray-200">
              Two women are gardening outside. One is older with white hair and
              a purple jacket. The other is younger with a hat and a grey
              jacket. They are pulling up plants in a garden with a wooden
              fence.
            </p>
            <button className="btn btn-active btn-success">Search</button>
          </div>
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
