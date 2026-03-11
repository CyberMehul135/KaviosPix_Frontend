import { getAlbumImages } from "@/features/image/image.service";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCreateImageFormOpen } from "@/features/image/imageSlice";
import Header from "@/components/common/Header";
import ImageList from "../components/ImageList";
import ImageForm from "../components/ImageForm";
import TagSelector from "@/components/common/TagSelector";

export default function Album() {
  const dispatch = useDispatch();
  const { selectedTags } = useSelector((state) => state.image);

  const { albumId } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["photos", albumId, selectedTags],
    queryFn: () => getAlbumImages(albumId, selectedTags.join(",")),
    staleTime: 10000,
  });

  return (
    <>
      <Header
        title={data?.data?.name}
        description={data?.data?.description}
        label="Add Photos"
        icon={Plus}
        onBtnClick={() => dispatch(setCreateImageFormOpen(albumId))}
      />

      <TagSelector data={data} />

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
