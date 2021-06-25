import "../styles/globals.scss";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  const value = "red";

  return <Component {...pageProps} />;
}

export default MyApp;
