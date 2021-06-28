import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false);

  const switchTheme = () => {
    setDark(!dark);
  };
  
  return (
    <div className={`${dark ? "dark" : ""} bg-[#fafafa] dark:bg-[#202c37]`}>
      <Navbar switchTheme={switchTheme} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
