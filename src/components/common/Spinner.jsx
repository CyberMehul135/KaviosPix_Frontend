import { LoaderCircle, LoaderIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function Spinner({ className, ...props }) {
  return (
    <LoaderCircle
      role="status"
      aria-label="Loading"
      className={cn("animate-spin", className)}
      {...props}
    />
  );
}
