import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-[#FFF4E6] min-h-[calc(100vh-80px)] pt-12 pb-16 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div>

            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-orange-600"></span>

              <span className="text-sm font-medium tracking-widest uppercase text-orange-700">
                Est. 2064 B.S.
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-orange-950 leading-tight">
              Quality Food Products,{" "}
              <span className="text-orange-600">
                Built on Experience.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-base md:text-lg font-normal text-orange-900/70 leading-relaxed">
              With over 40 years of industry experience, Dhaneshwor Khadhya
              Udhyog Pvt. Ltd. produces safe, high-quality, and hygienic food
              products through modern manufacturing practices and strict
              quality control.
            </p>

            {/* Experience */}
            <div className="mt-6 flex items-center gap-4">

              <div>
                <p className="text-2xl md:text-3xl font-bold text-orange-700">
                  40+
                </p>

                <p className="text-xs md:text-sm font-normal text-orange-900/60">
                  Years of Industry Experience
                </p>
              </div>

              <div className="w-px h-10 bg-orange-200"></div>

              <div>
                <p className="text-base md:text-lg font-medium text-orange-950">
                  Hetauda
                </p>

                <p className="text-xs md:text-sm font-normal text-orange-900/60">
                  Makwanpur, Nepal
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/products"
                className="px-6 py-3 rounded-full
                           bg-orange-700 text-white
                           font-medium
                           hover:bg-orange-800
                           transition-all duration-300
                           shadow-md hover:shadow-lg text-sm md:text-base"
              >
                Explore Products
              </Link>

              <Link
                to="/about"
                className="px-6 py-3 rounded-full
                           border border-orange-300
                           text-orange-800
                           font-medium
                           hover:bg-orange-100
                           transition-all duration-300 text-sm md:text-base"
              >
                Our Journey
              </Link>

            </div>

          </div>

          {/* Right Visual */}
          <div className="relative pb-6 lg:pb-0">

            {/* Main Image Placeholder */}
            <div className="relative h-[320px] sm:h-[380px] lg:h-[400px]
                            rounded-[2rem]
                            bg-orange-100/60
                            border border-orange-200
                            overflow-hidden">

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white
                                flex items-center justify-center
                                shadow-sm mb-4">

                  <span className="text-3xl sm:text-4xl">
                    🌾
                  </span>

                </div>

                <p className="text-lg sm:text-xl font-medium text-orange-950">
                  Dhaneshwor Khadhya Udhyog
                </p>

                <p className="mt-1 text-sm sm:text-base font-normal text-orange-900/60">
                  Hetauda-08, Makwanpur, Nepal
                </p>

              </div>

            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-2 -left-3 md:-left-6
                            bg-white rounded-2xl
                            px-5 py-4
                            shadow-xl border border-orange-100">

              <p className="text-2xl md:text-3xl font-bold text-orange-700">
                40+
              </p>

              <p className="text-xs md:text-sm font-medium text-orange-950">
                Years of Experience
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;