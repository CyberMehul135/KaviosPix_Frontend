import Header from "@/components/common/Header";
import { getAllImages } from "@/features/image/image.service";
import { useQuery } from "@tanstack/react-query";
import ImageLayout from "../components/layout/ImageLayout";

export default function Images() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["images"],
    queryFn: getAllImages,
    staleTime: 10000,
  });

  return (
    <div>
      <Header
        title={`All Images`}
        description="Images"
        descriptionValue={data?.data?.images?.length}
        imageLayout={true}
      />

      <ImageLayout data={data} loading={isLoading} err={error} />
    </div>
  );
}
