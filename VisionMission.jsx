function VisionMission() {
  const values = [
    "Quality",
    "Integrity",
    "Customer Satisfaction",
    "Innovation",
    "Responsibility",
    "Teamwork",
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center mb-14">

          <div className="flex items-center justify-center gap-3 mb-4">

            <span className="w-8 h-[2px] bg-orange-600" />

            {/* Sub-heading - Poppins Medium */}
            <span
              className="text-sm font-medium
                         tracking-[0.18em]
                         uppercase text-orange-700"
            >
              Our Principles
            </span>

            <span className="w-8 h-[2px] bg-orange-600" />

          </div>

          {/* Main Heading - Poppins Bold */}
          <h2
            className="text-4xl md:text-5xl
                       font-bold
                       text-orange-950"
          >
            Driven by Purpose,
            <span className="block text-orange-600">
              Guided by Values.
            </span>
          </h2>

          {/* Paragraph - Poppins Regular */}
          <p
            className="mt-5 text-lg
                       font-normal
                       text-orange-950/60
                       leading-relaxed"
          >
            Our vision, mission, and core values guide the way
            we produce, serve, and grow.
          </p>

        </div>


        {/* ================= VISION & MISSION ================= */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">

          {/* Vision */}
          <div
            className="group rounded-3xl
                       bg-[#FFF4E6]
                       border border-orange-100
                       p-8 md:p-10
                       hover:shadow-xl
                       hover:shadow-orange-900/5
                       transition-all duration-300"
          >

            {/* Icon */}
            <div
              className="w-14 h-14
                         rounded-2xl
                         bg-orange-700
                         flex items-center justify-center
                         mb-6"
            >
              <span className="text-2xl">
                ◉
              </span>
            </div>

            {/* Sub-heading */}
            <p
              className="text-sm font-medium
                         uppercase tracking-wider
                         text-orange-600"
            >
              Our Vision
            </p>

            {/* Heading */}
            <h3
              className="mt-3 text-2xl
                         font-bold
                         text-orange-950"
            >
              A Trusted Name in Food Manufacturing
            </h3>

            {/* Paragraph */}
            <p
              className="mt-4 text-base md:text-lg
                         font-normal
                         leading-relaxed
                         text-orange-950/65"
            >
              To become a trusted and leading food manufacturing
              company by delivering high-quality products and
              ensuring customer satisfaction.
            </p>

          </div>


          {/* Mission */}
          <div
            className="group rounded-3xl
                       bg-orange-700
                       p-8 md:p-10
                       hover:shadow-xl
                       hover:shadow-orange-900/20
                       transition-all duration-300"
          >

            {/* Icon */}
            <div
              className="w-14 h-14
                         rounded-2xl
                         bg-white/15
                         flex items-center justify-center
                         mb-6"
            >
              <span className="text-2xl text-white">
                ✓
              </span>
            </div>

            {/* Sub-heading */}
            <p
              className="text-sm font-medium
                         uppercase tracking-wider
                         text-orange-100"
            >
              Our Mission
            </p>

            {/* Heading */}
            <h3
              className="mt-3 text-2xl
                         font-bold
                         text-white"
            >
              Quality, Safety & Customer Satisfaction
            </h3>

            <div className="mt-5 space-y-3">

              <div className="flex gap-3">
                <span className="text-orange-200">✓</span>

                {/* Paragraph */}
                <p
                  className="font-normal
                             text-white/80
                             leading-relaxed"
                >
                  Produce safe, high-quality food products
                  under strict hygiene standards.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-orange-200">✓</span>

                {/* Paragraph */}
                <p
                  className="font-normal
                             text-white/80
                             leading-relaxed"
                >
                  Satisfy customer needs with reliable
                  products and services.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-orange-200">✓</span>

                {/* Paragraph */}
                <p
                  className="font-normal
                             text-white/80
                             leading-relaxed"
                >
                  Contribute to Nepal's economic development
                  through manufacturing excellence.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ================= CORE VALUES ================= */}
        <div
          className="rounded-3xl
                     border border-orange-100
                     bg-[#FFF8F0]
                     p-8 md:p-10"
        >

          <div
            className="flex flex-col lg:flex-row
                       lg:items-center
                       gap-8"
          >

            {/* Title */}
            <div className="lg:w-1/3">

              {/* Sub-heading */}
              <p
                className="text-sm font-medium
                           uppercase tracking-wider
                           text-orange-600"
              >
                Core Values
              </p>

              {/* Heading */}
              <h3
                className="mt-2 text-2xl md:text-3xl
                           font-bold
                           text-orange-950"
              >
                What We Stand For
              </h3>

            </div>


            {/* Values */}
            <div
              className="lg:w-2/3
                         grid grid-cols-2
                         md:grid-cols-3
                         gap-3"
            >

              {values.map((value) => (

                <div
                  key={value}
                  className="flex items-center gap-3
                             rounded-xl
                             bg-white
                             border border-orange-100
                             px-4 py-4
                             hover:border-orange-300
                             hover:-translate-y-0.5
                             transition-all duration-300"
                >

                  <span
                    className="w-7 h-7
                               rounded-full
                               bg-orange-100
                               text-orange-700
                               flex items-center
                               justify-center
                               text-xs
                               font-bold"
                  >
                    ✓
                  </span>

                  {/* Value - Poppins Medium */}
                  <span
                    className="text-sm
                               font-medium
                               text-orange-950"
                  >
                    {value}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default VisionMission;