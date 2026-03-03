import { Spinner } from "@/components/common/Spinner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { uploadAlbumImage } from "@/features/image/image.service";
import { setCreateImageFormOpen } from "@/features/image/imageSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CloudUpload } from "lucide-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function ImageForm() {
  const { albumId } = useParams();
  // Redux
  const dispatch = useDispatch();
  const { isCreateImageFormOpen } = useSelector((state) => state.image);

  // local-state
  const [imageUrl, setImageUrl] = useState(null);
  const [preview, setPreview] = useState(null);

  // Tanstack
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ albumId, imageData }) =>
      uploadAlbumImage(albumId, imageData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["photos"] });
      dispatch(setCreateImageFormOpen());
    },
  });

  const handleImageFormSubmit = async (e) => {
    e.preventDefault();

    const imageData = new FormData();
    imageData.append("image", imageUrl);

    mutation.mutate({ albumId, imageData });
  };

  return (
    <Dialog
      open={isCreateImageFormOpen}
      onOpenChange={(value) => dispatch(setCreateImageFormOpen(value))}
    >
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleImageFormSubmit}>
          <DialogHeader className="mb-6">
            <DialogTitle>Upload Image</DialogTitle>
          </DialogHeader>

          <FieldGroup className="mb-5">
            <Field className="gap-1">
              <label className="flex items-center justify-center border-2 border-dashed hover:border-blue-500 rounded-xl h-40 cursor-pointer overflow-hidden">
                <Input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setImageUrl(file);
                    setPreview(URL.createObjectURL(file));
                  }}
                />
                {!preview && (
                  <div className="flex flex-col items-center justify-center opacity-50">
                    <CloudUpload size={38} />
                    <span>Click to upload image</span>
                  </div>
                )}
                {preview && (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                )}
              </label>
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" variant="primary" className="rounded-lg">
              {mutation.isPending ? "Uploading" : "Upload Image"}
              {mutation.isPending && <Spinner className="w-4 h-4" />}{" "}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
