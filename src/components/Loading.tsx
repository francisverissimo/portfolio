import { AiOutlineLoading3Quarters, AiOutlineLoading } from "react-icons/ai";
import { MdOutlineCircle } from "react-icons/md";

export function Loading() {
  return (
    <div className="max-w-screen-lg py-16 mx-auto flex justify-center gap-2 w-full h-full rounded-xl duration-200">
      <AiOutlineLoading3Quarters
        color="#71717a"
        className="w-20 h-20 animate-spin"
      />

      <div className="flex flex-col justify-between">
        <MdOutlineCircle className="animate-ping" />
        <MdOutlineCircle color="#f97316" className="animate-ping" />
      </div>

      <AiOutlineLoading color="#f97316" className="w-20 h-20 animate-spin" />
    </div>
  );
}
