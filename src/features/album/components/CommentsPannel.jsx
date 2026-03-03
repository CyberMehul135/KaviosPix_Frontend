import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Send, Trash2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addAlbumImageComment,
  removeAlbumImageComment,
} from "@/features/image/image.service";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function CommentsPanel({ comments = [] }) {
  const [text, setText] = React.useState("");
  const scrollRef = React.useRef(null);
  const { albumId, imageId } = useParams();

  const queryClient = useQueryClient();
  const addCommentMutation = useMutation({
    mutationFn: ({ albumId, imageId, comment }) =>
      addAlbumImageComment(albumId, imageId, comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["photos"] });
      toast("✅ Comment added successfully.", {
        position: "bottom-right",
      });
    },
  });

  const removeCommentMutation = useMutation({
    mutationFn: ({ albumId, imageId, commentId }) =>
      removeAlbumImageComment(albumId, imageId, commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["photos"] });
      toast("Comment removed successfully. ❌", {
        position: "bottom-right",
      });
    },
  });

  // auto scroll to bottom when comments change
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [comments]);

  const handleSubmit = () => {
    if (!text.trim()) return;

    console.log("New comment:", text);

    // mutation call
    addCommentMutation.mutate({ albumId, imageId, comment: text });

    setText("");
  };

  const handleCommentRemove = (commentId) => {
    removeCommentMutation.mutate({ albumId, imageId, commentId });
  };

  return (
    <Card className="h-full max-lg:h-fit flex flex-col p-0">
      <CardContent className="flex flex-col h-full p-0">
        {/* Comments List */}
        <ScrollArea
          className="flex-1 p-4 overflow-y-scroll hide-scrollbar"
          ref={scrollRef}
        >
          <div className="space-y-4 w-full">
            {comments.length === 0 && (
              <p className="text-sm text-muted-foreground text-center">
                No comments yet
              </p>
            )}

            {comments.map((comment) => (
              <div
                key={comment._id}
                className="group p-4 py-3 rounded-xl bg-muted border w-full"
              >
                <div className="flex items-center gap-2 relative">
                  <div className="bg-muted-foreground/80 px-2 py-1 text-sm rounded-2xl text-white">
                    {comment.commentedBy.slice(0, 1).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-[11px] truncate">
                      {comment.commentedBy}
                    </p>

                    <p className="text-[11px] text-muted-foreground/80">
                      {comment.createdAt.split("T")[0]}
                    </p>
                  </div>
                  <Trash2
                    className="absolute top-1 right-0 hidden cursor-pointer text-destructive hover:bg-destructive/10 box-content p-2 rounded-lg group-hover:block"
                    size={15}
                    onClick={() => handleCommentRemove(comment._id)}
                  />
                </div>

                <p className="mt-2 text-sm ml-9">{comment.text}</p>
              </div>
            ))}
          </div>
        </ScrollArea>

        <Separator />

        {/* Input Section */}
        <div className="p-4 space-y-2">
          <div className="flex gap-2 items-end">
            <Input
              placeholder="Add a comment..."
              value={text}
              maxLength={500}
              onChange={(e) => setText(e.target.value)}
            />

            <Button
              size="icon"
              onClick={handleSubmit}
              disabled={!text.trim()}
              className="bg-button-primary hover:bg-button-primary"
            >
              <Send className="w-4 h-4 bg-button-primary text-white" />
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">{text.length}/500</p>
        </div>
      </CardContent>
    </Card>
  );
}
