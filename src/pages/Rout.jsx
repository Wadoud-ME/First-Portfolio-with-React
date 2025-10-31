import { Outlet } from "react-router-dom";

import Header from "../components/HEADER/Header";
import { ThemeProvider } from "../context/ThemeProvider";
import Footer from "../components/Footer";
import ScrollToTop from "../components/UI/ScrollToTop";


const Rout = () => {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  )
}

export default Rout
