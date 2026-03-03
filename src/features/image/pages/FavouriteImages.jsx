import Header from "@/components/common/Header";
import { useQuery } from "@tanstack/react-query";
import { getAllfavouriteImages } from "../image.service";
import ImageLayout from "../components/layout/ImageLayout";

export default function FavouriteImages() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["favouriteImages"],
    queryFn: getAllfavouriteImages,
    staleTime: 10000,
  });

  return (
    <>
      <Header
        title="Favourite Images"
        description="Favourite photos"
        descriptionValue={data?.data?.images?.length}
        imageLayout={true}
      />

      <ImageLayout data={data} loading={isLoading} err={error} />
    </>
  );
}
