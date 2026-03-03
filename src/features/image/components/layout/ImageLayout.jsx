import { useSelector } from "react-redux";
import GridLayout from "./GridLayout";
import MasonryLayout from "./MasonryLayout";

export default function ImageLayout({ data, loading, err }) {
  const { isImageLayoutGrid } = useSelector((state) => state.image);
  return (
    <>
      {isImageLayoutGrid ? (
        <GridLayout data={data} loading={loading} err={err} />
      ) : (
        <MasonryLayout data={data} loading={loading} err={err} />
      )}
    </>
  );
}
