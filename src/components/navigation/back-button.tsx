import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useFormContext } from "react-hook-form";

import { cn } from "@/utils";

interface BackButtonProps {
  onBack: (values: object) => void;
}

export default function BackButton({ onBack }: BackButtonProps) {
  const { getValues } = useFormContext();
  return (
    <button
      type="button"
      className={cn(
        "block rounded-full border border-neutral-800 bg-neutral-950 px-6 py-2 hover:bg-neutral-800",
        "focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2 focus:ring-offset-black",
        "disabled:bg-neutral-950 disabled:opacity-60",
      )}
      onClick={() => onBack(getValues())}
    >
      <ChevronLeftIcon className="pointer-events-none size-5 fill-white" />
    </button>
  );
}
