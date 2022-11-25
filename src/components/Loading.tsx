import { AiOutlineLoading3Quarters, AiOutlineLoading } from "react-icons/ai";
import { MdOutlineCircle } from "react-icons/md";

export function Loading() {
  return (
    <div className="bg-gradient-to-t from-zinc-600 via-zinc-400 to-zinc-200 flex justify-center items-center h-screen w-full">
      <div className="flex justify-center gap-4">
        <AiOutlineLoading3Quarters
          color="#71717a"
          className="w-24 h-24 animate-spin"
        />

        <div className="flex flex-col justify-between">
          <MdOutlineCircle className="animate-ping" />
          <MdOutlineCircle color="#f97316" className="animate-ping" />
        </div>

        <AiOutlineLoading color="#f97316" className="w-24 h-24 animate-spin" />
      </div>
    </div>
  );
}
