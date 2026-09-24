function Reviews() {
  const reviews = [
    {
      name: "Aarav Sharma",
      role: "Regular Customer",
      review:
        "I really appreciate the quality of the products. Everything feels fresh, reliable, and tastes great.",
    },
    {
      name: "Sita Thapa",
      role: "Happy Customer",
      review:
        "Dhaneshwor Khadya provides excellent products with great quality. I would definitely recommend them.",
    },
    {
      name: "Ramesh Karki",
      role: "Customer",
      review:
        "The products are fresh and the service is very good. I have been happy with my experience.",
    },
  ];

  return (
    <section className="bg-[#FFF4E6] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          {/* Sub-heading */}
          <p className="text-orange-600 font-medium tracking-widest uppercase mb-3">
            Customer Reviews
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-orange-950">
            What Our Customers
            <span className="text-orange-600"> Say</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-5 font-normal text-orange-900/70 leading-relaxed">
            We value the trust and support of our customers. Here's what
            some of them have to say about Dhaneshwor Khadya.
          </p>

        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8
                         border border-orange-100
                         shadow-sm
                         hover:shadow-xl
                         hover:-translate-y-2
                         transition-all duration-300"
            >

              {/* Stars */}
              <div className="flex gap-1 text-orange-500 text-lg">
                ★ ★ ★ ★ ★
              </div>

              {/* Review - Paragraph */}
              <p className="mt-6 font-normal text-orange-900/70 leading-relaxed">
                "{review.review}"
              </p>

              {/* Customer */}
              <div className="mt-7 flex items-center gap-4">

                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-full
                             bg-orange-100
                             flex items-center justify-center
                             text-orange-700 font-bold text-lg"
                >
                  {review.name.charAt(0)}
                </div>

                <div>

                  {/* Customer Name - Sub-heading */}
                  <h3 className="font-medium text-orange-950">
                    {review.name}
                  </h3>

                  {/* Customer Role - Paragraph */}
                  <p className="text-sm font-normal text-orange-600">
                    {review.role}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Reviews;