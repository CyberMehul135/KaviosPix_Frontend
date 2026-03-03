import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Share2, Trash2 } from "lucide-react";

export default function CardOptions({
  className,
  onShareClick,
  onDeleteClick,
}) {
  return (
    <div
      className={`absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 max-sm:opacity-100 transition-opacity duration-300 ${className}`}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <Button
            variant="outline"
            size="icon"
            className="rounded-2xl h-7 w-7 bg-card-options!"
          >
            <EllipsisVertical className="h-1 w-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer" onClick={onShareClick}>
            <Share2 />
            Share
          </DropdownMenuItem>
          <DropdownMenuItem
            variant="destructive"
            className="cursor-pointer"
            onClick={onDeleteClick}
          >
            <Trash2 />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
