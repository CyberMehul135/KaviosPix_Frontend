import EmptyUi from "@/components/common/EmptyUi";
import { GridLayoutLoading } from "../loaders/GridLayoutLoading";

export default function GridLayout({ data, loading, err }) {
  if (loading) return <GridLayoutLoading />;
  if (err) return <p>Error... {err.message}</p>;
  if (data?.success) {
    return (
      <>
        {data.data.images && data.data.images.length > 0 ? (
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4`}
          >
            {data.data.images.map((image) => (
              <div
                className="rounded-lg overflow-hidden group relative"
                key={image._id}
              >
                <div className={"aspect-square"}>
                  <img
                    src={image.imageUrl}
                    alt={image.name}
                    className={`w-full h-full transition-all ease-in duration-200 object-cover group-hover:scale-110`}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyUi />
        )}
      </>
    );
  }
}
