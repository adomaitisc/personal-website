type Contribution = {
  count: number;
  name: string;
  month: string;
  day: number;
  year: number;
  level: string | number;
} | null;

type Row = Contribution[];

export type Table = Row[];

const colors = ["#262626", "#0e4429", "#006d32", "#26a641", "#39d353"];

export function Contributions({ data }: { data: Table }) {
  return (
    <div className="w-full overflow-x-auto p-2 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 duration-200">
      {data && (
        <table className="h-full m-0 w-full">
          {data.length === 0 ? (
            <p className="text-sm text-zinc-700">
              it was not possible to render the contribution table at the moment
            </p>
          ) : (
            <tbody className="flex flex-col gap-1 w-full">
              {data.map((row) => (
                <tr key={Math.random()} className="flex gap-1 w-full">
                  {row.map((contribution) => (
                    <td
                      key={Math.random()}
                      className="flex-1 aspect-square w-3 rounded-sm border border-neutral-500/5"
                      style={
                        !contribution
                          ? { opacity: 0.1, backgroundColor: "black" }
                          : {
                              backgroundColor:
                                colors[contribution.level as number],
                            }
                      }
                    ></td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      )}
    </div>
  );
}
