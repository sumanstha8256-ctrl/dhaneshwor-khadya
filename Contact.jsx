import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-[#FFF4E6] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <p className="text-orange-600 font-medium tracking-widest uppercase mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-orange-950">
            We'd Love to
            <span className="text-orange-600"> Hear From You</span>
          </h2>

          <p className="mt-5 font-normal text-orange-900/70 leading-relaxed">
            Have a question or want to know more about our products?
            Get in touch with us and we'll be happy to help.
          </p>

        </div>


        {/* ================= CONTACT CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">


          {/* ================================================= */}
          {/* CONTACT INFORMATION */}
          {/* ================================================= */}

          <div
            className="bg-orange-700
                       rounded-3xl
                       p-8 md:p-10
                       text-white
                       flex flex-col"
          >

            {/* Top Content */}
            <div>

              <h3 className="text-3xl font-medium">
                Get in Touch
              </h3>

              <p className="mt-4 font-normal text-orange-100 leading-relaxed max-w-lg">
                Whether you have a question about our products, quality,
                or services, feel free to contact us.
              </p>


              {/* Contact Details */}
              <div className="mt-10 space-y-7">


                {/* Address */}
                <div className="flex items-start gap-4">

                  <div
                    className="w-12 h-12
                               shrink-0
                               rounded-full
                               bg-orange-600
                               flex items-center
                               justify-center
                               text-xl"
                  >
                    📍
                  </div>

                  <div>

                    <h4 className="font-medium text-lg">
                      Address
                    </h4>

                    <p className="mt-1 font-normal text-orange-100">
                      Hetauda Makwanpur, Nepal
                    </p>

                  </div>

                </div>


                {/* Phone */}
                <div className="flex items-start gap-4">

                  <div
                    className="w-12 h-12
                               shrink-0
                               rounded-full
                               bg-orange-600
                               flex items-center
                               justify-center
                               text-xl"
                  >
                    📞
                  </div>

                  <div>

                    <h4 className="font-medium text-lg">
                      Phone
                    </h4>

                    <p className="mt-1 font-normal text-orange-100">
                      +977 9716390443
                    </p>

                  </div>

                </div>


                {/* Email */}
                <div className="flex items-start gap-4">

                  <div
                    className="w-12 h-12
                               shrink-0
                               rounded-full
                               bg-orange-600
                               flex items-center
                               justify-center
                               text-xl"
                  >
                    ✉️
                  </div>

                  <div>

                    <h4 className="font-medium text-lg">
                      Email
                    </h4>

                    <p className="mt-1 font-normal text-orange-100">
                      dkuplgroup@gmail.com
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* ================================================= */}
            {/* SOCIAL MEDIA */}
            {/* ================================================= */}

            <div className="mt-auto pt-12">

              <div className="w-full h-px bg-orange-600/60 mb-6"></div>

              <p className="text-sm font-medium uppercase tracking-widest text-orange-100 mb-4">
                Follow Us
              </p>


              <div className="flex gap-3">


                {/* Facebook */}
                
                 <a href="https://www.facebook.com/share/1ELJVfGYC2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11
                             rounded-full
                             bg-orange-900
                             flex items-center
                             justify-center
                             text-white
                             hover:bg-white
                             hover:text-orange-700
                             hover:-translate-y-1
                             transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>


                {/* Instagram */}
                
                 <a href="https://www.instagram.com/devbhog.chakki?igsi=MWdiMmNmNHNoM3F5aw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11
                             rounded-full
                             bg-orange-900
                             flex items-center
                             justify-center
                             text-white
                             hover:bg-white
                             hover:text-orange-700
                             hover:-translate-y-1
                             transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>


                {/* LinkedIn */}
                
                  <a href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11
                             rounded-full
                             bg-orange-900
                             flex items-center
                             justify-center
                             text-white
                             hover:bg-white
                             hover:text-orange-700
                             hover:-translate-y-1
                             transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* CONTACT FORM */}
          {/* ================================================= */}

          <div
            className="bg-white
                       rounded-3xl
                       p-8 md:p-10
                       shadow-sm
                       border border-orange-100"
          >

            <h3 className="text-2xl font-medium text-orange-950">
              Send Us a Message
            </h3>

            <form className="mt-7 space-y-5">


              {/* Name */}
              <div>

                <label className="block text-sm font-medium text-orange-950 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3
                             rounded-xl
                             border border-orange-200
                             bg-orange-50/50
                             text-orange-950
                             font-normal
                             placeholder:text-orange-900/40
                             outline-none
                             focus:border-orange-600
                             focus:ring-2
                             focus:ring-orange-100
                             transition"
                />

              </div>


              {/* Email */}
              <div>

                <label className="block text-sm font-medium text-orange-950 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3
                             rounded-xl
                             border border-orange-200
                             bg-orange-50/50
                             text-orange-950
                             font-normal
                             placeholder:text-orange-900/40
                             outline-none
                             focus:border-orange-600
                             focus:ring-2
                             focus:ring-orange-100
                             transition"
                />

              </div>


              {/* Subject */}
              <div>

                <label className="block text-sm font-medium text-orange-950 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is your message about?"
                  className="w-full px-4 py-3
                             rounded-xl
                             border border-orange-200
                             bg-orange-50/50
                             text-orange-950
                             font-normal
                             placeholder:text-orange-900/40
                             outline-none
                             focus:border-orange-600
                             focus:ring-2
                             focus:ring-orange-100
                             transition"
                />

              </div>


              {/* Message */}
              <div>

                <label className="block text-sm font-medium text-orange-950 mb-2">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3
                             rounded-xl
                             border border-orange-200
                             bg-orange-50/50
                             text-orange-950
                             font-normal
                             placeholder:text-orange-900/40
                             outline-none
                             focus:border-orange-600
                             focus:ring-2
                             focus:ring-orange-100
                             transition
                             resize-none"
                />

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5
                           rounded-xl
                           bg-orange-700
                           text-white
                           font-medium
                           hover:bg-orange-800
                           shadow-md
                           hover:shadow-lg
                           transition-all duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;