function Clients() {
  const clients = [
    {
      name: "Parle-G",
      subtitle: "Parle Products",
    },
    {
      name: "Antartic Biscuit",
      subtitle: "Pvt. Ltd.",
    },
    {
      name: "CG Foods",
      subtitle: "Ltd.",
    },
    {
      name: "Britannia Food",
      subtitle: "Ltd.",
    },
    {
      name: "Nebico Biscuits",
      subtitle: "Trusted Partner",
    },
  ];

  return (
    <section className="bg-[#FFF4E6] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          {/* Small Label */}
          <div className="flex items-center justify-center gap-3 mb-4">

            <span className="w-9 h-[2px] bg-orange-600"></span>

            <span
              className="text-sm font-medium
                         tracking-[0.18em]
                         uppercase text-orange-700"
            >
              Our Valuable Clients
            </span>

            <span className="w-9 h-[2px] bg-orange-600"></span>

          </div>


          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl
                       font-bold
                       leading-tight
                       text-orange-950"
          >
            Trusted by
            <span className="text-orange-600">
              {" "}Leading Brands.
            </span>
          </h2>


          {/* Description */}
          <p
            className="mt-5 text-lg font-normal
                       text-orange-950/60
                       leading-relaxed"
          >
            Our commitment to quality and reliability has helped
            us build valuable relationships with established
            food brands and businesses.
          </p>

        </div>


        {/* ================= CLIENT CARDS ================= */}
        <div
          className="grid grid-cols-2
                     md:grid-cols-3
                     lg:grid-cols-5
                     gap-5"
        >

          {clients.map((client) => (

            <div
              key={client.name}
              className="group
                         bg-white
                         rounded-3xl
                         border border-orange-100
                         p-6
                         min-h-[190px]
                         flex flex-col
                         items-center
                         justify-center
                         text-center
                         shadow-sm
                         hover:shadow-xl
                         hover:shadow-orange-900/10
                         hover:-translate-y-2
                         hover:border-orange-300
                         transition-all duration-300"
            >

              {/* Client Logo / Initial */}
              <div
                className="w-16 h-16
                           rounded-2xl
                           bg-[#FFF4E6]
                           flex items-center
                           justify-center
                           mb-5
                           group-hover:bg-orange-100
                           transition-colors duration-300"
              >

                <span
                  className="text-2xl
                             font-bold
                             text-orange-700"
                >
                  {client.name.charAt(0)}
                </span>

              </div>


              {/* Client Name */}
              <h3
                className="text-base md:text-lg
                           font-medium
                           text-orange-950
                           group-hover:text-orange-700
                           transition-colors duration-300"
              >
                {client.name}
              </h3>


              {/* Subtitle */}
              <p
                className="mt-1
                           text-xs font-normal
                           text-orange-950/50"
              >
                {client.subtitle}
              </p>

            </div>

          ))}

        </div>


        {/* ================= HIGHLIGHT BANNER ================= */}
        <div
          className="mt-8
                     rounded-3xl
                     bg-orange-700
                     px-6 py-7
                     md:px-10
                     flex flex-col
                     md:flex-row
                     items-center
                     justify-between
                     gap-5"
        >

          {/* Text */}
          <div className="text-center md:text-left">

            <p
              className="text-xl
                         md:text-2xl
                         font-bold
                         text-white"
            >
              Built on Quality. Strengthened by Trust.
            </p>

            <p
              className="mt-1
                         text-sm font-normal
                         text-orange-100/80"
            >
              Proud to serve valuable clients and partners.
            </p>

          </div>


          {/* Client Count */}
          <div
            className="shrink-0
                       px-5 py-2.5
                       rounded-full
                       bg-white
                       text-orange-700
                       text-sm
                       font-bold
                       shadow-sm"
          >
            05 Valuable Clients
          </div>

        </div>

      </div>
    </section>
  );
}

export default Clients;