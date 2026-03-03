import { useParams } from "react-router-dom";
import { ImageSlider } from "../components/ImageSlider";
import { useQuery } from "@tanstack/react-query";
import { getAlbumImages } from "@/features/image/image.service";
import { CommentsPanel } from "../components/CommentsPannel";
import ImageDetails from "../components/ImageDetails";

export default function AlbumImage() {
  const { albumId, imageId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["photos"],
    queryFn: () => getAlbumImages(albumId),
    staleTime: 1000,
  });

  const images = data?.data?.images || [];
  const currentImage = images.find((img) => img._id === imageId);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-8 max-lg:col-span-12 sm:h-[calc(100vh-88px)]">
        <ImageSlider data={data} loading={isLoading} err={error} />
      </div>

      <div className="col-span-4 max-lg:col-span-12 lg:h-[calc(100vh-100px)]">
        <CommentsPanel comments={currentImage?.comments} />
      </div>

      <div className=" col-span-8 max-lg:col-span-12">
        <ImageDetails currentImage={currentImage} data={data} />
      </div>
    </div>
  );
}
