import { Link } from "react-router-dom";
import ChakkiAata from "../assets/images/Chakki_aata.png";
import Maida from "../assets/images/Maida.png";
import Sooji from "../assets/images/sooji.png";
import Chokar from "../assets/images/chokar.png"
import Aata from "../assets/images/Aata.png"

function Products() {
  const products = [
    {
      name: "Chakki Aata",
      description:
        "High-quality chakki aata produced with careful processing and strict quality control.",
      image: ChakkiAata,
    },
    {
      name: "Aata",
      description:
        "Quality wheat flour produced for everyday food preparation.",
      image: Aata,
    },
    {
      name: "Maida",
      description:
        "Fine-quality maida suitable for a wide range of food preparations.",
      image: Maida,
    },
    {
      name: "Sooji",
      description:
        "Carefully processed suji made for versatile everyday use.",
      image: Sooji,
    },
    {
      name: "Chokar",
      description:
        "Quality wheat bran produced as part of the company's food processing range.",
      image: Chokar,
    },
  ];

  return (
    <section className="bg-[#FFF8F0] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row
                        md:items-end
                        md:justify-between
                        gap-6 mb-12">

          <div className="max-w-2xl">

            <div className="flex items-center gap-3 mb-4">

              <span className="w-9 h-[2px] bg-orange-600" />

              <span className="text-sm font-medium
                               tracking-[0.18em]
                               uppercase text-orange-700">
                Our Products
              </span>

            </div>

              <h2 className="text-4xl md:text-5xl
                            font-bold
                            leading-tight
                            text-orange-950">
                Quality Products for
                <span className="block text-orange-600">
                  Everyday Living.
                </span>
              </h2>

                <p className="mt-5 text-lg font-normal
                              text-orange-950/60
                              leading-relaxed">
                  Our range of food staples is produced with
                  careful processing, modern manufacturing
                  practices, and strict quality control.
                </p>

          </div>


          {/* Product Count */}
          <div className="hidden md:block
                          rounded-2xl
                          bg-white
                          border border-orange-100
                          px-6 py-4">

            <p className="text-3xl font-bold text-orange-700">
              05
            </p>

            <p className="text-sm text-orange-950/60">
              Product Categories
            </p>

          </div>

        </div>


        {/* ================= PRODUCTS GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {products.map((product, index) => (

            <div
              key={product.name}
              className="group
                         overflow-hidden
                         rounded-3xl
                         bg-white
                         border border-orange-100
                         shadow-sm
                         hover:shadow-xl
                         hover:shadow-orange-900/10
                         hover:-translate-y-1
                         transition-all duration-300"
            >

                      {/* Image Container */}
                      <div className="relative h-72 sm:h-80
                                      overflow-hidden
                                      bg-gradient-to-br from-[#FFF9F2] to-[#FFF0E0]
                                      flex items-center justify-center p-1">

                        {product.image ? (
                          <div className="relative w-full h-full flex items-center justify-center">
                            {/* Product Image */}
                            <img
                              src={product.image}
                              alt={product.name}
                              className="max-h-[95%] h-[92%] w-auto max-w-full
                                        object-contain
                                        drop-shadow-[0_14px_16px_rgba(0,0,0,0.18)]
                                        group-hover:scale-110
                                        transition-transform
                                        duration-500 z-10"
                            />

                            {/* Soft Ground Shadow for Transparent Packagings */}
                            <div className="absolute bottom-1 w-40 h-3.5 bg-orange-950/20 rounded-full blur-md" />
                          </div>
                        ) : (
                          /* Clean fallback when image is missing */
                          <div className="flex flex-col items-center justify-center p-6 text-center">
                            <div className="w-16 h-16 rounded-full bg-white/80 shadow-sm flex items-center justify-center text-3xl mb-2 border border-orange-100">
                              🌾
                            </div>
                            <span className="text-xs font-semibold text-orange-900/40 uppercase tracking-wider">
                              Product Packaging
                            </span>
                          </div>
                        )}

                        {/* Number Badge */}
                        <div className="absolute top-4 left-4
                                        w-9 h-9
                                        rounded-full
                                        bg-white/95
                                        backdrop-blur
                                        flex items-center
                                        justify-center
                                        text-xs font-bold
                                        text-orange-700
                                        shadow-sm z-20">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                      </div>


              {/* Content */}
              <div className="p-6">

              <h3 className="text-xl font-medium
                            text-orange-950
                            group-hover:text-orange-700
                            transition-colors">
                {product.name}
              </h3>

              <p className="mt-3 text-sm font-normal
                            leading-relaxed
                            text-orange-950/60">
                {product.description}
              </p>


                {/* Bottom */}
                <div className="mt-5 pt-4
                                border-t border-orange-100
                                flex items-center
                                justify-between">

                  <span className="text-xs
                                   font-semibold
                                   uppercase
                                   tracking-wider
                                   text-orange-600">
                    Food Product
                  </span>

                  <span className="text-orange-600
                                   group-hover:translate-x-1
                                   transition-transform">
                    →
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ================= BOTTOM NOTE ================= */}
        <div className="mt-10
                        rounded-2xl
                        bg-orange-700
                        px-6 py-5
                        flex flex-col sm:flex-row
                        sm:items-center
                        sm:justify-between
                        gap-4">

          <div>

            <p className="text-white font-semibold">
              Looking for Momo Special Maida?
            </p>

            <p className="text-sm text-orange-100/80 mt-1">
              Ask us about our available food products.
            </p>

          </div>

          <Link
            to="/contact"
            className="inline-flex items-center
                       justify-center
                       px-5 py-2.5
                       rounded-full
                       bg-white
                       text-orange-700
                       text-sm
                       font-semibold
                       hover:bg-orange-50
                       transition-colors"
          >
            Contact Us →
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Products;