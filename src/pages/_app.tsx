import { type AppType } from "next/dist/shared/lib/utils";
import { Analytics } from "@vercel/analytics/react";

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
      <Analytics />
    </>
  );
};

export default MyApp;
