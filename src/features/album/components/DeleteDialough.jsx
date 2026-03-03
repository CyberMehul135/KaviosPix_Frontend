import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { setDeleteDialoughOpen } from "@/features/album/albumSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { deleteAlbum } from "../album.service";
import { Spinner } from "@/components/common/Spinner";
import { toast } from "sonner";

export function DeleteDialough() {
  // Redux
  const dispatch = useDispatch();
  const { deleteDialough } = useSelector((state) => state.album);

  // Tanstack
  const queryClient = useQueryClient();
  const deleteAlbumMutation = useMutation({
    mutationFn: (albumId) => deleteAlbum(albumId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["albums"] });
      dispatch(setDeleteDialoughOpen({ isOpen: false }));
      toast("Album deleted successfully.", {
        position: "bottom-right",
      });
    },
  });

  const handleAlbumDelete = (albumId) => {
    deleteAlbumMutation.mutate(albumId);
  };

  return (
    <Dialog
      open={deleteDialough.isOpen}
      onOpenChange={(value) =>
        dispatch(setDeleteDialoughOpen({ isOpen: value }))
      }
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="mb-5">
          <DialogTitle>Delete Album</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete "{deleteDialough?.data?.name}"
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button">Cancel</Button>
          </DialogClose>
          <Button
            variant="destructive"
            className="hover:opacity-80"
            onClick={() => handleAlbumDelete(deleteDialough?.data?._id)}
          >
            {deleteAlbumMutation.isPending ? "Deleting..." : "Delete"}
            {deleteAlbumMutation.isPending && (
              <Spinner className="w-4 h-4" />
            )}{" "}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
