import { Routes, Route } from "react-router-dom";

// @ts-expect-error Navbar is currently implemented as an untyped JSX module.
import Navbar from "./components/Navbar";

// @ts-expect-error Hero is currently implemented as an untyped JSX module.
import Hero from "./components/Hero";

// @ts-expect-error About is currently implemented as an untyped JSX module.
import About from "./components/About";

// @ts-expect-error Products is currently implemented as an untyped JSX module.
import Products from "./components/Products";

// @ts-expect-error Quality is currently implemented as an untyped JSX module.
import Quality from "./components/Quality";

// @ts-expect-error Reviews is currently implemented as an untyped JSX module.
import Reviews from "./components/Reviews";

// @ts-expect-error Contact is currently implemented as an untyped JSX module.
import Contact from "./components/Contact";

// @ts-expect-error Footer is currently implemented as an untyped JSX module.
import Footer from "./components/Footer";

// @ts-expect-error Timeline is currently implemented as an untyped JSX module.
import Timeline from "./components/Timeline";

// @ts-expect-error VisionMission is currently implemented as an untyped JSX module.
import VisionMission from "./components/VisionMission";
// @ts-expect-error VisionMission is currently implemented as an untyped JSX module.
import Client from "./components/Clients"


function App() {
  return (
    <div className="min-h-screen bg-[#FFF4E6]">

      <Navbar />

      <Routes>

        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Timeline />
              <VisionMission />
              <Client />
              <Reviews />
            </>
          }
        />

        {/* ================= ABOUT ================= */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* ================= PRODUCTS ================= */}
        <Route
          path="/products"
          element={<Products />}
        />

        {/* ================= QUALITY ================= */}
        <Route
          path="/quality"
          element={<Quality />}
        />

        {/* ================= CONTACT ================= */}
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;