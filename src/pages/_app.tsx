import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>
        {`
          :root {
            color-scheme: dark;
          }

          body {
            background-color: #000;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
