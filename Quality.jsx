import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Quality() {
  // =========================
  // LAB TEST DATA
  // Date: 09/05/2083
  // =========================

  const moistureData = [
    { product: "Maida-1", value: 12.4 },
    { product: "Maida-2", value: 12.26 },
    { product: "Mill Atta", value: 12.5 },
    { product: "Chakki Atta", value: 10.69 },
    { product: "Suji", value: 13.08 },
  ];

  const glutenData = [
    {
      product: "Maida-1",
      wetGluten: 27.27,
      dryGluten: 9.09,
    },
    {
      product: "Maida-2",
      wetGluten: null,
      dryGluten: null,
    },
    {
      product: "Mill Atta",
      wetGluten: 24.15,
      dryGluten: 8.05,
    },
    {
      product: "Chakki Atta",
      wetGluten: 24.78,
      dryGluten: 8.26,
    },
    {
      product: "Suji",
      wetGluten: 23.13,
      dryGluten: 7.71,
    },
  ];

  const ashData = [
    { product: "Maida-1", value: 0.48 },
    { product: "Maida-2", value: 0.68 },
    { product: "Mill Atta", value: 0.96 },
    { product: "Chakki Atta", value: 1.48 },
    { product: "Suji", value: 0.89 },
  ];

  const waterAbsorptionData = [
    { product: "Maida", value: 55 },
    { product: "Atta", value: 58 },
    { product: "Chakki Atta", value: 64 },
    { product: "Suji", value: 63 },
  ];

  // =========================
  // COLOR OBSERVATION DATA
  // =========================

  const colorData = [
    {
      product: "Maida-1",
      color: "Creamy white",
      swatches: ["#FFFDD0"],
    },
    {
      product: "Maida-2",
      color: "Light white",
      swatches: ["#F8F8F8"],
    },
    {
      product: "Mill Atta",
      color: "Light yellow",
      swatches: ["#F5E6A8"],
    },
    {
      product: "Chakki Atta",
      color: "Creamy white to light brown",
      swatches: ["#FFFDD0", "#C9A66B"],
    },
    {
      product: "Suji",
      color: "Creamy white / light yellow",
      swatches: ["#FFFDD0", "#F5E6A8"],
    },
  ];

  // =========================
  // WHEAT TEST DATA
  // =========================

  const wheatData = [
    {
      product: "Wheat - Received",
      moisture: 11.3,
      ash: 1.85,
    },
    {
      product: "Wheat - Intake",
      moisture: 10.09,
      ash: 1.83,
    },
    {
      product: "Wheat - B1 Roller",
      moisture: 16.09,
      ash: 1.63,
    },
  ];

  return (
    <section className="bg-[#FFF8F0] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}

        <div className="max-w-3xl mx-auto text-center mb-14">

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-9 h-[2px] bg-orange-600" />

            <span
              className="text-sm font-medium
                         tracking-[0.18em]
                         uppercase text-orange-700"
            >
              Quality Verification
            </span>

            <span className="w-9 h-[2px] bg-orange-600" />
          </div>

          {/* Heading - Poppins Bold */}
          <h2
            className="text-4xl md:text-5xl
                       font-bold
                       leading-tight
                       text-orange-950"
          >
            Quality Measured,
            <span className="block text-orange-600">
              Not Just Promised.
            </span>
          </h2>

          {/* Paragraph - Poppins Regular */}
          <p
            className="mt-5 text-lg
                       font-normal
                       leading-relaxed
                       text-orange-950/60"
          >
            Laboratory test results showing key quality
            parameters of selected food products.
          </p>

          {/* Test Date */}

          <div
            className="inline-flex items-center gap-2
                       mt-6
                       px-5 py-2.5
                       rounded-full
                       bg-white
                       border border-orange-100
                       shadow-sm"
          >
            <span className="text-orange-600">
              ●
            </span>

            {/* Sub-heading - Poppins Medium */}
            <span
              className="text-sm font-medium
                         text-orange-950"
            >
              Daily Laboratory Test Report — 09/05/2083
            </span>
          </div>

        </div>


        {/* ================= MOISTURE ================= */}

        <div
          className="bg-white
                     rounded-3xl
                     border border-orange-100
                     p-6 md:p-8
                     shadow-sm"
        >

          <div className="mb-6">

            {/* Sub-heading */}
            <p
              className="text-sm font-medium
                         uppercase
                         tracking-wider
                         text-orange-600"
            >
              Test 01
            </p>

            {/* Heading */}
            <h3
              className="mt-1 text-2xl
                         font-bold
                         text-orange-950"
            >
              Moisture Content
            </h3>

            {/* Paragraph */}
            <p
              className="mt-2 text-sm
                         font-normal
                         text-orange-950/55"
            >
              Moisture percentage recorded for each finished product.
            </p>

          </div>


          <div className="h-[350px]">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={moistureData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                  dataKey="product"
                  tick={{ fontSize: 12 }}
                />

                <YAxis
                  label={{
                    value: "Moisture (%)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />

                <Tooltip
                  formatter={(value) => [
                    `${value}%`,
                    "Moisture",
                  ]}
                />

                <Bar
                  dataKey="value"
                  name="Moisture"
                  fill="#c2410c"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* ================= GLUTEN + ASH ================= */}

        <div className="grid lg:grid-cols-2 gap-6 mt-6">

          {/* ================= GLUTEN ================= */}

          <div
            className="bg-white
                       rounded-3xl
                       border border-orange-100
                       p-6 md:p-8
                       shadow-sm"
          >

            {/* Sub-heading */}
            <p
              className="text-sm font-medium
                         uppercase
                         tracking-wider
                         text-orange-600"
            >
              Test 02
            </p>

            {/* Heading */}
            <h3
              className="mt-1 text-2xl
                         font-bold
                         text-orange-950"
            >
              Gluten Content
            </h3>

            {/* Paragraph */}
            <p
              className="mt-2 text-sm
                         font-normal
                         text-orange-950/55"
            >
              Wet and dry gluten measurements from the laboratory report.
            </p>

            <div className="h-[350px] mt-6">

              <ResponsiveContainer width="100%" height="100%">

                <BarChart data={glutenData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis
                    dataKey="product"
                    tick={{ fontSize: 11 }}
                  />

                  <YAxis
                    label={{
                      value: "Gluten (%)",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />

                  <Tooltip
                    formatter={(value, name) =>
                      value !== null
                        ? [`${value}%`, name]
                        : ["Not reported", name]
                    }
                  />

                  <Legend />

                  <Bar
                    dataKey="wetGluten"
                    name="Wet Gluten"
                    fill="#ea580c"
                    radius={[6, 6, 0, 0]}
                  />

                  <Bar
                    dataKey="dryGluten"
                    name="Dry Gluten"
                    fill="#f59e0b"
                    radius={[6, 6, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>


          {/* ================= ASH ================= */}

          <div
            className="bg-white
                       rounded-3xl
                       border border-orange-100
                       p-6 md:p-8
                       shadow-sm"
          >

            {/* Sub-heading */}
            <p
              className="text-sm font-medium
                         uppercase
                         tracking-wider
                         text-orange-600"
            >
              Test 03
            </p>

            {/* Heading */}
            <h3
              className="mt-1 text-2xl
                         font-bold
                         text-orange-950"
            >
              Total Ash
            </h3>

            {/* Paragraph */}
            <p
              className="mt-2 text-sm
                         font-normal
                         text-orange-950/55"
            >
              Total ash percentage recorded across the tested products.
            </p>

            <div className="h-[350px] mt-6">

              <ResponsiveContainer width="100%" height="100%">

                <BarChart data={ashData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis
                    dataKey="product"
                    tick={{ fontSize: 11 }}
                  />

                  <YAxis
                    label={{
                      value: "Ash (%)",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />

                  <Tooltip
                    formatter={(value) => [
                      `${value}%`,
                      "Total Ash",
                    ]}
                  />

                  <Bar
                    dataKey="value"
                    name="Total Ash"
                    fill="#9a3412"
                    radius={[8, 8, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>


        {/* ================= WATER ABSORPTION ================= */}

        <div
          className="bg-white
                     rounded-3xl
                     border border-orange-100
                     p-6 md:p-8
                     shadow-sm
                     mt-6"
        >

          <div className="mb-6">

            {/* Sub-heading */}
            <p
              className="text-sm font-medium
                         uppercase
                         tracking-wider
                         text-orange-600"
            >
              Test 04
            </p>

            {/* Heading */}
            <h3
              className="mt-1 text-2xl
                         font-bold
                         text-orange-950"
            >
              Water Absorption
            </h3>

            {/* Paragraph */}
            <p
              className="mt-2 text-sm
                         font-normal
                         text-orange-950/55"
            >
              Water absorption measurements recorded for the tested products.
            </p>

          </div>


          <div className="h-[350px]">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={waterAbsorptionData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                  dataKey="product"
                  tick={{ fontSize: 12 }}
                />

                <YAxis
                  label={{
                    value: "Absorption (%)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />

                <Tooltip
                  formatter={(value) => [
                    `${value}%`,
                    "Water Absorption",
                  ]}
                />

                <Bar
                  dataKey="value"
                  name="Water Absorption"
                  fill="#ea580c"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* ================= COLOR OBSERVATION ================= */}

        <div
          className="mt-6
                     bg-white
                     rounded-3xl
                     border border-orange-100
                     p-6 md:p-8
                     shadow-sm"
        >

          <div className="mb-6">

            {/* Sub-heading */}
            <p
              className="text-sm font-medium
                         uppercase
                         tracking-wider
                         text-orange-600"
            >
              Visual Observation
            </p>

            {/* Heading */}
            <h3
              className="mt-1 text-2xl
                         font-bold
                         text-orange-950"
            >
              Slick & Pekar Color Observation
            </h3>

            {/* Paragraph */}
            <p
              className="mt-2 text-sm
                         font-normal
                         text-orange-950/55"
            >
              Visual color observations recorded for the tested products.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">

            {colorData.map((item) => (

              <div
                key={item.product}
                className="rounded-2xl
                           bg-[#FFF8F0]
                           border border-orange-100
                           p-5
                           hover:shadow-md
                           transition-shadow"
              >

                {/* Product name - Sub-heading */}
                <p
                  className="text-sm font-medium
                             text-orange-950"
                >
                  {item.product}
                </p>


                <div className="mt-4 flex items-start gap-3">

                  {/* Actual Color Swatches */}

                  <div className="flex shrink-0">

                    {item.swatches.map((color, index) => (

                      <div
                        key={index}
                        className={`w-9 h-9
                                    rounded-full
                                    border border-orange-200
                                    ${
                                      index > 0
                                        ? "-ml-2"
                                        : ""
                                    }`}
                        style={{
                          backgroundColor: color,
                        }}
                      />

                    ))}

                  </div>


                  {/* Color Description - Paragraph */}

                  <p
                    className="text-sm
                               font-normal
                               leading-relaxed
                               text-orange-950/65"
                  >
                    {item.color}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ================= WHEAT DATA ================= */}

        <div
          className="mt-6
                     bg-white
                     rounded-3xl
                     border border-orange-100
                     p-6 md:p-8
                     shadow-sm"
        >

          <div className="mb-6">

            {/* Sub-heading */}
            <p
              className="text-sm font-medium
                         uppercase
                         tracking-wider
                         text-orange-600"
            >
              Raw Material & Process
            </p>

            {/* Heading */}
            <h3
              className="mt-1 text-2xl
                         font-bold
                         text-orange-950"
            >
              Wheat Test Results
            </h3>

            {/* Paragraph */}
            <p
              className="mt-2 text-sm
                         font-normal
                         text-orange-950/55"
            >
              Moisture and ash measurements recorded at different
              stages of wheat processing.
            </p>

          </div>


          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead>

                <tr className="border-b border-orange-100">

                  <th
                    className="px-4 py-4
                               text-sm font-bold
                               text-orange-950"
                  >
                    Product / Stage
                  </th>

                  <th
                    className="px-4 py-4
                               text-sm font-bold
                               text-orange-950"
                  >
                    Moisture %
                  </th>

                  <th
                    className="px-4 py-4
                               text-sm font-bold
                               text-orange-950"
                  >
                    Total Ash %
                  </th>

                </tr>

              </thead>


              <tbody>

                {wheatData.map((item) => (

                  <tr
                    key={item.product}
                    className="border-b border-orange-50
                               hover:bg-[#FFF8F0]
                               transition-colors"
                  >

                    {/* Sub-heading / table item */}
                    <td
                      className="px-4 py-4
                                 text-sm font-medium
                                 text-orange-950"
                    >
                      {item.product}
                    </td>

                    {/* Paragraph */}
                    <td
                      className="px-4 py-4
                                 text-sm font-normal
                                 text-orange-950/70"
                    >
                      {item.moisture}%
                    </td>

                    {/* Paragraph */}
                    <td
                      className="px-4 py-4
                                 text-sm font-normal
                                 text-orange-950/70"
                    >
                      {item.ash}%
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>


        {/* ================= FOOTNOTE ================= */}

        <div
          className="mt-8
                     rounded-2xl
                     bg-orange-700
                     px-6 py-5"
        >

          {/* Paragraph */}
          <p
            className="text-sm md:text-base
                       font-normal
                       text-white/90
                       text-center
                       leading-relaxed"
          >
            The values presented above are based on the
            Daily Lab Test Report provided by
            Dhaneshwor Khadhya Udhyog Pvt. Ltd.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Quality;