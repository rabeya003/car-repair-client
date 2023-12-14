import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";
import img5 from "../assets/images/banner/5.jpg";
import img6 from "../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full mt-10">
        <div id="slide1" className="carousel-item relative w-full h-[600px]">
          <img src={img1} className="w-full object-cover rounded-lg" />
          <div className="absolute flex items-center rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full top-0 left-0">
            <div className="w-1/2 text-white ml-10 space-y-7">
              <h1 className="text-4xl md:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="w-[100px] md:w-auto btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white">
                  Discover more
                </button>
                <button className="w-[100px] md:w-auto btn btn-outline border-white text-white hover:border-white hover:text-white hover:bg-transparent">
                  Latest project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-10 bottom-0">
            <a
              href="#slide6"
              className="btn btn-circle bg-[#ffffff33] border-none text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#FF3811] border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[600px]">
          <img src={img2} className="w-full object-cover rounded-lg" />
          <div className="absolute flex rounded-lg items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full top-0 left-0">
            <div className="w-1/2 text-white ml-10 space-y-7">
              <h1 className="text-4xl md:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="w-[100px] md:w-auto btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white">
                  Discover more
                </button>
                <button className="w-[100px] md:w-auto btn btn-outline border-white text-white hover:border-white hover:text-white hover:bg-transparent">
                  Latest project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-10 bottom-0">
            <a
              href="#slide1"
              className="btn btn-circle bg-[#ffffff33] border-none text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-[#FF3811] border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[600px]">
          <img src={img3} className="w-full object-cover rounded-lg" />
          <div className="absolute flex rounded-lg items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full top-0 left-0">
            <div className="w-1/2 text-white ml-10 space-y-7">
              <h1 className="text-4xl md:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="w-[100px] md:w-auto btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white">
                  Discover more
                </button>
                <button className="w-[100px] md:w-auto btn btn-outline border-white text-white hover:border-white hover:text-white hover:bg-transparent">
                  Latest project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-10 bottom-0">
            <a
              href="#slide2"
              className="btn btn-circle bg-[#ffffff33] border-none text-white"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-[#FF3811] border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[600px]">
          <img src={img4} className="w-full object-cover rounded-lg" />
          <div className="absolute flex rounded-lg items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full top-0 left-0">
            <div className="w-1/2 text-white ml-10 space-y-7">
              <h1 className="text-4xl md:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="w-[100px] md:w-auto btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white">
                  Discover more
                </button>
                <button className="w-[100px] md:w-auto btn btn-outline border-white text-white hover:border-white hover:text-white hover:bg-transparent">
                  Latest project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-10 bottom-0">
            <a
              href="#slide3"
              className="btn btn-circle bg-[#ffffff33] border-none text-white"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle bg-[#FF3811] border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full h-[600px]">
          <img src={img5} className="w-full object-cover rounded-lg" />
          <div className="absolute rounded-lg flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full top-0 left-0">
            <div className="w-1/2 text-white ml-10 space-y-7">
              <h1 className="text-4xl md:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="w-[100px] md:w-auto btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white">
                  Discover more
                </button>
                <button className="w-[100px] md:w-auto btn btn-outline border-white text-white hover:border-white hover:text-white hover:bg-transparent">
                  Latest project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-10 bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle bg-[#ffffff33] border-none text-white"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle bg-[#FF3811] border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full h-[600px]">
          <img src={img6} className="w-full object-cover rounded-lg" />
          <div className="absolute flex items-center rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full top-0 left-0">
            <div className="w-1/2 text-white ml-10 space-y-7">
              <h1 className="text-4xl md:text-6xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="w-[100px] md:w-auto btn bg-[#FF3811] border-[#FF3811] text-white hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white">
                  Discover more
                </button>
                <button className="w-[100px] md:w-auto btn btn-outline border-white text-white hover:border-white hover:text-white hover:bg-transparent">
                  Latest project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-10 bottom-0">
            <a
              href="#slide5"
              className="btn btn-circle bg-[#ffffff33] border-none text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#FF3811] border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
