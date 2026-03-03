import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate, useParams } from "react-router-dom";

export function ImageSlider({ data, loading, err }) {
  const { albumId, imageId } = useParams();

  const images = data?.data?.images || [];
  const currentIndex = images.findIndex((img) => img._id === imageId);

  const [api, setApi] = React.useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      const nextImage = images[currentIndex + 1];

      navigate(`/albums/${albumId}/images/${nextImage._id}`, {
        state: { images },
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevImage = images[currentIndex - 1];

      navigate(`/albums/${albumId}/images/${prevImage._id}`, {
        state: { images },
      });
    }
  };

  React.useEffect(() => {
    if (!api) return;
    if (currentIndex >= 0) {
      api.scrollTo(currentIndex);
    }
  }, [api, currentIndex]);

  if (loading) return <p>Loading...</p>;
  if (err) return <p>Error... {err}</p>;
  if (data?.success) {
    return (
      <Carousel
        setApi={setApi}
        className="relative group w-full h-full mx-auto"
      >
        <CarouselContent>
          {data?.data?.images?.map((image, index) => (
            <CarouselItem key={image._id}>
              <div className="p-0">
                <Card>
                  <CardContent className="flex sm:h-[calc(100vh-150px)] items-center justify-center p-0 overflow-hidden">
                    <img src={image.imageUrl} alt={image.name} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 text-white backdrop-blur-sm"
        />

        <CarouselNext
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 text-white backdrop-blur-sm"
        />
      </Carousel>
    );
  }
}
