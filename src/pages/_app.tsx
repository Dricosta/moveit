import React, { useContext } from "react";

import { ThemeProvider } from "styled-components";
import { ThemeContextApp, ThemeProviderApp } from "../contexts/ThemeContext";
import Light from "../styles/themes/light";

function MyApp({ Component, pageProps }) {
  const { theme } = useContext(ThemeContextApp);
  // console.log(theme);
  return (
    <ThemeProviderApp>
      <Component {...pageProps} />
    </ThemeProviderApp>
  );
}

export default MyApp;
