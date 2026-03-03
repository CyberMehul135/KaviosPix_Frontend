import { getAlbumImages } from "@/features/image/image.service";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCreateImageFormOpen } from "@/features/image/imageSlice";
import Header from "@/components/common/Header";
import ImageList from "../components/ImageList";
import ImageForm from "../components/ImageForm";

export default function Album() {
  const dispatch = useDispatch();

  const { albumId } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["photos", albumId],
    queryFn: () => getAlbumImages(albumId),
    staleTime: 10000,
  });

  console.log(data);

  return (
    <>
      <Header
        title={data?.data?.name}
        description={data?.data?.description}
        label="Add Photos"
        icon={Plus}
        onBtnClick={() => dispatch(setCreateImageFormOpen(albumId))}
      />

      <ImageList
        data={data}
        loading={isLoading}
        err={error}
        albumId={albumId}
      />
      <ImageForm />
    </>
  );
}
