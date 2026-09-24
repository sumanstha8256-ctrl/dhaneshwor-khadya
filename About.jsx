import aboutImage from "../assets/images/logo.png";


function About() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="max-w-2xl mb-14">

          <div className="flex items-center gap-3 mb-4">
            <span className="w-9 h-[2px] bg-orange-600"></span>

            <span className="text-sm font-medium tracking-[0.18em]
                            uppercase text-orange-700">
              About Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold
                        leading-tight text-orange-950">
            Four Decades of
            <span className="block text-orange-600">
              Experience & Trust.
            </span>
          </h2>

        </div>


        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div>

            <p className="text-sm font-medium uppercase
                          tracking-wider text-orange-600 mb-3">
              Company Overview
            </p>

            <h3 className="text-2xl md:text-3xl font-medium
                          text-orange-950 leading-snug">
              Dhaneshwor Khadhya Udhyog Pvt. Ltd.
            </h3>

            <p className="mt-6 text-lg font-normal leading-relaxed
                          text-orange-950/65">
              Headquartered in Hetauda-08, Makwanpur, Nepal,
              Dhaneshwor Khadhya Udhyog Pvt. Ltd. brings over
              40 years of industry experience, officially
              establishing its modern manufacturing operations
              in 2064 B.S.
            </p>

            <p className="mt-5 text-lg font-normal leading-relaxed
                          text-orange-950/65">
              The company produces safe, high-quality, and
              hygienic food products using modern manufacturing
              practices and strict quality control standards.
            </p>


            {/* Information Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              {/* Experience */}
              <div className="rounded-2xl bg-[#FFF4E6]
                              border border-orange-100
                              p-5">

                <p className="text-3xl font-bold text-orange-700">
                  40+
                </p>

                <p className="mt-1 text-sm font-medium
                              text-orange-950">
                  Years of Industry Experience
                </p>

              </div>


              {/* Location */}
              <div className="rounded-2xl bg-[#FFF4E6]
                              border border-orange-100
                              p-5">

                <p className="text-lg font-medium text-orange-950">
                  Hetauda-08
                </p>

                <p className="mt-1 text-sm font-normal text-orange-950/60">
                  Makwanpur, Nepal
                </p>

              </div>

            </div>

          </div>


{/* Right Image Container */}
<div className="relative flex items-center justify-center p-4">

  {/* Decorative Blurred Glow Background */}
  <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-amber-200/40 via-orange-300/30 to-amber-100/50 blur-2xl -z-10" />

  {/* Outer Frame with Radial Gradient & Border */}
  <div className="relative w-full h-[380px] md:h-[440px]
                  rounded-[2.5rem]
                  bg-gradient-to-b from-[#FFFBF7] via-[#FFF4E8] to-[#FFEEDC]
                  border border-orange-200/70
                  shadow-xl shadow-orange-950/5
                  overflow-hidden
                  flex items-center justify-center p-8
                  group">

    {/* Subtle Inner Decorative Grid Lines */}
    <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.04]" />

    {/* Floating Decorative Rings */}
    <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-orange-300/20 bg-orange-200/20 blur-sm" />
    <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border border-amber-300/30 bg-amber-200/20 blur-sm" />

    {/* Center Emblem Container */}
    <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 
                    rounded-full bg-white/90 backdrop-blur-md
                    border border-orange-200/60 
                    shadow-lg shadow-orange-900/10 
                    flex items-center justify-center p-6
                    transition-transform duration-500 group-hover:scale-105">

      {/* Outer Golden/Orange Ring Effect */}
      <div className="absolute inset-2 rounded-full border border-dashed border-orange-300/60" />

      {/* Logo Image */}
      <img
        src={aboutImage}
        alt="Dhaneshwor Khadhya Udhyog"
        className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
      />
    </div>

  </div>

</div>

        </div>

      </div>
    </section>
  );
}

export default About;