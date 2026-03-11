"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTags } from "@/features/image/imageSlice";

export default function TagSelector({ data }) {
  const dispatch = useDispatch();
  const { selectedTags } = useSelector((state) => state.image);

  const tags =
    data?.data?.images
      ?.flatMap((image) => image.tags)
      ?.filter((tag, index, arr) => arr.indexOf(tag) === index) || [];

  const toggleTag = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    dispatch(setSelectedTags(updatedTags));
  };

  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {tags.map((tag) => (
        <Badge
          key={tag}
          onClick={() => toggleTag(tag)}
          className={cn(
            "cursor-pointer px-3 py-1 transition-colors",
            selectedTags.includes(tag)
              ? "bg-primary/50 text-white"
              : "bg-muted text-muted-foreground",
          )}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}
