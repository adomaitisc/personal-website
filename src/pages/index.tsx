import { useEffect, useState } from "react";
import { type NextPage } from "next";

import { Metatags } from "../components/metatags";
import { ThreeD } from "../components/threed";
import { Player } from "../components/player";
import { About } from "../components/about";
import { Contributions } from "../components/contributions";
import { Pictures } from "../components/pictures";
import { Mailer } from "../components/mailer";
import { motion } from "framer-motion";
import { Loader } from "../components/loader";
import { Extension } from "../components/extension";

const Home: NextPage = () => {
  const [contentLoaded, setContentLoaded] = useState<boolean>(false);
  const [loaderWidth, setLoaderWidth] = useState<string>("0%");
  const [loading, setLoading] = useState({
    about: true,
    player: true,
    threeD: true,
    contributions: true,
    pictures: true,
    extension: true,
  });

  const onLoad = (component: string) => {
    setLoading((prev: any) => ({ ...prev, [component]: false }));
  };

  useEffect(() => {
    // add 20% to the loader width for each effect run
    // first, remove the % sign
    const loaderWidthPercentage = Number(loaderWidth.replace("%", ""));
    // add 20% to the loader width
    const newLoaderWidth = loaderWidthPercentage + 20;
    // add the % sign back
    setLoaderWidth(`${newLoaderWidth}%`);
    console.log(newLoaderWidth);

    // check if all components have loaded
    const allLoaded = Object.values(loading).every((value) => value === false);
    if (allLoaded) {
      setTimeout(() => {
        setContentLoaded(true);
      }, 1000);
    }
  }, [loading]);

  return (
    <>
      <Metatags />
      {!contentLoaded && <Loader loaderWidth={loaderWidth} />}
      <motion.main
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        key={JSON.stringify(contentLoaded)}
        className="flex flex-col items-center justify-center min-h-screen gap-[22px] bg-[rgb(10,10,10)] md:flex-row md:items-start"
      >
        <div className="mt-32 flex  h-full flex-col gap-[22px] md:mb-32">
          <About onLoad={(e: any) => onLoad(e)} />
          <Player onLoad={(e: any) => onLoad(e)} />
          <ThreeD
            onLoad={(e: any) => onLoad(e)}
            splineUrl={
              "https://prod.spline.design/X3Ccee1d1BhNTpnu/scene.splinecode"
            }
          />
        </div>
        <div className="mb-32 flex h-full flex-col gap-[22px] md:mt-32">
          <Contributions onLoad={(e: any) => onLoad(e)} />
          <Extension onLoad={(e: any) => onLoad(e)} />
          <Pictures onLoad={(e: any) => onLoad(e)} />
          <Mailer />
        </div>
      </motion.main>
    </>
  );
};

export default Home;
