import { Outlet } from "react-router-dom";

import Header from "../components/HEADER/Header";
import { ThemeProvider } from "../context/ThemeProvider";
import Footer from "../components/Footer";


const Rout = () => {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default Rout
