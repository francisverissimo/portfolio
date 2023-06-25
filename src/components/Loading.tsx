import { Circle, CircleDashed, CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-t from-zinc-700 via-zinc-600 to-zinc-500">
      <div className="flex justify-center gap-4">
        <CircleNotch color="#f97316" weight="thin" className="h-24 w-24 animate-spin" />
      </div>
    </div>
  );
}
