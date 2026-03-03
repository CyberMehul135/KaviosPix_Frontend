import EmptyUi from "@/components/common/EmptyUi";
import { MasonryLayoutLoading } from "../loaders/MasonryLayoutLoading";

export default function MasonryLayout({ data, loading, err }) {
  if (loading) return <MasonryLayoutLoading />;
  if (err) return <p>Error... {err.message}</p>;
  if (data?.success) {
    return (
      <>
        {data.data.images && data.data.images.length > 0 ? (
          <div
            className={`columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4`}
          >
            {data.data.images.map((image) => (
              <div className="rounded-lg overflow-hidden" key={image._id}>
                <img
                  src={image.imageUrl}
                  alt={image.name}
                  className={`w-full transition-all ease-in duration-200 hover:scale-105`}
                />
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
