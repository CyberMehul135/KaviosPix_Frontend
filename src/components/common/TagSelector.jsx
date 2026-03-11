"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTags } from "@/features/image/imageSlice";
import { useQuery } from "@tanstack/react-query";
import { getAlbumImagesTags } from "@/features/image/image.service";
import { useParams } from "react-router-dom";

export default function TagSelector() {
  const { albumId } = useParams();
  const dispatch = useDispatch();
  const { selectedTags } = useSelector((state) => state.image);

  const {
    data: tags,
    loading,
    error,
  } = useQuery({
    queryKey: ["tags", albumId],
    queryFn: () => getAlbumImagesTags(albumId),
    staleTime: 10000,
  });

  const toggleTag = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    dispatch(setSelectedTags(updatedTags));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;
  if (tags?.data && tags?.data?.tags) {
    return (
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.data.tags.map((tag) => (
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
}
