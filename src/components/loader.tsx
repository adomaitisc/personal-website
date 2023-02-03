export function Loader({ loaderWidth }: { loaderWidth: string }) {
  return (
    <div className="top-0 left-0 right-0 bottom-0 w-screen h-screen fixed z-10 bg-black flex flex-col items-center justify-center">
      <div className="border border-white/40 rounded-lg h-2 w-32 flex items-start shadow shadow-white/10">
        <div
          style={{
            width: loaderWidth,
            maxWidth: "100%",
          }}
          className="bg-white h-full rounded-lg"
        ></div>
      </div>
    </div>
  );
}
