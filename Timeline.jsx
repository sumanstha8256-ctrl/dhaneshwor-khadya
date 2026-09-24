function Timeline() {
  const journey = [
    {
      year: "1978 A.D.",
      bs: "2038 B.S.",
      title: "Sharma Stores",
      description:
        "Started with Sharma Stores, a small grocery shop built on strong customer service and product reliability.",
    },
    {
      year: "1990 – 2006",
      bs: "B.S.",
      title: "Shram Dhaneshwor Rice Mill",
      description:
        "Expanded into food processing with Shram Dhaneshwor Rice Mill, building foundational technical and agricultural expertise.",
    },
    {
      year: "2052 B.S.",
      bs: "",
      title: "Dhaneshwor Enterprises",
      description:
        "Established Dhaneshwor Enterprises to strengthen retail distribution channels.",
    },
    {
      year: "2064 B.S.",
      bs: "",
      title: "Dhaneshwor Khadhya Udhyog",
      description:
        "Officially founded Dhaneshwor Khadhya Udhyog Pvt. Ltd. to manufacture high-quality food staples, including Aata, Chakki Aata, Maida, Suji, and Chokar.",
      highlight: true,
    },
    {
      year: "2068 B.S.",
      bs: "Optional Expansion",
      title: "Dhaneshwor Brick Industry",
      description:
        "Diversified into construction materials with Dhaneshwor Brick Industry in Bariyarpur-07.",
    },
    {
      year: "2082 B.S.",
      bs: "",
      title: "Dhaneshwor Agro Food Udhyog",
      description:
        "Expanded into international and worldwide markets with Dhaneshwor Agro Food Udhyog, delivering packaged organic food products.",
    },
    {
      year: "2083 B.S.",
      bs: "",
      title: "Devayantra Traders",
      description:
        "Launched Devayantra Traders to strengthen international trading and retail availability.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFF8F0] py-20 lg:py-24">

      {/* Background Decorations */}
      <div
        className="absolute -top-32 -right-32 w-80 h-80
                   rounded-full bg-orange-200/30 blur-3xl"
      />

      <div
        className="absolute -bottom-32 -left-32 w-80 h-80
                   rounded-full bg-amber-200/30 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center mb-16">

          <div className="flex items-center justify-center gap-3 mb-4">

            <span className="w-8 h-[2px] bg-orange-600" />

            {/* Sub-heading - Poppins Medium */}
            <span
              className="text-sm font-medium
                         tracking-[0.18em]
                         uppercase
                         text-orange-700"
            >
              Our Journey
            </span>

            <span className="w-8 h-[2px] bg-orange-600" />

          </div>

          {/* Main Heading - Poppins Bold */}
          <h2
            className="text-4xl md:text-5xl
                       font-bold
                       leading-tight
                       text-orange-950"
          >
            From Humble Beginnings
            <span className="block text-orange-600">
              to Growing Horizons.
            </span>
          </h2>

          {/* Paragraph - Poppins Regular */}
          <p
            className="mt-5 text-lg
                       font-normal
                       text-orange-950/60
                       leading-relaxed"
          >
            A journey shaped by experience, growth, and a continued
            commitment to quality.
          </p>

        </div>


        {/* ================= TIMELINE ================= */}
        <div className="relative max-w-5xl mx-auto">

          {/* Center Line - Desktop */}
          <div
            className="hidden md:block absolute left-1/2
                       top-0 bottom-0 w-px
                       bg-orange-200
                       -translate-x-1/2"
          />

          {/* Mobile Line */}
          <div
            className="md:hidden absolute left-[15px]
                       top-0 bottom-0 w-px
                       bg-orange-200"
          />

          <div className="space-y-10 md:space-y-14">

            {journey.map((item, index) => (

              <div
                key={index}
                className={`relative md:flex md:items-center
                            ${
                              index % 2 === 0
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                            }`}
              >

                {/* ================= CONTENT ================= */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">

                  <div
                    className={`relative
                                rounded-2xl
                                p-6 md:p-7
                                bg-white
                                border
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-lg
                                ${
                                  item.highlight
                                    ? "border-orange-400 shadow-orange-100"
                                    : "border-orange-100"
                                }
                                ${
                                  index % 2 === 0
                                    ? "md:mr-12"
                                    : "md:ml-12"
                                }`}
                  >

                    {/* Year - Sub-heading */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">

                      <span
                        className="inline-flex px-3 py-1
                                   rounded-full
                                   bg-orange-100
                                   text-orange-700
                                   text-xs
                                   font-medium"
                      >
                        {item.year}
                      </span>

                      {item.bs && (
                        <span
                          className="text-xs
                                     font-medium
                                     text-orange-950/40"
                        >
                          {item.bs}
                        </span>
                      )}

                    </div>


                    {/* Title - Poppins Medium */}
                    <h3
                      className="text-xl md:text-2xl
                                 font-medium
                                 text-orange-950"
                    >
                      {item.title}
                    </h3>


                    {/* Description - Poppins Regular */}
                    <p
                      className="mt-3
                                 text-sm md:text-base
                                 font-normal
                                 leading-relaxed
                                 text-orange-950/60"
                    >
                      {item.description}
                    </p>


                    {/* Special Badge - Poppins Medium */}
                    {item.highlight && (
                      <div
                        className="mt-4 inline-flex items-center gap-2
                                   text-xs font-medium
                                   text-orange-700"
                      >

                        <span
                          className="w-2 h-2 rounded-full
                                     bg-orange-600"
                        />

                        Foundation of Dhaneshwor Khadhya Udhyog

                      </div>
                    )}

                  </div>

                </div>


                {/* ================= CENTER DOT ================= */}
                <div
                  className="absolute left-[15px]
                             md:left-1/2
                             top-7
                             md:top-1/2
                             -translate-x-1/2
                             md:-translate-y-1/2"
                >

                  <div
                    className={`w-8 h-8 rounded-full
                                flex items-center justify-center
                                border-4 border-[#FFF8F0]
                                ${
                                  item.highlight
                                    ? "bg-orange-700"
                                    : "bg-orange-400"
                                }`}
                  >

                    <div className="w-2 h-2 rounded-full bg-white" />

                  </div>

                </div>


                {/* ================= EMPTY SIDE ================= */}
                <div className="hidden md:block md:w-1/2" />

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Timeline;