import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

import "styles/globals.scss";
import { store } from "redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
