import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-orange-950 text-orange-100">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold text-white">
                Dhaneshwor Khadya Udhyog
              </h2>
            </Link>

            <p className="mt-4 font-normal text-orange-200/80 leading-relaxed">
              Quality food products made with care, freshness,
              and trust for every family.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">

            
              <a href="https://www.facebook.com/share/1ELJVfGYC2/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-orange-900
                        flex items-center justify-center
                        hover:bg-orange-700
                        transition-colors text-white"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>

              
               <a href="https://www.instagram.com/devbhog.chakki?igsi=MWdiMmNmNHNoM3F5aw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-orange-900
                          flex items-center justify-center
                          hover:bg-orange-700
                          transition-colors text-white"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

            
             < a href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-orange-900
                        flex items-center justify-center
                        hover:bg-orange-700
                        transition-colors text-white"
              aria-label="LinkedIn"
            >
  <FaLinkedinIn className="w-5 h-5" />
</a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 font-normal">

              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/quality"
                  className="hover:text-white transition-colors"
                >
                  Quality
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-medium text-white">
              Our Products
            </h3>

            <ul className="mt-5 space-y-3 font-normal text-orange-200/80">

              <li>Chakki Aata</li>
              <li>Maida</li>
              <li>Sooji</li>
              <li>Chokar</li>
              <li>Aata</li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 font-normal">

              <p className="flex gap-3">
                <span>📍</span>
                <span>Hetauda, Nepal</span>
              </p>

              <p className="flex gap-3">
                <span>📞</span>
                <span>+977 9716390443</span>
              </p>

              <p className="flex gap-3">
                <span>✉️</span>
                <span>dkuplgroup@gmail.com</span>
              </p>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-orange-800 mt-12 pt-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-sm font-normal text-orange-300/80">
              © {new Date().getFullYear()} Dhaneshwor Khadya Udhyog. All rights reserved.
            </p>

            <p className="text-sm font-normal text-orange-300/80">
              Quality You Can Trust
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;