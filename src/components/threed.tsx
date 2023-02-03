import Spline from "@splinetool/react-spline";

export function ThreeD({ splineUrl }: { splineUrl: string }) {
  return (
    <div className="flex w-[366px] flex-col rounded-2xl border border-white/10 bg-black p-6 text-white">
      <Spline height={256} scene={splineUrl} />
      <p className="text-sm font-medium">qualidadeinteligente</p>
    </div>
  );
}
